"""EconDB Yield Curve."""

# pylint: disable=unused-argument

from datetime import datetime
from typing import Any, Dict, List, Literal, Optional

from openbb_core.provider.abstract.annotated_result import AnnotatedResult
from openbb_core.provider.abstract.fetcher import Fetcher
from openbb_core.provider.standard_models.yield_curve import (
    YieldCurveData,
    YieldCurveQueryParams,
)
from openbb_core.provider.utils.descriptions import QUERY_DESCRIPTIONS
from openbb_core.provider.utils.errors import EmptyDataError
from openbb_econdb.utils import helpers
from openbb_econdb.utils.yield_curves import COUNTRIES, DAILY, DAILY_COUNTRIES
from pandas import Categorical, DataFrame, DatetimeIndex
from pydantic import Field, field_validator


class EconDbYieldCurveQueryParams(YieldCurveQueryParams):
    """EconDB Economic Indicators Query."""

    __json_schema_extra__ = {
        "date": ["multiple_items_allowed"],
    }
    country: COUNTRIES = Field(
        default="united_states",
        description=QUERY_DESCRIPTIONS.get("country", ""),
        json_schema_extra={"choices": DAILY_COUNTRIES},
    )
    use_cache: bool = Field(
        default=True,
        description="If true, cache the request for four hours.",
    )

    @field_validator("country", mode="before", check_fields=False)
    @classmethod
    def validate_country(cls, v) -> str:
        """Validate the country."""
        if v is None:
            return "united_states"
        if v not in DAILY_COUNTRIES:
            raise ValueError(f"Country must be one of {DAILY_COUNTRIES}")
        return v


class EconDbYieldCurveData(YieldCurveData):
    """EconDB Yield Curve Data."""


class EconDbYieldCurveFetcher(
    Fetcher[EconDbYieldCurveQueryParams, List[EconDbYieldCurveData]]
):
    """EconDB Yield Curve Fetcher."""

    require_credentials = False

    @staticmethod
    def transform_query(params: Dict[str, Any]) -> EconDbYieldCurveQueryParams:
        """Transform the query parameters."""
        if not params.get("date"):
            params["date"] = datetime.now().strftime("%Y-%m-%d")
        return EconDbYieldCurveQueryParams(**params)

    @staticmethod
    async def aextract_data(  # pylint: disable=R0914.R0912,R0915
        query: EconDbYieldCurveQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any,
    ) -> List[Dict]:
        """Extract the data."""
        token = credentials.get("econdb_api_key") if credentials else ""  # type: ignore
        # Attempt to create a temporary token if one is not supplied.
        if not token:
            token = await helpers.create_token(use_cache=query.use_cache)
            credentials.update({"econdb_api_key": token})  # type: ignore
        base_url = "https://www.econdb.com/api/series/?ticker="
        symbols = list(DAILY[query.country].keys())
        url = (
            base_url
            + f"%5B{','.join(symbols)}%5D&page_size=50&format=json&token={token}"
        )
        data: List[Dict] = []
        if query.use_cache is True:
            cache_dir = f"{helpers.get_user_cache_directory()}/http/econdb_yield_curve"
            async with helpers.CachedSession(
                cache=helpers.SQLiteBackend(
                    cache_dir, expire_after=3600 * 4, ignored_params=["token"]
                )
            ) as session:
                try:
                    response = await helpers.amake_request(  # type: ignore
                        url,
                        session=session,
                        timeout=20,
                        **kwargs,
                    )
                finally:
                    await session.close()
        else:
            response = await helpers.amake_request(  # type: ignore
                url, timeout=20, **kwargs
            )
        if not response:  # pylint: disable=E0606
            raise RuntimeError("Error: No data was returned.")
        data = response.get("results")  # pylint: disable=E0606
        if not data:
            raise EmptyDataError("The response was returned empty.")
        return data

    @staticmethod
    def transform_data(
        query: EconDbYieldCurveQueryParams,
        data: List[Dict],
        **kwargs: Any,
    ) -> AnnotatedResult[List[EconDbYieldCurveData]]:
        """Transform the data."""
        maturity_order = list(DAILY[query.country].values())
        dates = query.date.split(",")  # type: ignore
        dates_list = DatetimeIndex(dates)
        new_data: Dict = {}
        metadata: Dict = {}
        # Unpack the data for each maturity.
        for item in data:
            ticker = item.get("ticker")
            maturity = DAILY[query.country].get(ticker)
            dataset = item.get("dataset")
            additional_metadata = item.get("additional_metadata")
            units = "percent"
            description = item.get("description")
            dates = item["data"]["dates"]
            rates = item["data"]["values"]
            meta = {
                "symbol": ticker,
                "description": description,
                "dataset": dataset,
                "units": units,
                "additional_metadata": additional_metadata,
            }
            metadata[maturity] = meta
            for d, r in zip(dates, rates):
                if maturity not in new_data:
                    new_data[maturity] = {}
                new_data[maturity][d] = r
        df = DataFrame(new_data)
        df = df.dropna()  # Drop rows with missing values

        # Convert the index to a DatetimeIndex
        df.index = DatetimeIndex(df.index)

        # Find the nearest date in the DataFrame to each date in dates_list
        nearest_dates = [df.index.asof(date) for date in dates_list]

        # Filter for only the nearest dates
        df = df[df.index.isin(nearest_dates)]

        # Flatten the DataFrame
        flattened_data = df.reset_index().melt(
            id_vars="index", var_name="maturity", value_name="rate"
        )
        flattened_data = flattened_data.rename(columns={"index": "date"}).sort_values(
            "date"
        )
        flattened_data["maturity"] = Categorical(
            flattened_data["maturity"], categories=maturity_order, ordered=True
        )
        flattened_data["rate"] = flattened_data["rate"].astype(float) / 100
        flattened_data = flattened_data.sort_values(
            by=["date", "maturity"]
        ).reset_index(drop=True)
        flattened_data.loc[:, "date"] = flattened_data["date"].dt.strftime("%Y-%m-%d")
        records = flattened_data.to_dict(orient="records")
        return AnnotatedResult(
            result=[EconDbYieldCurveData.model_validate(r) for r in records],
            metadata=metadata,
        )
