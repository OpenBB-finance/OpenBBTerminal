"""Intrinio Institutional Ownership Model."""

from typing import Any, Dict, List, Optional

from openbb_intrinio.utils.helpers import get_data_many, get_data_one
from openbb_provider.abstract.fetcher import Fetcher
from openbb_provider.standard_models.institutional_ownership import (
    InstitutionalOwnershipData,
    InstitutionalOwnershipQueryParams,
)
from openbb_provider.utils.descriptions import QUERY_DESCRIPTIONS
from openbb_provider.utils.helpers import get_querystring
from pydantic import Field


class IntrinioInstitutionalOwnershipQueryParams(InstitutionalOwnershipQueryParams):
    """Intrinio Institutional Ownership Query.

    Source: https://site.financialmodelingprep.com/developer/docs/institutional-stock-ownership-api/
    """

    limit: Optional[int] = Field(
        default=100, description=QUERY_DESCRIPTIONS.get("limit", ""), alias="page_size"
    )


class IntrinioInstitutionalOwnershipData(InstitutionalOwnershipData):
    """Intrinio Institutional Ownership Data."""

    __alias_dict__ = {
        "cik": "owner_cik",
        "date": "period_ended",
    }

    name: str = Field(
        description="Name of the institutional owner.", alias="owner_name"
    )
    value: float = Field(description="Value of the institutional owner.")
    amount: float = Field(description="Amount of the institutional owner.")
    sole_voting_authority: float = Field(
        description="Sole voting authority of the institutional owner."
    )
    shared_voting_authority: float = Field(
        description="Shared voting authority of the institutional owner."
    )
    no_voting_authority: float = Field(
        description="No voting authority of the institutional owner."
    )
    previous_amount: float = Field(
        description="Previous amount of the institutional owner."
    )
    amount_change: float = Field(
        description="Amount change of the institutional owner."
    )
    amount_percent_change: float = Field(
        description="Amount percent change of the institutional owner."
    )


class IntrinioInstitutionalOwnershipFetcher(
    Fetcher[
        IntrinioInstitutionalOwnershipQueryParams,
        List[IntrinioInstitutionalOwnershipData],
    ]
):
    """Transform the query, extract and transform the data from the Intrinio endpoints."""

    @staticmethod
    def transform_query(
        params: Dict[str, Any]
    ) -> IntrinioInstitutionalOwnershipQueryParams:
        """Transform the query params."""
        return IntrinioInstitutionalOwnershipQueryParams(**params)

    @staticmethod
    def extract_data(
        query: IntrinioInstitutionalOwnershipQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any,
    ) -> List[Dict]:
        """Return the raw data from the Intrinio endpoint."""
        api_key = credentials.get("intrinio_api_key") if credentials else ""
        data: List[Dict] = []

        base_url = "https://api-v2.intrinio.com"
        query_str = get_querystring(query.model_dump(by_alias=True), ["symbol"])
        url = f"{base_url}/securities/{query.symbol}/institutional_ownership?{query_str}&api_key={api_key}"
        data = get_data_many(url, "ownership", **kwargs)

        cik = data[0].get("owner_cik", "")
        cik_url = f"{base_url}/owners/{cik}?api_key={api_key}"
        cik_data = get_data_one(cik_url, **kwargs)
        owner_name = cik_data.get("owner_name", "")

        data = [
            {**item, "symbol": query.symbol, "owner_name": owner_name} for item in data
        ]
        return data

    @staticmethod
    def transform_data(
        query: IntrinioInstitutionalOwnershipQueryParams,
        data: List[Dict],
        **kwargs: Any,
    ) -> List[IntrinioInstitutionalOwnershipData]:
        """Return the transformed data."""
        return [IntrinioInstitutionalOwnershipData.model_validate(d) for d in data]
