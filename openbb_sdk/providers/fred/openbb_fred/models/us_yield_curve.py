"""FRED US Yield Curve."""


from typing import Any, Dict, List, Optional
from datetime import datetime, timedelta
from openbb_fred.utils.fred_base import Fred
from openbb_fred.utils.fred_helpers import (
    YIELD_CURVE_NOMINAL_RATES,
    YIELD_CURVE_REAL_RATES,
    YIELD_CURVE_SERIES_REAL,
    YIELD_CURVE_SERIES_NOMINAL,
)
from openbb_provider.abstract.fetcher import Fetcher
from openbb_provider.standard_models.us_yield_curve import (
    USYieldCurveData,
    USYieldCurveQueryParams,
)


class FREDYieldCurveQueryParams(USYieldCurveQueryParams):
    """CPI query."""


class FREDYieldCurveData(USYieldCurveData):
    """CPI data."""


class FREDYieldCurveFetcher(Fetcher[FREDYieldCurveQueryParams, FREDYieldCurveData]):
    """FRED Yield Curve Fetcher."""

    @staticmethod
    def transform_query(params: Dict[str, Any]) -> FREDYieldCurveQueryParams:
        return FREDYieldCurveQueryParams(**params)

    @staticmethod
    def extract_data(
        query: FREDYieldCurveQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any
    ) -> list:
        api_key = credentials.get("fred_api_key") if credentials else ""
        date = query.date
        if query.inflation_adjusted:
            fred_series = YIELD_CURVE_SERIES_REAL
            years = YIELD_CURVE_REAL_RATES
        else:
            fred_series = YIELD_CURVE_SERIES_NOMINAL
            years = YIELD_CURVE_NOMINAL_RATES

        if date:
            start_date = date - timedelta(days=50)
        else:
            start_date = datetime.now() - timedelta(days=50)

        fred = Fred(api_key)
        vals = []
        for series in fred_series.values():
            data = fred.get_series(series, start_date=start_date, **kwargs)

            if date:
                # if date is not empty, loop through the data and find the corresponding value
                value = sorted(
                    data,
                    key=lambda x: abs(
                        datetime.strptime(x["date"], "%Y-%m-%d").date() - date
                    ),
                )[0]["value"]
            else:
                # if date is empty, find the most recent date's value
                sorted_data = sorted(data, key=lambda x: x["date"], reverse=True)
                value = sorted_data[0]["value"] if sorted_data else None
            vals.append(value)
        yield_curve_data = []
        for maturity, rate in zip(years, vals):
            yield_curve_data.append({"maturity": maturity, "rate": rate})

        return yield_curve_data

    @staticmethod
    def transform_data(data: list) -> List[Dict[str, List[FREDYieldCurveData]]]:

        return [FREDYieldCurveData(**x) for x in data]
