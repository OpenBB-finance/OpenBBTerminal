### THIS FILE IS AUTO-GENERATED. DO NOT EDIT. ###

from typing import List, Literal, Optional, Union

from openbb_core.app.model.custom_parameter import OpenBBCustomParameter
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.static.container import Container
from openbb_core.app.static.utils.decorators import validate
from openbb_core.app.static.utils.filters import filter_inputs
from typing_extensions import Annotated


class ROUTER_equity_shorts(Container):
    """/equity/shorts
    fails_to_deliver
    short_interest
    short_volume
    """

    def __repr__(self) -> str:
        return self.__doc__ or ""

    @validate
    def fails_to_deliver(
        self,
        symbol: Annotated[
            Union[str, List[str]],
            OpenBBCustomParameter(description="Symbol to get data for."),
        ],
        provider: Optional[Literal["sec"]] = None,
        **kwargs
    ) -> OBBject:
        """Get reported Fail-to-deliver (FTD) data.

        Parameters
        ----------
        symbol : str
            Symbol to get data for.
        provider : Optional[Literal['sec']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'sec' if there is
            no default.
        limit : Optional[int]

                Limit the number of reports to parse, from most recent.
                Approximately 24 reports per year, going back to 2009.
                 (provider: sec)
        skip_reports : Optional[int]

                Skip N number of reports from current. A value of 1 will skip the most recent report.
                 (provider: sec)

        Returns
        -------
        OBBject
            results : List[EquityFTD]
                Serializable results.
            provider : Optional[Literal['sec']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        EquityFTD
        ---------
        settlement_date : Optional[date]
            The settlement date of the fail.
        symbol : Optional[str]
            Symbol representing the entity requested in the data.
        cusip : Optional[str]
            CUSIP of the Security.
        quantity : Optional[int]
            The number of fails on that settlement date.
        price : Optional[float]
            The price at the previous closing price from the settlement date.
        description : Optional[str]
            The description of the Security.

        Example
        -------
        >>> from openbb import obb
        >>> obb.equity.shorts.fails_to_deliver(symbol="AAPL")
        """  # noqa: E501

        return self._run(
            "/equity/shorts/fails_to_deliver",
            **filter_inputs(
                provider_choices={
                    "provider": provider,
                },
                standard_params={
                    "symbol": ",".join(symbol) if isinstance(symbol, list) else symbol,
                },
                extra_params=kwargs,
            )
        )

    @validate
    def short_interest(
        self,
        symbol: Annotated[
            Union[str, List[str]],
            OpenBBCustomParameter(description="Symbol to get data for."),
        ] = None,
        provider: Optional[Literal["finra"]] = None,
        **kwargs
    ) -> OBBject:
        """Get reported Short Volume and Days to Cover data.

        Parameters
        ----------
        symbol : str
            Symbol to get data for.
        provider : Optional[Literal['finra']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'finra' if there is
            no default.

        Returns
        -------
        OBBject
            results : List[EquityShortInterest]
                Serializable results.
            provider : Optional[Literal['finra']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        EquityShortInterest
        -------------------
        settlement_date : date
            The mid-month short interest report is based on short positions held by members on the settlement date of the 15th of each month. If the 15th falls on a weekend or another non-settlement date, the designated settlement date will be the previous business day on which transactions settled. The end-of-month short interest report is based on short positions held on the last business day of the month on which transactions settle. Once the short position reports are received, the short interest data is compiled for each equity security and provided for publication on the 7th business day after the reporting settlement date.
        symbol : str
            Symbol representing the entity requested in the data.
        issue_name : str
            Unique identifier of the issue.
        market_class : str
            Primary listing market.
        current_short_position : float
            The total number of shares in the issue that are reflected on the books and records of the reporting firms as short as defined by Rule 200 of Regulation SHO as of the current cycle’s designated settlement date.
        previous_short_position : float
            The total number of shares in the issue that are reflected on the books and records of the reporting firms as short as defined by Rule 200 of Regulation SHO as of the previous cycle’s designated settlement date.
        avg_daily_volume : float
            Total Volume or Adjusted Volume in case of splits / Total trade days between (previous settlement date + 1) to (current settlement date). The NULL values are translated as zero.
        days_to_cover : float
            The number of days of average share volume it would require to buy all of the shares that were sold short during the reporting cycle. Formula: Short Interest / Average Daily Share Volume, Rounded to Hundredths. 1.00 will be displayed for any values equal or less than 1 (i.e., Average Daily Share is equal to or greater than Short Interest). N/A will be displayed If the days to cover is Zero (i.e., Average Daily Share Volume is Zero).
        change : float
            Change in Shares Short from Previous Cycle: Difference in short interest between the current cycle and the previous cycle.
        change_pct : float
            Change in Shares Short from Previous Cycle as a percent.

        Example
        -------
        >>> from openbb import obb
        >>> obb.equity.shorts.short_interest()
        """  # noqa: E501

        return self._run(
            "/equity/shorts/short_interest",
            **filter_inputs(
                provider_choices={
                    "provider": provider,
                },
                standard_params={
                    "symbol": ",".join(symbol) if isinstance(symbol, list) else symbol,
                },
                extra_params=kwargs,
            )
        )

    @validate
    def short_volume(
        self,
        symbol: Annotated[
            Union[str, List[str]],
            OpenBBCustomParameter(description="Symbol to get data for."),
        ] = None,
        provider: Optional[Literal["stockgrid"]] = None,
        **kwargs
    ) -> OBBject:
        """Get reported Fail-to-deliver (FTD) data.

        Parameters
        ----------
        symbol : str
            Symbol to get data for.
        provider : Optional[Literal['stockgrid']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'stockgrid' if there is
            no default.

        Returns
        -------
        OBBject
            results : List[ShortVolume]
                Serializable results.
            provider : Optional[Literal['stockgrid']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        ShortVolume
        -----------
        date : Optional[date]
            The date of the data.
        market : Optional[str]
            Reporting Facility ID. N=NYSE TRF, Q=NASDAQ TRF Carteret, B=NASDAQ TRY Chicago, D=FINRA ADF
        short_volume : Optional[int]
            Aggregate reported share volume of executed short sale and short sale exempt trades during regular trading hours
        short_exempt_volume : Optional[int]
            Aggregate reported share volume of executed short sale exempt trades during regular trading hours
        total_volume : Optional[int]
            Aggregate reported share volume of executed trades during regular trading hours
        close : Optional[float]
            Closing price of the stock on the date. (provider: stockgrid)
        short_volume_percent : Optional[float]
            Percentage of the total volume that was short volume. (provider: stockgrid)

        Example
        -------
        >>> from openbb import obb
        >>> obb.equity.shorts.short_volume()
        """  # noqa: E501

        return self._run(
            "/equity/shorts/short_volume",
            **filter_inputs(
                provider_choices={
                    "provider": provider,
                },
                standard_params={
                    "symbol": ",".join(symbol) if isinstance(symbol, list) else symbol,
                },
                extra_params=kwargs,
            )
        )
