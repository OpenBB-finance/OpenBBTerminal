"""Option helper functions"""
__docformat__ = "numpy"

import os
import logging
from math import e, log
from typing import Union, Any

import numpy as np
import pandas as pd
from scipy.stats import norm

from openbb_terminal.helper_funcs import export_data
from openbb_terminal.rich_config import console
from openbb_terminal.decorators import log_start_end

logger = logging.getLogger(__name__)


@log_start_end(log=logger)
def get_loss_at_strike(strike: float, chain: pd.DataFrame) -> float:
    """Function to get the loss at the given expiry

    Parameters
    ----------
    strike : Union[int,float]
        Value to calculate total loss at
    chain : Dataframe:
        Dataframe containing at least strike and openInterest

    Returns
    -------
    loss : Union[float,int]
        Total loss
    """

    itm_calls = chain[chain.index < strike][["OI_call"]]
    itm_calls["loss"] = (strike - itm_calls.index) * itm_calls["OI_call"]
    call_loss = itm_calls["loss"].sum()

    itm_puts = chain[chain.index > strike][["OI_put"]]
    itm_puts["loss"] = (itm_puts.index - strike) * itm_puts["OI_put"]
    put_loss = itm_puts.loss.sum()
    loss = call_loss + put_loss

    return loss


@log_start_end(log=logger)
def calculate_max_pain(chain: pd.DataFrame) -> Union[int, float]:
    """Returns the max pain for a given call/put dataframe

    Parameters
    ----------
    chain : DataFrame
        Dataframe to calculate value from

    Returns
    -------
    max_pain : int
        Max pain value
    """

    strikes = np.array(chain.index)
    if ("OI_call" not in chain.columns) or ("OI_put" not in chain.columns):
        console.print("Incorrect columns.  Unable to parse max pain")
        return np.nan

    loss = [get_loss_at_strike(price_at_exp, chain) for price_at_exp in strikes]
    chain["loss"] = loss
    max_pain = chain["loss"].idxmin()

    return max_pain


@log_start_end(log=logger)
def convert(orig: str, to: str) -> float:
    """Convert a string to a specific type of number
    Parameters
    ----------
    orig : str
        String to convert
    Returns
    -------
    number : float
        Decimal value of string
    """
    clean = orig.replace("%", "").replace("+", "").replace(",", "")
    if to == "%":
        return float(clean) / 100
    if to == ",":
        return float(clean)
    raise ValueError("Invalid to format, please use '%' or ','.")


@log_start_end(log=logger)
def rn_payoff(x: str, df: pd.DataFrame, put: bool, delta: int, rf: float) -> float:
    """The risk neutral payoff for a stock
    Parameters
    ----------
    x : str
        Strike price
    df : pd.DataFrame
        Dataframe of stocks prices and probabilities
    put : bool
        Whether the asset is a put or a call
    delta : int
        Difference between today's date and expirations date in days
    rf : float
        The current risk-free rate

    Returns
    -------
    number : float
        Risk neutral value of option
    """
    if put:
        df["Gain"] = np.where(x > df["Price"], x - df["Price"], 0)
    else:
        df["Gain"] = np.where(x < df["Price"], df["Price"] - x, 0)
    df["Vals"] = df["Chance"] * df["Gain"]
    risk_free = (1 + rf) ** (delta / 365)
    return sum(df["Vals"]) / risk_free


@log_start_end(log=logger)
def export_options(export: str, options, file_name: str):
    """Special function to assist in exporting options

    Parameters
    ----------
    export: str
        Format to export file
    options: Chain
        Chain object object
    file_name: str
        The file_name to export to

    """
    for option_name in ["calls", "puts"]:
        option = getattr(options, option_name)
        export_data(
            export,
            os.path.dirname(os.path.abspath(__file__)),
            f"{file_name}_{option_name}",
            option,
        )


