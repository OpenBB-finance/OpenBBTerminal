"""Optimization Model"""
__docformat__ = "numpy"

# pylint: disable=R0913, C0302, E1101

import logging
from typing import Dict, List, Tuple
from datetime import date

import numpy as np
import pandas as pd
import riskfolio as rp
from dateutil.relativedelta import relativedelta, FR
import yfinance as yf

from openbb_terminal.decorators import log_start_end
from openbb_terminal.portfolio.portfolio_optimization import (
    yahoo_finance_model,
    optimizer_helper,
)
from openbb_terminal.rich_config import console

logger = logging.getLogger(__name__)

upper_risk = {
    "MV": "upperdev",
    "MAD": "uppermad",
    "MSV": "uppersdev",
    "FLPM": "upperflpm",
    "SLPM": "upperslpm",
    "CVaR": "upperCVaR",
    "EVaR": "upperEVaR",
    "WR": "upperwr",
    "MDD": "uppermdd",
    "ADD": "upperadd",
    "CDaR": "upperCDaR",
    "EDaR": "upperEDaR",
    "UCI": "upperuci",
}

objectives_choices = {
    "minrisk": "MinRisk",
    "sharpe": "Sharpe",
    "utility": "Utility",
    "maxret": "MaxRet",
    "erc": "ERC",
}

risk_names = {
    "mv": "volatility",
    "mad": "mean absolute deviation",
    "gmd": "gini mean difference",
    "msv": "semi standard deviation",
    "var": "value at risk (VaR)",
    "cvar": "conditional value at risk (CVaR)",
    "tg": "tail gini",
    "evar": "entropic value at risk (EVaR)",
    "rg": "range",
    "cvrg": "CVaR range",
    "tgrg": "tail gini range",
    "wr": "worst realization",
    "flpm": "first lower partial moment",
    "slpm": "second lower partial moment",
    "mdd": "maximum drawdown uncompounded",
    "add": "average drawdown uncompounded",
    "dar": "drawdown at risk (DaR) uncompounded",
    "cdar": "conditional drawdown at risk (CDaR) uncompounded",
    "edar": "entropic drawdown at risk (EDaR) uncompounded",
    "uci": "ulcer index uncompounded",
    "mdd_rel": "maximum drawdown compounded",
    "add_rel": "average drawdown compounded",
    "dar_rel": "drawdown at risk (DaR) compounded",
    "cdar_rel": "conditional drawdown at risk (CDaR) compounded",
    "edar_rel": "entropic drawdown at risk (EDaR) compounded",
    "uci_rel": "ulcer index compounded",
}

risk_choices = {
    "mv": "MV",
    "mad": "MAD",
    "gmd": "GMD",
    "msv": "MSV",
    "var": "VaR",
    "cvar": "CVaR",
    "tg": "TG",
    "evar": "EVaR",
    "rg": "RG",
    "cvrg": "CVRG",
    "tgrg": "TGRG",
    "wr": "WR",
    "flpm": "FLPM",
    "slpm": "SLPM",
    "mdd": "MDD",
    "add": "ADD",
    "dar": "DaR",
    "cdar": "CDaR",
    "edar": "EDaR",
    "uci": "UCI",
    "mdd_rel": "MDD_Rel",
    "add_rel": "ADD_Rel",
    "dar_rel": "DaR_Rel",
    "cdar_rel": "CDaR_Rel",
    "edar_rel": "EDaR_Rel",
    "uci_rel": "UCI_Rel",
}

time_factor = {
    "D": 252.0,
    "W": 52.0,
    "M": 12.0,
}

dict_conversion = {"period": "historic_period", "start": "start_period"}


@log_start_end(log=logger)
def d_period(interval: str = "1y", start_date: str = "", end_date: str = ""):
    """
    Builds a date range string

    Parameters
    ----------
    interval : str
        interval starting today
    start_date: str
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    """
    extra_choices = {
        "ytd": "[Year-to-Date]",
        "max": "[All-time]",
    }

    if start_date == "":
        if interval in extra_choices:
            p = extra_choices[interval]
        else:
            if interval[-1] == "d":
                p = "[" + interval[:-1] + " Days]"
            elif interval[-1] == "w":
                p = "[" + interval[:-1] + " Weeks]"
            elif interval[-1] == "o":
                p = "[" + interval[:-2] + " Months]"
            elif interval[-1] == "y":
                p = "[" + interval[:-1] + " Years]"
        if p[1:3] == "1 ":
            p = p.replace("s", "")
    else:
        if end_date == "":
            end_ = date.today()
            if end_.weekday() >= 5:
                end_ = end_ + relativedelta(weekday=FR(-1))
            end_date = end_.strftime("%Y-%m-%d")
        p = "[From " + start_date + " to " + end_date + "]"

    return p


@log_start_end(log=logger)
def get_equal_weights(
    symbols: List[str],
    interval: str = "3y",
    start_date: str = "",
    end_date: str = "",
    log_returns: bool = False,
    freq: str = "D",
    maxnan: float = 0.05,
    threshold: float = 0,
    method: str = "time",
    value: float = 1.0,
) -> Tuple:
    """Equally weighted portfolio, where weight = 1/# of symbols

    Parameters
    ----------
    symbols : List[str]
        List of portfolio stocks
    interval : str, optional
        interval to get stock data, by default "3mo"
    start_date: str, optional
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str, optional
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    log_returns: bool, optional
        If True calculate log returns, else arithmetic returns. Default value
        is False
    freq: str, optional
        The frequency used to calculate returns. Default value is 'D'. Possible
        values are:
            - 'D' for daily returns.
            - 'W' for weekly returns.
            - 'M' for monthly returns.

    maxnan: float
        Max percentage of nan values accepted per asset to be included in
        returns.
    threshold: float
        Value used to replace outliers that are higher to threshold.
    method: str
        Method used to fill nan values. Default value is 'time'. For more information see
        `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`_.
    value : float, optional
        Amount to allocate.  Returns percentages if set to 1.

    Returns
    -------
    dict
        Dictionary of weights where keys are the tickers
    """

    stock_prices = yahoo_finance_model.process_stocks(
        symbols, interval, start_date, end_date
    )
    stock_returns = yahoo_finance_model.process_returns(
        stock_prices,
        log_returns=log_returns,
        freq=freq,
        maxnan=maxnan,
        threshold=threshold,
        method=method,
    )

    weights = {stock: value * round(1 / len(symbols), 5) for stock in symbols}

    return weights, stock_returns


@log_start_end(log=logger)
def get_property_weights(
    symbols: List[str],
    interval: str = "3y",
    start_date: str = "",
    end_date: str = "",
    log_returns: bool = False,
    freq: str = "D",
    maxnan: float = 0.05,
    threshold: float = 0,
    method: str = "time",
    s_property: str = "marketCap",
    value: float = 1.0,
) -> Tuple:
    """Calculate portfolio weights based on selected property

    Parameters
    ----------
    symbols : List[str]
        List of portfolio stocks
    interval : str, optional
        interval to get stock data, by default "3mo"
    start_date: str, optional
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str, optional
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    log_returns: bool, optional
        If True calculate log returns, else arithmetic returns. Default value
        is False
    freq: str, optional
        The frequency used to calculate returns. Default value is 'D'. Possible
        values are:
            - 'D' for daily returns.
            - 'W' for weekly returns.
            - 'M' for monthly returns.

    maxnan: float
        Max percentage of nan values accepted per asset to be included in
        returns.
    threshold: float
        Value used to replace outliers that are higher to threshold.
    method: str
        Method used to fill nan values. Default value is 'time'. For more information see
        `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`_.
    s_property : str
        Property to weight portfolio by
    value : float, optional
        Amount of money to allocate

    Returns
    -------
    Dict
        Dictionary of portfolio weights or allocations
    """

    stock_prices = yahoo_finance_model.process_stocks(
        symbols, interval, start_date, end_date
    )
    stock_returns = yahoo_finance_model.process_returns(
        stock_prices,
        log_returns=log_returns,
        freq=freq,
        maxnan=maxnan,
        threshold=threshold,
        method=method,
    )

    prop = {}
    prop_sum = 0
    for stock in symbols:
        stock_prop = yf.Ticker(stock).info[s_property]
        if stock_prop is None:
            stock_prop = 0
        prop[stock] = stock_prop
        prop_sum += stock_prop

    if prop_sum == 0:
        console.print(f"No {s_property} was found on list of tickers provided", "\n")
        return None, None

    weights = {k: value * v / prop_sum for k, v in prop.items()}

    return weights, stock_returns


