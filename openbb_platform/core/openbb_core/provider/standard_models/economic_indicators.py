"""Economic Indicators Standard Model."""

from datetime import date as dateType
from typing import Optional, Union

from pydantic import Field, field_validator

from openbb_core.provider.abstract.data import Data
from openbb_core.provider.abstract.query_params import QueryParams
from openbb_core.provider.utils.descriptions import (
    DATA_DESCRIPTIONS,
    QUERY_DESCRIPTIONS,
)


class EconomicIndicatorsQueryParams(QueryParams):
    """Economic Indicators Query."""

    symbol: str = Field(
        description=QUERY_DESCRIPTIONS.get("symbol", "")
        + " The base symbol for the indicator (e.g. GDP, CPI, etc.).",
    )
    country: Optional[str] = Field(
        default=None,
        description=QUERY_DESCRIPTIONS.get("country", "")
        + " The country represented by the indicator, if available.",
    )
    start_date: Optional[dateType] = Field(
        description=QUERY_DESCRIPTIONS.get("start_date", ""), default=None
    )
    end_date: Optional[dateType] = Field(
        description=QUERY_DESCRIPTIONS.get("end_date", ""), default=None
    )

    @field_validator("symbol", mode="before", check_fields=False)
    @classmethod
    def to_upper(cls, v: str) -> str:
        """Convert field to uppercase."""
        return v.upper()


class EconomicIndicatorsData(Data):
    """Economic Indicators Data."""

    date: dateType = Field(description=DATA_DESCRIPTIONS.get("date", ""))
    symbol: Optional[str] = Field(
        default=None, description=DATA_DESCRIPTIONS.get("symbol", "")
    )
    country: Optional[str] = Field(
        default=None, description="The country represented by the data."
    )
    value: Optional[Union[int, float]] = Field(
        default=None, description=DATA_DESCRIPTIONS.get("value", "")
    )
