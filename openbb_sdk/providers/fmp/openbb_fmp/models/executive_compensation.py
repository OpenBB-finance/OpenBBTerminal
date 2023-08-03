"""FMP Executive Compensation Fetcher."""


from datetime import datetime
from typing import Any, Dict, List, Optional

from openbb_provider.abstract.fetcher import Fetcher
from openbb_provider.models.executive_compensation import (
    ExecutiveCompensationData,
    ExecutiveCompensationQueryParams,
)
from pydantic import validator

from openbb_fmp.utils.helpers import create_url, get_data_many

# This endpoint is only provided by FMP and not by the other providers for now.


class FMPExecutiveCompensationQueryParams(ExecutiveCompensationQueryParams):
    """FMP Executive Compensation Query.

    Source: https://site.financialmodelingprep.com/developer/docs/executive-compensation-api/
    """


class FMPExecutiveCompensationData(ExecutiveCompensationData):
    """FMP Executive Compensation Data."""

    class Config:
        fields = {
            "filing_date": "filingDate",
            "accepted_date": "acceptedDate",
            "name_and_position": "nameAndPosition",
            "stock_award": "stockAward",
            "incentive_plan_compensation": "incentivePlanCompensation",
            "all_other_compensation": "allOtherCompensation",
        }

    @validator("filingDate", pre=True, check_fields=False)
    def filing_date_validate(cls, v):  # pylint: disable=E0213
        return datetime.strptime(v, "%Y-%m-%d")

    @validator("acceptedDate", pre=True, check_fields=False)
    def accepted_date_validate(cls, v):  # pylint: disable=E0213
        return datetime.strptime(v, "%Y-%m-%d %H:%M:%S")


class FMPExecutiveCompensationFetcher(
    Fetcher[  # type: ignore
        ExecutiveCompensationQueryParams,
        ExecutiveCompensationData,
        FMPExecutiveCompensationQueryParams,
        FMPExecutiveCompensationData,
    ]
):
    @staticmethod
    def transform_query(params: Dict[str, Any]) -> FMPExecutiveCompensationQueryParams:
        return FMPExecutiveCompensationQueryParams(**params)

    @staticmethod
    def extract_data(
        query: FMPExecutiveCompensationQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any,
    ) -> List[FMPExecutiveCompensationData]:
        api_key = credentials.get("fmp_api_key") if credentials else ""

        url = create_url(4, "governance/executive_compensation", api_key, query)
        return get_data_many(url, FMPExecutiveCompensationData)

    @staticmethod
    def transform_data(
        data: List[FMPExecutiveCompensationData],
    ) -> List[FMPExecutiveCompensationData]:
        return data