@log_start_end(log=logger)
def get_mean_risk_portfolio(
    symbols: List[str],
    interval: str = "3y",
    start_date: str = "",
    end_date: str = "",
    log_returns: bool = False,
    freq: str = "D",
    maxnan: float = 0.05,
    threshold: float = 0,
    method: str = "time",
    risk_measure: str = "MV",
    objective: str = "Sharpe",
    risk_free_rate: float = 0,
    risk_aversion: float = 1,
    alpha: float = 0.05,
    target_return: float = -1,
    target_risk: float = -1,
    mean: str = "hist",
    covariance: str = "hist",
    d_ewma: float = 0.94,
    value: float = 1.0,
    value_short: float = 0.0,
) -> Tuple:
    """Builds a mean risk optimal portfolio

    Parameters
    ----------
    symbols : List[str]
        List of portfolio stocks
    interval : str, optional
        interval to get stock data, by default "3mo"
    start_date: str, optional
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str, optional
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    log_returns: bool, optional
        If True calculate log returns, else arithmetic returns. Default value
        is False
    freq: str, optional
        The frequency used to calculate returns. Default value is 'D'. Possible
        values are:
            - 'D' for daily returns.
            - 'W' for weekly returns.
            - 'M' for monthly returns.

    maxnan: float
        Max percentage of nan values accepted per asset to be included in
        returns.
    threshold: float
        Value used to replace outliers that are higher to threshold.
    method: str
        Method used to fill nan values. Default value is 'time'. For more information see
        `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`_.
    objective: str
        Objective function of the optimization model.
        The default is 'Sharpe'. Possible values are:

        - 'MinRisk': Minimize the selected risk measure.
        - 'Utility': Maximize the risk averse utility function.
        - 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.
        - 'MaxRet': Maximize the expected return of the portfolio.

    risk_measure: str, optional
        The risk measure used to optimize the portfolio.
        The default is 'MV'. Possible values are:

        - 'MV': Standard Deviation.
        - 'MAD': Mean Absolute Deviation.
        - 'MSV': Semi Standard Deviation.
        - 'FLPM': First Lower Partial Moment (Omega Ratio).
        - 'SLPM': Second Lower Partial Moment (Sortino Ratio).
        - 'CVaR': Conditional Value at Risk.
        - 'EVaR': Entropic Value at Risk.
        - 'WR': Worst Realization.
        - 'ADD': Average Drawdown of uncompounded cumulative returns.
        - 'UCI': Ulcer Index of uncompounded cumulative returns.
        - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.
        - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.
        - 'MDD': Maximum Drawdown of uncompounded cumulative returns.

    risk_free_rate: float, optional
        Risk free rate, must be in annual frequency. Used for
        'FLPM' and 'SLPM' and Sharpe objective function. The default is 0.
    risk_aversion: float, optional
        Risk aversion factor of the 'Utility' objective function.
        The default is 1.
    alpha: float, optional
        Significance level of CVaR, EVaR, CDaR and EDaR
    target_return: float, optional
        Constraint on minimum level of portfolio's return.
    target_risk: float, optional
        Constraint on maximum level of portfolio's risk.
    mean: str, optional
        The method used to estimate the expected returns.
        The default value is 'hist'. Possible values are:

        - 'hist': use historical estimates.
        - 'ewma1': use ewma with adjust=True. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ewma2': use ewma with adjust=False. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.

    covariance: str, optional
        The method used to estimate the covariance matrix:
        The default is 'hist'. Possible values are:

        - 'hist': use historical estimates.
        - 'ewma1': use ewma with adjust=True. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ewma2': use ewma with adjust=False. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ledoit': use the Ledoit and Wolf Shrinkage method.
        - 'oas': use the Oracle Approximation Shrinkage method.
        - 'shrunk': use the basic Shrunk Covariance method.
        - 'gl': use the basic Graphical Lasso Covariance method.
        - 'jlogo': use the j-LoGo Covariance method. For more information see: :cite:`a-jLogo`.
        - 'fixed': denoise using fixed method. For more information see chapter 2 of :cite:`a-MLforAM`.
        - 'spectral': denoise using spectral method. For more information see chapter 2 of :cite:`a-MLforAM`.
        - 'shrink': denoise using shrink method. For more information see chapter 2 of :cite:`a-MLforAM`.

    d_ewma: float, optional
        The smoothing factor of ewma methods.
        The default is 0.94.
    value : float, optional
        Amount of money to allocate. The default is 1.
    value_short : float, optional
        Amount to allocate to portfolio in short positions. The default is 0.

    Returns
    -------
    Tuple
        Dictionary of portfolio weights and DataFrame of stock returns
    """
    stock_prices = yahoo_finance_model.process_stocks(
        symbols, interval, start_date, end_date
    )
    stock_returns = yahoo_finance_model.process_returns(
        stock_prices,
        log_returns=log_returns,
        freq=freq,
        maxnan=maxnan,
        threshold=threshold,
        method=method,
    )

    risk_free_rate = risk_free_rate / time_factor[freq.upper()]

    # Building the portfolio object
    port = rp.Portfolio(returns=stock_returns, alpha=alpha)

    # Estimate input parameters:
    port.assets_stats(method_mu=mean, method_cov=covariance, d=d_ewma)

    # Budget constraints
    port.upperlng = value
    if value_short > 0:
        port.sht = True
        port.uppersht = value_short
        port.budget = value - value_short
    else:
        port.budget = value

    # Estimate optimal portfolio:
    model = "Classic"
    hist = True

    if target_return > -1:
        port.lowerret = float(target_return) / time_factor[freq.upper()]

    if target_risk > -1:
        if risk_measure not in ["ADD", "MDD", "CDaR", "EDaR", "UCI"]:
            setattr(
                port,
                upper_risk[risk_measure],
                float(target_risk) / time_factor[freq.upper()] ** 0.5,
            )
        else:
            setattr(port, upper_risk[risk_measure], float(target_risk))

    weights = port.optimization(
        model=model,
        rm=risk_measure,
        obj=objective,
        rf=risk_free_rate,
        l=risk_aversion,
        hist=hist,
    )

    if weights is not None:
        weights = weights.round(5)
        weights = weights.squeeze().to_dict()

    return weights, stock_returns


@log_start_end(log=logger)
def get_max_sharpe(
    symbols: List[str],
    interval: str = "3y",
    start_date: str = "",
    end_date: str = "",
    log_returns: bool = False,
    freq: str = "D",
    maxnan: float = 0.05,
    threshold: float = 0,
    method: str = "time",
    risk_measure: str = "MV",
    risk_free_rate: float = 0,
    risk_aversion: float = 1,
    alpha: float = 0.05,
    target_return: float = -1,
    target_risk: float = -1,
    mean: str = "hist",
    covariance: str = "hist",
    d_ewma: float = 0.94,
    value: float = 1.0,
    value_short: float = 0.0,
) -> Tuple:
    """
    Builds a maximal return/risk ratio portfolio

    Parameters
    ----------
    symbols : List[str]
        List of portfolio tickers
    interval : str, optional
        interval to look at returns from
    start_date: str, optional
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str, optional
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    log_returns: bool, optional
        If True calculate log returns, else arithmetic returns. Default value
        is False
    freq: str, optional
        The frequency used to calculate returns. Default value is 'D'. Possible
        values are:
            - 'D' for daily returns.
            - 'W' for weekly returns.
            - 'M' for monthly returns.

    maxnan: float, optional
        Max percentage of nan values accepted per asset to be included in
        returns.
    threshold: float, optional
        Value used to replace outliers that are higher to threshold.
    method: str
        Method used to fill nan values. Default value is 'time'. For more information see
        `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`_.
    risk_measure: str, optional
        The risk measure used to optimize the portfolio.
        The default is 'MV'. Possible values are:

        - 'MV': Standard Deviation.
        - 'MAD': Mean Absolute Deviation.
        - 'MSV': Semi Standard Deviation.
        - 'FLPM': First Lower Partial Moment (Omega Ratio).
        - 'SLPM': Second Lower Partial Moment (Sortino Ratio).
        - 'CVaR': Conditional Value at Risk.
        - 'EVaR': Entropic Value at Risk.
        - 'WR': Worst Realization.
        - 'ADD': Average Drawdown of uncompounded cumulative returns.
        - 'UCI': Ulcer Index of uncompounded cumulative returns.
        - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.
        - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.
        - 'MDD': Maximum Drawdown of uncompounded cumulative returns.

    risk_free_rate: float, optional
        Risk free rate, must be in the same interval of assets returns. Used for
        'FLPM' and 'SLPM' and Sharpe objective function. The default is 0.
    alpha: float, optional
        Significance level of CVaR, EVaR, CDaR and EDaR
    target_return: float, optional
        Constraint on minimum level of portfolio's return.
    target_risk: float, optional
        Constraint on maximum level of portfolio's risk.
    mean: str, optional
        The method used to estimate the expected returns.
        The default value is 'hist'. Possible values are:

        - 'hist': use historical estimates.
        - 'ewma1': use ewma with adjust=True. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ewma2': use ewma with adjust=False. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.

    covariance: str, optional
        The method used to estimate the covariance matrix:
        The default is 'hist'. Possible values are:

        - 'hist': use historical estimates.
        - 'ewma1': use ewma with adjust=True. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ewma2': use ewma with adjust=False. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ledoit': use the Ledoit and Wolf Shrinkage method.
        - 'oas': use the Oracle Approximation Shrinkage method.
        - 'shrunk': use the basic Shrunk Covariance method.
        - 'gl': use the basic Graphical Lasso Covariance method.
        - 'jlogo': use the j-LoGo Covariance method. For more information see: :cite:`a-jLogo`.
        - 'fixed': denoise using fixed method. For more information see chapter 2 of :cite:`a-MLforAM`.
        - 'spectral': denoise using spectral method. For more information see chapter 2 of :cite:`a-MLforAM`.
        - 'shrink': denoise using shrink method. For more information see chapter 2 of :cite:`a-MLforAM`.

    d_ewma: float, optional
        The smoothing factor of ewma methods.
        The default is 0.94.
    value : float, optional
        Amount to allocate to portfolio in long positions, by default 1.0
    value_short : float, optional
        Amount to allocate to portfolio in short positions, by default 0.0

    Returns
    -------
    Tuple
        Dictionary of portfolio weights and DataFrame of stock returns
    """
    weights, stock_returns = get_mean_risk_portfolio(
        symbols=symbols,
        interval=interval,
        start_date=start_date,
        end_date=end_date,
        log_returns=log_returns,
        freq=freq,
        maxnan=maxnan,
        threshold=threshold,
        method=method,
        risk_measure=risk_choices[risk_measure.lower()],
        objective=objectives_choices["sharpe"],
        risk_free_rate=risk_free_rate,
        risk_aversion=risk_aversion,
        alpha=alpha,
        target_return=target_return,
        target_risk=target_risk,
        mean=mean,
        covariance=covariance,
        d_ewma=d_ewma,
        value=value,
        value_short=value_short,
    )

    return weights, stock_returns


