"""Discount Window Primary Credit Rate Fetcher."""


from typing import Any, Dict, List, Literal, Optional

from openbb_fred.utils.fred_base import Fred
from openbb_provider.abstract.fetcher import Fetcher
from openbb_provider.standard_models.dwpcr_rates import (
    DiscountWindowPrimaryCreditRateData,
    DiscountWindowPrimaryCreditRateParams,
)
from pydantic import Field

DWPCR_PARAMETER_TO_FRED_ID = {
    "daily_excl_weekend": "DPCREDIT",
    "monthly": "MPCREDIT",
    "weekly": "WPCREDIT",
    "daily": "RIFSRPF02ND",
    "annual": "RIFSRPF02NA",
}


class FREDDiscountWindowPrimaryCreditRateParams(DiscountWindowPrimaryCreditRateParams):
    """DiscountWindowPrimaryCreditRateParams Query."""

    parameter: Literal[
        "daily_excl_weekend", "monthly", "weekly", "daily", "annual"
    ] = Field(default="daily_excl_weekend", description="FRED series ID of DWPCR data.")


class FREDDiscountWindowPrimaryCreditRateData(DiscountWindowPrimaryCreditRateData):
    """DiscountWindowPrimaryCreditRateParams Data."""

    __alias_dict__ = {"rate": "value"}


class FREDDiscountWindowPrimaryCreditRateFetcher(
    Fetcher[
        FREDDiscountWindowPrimaryCreditRateParams,
        List[Dict[str, List[FREDDiscountWindowPrimaryCreditRateData]]],
    ]
):
    """DiscountWindowPrimaryCreditRateParams Fetcher."""

    data_type = FREDDiscountWindowPrimaryCreditRateData

    @staticmethod
    def transform_query(
        params: Dict[str, Any]
    ) -> FREDDiscountWindowPrimaryCreditRateParams:
        return FREDDiscountWindowPrimaryCreditRateParams(**params)

    @staticmethod
    def extract_data(
        query: FREDDiscountWindowPrimaryCreditRateParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any
    ) -> list:
        key = credentials.get("fred_api_key") if credentials else ""
        fred = Fred(key)

        data = fred.get_series(
            series_id=DWPCR_PARAMETER_TO_FRED_ID[query.parameter],
            start_date=query.start_date,
            end_date=query.end_date,
            **kwargs,
        )

        return data

    @staticmethod
    def transform_data(
        query: FREDDiscountWindowPrimaryCreditRateParams, data: list, **kwargs: Any
    ) -> List[Dict[str, List[FREDDiscountWindowPrimaryCreditRateData]]]:
        return [FREDDiscountWindowPrimaryCreditRateData.model_validate(d) for d in data]
