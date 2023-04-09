import json
from typing import Dict, List

from pydantic.dataclasses import Field, dataclass

from openbb_terminal.core.config.paths import DATA_SOURCES_DEFAULT_FILE
from openbb_terminal.core.models.base_model import BaseModel
from openbb_terminal.core.sources.utils import flatten

# pylint: disable=useless-parent-delegation


def read_default_sources() -> Dict:
    """Read default sources from file.

    Returns
    -------
    Dict
        Dictionary with sources
    """
    try:
        with open(DATA_SOURCES_DEFAULT_FILE) as file:
            return flatten(json.load(file))
    except Exception as e:
        print(
            f"\nFailed to read data sources file: "
            f"{DATA_SOURCES_DEFAULT_FILE}\n{e}\n"
        )
        return {}


@dataclass(config=dict(validate_assignment=True))
class SourcesModel(BaseModel):
    """Model for sources."""

    ALLOWED: Dict[str, List[str]] = Field(
        default_factory=lambda: read_default_sources(),
    )
    available_sources: Dict[str, List[str]] = ALLOWED

    def __repr__(self):
        return super().__repr__()

    def get_allowed(self):
        return self.ALLOWED
