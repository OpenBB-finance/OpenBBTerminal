""" Yahoo Finance View """
__docformat__ = "numpy"

import logging
import os
from fractions import Fraction
from typing import Optional, Union

import pandas as pd
import yfinance as yf

from openbb_terminal.config_terminal import theme
from openbb_terminal import OpenBBFigure
from openbb_terminal.decorators import log_start_end
from openbb_terminal.helper_funcs import (
    export_data,
    lambda_long_number_format,
    print_rich_table,
)
from openbb_terminal.helpers_denomination import transform as transform_by_denomination
from openbb_terminal.rich_config import console
from openbb_terminal.stocks.fundamental_analysis import yahoo_finance_model

logger = logging.getLogger(__name__)


@log_start_end(log=logger)
def display_info(symbol: str, export: str = "", sheet_name: Optional[str] = None):
    """Yahoo Finance ticker info
    Parameters
    ----------
    symbol : str
        Fundamental analysis ticker symbol
    sheet_name: str
        Optionally specify the name of the sheet the data is exported to.
    export: str
        Format to export data
    """
    summary = ""
    df_info = yahoo_finance_model.get_info(symbol)
    if "Long business summary" in df_info.index:
        summary = df_info.loc["Long business summary"].values[0]
        df_info = df_info.drop(index=["Long business summary"])

    if not df_info.empty:
        print_rich_table(
            df_info,
            headers=list(df_info.columns),
            show_index=True,
            title=f"{symbol.upper()} Info",
        )
    else:
        logger.error("Invalid data")
        console.print("[red]Invalid data[/red]\n")
        return

    if summary:
        console.print("Business Summary:")
        console.print(summary)

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        "info",
        df_info,
        sheet_name,
    )


@log_start_end(log=logger)
def display_shareholders(
    symbol: str,
    holder: str = "institutional",
    export: str = "",
    sheet_name: Optional[str] = None,
):
    """Yahoo Finance ticker shareholders
    Parameters
    ----------
    symbol : str
        Fundamental analysis ticker symbol
    holder: str
        Shareholder table to get.  Can be major/institutional/mutualfund
    sheet_name: str
        Optionally specify the name of the sheet the data is exported to.
    export: str
        Format to export data
    """
    df = yahoo_finance_model.get_shareholders(symbol, holder)
    if holder == "major":
        df.columns = ["", ""]
    if "Date Reported" in df.columns:
        df["Date Reported"] = df["Date Reported"].apply(
            lambda x: x.strftime("%Y-%m-%d")
        )
    title = f"{holder.title()} Holders"
    print_rich_table(
        df,
        headers=list(df.columns),
        show_index=False,
        title=f"{symbol.upper()} {title}",
    )

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        f"{holder}_holders",
        df,
        sheet_name,
    )


@log_start_end(log=logger)
def display_dividends(
    symbol: str,
    limit: int = 12,
    plot: bool = True,
    export: str = "",
    sheet_name: Optional[str] = None,
    external_axes: bool = False,
) -> Union[OpenBBFigure, None]:
    """Display historical dividends

    Parameters
    ----------
    symbol: str
        Stock ticker symbol
    limit: int
        Number to show
    plot: bool
        Plots historical data
    sheet_name: str
        Optionally specify the name of the sheet the data is exported to.
    export: str
        Format to export data
    external_axes : bool, optional
        Whether to return the figure object or not, by default False

    Examples
    --------
    >>> from openbb_terminal.sdk import openbb
    >>> openbb.fa.divs_chart("AAPL")
    """
    div_history = yahoo_finance_model.get_dividends(symbol)
    if div_history.empty:
        return None

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        "divs",
        div_history,
        sheet_name,
    )

    if not plot:
        div_history.index = pd.to_datetime(div_history.index, format="%Y%m%d").strftime(
            "%Y-%m-%d"
        )
        print_rich_table(
            div_history.head(limit),
            headers=["Amount Paid ($)", "Change"],
            title=f"{symbol.upper()} Historical Dividends",
            show_index=True,
        )
        return None

    fig = OpenBBFigure(yaxis_title="Amount Paid ($)")
    fig.set_title(f"Dividend History for {symbol}")
    fig.add_scatter(
        x=div_history.index,
        y=div_history["Dividends"],
        mode="markers+lines",
        name="Dividends Payout",
        marker_color=theme.down_color,
        line_color=theme.get_colors()[0],
    )

    return fig.show(external=external_axes)


