import csv
import glob
import importlib
import inspect
import os
import re
import subprocess
from pathlib import Path
from types import FunctionType
from typing import Any, Dict, List, Optional, TextIO

import pandas as pd

from openbb_terminal.rich_config import console
from openbb_terminal.sdk_core.sdk_helpers import clean_attr_desc, get_sdk_imports_text
from openbb_terminal.sdk_core.sdk_init import FORECASTING, OPTIMIZATION

REPO_ROOT = Path(__file__).parent.joinpath("openbb_terminal").resolve()

sub_names = {
    "defi": "DeFi",
    "disc": "Discovery",
    "dd": "Due Diligence",
    "onchain": "OnChain",
    "ov": "Overview",
    "keys": "Keys",
    "forecast": "Forecasting",
    "alt": "Alternative",
    "crypto": "Cryptocurrency",
    "ba": "Behavioral Analysis",
    "ca": "Comparison Analysis",
    "dps": "Darkpool Shorts",
    "po": "Portfolio Optimization",
    "qa": "Quantitative Analysis",
    "screener": "Screener",
    "sia": "Sector Industry Analysis",
    "ta": "Technical Analysis",
    "th": "Trading Hours",
    "fa": "Fundamental Analysis",
    "Oss": "Open Source Software",
    "funds": "Mutual Funds",
    "gov": "Government",
    "ins": "Insiders",
    "nft": "NFT",
}


sdk_openbb_var = """
class SDKLogger:
    def __init__(self):
        self.__suppress_logging = check_suppress_logging(suppress_dict=SUPPRESS_LOGGING_CLASSES)
        self.__check_initialize_logging()

    def __check_initialize_logging(self):
        if not self.__suppress_logging:
            self.__initialize_logging()

    @staticmethod
    def __initialize_logging():
        cfg.LOGGING_SUB_APP = "sdk"
        setup_logging()
        log_all_settings()


openbb = OpenBBSDK()\r\r
"""

disable_lines = "# flake8: noqa\r# pylint: disable=C0301,R0902,R0903\r"


class FuncAttr:
    def __init__(self, func: str):
        self.short_doc: Optional[str] = None
        self.long_doc: Optional[str] = None
        self.func_def: Optional[str] = None
        self.path: Optional[str] = None
        self.lineon: Optional[int] = None
        self.full_path: Optional[str] = None
        self.func_unwrapped: Optional[FunctionType] = None
        self.func_wrapped: Optional[FunctionType] = None
        self.get_func_attrs(func)

    def get_func_attrs(self, func: str) -> None:
        attr = getattr(
            importlib.import_module("openbb_terminal.sdk_core.sdk_init"),
            func.split(".")[0],
        )
        func_attr = getattr(attr, func.split(".")[1])
        self.func_wrapped = func_attr

        add_juan = 0
        if hasattr(func_attr, "__wrapped__"):
            while hasattr(func_attr, "__wrapped__"):
                func_attr = func_attr.__wrapped__
            add_juan = 1

        self.func_unwrapped = func_attr
        self.lineon = inspect.getsourcelines(func_attr)[1] + add_juan

        self.func_def = self.get_definition()
        self.long_doc = func_attr.__doc__
        self.short_doc = clean_attr_desc(func_attr)

        self.path = inspect.getfile(func_attr)
        full_path = (
            inspect.getfile(func_attr).replace("\\", "/").split("openbb_terminal/")[1]
        )
        self.full_path = f"openbb_terminal/{full_path}"

    def get_definition(self) -> str:
        """Creates the function definition to be used in SDK docs."""
        funcspec = inspect.getfullargspec(self.func_unwrapped)

        definition = ""
        added_comma = False
        for arg in funcspec.args:
            annotation = (
                funcspec.annotations[arg] if arg in funcspec.annotations else "Any"
            )
            if arg in funcspec.annotations:
                annotation = (
                    str(annotation)
                    .replace("<class '", "")
                    .replace("'>", "")
                    .replace("typing.", "")
                    .replace("pandas.core.frame.", "pd.")
                    .replace("pandas.core.series.", "pd.")
                    .replace("openbb_terminal.portfolio.", "")
                )
            definition += f"{arg}: {annotation}, "
            added_comma = True

        if added_comma:
            definition = definition[:-2]

        return_def = (
            funcspec.annotations["return"].__name__
            if "return" in funcspec.annotations
            and hasattr(funcspec.annotations["return"], "__name__")
            and funcspec.annotations["return"] is not None
            else "None"
        )
        definition = (
            f"def {self.func_unwrapped.__name__}({definition }) -> {return_def}"
        )
        return definition