@log_start_end(log=logger)
def get_max_diversification_portfolio(
    symbols: List[str],
    interval: str = "3y",
    start_date: str = "",
    end_date: str = "",
    log_returns: bool = False,
    freq: str = "D",
    maxnan: float = 0.05,
    threshold: float = 0,
    method: str = "time",
    covariance: str = "hist",
    d_ewma: float = 0.94,
    value: float = 1.0,
    value_short: float = 0,
) -> Tuple:
    """Builds a maximal diversification portfolio

    Parameters
    ----------
    symbols : List[str]
        List of portfolio stocks
    interval : str, optional
        interval to get stock data, by default "3mo"
    start_date: str
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    log_returns: bool
        If True calculate log returns, else arithmetic returns. Default value
        is False
    freq: str
        The frequency used to calculate returns. Default value is 'D'. Possible
        values are:
            - 'D' for daily returns.
            - 'W' for weekly returns.
            - 'M' for monthly returns.

    maxnan: float
        Max percentage of nan values accepted per asset to be included in
        returns.
    threshold: float
        Value used to replace outliers that are higher to threshold.
    method: str
        Method used to fill nan values. Default value is 'time'. For more information see
        `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`_.
    covariance: str, optional
        The method used to estimate the covariance matrix:
        The default is 'hist'. Possible values are:

        - 'hist': use historical estimates.
        - 'ewma1': use ewma with adjust=True. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ewma2': use ewma with adjust=False. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ledoit': use the Ledoit and Wolf Shrinkage method.
        - 'oas': use the Oracle Approximation Shrinkage method.
        - 'shrunk': use the basic Shrunk Covariance method.
        - 'gl': use the basic Graphical Lasso Covariance method.
        - 'jlogo': use the j-LoGo Covariance method. For more information see: :cite:`a-jLogo`.
        - 'fixed': denoise using fixed method. For more information see chapter 2 of :cite:`a-MLforAM`.
        - 'spectral': denoise using spectral method. For more information see chapter 2 of :cite:`a-MLforAM`.
        - 'shrink': denoise using shrink method. For more information see chapter 2 of :cite:`a-MLforAM`.

    d_ewma: float, optional
        The smoothing factor of ewma methods.
        The default is 0.94.
    value : float, optional
        Amount of money to allocate. The default is 1.
    value_short : float, optional
        Amount to allocate to portfolio in short positions. The default is 0.

    Returns
    -------
    Tuple
        Dictionary of portfolio weights and DataFrame of stock returns
    """
    stock_prices = yahoo_finance_model.process_stocks(
        symbols, interval, start_date, end_date
    )
    stock_returns = yahoo_finance_model.process_returns(
        stock_prices,
        log_returns=log_returns,
        freq=freq,
        maxnan=maxnan,
        threshold=threshold,
        method=method,
    )

    # Building the portfolio object
    port = rp.Portfolio(returns=stock_returns)

    # Estimate input parameters:
    port.assets_stats(method_mu="hist", method_cov=covariance, d=d_ewma)
    port.mu = stock_returns.std().to_frame().T

    # Budget constraints
    port.upperlng = value
    if value_short > 0:
        port.sht = True
        port.uppersht = value_short
        port.budget = value - value_short
    else:
        port.budget = value

    # Estimate optimal portfolio:
    weights = port.optimization(model="Classic", rm="MV", obj="Sharpe", rf=0, hist=True)

    if weights is not None:
        weights = weights.round(5)
        weights = weights.squeeze().to_dict()

    return weights, stock_returns


@log_start_end(log=logger)
def get_max_decorrelation_portfolio(
    symbols: List[str],
    interval: str = "3y",
    start_date: str = "",
    end_date: str = "",
    log_returns: bool = False,
    freq: str = "D",
    maxnan: float = 0.05,
    threshold: float = 0,
    method: str = "time",
    covariance: str = "hist",
    d_ewma: float = 0.94,
    value: float = 1.0,
    value_short: float = 0,
) -> Tuple:
    """Builds a maximal decorrelation portfolio

    Parameters
    ----------
    symbols : List[str]
        List of portfolio stocks
    interval : str, optional
        interval to get stock data, by default "3mo"
    start_date: str
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    log_returns: bool
        If True calculate log returns, else arithmetic returns. Default value
        is False
    freq: str
        The frequency used to calculate returns. Default value is 'D'. Possible
        values are:
            - 'D' for daily returns.
            - 'W' for weekly returns.
            - 'M' for monthly returns.

    maxnan: float
        Max percentage of nan values accepted per asset to be included in
        returns.
    threshold: float
        Value used to replace outliers that are higher to threshold.
    method: str
        Method used to fill nan values. Default value is 'time'. For more information see
        s`interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`_.
    covariance: str, optional
        The method used to estimate the covariance matrix:
        The default is 'hist'. Possible values are:

        - 'hist': use historical estimates.
        - 'ewma1': use ewma with adjust=True. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ewma2': use ewma with adjust=False. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ledoit': use the Ledoit and Wolf Shrinkage method.
        - 'oas': use the Oracle Approximation Shrinkage method.
        - 'shrunk': use the basic Shrunk Covariance method.
        - 'gl': use the basic Graphical Lasso Covariance method.
        - 'jlogo': use the j-LoGo Covariance method. For more information see: :cite:`a-jLogo`.
        - 'fixed': denoise using fixed method. For more information see chapter 2 of :cite:`a-MLforAM`.
        - 'spectral': denoise using spectral method. For more information see chapter 2 of :cite:`a-MLforAM`.
        - 'shrink': denoise using shrink method. For more information see chapter 2 of :cite:`a-MLforAM`.

    d_ewma: float, optional
        The smoothing factor of ewma methods.
        The default is 0.94.
    value : float, optional
        Amount of money to allocate. The default is 1.
    value_short : float, optional
        Amount to allocate to portfolio in short positions. The default is 0.

    Returns
    -------
    Tuple
        Dictionary of portfolio weights and DataFrame of stock returns
    """
    stock_prices = yahoo_finance_model.process_stocks(
        symbols, interval, start_date, end_date
    )
    stock_returns = yahoo_finance_model.process_returns(
        stock_prices,
        log_returns=log_returns,
        freq=freq,
        maxnan=maxnan,
        threshold=threshold,
        method=method,
    )

    # Building the portfolio object
    port = rp.Portfolio(returns=stock_returns)

    # Estimate input parameters:
    port.assets_stats(method_mu="hist", method_cov=covariance, d=d_ewma)
    port.cov = rp.cov2corr(port.cov)

    # Budget constraints
    port.upperlng = value
    if value_short > 0:
        port.sht = True
        port.uppersht = value_short
        port.budget = value - value_short
    else:
        port.budget = value

    # Estimate optimal portfolio:
    weights = port.optimization(
        model="Classic", rm="MV", obj="MinRisk", rf=0, hist=True
    )

    if weights is not None:
        weights = weights.round(5)
        weights = weights.squeeze().to_dict()

    return weights, stock_returns


@log_start_end(log=logger)
def get_black_litterman_portfolio(
    symbols: List[str],
    benchmark: Dict,
    p_views: List,
    q_views: List,
    interval: str = "3y",
    start_date: str = "",
    end_date: str = "",
    log_returns: bool = False,
    freq: str = "D",
    maxnan: float = 0.05,
    threshold: float = 0,
    method: str = "time",
    objective: str = "Sharpe",
    risk_free_rate: float = 0,
    risk_aversion: float = 1,
    delta: float = None,
    equilibrium: bool = True,
    optimize: bool = True,
    value: float = 1.0,
    value_short: float = 0,
) -> Tuple:
    """Builds a maximal diversification portfolio

    Parameters
    ----------
    symbols : List[str]
        List of portfolio stocks
    benchmark : Dict
        Dict of portfolio weights
    p_views: List
        Matrix P of views that shows relationships among assets and returns.
        Default value to None.
    q_views: List
        Matrix Q of expected returns of views. Default value is None.
    interval : str, optional
        interval to get stock data, by default "3mo"
    start_date: str
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    log_returns: bool
        If True calculate log returns, else arithmetic returns. Default value
        is False
    freq: str
        The frequency used to calculate returns. Default value is 'D'. Possible
        values are:
            - 'D' for daily returns.
            - 'W' for weekly returns.
            - 'M' for monthly returns.

    maxnan: float
        Max percentage of nan values accepted per asset to be included in
        returns.
    threshold: float
        Value used to replace outliers that are higher to threshold.
    method: str
        Method used to fill nan values. Default value is 'time'. For more information see
        `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`_.
    objective: str
        Objective function of the optimization model.
        The default is 'Sharpe'. Possible values are:

        - 'MinRisk': Minimize the selected risk measure.
        - 'Utility': Maximize the risk averse utility function.
        - 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.
        - 'MaxRet': Maximize the expected return of the portfolio.

    risk_free_rate: float, optional
        Risk free rate, must be in annual frequency. The default is 0.
    risk_aversion: float, optional
        Risk aversion factor of the 'Utility' objective function.
        The default is 1.
    delta: float, optional
        Risk aversion factor of Black Litterman model. Default value is None.
    equilibrium: bool, optional
        If True excess returns are based on equilibrium market portfolio, if False
        excess returns are calculated as historical returns minus risk free rate.
        Default value is True.
    optimize: bool, optional
        If True Black Litterman estimates are used as inputs of mean variance model,
        if False returns equilibrium weights from Black Litterman model
        Default value is True.
    value : float, optional
        Amount of money to allocate. The default is 1.
    value_short : float, optional
        Amount to allocate to portfolio in short positions. The default is 0.

    Returns
    -------
    Tuple
        Dictionary of portfolio weights and DataFrame of stock returns
    """
    stock_prices = yahoo_finance_model.process_stocks(
        symbols, interval, start_date, end_date
    )
    stock_returns = yahoo_finance_model.process_returns(
        stock_prices,
        log_returns=log_returns,
        freq=freq,
        maxnan=maxnan,
        threshold=threshold,
        method=method,
    )

    # By theory default benchmark is market capitalization portfolio
    if benchmark is None:
        benchmark, _ = get_property_weights(
            symbols=symbols,
            interval=interval,
            start_date=start_date,
            end_date=end_date,
            log_returns=log_returns,
            freq=freq,
            maxnan=maxnan,
            threshold=threshold,
            method=method,
            s_property="marketCap",
            value=value,
        )

    factor = time_factor[freq.upper()]
    risk_free_rate = risk_free_rate / factor

    mu, cov, weights = black_litterman(
        stock_returns=stock_returns,
        benchmark=benchmark,
        p_views=p_views,
        q_views=q_views,
        delta=delta,
        risk_free_rate=risk_free_rate,
        equilibrium=equilibrium,
        factor=factor,
    )
    weights = pd.DataFrame(weights)

    if optimize:
        # Building the portfolio object
        port = rp.Portfolio(returns=stock_returns)

        # Estimate input parameters:
        port.assets_stats(method_mu="hist", method_cov="hist")
        port.mu_bl = pd.DataFrame(mu).T
        port.cov_bl = pd.DataFrame(cov)

        # Budget constraints
        port.upperlng = value
        if value_short > 0:
            port.sht = True
            port.uppersht = value_short
            port.budget = value - value_short
        else:
            port.budget = value

        # Estimate optimal portfolio:
        weights = port.optimization(
            model="BL",
            rm="MV",
            obj=objective,
            rf=risk_free_rate,
            l=risk_aversion,
            hist=True,
        )

    if weights is not None:
        weights = weights.round(5)
        weights = weights.squeeze().to_dict()

    return weights, stock_returns


