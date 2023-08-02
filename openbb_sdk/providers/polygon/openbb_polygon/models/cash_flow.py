from datetime import (
    date as dateType,
    datetime,
)
from typing import Any, Dict, List, Optional

from openbb_provider.abstract.data import Data
from openbb_provider.abstract.fetcher import Fetcher
from openbb_provider.helpers import data_transformer, get_querystring
from openbb_provider.models.cash_flows import (
    CashFlowStatementData,
    CashFlowStatementQueryParams,
)
from pydantic import Field

from openbb_polygon.utils.helpers import get_data
from openbb_polygon.utils.types import PolygonFundamentalQueryParams

# noqa: E501


class PolygonCashFlowStatementQueryParams(PolygonFundamentalQueryParams):
    __doc__ = PolygonFundamentalQueryParams.__doc__


class PolygonCashFlowStatementData(Data):
    start_date: dateType = Field(alias="date")
    tickers: Optional[List[str]] = Field(alias="symbol")
    cik: Optional[str]
    filing_date: Optional[dateType]
    acceptance_datetime: Optional[datetime]
    fiscal_period: Optional[str] = Field(alias="period")
    net_cash_flow: int
    net_cash_flow_from_financing_activities: int
    net_cash_flow_from_investing_activities: int
    net_cash_flow_from_operating_activities: int
    net_cash_flow_continuing: int
    net_cash_flow_from_financing_activities_continuing: int
    net_cash_flow_from_investing_activities_continuing: int
    net_cash_flow_from_operating_activities_continuing: int


class PolygonCashFlowStatementFetcher(
    Fetcher[
        CashFlowStatementQueryParams,
        List[CashFlowStatementData],
        PolygonCashFlowStatementQueryParams,
        List[PolygonCashFlowStatementData],
    ]
):
    @staticmethod
    def transform_query(params: Dict[str, Any]) -> PolygonCashFlowStatementQueryParams:
        return PolygonCashFlowStatementQueryParams(**params)

    @staticmethod
    def extract_data(
        query: PolygonCashFlowStatementQueryParams,
        credentials: Optional[Dict[str, str]],
    ) -> List[PolygonCashFlowStatementData]:
        api_key = credentials.get("polygon_api_key") if credentials else ""

        base_url = "https://api.polygon.io/vX/reference/financials"

        query.period = "annual" if query.period == "annually" else "quarterly"
        query_string = get_querystring(query.dict(by_alias=True), [])
        request_url = f"{base_url}?{query_string}&apiKey={api_key}"
        data = get_data(request_url)["results"]

        if len(data) == 0:
            raise RuntimeError("No Cash Flow Statement found")

        to_return = []
        for item in data:
            new = {"acceptance_datetime": item.get("acceptance_datetime")}
            new["start_date"] = item["start_date"]
            new["filing_date"] = item.get("filing_date")
            new["cik"] = item["cik"]
            new["fiscal_period"] = item["fiscal_period"]
            new["tickers"] = item["tickers"]
            cf = item["financials"]["cash_flow_statement"]
            new["net_cash_flow_from_financing_activities"] = cf[
                "net_cash_flow_from_financing_activities"
            ].get("value")
            new["net_cash_flow_from_investing_activities"] = cf[
                "net_cash_flow_from_investing_activities"
            ].get("value")
            new["net_cash_flow_from_operating_activities"] = cf[
                "net_cash_flow_from_operating_activities"
            ].get("value")
            new["net_cash_flow_continuing"] = cf["net_cash_flow_continuing"].get(
                "value"
            )
            new["net_cash_flow_from_financing_activities_continuing"] = cf[
                "net_cash_flow_from_financing_activities_continuing"
            ].get("value")
            new["net_cash_flow_from_investing_activities_continuing"] = cf[
                "net_cash_flow_from_investing_activities_continuing"
            ].get("value")
            new["net_cash_flow_from_operating_activities_continuing"] = cf[
                "net_cash_flow_from_operating_activities_continuing"
            ].get("value")
            new["net_cash_flow"] = cf["net_cash_flow"].get("value")

            to_return.append(PolygonCashFlowStatementData(**new))
        return to_return

    @staticmethod
    def transform_data(
        data: List[PolygonCashFlowStatementData],
    ) -> List[CashFlowStatementData]:
        processors = {"tickers": lambda x: "" if not x else ",".join(x)}
        return data_transformer(data, CashFlowStatementData, processors)