class Trailmap:
    def __init__(self, trailmap: str, model: str, view: Optional[str] = None):
        tmap = trailmap.split(".")
        if len(tmap) == 1:
            tmap = ["root", tmap[0]]
        self.class_attr: str = tmap.pop(-1)
        self.location_path = tmap
        self.model = model
        self.view = view if view else None
        self.view_name = "_chart"
        self.model_func: Optional[str] = f"lib.{model}" if model else None
        self.view_func: Optional[str] = f"lib.{view}" if view else None
        self.func_attrs: Dict[str, FuncAttr] = {}
        if model:
            self.func_attrs["model"] = FuncAttr(self.model)
        if view:
            self.func_attrs["view"] = FuncAttr(self.view)


class BuildCategoryModelClasses:
    def __init__(self, trailmaps: List[Trailmap]) -> None:
        self.trailmaps = trailmaps
        self.categories: Dict[str, Any] = {}
        self.import_modules: Dict[str, Any] = {}
        self.root_modules: Dict[str, Any] = {}
        self.import_cat_class = (
            "from openbb_terminal.sdk_core.sdk_helpers import Category\r"
        )

        for tmap in self.trailmaps:
            local = tmap.location_path
            self.categories = self.add_todict(self.categories, local, tmap)

        for folder in ["models", "controllers"]:
            if not os.path.exists(REPO_ROOT / f"sdk_core/{folder}"):
                os.makedirs(REPO_ROOT / f"sdk_core/{folder}")
            if not os.path.exists(REPO_ROOT / f"sdk_core/{folder}/__init__.py"):
                with open(REPO_ROOT / f"sdk_core/{folder}/__init__.py", "w") as f:
                    f.write(
                        "# flake8: noqa\r# pylint: disable=unused-import,wrong-import-order\r\r"
                    )

        if not os.path.exists(REPO_ROOT / "sdk_core/__init__.py"):
            with open(REPO_ROOT / "sdk_core/__init__.py", "w") as f:
                f.write("")

    def add_todict(self, d: dict, location_path: list, tmap: Trailmap) -> dict:
        """Adds the trailmap to the dictionary. A trailmap is a path to a function
        in the sdk. This function creates the dictionary paths to the function."""

        if location_path[0] not in d:
            d[location_path[0]] = {}

        if len(location_path) > 1:
            self.add_todict(d[location_path[0]], location_path[1:], tmap)
        else:
            d[location_path[0]][tmap.class_attr] = tmap

        return d

    def get_nested_dict(self, d: dict) -> dict:
        """Gets the nested dictionary of the category."""
        nested_dict = {}
        for k, v in d.items():
            if isinstance(v, dict):
                nested_dict[k] = self.get_nested_dict(v)
        return nested_dict

    def get_subcat_fullname(self, cat: str) -> str:
        """Gets the full category name from the shortened category name."""
        if cat in sub_names:
            return sub_names[cat]
        return cat.title().replace(" ", "")

    def check_submodules(self, category: str) -> bool:
        """Checks if a category has submodules."""
        for d in self.categories[category].values():
            if isinstance(d, dict):
                return True
        return False

    def write_init_imports(self, importstr: str, filestr: str) -> None:
        """Checks if a category has submodules and adds the imports to the init file."""
        regex = re.compile(importstr)
        with open(REPO_ROOT / filestr) as init_file:
            check_init = bool(regex.search(init_file.read()))
            if not check_init:
                with open(REPO_ROOT / filestr, "a") as init_file:
                    init_file.write(f"{importstr}\r")

    def write_sdk_class(
        self, category: str, f: TextIO, cls_type: Optional[str] = ""
    ) -> None:
        """Writes the sdk class to the file.

        Parameters
        ----------
        category : str
            The category name.
        f : TextIO
            The file to write to.
        cls_type : Optional[str], optional
            The class type, by default ""
        """
        if category in self.root_modules:
            class_name = f"{category.title()}{cls_type}(model.{category.title()}Root)"
        else:
            class_name = f"{category.title()}{cls_type}"
        f.write(
            f'class {class_name}:\r    """OpenBB SDK {self.get_subcat_fullname(category)} Module.\r'
        )

    def write_class_property(
        self, category: str, f: TextIO, subcat: Optional[str] = ""
    ) -> None:
        """Writes the class property to the file.

        Parameters
        ----------
        category : str
            The category name.
        f : TextIO
            The file to write to.
        subcat : Optional[str], optional
            The subcategory name, by default None
        """
        def_name = category if not subcat else subcat
        if subcat:
            subcat = f" {self.get_subcat_fullname(subcat)}"
        f.write(
            f"    @property\r    def {def_name}(self):\r        "
            f'"""OpenBB SDK {category.title()}{subcat} Submodule\r'
        )

    def write_class_attr_docs(
        self, d: dict, f: TextIO, module: bool = True, sdk_root: bool = False
    ) -> None:
        """Writes the class attribute docs to the category file.

        Parameters
        ----------
        d : dict
            The dictionary of the category.
        f : TextIO
            The file to write to.
        module : bool, optional
            If the category is a module, by default True
        sdk_root : bool, optional
            If this is the sdk root file, by default False
        """
        add_indent = "" if module else "    "
        added_attributes = False

        for v in d.values():
            if isinstance(v, Trailmap):
                if not added_attributes:
                    f.write(f"\r{add_indent}    Attributes:\r")
                    added_attributes = True

                for key in ["model", "view"]:
                    if v.func_attrs.get(key, None) and v.func_attrs[key].short_doc:
                        view = v.view_name if key == "view" else ""
                        f.write(
                            f"{add_indent}        `{v.class_attr}{view}`: {v.func_attrs[key].short_doc}\\n\r"
                        )

        if module:
            f.write('    """\r\r    def __init__(self):\r        super().__init__()\r')
        elif sdk_root:
            f.write('    """\r\r    def __init__(self):\r        SDKLogger()\r')
        else:
            f.write(f'{add_indent}    """\r\r')

    def write_class_attributes(
        self, d: dict, f: TextIO, cat: Optional[str] = None
    ) -> None:
        """Writes the class attributes to the category file.

        Parameters
        ----------
        d : dict
            The dictionary of the category.
        f : TextIO
            The file to write to.
        """
        add_indent = ""
        if cat == "forecast":
            f.write(
                "        if not lib.FORECASTING:\r            raise NotImplementedError("
                "'Forecasting is not enabled in your OpenBB installation. To enable, "
                '`pip install pip install "openbb[all]"`\')\r'
            )
            add_indent = "    "
            f.write("        if lib.FORECASTING:\r")
        if cat == "po":
            f.write(
                "        if not lib.OPTIMIZATION:\r            raise NotImplementedError("
                "'Optimization is not enabled in your OpenBB installation. To enable, "
                '`pip install pip install "openbb[all]"`\')\r'
            )
            add_indent = "    "
            f.write("        if lib.OPTIMIZATION:\r")

        for v in d.values():
            if isinstance(v, Trailmap):
                for attr, func in zip(["", v.view_name], [v.model_func, v.view_func]):
                    if func:
                        f.write(
                            f"{add_indent}        self.{v.class_attr}{attr} = {func}\r"
                        )
        f.write("\r\r")

    def write_category(self, category: str, d: dict, f: TextIO) -> None:
        """Writes the category class to the file

        Parameters
        ----------
        category : str
            The category name
        d : dict
            The category dictionary
        f : TextIO
            The file to write to
        """
        subname = self.get_subcat_fullname(category)

        # If this catergory has no attributes, then we don't write it to the file.
        if not any(isinstance(v, Trailmap) for v in d.values()):
            return

        self.root_modules[category] = f"{category.title().replace(' ', '')}Root"

        f.write(f"class {self.root_modules[category]}(Category):\r")
        f.write(f'    """OpenBB SDK {subname.title()} Module\r')

        self.write_class_attr_docs(d, f)
        self.write_class_attributes(d, f, category)

    def write_nested_category(self, category: str, d: dict, f: TextIO) -> None:
        """Writes the nested category classes.

        Parameters
        ----------
        category : str
            The category name
        d : dict
            The category dictionary
        f : TextIO
            The file to write to
        """
        for nested_category, nested_dict in d.items():
            if isinstance(nested_dict, Trailmap):
                continue
            subname = self.get_subcat_fullname(nested_category)

            class_name = f"{category.title()}{subname.replace(' ', '')}(Category)"
            f.write(f'class {class_name}:\r    """OpenBB SDK {subname} Module.\r')

            self.write_nested_submodule_docs(nested_dict, f)

            if isinstance(nested_dict, dict):
                self.write_class_attr_docs(nested_dict, f)
                self.write_class_attributes(nested_dict, f, nested_category)

    def write_submodule_doc(
        self, k: str, f: TextIO, added: bool = False, indent: bool = False
    ) -> None:
        """Writes the submodules to the class docstring.

        Parameters
        ----------
        d : dict
            The category dictionary
        f : TextIO
            The file to write to
        added : bool, optional
            Whether or not "Submodules:" have been added to the docstring, by default False
        indent : bool, optional
            Whether or not to add an indent to the docstring, by default False
        """
        add_indent = "    " if indent else ""
        if not added:
            f.write("\r        Submodules:\r")
        subcat_name = self.get_subcat_fullname(k)
        f.write(f"{add_indent}        `{k}`: {subcat_name} Module\r")

    def write_nested_submodule_docs(
        self, nested_dict: dict, f: TextIO, indent: bool = False
    ) -> None:
        """Writes the nested submodule docs to the class docstring.

        Parameters
        ----------
        nested_dict : dict
            The nested dictionary
        f : TextIO
            The file to write to
        indent : bool, optional
            Whether or not to add an indent to the docstring, by default False
        """
        added = False
        nested_subcat = self.get_nested_dict(nested_dict)
        if nested_subcat:
            for k in nested_subcat:
                if isinstance(nested_dict[k], Trailmap):
                    continue
                self.write_submodule_doc(k, f, added, indent)
                if not added:
                    added = True

    def write_category_file(self, category: str, d: dict) -> None:
        """Writes the category file. This is the file that contains the categories
        and subcategories of the sdk.

        Parameters
        ----------
        category : str
            The category name
        d : dict
            The category dictionary
        """
        with open(REPO_ROOT / f"sdk_core/models/{category}_sdk_model.py", "w") as f:
            import_cat_class = self.import_cat_class
            if category in self.root_modules:
                import_cat_class = ""
                category = self.root_modules[category]

            f.write(
                f"{disable_lines}{import_cat_class}import openbb_terminal.sdk_core.sdk_init as lib\r\r\r"
            )
            if category not in self.root_modules and any(
                isinstance(v, Trailmap) for v in d.values()
            ):
                self.write_init_imports(
                    f"from .{category}_sdk_model import {category.title()}Root",
                    "sdk_core/models/__init__.py",
                )

            self.write_category(category, d, f)
            self.write_nested_category(category, d, f)

            f.seek(f.tell() - 2, os.SEEK_SET)
            f.truncate()

    def write_sdk_controller_file(self, category: str, d: dict) -> None:
        """Writes the sdk controller file. This is the file that contains the
        controller classes for the sdk.

        Parameters
        ----------
        category : str
            The category name
        d : dict
            The category dictionary
        """
        added_init_imports = []
        with open(
            REPO_ROOT / f"sdk_core/controllers/{category}_sdk_controller.py", "w"
        ) as f:
            f.write(
                f"{disable_lines}from openbb_terminal.sdk_core.models "
                f"import {category}_sdk_model as model\r\r\r"
            )

            if category not in added_init_imports and any(
                isinstance(v, dict) for v in d.values()
            ):
                self.write_init_imports(
                    f"from .{category}_sdk_controller import {category.title()}Controller",
                    "sdk_core/controllers/__init__.py",
                )
                added_init_imports.append(category)

            self.write_sdk_class(category, f, "Controller")
            self.write_nested_submodule_docs(self.categories[category], f, True)
            self.write_class_attr_docs(d, f, False)

            for subcategory in self.categories[category]:
                if isinstance(d[subcategory], Trailmap):
                    continue

                self.write_class_property(category, f, subcategory)
                self.write_nested_submodule_docs(d[subcategory], f, True)
                self.write_class_attr_docs(d[subcategory], f, False)
                f.write(
                    f"        return model.{category.title()}"
                    f"{self.get_subcat_fullname(subcategory).replace(' ', '')}()\r\r"
                )

            f.seek(f.tell() - 1, os.SEEK_SET)
            f.truncate()

    def write_sdk_file(self) -> None:
        """Writes the main sdk file. This is the file that we initialize the SDK with openbb."""

        with open(REPO_ROOT / "sdk.py", "w") as f:
            f.write(
                f'{get_sdk_imports_text()}class OpenBBSDK:\r    """OpenBB SDK Class.\r'
            )
            root_attrs = self.categories.pop("root")
            if root_attrs:
                self.write_class_attr_docs(root_attrs, f, False, True)
                self.write_class_attributes(root_attrs, f)

            for category in self.categories:
                self.write_class_property(category, f)
                self.write_nested_submodule_docs(self.categories[category], f, True)
                self.write_class_attr_docs(self.categories[category], f, False)

                if self.check_submodules(category):
                    f.write(f"        return ctrl.{category.title()}Controller()\r\r")
                else:
                    f.write(f"        return model.{self.root_modules[category]}()\r\r")

            f.write("\r".join(sdk_openbb_var.splitlines()))

    def build(self) -> None:
        """Builds the SDK."""
        for path in ["sdk_core/models", "sdk_core/controllers"]:
            for file in (REPO_ROOT / path).glob("*.py"):
                if file.name != "__init__.py":
                    file.unlink()

        for category, d in self.categories.items():
            if isinstance(d, Trailmap) or category == "root":
                continue
            self.write_category_file(category, d)

            if self.check_submodules(category):
                self.write_sdk_controller_file(category, d)
        self.write_sdk_file()

        for path in [
            "sdk.py",
            "sdk_core/*.py",
            "sdk_core/models/*.py",
            "sdk_core/controllers/*.py",
        ]:
            for file in glob.glob(str(REPO_ROOT / path)):
                with open(file, "rb") as f:
                    content = f.read()
                with open(file, "wb") as f:
                    f.write(content.replace(b"\r", b"\n"))

        # We run black to make sure the code is formatted correctly
        subprocess.check_call(["black", "openbb_terminal"])


