### THIS FILE IS AUTO-GENERATED. DO NOT EDIT. ###

import datetime
import typing
from typing import Annotated, Literal, Optional, Union

from pydantic import validate_arguments

from openbb_core.app.model.obbject import Obbject
from openbb_core.app.model.custom_parameter import OpenBBCustomParameter
from openbb_core.app.static.container import Container
from openbb_core.app.static.filters import filter_call, filter_inputs, filter_output


class CLASS_crypto(Container):
    @filter_call
    @validate_arguments
    def load(
        self,
        symbol: typing.Annotated[
            str, OpenBBCustomParameter(description="Symbol to get data for.")
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
        provider: Optional[Literal["polygon", "fmp"]] = None,
        **kwargs
    ) -> Obbject[typing.List]:
        r"""Crypto Intraday Price.


        openbb
        ======

        Parameters
        ----------
        provider: Literal[polygon, fmp]
            The provider to use for the query.
        symbol : ConstrainedStrValue
            Symbol to get data for.
        start_date : Optional[date]
            Start date of the data, in YYYY-MM-DD format.
        end_date : Optional[date]
            End date of the data, in YYYY-MM-DD format.

        Returns
        -------
        Obbject
            results: List[Data]
                Serializable results.
            provider: Optional[PROVIDERS]
                Provider name.
            warnings: Optional[List[Warning_]]
                List of warnings.
            error: Optional[Error]
                Caught exceptions.
            chart: Optional[Chart]
                Chart object.


        CryptoEOD
        ---------
        date : datetime
            The date of the data.
        open : PositiveFloat
            The open price of the symbol.
        high : PositiveFloat
            The high price of the symbol.
        low : PositiveFloat
            The low price of the symbol.
        close : PositiveFloat
            The close price of the symbol.
        volume : PositiveFloat
            The volume of the symbol.
        vwap : PositiveFloat
            Volume Weighted Average Price of the symbol.

        polygon
        =======

        Parameters
        ----------
        timespan : Literal['minute', 'hour', 'day', 'week', 'month', 'quarter', 'year']
            The timespan of the data.
        sort : Literal['asc', 'desc']
            Sort order of the data.
        limit : PositiveInt
            The number of data entries to return.
        adjusted : bool
            Whether the data is adjusted.
        multiplier : PositiveInt
            The multiplier of the timespan.


        CryptoEOD
        ---------
        n : PositiveInt
            The number of transactions for the symbol in the time period.

        fmp
        ===

        Parameters
        ----------
        timeseries : Optional[NonNegativeInt]
            Number of days to look back.


        CryptoEOD
        ---------
        adjClose : float
            Adjusted Close Price of the symbol.
        unadjustedVolume : float
            Unadjusted volume of the symbol.
        change : float
            Change in the price of the symbol from the previous day.
        changePercent : float
            Change \% in the price of the symbol.
        label : str
            Human readable format of the date.
        changeOverTime : float
            Change \% in the price of the symbol over a period of time."""
        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "symbol": symbol,
                "start_date": start_date,
                "end_date": end_date,
            },
            extra_params=kwargs,
            chart=chart,
        )

        o = self._command_runner_session.run(
            "/crypto/load",
            **inputs,
        ).output

        return filter_output(o)
