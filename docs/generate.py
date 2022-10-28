from typing import Callable, Any, Optional, List, Tuple, Dict
from inspect import signature
import importlib
import os
from ruamel.yaml import YAML

from openbb_terminal.sdk import functions

# NOTE: The main.yml and documentation _index.md files are automaticallty overridden
# every time this is ran. Folder level _index.md files are NOT overridden after creation

yaml = YAML()
yaml.indent(mapping=2, sequence=4, offset=2)


def all_functions() -> List[Tuple[str, str, Callable[..., Any]]]:
    """Uses the base SDK functions dictionary to get a list of all functions we have linked
    in our SDK.

    Returns
    ----------
    func_list: List[Tuple[str, str, Callable[..., Any]]]
        A list of functions organized as (path_to_func, view/model, the_function)
    """
    func_list = []
    for key, sub_dict in functions.items():
        for sub_key, item_path in sub_dict.items():
            full_path = item_path.split(".")
            module_path = ".".join(full_path[:-1])
            module = importlib.import_module(module_path)
            target_function = getattr(module, full_path[-1])
            func_list.append((key, sub_key, target_function))
    return func_list


def groupby(orig_list: List[Any], index: int) -> Dict[Any, Any]:
    """Groups a list of iterable by the index provided

    Parameters
    ----------
    orig_list: List[Any]
        A list of iterables
    index: int
        The index to groupby

    Returns
    ----------
    grouped: dict[Any, Any]
        Group information where keys are the groupby item and values are the iterables
    """
    grouped: Dict[Any, Any] = {}
    for item in orig_list:
        if item[index] in grouped:
            grouped[item[index]].append(item)
        else:
            grouped[item[index]] = [item]
    return grouped


def generate_documentation(
    base: str, key: str, value: List[Tuple[str, str, Callable[..., Any]]]
):

    models = list(filter(lambda x: x[1] == "model", value))
    views = list(filter(lambda x: x[1] == "view", value))
    model_type = Optional[Tuple[str, str, Callable[..., Any]]]
    model: model_type = models[0] if models else None
    view: model_type = views[0] if views else None
    for end in key.split("."):
        base += f"/{end}"
        if not os.path.isdir(base):
            os.mkdir(base)

    # Locate elements of interest in docstring
    docstring = model[2].__doc__

    parameters_anchor = "Parameters\n    ----------\n"
    parameters_position = docstring.find(parameters_anchor)

    returns_anchor = "Returns\n    -------\n"
    returns_position = docstring.find(returns_anchor)
    if returns_position < 0:
        returns_position = len(docstring)

    examples_anchor = "Examples\n    --------\n"
    examples_position = docstring.find(examples_anchor)
    if examples_position < 0:
        examples_position = len(docstring)

    with open(f"{base}/_index.rst", "w") as f:
        f.write(".. role:: python(code)\n    :language: python\n    :class: highlight")
        f.write("\n\n|\n\n")

        if model:

            # Summary
            summary = "> " + docstring[:parameters_position].strip() + "\n"
            f.write(summary)
            f.write("-" * len(summary) + "\n")

            # Signature
            original_sig = str(signature(model[2]))
            new_signature = original_sig

            if view:
                f.write(
                    "To obtain charts, make sure to add :python:`chart = True` as the last parameter\n\n"
                )

                # TODO: This breaks if there is a ')' inside the function arguments
                idx = original_sig.find(")")
                new_signature = (
                    original_sig[:idx] + ", chart = False" + original_sig[idx:]
                )

            f.write("{{< highlight python >}}")
            f.write("\n")
            f.write(f"{key}{new_signature}")
            f.write("\n")
            f.write("{{< /highlight >}}")
            f.write("\n")

            # Parameters
            if parameters_position != len(docstring):

                parameters = docstring[
                    parameters_position + len(parameters_anchor) : returns_position
                ]

                f.write("\n* **Parameters**\n\n")
                f.write(parameters)

            # Returns
            if returns_position != len(docstring):

                returns = docstring[
                    returns_position + len(returns_anchor) : examples_position
                ]

                f.write("\n* **Returns**\n\n")
                f.write(returns)

            # Examples
            if examples_position != len(docstring):

                examples = docstring[examples_position + len(examples_anchor) :]

                f.write("\n* **Examples**\n\n")
                f.write("    {{< highlight python >}}")
                f.write("\n")
                f.write(examples)
                f.write("{{< /highlight >}}")


