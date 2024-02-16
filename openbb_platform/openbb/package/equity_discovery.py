### THIS FILE IS AUTO-GENERATED. DO NOT EDIT. ###

import datetime
from typing import Literal, Optional, Union

from openbb_core.app.model.custom_parameter import OpenBBCustomParameter
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.static.container import Container
from openbb_core.app.static.utils.decorators import validate
from openbb_core.app.static.utils.filters import filter_inputs
from typing_extensions import Annotated


class ROUTER_equity_discovery(Container):
    """/equity/discovery
    active
    aggressive_small_caps
    filings
    gainers
    growth_tech
    losers
    top_retail
    undervalued_growth
    undervalued_large_caps
    upcoming_release_days
    """

    def __repr__(self) -> str:
        return self.__doc__ or ""

    @validate
    def active(
        self,
        sort: Annotated[
            str,
            OpenBBCustomParameter(
                description="Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."
            ),
        ] = "desc",
        provider: Optional[Literal["yfinance"]] = None,
        **kwargs
    ) -> OBBject:
        """Get the most active Equities.

        Parameters
        ----------
        sort : str
            Sort order. Possible values: 'asc', 'desc'. Default: 'desc'.
        provider : Optional[Literal['yfinance']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'yfinance' if there is
            no default.

        Returns
        -------
        OBBject
            results : List[EquityActive]
                Serializable results.
            provider : Optional[Literal['yfinance']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        EquityActive
        ------------
        symbol : str
            Symbol representing the entity requested in the data.
        name : str
            Name of the entity.
        price : float
            Last price.
        change : float
            Change in price value.
        percent_change : float
            Percent change.
        volume : float
            The trading volume.
        market_cap : Optional[str]
            Market Cap displayed in billions. (provider: yfinance)
        avg_volume_3_months : Optional[float]
            Average volume over the last 3 months in millions. (provider: yfinance)
        pe_ratio_ttm : Optional[float]
            PE Ratio (TTM). (provider: yfinance)

        Example
        -------
        >>> from openbb import obb
        >>> obb.equity.discovery.active(sort="desc")
        """  # noqa: E501

        return self._run(
            "/equity/discovery/active",
            **filter_inputs(
                provider_choices={
                    "provider": self._get_provider(
                        provider,
                        "/equity/discovery/active",
                        ("yfinance",),
                    )
                },
                standard_params={
                    "sort": sort,
                },
                extra_params=kwargs,
            )
        )

    @validate
    def aggressive_small_caps(
        self,
        sort: Annotated[
            str,
            OpenBBCustomParameter(
                description="Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."
            ),
        ] = "desc",
        provider: Optional[Literal["yfinance"]] = None,
        **kwargs
    ) -> OBBject:
        """Get aggressive small cap Equities.

        Parameters
        ----------
        sort : str
            Sort order. Possible values: 'asc', 'desc'. Default: 'desc'.
        provider : Optional[Literal['yfinance']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'yfinance' if there is
            no default.

        Returns
        -------
        OBBject
            results : List[EquityAggressiveSmallCaps]
                Serializable results.
            provider : Optional[Literal['yfinance']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        EquityAggressiveSmallCaps
        -------------------------
        symbol : str
            Symbol representing the entity requested in the data.
        name : str
            Name of the entity.
        price : float
            Last price.
        change : float
            Change in price value.
        percent_change : float
            Percent change.
        volume : float
            The trading volume.
        market_cap : Optional[str]
            Market Cap. (provider: yfinance)
        avg_volume_3_months : Optional[float]
            Average volume over the last 3 months in millions. (provider: yfinance)
        pe_ratio_ttm : Optional[float]
            PE Ratio (TTM). (provider: yfinance)

        Example
        -------
        >>> from openbb import obb
        >>> obb.equity.discovery.aggressive_small_caps(sort="desc")
        """  # noqa: E501

        return self._run(
            "/equity/discovery/aggressive_small_caps",
            **filter_inputs(
                provider_choices={
                    "provider": self._get_provider(
                        provider,
                        "/equity/discovery/aggressive_small_caps",
                        ("yfinance",),
                    )
                },
                standard_params={
                    "sort": sort,
                },
                extra_params=kwargs,
            )
        )

    @validate
    def filings(
        self,
        start_date: Annotated[
            Union[datetime.date, None, str],
            OpenBBCustomParameter(
                description="Start date of the data, in YYYY-MM-DD format."
            ),
        ] = None,
        end_date: Annotated[
            Union[datetime.date, None, str],
            OpenBBCustomParameter(
                description="End date of the data, in YYYY-MM-DD format."
            ),
        ] = None,
        form_type: Annotated[
            Optional[str],
            OpenBBCustomParameter(
                description="Filter by form type. Visit https://www.sec.gov/forms for a list of supported form types."
            ),
        ] = None,
        limit: Annotated[
            int,
            OpenBBCustomParameter(description="The number of data entries to return."),
        ] = 100,
        provider: Optional[Literal["fmp"]] = None,
        **kwargs
    ) -> OBBject:
        """Get the most-recent filings submitted to the SEC.

        Parameters
        ----------
        start_date : Union[datetime.date, None, str]
            Start date of the data, in YYYY-MM-DD format.
        end_date : Union[datetime.date, None, str]
            End date of the data, in YYYY-MM-DD format.
        form_type : Optional[str]
            Filter by form type. Visit https://www.sec.gov/forms for a list of supported form types.
        limit : int
            The number of data entries to return.
        provider : Optional[Literal['fmp']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'fmp' if there is
            no default.
        is_done : Optional[bool]
            Flag for whether or not the filing is done. (provider: fmp)

        Returns
        -------
        OBBject
            results : List[DiscoveryFilings]
                Serializable results.
            provider : Optional[Literal['fmp']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        DiscoveryFilings
        ----------------
        symbol : str
            Symbol representing the entity requested in the data.
        cik : str
            Central Index Key (CIK) for the requested entity.
        title : str
            Title of the filing.
        date : datetime
            The date of the data.
        form_type : str
            The form type of the filing
        link : str
            URL to the filing page on the SEC site.

        Example
        -------
        >>> from openbb import obb
        >>> obb.equity.discovery.filings(limit=100)
        """  # noqa: E501

        return self._run(
            "/equity/discovery/filings",
            **filter_inputs(
                provider_choices={
                    "provider": self._get_provider(
                        provider,
                        "/equity/discovery/filings",
                        ("fmp",),
                    )
                },
                standard_params={
                    "start_date": start_date,
                    "end_date": end_date,
                    "form_type": form_type,
                    "limit": limit,
                },
                extra_params=kwargs,
            )
        )

    @validate
    def gainers(
        self,
        sort: Annotated[
            str,
            OpenBBCustomParameter(
                description="Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."
            ),
        ] = "desc",
        provider: Optional[Literal["yfinance"]] = None,
        **kwargs
    ) -> OBBject:
        """Get the top Equity gainers.

        Parameters
        ----------
        sort : str
            Sort order. Possible values: 'asc', 'desc'. Default: 'desc'.
        provider : Optional[Literal['yfinance']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'yfinance' if there is
            no default.

        Returns
        -------
        OBBject
            results : List[EquityGainers]
                Serializable results.
            provider : Optional[Literal['yfinance']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        EquityGainers
        -------------
        symbol : str
            Symbol representing the entity requested in the data.
        name : str
            Name of the entity.
        price : float
            Last price.
        change : float
            Change in price value.
        percent_change : float
            Percent change.
        volume : float
            The trading volume.
        market_cap : Optional[str]
            Market Cap. (provider: yfinance)
        avg_volume_3_months : Optional[float]
            Average volume over the last 3 months in millions. (provider: yfinance)
        pe_ratio_ttm : Optional[float]
            PE Ratio (TTM). (provider: yfinance)

        Example
        -------
        >>> from openbb import obb
        >>> obb.equity.discovery.gainers(sort="desc")
        """  # noqa: E501

        return self._run(
            "/equity/discovery/gainers",
            **filter_inputs(
                provider_choices={
                    "provider": self._get_provider(
                        provider,
                        "/equity/discovery/gainers",
                        ("yfinance",),
                    )
                },
                standard_params={
                    "sort": sort,
                },
                extra_params=kwargs,
            )
        )

    @validate
    def growth_tech(
        self,
        sort: Annotated[
            str,
            OpenBBCustomParameter(
                description="Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."
            ),
        ] = "desc",
        provider: Optional[Literal["yfinance"]] = None,
        **kwargs
    ) -> OBBject:
        """Get growth tech Equities.

        Parameters
        ----------
        sort : str
            Sort order. Possible values: 'asc', 'desc'. Default: 'desc'.
        provider : Optional[Literal['yfinance']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'yfinance' if there is
            no default.

        Returns
        -------
        OBBject
            results : List[GrowthTechEquities]
                Serializable results.
            provider : Optional[Literal['yfinance']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        GrowthTechEquities
        ------------------
        symbol : str
            Symbol representing the entity requested in the data.
        name : str
            Name of the entity.
        price : float
            Last price.
        change : float
            Change in price value.
        percent_change : float
            Percent change.
        volume : float
            The trading volume.
        market_cap : Optional[str]
            Market Cap. (provider: yfinance)
        avg_volume_3_months : Optional[float]
            Average volume over the last 3 months in millions. (provider: yfinance)
        pe_ratio_ttm : Optional[float]
            PE Ratio (TTM). (provider: yfinance)

        Example
        -------
        >>> from openbb import obb
        >>> obb.equity.discovery.growth_tech(sort="desc")
        """  # noqa: E501

        return self._run(
            "/equity/discovery/growth_tech",
            **filter_inputs(
                provider_choices={
                    "provider": self._get_provider(
                        provider,
                        "/equity/discovery/growth_tech",
                        ("yfinance",),
                    )
                },
                standard_params={
                    "sort": sort,
                },
                extra_params=kwargs,
            )
        )

    @validate
    def losers(
        self,
        sort: Annotated[
            str,
            OpenBBCustomParameter(
                description="Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."
            ),
        ] = "desc",
        provider: Optional[Literal["yfinance"]] = None,
        **kwargs
    ) -> OBBject:
        """Get the top Equity losers.

        Parameters
        ----------
        sort : str
            Sort order. Possible values: 'asc', 'desc'. Default: 'desc'.
        provider : Optional[Literal['yfinance']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'yfinance' if there is
            no default.

        Returns
        -------
        OBBject
            results : List[EquityLosers]
                Serializable results.
            provider : Optional[Literal['yfinance']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        EquityLosers
        ------------
        symbol : str
            Symbol representing the entity requested in the data.
        name : str
            Name of the entity.
        price : float
            Last price.
        change : float
            Change in price value.
        percent_change : float
            Percent change.
        volume : float
            The trading volume.
        market_cap : Optional[str]
            Market Cap. (provider: yfinance)
        avg_volume_3_months : Optional[float]
            Average volume over the last 3 months in millions. (provider: yfinance)
        pe_ratio_ttm : Optional[float]
            PE Ratio (TTM). (provider: yfinance)

        Example
        -------
        >>> from openbb import obb
        >>> obb.equity.discovery.losers(sort="desc")
        """  # noqa: E501

        return self._run(
            "/equity/discovery/losers",
            **filter_inputs(
                provider_choices={
                    "provider": self._get_provider(
                        provider,
                        "/equity/discovery/losers",
                        ("yfinance",),
                    )
                },
                standard_params={
                    "sort": sort,
                },
                extra_params=kwargs,
            )
        )

    @validate
    def top_retail(
        self,
        limit: Annotated[
            int,
            OpenBBCustomParameter(description="The number of data entries to return."),
        ] = 5,
        provider: Optional[Literal["nasdaq"]] = None,
        **kwargs
    ) -> OBBject:
        """Tracks over $30B USD/day of individual investors trades.

        It gives a daily view into retail activity and sentiment for over 9,500 US traded stocks,
        ADRs, and ETPs.


            Parameters
            ----------
            limit : int
                The number of data entries to return.
            provider : Optional[Literal['nasdaq']]
                The provider to use for the query, by default None.
                If None, the provider specified in defaults is selected or 'nasdaq' if there is
                no default.

            Returns
            -------
            OBBject
                results : List[TopRetail]
                    Serializable results.
                provider : Optional[Literal['nasdaq']]
                    Provider name.
                warnings : Optional[List[Warning_]]
                    List of warnings.
                chart : Optional[Chart]
                    Chart object.
                extra: Dict[str, Any]
                    Extra info.

            TopRetail
            ---------
            date : date
                The date of the data.
            symbol : str
                Symbol representing the entity requested in the data.
            activity : float
                Activity of the symbol.
            sentiment : float
                Sentiment of the symbol. 1 is bullish, -1 is bearish.

            Example
            -------
            >>> from openbb import obb
            >>> obb.equity.discovery.top_retail(limit=5)
        """  # noqa: E501

        return self._run(
            "/equity/discovery/top_retail",
            **filter_inputs(
                provider_choices={
                    "provider": self._get_provider(
                        provider,
                        "/equity/discovery/top_retail",
                        ("nasdaq",),
                    )
                },
                standard_params={
                    "limit": limit,
                },
                extra_params=kwargs,
            )
        )

    @validate
    def undervalued_growth(
        self,
        sort: Annotated[
            str,
            OpenBBCustomParameter(
                description="Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."
            ),
        ] = "desc",
        provider: Optional[Literal["yfinance"]] = None,
        **kwargs
    ) -> OBBject:
        """Get undervalued growth Equities.

        Parameters
        ----------
        sort : str
            Sort order. Possible values: 'asc', 'desc'. Default: 'desc'.
        provider : Optional[Literal['yfinance']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'yfinance' if there is
            no default.

        Returns
        -------
        OBBject
            results : List[EquityUndervaluedGrowth]
                Serializable results.
            provider : Optional[Literal['yfinance']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        EquityUndervaluedGrowth
        -----------------------
        symbol : str
            Symbol representing the entity requested in the data.
        name : str
            Name of the entity.
        price : float
            Last price.
        change : float
            Change in price value.
        percent_change : float
            Percent change.
        volume : float
            The trading volume.
        market_cap : Optional[str]
            Market Cap. (provider: yfinance)
        avg_volume_3_months : Optional[float]
            Average volume over the last 3 months in millions. (provider: yfinance)
        pe_ratio_ttm : Optional[float]
            PE Ratio (TTM). (provider: yfinance)

        Example
        -------
        >>> from openbb import obb
        >>> obb.equity.discovery.undervalued_growth(sort="desc")
        """  # noqa: E501

        return self._run(
            "/equity/discovery/undervalued_growth",
            **filter_inputs(
                provider_choices={
                    "provider": self._get_provider(
                        provider,
                        "/equity/discovery/undervalued_growth",
                        ("yfinance",),
                    )
                },
                standard_params={
                    "sort": sort,
                },
                extra_params=kwargs,
            )
        )

    @validate
    def undervalued_large_caps(
        self,
        sort: Annotated[
            str,
            OpenBBCustomParameter(
                description="Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."
            ),
        ] = "desc",
        provider: Optional[Literal["yfinance"]] = None,
        **kwargs
    ) -> OBBject:
        """Get undervalued large cap Equities.

        Parameters
        ----------
        sort : str
            Sort order. Possible values: 'asc', 'desc'. Default: 'desc'.
        provider : Optional[Literal['yfinance']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'yfinance' if there is
            no default.

        Returns
        -------
        OBBject
            results : List[EquityUndervaluedLargeCaps]
                Serializable results.
            provider : Optional[Literal['yfinance']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        EquityUndervaluedLargeCaps
        --------------------------
        symbol : str
            Symbol representing the entity requested in the data.
        name : str
            Name of the entity.
        price : float
            Last price.
        change : float
            Change in price value.
        percent_change : float
            Percent change.
        volume : float
            The trading volume.
        market_cap : Optional[float]
            Market Cap. (provider: yfinance)
        avg_volume_3_months : Optional[float]
            Average volume over the last 3 months in millions. (provider: yfinance)
        pe_ratio_ttm : Optional[float]
            PE Ratio (TTM). (provider: yfinance)

        Example
        -------
        >>> from openbb import obb
        >>> obb.equity.discovery.undervalued_large_caps(sort="desc")
        """  # noqa: E501

        return self._run(
            "/equity/discovery/undervalued_large_caps",
            **filter_inputs(
                provider_choices={
                    "provider": self._get_provider(
                        provider,
                        "/equity/discovery/undervalued_large_caps",
                        ("yfinance",),
                    )
                },
                standard_params={
                    "sort": sort,
                },
                extra_params=kwargs,
            )
        )

    @validate
    def upcoming_release_days(
        self, provider: Optional[Literal["seeking_alpha"]] = None, **kwargs
    ) -> OBBject:
        """Get upcoming release days.

        Parameters
        ----------
        provider : Optional[Literal['seeking_alpha']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'seeking_alpha' if there is
            no default.
        limit : int
            The number of data entries to return.In this case, the number of lookahead days. (provider: seeking_alpha)

        Returns
        -------
        OBBject
            results : List[UpcomingReleaseDays]
                Serializable results.
            provider : Optional[Literal['seeking_alpha']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        UpcomingReleaseDays
        -------------------
        symbol : str
            Symbol representing the entity requested in the data.
        name : str
            The full name of the asset.
        exchange : str
            The exchange the asset is traded on.
        release_time_type : str
            The type of release time.
        release_date : date
            The date of the release.
        sector_id : Optional[int]
            The sector ID of the asset. (provider: seeking_alpha)

        Example
        -------
        >>> from openbb import obb
        >>> obb.equity.discovery.upcoming_release_days()
        """  # noqa: E501

        return self._run(
            "/equity/discovery/upcoming_release_days",
            **filter_inputs(
                provider_choices={
                    "provider": self._get_provider(
                        provider,
                        "/equity/discovery/upcoming_release_days",
                        ("seeking_alpha",),
                    )
                },
                standard_params={},
                extra_params=kwargs,
            )
        )
