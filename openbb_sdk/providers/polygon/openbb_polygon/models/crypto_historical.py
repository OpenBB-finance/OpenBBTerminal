"""Polygon crypto end of day fetcher."""


from datetime import datetime
from typing import Any, Dict, List, Literal, Optional

from dateutil.relativedelta import relativedelta
from openbb_polygon.utils.helpers import get_data
from openbb_provider.abstract.fetcher import Fetcher
from openbb_provider.standard_models.crypto_historical import (
    CryptoHistoricalData,
    CryptoHistoricalQueryParams,
)
from openbb_provider.utils.descriptions import QUERY_DESCRIPTIONS
from pydantic import Field, PositiveInt, field_validator


class PolygonCryptoHistoricalQueryParams(CryptoHistoricalQueryParams):
    """Polygon crypto end of day Query.

    Source: https://polygon.io/docs/crypto/get_v2_aggs_ticker__cryptoticker__range__multiplier___timespan___from___to
    """

    timespan: Literal[
        "minute", "hour", "day", "week", "month", "quarter", "year"
    ] = Field(default="day", description="Timespan of the data.")
    sort: Literal["asc", "desc"] = Field(
        default="desc", description="Sort order of the data."
    )
    limit: PositiveInt = Field(
        default=49999, description=QUERY_DESCRIPTIONS.get("limit", "")
    )
    adjusted: bool = Field(default=True, description="Whether the data is adjusted.")
    multiplier: PositiveInt = Field(
        default=1, description="Multiplier of the timespan."
    )


class PolygonCryptoHistoricalData(CryptoHistoricalData):
    """Polygon crypto end of day Data."""

    __alias_dict__ = {
        "date": "t",
        "open": "o",
        "high": "h",
        "low": "l",
        "close": "c",
        "volume": "v",
        "vwap": "vw",
        "transactions": "n",
    }

    transactions: Optional[PositiveInt] = Field(
        default=None,
        description="Number of transactions for the symbol in the time period.",
    )

    @field_validator("t", mode="before", check_fields=False)
    @classmethod
    def time_validate(cls, v):  # pylint: disable=E0213
        return datetime.fromtimestamp(v / 1000)


class PolygonCryptoHistoricalFetcher(
    Fetcher[
        PolygonCryptoHistoricalQueryParams,
        List[PolygonCryptoHistoricalData],
    ]
):
    @staticmethod
    def transform_query(params: Dict[str, Any]) -> PolygonCryptoHistoricalQueryParams:
        now = datetime.now().date()
        transformed_params = params
        if params.get("start_date") is None:
            transformed_params["start_date"] = now - relativedelta(years=1)

        if params.get("end_date") is None:
            transformed_params["end_date"] = now

        if params.get("symbol"):
            transformed_params["symbol"] = params["symbol"].replace("-", "")

        return PolygonCryptoHistoricalQueryParams(**transformed_params)

    @staticmethod
    def extract_data(
        query: PolygonCryptoHistoricalQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any,
    ) -> dict:
        api_key = credentials.get("polygon_api_key") if credentials else ""

        request_url = (
            f"https://api.polygon.io/v2/aggs/ticker/"
            f"X:{query.symbol}/range/{query.multiplier}/{query.timespan}/"
            f"{query.start_date}/{query.end_date}?adjusted={query.adjusted}"
            f"&sort={query.sort}&limit={query.limit}&apiKey={api_key}"
        )

        data = get_data(request_url, **kwargs)
        if isinstance(data, list):
            raise ValueError("Expected a dict, got a list")

        if "results" not in data or len(data["results"]) == 0:
            raise RuntimeError("No results found. Please change your query parameters.")

        return data

    @staticmethod
    def transform_data(data: dict) -> List[PolygonCryptoHistoricalData]:
        return [
            PolygonCryptoHistoricalData.parse_obj(d) for d in data.get("results", [])
        ]