@log_start_end(log=logger)
def get_ef(
    symbols: List[str],
    interval: str = "3y",
    start_date: str = "",
    end_date: str = "",
    log_returns: bool = False,
    freq: str = "D",
    maxnan: float = 0.05,
    threshold: float = 0,
    method: str = "time",
    risk_measure: str = "MV",
    risk_free_rate: float = 0,
    alpha: float = 0.05,
    value: float = 1.0,
    value_short: float = 0.0,
    n_portfolios: int = 100,
    seed: int = 123,
) -> Tuple:
    """
    Get efficient frontier

    Parameters
    ----------
    symbols : List[str]
        List of portfolio tickers
    interval : str, optional
        interval to look at returns from
    start_date: str, optional
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str, optional
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    log_returns: bool, optional
        If True calculate log returns, else arithmetic returns. Default value
        is False
    freq: str, optional
        The frequency used to calculate returns. Default value is 'D'. Possible
        values are:
            - 'D' for daily returns.
            - 'W' for weekly returns.
            - 'M' for monthly returns.

    maxnan: float, optional
        Max percentage of nan values accepted per asset to be included in
        returns.
    threshold: float, optional
        Value used to replace outliers that are higher to threshold.
    method: str
        Method used to fill nan values. Default value is 'time'. For more information see
        `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`_.
    risk_measure: str, optional
        The risk measure used to optimize the portfolio.
        The default is 'MV'. Possible values are:

        - 'MV': Standard Deviation.
        - 'MAD': Mean Absolute Deviation.
        - 'MSV': Semi Standard Deviation.
        - 'FLPM': First Lower Partial Moment (Omega Ratio).
        - 'SLPM': Second Lower Partial Moment (Sortino Ratio).
        - 'CVaR': Conditional Value at Risk.
        - 'EVaR': Entropic Value at Risk.
        - 'WR': Worst Realization.
        - 'ADD': Average Drawdown of uncompounded cumulative returns.
        - 'UCI': Ulcer Index of uncompounded cumulative returns.
        - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.
        - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.
        - 'MDD': Maximum Drawdown of uncompounded cumulative returns.

    risk_free_rate: float, optional
        Risk free rate, must be in the same interval of assets returns. Used for
        'FLPM' and 'SLPM' and Sharpe objective function. The default is 0.
    alpha: float, optional
        Significance level of CVaR, EVaR, CDaR and EDaR
        The default is 0.05.
    value : float, optional
        Amount to allocate to portfolio in long positions, by default 1.0
    value_short : float, optional
        Amount to allocate to portfolio in short positions, by default 0.0
    n_portfolios: int, optional
        "Number of portfolios to simulate. The default value is 100.
    seed: int, optional
        Seed used to generate random portfolios. The default value is 123.

    Returns
    -------
    Tuple
        Parameters to create efficient frontier: frontier, mu, cov, stock_returns, weights, X1, Y1, port
    """
    stock_prices = yahoo_finance_model.process_stocks(
        symbols, interval, start_date, end_date
    )
    stock_returns = yahoo_finance_model.process_returns(
        stock_prices,
        log_returns=log_returns,
        freq=freq,
        maxnan=maxnan,
        threshold=threshold,
        method=method,
    )

    risk_free_rate = risk_free_rate / time_factor[freq.upper()]

    # Building the portfolio object
    port = rp.Portfolio(returns=stock_returns, alpha=alpha)

    # Estimate input parameters:
    port.assets_stats(method_mu="hist", method_cov="hist")

    # Budget constraints
    port.upperlng = value
    if value_short > 0:
        port.sht = True
        port.uppersht = value_short
        port.budget = value - value_short
    else:
        port.budget = value

    # Estimate tangency portfolio:
    weights = port.optimization(
        model="Classic",
        rm=risk_choices[risk_measure.lower()],
        obj="Sharpe",
        rf=risk_free_rate,
        hist=True,
    )

    points = 20  # Number of points of the frontier
    frontier = port.efficient_frontier(
        model="Classic",
        rm=risk_choices[risk_measure.lower()],
        points=points,
        rf=risk_free_rate,
        hist=True,
    )

    random_weights = generate_random_portfolios(
        symbols=symbols,
        n_portfolios=n_portfolios,
        seed=seed,
    )

    mu = stock_returns.mean().to_frame().T
    cov = stock_returns.cov()
    Y = (mu @ frontier).to_numpy() * time_factor[freq.upper()]
    Y = np.ravel(Y)
    X = np.zeros_like(Y)

    for i in range(frontier.shape[1]):
        w = np.array(frontier.iloc[:, i], ndmin=2).T
        risk = rp.Sharpe_Risk(
            w,
            cov=cov,
            returns=stock_returns,
            rm=risk_choices[risk_measure.lower()],
            rf=risk_free_rate,
            alpha=alpha,
            # a_sim=a_sim,
            # beta=beta,
            # b_sim=b_sim,
        )
        X[i] = risk

    if risk_choices[risk_measure.lower()] not in ["ADD", "MDD", "CDaR", "EDaR", "UCI"]:
        X = X * time_factor[freq.upper()] ** 0.5
    f = interp1d(X, Y, kind="quadratic")
    X1 = np.linspace(X[0], X[-1], num=100)
    Y1 = f(X1)

    frontier = pd.concat([frontier, random_weights], axis=1)
    # to delete stocks with corrupted data
    frontier.drop(
        frontier.tail(len(random_weights.index) - len(stock_returns.columns)).index,
        inplace=True,
    )

    return frontier, mu, cov, stock_returns, weights, X1, Y1, port


@log_start_end(log=logger)
def get_risk_parity_portfolio(
    symbols: List[str],
    interval: str = "3y",
    start_date: str = "",
    end_date: str = "",
    log_returns: bool = False,
    freq: str = "D",
    maxnan: float = 0.05,
    threshold: float = 0,
    method: str = "time",
    risk_measure: str = "MV",
    risk_cont: List[str] = None,
    risk_free_rate: float = 0,
    alpha: float = 0.05,
    target_return: float = -1,
    mean: str = "hist",
    covariance: str = "hist",
    d_ewma: float = 0.94,
    value: float = 1.0,
) -> Tuple:
    """Builds a risk parity portfolio using the risk budgeting approach

    Parameters
    ----------
    symbols : List[str]
        List of portfolio stocks
    interval : str, optional
        interval to get stock data, by default "3mo"
    start_date: str, optional
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str, optional
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    log_returns: bool, optional
        If True calculate log returns, else arithmetic returns. Default value
        is False
    freq: str, optional
        The frequency used to calculate returns. Default value is 'D'. Possible
        values are:
            - 'D' for daily returns.
            - 'W' for weekly returns.
            - 'M' for monthly returns.

    maxnan: float, optional
        Max percentage of nan values accepted per asset to be included in
        returns.
    threshold: float, optional
        Value used to replace outliers that are higher to threshold.
    method: str, optional
        Method used to fill nan values. Default value is 'time'. For more information see
        `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`_.
    risk_measure: str, optional
        The risk measure used to optimize the portfolio.
        The default is 'MV'. Possible values are:

        - 'MV': Standard Deviation.
        - 'MAD': Mean Absolute Deviation.
        - 'MSV': Semi Standard Deviation.
        - 'FLPM': First Lower Partial Moment (Omega Ratio).
        - 'SLPM': Second Lower Partial Moment (Sortino Ratio).
        - 'CVaR': Conditional Value at Risk.
        - 'EVaR': Entropic Value at Risk.
        - 'UCI': Ulcer Index of uncompounded cumulative returns.
        - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.
        - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.

    risk_cont: List[str], optional
        The vector of risk contribution per asset. If empty, the default is
        1/n (number of assets).
    risk_free_rate: float, optional
        Risk free rate, must be in annual frequency. Used for
        'FLPM' and 'SLPM' and Sharpe objective function. The default is 0.
    alpha: float, optional
        Significance level of CVaR, EVaR, CDaR and EDaR
    target_return: float, optional
        Constraint on minimum level of portfolio's return.
    mean: str, optional
        The method used to estimate the expected returns.
        The default value is 'hist'. Possible values are:

        - 'hist': use historical estimates.
        - 'ewma1': use ewma with adjust=True. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ewma2': use ewma with adjust=False. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.

    covariance: str, optional
        The method used to estimate the covariance matrix:
        The default is 'hist'. Possible values are:

        - 'hist': use historical estimates.
        - 'ewma1': use ewma with adjust=True. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ewma2': use ewma with adjust=False. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ledoit': use the Ledoit and Wolf Shrinkage method.
        - 'oas': use the Oracle Approximation Shrinkage method.
        - 'shrunk': use the basic Shrunk Covariance method.
        - 'gl': use the basic Graphical Lasso Covariance method.
        - 'jlogo': use the j-LoGo Covariance method. For more information see: :cite:`a-jLogo`.
        - 'fixed': denoise using fixed method. For more information see chapter 2 of :cite:`a-MLforAM`.
        - 'spectral': denoise using spectral method. For more information see chapter 2 of :cite:`a-MLforAM`.
        - 'shrink': denoise using shrink method. For more information see chapter 2 of :cite:`a-MLforAM`.

    d_ewma: float, optional
        The smoothing factor of ewma methods.
        The default is 0.94.
    value : float, optional
        Amount of money to allocate. The default is 1.

    Returns
    -------
    Tuple
        Dictionary of portfolio weights and DataFrame of stock returns
    """
    stock_prices = yahoo_finance_model.process_stocks(
        symbols, interval, start_date, end_date
    )
    stock_returns = yahoo_finance_model.process_returns(
        stock_prices,
        log_returns=log_returns,
        freq=freq,
        maxnan=maxnan,
        threshold=threshold,
        method=method,
    )

    risk_free_rate = risk_free_rate / time_factor[freq.upper()]

    # Building the portfolio object
    port = rp.Portfolio(returns=stock_returns, alpha=alpha)

    # Calculating optimal portfolio
    port.assets_stats(method_mu=mean, method_cov=covariance, d=d_ewma)

    # Estimate optimal portfolio:
    model = "Classic"
    hist = True

    if risk_cont is None:
        risk_cont_ = None  # Risk contribution constraints vector
    else:
        risk_cont_ = np.array(risk_cont).reshape(1, -1)
        risk_cont_ = risk_cont_ / np.sum(risk_cont_)

    if target_return > -1:
        port.lowerret = float(target_return) / time_factor[freq.upper()]

    weights = port.rp_optimization(
        model=model, rm=risk_measure, rf=risk_free_rate, b=risk_cont_, hist=hist
    )

    if weights is not None:
        if value > 0.0:
            weights = value * weights
        weights = weights.round(5)
        weights = weights.squeeze().to_dict()

    return weights, stock_returns


