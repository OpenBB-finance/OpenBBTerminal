"""Intrinio Company News Model."""

import asyncio
from datetime import datetime
from typing import Any, Dict, List, Literal, Optional, Union

from openbb_core.provider.abstract.fetcher import Fetcher
from openbb_core.provider.standard_models.company_news import (
    CompanyNewsData,
    CompanyNewsQueryParams,
)
from openbb_core.provider.utils.errors import EmptyDataError
from openbb_core.provider.utils.helpers import (
    amake_request,
    get_querystring,
)
from openbb_intrinio.utils.helpers import get_data
from openbb_intrinio.utils.references import IntrinioSecurity
from pydantic import Field, field_validator


class IntrinioCompanyNewsQueryParams(CompanyNewsQueryParams):
    """Intrinio Company News Query.

    Source: https://docs.intrinio.com/documentation/web_api/get_company_news_v2
    """

    __alias_dict__ = {
        "limit": "page_size",
        "source": "specific_source",
    }
    __json_schema_extra__ = {"symbol": ["multiple_items_allowed"]}

    source: Optional[
        Literal["yahoo", "moody", "moody_us_news", "moody_us_press_releases"]
    ] = Field(
        default=None,
        description="The source of the news article.",
    )
    sentiment: Union[None, Literal["positive", "neutral", "negative"]] = Field(
        default=None,
        description="Return news only from this source.",
    )
    language: Optional[str] = Field(
        default=None,
        description="Filter by language. Unsupported for yahoo source.",
    )
    topic: Optional[str] = Field(
        default=None,
        description="Filter by topic. Unsupported for yahoo source.",
    )
    word_count_greater_than: Optional[int] = Field(
        default=None,
        description="News stories will have a word count greater than this value."
        + " Unsupported for yahoo source.",
    )
    word_count_less_than: Optional[int] = Field(
        default=None,
        description="News stories will have a word count less than this value."
        + " Unsupported for yahoo source.",
    )
    is_spam: Optional[bool] = Field(
        default=None,
        description="Filter whether it is marked as spam or not."
        + " Unsupported for yahoo source.",
    )
    business_relevance_greater_than: Optional[float] = Field(
        default=None,
        description="News stories will have a business relevance score more than this value."
        + " Unsupported for yahoo source.",
    )
    business_relevance_less_than: Optional[float] = Field(
        default=None,
        description="News stories will have a business relevance score less than this value."
        + " Unsupported for yahoo source.",
    )


class IntrinioCompanyNewsData(CompanyNewsData):
    """Intrinio Company News Data."""

    __alias_dict__ = {
        "date": "publication_date",
        "sentiment": "article_sentiment",
        "sentiment_confidence": "article_sentiment_confidence",
        "symbols": "symbol",
    }
    source: Optional[str] = Field(
        default=None,
        description="The source of the news article.",
    )
    summary: Optional[str] = Field(
        default=None,
        description="The summary of the news article.",
    )
    topics: Optional[str] = Field(
        default=None,
        description="The topics related to the news article.",
    )
    word_count: Optional[int] = Field(
        default=None,
        description="The word count of the news article.",
    )
    business_relevance: Optional[float] = Field(
        default=None,
        description=" 	How strongly correlated the news article is to the business",
    )
    sentiment: Optional[str] = Field(
        default=None,
        description="The sentiment of the news article - i.e, negative, positive.",
    )
    sentiment_confidence: Optional[float] = Field(
        default=None,
        description="The confidence score of the sentiment rating.",
    )
    language: Optional[str] = Field(
        default=None,
        description="The language of the news article.",
    )
    spam: Optional[bool] = Field(
        default=None,
        description="Whether the news article is spam.",
    )
    copyright: Optional[str] = Field(
        default=None,
        description="The copyright notice of the news article.",
    )
    id: str = Field(description="Article ID.")
    security: Optional[IntrinioSecurity] = Field(
        default=None,
        description="The Intrinio Security object. Contains the security details related to the news article.",
    )

    @field_validator("publication_date", mode="before", check_fields=False)
    @classmethod
    def date_validate(cls, v):
        """Return the date as a datetime object."""
        return datetime.strptime(v, "%Y-%m-%dT%H:%M:%S.000Z")

    @field_validator("topics", mode="before", check_fields=False)
    @classmethod
    def topics_validate(cls, v):
        """ "Parse the topics as a string."""
        if v:
            topics = [t.get("name") for t in v if t and t not in ["", " "]]
            return ", ".join(topics)
        return None

    @field_validator("copyright", mode="before", check_fields=False)
    @classmethod
    def copyright_validate(cls, v):
        """Clean empty strings"""
        return None if v in ["", " "] else v