@log_start_end(log=logger)
def process_option_chain(data: pd.DataFrame, source: str) -> pd.DataFrame:
    """
    Create an option chain DataFrame from the given symbol.
    Does additional processing in order to get some homogeneous between the sources.

    Parameters
    ----------
    data : pd.DataFrame
        The option chain data
    source: str, optional
        The source of the data. Valid values are "Tradier", "Nasdaq", and
        "YahooFinance". The default value is "Tradier".

    Returns
    -------
    pd.DataFrame
        A DataFrame containing the option chain data, with columns as specified
        in the `option_chain_column_mapping` mapping, and an additional column
        "optionType" that indicates whether the option is a call or a put.
    """
    if source == "Tradier":
        df = data.rename(columns=option_chain_column_mapping["Tradier"])

    elif source == "Nasdaq":
        call_columns = ["expiration", "strike"] + [
            col for col in data.columns if col.startswith("c_")
        ]
        calls = data[call_columns].rename(columns=option_chain_column_mapping["Nasdaq"])
        calls["optionType"] = "call"

        put_columns = ["expiration", "strike"] + [
            col for col in data.columns if col.startswith("p_")
        ]
        puts = data[put_columns].rename(columns=option_chain_column_mapping["Nasdaq"])
        puts["optionType"] = "put"

        df = pd.concat([calls, puts]).drop_duplicates()

    elif source == "YahooFinance":
        call_columns = ["expiration", "strike"] + [
            col for col in data.columns if col.endswith("_c")
        ]
        calls = data[call_columns].rename(
            columns=option_chain_column_mapping["YahooFinance"]
        )
        calls["optionType"] = "call"

        put_columns = ["expiration", "strike"] + [
            col for col in data.columns if col.endswith("_p")
        ]
        puts = data[put_columns].rename(
            columns=option_chain_column_mapping["YahooFinance"]
        )
        puts["optionType"] = "put"

        df = pd.concat([calls, puts]).drop_duplicates()

    else:
        df = pd.DataFrame()

    return df


opt_chain_cols = {
    "lastTradeDate": {"format": "date", "label": "Last Trade Date"},
    "strike": {"format": "${x:.2f}", "label": "Strike"},
    "lastPrice": {"format": "${x:.2f}", "label": "Last Price"},
    "bid": {"format": "${x:.2f}", "label": "Bid"},
    "ask": {"format": "${x:.2f}", "label": "Ask"},
    "change": {"format": "${x:.2f}", "label": "Change"},
    "percentChange": {"format": "{x:.2f}%", "label": "Percent Change"},
    "volume": {"format": "{x:.2f}", "label": "Volume"},
    "openInterest": {"format": "", "label": "Open Interest"},
    "impliedVolatility": {"format": "{x:.2f}", "label": "Implied Volatility"},
}

option_chain_column_mapping = {
    "Nasdaq": {
        "strike": "strike",
        "c_Last": "last",
        "c_Change": "change",
        "c_Bid": "bid",
        "c_Ask": "ask",
        "c_Volume": "volume",
        "c_Openinterest": "openInterest",
        "p_Last": "last",
        "p_Change": "change",
        "p_Bid": "bid",
        "p_Ask": "ask",
        "p_Volume": "volume",
        "p_Openinterest": "openInterest",
    },
    "Tradier": {
        "open_interest": "openInterest",
        "option_type": "optionType",
    },
    "YahooFinance": {
        "contractSymbol_c": "contractSymbol",
        "lastTradeDate_c": "lastTradeDate",
        "strike": "strike",
        "lastPrice_c": "lastPrice",
        "bid_c": "bid",
        "ask_c": "ask",
        "change_c": "change",
        "percentChange_c": "percentChange",
        "volume_c": "volume",
        "openInterest_c": "openInterest",
        "impliedVolatility_c": "impliedVolatility",
        "inTheMoney_c": "inTheMoney",
        "contractSize_c": "contractSize",
        "currency_c": "currency",
        "contractSymbol_p": "contractSymbol",
        "lastTradeDate_p": "lastTradeDate",
        "lastPrice_p": "lastPrice",
        "bid_p": "bid",
        "ask_p": "ask",
        "change_p": "change",
        "percentChange_p": "percentChange",
        "volume_p": "volume",
        "openInterest_p": "openInterest",
        "impliedVolatility_p": "impliedVolatility",
        "inTheMoney_p": "inTheMoney",
        "contractSize_p": "contractSize",
        "currency_p": "currency",
        "expiration": "expiration",
    },
}


# pylint: disable=R0903
class Chain:
    def __init__(self, data: Any, source: str = "Tradier"):
        if source == "Tradier":
            data = data.rename(columns=option_chain_column_mapping["Tradier"])
            self.calls = data[data["optionType"] == "call"]
            self.puts = data[data["optionType"] == "put"]

        elif source == "Nasdaq":
            call_columns = ["expiryDate", "strike"] + [
                col for col in data.columns if col.startswith("c_")
            ]
            put_columns = ["expiryDate", "strike"] + [
                col for col in data.columns if col.startswith("p_")
            ]
            self.calls = data[call_columns].rename(
                columns=option_chain_column_mapping["Nasdaq"]
            )
            self.puts = data[put_columns].rename(
                columns=option_chain_column_mapping["Nasdaq"]
            )

        elif source == "YahooFinance":
            self.calls = data.calls
            self.puts = data.puts

        else:
            self.calls = None
            self.puts = None


