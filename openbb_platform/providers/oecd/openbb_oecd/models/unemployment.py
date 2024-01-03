"""OECD Unemployment Data."""

import re
from datetime import date, timedelta
from typing import Any, Dict, List, Literal, Optional, Union

from openbb_core.provider.abstract.fetcher import Fetcher
from openbb_core.provider.standard_models.unemployment import (
    UnemploymentData,
    UnemploymentQueryParams,
)
from openbb_oecd.utils import helpers
from pydantic import Field, field_validator

country_mapping = {
    "COL": "colombia",
    "NZL": "new_zealand",
    "GBR": "united_kingdom",
    "ITA": "italy",
    "LUX": "luxembourg",
    "EA19": "euro_area19",
    "SWE": "sweden",
    "OECD": "oecd",
    "ZAF": "south_africa",
    "DNK": "denmark",
    "CAN": "canada",
    "CHE": "switzerland",
    "SVK": "slovakia",
    "HUN": "hungary",
    "PRT": "portugal",
    "ESP": "spain",
    "FRA": "france",
    "CZE": "czech_republic",
    "CRI": "costa_rica",
    "JPN": "japan",
    "SVN": "slovenia",
    "RUS": "russia",
    "AUT": "austria",
    "LVA": "latvia",
    "NLD": "netherlands",
    "ISR": "israel",
    "ISL": "iceland",
    "USA": "united_states",
    "IRL": "ireland",
    "MEX": "mexico",
    "DEU": "germany",
    "GRC": "greece",
    "TUR": "turkey",
    "AUS": "australia",
    "POL": "poland",
    "KOR": "south_korea",
    "CHL": "chile",
    "FIN": "finland",
    "EU27_2020": "european_union27_2020",
    "NOR": "norway",
    "LTU": "lithuania",
    "EA20": "euro_area20",
    "EST": "estonia",
    "BEL": "belgium",
    "BRA": "brazil",
    "IDN": "indonesia",
}
countries = tuple(country_mapping.values()) + ("all",)
CountriesLiteral = Literal[countries]  # type: ignore
country_to_code = {v: k for k, v in country_mapping.items()}


class OECDUnemploymentQueryParams(UnemploymentQueryParams):
    """OECD Unemployment Query."""

    country: CountriesLiteral = Field(
        description="Country to get GDP for.", default="united_states"
    )
    sex: Literal["total", "male", "female"] = Field(
        description="Sex to get unemployment for.", default="total"
    )
    frequency: Literal["monthly", "quarterly", "annual"] = Field(
        description="Frequency to get unemployment for.", default="monthly"
    )
    age: Literal["total", "15-24", "15-64", "25-54", "55-64"] = Field(
        description="Age group to get unemployment for. Total indicates 15 years or over",
        default="total",
    )
    seasonal_adjustment: bool = Field(
        description="Whether to get seasonally adjusted unemployment. Defaults to False.",
        default=False,
    )


class OECDUnemploymentData(UnemploymentData):
    """OECD Real GDP Data."""

    @field_validator("date", mode="before")
    @classmethod
    def date_validate(cls, in_date: Union[date, str]):  # pylint: disable=E0213
        """Validate value."""
        if isinstance(in_date, str):
            # i.e 2022-Q1
            if re.match(r"\d{4}-Q[1-4]$", in_date):
                year, quarter = in_date.split("-")
                _year = int(year)
                if quarter == "Q1":
                    return date(_year, 3, 31)
                if quarter == "Q2":
                    return date(_year, 6, 30)
                if quarter == "Q3":
                    return date(_year, 9, 30)
                if quarter == "Q4":
                    return date(_year, 12, 31)
            # Now match if it is monthly, i.e 2022-01
            elif re.match(r"\d{4}-\d{2}$", in_date):
                year, month = map(int, in_date.split("-"))
                if month == 12:
                    return date(year, month, 31)
                else:
                    next_month = date(year, month + 1, 1)
                    return date(next_month.year, next_month.month, 1) - timedelta(
                        days=1
                    )
            # Now match if it is yearly, i.e 2022
            elif re.match(r"\d{4}$", in_date):
                return date(int(in_date), 12, 31)
        # If the input date is a year
        if isinstance(in_date, int):
            return date(in_date, 12, 31)

        return in_date


class OECDUnemploymentFetcher(
    Fetcher[OECDUnemploymentQueryParams, List[OECDUnemploymentData]]
):
    """Transform the query, extract and transform the data from the OECD endpoints."""

    @staticmethod
    def transform_query(params: Dict[str, Any]) -> OECDUnemploymentQueryParams:
        """Transform the query."""
        transformed_params = params.copy()
        if transformed_params["start_date"] is None:
            transformed_params["start_date"] = date(1950, 1, 1)
        if transformed_params["end_date"] is None:
            transformed_params["end_date"] = date(date.today().year, 12, 31)

        return OECDUnemploymentQueryParams(**transformed_params)

    @staticmethod
    def extract_data(
        query: OECDUnemploymentQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any,
    ) -> Dict:
        """Return the raw data from the OECD endpoint."""
        sex = {"total": "_T", "male": "M", "female": "F"}[query.sex]
        frequency = query.frequency[0].upper()
        age = {
            "total": "Y_GE15",
            "15-24": "Y15T24",
            "15-64": "Y15T64",
            "25-54": "Y25T54",
            "55-64": "Y55T64",
        }[query.age]
        seasonal_adjustment = "Y" if query.seasonal_adjustment else "N"
        country = "" if query.country == "all" else country_to_code[query.country]
        url = "https://sdmx.oecd.org/public/rest/data/OECD.SDD.TPS,DSD_LFS@DF_IALFS_INDIC,1.0/.UNE_LF........"
        data = helpers.get_possibly_cached_data(url, function="economy_unemployment")
        query = f"AGE=='{age}' & SEX=='{sex}' & FREQ=='{frequency}' & ADJUSTMENT=='{seasonal_adjustment}'"
        query = query + f" & REF_AREA=='{country}'" if country else query
        # Filter down
        data = (
            data.query(query)
            .reset_index(drop=True)[["REF_AREA", "TIME_PERIOD", "VALUE"]]
            .rename(
                columns={"REF_AREA": "country", "TIME_PERIOD": "date", "VALUE": "value"}
            )
        )
        data["country"] = data["country"].map(country_mapping)

        return data.to_dict(orient="records")

    @staticmethod
    def transform_data(
        query: OECDUnemploymentQueryParams, data: Dict, **kwargs: Any
    ) -> List[OECDUnemploymentData]:
        """Transform the data from the OECD endpoint."""
        return [OECDUnemploymentData.model_validate(d) for d in data]
