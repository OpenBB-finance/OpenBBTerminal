### THIS FILE IS AUTO-GENERATED. DO NOT EDIT. ###

from typing import Literal, Optional

from annotated_types import Ge
from openbb_core.app.model.custom_parameter import OpenBBCustomParameter
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.static.container import Container
from openbb_core.app.static.utils.decorators import validate
from openbb_core.app.static.utils.filters import filter_inputs
from typing_extensions import Annotated


class ROUTER_news(Container):
    """/news
    company
    sector
    world
    """

    def __repr__(self) -> str:
        return self.__doc__ or ""

    @validate
    def company(
        self,
        symbols: Annotated[
            str,
            OpenBBCustomParameter(
                description=" Here it is a separated list of symbols."
            ),
        ],
        limit: Annotated[
            Optional[Annotated[int, Ge(ge=0)]],
            OpenBBCustomParameter(description="The number of data entries to return."),
        ] = 20,
        provider: Optional[
            Literal[
                "benzinga", "fmp", "intrinio", "polygon", "tiingo", "ultima", "yfinance"
            ]
        ] = None,
        **kwargs
    ) -> OBBject:
        """Company News. Get news for one or more companies.

        Parameters
        ----------
        symbols : str
             Here it is a separated list of symbols.
        limit : Optional[Annotated[int, Ge(ge=0)]]
            The number of data entries to return.
        provider : Optional[Literal['benzinga', 'fmp', 'intrinio', 'polygon', 'tiing...
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'benzinga' if there is
            no default.
        display : Literal['headline', 'abstract', 'full']
            Specify headline only (headline), headline + teaser (abstract), or headline + full body (full). (provider: benzinga)
        date : Optional[str]
            Date of the news to retrieve. (provider: benzinga)
        start_date : Optional[str]
            Start date of the news to retrieve. (provider: benzinga)
        end_date : Optional[str]
            End date of the news to retrieve. (provider: benzinga)
        updated_since : Optional[int]
            Number of seconds since the news was updated. (provider: benzinga)
        published_since : Optional[int]
            Number of seconds since the news was published. (provider: benzinga)
        sort : Literal['id', 'created', 'updated']
            Key to sort the news by. (provider: benzinga)
        order : Optional[Literal['asc', 'desc']]
            Order to sort the news by. (provider: benzinga);
            Sort order of the articles. (provider: polygon)
        isin : Optional[str]
            The ISIN of the news to retrieve. (provider: benzinga)
        cusip : Optional[str]
            The CUSIP of the news to retrieve. (provider: benzinga)
        channels : Optional[str]
            Channels of the news to retrieve. (provider: benzinga)
        topics : Optional[str]
            Topics of the news to retrieve. (provider: benzinga)
        authors : Optional[str]
            Authors of the news to retrieve. (provider: benzinga)
        content_types : Optional[str]
            Content types of the news to retrieve. (provider: benzinga)
        page : Optional[int]
            Page number of the results. Use in combination with limit. (provider: fmp)
        published_utc : Optional[str]
            Date query to fetch articles. Supports operators <, <=, >, >= (provider: polygon)
        source : Optional[str]
            A comma-separated list of the domains requested. (provider: tiingo)

        Returns
        -------
        OBBject
            results : List[CompanyNews]
                Serializable results.
            provider : Optional[Literal['benzinga', 'fmp', 'intrinio', 'polygon', 'tiingo', 'ultima', 'yfinance']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        CompanyNews
        -----------
        symbols : str
             Here it is a separated list of symbols.
        date : datetime
            The date of the data. Here it is the date of the news.
        title : str
            Title of the news.
        image : Optional[str]
            Image URL of the news.
        text : Optional[str]
            Text/body of the news.
        url : str
            URL of the news.
        id : Optional[str]
            Article ID. (provider: benzinga, intrinio, polygon)
        author : Optional[str]
            Author of the article. (provider: benzinga, polygon)
        teaser : Optional[str]
            Teaser of the news. (provider: benzinga)
        images : Optional[Union[List[Dict[str, str]], List[str], str]]
            URL to the images of the news. (provider: benzinga, fmp)
        channels : Optional[str]
            Channels associated with the news. (provider: benzinga)
        stocks : Optional[str]
            Stocks associated with the news. (provider: benzinga)
        tags : Optional[str]
            Tags associated with the news. (provider: benzinga, tiingo)
        updated : Optional[datetime]
            Updated date of the news. (provider: benzinga)
        site : Optional[str]
            Name of the news source. (provider: fmp);
            News source. (provider: tiingo)
        amp_url : Optional[str]
            AMP URL. (provider: polygon)
        image_url : Optional[str]
            Image URL. (provider: polygon)
        keywords : Optional[List[str]]
            Keywords in the article (provider: polygon)
        publisher : Optional[Union[openbb_polygon.models.company_news.PolygonPublisher, str]]
            Publisher of the article. (provider: polygon, ultima, yfinance)
        article_id : Optional[int]
            Unique ID of the news article. (provider: tiingo)
        crawl_date : Optional[datetime]
            Date the news article was crawled. (provider: tiingo)
        risk_category : Optional[str]
            Risk category of the news. (provider: ultima)
        uuid : Optional[str]
            Unique identifier for the news article (provider: yfinance)
        type : Optional[str]
            Type of the news article (provider: yfinance)
        thumbnail : Optional[List]
            Thumbnail related data to the ticker news article. (provider: yfinance)

        Example
        -------
        >>> from openbb import obb
        >>> obb.news.company(symbols="AAPL,MSFT", limit=20)
        """  # noqa: E501

        return self._run(
            "/news/company",
            **filter_inputs(
                provider_choices={
                    "provider": provider,
                },
                standard_params={
                    "symbols": symbols,
                    "limit": limit,
                },
                extra_params=kwargs,
            )
        )

    @validate
    def sector(
        self,
        sectors: Annotated[
            str, OpenBBCustomParameter(description="A coma separated list of sectors.")
        ],
        limit: Annotated[
            int,
            OpenBBCustomParameter(
                description="The number of data entries to return. Here it is the no. of articles to return."
            ),
        ] = 20,
        provider: Optional[Literal["ultima"]] = None,
        **kwargs
    ) -> OBBject:
        """Sector News. Get news for one or more sectors.

        Parameters
        ----------
        sectors : str
            A coma separated list of sectors.
        limit : int
            The number of data entries to return. Here it is the no. of articles to return.
        provider : Optional[Literal['ultima']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'ultima' if there is
            no default.

        Returns
        -------
        OBBject
            results : List[SectorNews]
                Serializable results.
            provider : Optional[Literal['ultima']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        SectorNews
        ----------
        date : datetime
            The date of the data. Here it is the published date of the news.
        title : str
            Title of the news.
        images : Optional[List[Dict[str, str]]]
            Images associated with the news.
        text : Optional[str]
            Text/body of the news.
        url : Optional[str]
            URL of the news.
        publisher : Optional[str]
            Publisher of the news. (provider: ultima)
        risk_category : Optional[str]
            Risk category of the news. (provider: ultima)

        Example
        -------
        >>> from openbb import obb
        >>> obb.news.sector(sectors="TEST_STRING", limit=20)
        """  # noqa: E501

        return self._run(
            "/news/sector",
            **filter_inputs(
                provider_choices={
                    "provider": provider,
                },
                standard_params={
                    "sectors": sectors,
                    "limit": limit,
                },
                extra_params=kwargs,
            )
        )

    @validate
    def world(
        self,
        limit: Annotated[
            int,
            OpenBBCustomParameter(
                description="The number of data entries to return. Here its the no. of articles to return."
            ),
        ] = 20,
        provider: Optional[
            Literal["benzinga", "biztoc", "fmp", "intrinio", "tiingo"]
        ] = None,
        **kwargs
    ) -> OBBject:
        """World News. Global news data.

        Parameters
        ----------
        limit : int
            The number of data entries to return. Here its the no. of articles to return.
        provider : Optional[Literal['benzinga', 'biztoc', 'fmp', 'intrinio', 'tiingo...
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'benzinga' if there is
            no default.
        display : Literal['headline', 'abstract', 'full']
            Specify headline only (headline), headline + teaser (abstract), or headline + full body (full). (provider: benzinga)
        date : Optional[str]
            Date of the news to retrieve. (provider: benzinga)
        start_date : Optional[str]
            Start date of the news to retrieve. (provider: benzinga)
        end_date : Optional[str]
            End date of the news to retrieve. (provider: benzinga)
        updated_since : Optional[int]
            Number of seconds since the news was updated. (provider: benzinga)
        published_since : Optional[int]
            Number of seconds since the news was published. (provider: benzinga)
        sort : Literal['id', 'created', 'updated']
            Key to sort the news by. (provider: benzinga)
        order : Literal['asc', 'desc']
            Order to sort the news by. (provider: benzinga)
        isin : Optional[str]
            The ISIN of the news to retrieve. (provider: benzinga)
        cusip : Optional[str]
            The CUSIP of the news to retrieve. (provider: benzinga)
        channels : Optional[str]
            Channels of the news to retrieve. (provider: benzinga)
        topics : Optional[str]
            Topics of the news to retrieve. (provider: benzinga)
        authors : Optional[str]
            Authors of the news to retrieve. (provider: benzinga)
        content_types : Optional[str]
            Content types of the news to retrieve. (provider: benzinga)
        filter : Literal['crypto', 'hot', 'latest', 'main', 'media', 'source', 'tag']
            Filter by type of news. (provider: biztoc)
        source : Optional[str]
            Filter by a specific publisher. Only valid when filter is set to source. (provider: biztoc);
            A comma-separated list of the domains requested. (provider: tiingo)
        tag : Optional[str]
            Tag, topic, to filter articles by. Only valid when filter is set to tag. (provider: biztoc)
        term : Optional[str]
            Search term to filter articles by. This overrides all other filters. (provider: biztoc)

        Returns
        -------
        OBBject
            results : List[WorldNews]
                Serializable results.
            provider : Optional[Literal['benzinga', 'biztoc', 'fmp', 'intrinio', 'tiingo']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        WorldNews
        ---------
        date : datetime
            The date of the data. Here it is the published date of the news.
        title : str
            Title of the news.
        images : Optional[List[Dict[str, str]]]
            Images associated with the news.
        text : Optional[str]
            Text/body of the news.
        url : Optional[str]
            URL of the news.
        id : Optional[str]
            Article ID. (provider: benzinga, biztoc, intrinio)
        author : Optional[str]
            Author of the news. (provider: benzinga)
        teaser : Optional[str]
            Teaser of the news. (provider: benzinga)
        channels : Optional[str]
            Channels associated with the news. (provider: benzinga)
        stocks : Optional[str]
            Stocks associated with the news. (provider: benzinga)
        tags : Optional[Union[str, List[str]]]
            Tags associated with the news. (provider: benzinga, biztoc, tiingo)
        updated : Optional[datetime]
            Updated date of the news. (provider: benzinga)
        favicon : Optional[str]
            Icon image for the source of the article. (provider: biztoc)
        score : Optional[float]
            Search relevance score for the article. (provider: biztoc)
        site : Optional[str]
            News source. (provider: fmp, tiingo)
        company : Optional[Dict[str, Any]]
            Company details related to the news article. (provider: intrinio)
        symbols : Optional[str]
            Ticker tagged in the fetched news. (provider: tiingo)
        article_id : Optional[int]
            Unique ID of the news article. (provider: tiingo)
        crawl_date : Optional[datetime]
            Date the news article was crawled. (provider: tiingo)

        Example
        -------
        >>> from openbb import obb
        >>> obb.news.world(limit=20)
        """  # noqa: E501

        return self._run(
            "/news/world",
            **filter_inputs(
                provider_choices={
                    "provider": provider,
                },
                standard_params={
                    "limit": limit,
                },
                extra_params=kwargs,
            )
        )
