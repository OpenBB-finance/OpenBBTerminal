"""Share Price Index Standard Model."""

from datetime import date as dateType
from typing import Literal, Optional

from pydantic import Field

from openbb_core.provider.abstract.data import Data
from openbb_core.provider.abstract.query_params import QueryParams
from openbb_core.provider.utils.descriptions import (
    DATA_DESCRIPTIONS,
    QUERY_DESCRIPTIONS,
)


class SharePriceIndexQueryParams(QueryParams):
    """Share Price Index Query."""

    country: str = Field(
        description=QUERY_DESCRIPTIONS.get("country", ""),
        default="united_states",
    )
    frequency: Literal["monthly", "quarter", "annual"] = Field(
        description="Frequency to get share price index for.",
        default="monthly",
        json_schema_extra={"choices": ["monthly", "quarter", "annual"]},
    )
    start_date: Optional[dateType] = Field(
        default=None, description=QUERY_DESCRIPTIONS.get("start_date")
    )
    end_date: Optional[dateType] = Field(
        default=None, description=QUERY_DESCRIPTIONS.get("end_date")
    )


class SharePriceIndexData(Data):
    """Share Price Index Data."""

    date: Optional[dateType] = Field(
        default=None, description=DATA_DESCRIPTIONS.get("date")
    )
    country: Optional[str] = Field(
        default=None,
        description="Country for which interest rate is given",
    )
    value: Optional[float] = Field(
        default=None,
        description="Share price index value.",
    )
