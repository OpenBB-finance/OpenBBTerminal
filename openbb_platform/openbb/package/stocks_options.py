### THIS FILE IS AUTO-GENERATED. DO NOT EDIT. ###

from openbb_core.app.static.container import Container
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.model.custom_parameter import OpenBBCustomParameter
import openbb_provider
import pandas
import datetime
import pydantic
from pydantic import BaseModel
from inspect import Parameter
import typing
from typing import List, Dict, Union, Optional, Literal
from annotated_types import Ge, Le, Gt, Lt
from typing_extensions import Annotated
from openbb_core.app.utils import df_to_basemodel
from openbb_core.app.static.decorators import validate

from openbb_core.app.static.filters import filter_inputs

from openbb_provider.abstract.data import Data
import openbb_core.app.model.command_context
import openbb_core.app.model.obbject
import types


class ROUTER_stocks_options(Container):
    """/stocks/options
    chains
    """

    def __repr__(self) -> str:
        return self.__doc__ or ""

    @validate
    def chains(
        self,
        symbol: Annotated[
            Union[str, List[str]],
            OpenBBCustomParameter(description="Symbol to get data for."),
        ],
        provider: Optional[Literal["cboe", "intrinio"]] = None,
        **kwargs
    ) -> OBBject[List[Data]]:
        """Get the complete options chain for a ticker.

        Parameters
        ----------
        symbol : str
            Symbol to get data for.
        provider : Optional[Literal['cboe', 'intrinio']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'cboe' if there is
            no default.
        date : Optional[datetime.date]
            Date for which the options chains are returned. (provider: intrinio)

        Returns
        -------
        OBBject
            results : List[OptionsChains]
                Serializable results.
            provider : Optional[Literal['cboe', 'intrinio']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        OptionsChains
        -------------
        contract_symbol : str
            Contract symbol for the option.
        symbol : Optional[str]
            Underlying symbol for the option.
        expiration : date
            Expiration date of the contract.
        strike : float
            Strike price of the contract.
        option_type : str
            Call or Put.
        eod_date : Optional[date]
            Date for which the options chains are returned.
        close : Optional[float]
            Close price for the option that day.
        close_bid : Optional[float]
            The closing bid price for the option that day.
        close_ask : Optional[float]
            The closing ask price for the option that day.
        volume : Optional[float]
            Current trading volume on the contract.
        open : Optional[float]
            Opening price of the option.
        open_bid : Optional[float]
            The opening bid price for the option that day.
        open_ask : Optional[float]
            The opening ask price for the option that day.
        open_interest : Optional[float]
            Open interest on the contract.
        high : Optional[float]
            High price of the option.
        low : Optional[float]
            Low price of the option.
        mark : Optional[float]
            The mid-price between the latest bid-ask spread.
        ask_high : Optional[float]
            The highest ask price for the option that day.
        ask_low : Optional[float]
            The lowest ask price for the option that day.
        bid_high : Optional[float]
            The highest bid price for the option that day.
        bid_low : Optional[float]
            The lowest bid price for the option that day.
        implied_volatility : Optional[float]
            Implied volatility of the option.
        delta : Optional[float]
            Delta of the option.
        gamma : Optional[float]
            Gamma of the option.
        theta : Optional[float]
            Theta of the option.
        vega : Optional[float]
            Vega of the option.
        bid_size : Optional[int]
            Bid size for the option. (provider: cboe)
        ask_size : Optional[int]
            Ask size for the option. (provider: cboe)
        theoretical : Optional[float]
            Theoretical value of the option. (provider: cboe)
        last_trade_price : Optional[float]
            Last trade price of the option. (provider: cboe)
        tick : Optional[str]
            Whether the last tick was up or down in price. (provider: cboe)
        prev_close : Optional[float]
            Previous closing price of the option. (provider: cboe)
        change : Optional[float]
            Change in  price of the option. (provider: cboe)
        change_percent : Optional[float]
            Change, in percent, of the option. (provider: cboe)
        rho : Optional[float]
            Rho of the option. (provider: cboe)
        last_trade_timestamp : Optional[datetime]
            Last trade timestamp of the option. (provider: cboe)
        dte : Optional[int]
            Days to expiration for the option. (provider: cboe)
        Example
        --------

        >>> from openbb import obb
        >>> obb.stocks.options.chains(symbol=AAPL)
        """  # noqa: E501

        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "symbol": ",".join(symbol) if isinstance(symbol, list) else symbol,
            },
            extra_params=kwargs,
        )

        return self._run(
            "/stocks/options/chains",
            **inputs,
        )
