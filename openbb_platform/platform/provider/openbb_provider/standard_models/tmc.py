"""Treasury Constant Maturity Model."""
from datetime import (
    date as dateType,
)
from typing import Literal, Optional

from openbb_core.provider.abstract.data import Data
from openbb_core.provider.abstract.query_params import QueryParams
from openbb_core.provider.utils.descriptions import (
    DATA_DESCRIPTIONS,
    QUERY_DESCRIPTIONS,
)
from pydantic import Field


class TreasuryConstantMaturityQueryParams(QueryParams):
    """Treasury Constant Maturity Query."""

    start_date: Optional[dateType] = Field(
        default=None,
        description=QUERY_DESCRIPTIONS.get("start_date", ""),
    )
    end_date: Optional[dateType] = Field(
        default=None,
        description=QUERY_DESCRIPTIONS.get("end_date", ""),
    )
    maturity: Optional[Literal["3m", "2y"]] = Field(
        default="3m",
        description="The maturity",
    )


class TreasuryConstantMaturityData(Data):
    """Treasury Constant Maturity Data."""

    date: dateType = Field(description=DATA_DESCRIPTIONS.get("date", ""))
    rate: Optional[float] = Field(description="TreasuryConstantMaturity Rate.")