def find_line(path: str, to_match: str) -> int:
    """Returns the file line of a string based on given file path"""
    with open(path) as file:
        for i, line in enumerate(file):
            if to_match in line:
                return i
    return -1


def delete_lines(path: str, start: int):
    """Deletes all file lines after a given number"""

    with open(path, "r+") as file:
        lines = file.readlines()
        file.seek(0)
        file.truncate()

        for i, line in enumerate(lines):
            if i <= start:
                file.write(line)


def delete_line(path: str, to_delete: int):
    """Deletes single file lines after a given number"""

    with open(path, "r+") as file:
        lines = file.readlines()
        file.seek(0)
        file.truncate()

        for i, line in enumerate(lines):
            if i != to_delete:
                file.write(line)


def crawl_folders(root: str) -> list:
    """Crawls created folders to get a list of what has been created"""
    target = "website/content/"
    ignore_length = root.index(target) + len(target)
    return [
        [path[ignore_length:], sorted(dirs)] for path, dirs, _ in os.walk(root) if dirs
    ]


def filter_dict(sub_dict, target: str):
    return sub_dict["name"] == target


def set_items(the_dict, path: str, subs):
    """Sets the sub items inside dictionaries"""
    temp_loc = the_dict["sub"]
    new_path = path[4:]
    for sub_path in new_path.split("/"):
        # pylint: disable=cell-var-from-loop
        if "sub" in temp_loc:
            temp_filter = filter(lambda x: filter_dict(x, sub_path), temp_loc["sub"])
        else:
            temp_filter = filter(lambda x: filter_dict(x, sub_path), temp_loc)
        temp_loc = list(temp_filter)[0]
    temp_loc["sub"] = []
    for sub in subs:
        temp_loc["sub"].append({"name": sub, "ref": f"/{path}/{sub}"})
    return the_dict


def generate_dict(paths: List):
    """Generates the dictionary that will be saved as YAML"""
    final_dict: Dict[str, Any] = {}
    added_paths = []
    for path, subs in paths:
        if not final_dict and path == "SDK":
            final_dict = {"name": "SDK", "ref": "/SDK", "sub": []}
            for sub in subs:
                final_dict["sub"].append({"name": sub, "ref": f"/{path}/{sub}"})
            added_paths.append("SDK")
        if path not in added_paths:
            final_dict = set_items(final_dict, path, subs)
            added_paths.append(path)
    return final_dict


def folder_documentation(path: str):
    name = path.split("/")[-1]
    local_path = os.path.realpath(f"./website/content/{path}")
    full_path = local_path + "/_index.md"
    if not os.path.exists(full_path):
        with open(full_path, "w") as f:
            f.write(f"---\ntitle: {name}\n")
            f.write('keywords: ""\nexcerpt: ""\n')
            f.write("geekdocCollapseSection: true\n")
            f.write("---\n")


if __name__ == "__main__":
    print(
        "Warning: files created in same session are not added to the yaml."
        " To remedy this run this script twice in a row"
    )
    base_folder_path = os.path.realpath("./website/content/SDK")
    if not os.path.exists(base_folder_path):
        os.mkdir(base_folder_path)
    target_path = os.path.realpath("./website/data/menu/main.yml")
    main_path = os.path.realpath("./website/content/SDK")
    folder_list = crawl_folders(main_path)
    for folder_path in [x[0] for x in folder_list]:
        folder_documentation(folder_path)
    funcs = all_functions()
    grouped_funcs = groupby(funcs, 0)
    # Create the documentation files
    for k, v in grouped_funcs.items():
        generate_documentation(base_folder_path, k, v)
        exit()
    # Delete our old entry to main.yaml
    start_line = find_line(target_path, "# CODE BELOW THIS WILL BE DELETED FREQUENTLY")
    delete_lines(target_path, start_line)
    # Add our new entry to main.yaml
    folders_dict = generate_dict(folder_list)
    with open(target_path, "a") as fp:
        yaml.dump({"ignore": [folders_dict]}, fp)
    delete_line(target_path, start_line + 1)
