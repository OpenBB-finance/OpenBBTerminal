"""Covid View"""
__docformat__ = "numpy"

import os

import matplotlib.dates as mdates
import matplotlib.pyplot as plt
import pandas as pd
from rich.console import Console

import gamestonk_terminal.feature_flags as gtff
from gamestonk_terminal.alternative.covid import covid_model
from gamestonk_terminal.config_plot import PLOT_DPI
from gamestonk_terminal.helper_funcs import (
    plot_autoscale,
    export_data,
    rich_table_from_df,
)

t_console = Console()


def display_covid_ov(country, raw: bool = False, limit: int = 10, export: str = ""):
    """Show historical cases and deaths by country

    Parameters
    ----------
    country: str
        Country to get data for
    raw: bool
        Flag to display raw data
    limit: int
        Number of raw data to show
    export: str
        Format to export data
    """
    t_console.print("")
    cases = covid_model.get_global_cases(country)
    deaths = covid_model.get_global_deaths(country)
    ov = pd.concat([cases, deaths], axis=1)
    ov.columns = ["Cases", "Deaths"]

    fig, ax = plt.subplots(figsize=plot_autoscale(), dpi=PLOT_DPI)

    ax.plot(cases.index, cases, alpha=0.2, c="b")
    ax.plot(cases.index, cases.rolling(7).mean(), lw=4, c="b")
    ax.set_ylabel("Cases", color="blue")
    ax.tick_params(axis="y", labelcolor="blue")

    ax2 = ax.twinx()
    ax2.plot(deaths.index, deaths, "r", alpha=0.2)
    ax2.plot(deaths.index, deaths.rolling(7).mean(), "r", lw=4)
    ax2.grid()
    ax2.set_title(f"Cases for {country.upper()}")
    ax2.set_xlabel("Date")
    ax2.set_ylabel("Deaths", color="red")
    ax2.tick_params(axis="y", labelcolor="red")

    dateFmt = mdates.DateFormatter("%m/%d/%Y")
    ax.xaxis.set_major_formatter(dateFmt)
    ax.tick_params(axis="x", labelrotation=45)

    fig.tight_layout(pad=2)
    if gtff.USE_ION:
        plt.ion()
    plt.show()

    if raw:
        ov.index = [x.strftime("%Y-%m-%d") for x in ov.index]
        if gtff.USE_TABULATE_DF:
            t_console.print(
                rich_table_from_df(
                    ov.tail(limit),
                    headers=[x.title() for x in ov.columns],
                    show_index=True,
                    index_name="Date",
                    title=f"[bold]{country} COVID Numbers[/bold]",
                )
            )
        else:
            t_console.print(ov.tail(limit).to_string())

        t_console.print("")

    if export:
        export_data(export, os.path.dirname(os.path.abspath(__file__)), "ov", ov)


def display_covid_stat(
    country, stat: str = "cases", raw: bool = False, limit: int = 10, export: str = ""
):
    """Show historical cases and deaths by country

    Parameters
    ----------
    country: str
        Country to get data for
    stat: str
        Statistic to get.  Either "cases", "deaths" or "rates"
    raw: bool
        Flag to display raw data
    limit: int
        Number of raw data to show
    export: str
        Format to export data
    """
    t_console.print("")
    if stat == "cases":
        data = covid_model.get_global_cases(country)
    elif stat == "deaths":
        data = covid_model.get_global_deaths(country)
    elif stat == "rates":
        cases = covid_model.get_global_cases(country)
        deaths = covid_model.get_global_deaths(country)
        data = (deaths / cases).fillna(0) * 100
    else:
        t_console.print("Invalid stat selected.\n")
        return

    fig, ax = plt.subplots(figsize=plot_autoscale(), dpi=PLOT_DPI)

    ax.plot(data.index, data, alpha=0.2, c="b")
    ax.plot(data.index, data.rolling(7).mean(), lw=4, c="b")
    ax.set_ylabel(stat.title(), color="blue")
    ax.tick_params(axis="y", labelcolor="blue")
    ax.grid("on")
    dateFmt = mdates.DateFormatter("%m/%d/%Y")
    ax.xaxis.set_major_formatter(dateFmt)
    ax.tick_params(axis="x", labelrotation=45)
    ax.spines["right"].set_visible(False)
    ax.spines["top"].set_visible(False)
    ax.set_title(f"{country} COVID {stat}")
    fig.tight_layout(pad=2)
    if gtff.USE_ION:
        plt.ion()
    plt.show()

    if raw:
        data.index = [x.strftime("%Y-%m-%d") for x in data.index]
        if gtff.USE_TABULATE_DF:
            t_console.print(
                rich_table_from_df(
                    data.tail(limit),
                    headers=[stat.title()],
                    show_index=True,
                    index_name="Date",
                    title=f"[bold]{country} COVID {stat}[/bold]",
                )
            )
        else:
            t_console.print(data.tail(limit).to_string())

        t_console.print("")

    if export:
        export_data(export, os.path.dirname(os.path.abspath(__file__)), stat, data)


def display_country_slopes(days_back: int = 30, limit: int = 10, ascend: bool = False):
    """

    Parameters
    ----------
    days_back
    limit
    ascend

    Returns
    -------

    """
    hist_slope = covid_model.get_case_slopes(days_back).sort_values(
        by="Slope", ascending=ascend
    )
    if gtff.USE_TABULATE_DF:
        t_console.print(
            rich_table_from_df(
                hist_slope.head(limit),
                show_index=True,
                index_name="Country",
                title=f"[bold]{('Highest','Lowest')[ascend]} Sloping Cases[/bold]",
            )
        )
    else:
        t_console.print(hist_slope.head(limit).to_string())
    t_console.print("")