@log_start_end(log=logger)
def display_splits(
    symbol: str,
    export: str = "",
    sheet_name: Optional[str] = None,
    external_axes: bool = False,
) -> Union[OpenBBFigure, None]:
    """Display splits and reverse splits events. [Source: Yahoo Finance]

    Parameters
    ----------
    symbol: str
        Stock ticker symbol
    sheet_name: str
        Optionally specify the name of the sheet the data is exported to.
    export: str
        Format to export data
    external_axes : bool, optional
        Whether to return the figure object or not, by default False
    """
    df_splits = yahoo_finance_model.get_splits(symbol)
    if df_splits.empty:
        return console.print("No splits or reverse splits events found.\n")

    # Get all stock data since IPO
    df_data = yf.download(symbol, progress=False, threads=False)
    if df_data.empty:
        return console.print("No stock price data available.\n")

    fig = OpenBBFigure(yaxis_title="Price")
    fig.set_title(f"{symbol} splits and reverse splits events")

    fig.add_scatter(
        x=df_data.index,
        y=df_data["Adj Close"],
        mode="lines",
        name="Price",
        line_color="#FCED00",
    )

    for index, row in df_splits.iterrows():
        val = row.values[0]
        frac = Fraction(val).limit_denominator(1000000)
        if val > 1:
            fig.add_annotation(
                x=index,
                y=df_data["Adj Close"].max(),
                text=f"{frac.numerator}:{frac.denominator}",
                showarrow=False,
                xshift=20,
                font=dict(color=theme.up_color),
            )
            fig.add_vline(x=index, line_width=2, line_color=theme.up_color)
        else:
            fig.add_annotation(
                x=index,
                y=df_data["Adj Close"].max(),
                text=f"{frac.numerator}:{frac.denominator}",
                showarrow=False,
                xshift=20,
                font_color=theme.down_color,
            )
            fig.add_vline(x=index, line_width=2, line_color=theme.down_color)

    print_rich_table(
        df_splits,
        title=f"{symbol.upper()} splits and reverse splits",
        show_index=True,
    )

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        "splits",
        df_splits,
        sheet_name,
    )

    return fig.show(external=external_axes)


@log_start_end(log=logger)
def display_mktcap(
    symbol: str,
    start_date: Optional[str] = None,
    export: str = "",
    sheet_name: Optional[str] = None,
    external_axes: bool = False,
) -> Union[OpenBBFigure, None]:
    """Display market cap over time. [Source: Yahoo Finance]

    Parameters
    ----------
    symbol: str
        Stock ticker symbol
    start_date: Optional[str]
        Initial date (e.g., 2021-10-01). Defaults to 3 years back
    sheet_name: str
        Optionally specify the name of the sheet the data is exported to.
    export: str
        Format to export data
    external_axes : bool, optional
        Whether to return the figure object or not, by default False
    """

    df_mktcap, currency = yahoo_finance_model.get_mktcap(symbol, start_date)
    if df_mktcap.empty:
        return console.print("No Market Cap data available.\n")

    fig = OpenBBFigure(yaxis_title=f"Market Cap in Billion ({currency})")
    fig.set_title(f"{symbol} Market Cap")
    fig.add_scatter(
        x=df_mktcap.index,
        y=df_mktcap.values / 1e9,
        mode="lines",
        name="Market Cap",
        line_color=theme.up_color,
        stackgroup="one",
    )

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        "mktcap",
        df_mktcap,
        sheet_name,
    )

    return fig.show(external=external_axes)