@log_start_end(log=logger)
def get_rel_risk_parity_portfolio(
    symbols: List[str],
    interval: str = "3y",
    start_date: str = "",
    end_date: str = "",
    log_returns: bool = False,
    freq: str = "D",
    maxnan: float = 0.05,
    threshold: float = 0,
    method: str = "time",
    version: str = "A",
    risk_cont: List[str] = None,
    penal_factor: float = 1,
    target_return: float = -1,
    mean: str = "hist",
    covariance: str = "hist",
    d_ewma: float = 0.94,
    value: float = 1.0,
) -> Tuple:
    """Builds a relaxed risk parity portfolio using the least squares approach

    Parameters
    ----------
    symbols : List[str]
        List of portfolio stocks
    interval : str, optional
        interval to get stock data, by default "3mo"
    start_date: str, optional
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str, optional
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    log_returns: bool, optional
        If True calculate log returns, else arithmetic returns. Default value
        is False
    freq: str, optional
        The frequency used to calculate returns. Default value is 'D'. Possible
        values are:
            - 'D' for daily returns.
            - 'W' for weekly returns.
            - 'M' for monthly returns.

    maxnan: float, optional
        Max percentage of nan values accepted per asset to be included in
        returns.
    threshold: float, optional
        Value used to replace outliers that are higher to threshold.
    method: str, optional
        Method used to fill nan values. Default value is 'time'. For more information see
        `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`_.
    version : str, optional
        Relaxed risk parity model version. The default is 'A'.
        Possible values are:

        - 'A': without regularization and penalization constraints.
        - 'B': with regularization constraint but without penalization constraint.
        - 'C': with regularization and penalization constraints.

    risk_cont: List[str], optional
        The vector of risk contribution per asset. If empty, the default is
        1/n (number of assets).
    penal_factor: float, optional
        The penalization factor of penalization constraints. Only used with
        version 'C'. The default is 1.
    target_return: float, optional
        Constraint on minimum level of portfolio's return.
    mean: str, optional
        The method used to estimate the expected returns.
        The default value is 'hist'. Possible values are:

        - 'hist': use historical estimates.
        - 'ewma1': use ewma with adjust=True. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ewma2': use ewma with adjust=False. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.

    covariance: str, optional
        The method used to estimate the covariance matrix:
        The default is 'hist'. Possible values are:

        - 'hist': use historical estimates.
        - 'ewma1': use ewma with adjust=True. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ewma2': use ewma with adjust=False. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ledoit': use the Ledoit and Wolf Shrinkage method.
        - 'oas': use the Oracle Approximation Shrinkage method.
        - 'shrunk': use the basic Shrunk Covariance method.
        - 'gl': use the basic Graphical Lasso Covariance method.
        - 'jlogo': use the j-LoGo Covariance method. For more information see: :cite:`a-jLogo`.
        - 'fixed': denoise using fixed method. For more information see chapter 2 of :cite:`a-MLforAM`.
        - 'spectral': denoise using spectral method. For more information see chapter 2 of :cite:`a-MLforAM`.
        - 'shrink': denoise using shrink method. For more information see chapter 2 of :cite:`a-MLforAM`.

    d_ewma: float, optional
        The smoothing factor of ewma methods.
        The default is 0.94.
    value : float, optional
        Amount of money to allocate. The default is 1.

    Returns
    -------
    Tuple
        Dictionary of portfolio weights and DataFrame of stock returns
    """
    stock_prices = yahoo_finance_model.process_stocks(
        symbols, interval, start_date, end_date
    )
    stock_returns = yahoo_finance_model.process_returns(
        stock_prices,
        log_returns=log_returns,
        freq=freq,
        maxnan=maxnan,
        threshold=threshold,
        method=method,
    )

    # Building the portfolio object
    port = rp.Portfolio(returns=stock_returns)

    # Calculating optimal portfolio
    port.assets_stats(method_mu=mean, method_cov=covariance, d=d_ewma)

    # Estimate optimal portfolio:
    model = "Classic"
    hist = True

    if risk_cont is None:
        risk_cont_ = None  # Risk contribution constraints vector
    else:
        risk_cont_ = np.array(risk_cont).reshape(1, -1)
        risk_cont_ = risk_cont_ / np.sum(risk_cont_)

    if target_return > -1:
        port.lowerret = float(target_return) / time_factor[freq.upper()]

    weights = port.rrp_optimization(
        model=model, version=version, l=penal_factor, b=risk_cont_, hist=hist
    )

    if weights is not None:
        if value > 0.0:
            weights = value * weights
        weights = weights.round(5)
        weights = weights.squeeze().to_dict()

    return weights, stock_returns


@log_start_end(log=logger)
def get_hcp_portfolio(
    symbols: List[str],
    interval: str = "3y",
    start_date: str = "",
    end_date: str = "",
    log_returns: bool = False,
    freq: str = "D",
    maxnan: float = 0.05,
    threshold: float = 0,
    method: str = "time",
    model: str = "HRP",
    codependence: str = "pearson",
    covariance: str = "hist",
    objective: str = "MinRisk",
    risk_measure: str = "MV",
    risk_free_rate: float = 0,
    risk_aversion: float = 1,
    alpha: float = 0.05,
    a_sim: int = 100,
    beta: float = None,
    b_sim: int = None,
    linkage: str = "single",
    k: int = 0,
    max_k: int = 10,
    bins_info: str = "KN",
    alpha_tail: float = 0.05,
    leaf_order: bool = True,
    d_ewma: float = 0.94,
    value: float = 1.0,
) -> Tuple:
    """Builds hierarchical clustering based portfolios

    Parameters
    ----------
    symbols : List[str]
        List of portfolio stocks
    interval : str, optional
        interval to get stock data, by default "3mo"
    start_date: str, optional
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str, optional
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    log_returns: bool, optional
        If True calculate log returns, else arithmetic returns. Default value
        is False
    freq: str, optional
        The frequency used to calculate returns. Default value is 'D'. Possible
        values are:
            - 'D' for daily returns.
            - 'W' for weekly returns.
            - 'M' for monthly returns.

    maxnan: float, optional
        Max percentage of nan values accepted per asset to be included in
        returns.
    threshold: float, optional
        Value used to replace outliers that are higher to threshold.
    method: str, optional
        Method used to fill nan values. Default value is 'time'. For more information see
        `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`_.
    model: str, optional
        The hierarchical cluster portfolio model used for optimize the
        portfolio. The default is 'HRP'. Possible values are:

        - 'HRP': Hierarchical Risk Parity.
        - 'HERC': Hierarchical Equal Risk Contribution.
        - 'NCO': Nested Clustered Optimization.

    codependence: str, optional
        The codependence or similarity matrix used to build the distance
        metric and clusters. The default is 'pearson'. Possible values are:

        - 'pearson': pearson correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{0.5(1-\rho^{pearson}_{i,j})}`.
        - 'spearman': spearman correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{0.5(1-\rho^{spearman}_{i,j})}`.
        - 'abs_pearson': absolute value pearson correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{(1-|\rho^{pearson}_{i,j}|)}`.
        - 'abs_spearman': absolute value spearman correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{(1-|\rho^{spearman}_{i,j}|)}`.
        - 'distance': distance correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{(1-\rho^{distance}_{i,j})}`.
        - 'mutual_info': mutual information matrix. Distance used is variation information matrix.
        - 'tail': lower tail dependence index matrix. Dissimilarity formula:
            :math:`D_{i,j} = -\\log{\\lambda_{i,j}}`.

    covariance: str, optional
        The method used to estimate the covariance matrix:
        The default is 'hist'. Possible values are:

        - 'hist': use historical estimates.
        - 'ewma1': use ewma with adjust=True. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ewma2': use ewma with adjust=False. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ledoit': use the Ledoit and Wolf Shrinkage method.
        - 'oas': use the Oracle Approximation Shrinkage method.
        - 'shrunk': use the basic Shrunk Covariance method.
        - 'gl': use the basic Graphical Lasso Covariance method.
        - 'jlogo': use the j-LoGo Covariance method. For more information see: :cite:`c-jLogo`.
        - 'fixed': denoise using fixed method. For more information see chapter 2 of :cite:`c-MLforAM`.
        - 'spectral': denoise using spectral method. For more information see chapter 2 of :cite:`c-MLforAM`.
        - 'shrink': denoise using shrink method. For more information see chapter 2 of :cite:`c-MLforAM`.

    objective: str, optional
        Objective function used by the NCO model.
        The default is 'MinRisk'. Possible values are:

        - 'MinRisk': Minimize the selected risk measure.
        - 'Utility': Maximize the risk averse utility function.
        - 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.
        - 'ERC': Equally risk contribution portfolio of the selected risk measure.

    risk_measure: str, optional
        The risk measure used to optimize the portfolio. If model is 'NCO',
        the risk measures available depends on the objective function.
        The default is 'MV'. Possible values are:

        - 'MV': Variance.
        - 'MAD': Mean Absolute Deviation.
        - 'MSV': Semi Standard Deviation.
        - 'FLPM': First Lower Partial Moment (Omega Ratio).
        - 'SLPM': Second Lower Partial Moment (Sortino Ratio).
        - 'VaR': Value at Risk.
        - 'CVaR': Conditional Value at Risk.
        - 'TG': Tail Gini.
        - 'EVaR': Entropic Value at Risk.
        - 'WR': Worst Realization (Minimax).
        - 'RG': Range of returns.
        - 'CVRG': CVaR range of returns.
        - 'TGRG': Tail Gini range of returns.
        - 'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).
        - 'ADD': Average Drawdown of uncompounded cumulative returns.
        - 'DaR': Drawdown at Risk of uncompounded cumulative returns.
        - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.
        - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.
        - 'UCI': Ulcer Index of uncompounded cumulative returns.
        - 'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).
        - 'ADD_Rel': Average Drawdown of compounded cumulative returns.
        - 'DaR_Rel': Drawdown at Risk of compounded cumulative returns.
        - 'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.
        - 'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.
        - 'UCI_Rel': Ulcer Index of compounded cumulative returns.

    risk_free_rate: float, optional
        Risk free rate, must be in annual frequency.
        Used for 'FLPM' and 'SLPM'. The default is 0.
    risk_aversion: float, optional
        Risk aversion factor of the 'Utility' objective function.
        The default is 1.
    alpha: float, optional
        Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.
        The default is 0.05.
    a_sim: float, optional
        Number of CVaRs used to approximate Tail Gini of losses. The default is 100.
    beta: float, optional
        Significance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.
        The default is None.
    b_sim: float, optional
        Number of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.
        The default is None.
    linkage: str, optional
        Linkage method of hierarchical clustering. For more information see
        `linkage <https://docs.scipy.org/doc/scipy/reference/generated/scipy.
        cluster.hierarchy.linkage.html?highlight=linkage#scipy.cluster.hierarchy.linkage>`_.
        The default is 'single'. Possible values are:

        - 'single'.
        - 'complete'.
        - 'average'.
        - 'weighted'.
        - 'centroid'.
        - 'median'.
        - 'ward'.
        - 'dbht': Direct Bubble Hierarchical Tree.

    k: int, optional
        Number of clusters. This value is took instead of the optimal number
        of clusters calculated with the two difference gap statistic.
        The default is None.
    max_k: int, optional
        Max number of clusters used by the two difference gap statistic
        to find the optimal number of clusters. The default is 10.
    bins_info: str, optional
        Number of bins used to calculate variation of information. The default
        value is 'KN'. Possible values are:

        - 'KN': Knuth's choice method. For more information see
        `knuth_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.knuth_bin_width.html>`_.
        - 'FD': Freedman–Diaconis' choice method. For more information see
        `freedman_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.freedman_bin_width.html>`_.
        - 'SC': Scotts' choice method. For more information see
        `scott_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.scott_bin_width.html>`_.
        - 'HGR': Hacine-Gharbi and Ravier' choice method.

    alpha_tail: float, optional
        Significance level for lower tail dependence index. The default is 0.05.
    leaf_order: bool, optional
        Indicates if the cluster are ordered so that the distance between
        successive leaves is minimal. The default is True.
    d_ewma: float, optional
        The smoothing factor of ewma methods.
        The default is 0.94.
    value : float, optional
        Amount of money to allocate. The default is 1.

    Returns
    -------
    Tuple
        Dictionary of portfolio weights and DataFrame of stock returns
    """
    stock_prices = yahoo_finance_model.process_stocks(
        symbols, interval, start_date, end_date
    )
    stock_returns = yahoo_finance_model.process_returns(
        stock_prices,
        log_returns=log_returns,
        freq=freq,
        maxnan=maxnan,
        threshold=threshold,
        method=method,
    )

    if linkage == "dbht":
        linkage = linkage.upper()

    risk_free_rate = risk_free_rate / time_factor[freq.upper()]
    # Building the portfolio object
    port = rp.HCPortfolio(
        returns=stock_returns,
        alpha=alpha,
        a_sim=a_sim,
        beta=beta,
        b_sim=b_sim,
    )

    weights = port.optimization(
        model=model,
        codependence=codependence,
        covariance=covariance,
        obj=objective,
        rm=risk_measure,
        rf=risk_free_rate,
        l=risk_aversion,
        linkage=linkage,
        k=k,
        max_k=max_k,
        bins_info=bins_info,
        alpha_tail=alpha_tail,
        leaf_order=leaf_order,
        d=d_ewma,
    )

    if weights is not None:
        if value > 0.0:
            weights = value * weights
        weights = weights.round(5)
        weights = weights.squeeze().to_dict()

    return weights, stock_returns


