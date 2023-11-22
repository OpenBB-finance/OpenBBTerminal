"""Nasdaq LBMA Fixing Model."""

from typing import Any, Dict, List, Literal, Optional

import nasdaqdatalink
from openbb_nasdaq.models.query_params import DataLinkQueryParams
from openbb_provider.core.abstract.fetcher import Fetcher
from openbb_provider.core.standard_models.lbma_fixing import (
    LbmaFixingData,
    LbmaFixingQueryParams,
)
from pydantic import Field


class NasdaqLbmaFixingQueryParams(LbmaFixingQueryParams, DataLinkQueryParams):
    """Get LBMA Fixing Data from Nasdaq Data Link."""

    asset: Literal["gold", "silver"] = Field(
        description="The LBMA fixing asset.",
    )


class NasdaqLbmaFixingData(LbmaFixingData):
    """Nasdaq LBMA Fixing Data."""

    __alias_dict__ = {
        "date": "Date",
        "usd_am": "USD (AM)",
        "usd_pm": "USD (PM)",
        "gbp_am": "GBP (AM)",
        "gbp_pm": "GBP (PM)",
        "eur_am": "EURO (AM)",
        "eur_pm": "EURO (PM)",
        "usd": "USD",
        "gbp": "GBP",
        "eur": "EURO",
    }


class NasdaqLbmaFixingFetcher(
    Fetcher[NasdaqLbmaFixingQueryParams, List[NasdaqLbmaFixingData]]
):
    """Transform the query, extract and transform the data from the Nasdaq endpoints."""

    @staticmethod
    def transform_query(params: Dict[str, Any]) -> NasdaqLbmaFixingQueryParams:
        return NasdaqLbmaFixingQueryParams(**params)

    @staticmethod
    def extract_data(
        query: NasdaqLbmaFixingQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any,
    ) -> List[Dict]:
        """Extract the data from Nasdaq Data Link."""
        api_key = credentials.get("nasdaq_api_key") if credentials else ""

        dataset_dict = {
            "gold": "LBMA/GOLD",
            "silver": "LBMA/SILVER",
        }
        results = nasdaqdatalink.get(
            dataset_dict[query.asset],  # type: ignore
            start_date=query.start_date,
            end_date=query.end_date,
            collapse=query.collapse,
            transform=query.transform,
            api_key=api_key,
        )

        return results.fillna(0).replace(0, None).reset_index().to_dict("records")

    @staticmethod
    def transform_data(
        query: NasdaqLbmaFixingQueryParams,
        data: List[Dict],
        **kwargs: Any,
    ) -> List[NasdaqLbmaFixingData]:
        """Transform the data."""
        return [NasdaqLbmaFixingData.model_validate(d) for d in data]
