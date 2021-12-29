"""Investpy View"""
__docformat__ = "numpy"

import os

import matplotlib.pyplot as plt
import pandas as pd
from rich import console

from gamestonk_terminal import feature_flags as gtff
from gamestonk_terminal.config_plot import PLOT_DPI
from gamestonk_terminal.helper_funcs import (
    export_data,
    plot_autoscale,
    rich_table_from_df,
)
from gamestonk_terminal.mutual_funds import investpy_model

console = console.Console()


def display_search(
    by: str = "name",
    value: str = "",
    country: str = "united states",
    limit: int = 10,
    sortby: str = "",
    ascending: bool = False,
):
    """Display results of searching for Mutual Funds

    Parameters
    ----------
    by : str
        Field to match on.  Can be name, issuer, isin or symbol
    value : str
        String that will be searched for
    country: str
        Country to filter on
    limit: int
        Number to show
    sortby: str
        Column to sort by
    ascending: bool
        Flag to sort in ascending order
    """
    searches = investpy_model.search_funds(by, value)

    if country:
        searches = searches[searches.country == country]
        searches = searches.drop(columns=["country", "underlying"])

    if sortby:
        searches = searches.sort_values(by=sortby, ascending=ascending)

    # If we want to move forward with rich -- should rename this gtff
    # Additionally, I recreated the tabulate functions with the rich.Table class.
    if gtff.USE_TABULATE_DF:
        console.print(
            rich_table_from_df(
                searches.head(limit),
                show_index=False,
                title=f"[bold]Mutual Funds with {by} matching {value}[/bold]",
            )
        )
    else:
        console.print(searches.head(limit).to_string())
    console.print("")


def display_overview(country: str = "united states", limit: int = 10, export: str = ""):
    """Displays an overview of the main funds from a country.

    Parameters
    ----------
    country: str
        Country to get overview for
    limit: int
        Number to show
    export : str
        Format to export data
    """
    overview = investpy_model.get_overview(country=country, limit=limit)
    overview["Assets (1B)"] = overview.total_assets / 1_000_000_000
    overview = overview.drop(columns=["country", "total_assets"])
    if gtff.USE_TABULATE_DF:
        console.print(
            rich_table_from_df(
                overview, title=f"[bold]Fund overview for {country.title()}[/bold]"
            )
        )
    else:
        console.print(overview.to_string())
    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        f"overview_{country.replace(' ','_')}",
        overview,
    )
    console.print("")


def display_fund_info(fund: str, country: str = "united states", name: bool = False):
    """Display fund infomration.  Finds name from symbol first if name is false

    Parameters
    ----------
    fund: str
        Fund name to get info for
    country : str
        Country of fund
    name: bool
        Flag to indicate name provided instead of symbol
    """
    if name:
        fund_name = fund
    else:
        fund_name = investpy_model.get_fund_name_from_symbol(fund)

    info = (
        investpy_model.get_fund_info(fund_name, country)
        .reset_index(drop=False)
        .fillna(0)
    )
    if gtff.USE_TABULATE_DF:
        console.print(
            rich_table_from_df(
                info,
                title=f"[bold]{fund_name.title()} Information[/bold]",
                show_index=False,
                headers=["Info", "Value"],
            )
        )
    else:
        console.print(info.to_string())
    console.print("")


def display_historical(data: pd.DataFrame, fund: str = "", export: str = ""):
    """

    Parameters
    ----------
    data: pd.DataFrame
        Dataframe containing historical data
    fund: str
        Fund symbol or name
    export: str
        Format to export data
    """
    console.print("")
    fig, ax = plt.subplots(figsize=plot_autoscale(), dpi=PLOT_DPI)
    ax.plot(data.index, data.Close, "-g")
    ax.grid("on")
    ax.set_xlim([data.index[0], data.index[-1]])
    ax.set_xlabel("Date")
    ax.set_ylabel("Close Price")
    ax.set_title(f"{fund.upper()} Price History")
    fig.autofmt_xdate()
    fig.tight_layout(pad=1)
    if gtff.USE_ION:
        plt.ion()
    plt.show()

    export_data(export, os.path.dirname(os.path.abspath(__file__)), "historical", data)
