"""Alpha Vantage Stock End of Day fetcher."""


from datetime import datetime
from typing import Any, Dict, List, Literal, Optional

from dateutil.relativedelta import relativedelta
from openbb_alpha_vantage.utils.helpers import extract_key_name, get_data, get_interval
from openbb_provider.abstract.fetcher import Fetcher
from openbb_provider.standard_models.stock_historical import (
    StockHistoricalData,
    StockHistoricalQueryParams,
)
from openbb_provider.utils.descriptions import DATA_DESCRIPTIONS, QUERY_DESCRIPTIONS
from openbb_provider.utils.helpers import get_querystring
from pydantic import (
    Field,
    NonNegativeFloat,
    PositiveFloat,
    PrivateAttr,
    field_validator,
    model_validator,
)


class AVStockHistoricalQueryParams(StockHistoricalQueryParams):
    """Alpha Vantage Stock End of Day Query.

    Source: https://www.alphavantage.co/documentation/#time-series-data
    """

    interval: Literal["1m", "5m", "15m", "30m", "60m", "1d", "1W", "1M"] = Field(
        default="1d",
        description=QUERY_DESCRIPTIONS.get("interval", ""),
    )
    adjusted: Optional[bool] = Field(
        description="Output time series is adjusted by historical split and dividend events."
        "Only available for intraday data.",
        default=False,
    )
    extended_hours: Optional[bool] = Field(
        description="Extended trading hours during pre-market and after-hours."
        "Only available for intraday data.",
        default=False,
    )
    month: Optional[str] = Field(
        description="Query a specific month in history (in YYYY-MM format).",
        default=None,
    )
    output_size: Optional[Literal["compact", "full"]] = Field(
        description="Compact returns only the latest 100 data points in the intraday "
        "time series; full returns trailing 30 days of the most recent intraday data "
        "if the month parameter is not specified, or the full intraday data for a"
        "specific month in history if the month parameter is specified.",
        default="full",
        alias="outputsize",
    )

    _function: Literal[
        "TIME_SERIES_INTRADAY",
        "TIME_SERIES_DAILY",
        "TIME_SERIES_WEEKLY",
        "TIME_SERIES_MONTHLY",
        "TIME_SERIES_DAILY_ADJUSTED",
        "TIME_SERIES_WEEKLY_ADJUSTED",
        "TIME_SERIES_MONTHLY_ADJUSTED",
    ] = PrivateAttr(
        default="TIME_SERIES_DAILY",
    )

    _datatype: Literal["json", "csv"] = PrivateAttr(default="json")

    @field_validator("month", mode="before")
    def month_validate(cls, v):  # pylint: disable=E0213
        """Validate month, check if the month is in YYYY-MM format."""
        if v is not None:
            try:
                datetime.strptime(v, "%Y-%m")
            except ValueError as e:
                raise e
        return v

    @model_validator(mode="after")
    @classmethod
    def get_function_value(cls, values: "AVStockHistoricalQueryParams"):
        """Get the function from the provided interval for the Alpha Vantage API."""

        functions = {
            "d": "TIME_SERIES_DAILY",
            "W": "TIME_SERIES_WEEKLY",
            "M": "TIME_SERIES_MONTHLY",
        }

        adjusted_value = {
            False: "",
            True: "_ADJUSTED",
        }

        if values.interval[-1] != "m":
            values._function = (
                f"{functions[values.interval[-1]]}{adjusted_value[values.adjusted]}"
            )

        return values


class AVStockHistoricalData(StockHistoricalData):
    """Alpha Vantage Stock End of Day Data."""

    __alias_dict__ = {"date": "timestamp", "adj_close": "adjusted_close"}

    adj_close: Optional[PositiveFloat] = Field(
        default=None, description=DATA_DESCRIPTIONS.get("adj_close", "")
    )
    dividend_amount: Optional[NonNegativeFloat] = Field(
        default=None,
        description="Dividend amount paid for the corresponding date.",
    )
    split_coefficient: Optional[NonNegativeFloat] = Field(
        default=None,
        description="Split coefficient for the corresponding date.",
    )


class AVStockHistoricalFetcher(
    Fetcher[
        AVStockHistoricalQueryParams,
        List[AVStockHistoricalData],
    ]
):
    """Transform the query, extract and transform the data from the Alpha Vantage endpoints."""

    @staticmethod
    def transform_query(params: Dict[str, Any]) -> AVStockHistoricalQueryParams:
        """Transform the query."""
        transformed_params = params

        now = datetime.now().date()
        if params.get("start_date") is None:
            transformed_params["start_date"] = now - relativedelta(years=1)

        if params.get("end_date") is None:
            transformed_params["end_date"] = now

        return AVStockHistoricalQueryParams(**transformed_params)

    @staticmethod
    def extract_data(
        query: AVStockHistoricalQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any,
    ) -> Dict:
        """Return the raw data from the Alpha Vantage endpoint."""
        api_key = credentials.get("alpha_vantage_api_key") if credentials else ""

        interval = get_interval(query.interval)
        query_str = get_querystring(
            query.model_dump(by_alias=True), ["start_date", "end_date", "interval"]
        )
        query_str += f"&function={query._function}&interval={interval}"
        url = f"https://www.alphavantage.co/query?{query_str}&apikey={api_key}"

        data = get_data(url, **kwargs)
        dynamic_key = (set(data.keys()) - {"Meta Data"}).pop()

        return data[dynamic_key]

    @staticmethod
    def transform_data(
        data: Dict,
    ) -> List[AVStockHistoricalData]:
        """Transform the data to the standard format."""
        data = [
            {"date": date, **{extract_key_name(k): v for k, v in values.items()}}
            for date, values in data.items()
        ]

        return [AVStockHistoricalData.model_validate(d) for d in data]