@log_start_end(log=logger)
def get_hrp(
    symbols: List[str],
    interval: str = "3y",
    start_date: str = "",
    end_date: str = "",
    log_returns: bool = False,
    freq: str = "D",
    maxnan: float = 0.05,
    threshold: float = 0,
    method: str = "time",
    codependence: str = "pearson",
    covariance: str = "hist",
    objective: str = "minrisk",
    risk_measure: str = "mv",
    risk_free_rate: float = 0.0,
    risk_aversion: float = 1.0,
    alpha: float = 0.05,
    a_sim: int = 100,
    beta: float = None,
    b_sim: int = None,
    linkage: str = "single",
    k: int = 0,
    max_k: int = 10,
    bins_info: str = "KN",
    alpha_tail: float = 0.05,
    leaf_order: bool = True,
    d_ewma: float = 0.94,
    value: float = 1.0,
) -> Tuple:
    """
    Builds a hierarchical risk parity portfolio

    Parameters
    ----------
    symbols : List[str]
        List of portfolio tickers
    interval : str
        interval to look at returns from
    start_date: str, optional
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str, optional
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    log_returns: bool, optional
        If True calculate log returns, else arithmetic returns. Default value
        is False
    freq: str, optional
        The frequency used to calculate returns. Default value is 'D'. Possible
        values are:
            - 'D' for daily returns.
            - 'W' for weekly returns.
            - 'M' for monthly returns.

    maxnan: float, optional
        Max percentage of nan values accepted per asset to be included in
        returns.
    threshold: float, optional
        Value used to replace outliers that are higher to threshold.
    method: str, optional
        Method used to fill nan values. Default value is 'time'. For more information see
        `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`_.
    codependence: str, optional
        The codependence or similarity matrix used to build the distance
        metric and clusters. The default is 'pearson'. Possible values are:

        - 'pearson': pearson correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{0.5(1-\rho^{pearson}_{i,j})}`.
        - 'spearman': spearman correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{0.5(1-\rho^{spearman}_{i,j})}`.
        - 'abs_pearson': absolute value pearson correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{(1-|\rho^{pearson}_{i,j}|)}`.
        - 'abs_spearman': absolute value spearman correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{(1-|\rho^{spearman}_{i,j}|)}`.
        - 'distance': distance correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{(1-\rho^{distance}_{i,j})}`.
        - 'mutual_info': mutual information matrix. Distance used is variation information matrix.
        - 'tail': lower tail dependence index matrix. Dissimilarity formula:
            :math:`D_{i,j} = -\\log{\\lambda_{i,j}}`.

    covariance: str, optional
        The method used to estimate the covariance matrix:
        The default is 'hist'. Possible values are:

        - 'hist': use historical estimates.
        - 'ewma1': use ewma with adjust=True. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ewma2': use ewma with adjust=False. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ledoit': use the Ledoit and Wolf Shrinkage method.
        - 'oas': use the Oracle Approximation Shrinkage method.
        - 'shrunk': use the basic Shrunk Covariance method.
        - 'gl': use the basic Graphical Lasso Covariance method.
        - 'jlogo': use the j-LoGo Covariance method. For more information see: :cite:`c-jLogo`.
        - 'fixed': denoise using fixed method. For more information see chapter 2 of :cite:`c-MLforAM`.
        - 'spectral': denoise using spectral method. For more information see chapter 2 of :cite:`c-MLforAM`.
        - 'shrink': denoise using shrink method. For more information see chapter 2 of :cite:`c-MLforAM`.

    objective: str, optional
        Objective function used by the NCO model.
        The default is 'MinRisk'. Possible values are:

        - 'MinRisk': Minimize the selected risk measure.
        - 'Utility': Maximize the risk averse utility function.
        - 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.
        - 'ERC': Equally risk contribution portfolio of the selected risk measure.

    risk_measure: str, optional
        The risk measure used to optimize the portfolio. If model is 'NCO',
        the risk measures available depends on the objective function.
        The default is 'MV'. Possible values are:

        - 'MV': Variance.
        - 'MAD': Mean Absolute Deviation.
        - 'MSV': Semi Standard Deviation.
        - 'FLPM': First Lower Partial Moment (Omega Ratio).
        - 'SLPM': Second Lower Partial Moment (Sortino Ratio).
        - 'VaR': Value at Risk.
        - 'CVaR': Conditional Value at Risk.
        - 'TG': Tail Gini.
        - 'EVaR': Entropic Value at Risk.
        - 'WR': Worst Realization (Minimax).
        - 'RG': Range of returns.
        - 'CVRG': CVaR range of returns.
        - 'TGRG': Tail Gini range of returns.
        - 'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).
        - 'ADD': Average Drawdown of uncompounded cumulative returns.
        - 'DaR': Drawdown at Risk of uncompounded cumulative returns.
        - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.
        - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.
        - 'UCI': Ulcer Index of uncompounded cumulative returns.
        - 'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).
        - 'ADD_Rel': Average Drawdown of compounded cumulative returns.
        - 'DaR_Rel': Drawdown at Risk of compounded cumulative returns.
        - 'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.
        - 'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.
        - 'UCI_Rel': Ulcer Index of compounded cumulative returns.

    risk_free_rate: float, optional
        Risk free rate, must be in the same interval of assets returns.
        Used for 'FLPM' and 'SLPM'. The default is 0.
    risk_aversion: float, optional
        Risk aversion factor of the 'Utility' objective function.
        The default is 1.
    alpha: float, optional
        Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.
        The default is 0.05.
    a_sim: float, optional
        Number of CVaRs used to approximate Tail Gini of losses. The default is 100.
    beta: float, optional
        Significance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.
        The default is None.
    b_sim: float, optional
        Number of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.
        The default is None.
    linkage: str, optional
        Linkage method of hierarchical clustering. For more information see
        `linkage <https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html>`_.
        The default is 'single'. Possible values are:

        - 'single'.
        - 'complete'.
        - 'average'.
        - 'weighted'.
        - 'centroid'.
        - 'median'.
        - 'ward'.
        - 'dbht': Direct Bubble Hierarchical Tree.

    k: int, optional
        Number of clusters. This value is took instead of the optimal number
        of clusters calculated with the two difference gap statistic.
        The default is None.
    max_k: int, optional
        Max number of clusters used by the two difference gap statistic
        to find the optimal number of clusters. The default is 10.
    bins_info: str, optional
        Number of bins used to calculate variation of information. The default
        value is 'KN'. Possible values are:

        - 'KN': Knuth's choice method. For more information see
        `knuth_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.knuth_bin_width.html>`_.
        - 'FD': Freedman–Diaconis' choice method. For more information see
        `freedman_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.freedman_bin_width.html>`_.
        - 'SC': Scotts' choice method. For more information see
        `scott_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.scott_bin_width.html>`_.
        - 'HGR': Hacine-Gharbi and Ravier' choice method.

    alpha_tail: float, optional
        Significance level for lower tail dependence index. The default is 0.05.
    leaf_order: bool, optional
        Indicates if the cluster are ordered so that the distance between
        successive leaves is minimal. The default is True.
    d: float, optional
        The smoothing factor of ewma methods.
        The default is 0.94.
    value : float, optional
        Amount to allocate to portfolio in long positions, by default 1.0
    value_short : float, optional
        Amount to allocate to portfolio in short positions, by default 0.0
    table: bool, optional
        True if plot table weights, by default False
    """
    weights, stock_returns = get_hcp_portfolio(
        symbols=symbols,
        interval=interval,
        start_date=start_date,
        end_date=end_date,
        log_returns=log_returns,
        freq=freq,
        maxnan=maxnan,
        threshold=threshold,
        method=method,
        model="HRP",
        codependence=codependence,
        covariance=covariance,
        objective=objectives_choices[objective],
        risk_measure=risk_choices[risk_measure.lower()],
        risk_free_rate=risk_free_rate,
        risk_aversion=risk_aversion,
        alpha=alpha,
        a_sim=a_sim,
        beta=beta,
        b_sim=b_sim,
        linkage=linkage,
        k=k,
        max_k=max_k,
        bins_info=bins_info,
        alpha_tail=alpha_tail,
        leaf_order=leaf_order,
        d_ewma=d_ewma,
        value=value,
    )
    return weights, stock_returns


