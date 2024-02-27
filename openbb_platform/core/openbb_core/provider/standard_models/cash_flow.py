"""Cash Flow Statement Standard Model."""

from datetime import date as dateType
from typing import Optional

from pydantic import Field, NonNegativeInt, field_validator

from openbb_core.provider.abstract.data import Data
from openbb_core.provider.abstract.query_params import QueryParams
from openbb_core.provider.utils.descriptions import QUERY_DESCRIPTIONS


class CashFlowStatementQueryParams(QueryParams):
    """Cash Flow Statement Query."""

    symbol: str = Field(description=QUERY_DESCRIPTIONS.get("symbol", ""))
    period: str = Field(
        default="annual",
        description=QUERY_DESCRIPTIONS.get("period", ""),
    )
    limit: Optional[NonNegativeInt] = Field(
        default=5, description=QUERY_DESCRIPTIONS.get("limit", "")
    )

    @field_validator("symbol", mode="before", check_fields=False)
    @classmethod
    def upper_symbol(cls, v: str):
        """Convert symbol to uppercase."""
        return v.upper()


class CashFlowStatementData(Data):
    """Cash Flow Statement Data."""

    period_ending: dateType = Field(description="The end date of the reporting period.")
    fiscal_period: Optional[str] = Field(
        description="The fiscal period of the report.", default=None
    )
    fiscal_year: Optional[int] = Field(
        description="The fiscal year of the fiscal period.", default=None
    )
    purchase_of_investment_securities: Optional[float] = Field(
        default=None, description="Purchase of Investment Securities"
    )
    net_cash_from_operating_activities: Optional[float] = Field(
        default=None,
        description="Net cash from operating activities.",
    )
    purchase_of_property_plant_and_equipment: Optional[float] = Field(
        default=None,
        description="Purchase of property, plant and equipment.",
    )