class Option:
    def __init__(
        self,
        s: float,
        k: float,
        rf: float,
        div_cont: float,
        expiry: float,
        vol: float,
        opt_type: int = 1,
    ):
        """
        Class for getting the greeks of options. Inspiration from:
        http://www.smileofthales.com/computation/option-pricing-python-inheritance/

        Parameters
        ----------
        s : float
            The underlying asset price
        k : float
            The option strike price
        rf : float
            The risk-free rate
        div_cont : float
            The dividend continuous rate
        expiry : float
            The number of days until expiration
        vol : float
            The underlying volatility for an option
        opt_type : int
            put == -1; call == +1
        """
        self.Type = int(opt_type)
        self.price = float(s)
        self.strike = float(k)
        self.risk_free = float(rf)
        self.div_cont = float(div_cont)
        self.exp_time = float(expiry) / 365.0
        self._sigma = float(vol)
        self.sigmaT = self._sigma * self.exp_time**0.5

    @property
    def d1(self):
        return (
            log(self.price / self.strike)
            + (self.risk_free - self.div_cont + 0.5 * (self.sigma**2)) * self.exp_time
        ) / self.sigmaT

    @property
    def d2(self):
        return self.d1 - self.sigmaT

    @property
    def sigma(self):
        return self._sigma

    @sigma.setter
    def sigma(self, val):
        self._sigma = val
        self.sigmaT = val * self.exp_time**0.5

    def Premium(self):
        tmpprem = self.Type * (
            self.price
            * e ** (-self.div_cont * self.exp_time)
            * norm.cdf(self.Type * self.d1)
            - self.strike
            * e ** (-self.risk_free * self.exp_time)
            * norm.cdf(self.Type * self.d2)
        )
        return tmpprem

    # 1st order greeks

    def Delta(self):
        dfq = np.exp(-self.div_cont * self.exp_time)
        if self.Type == 1:
            return dfq * norm.cdf(self.d1)
        return dfq * (norm.cdf(self.d1) - 1)

    def Vega(self):
        """Vega for 1% change in vol"""
        dfq = np.exp(-self.div_cont * self.exp_time)
        return 0.01 * self.price * dfq * norm.pdf(self.d1) * self.exp_time**0.5

    def Theta(self, time_factor=1.0 / 365.0):
        """Theta, by default for 1 calendar day change"""
        df = np.exp(-self.risk_free * self.exp_time)
        dfq = np.exp(-self.div_cont * self.exp_time)
        tmptheta = time_factor * (
            -0.5
            * self.price
            * dfq
            * norm.pdf(self.d1)
            * self.sigma
            / (self.exp_time**0.5)
            + self.Type
            * (
                self.div_cont * self.price * dfq * norm.cdf(self.Type * self.d1)
                - self.risk_free * self.strike * df * norm.cdf(self.Type * self.d2)
            )
        )
        return tmptheta

    def Rho(self):
        df = np.exp(-self.risk_free * self.exp_time)
        return (
            self.Type
            * self.strike
            * self.exp_time
            * df
            * 0.01
            * norm.cdf(self.Type * self.d2)
        )

    def Phi(self):
        dfq = np.exp(-self.div_cont * self.exp_time)
        return (
            0.01
            * -self.Type
            * self.exp_time
            * self.price
            * dfq
            * norm.cdf(self.Type * self.d1)
        )

    # 2nd order greeks

    def Gamma(self):
        dfq = np.exp(-self.div_cont * self.exp_time)
        return dfq * norm.pdf(self.d1) / (self.price * self.sigmaT)

    def Charm(self, time_factor=1.0 / 365.0):
        """Calculates Charm, by default for 1 calendar day change"""
        dfq = np.exp(-self.div_cont * self.exp_time)
        cdf = norm.cdf(self.Type * self.d1)
        return (
            time_factor
            * -dfq
            * (
                norm.pdf(self.d1)
                * (
                    (self.risk_free - self.div_cont) / (self.sigmaT)
                    - self.d2 / (2 * self.exp_time)
                )
                + (self.Type * -self.div_cont) * cdf
            )
        )

    def Vanna(self, change: float):
        """
        Vanna for a given percent change in volatility

        Parameters
        ----------
        change : float
            The change in volatility

        Returns
        ----------
        num : float
            The Vanna

        """

        return (
            change
            * -(e ** (-self.div_cont * self.exp_time))
            * self.d2
            / self.sigma
            * norm.pdf(self.d1)
        )

    def Vomma(self, change):
        """
        Vomma for a given percent change in volatility

        Parameters
        ----------
        change : float
            The change in volatility

        Returns
        ----------
        num : float
            The Vomma

        """
        return (
            change
            * np.exp(-self.div_cont * self.exp_time)
            * self.d1
            * self.d2
            * np.sqrt(self.exp_time)
            * self.price
            * norm.pdf(self.d1)
            / self._sigma
        )