@log_start_end(log=logger)
def get_herc(
    symbols: List[str],
    interval: str = "3y",
    start_date: str = "",
    end_date: str = "",
    log_returns: bool = False,
    freq: str = "D",
    maxnan: float = 0.05,
    threshold: float = 0,
    method: str = "time",
    codependence: str = "pearson",
    covariance: str = "hist",
    objective: str = "minrisk",
    risk_measure: str = "mv",
    risk_free_rate: float = 0.0,
    risk_aversion: float = 1.0,
    alpha: float = 0.05,
    a_sim: int = 100,
    beta: float = None,
    b_sim: int = None,
    linkage: str = "single",
    k: int = 0,
    max_k: int = 10,
    bins_info: str = "KN",
    alpha_tail: float = 0.05,
    leaf_order: bool = True,
    d_ewma: float = 0.94,
    value: float = 1.0,
) -> Tuple:
    """
    Builds a hierarchical risk parity portfolio

    Parameters
    ----------
    symbols : List[str]
        List of portfolio tickers
    interval : str
        interval to look at returns from
    start_date: str, optional
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str, optional
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    log_returns: bool, optional
        If True calculate log returns, else arithmetic returns. Default value
        is False
    freq: str, optional
        The frequency used to calculate returns. Default value is 'D'. Possible
        values are:
            - 'D' for daily returns.
            - 'W' for weekly returns.
            - 'M' for monthly returns.

    maxnan: float, optional
        Max percentage of nan values accepted per asset to be included in
        returns.
    threshold: float, optional
        Value used to replace outliers that are higher to threshold.
    method: str, optional
        Method used to fill nan values. Default value is 'time'. For more information see
        `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`_.
    codependence: str, optional
        The codependence or similarity matrix used to build the distance
        metric and clusters. The default is 'pearson'. Possible values are:

        - 'pearson': pearson correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{0.5(1-\rho^{pearson}_{i,j})}`.
        - 'spearman': spearman correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{0.5(1-\rho^{spearman}_{i,j})}`.
        - 'abs_pearson': absolute value pearson correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{(1-|\rho^{pearson}_{i,j}|)}`.
        - 'abs_spearman': absolute value spearman correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{(1-|\rho^{spearman}_{i,j}|)}`.
        - 'distance': distance correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{(1-\rho^{distance}_{i,j})}`.
        - 'mutual_info': mutual information matrix. Distance used is variation information matrix.
        - 'tail': lower tail dependence index matrix. Dissimilarity formula:
            :math:`D_{i,j} = -\\log{\\lambda_{i,j}}`.

    covariance: str, optional
        The method used to estimate the covariance matrix:
        The default is 'hist'. Possible values are:

        - 'hist': use historical estimates.
        - 'ewma1': use ewma with adjust=True. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ewma2': use ewma with adjust=False. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ledoit': use the Ledoit and Wolf Shrinkage method.
        - 'oas': use the Oracle Approximation Shrinkage method.
        - 'shrunk': use the basic Shrunk Covariance method.
        - 'gl': use the basic Graphical Lasso Covariance method.
        - 'jlogo': use the j-LoGo Covariance method. For more information see: :cite:`c-jLogo`.
        - 'fixed': denoise using fixed method. For more information see chapter 2 of :cite:`c-MLforAM`.
        - 'spectral': denoise using spectral method. For more information see chapter 2 of :cite:`c-MLforAM`.
        - 'shrink': denoise using shrink method. For more information see chapter 2 of :cite:`c-MLforAM`.

    objective: str, optional
        Objective function used by the NCO model.
        The default is 'MinRisk'. Possible values are:

        - 'MinRisk': Minimize the selected risk measure.
        - 'Utility': Maximize the risk averse utility function.
        - 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.
        - 'ERC': Equally risk contribution portfolio of the selected risk measure.

    risk_measure: str, optional
        The risk measure used to optimize the portfolio. If model is 'NCO',
        the risk measures available depends on the objective function.
        The default is 'MV'. Possible values are:

        - 'MV': Variance.
        - 'MAD': Mean Absolute Deviation.
        - 'MSV': Semi Standard Deviation.
        - 'FLPM': First Lower Partial Moment (Omega Ratio).
        - 'SLPM': Second Lower Partial Moment (Sortino Ratio).
        - 'VaR': Value at Risk.
        - 'CVaR': Conditional Value at Risk.
        - 'TG': Tail Gini.
        - 'EVaR': Entropic Value at Risk.
        - 'WR': Worst Realization (Minimax).
        - 'RG': Range of returns.
        - 'CVRG': CVaR range of returns.
        - 'TGRG': Tail Gini range of returns.
        - 'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).
        - 'ADD': Average Drawdown of uncompounded cumulative returns.
        - 'DaR': Drawdown at Risk of uncompounded cumulative returns.
        - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.
        - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.
        - 'UCI': Ulcer Index of uncompounded cumulative returns.
        - 'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).
        - 'ADD_Rel': Average Drawdown of compounded cumulative returns.
        - 'DaR_Rel': Drawdown at Risk of compounded cumulative returns.
        - 'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.
        - 'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.
        - 'UCI_Rel': Ulcer Index of compounded cumulative returns.

    risk_free_rate: float, optional
        Risk free rate, must be in the same interval of assets returns.
        Used for 'FLPM' and 'SLPM'. The default is 0.
    risk_aversion: float, optional
        Risk aversion factor of the 'Utility' objective function.
        The default is 1.
    alpha: float, optional
        Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.
        The default is 0.05.
    a_sim: float, optional
        Number of CVaRs used to approximate Tail Gini of losses. The default is 100.
    beta: float, optional
        Significance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.
        The default is None.
    b_sim: float, optional
        Number of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.
        The default is None.
    linkage: str, optional
        Linkage method of hierarchical clustering. For more information see
        `linkage <https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html>`_.
        The default is 'single'. Possible values are:

        - 'single'.
        - 'complete'.
        - 'average'.
        - 'weighted'.
        - 'centroid'.
        - 'median'.
        - 'ward'.
        - 'dbht': Direct Bubble Hierarchical Tree.

    k: int, optional
        Number of clusters. This value is took instead of the optimal number
        of clusters calculated with the two difference gap statistic.
        The default is None.
    max_k: int, optional
        Max number of clusters used by the two difference gap statistic
        to find the optimal number of clusters. The default is 10.
    bins_info: str, optional
        Number of bins used to calculate variation of information. The default
        value is 'KN'. Possible values are:

        - 'KN': Knuth's choice method. For more information see
        `knuth_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.knuth_bin_width.html>`_.
        - 'FD': Freedman–Diaconis' choice method. For more information see
        `freedman_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.freedman_bin_width.html>`_.
        - 'SC': Scotts' choice method. For more information see
        `scott_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.scott_bin_width.html>`_.
        - 'HGR': Hacine-Gharbi and Ravier' choice method.

    alpha_tail: float, optional
        Significance level for lower tail dependence index. The default is 0.05.
    leaf_order: bool, optional
        Indicates if the cluster are ordered so that the distance between
        successive leaves is minimal. The default is True.
    d: float, optional
        The smoothing factor of ewma methods.
        The default is 0.94.
    value : float, optional
        Amount to allocate to portfolio in long positions, by default 1.0
    value_short : float, optional
        Amount to allocate to portfolio in short positions, by default 0.0
    table: bool, optional
        True if plot table weights, by default False
    """
    weights, stock_returns = get_hcp_portfolio(
        symbols=symbols,
        interval=interval,
        start_date=start_date,
        end_date=end_date,
        log_returns=log_returns,
        freq=freq,
        maxnan=maxnan,
        threshold=threshold,
        method=method,
        model="HERC",
        codependence=codependence,
        covariance=covariance,
        objective=objectives_choices[objective],
        risk_measure=risk_choices[risk_measure.lower()],
        risk_free_rate=risk_free_rate,
        risk_aversion=risk_aversion,
        alpha=alpha,
        a_sim=a_sim,
        beta=beta,
        b_sim=b_sim,
        linkage=linkage,
        k=k,
        max_k=max_k,
        bins_info=bins_info,
        alpha_tail=alpha_tail,
        leaf_order=leaf_order,
        d_ewma=d_ewma,
        value=value,
    )
    return weights, stock_returns


