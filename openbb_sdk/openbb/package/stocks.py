### THIS FILE IS AUTO-GENERATED. DO NOT EDIT. ###

import datetime
from typing import List, Literal, Optional, Union

import pydantic
import pydantic.main
from openbb_core.app.model.custom_parameter import OpenBBCustomParameter
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.static.container import Container
from openbb_core.app.static.filters import filter_inputs
from pydantic import BaseModel, validate_arguments
from typing_extensions import Annotated


class CLASS_stocks(Container):
    """/stocks
    /ca
    /dd
    /fa
    info
    load
    multiples
    news
    /options
    quote
    search
    """

    def __repr__(self) -> str:
        return self.__doc__ or ""

    @property
    def ca(self):  # route = "/stocks/ca"
        from . import stocks_ca

        return stocks_ca.CLASS_stocks_ca(command_runner=self._command_runner)

    @property
    def dd(self):  # route = "/stocks/dd"
        from . import stocks_dd

        return stocks_dd.CLASS_stocks_dd(command_runner=self._command_runner)

    @property
    def fa(self):  # route = "/stocks/fa"
        from . import stocks_fa

        return stocks_fa.CLASS_stocks_fa(command_runner=self._command_runner)

    @validate_arguments
    def info(
        self,
        symbol: Annotated[
            Union[str, List[str]],
            OpenBBCustomParameter(description="Symbol to get data for."),
        ],
        provider: Optional[Literal["cboe"]] = None,
        **kwargs
    ) -> OBBject[List]:
        """Get general price and performance metrics of a stock.

        Parameters
        ----------
        symbol : Union[str, List[str]]
            Symbol to get data for.
        provider : Optional[Literal['cboe']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'cboe' if there is
            no default.

        Returns
        -------
        OBBject
            results : List[StockInfo]
                Serializable results.
            provider : Optional[Literal['cboe']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            metadata: Optional[Metadata]
                Metadata info about the command execution.

        StockInfo
        ---------
        symbol : Optional[str]
            Symbol to get data for.
        name : Optional[str]
            Name associated with the ticker symbol.
        price : Optional[float]
            Last transaction price.
        open : Optional[float]
            Opening price of the stock.
        high : Optional[float]
            High price of the current trading day.
        low : Optional[float]
            Low price of the current trading day.
        close : Optional[float]
            Closing price of the most recent trading day.
        change : Optional[float]
            Change in price over the current trading period.
        change_percent : Optional[float]
            Percent change in price over the current trading period.
        prev_close : Optional[float]
            Previous closing price.
        type : Optional[str]
            Type of asset. (provider: cboe)
        exchange_id : Optional[int]
            The Exchange ID number. (provider: cboe)
        tick : Optional[str]
            Whether the last sale was an up or down tick. (provider: cboe)
        bid : Optional[float]
            Current bid price. (provider: cboe)
        bid_size : Optional[float]
            Bid lot size. (provider: cboe)
        ask : Optional[float]
            Current ask price. (provider: cboe)
        ask_size : Optional[float]
            Ask lot size. (provider: cboe)
        volume : Optional[float]
            Stock volume for the current trading day. (provider: cboe)
        iv30 : Optional[float]
            The 30-day implied volatility of the stock. (provider: cboe)
        iv30_change : Optional[float]
            Change in 30-day implied volatility of the stock. (provider: cboe)
        last_trade_timestamp : Optional[datetime]
            Last trade timestamp for the stock. (provider: cboe)
        iv30_annual_high : Optional[float]
            The 1-year high of implied volatility. (provider: cboe)
        hv30_annual_high : Optional[float]
            The 1-year high of realized volatility. (provider: cboe)
        iv30_annual_low : Optional[float]
            The 1-year low of implied volatility. (provider: cboe)
        hv30_annual_low : Optional[float]
            The 1-year low of realized volatility. (provider: cboe)
        iv60_annual_high : Optional[float]
            The 60-day high of implied volatility. (provider: cboe)
        hv60_annual_high : Optional[float]
            The 60-day high of realized volatility. (provider: cboe)
        iv60_annual_low : Optional[float]
            The 60-day low of implied volatility. (provider: cboe)
        hv60_annual_low : Optional[float]
            The 60-day low of realized volatility. (provider: cboe)
        iv90_annual_high : Optional[float]
            The 90-day high of implied volatility. (provider: cboe)
        hv90_annual_high : Optional[float]
            The 90-day high of realized volatility. (provider: cboe)"""  # noqa: E501

        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "symbol": ",".join(symbol) if isinstance(symbol, list) else symbol,
            },
            extra_params=kwargs,
        )

        return self._command_runner.run(
            "/stocks/info",
            **inputs,
        )

    @validate_arguments
    def load(
        self,
        symbol: Annotated[
            Union[str, List[str]],
            OpenBBCustomParameter(description="Symbol to get data for."),
        ],
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
        chart: bool = False,
        provider: Optional[
            Literal["cboe", "fmp", "intrinio", "polygon", "yfinance"]
        ] = None,
        **kwargs
    ) -> OBBject[List]:
        """Load stock data for a specific ticker.

        Parameters
        ----------
        symbol : Union[str, List[str]]
            Symbol to get data for.
        start_date : Union[datetime.date, NoneType, str]
            Start date of the data, in YYYY-MM-DD format.
        end_date : Union[datetime.date, NoneType, str]
            End date of the data, in YYYY-MM-DD format.
        chart : bool
            Whether to create a chart or not, by default False.
        provider : Optional[Literal['cboe', 'fmp', 'intrinio', 'polygon', 'yfinance']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'cboe' if there is
            no default.
        interval : Union[Literal['1d', '1m'], NoneType, Literal['1min', '5min', '15min', '30min', '1hour', '4hour', '1day'], Literal['1m', '2m', '5m', '15m', '30m', '60m', '90m', '1h', '1d', '5d', '1wk', '1mo', '3mo']]
            None
        timeseries : Optional[pydantic.types.NonNegativeInt]
            Number of days to look back. (provider: fmp)
        timezone : Optional[Literal['Africa/Algiers', 'Africa/Cairo', 'Africa/Casablanca', 'Africa/Harare', 'Africa/Johannesburg', 'Africa/Monrovia', 'Africa/Nairobi', 'America/Argentina/Buenos_Aires', 'America/Bogota', 'America/Caracas', 'America/Chicago', 'America/Chihuahua', 'America/Denver', 'America/Godthab', 'America/Guatemala', 'America/Guyana', 'America/Halifax', 'America/Indiana/Indianapolis', 'America/Juneau', 'America/La_Paz', 'America/Lima', 'America/Los_Angeles', 'America/Mazatlan', 'America/Mexico_City', 'America/Monterrey', 'America/Montevideo', 'America/New_York', 'America/Phoenix', 'America/Regina', 'America/Santiago', 'America/Sao_Paulo', 'America/St_Johns', 'America/Tijuana', 'Asia/Almaty', 'Asia/Baghdad', 'Asia/Baku', 'Asia/Bangkok', 'Asia/Chongqing', 'Asia/Colombo', 'Asia/Dhaka', 'Asia/Hong_Kong', 'Asia/Irkutsk', 'Asia/Jakarta', 'Asia/Jerusalem', 'Asia/Kabul', 'Asia/Kamchatka', 'Asia/Karachi', 'Asia/Kathmandu', 'Asia/Kolkata', 'Asia/Krasnoyarsk', 'Asia/Kuala_Lumpur', 'Asia/Kuwait', 'Asia/Magadan', 'Asia/Muscat', 'Asia/Novosibirsk', 'Asia/Rangoon', 'Asia/Riyadh', 'Asia/Seoul', 'Asia/Shanghai', 'Asia/Singapore', 'Asia/Srednekolymsk', 'Asia/Taipei', 'Asia/Tashkent', 'Asia/Tbilisi', 'Asia/Tehran', 'Asia/Tokyo', 'Asia/Ulaanbaatar', 'Asia/Urumqi', 'Asia/Vladivostok', 'Asia/Yakutsk', 'Asia/Yekaterinburg', 'Asia/Yerevan', 'Atlantic/Azores', 'Atlantic/Cape_Verde', 'Atlantic/South_Georgia', 'Australia/Adelaide', 'Australia/Brisbane', 'Australia/Darwin', 'Australia/Hobart', 'Australia/Melbourne', 'Australia/Perth', 'Australia/Sydney', 'Etc/UTC', 'UTC', 'Europe/Amsterdam', 'Europe/Athens', 'Europe/Belgrade', 'Europe/Berlin', 'Europe/Bratislava', 'Europe/Brussels', 'Europe/Bucharest', 'Europe/Budapest', 'Europe/Copenhagen', 'Europe/Dublin', 'Europe/Helsinki', 'Europe/Istanbul', 'Europe/Kaliningrad', 'Europe/Kiev', 'Europe/Lisbon', 'Europe/Ljubljana', 'Europe/London', 'Europe/Madrid', 'Europe/Minsk', 'Europe/Moscow', 'Europe/Paris', 'Europe/Prague', 'Europe/Riga', 'Europe/Rome', 'Europe/Samara', 'Europe/Sarajevo', 'Europe/Skopje', 'Europe/Sofia', 'Europe/Stockholm', 'Europe/Tallinn', 'Europe/Vienna', 'Europe/Vilnius', 'Europe/Volgograd', 'Europe/Warsaw', 'Europe/Zagreb', 'Pacific/Apia', 'Pacific/Auckland', 'Pacific/Chatham', 'Pacific/Fakaofo', 'Pacific/Fiji', 'Pacific/Guadalcanal', 'Pacific/Guam', 'Pacific/Honolulu', 'Pacific/Majuro', 'Pacific/Midway', 'Pacific/Noumea', 'Pacific/Pago_Pago', 'Pacific/Port_Moresby', 'Pacific/Tongatapu']]
            Returns trading times in this timezone. (provider: intrinio)
        source : Optional[Literal['realtime', 'delayed', 'nasdaq_basic']]
            The source of the data. (provider: intrinio)
        start_time : Optional[datetime.time]
            Return intervals starting at the specified time on the `start_date` formatted as 'hh:mm:ss'. (provider: intrinio)
        end_time : Optional[datetime.time]
            Return intervals stopping at the specified time on the `end_date` formatted as 'hh:mm:ss'. (provider: intrinio)
        interval_size : Optional[Literal['1m', '5m', '10m', '15m', '30m', '60m', '1h']]
            The data time frequency. (provider: intrinio)
        limit : Union[pydantic.types.NonNegativeInt, NoneType, pydantic.types.PositiveInt]
            None
        next_page : Optional[str]
            Token to get the next page of data from a previous API call. (provider: intrinio)
        all_pages : Optional[bool]
            Returns all pages of data from the API call at once. (provider: intrinio)
        timespan : Literal['minute', 'hour', 'day', 'week', 'month', 'quarter', 'year']
            Timespan of the data. (provider: polygon)
        sort : Literal['asc', 'desc']
            Sort order of the data. (provider: polygon)
        adjusted : bool
            Whether the data is adjusted. (provider: polygon)
        multiplier : PositiveInt
            Multiplier of the timespan. (provider: polygon)
        period : Optional[Literal['1d', '5d', '1mo', '3mo', '6mo', '1y', '2y', '5y', '10y', 'ytd', 'max']]
            Period of the data to return. (provider: yfinance)
        prepost : bool
            Include Pre and Post market data. (provider: yfinance)
        adjust : bool
            Adjust all the data automatically. (provider: yfinance)
        back_adjust : bool
            Back-adjusted data to mimic true historical prices. (provider: yfinance)

        Returns
        -------
        OBBject
            results : List[StockHistorical]
                Serializable results.
            provider : Optional[Literal['cboe', 'fmp', 'intrinio', 'polygon', 'yfinance']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            metadata: Optional[Metadata]
                Metadata info about the command execution.

        StockHistorical
        ---------------
        date : Union[datetime, date]
            The date of the data.
        open : Optional[PositiveFloat]
            The open price of the symbol.
        high : Optional[PositiveFloat]
            The high price of the symbol.
        low : Optional[PositiveFloat]
            The low price of the symbol.
        close : Optional[PositiveFloat]
            The close price of the symbol.
        volume : Optional[NonNegativeInt]
            The volume of the symbol.
        calls_volume : Optional[float]
            Number of calls traded during the most recent trading period. Only valid if interval is 1m. (provider: cboe)
        puts_volume : Optional[float]
            Number of puts traded during the most recent trading period. Only valid if interval is 1m. (provider: cboe)
        total_options_volume : Optional[float]
            Total number of options traded during the most recent trading period. Only valid if interval is 1m. (provider: cboe)
        adj_close : Optional[float]
            Adjusted Close Price of the symbol. (provider: fmp)
        unadjusted_volume : Optional[float]
            Unadjusted volume of the symbol. (provider: fmp)
        change : Optional[float]
            Change in the price of the symbol from the previous day. (provider: fmp)
        change_percent : Optional[float]
            Change \\% in the price of the symbol. (provider: fmp)
        vwap : Optional[float]
            Volume Weighted Average Price of the symbol. (provider: fmp)
        label : Optional[str]
            Human readable format of the date. (provider: fmp)
        change_over_time : Optional[float]
            Change \\% in the price of the symbol over a period of time. (provider: fmp)
        close_time : Optional[datetime]
            The timestamp that represents the end of the interval span. (provider: intrinio)
        interval : Optional[str]
            The data time frequency. (provider: intrinio)
        average : Optional[float]
            Average trade price of an individual stock during the interval. (provider: intrinio)
        transactions : Optional[PositiveInt]
            Number of transactions for the symbol in the time period. (provider: polygon)
        """  # noqa: E501

        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "symbol": ",".join(symbol) if isinstance(symbol, list) else symbol,
                "start_date": start_date,
                "end_date": end_date,
            },
            extra_params=kwargs,
            chart=chart,
        )

        return self._command_runner.run(
            "/stocks/load",
            **inputs,
        )

    @validate_arguments
    def multiples(
        self,
        symbol: Annotated[
            Union[str, List[str]],
            OpenBBCustomParameter(description="Symbol to get data for."),
        ],
        limit: Annotated[
            Optional[int],
            OpenBBCustomParameter(description="The number of data entries to return."),
        ] = 100,
        chart: bool = False,
        provider: Optional[Literal["fmp"]] = None,
        **kwargs
    ) -> OBBject[List]:
        """Get valuation multiples for a stock ticker.

        Parameters
        ----------
        symbol : Union[str, List[str]]
            Symbol to get data for.
        limit : Optional[int]
            The number of data entries to return.
        chart : bool
            Whether to create a chart or not, by default False.
        provider : Optional[Literal['fmp']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'fmp' if there is
            no default.

        Returns
        -------
        OBBject
            results : List[StockMultiples]
                Serializable results.
            provider : Optional[Literal['fmp']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            metadata: Optional[Metadata]
                Metadata info about the command execution.

        StockMultiples
        --------------
        revenue_per_share_ttm : Optional[float]
            Revenue per share calculated as trailing twelve months.
        net_income_per_share_ttm : Optional[float]
            Net income per share calculated as trailing twelve months.
        operating_cash_flow_per_share_ttm : Optional[float]
            Operating cash flow per share calculated as trailing twelve months.
        free_cash_flow_per_share_ttm : Optional[float]
            Free cash flow per share calculated as trailing twelve months.
        cash_per_share_ttm : Optional[float]
            Cash per share calculated as trailing twelve months.
        book_value_per_share_ttm : Optional[float]
            Book value per share calculated as trailing twelve months.
        tangible_book_value_per_share_ttm : Optional[float]
            Tangible book value per share calculated as trailing twelve months.
        shareholders_equity_per_share_ttm : Optional[float]
            Shareholders equity per share calculated as trailing twelve months.
        interest_debt_per_share_ttm : Optional[float]
            Interest debt per share calculated as trailing twelve months.
        market_cap_ttm : Optional[float]
            Market capitalization calculated as trailing twelve months.
        enterprise_value_ttm : Optional[float]
            Enterprise value calculated as trailing twelve months.
        pe_ratio_ttm : Optional[float]
            Price-to-earnings ratio (P/E ratio) calculated as trailing twelve months.
        price_to_sales_ratio_ttm : Optional[float]
            Price-to-sales ratio calculated as trailing twelve months.
        pocf_ratio_ttm : Optional[float]
            Price-to-operating cash flow ratio calculated as trailing twelve months.
        pfcf_ratio_ttm : Optional[float]
            Price-to-free cash flow ratio calculated as trailing twelve months.
        pb_ratio_ttm : Optional[float]
            Price-to-book ratio calculated as trailing twelve months.
        ptb_ratio_ttm : Optional[float]
            Price-to-tangible book ratio calculated as trailing twelve months.
        ev_to_sales_ttm : Optional[float]
            Enterprise value-to-sales ratio calculated as trailing twelve months.
        enterprise_value_over_ebitda_ttm : Optional[float]
            Enterprise value-to-EBITDA ratio calculated as trailing twelve months.
        ev_to_operating_cash_flow_ttm : Optional[float]
            Enterprise value-to-operating cash flow ratio calculated as trailing twelve months.
        ev_to_free_cash_flow_ttm : Optional[float]
            Enterprise value-to-free cash flow ratio calculated as trailing twelve months.
        earnings_yield_ttm : Optional[float]
            Earnings yield calculated as trailing twelve months.
        free_cash_flow_yield_ttm : Optional[float]
            Free cash flow yield calculated as trailing twelve months.
        debt_to_equity_ttm : Optional[float]
            Debt-to-equity ratio calculated as trailing twelve months.
        debt_to_assets_ttm : Optional[float]
            Debt-to-assets ratio calculated as trailing twelve months.
        net_debt_to_ebitda_ttm : Optional[float]
            Net debt-to-EBITDA ratio calculated as trailing twelve months.
        current_ratio_ttm : Optional[float]
            Current ratio calculated as trailing twelve months.
        interest_coverage_ttm : Optional[float]
            Interest coverage calculated as trailing twelve months.
        income_quality_ttm : Optional[float]
            Income quality calculated as trailing twelve months.
        dividend_yield_ttm : Optional[float]
            Dividend yield calculated as trailing twelve months.
        dividend_yield_percentage_ttm : Optional[float]
            Dividend yield percentage calculated as trailing twelve months.
        dividend_to_market_cap_ttm : Optional[float]
            Dividend to market capitalization ratio calculated as trailing twelve months.
        dividend_per_share_ttm : Optional[float]
            Dividend per share calculated as trailing twelve months.
        payout_ratio_ttm : Optional[float]
            Payout ratio calculated as trailing twelve months.
        sales_general_and_administrative_to_revenue_ttm : Optional[float]
            Sales general and administrative expenses-to-revenue ratio calculated as trailing twelve months.
        research_and_development_to_revenue_ttm : Optional[float]
            Research and development expenses-to-revenue ratio calculated as trailing twelve months.
        intangibles_to_total_assets_ttm : Optional[float]
            Intangibles-to-total assets ratio calculated as trailing twelve months.
        capex_to_operating_cash_flow_ttm : Optional[float]
            Capital expenditures-to-operating cash flow ratio calculated as trailing twelve months.
        capex_to_revenue_ttm : Optional[float]
            Capital expenditures-to-revenue ratio calculated as trailing twelve months.
        capex_to_depreciation_ttm : Optional[float]
            Capital expenditures-to-depreciation ratio calculated as trailing twelve months.
        stock_based_compensation_to_revenue_ttm : Optional[float]
            Stock-based compensation-to-revenue ratio calculated as trailing twelve months.
        graham_number_ttm : Optional[float]
            Graham number calculated as trailing twelve months.
        roic_ttm : Optional[float]
            Return on invested capital calculated as trailing twelve months.
        return_on_tangible_assets_ttm : Optional[float]
            Return on tangible assets calculated as trailing twelve months.
        graham_net_net_ttm : Optional[float]
            Graham net-net working capital calculated as trailing twelve months.
        working_capital_ttm : Optional[float]
            Working capital calculated as trailing twelve months.
        tangible_asset_value_ttm : Optional[float]
            Tangible asset value calculated as trailing twelve months.
        net_current_asset_value_ttm : Optional[float]
            Net current asset value calculated as trailing twelve months.
        invested_capital_ttm : Optional[float]
            Invested capital calculated as trailing twelve months.
        average_receivables_ttm : Optional[float]
            Average receivables calculated as trailing twelve months.
        average_payables_ttm : Optional[float]
            Average payables calculated as trailing twelve months.
        average_inventory_ttm : Optional[float]
            Average inventory calculated as trailing twelve months.
        days_sales_outstanding_ttm : Optional[float]
            Days sales outstanding calculated as trailing twelve months.
        days_payables_outstanding_ttm : Optional[float]
            Days payables outstanding calculated as trailing twelve months.
        days_of_inventory_on_hand_ttm : Optional[float]
            Days of inventory on hand calculated as trailing twelve months.
        receivables_turnover_ttm : Optional[float]
            Receivables turnover calculated as trailing twelve months.
        payables_turnover_ttm : Optional[float]
            Payables turnover calculated as trailing twelve months.
        inventory_turnover_ttm : Optional[float]
            Inventory turnover calculated as trailing twelve months.
        roe_ttm : Optional[float]
            Return on equity calculated as trailing twelve months.
        capex_per_share_ttm : Optional[float]
            Capital expenditures per share calculated as trailing twelve months."""  # noqa: E501

        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "symbol": ",".join(symbol) if isinstance(symbol, list) else symbol,
                "limit": limit,
            },
            extra_params=kwargs,
            chart=chart,
        )

        return self._command_runner.run(
            "/stocks/multiples",
            **inputs,
        )

    @validate_arguments
    def news(
        self,
        symbols: Annotated[
            str, OpenBBCustomParameter(description="Symbol to get data for.")
        ],
        page: Annotated[
            int,
            OpenBBCustomParameter(
                description="Page of the stock news to be retrieved."
            ),
        ] = 0,
        limit: Annotated[
            Optional[pydantic.types.NonNegativeInt],
            OpenBBCustomParameter(description="Number of results to return per page."),
        ] = 15,
        chart: bool = False,
        provider: Optional[
            Literal["benzinga", "fmp", "intrinio", "polygon", "yfinance"]
        ] = None,
        **kwargs
    ) -> OBBject[BaseModel]:
        """Get news for one or more stock tickers.

        Parameters
        ----------
        symbols : str
            Symbol to get data for.
        page : int
            Page of the stock news to be retrieved.
        limit : Optional[pydantic.types.NonNegativeInt]
            Number of results to return per page.
        chart : bool
            Whether to create a chart or not, by default False.
        provider : Optional[Literal['benzinga', 'fmp', 'intrinio', 'polygon', 'yfinance']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'benzinga' if there is
            no default.
        display_output : Literal['headline', 'summary', 'full', 'all']
            Type of data to return. (provider: benzinga)
        date : Optional[datetime.datetime]
            Date of the news to retrieve. (provider: benzinga)
        date_from : Optional[datetime.datetime]
            Start date of the news to retrieve. (provider: benzinga)
        date_to : Optional[datetime.datetime]
            End date of the news to retrieve. (provider: benzinga)
        updated_since : Optional[int]
            Number of seconds since the news was updated. (provider: benzinga)
        published_since : Optional[int]
            Number of seconds since the news was published. (provider: benzinga)
        sort : Union[Literal['published_at', 'updated_at', 'title', 'author', 'channel', 'ticker', 'topic', 'content_type'], NoneType, str]
            None
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
        next_page : Optional[str]
            Token to get the next page of data from a previous API call. (provider: intrinio)
        all_pages : Optional[bool]
            Returns all pages of data from the API call at once. (provider: intrinio)
        ticker_lt : Optional[str]
            Less than, by default None (provider: polygon)
        ticker_lte : Optional[str]
            Less than or equal, by default None (provider: polygon)
        ticker_gt : Optional[str]
            Greater than, by default None (provider: polygon)
        ticker_gte : Optional[str]
            Greater than or equal, by default None (provider: polygon)
        published_utc : Optional[str]
            Published date of the query, by default None (provider: polygon)
        published_utc_lt : Optional[str]
            Less than, by default None (provider: polygon)
        published_utc_lte : Optional[str]
            Less than or equal, by default None (provider: polygon)
        published_utc_gt : Optional[str]
            Greater than, by default None (provider: polygon)
        published_utc_gte : Optional[str]
            Greater than or equal, by default None (provider: polygon)
        order : Optional[Literal['asc', 'desc']]
            Sort order of the query, by default None (provider: polygon)

        Returns
        -------
        OBBject
            results : List[StockNews]
                Serializable results.
            provider : Optional[Literal['benzinga', 'fmp', 'intrinio', 'polygon', 'yfinance']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            metadata: Optional[Metadata]
                Metadata info about the command execution.

        StockNews
        ---------
        date : Optional[datetime]
            Published date of the news.
        title : Optional[str]
            Title of the news.
        text : Optional[str]
            Text/body of the news.
        url : Optional[str]
            URL of the news.
        images : Optional[List[BenzingaImage]]
            Images associated with the news. (provider: benzinga)
        channels : Optional[List[str]]
            Channels associated with the news. (provider: benzinga)
        stocks : Optional[List[str]]
            Stocks associated with the news. (provider: benzinga)
        tags : Optional[List[str]]
            Tags associated with the news. (provider: benzinga)
        teaser : Optional[str]
            Teaser of the news. (provider: benzinga)
        symbol : Optional[str]
            Ticker of the fetched news. (provider: fmp)
        image : Optional[str]
            URL to the image of the news source. (provider: fmp)
        site : Optional[str]
            Name of the news source. (provider: fmp)
        id : Optional[str]
            Intrinio ID for the news article. (provider: intrinio)
        amp_url : Optional[str]
            AMP URL. (provider: polygon)
        author : Optional[str]
            Author of the article. (provider: polygon)
        image_url : Optional[str]
            Image URL. (provider: polygon)
        keywords : Optional[List[str]]
            Keywords in the article (provider: polygon)
        publisher : Union[PolygonPublisher, NoneType, str]
            Publisher of the article. (provider: polygon)
        tickers : Optional[List[str]]
            Tickers covered in the article. (provider: polygon)
        uuid : Optional[str]
            Unique identifier for the news article (provider: yfinance)
        type : Optional[str]
            Type of the news article (provider: yfinance)
        thumbnail : Optional[Mapping[str, Any]]
            Thumbnail related data to the ticker news article. (provider: yfinance)
        related_tickers : Optional[str]
            Tickers related to the news article. (provider: yfinance)"""  # noqa: E501

        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "symbols": symbols,
                "page": page,
                "limit": limit,
            },
            extra_params=kwargs,
            chart=chart,
        )

        return self._command_runner.run(
            "/stocks/news",
            **inputs,
        )

    @property
    def options(self):  # route = "/stocks/options"
        from . import stocks_options

        return stocks_options.CLASS_stocks_options(command_runner=self._command_runner)

    @validate_arguments
    def quote(
        self,
        symbol: Annotated[
            Union[str, List[str]],
            OpenBBCustomParameter(description="Symbol to get data for."),
        ],
        provider: Optional[Literal["fmp", "intrinio"]] = None,
        **kwargs
    ) -> OBBject[List]:
        """Load stock data for a specific ticker.

        Parameters
        ----------
        symbol : Union[str, List[str]]
            Symbol to get data for.
        provider : Optional[Literal['fmp', 'intrinio']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'fmp' if there is
            no default.
        source : Literal['iex', 'bats', 'bats_delayed', 'utp_delayed', 'cta_a_delayed', 'cta_b_delayed', 'intrinio_mx', 'intrinio_mx_plus', 'delayed_sip']
            Source of the data. (provider: intrinio)

        Returns
        -------
        OBBject
            results : List[StockQuote]
                Serializable results.
            provider : Optional[Literal['fmp', 'intrinio']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            metadata: Optional[Metadata]
                Metadata info about the command execution.

        StockQuote
        ----------
        day_low : Optional[float]
            Lowest price of the stock in the current trading day.
        day_high : Optional[float]
            Highest price of the stock in the current trading day.
        date : Optional[datetime]
            Timestamp of the stock quote.
        symbol : Optional[str]
            Symbol of the company. (provider: fmp)
        name : Optional[str]
            Name of the company. (provider: fmp)
        price : Optional[float]
            Current trading price of the stock. (provider: fmp)
        changes_percentage : Optional[float]
            Change percentage of the stock price. (provider: fmp)
        change : Optional[float]
            Change in the stock price. (provider: fmp)
        year_high : Optional[float]
            Highest price of the stock in the last 52 weeks. (provider: fmp)
        year_low : Optional[float]
            Lowest price of the stock in the last 52 weeks. (provider: fmp)
        market_cap : Optional[float]
            Market cap of the company. (provider: fmp)
        price_avg50 : Optional[float]
            50 days average price of the stock. (provider: fmp)
        price_avg200 : Optional[float]
            200 days average price of the stock. (provider: fmp)
        volume : Optional[int]
            Volume of the stock in the current trading day. (provider: fmp)
        avg_volume : Optional[int]
            Average volume of the stock in the last 10 trading days. (provider: fmp)
        exchange : Optional[str]
            Exchange the stock is traded on. (provider: fmp)
        open : Optional[float]
            Opening price of the stock in the current trading day. (provider: fmp)
        previous_close : Optional[float]
            Previous closing price of the stock. (provider: fmp)
        eps : Optional[float]
            Earnings per share of the stock. (provider: fmp)
        pe : Optional[float]
            Price earnings ratio of the stock. (provider: fmp)
        earnings_announcement : Optional[str]
            Earnings announcement date of the stock. (provider: fmp)
        shares_outstanding : Optional[int]
            Number of shares outstanding of the stock. (provider: fmp)
        last_price : Optional[float]
            Price of the last trade. (provider: intrinio)
        last_time : Optional[datetime]
            Date and Time when the last trade occurred. (provider: intrinio)
        last_size : Optional[int]
            Size of the last trade. (provider: intrinio)
        bid_price : Optional[float]
            Price of the top bid order. (provider: intrinio)
        bid_size : Optional[int]
            Size of the top bid order. (provider: intrinio)
        ask_price : Optional[float]
            Price of the top ask order. (provider: intrinio)
        ask_size : Optional[int]
            Size of the top ask order. (provider: intrinio)
        open_price : Optional[float]
            Open price for the trading day. (provider: intrinio)
        close_price : Optional[float]
            Closing price for the trading day (IEX source only). (provider: intrinio)
        high_price : Optional[float]
            High Price for the trading day. (provider: intrinio)
        low_price : Optional[float]
            Low Price for the trading day. (provider: intrinio)
        exchange_volume : Optional[int]
            Number of shares exchanged during the trading day on the exchange. (provider: intrinio)
        market_volume : Optional[int]
            Number of shares exchanged during the trading day for the whole market. (provider: intrinio)
        updated_on : Optional[datetime]
            Date and Time when the data was last updated. (provider: intrinio)
        source : Optional[str]
            Source of the data. (provider: intrinio)
        listing_venue : Optional[str]
            Listing venue where the trade took place (SIP source only). (provider: intrinio)
        sales_conditions : Optional[str]
            Indicates any sales condition modifiers associated with the trade. (provider: intrinio)
        quote_conditions : Optional[str]
            Indicates any quote condition modifiers associated with the trade. (provider: intrinio)
        market_center_code : Optional[str]
            Market center character code. (provider: intrinio)
        is_darkpool : Optional[bool]
            Whether or not the current trade is from a darkpool. (provider: intrinio)"""  # noqa: E501

        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "symbol": ",".join(symbol) if isinstance(symbol, list) else symbol,
            },
            extra_params=kwargs,
        )

        return self._command_runner.run(
            "/stocks/quote",
            **inputs,
        )

    @validate_arguments
    def search(
        self,
        query: Annotated[str, OpenBBCustomParameter(description="Search query.")] = "",
        ticker: Annotated[
            bool,
            OpenBBCustomParameter(description="Whether to search by ticker symbol."),
        ] = False,
        provider: Optional[Literal["cboe"]] = None,
        **kwargs
    ) -> OBBject[List]:
        """Search for a company or stock ticker.

        Parameters
        ----------
        query : str
            Search query.
        ticker : bool
            Whether to search by ticker symbol.
        provider : Optional[Literal['cboe']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'cboe' if there is
            no default.

        Returns
        -------
        OBBject
            results : List[StockSearch]
                Serializable results.
            provider : Optional[Literal['cboe']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            metadata: Optional[Metadata]
                Metadata info about the command execution.

        StockSearch
        -----------
        symbol : Optional[str]
            Symbol to get data for.
        name : Optional[str]
            Name of the company.
        dpm_name : Optional[str]
            Name of the primary market maker. (provider: cboe)
        post_station : Optional[str]
            Post and station location on the CBOE trading floor. (provider: cboe)"""  # noqa: E501

        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "query": query,
                "ticker": ticker,
            },
            extra_params=kwargs,
        )

        return self._command_runner.run(
            "/stocks/search",
            **inputs,
        )