def get_trailmaps() -> List[Trailmap]:
    trailmaps = []
    with open(REPO_ROOT / "sdk_core/trail_map.csv") as f:
        reader = csv.reader(f)
        next(reader)
        for row in reader:
            trail, model, view = row
            if not FORECASTING and "forecast" in trail:
                console.print(
                    f"[bold red]Forecasting is disabled. {trail} will not be included in the SDK.[/bold red]"
                )
                continue
            if not OPTIMIZATION and "portfolio.po" in trail:
                console.print(
                    f"[bold red]Optimization is disabled. {trail} will not be included in the SDK.[/bold red]"
                )
                continue
            trail_map = Trailmap(trail, model, view)
            trailmaps.append(trail_map)

    return trailmaps


def generate_sdk():
    trailmaps = get_trailmaps()
    BuildCategoryModelClasses(trailmaps).build()
    console.print("[green]SDK Generated Successfully.[/green]")
    return


def sort_csv():
    columns = ["trail", "model", "view"]
    df = pd.read_csv(
        REPO_ROOT / "sdk_core/trail_map.csv", usecols=columns, keep_default_na=False
    )
    df.set_index("trail", inplace=True)
    df.sort_index(inplace=True)
    df.to_csv(REPO_ROOT / "sdk_core/trail_map.csv", index=True)


generate_sdk()