@log_start_end(log=logger)
def display_fundamentals(
    symbol: str,
    statement: str,
    limit: int = 12,
    ratios: bool = False,
    plot: Optional[list] = None,
    export: str = "",
    sheet_name: Optional[str] = None,
):
    """Display tickers balance sheet, income statement or cash-flow

    Parameters
    ----------
    symbol: str
        Stock ticker symbol
    statement: str
        Possible values are:

        - cash-flow
        - financials for Income
        - balance-sheet

    limit: int
        Number of periods to show
    ratios: bool
        Shows percentage change
    plot: list
        List of row labels to plot
    sheet_name: str
        Optionally specify the name of the sheet the data is exported to.
    export: str
        Format to export data
    """

    fundamentals = yahoo_finance_model.get_financials(symbol, statement, ratios)

    if statement == "balance-sheet":
        title_str = "Balance Sheet"
    elif statement == "financials":
        title_str = "Income Statement"
    elif statement == "cash-flow":
        title_str = "Cash Flow Statement"

    if fundamentals is None or fundamentals.empty:
        # The empty data frame error handling done in model
        return None

    symbol_currency = yahoo_finance_model.get_currency(symbol)

    if plot:
        plot = [x.lower() for x in plot]
        rows_plot = len(plot)
        fundamentals_plot_data = fundamentals.transpose().fillna(-1)
        fundamentals_plot_data.columns = fundamentals_plot_data.columns.str.lower()
        if "ttm" in list(fundamentals_plot_data.index):
            fundamentals_plot_data = fundamentals_plot_data.drop(["ttm"])
        fundamentals_plot_data = fundamentals_plot_data.sort_index()

        if not ratios:
            maximum_value = fundamentals_plot_data[plot[0].replace("_", " ")].max()
            (df_rounded, denomination) = transform_by_denomination(
                fundamentals_plot_data, maxValue=maximum_value
            )
            if denomination == "Units":
                denomination = ""
        else:
            df_rounded = fundamentals_plot_data
            denomination = ""

        if rows_plot == 1:
            fig = OpenBBFigure()
            fig.add_bar(
                x=df_rounded.index,
                y=df_rounded[plot[0].replace("_", " ")],
                name=plot[0].replace("_", " "),
            )
            title = (
                f"{plot[0].replace('_', ' ').capitalize()} QoQ Growth of {symbol.upper()}"
                if ratios
                else f"{plot[0].replace('_', ' ').capitalize()} of {symbol.upper()} {denomination}"
            )
            fig.set_title(title)
        else:
            fig = OpenBBFigure.create_subplots(rows=rows_plot, cols=1)
            for i in range(rows_plot):
                fig.add_bar(
                    x=df_rounded.index,
                    y=df_rounded[plot[i].replace("_", " ")],
                    name=plot[i].replace("_", " "),
                    row=i + 1,
                    col=1,
                )
                title = f"{plot[i].replace('_', ' ')} {denomination}"
                fig.add_annotation(
                    x=0.5, y=1, row=i + 1, col=1, showarrow=False, text=title
                )

        fig.show()

    else:
        # Snake case to english
        fundamentals.index = fundamentals.index.to_series().apply(
            lambda x: x.replace("_", " ").title()
        )
        # Readable numbers
        formatted_df = fundamentals.applymap(lambda_long_number_format).fillna("-")
        print_rich_table(
            formatted_df.iloc[:, :limit].applymap(lambda x: "-" if x == "nan" else x),
            show_index=True,
            title=f"{symbol} {title_str} Currency: {symbol_currency}",
        )
    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        statement,
        fundamentals,
        sheet_name,
    )

    return None


@log_start_end(log=logger)
def display_earnings(
    symbol: str, limit: int, export: str = "", sheet_name: Optional[str] = None
):
    """

    Parameters
    ----------
    symbol: str
        Stock ticker symbol
    limit: int
        Number of periods to show
    sheet_name: str
        Optionally specify the name of the sheet the data is exported to.
    export: str
        Format to export data

    """
    earnings = yahoo_finance_model.get_earnings_history(symbol)
    if earnings.empty:
        return
    print_rich_table(
        earnings.head(limit),
        headers=earnings.columns,
        title=f"Historical Earnings for {symbol}",
    )
    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        "earnings_yf",
        earnings,
        sheet_name,
    )
