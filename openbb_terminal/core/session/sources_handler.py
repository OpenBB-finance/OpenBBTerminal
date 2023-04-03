import json
from pathlib import Path
from typing import Dict

from openbb_terminal.core.models.sources_model import flatten, read_default_sources
from openbb_terminal.core.sources.utils import generate_sources_dict


def read_sources(path: Path) -> Dict:
    """Read sources from file.

    Parameters
    ----------
    path : str
        Path to file

    Returns
    -------
    Dict
        Dictionary with sources
    """
    try:
        with open(path) as file:
            return flatten(json.load(file))
    except Exception as e:
        print(f"\nFailed to read data sources file: {path}\n{e}\n")
        print("Using OpenBB defaults.")
        return read_default_sources()


def write_sources(cmd, defaults, path: Path):
    try:
        with open(path, "w") as f:
            json.dump(generate_sources_dict({cmd: defaults}), f, indent=4)
    except Exception as e:
        print(f"\nFailed to write data sources file: {path}\n{e}\n")