class IntrinioCompanyNewsFetcher(
    Fetcher[
        IntrinioCompanyNewsQueryParams,
        List[IntrinioCompanyNewsData],
    ]
):
    """Transform the query, extract and transform the data from the Intrinio endpoints."""

    @staticmethod
    def transform_query(params: Dict[str, Any]) -> IntrinioCompanyNewsQueryParams:
        """Transform the query params."""
        return IntrinioCompanyNewsQueryParams(**params)

    @staticmethod
    async def aextract_data(
        query: IntrinioCompanyNewsQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any,
    ) -> List[Dict]:
        """Return the raw data from the Intrinio endpoint."""
        api_key = credentials.get("intrinio_api_key") if credentials else ""

        base_url = "https://api-v2.intrinio.com/companies"
        ignore = (
            ["symbol", "page_size", "is_spam"]
            if not query.source or query.source == "yahoo"
            else ["symbol", "page_size"]
        )
        query_str = get_querystring(query.model_dump(by_alias=True), ignore)
        symbols = query.symbol.split(",")
        news: List = []

        async def callback(response, session):
            """Response callback."""
            result = await response.json()
            if "error" in result:
                raise RuntimeError(f"Intrinio Error Message -> {result['error']}")
            symbol = response.url.parts[-2]
            _data = result.get("news", [])
            data = []
            data.extend([{"symbol": symbol, **d} for d in _data])
            articles = len(data)
            next_page = result.get("next_page")
            while next_page and query.limit > articles:
                url = f"{base_url}/{symbol}/news?{query_str}&api_key={api_key}&next_page={next_page}"
                result = await get_data(url, session=session, **kwargs)
                _data = result.get("news", [])
                if _data:
                    data.extend([{"symbol": symbol, **d} for d in _data])
                    articles = len(data)
                next_page = result.get("next_page")
            # Remove duplicates based on URL
            return data

        seen = set()

        async def get_one(symbol):
            """Get the data for one symbol."""
            # TODO: Change page_size to a more appropriate value when Intrinio fixes the bug in this param.
            url = f"{base_url}/{symbol}/news?{query_str}&page_size=99&api_key={api_key}"
            data = await amake_request(url, response_callback=callback, **kwargs)
            if data:
                data = [x for x in data if not (x["url"] in seen or seen.add(x["url"]))]  # type: ignore
                news.extend(
                    sorted(data, key=lambda x: x["publication_date"], reverse=True)[
                        : query.limit
                    ]
                )

        tasks = [get_one(symbol) for symbol in symbols]

        await asyncio.gather(*tasks)

        if not news:
            raise EmptyDataError("Error: The request was returned as empty.")

        return news

    # pylint: disable=unused-argument
    @staticmethod
    def transform_data(
        query: IntrinioCompanyNewsQueryParams, data: List[Dict], **kwargs: Any
    ) -> List[IntrinioCompanyNewsData]:
        """Return the transformed data."""
        results: List[IntrinioCompanyNewsData] = []
        for item in data:
            body = item.get("body", {})
            if not body:
                item["text"] = item.pop("summary")
            if body:
                _ = item.pop("body")
                item["publication_date"] = body.get("publication_date", None)
                item["text"] = body.get("body", None)
            results.append(IntrinioCompanyNewsData.model_validate(item))
        return results