@log_start_end(log=logger)
def get_nco(
    symbols: List[str],
    interval: str = "3y",
    start_date: str = "",
    end_date: str = "",
    log_returns: bool = False,
    freq: str = "D",
    maxnan: float = 0.05,
    threshold: float = 0,
    method: str = "time",
    codependence: str = "pearson",
    covariance: str = "hist",
    objective: str = "minrisk",
    risk_measure: str = "mv",
    risk_free_rate: float = 0.0,
    risk_aversion: float = 1.0,
    alpha: float = 0.05,
    a_sim: int = 100,
    beta: float = None,
    b_sim: int = None,
    linkage: str = "single",
    k: int = None,
    max_k: int = 10,
    bins_info: str = "KN",
    alpha_tail: float = 0.05,
    leaf_order: bool = True,
    d_ewma: float = 0.94,
    value: float = 1.0,
) -> Tuple:
    """
    Builds a hierarchical risk parity portfolio

    Parameters
    ----------
    symbols : List[str]
        List of portfolio tickers
    interval : str
        interval to look at returns from
    start_date: str, optional
        If not using interval, start date string (YYYY-MM-DD)
    end_date: str, optional
        If not using interval, end date string (YYYY-MM-DD). If empty use last
        weekday.
    log_returns: bool, optional
        If True calculate log returns, else arithmetic returns. Default value
        is False
    freq: str, optional
        The frequency used to calculate returns. Default value is 'D'. Possible
        values are:
            - 'D' for daily returns.
            - 'W' for weekly returns.
            - 'M' for monthly returns.

    maxnan: float, optional
        Max percentage of nan values accepted per asset to be included in
        returns.
    threshold: float, optional
        Value used to replace outliers that are higher to threshold.
    method: str, optional
        Method used to fill nan values. Default value is 'time'. For more information see
        `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`_.
    codependence: str, optional
        The codependence or similarity matrix used to build the distance
        metric and clusters. The default is 'pearson'. Possible values are:

        - 'pearson': pearson correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{0.5(1-\rho^{pearson}_{i,j})}`.
        - 'spearman': spearman correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{0.5(1-\rho^{spearman}_{i,j})}`.
        - 'abs_pearson': absolute value pearson correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{(1-|\rho^{pearson}_{i,j}|)}`.
        - 'abs_spearman': absolute value spearman correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{(1-|\rho^{spearman}_{i,j}|)}`.
        - 'distance': distance correlation matrix. Distance formula:
            :math:`D_{i,j} = \\sqrt{(1-\rho^{distance}_{i,j})}`.
        - 'mutual_info': mutual information matrix. Distance used is variation information matrix.
        - 'tail': lower tail dependence index matrix. Dissimilarity formula:
            :math:`D_{i,j} = -\\log{\\lambda_{i,j}}`.

    covariance: str, optional
        The method used to estimate the covariance matrix:
        The default is 'hist'. Possible values are:

        - 'hist': use historical estimates.
        - 'ewma1': use ewma with adjust=True. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ewma2': use ewma with adjust=False. For more information see
        `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`_.
        - 'ledoit': use the Ledoit and Wolf Shrinkage method.
        - 'oas': use the Oracle Approximation Shrinkage method.
        - 'shrunk': use the basic Shrunk Covariance method.
        - 'gl': use the basic Graphical Lasso Covariance method.
        - 'jlogo': use the j-LoGo Covariance method. For more information see: :cite:`c-jLogo`.
        - 'fixed': denoise using fixed method. For more information see chapter 2 of :cite:`c-MLforAM`.
        - 'spectral': denoise using spectral method. For more information see chapter 2 of :cite:`c-MLforAM`.
        - 'shrink': denoise using shrink method. For more information see chapter 2 of :cite:`c-MLforAM`.

    objective: str, optional
        Objective function used by the NCO model.
        The default is 'MinRisk'. Possible values are:

        - 'MinRisk': Minimize the selected risk measure.
        - 'Utility': Maximize the risk averse utility function.
        - 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.
        - 'ERC': Equally risk contribution portfolio of the selected risk measure.

    risk_measure: str, optional
        The risk measure used to optimize the portfolio. If model is 'NCO',
        the risk measures available depends on the objective function.
        The default is 'MV'. Possible values are:

        - 'MV': Variance.
        - 'MAD': Mean Absolute Deviation.
        - 'MSV': Semi Standard Deviation.
        - 'FLPM': First Lower Partial Moment (Omega Ratio).
        - 'SLPM': Second Lower Partial Moment (Sortino Ratio).
        - 'VaR': Value at Risk.
        - 'CVaR': Conditional Value at Risk.
        - 'TG': Tail Gini.
        - 'EVaR': Entropic Value at Risk.
        - 'WR': Worst Realization (Minimax).
        - 'RG': Range of returns.
        - 'CVRG': CVaR range of returns.
        - 'TGRG': Tail Gini range of returns.
        - 'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).
        - 'ADD': Average Drawdown of uncompounded cumulative returns.
        - 'DaR': Drawdown at Risk of uncompounded cumulative returns.
        - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.
        - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.
        - 'UCI': Ulcer Index of uncompounded cumulative returns.
        - 'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).
        - 'ADD_Rel': Average Drawdown of compounded cumulative returns.
        - 'DaR_Rel': Drawdown at Risk of compounded cumulative returns.
        - 'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.
        - 'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.
        - 'UCI_Rel': Ulcer Index of compounded cumulative returns.

    risk_free_rate: float, optional
        Risk free rate, must be in the same interval of assets returns.
        Used for 'FLPM' and 'SLPM'. The default is 0.
    risk_aversion: float, optional
        Risk aversion factor of the 'Utility' objective function.
        The default is 1.
    alpha: float, optional
        Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.
        The default is 0.05.
    a_sim: float, optional
        Number of CVaRs used to approximate Tail Gini of losses. The default is 100.
    beta: float, optional
        Significance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.
        The default is None.
    b_sim: float, optional
        Number of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.
        The default is None.
    linkage: str, optional
        Linkage method of hierarchical clustering. For more information see
        `linkage <https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html>`_.
        The default is 'single'. Possible values are:

        - 'single'.
        - 'complete'.
        - 'average'.
        - 'weighted'.
        - 'centroid'.
        - 'median'.
        - 'ward'.
        - 'dbht': Direct Bubble Hierarchical Tree.

    k: int, optional
        Number of clusters. This value is took instead of the optimal number
        of clusters calculated with the two difference gap statistic.
        The default is None.
    max_k: int, optional
        Max number of clusters used by the two difference gap statistic
        to find the optimal number of clusters. The default is 10.
    bins_info: str, optional
        Number of bins used to calculate variation of information. The default
        value is 'KN'. Possible values are:

        - 'KN': Knuth's choice method. For more information see
        `knuth_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.knuth_bin_width.html>`_.
        - 'FD': Freedman–Diaconis' choice method. For more information see
        `freedman_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.freedman_bin_width.html>`_.
        - 'SC': Scotts' choice method. For more information see
        `scott_bin_width <https://docs.astropy.org/en/stable/api/astropy.stats.scott_bin_width.html>`_.
        - 'HGR': Hacine-Gharbi and Ravier' choice method.

    alpha_tail: float, optional
        Significance level for lower tail dependence index. The default is 0.05.
    leaf_order: bool, optional
        Indicates if the cluster are ordered so that the distance between
        successive leaves is minimal. The default is True.
    d: float, optional
        The smoothing factor of ewma methods.
        The default is 0.94.
    value : float, optional
        Amount to allocate to portfolio in long positions, by default 1.0
    value_short : float, optional
        Amount to allocate to portfolio in short positions, by default 0.0
    table: bool, optional
        True if plot table weights, by default False
    """
    weights, stock_returns = get_hcp_portfolio(
        symbols=symbols,
        interval=interval,
        start_date=start_date,
        end_date=end_date,
        log_returns=log_returns,
        freq=freq,
        maxnan=maxnan,
        threshold=threshold,
        method=method,
        model="NCO",
        codependence=codependence,
        covariance=covariance,
        objective=objectives_choices[objective.lower()],
        risk_measure=risk_choices[risk_measure.lower()],
        risk_free_rate=risk_free_rate,
        risk_aversion=risk_aversion,
        alpha=alpha,
        a_sim=a_sim,
        beta=beta,
        b_sim=b_sim,
        linkage=linkage,
        k=k,
        max_k=max_k,
        bins_info=bins_info,
        alpha_tail=alpha_tail,
        leaf_order=leaf_order,
        d_ewma=d_ewma,
        value=value,
    )
    return weights, stock_returns


@log_start_end(log=logger)
def black_litterman(
    stock_returns: pd.DataFrame,
    benchmark,
    p_views=None,
    q_views=None,
    delta=None,
    risk_free_rate: float = 0,
    equilibrium: bool = True,
    factor: float = 252,
) -> Tuple:
    """
    Calculates Black-Litterman estimates following He and Litterman (1999)

    Parameters
    ----------
    stock_returns: pd.DataFrame
        _description_
    benchmark: Dict
        lala
    p_views: List
        Matrix P of views that shows relationships among assets and returns.
        Default value to None.
    q_views: List
        Matrix Q of expected returns of views in annual frequency. Default value is None.
    delta: float
        Risk aversion factor. Default value is None.
    risk_free_rate: float, optional
        Risk free rate, must be in annual frequency. Default value is 0.
    equilibrium: bool, optional
        If True excess returns are based on equilibrium market portfolio, if False
        excess returns are calculated as historical returns minus risk free rate.
        Default value is True.
    factor: int
        The time factor

    Returns
    -------
    Tuple:
        Black-Litterman model estimates of expected returns,
        covariance matrix and portfolio weights.
    """
    symbols = stock_returns.columns.tolist()
    benchmark = pd.Series(benchmark).to_numpy().reshape(-1, 1)

    mu = stock_returns.mean().to_numpy().reshape(-1, 1)
    S = stock_returns.cov().to_numpy()

    if delta is None:
        a = mu.T @ benchmark
        delta = (a - risk_free_rate) / (benchmark.T @ S @ benchmark)
        delta = delta.item()

    if equilibrium:
        PI_eq = delta * (S @ benchmark)
    else:
        PI_eq = mu - risk_free_rate

    flag = False
    if p_views is None or q_views is None:
        p_views = np.identity(S.shape[0])
        q_views = PI_eq
        flag = True
    else:
        p_views = np.array(p_views, dtype=float)
        q_views = np.array(q_views, dtype=float).reshape(-1, 1) / factor

    tau = 1 / stock_returns.shape[0]
    Omega = np.diag(np.diag(p_views @ (tau * S) @ p_views.T))

    PI = np.linalg.inv(
        np.linalg.inv(tau * S) + p_views.T @ np.linalg.inv(Omega) @ p_views
    ) @ (np.linalg.inv(tau * S) @ PI_eq + p_views.T @ np.linalg.inv(Omega) @ q_views)

    if flag:
        n, m = S.shape
        M = np.zeros([n, m])
    else:
        M = np.linalg.inv(
            np.linalg.inv(tau * S) + p_views.T @ np.linalg.inv(Omega) @ p_views
        )

    mu = PI + risk_free_rate
    cov = S + M
    weights = np.linalg.inv(delta * cov) @ PI

    mu = pd.DataFrame(mu, index=symbols).to_dict()
    cov = pd.DataFrame(cov, index=symbols, columns=symbols).to_dict()
    weights = pd.DataFrame(weights, index=symbols).to_dict()

    return mu, cov, weights


@log_start_end(log=logger)
def generate_random_portfolios(
    symbols: List[str],
    n_portfolios: int = 100,
    seed: int = 123,
    value: float = 1.0,
) -> pd.DataFrame:
    """Build random portfolios

    Parameters
    ----------
    symbols : List[str]
        List of portfolio stocks
    n_portfolios: int, optional
        "Number of portfolios to simulate. The default value is 100.
    seed: int, optional
        Seed used to generate random portfolios. The default value is 123.
    value : float, optional
        Amount of money to allocate. The default is 1.
    """
    assets = symbols.copy()

    # Generate random portfolios
    n_samples = int(n_portfolios / 3)
    rs = np.random.RandomState(seed=seed)

    # Equal probability for each asset
    w1 = rs.dirichlet(np.ones(len(assets)), n_samples)

    # More concentrated
    w2 = rs.dirichlet(np.ones(len(assets)) * 0.65, n_samples)

    # More diversified
    w3 = rs.dirichlet(np.ones(len(assets)) * 2, n_samples)

    # Each individual asset
    w4 = np.identity(len(assets))
    w = np.concatenate((w1, w2, w3, w4), axis=0)
    w = pd.DataFrame(w, columns=assets).T

    if value > 0.0:
        w = value * w

    return w


@log_start_end(log=logger)
def get_properties() -> List[str]:
    """Get properties to use on property optimization.
    Returns
    -------
    List[str]:
        List of available properties to use on property optimization.
    """
    return optimizer_helper.valid_property_infos
