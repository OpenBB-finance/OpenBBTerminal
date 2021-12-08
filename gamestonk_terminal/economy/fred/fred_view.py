""" Fred View """
__docformat__ = "numpy"

import os
import textwrap
from typing import Dict
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
from pandas.plotting import register_matplotlib_converters
from tabulate import tabulate

from gamestonk_terminal import feature_flags as gtff
from gamestonk_terminal.config_plot import PLOT_DPI
from gamestonk_terminal.economy.fred import fred_model
from gamestonk_terminal.helper_funcs import export_data, plot_autoscale

register_matplotlib_converters()


def format_units(num: int) -> str:
    """Helper to format number into string with K,M,B,T.  Number will be in form of 10^n"""
    number_zeros = int(np.log10(num))
    if number_zeros < 3:
        return str(num)
    if number_zeros < 6:
        return f"{int(num/1000)}k"
    if number_zeros < 9:
        return f"{int(num/1_000_000)}M"
    if number_zeros < 12:
        return f"{int(num/1_000_000_000)}B"
    if number_zeros < 15:
        return f"{int(num/1_000_000_000_000)}T"
    return f"10^{number_zeros}"


def notes(series_term: str, num: int):
    """Print Series notes. [Source: FRED]
    Parameters
    ----------
    series_term : str
        Search for these series_term
    num : int
        Maximum number of series notes to display
    """
    df_search = fred_model.get_series_notes(series_term)
    if df_search.empty:
        print("No matches found. \n")
        return
    df_search["notes"] = df_search["notes"].apply(
        lambda x: "\n".join(textwrap.wrap(x, width=100)) if isinstance(x, str) else x
    )
    df_search["title"] = df_search["title"].apply(
        lambda x: "\n".join(textwrap.wrap(x, width=50)) if isinstance(x, str) else x
    )
    if gtff.USE_TABULATE_DF:
        print(
            tabulate(
                df_search[["id", "title", "notes"]].head(num),
                tablefmt="fancy_grid",
                headers=["Series ID", "Title", "Description"],
                showindex=False,
            )
        )
    else:
        print(df_search[["id", "title", "notes"]].head(num).to_string(index=False))
    print("")


def display_fred_series(
    d_series: Dict[str, Dict[str, str]],
    start_date: str,
    raw: bool = False,
    export: str = "",
):
    """Display (multiple) series from https://fred.stlouisfed.org. [Source: FRED]

    Parameters
    ----------
    series : str
        FRED Series ID from https://fred.stlouisfed.org. For multiple series use: series1,series2,series3
    start_date : str
        Starting date (YYYY-MM-DD) of data
    raw : bool
        Output only raw data
    export : str
        Export data to csv,json,xlsx or png,jpg,pdf,svg file
    """
    series_ids = list(d_series.keys())
    data = pd.DataFrame()

    for s_id in series_ids:
        data = pd.concat(
            [
                data,
                pd.DataFrame(
                    fred_model.get_series_data(s_id, start_date), columns=[s_id]
                ),
            ],
            axis=1,
        )

    # Try to get everything onto the same 0-10 scale.
    # To do so, think in scientific notation.  Divide the data by whatever the E would be
    fig, ax = plt.subplots(figsize=plot_autoscale(), dpi=PLOT_DPI)
    if len(series_ids) == 1:
        s_id = series_ids[0]
        sub_dict: Dict = d_series[s_id]
        title = f"{sub_dict['title']} ({sub_dict['units']})"
        ax.plot(data.index, data, label="\n".join(textwrap.wrap(title, 80)))
    else:
        for s_id, sub_dict in d_series.items():
            data_to_plot = data[s_id].dropna()
            exponent = int(np.log10(data_to_plot.max()))
            data_to_plot /= 10 ** exponent
            multiplier = f"x{format_units(10**exponent)}" if exponent > 0 else ""
            title = f"{sub_dict['title']} ({sub_dict['units']}) {'['+multiplier+']' if multiplier else ''}"
            ax.plot(
                data_to_plot.index,
                data_to_plot,
                label="\n".join(textwrap.wrap(title, 80)),
            )

    ax.legend(prop={"size": 10}, bbox_to_anchor=(0, 1), loc="lower left")
    ax.grid()
    ax.set_xlim(data.index[0], data.index[-1])
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    if gtff.USE_ION:
        plt.ion()
    plt.gcf().autofmt_xdate()
    fig.tight_layout()
    plt.show()
    if raw:
        if gtff.USE_TABULATE_DF:
            print(tabulate(data.tail(20), headers=data.columns, tablefmt="fancy_grid"))
        else:
            print(data.tail(20).to_string())
    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        "plot",
        data,
    )
    print("")


# Leave for tests
def display_series(series: str, start_date: str, raw: bool, export: str):
    """Display (multiple) series from https://fred.stlouisfed.org. [Source: FRED]
    Parameters
    ----------
    series : str
        FRED Series ID from https://fred.stlouisfed.org. For multiple series use: series1,series2,series3
    start_date : str
        Starting date (YYYY-MM-DD) of data
    raw : bool
        Output only raw data
    export : str
        Export data to csv,json,xlsx or png,jpg,pdf,svg file
    """
    if export:
        l_series_fred = []

    if not raw:
        _, ax = plt.subplots(figsize=plot_autoscale(), dpi=PLOT_DPI)
        ax.axes.get_yaxis().set_visible(False)
        plt.subplots_adjust(right=0.9 - series.count(",") * 0.1)
        l_colors = [
            "tab:blue",
            "tab:orange",
            "tab:green",
            "tab:red",
            "tab:purple",
            "tab:brown",
            "tab:pink",
            "tab:gray",
            "tab:olive",
            "tab:cyan",
        ]

        l_ts_start = []
        l_ts_end = []
        p = {}
        success = -1
        success_series = []
        success_titles = []

    for series_term in series.split(","):
        if series_term:
            l_series, l_title = fred_model.get_series_ids(series_term, 5)

            if len(l_series) == 0:
                print(f"No series found for term '{series_term}'\n")
                continue

            print(f"For '{series_term}', series IDs found: {', '.join(l_series)}.\n")

            ser = l_series[0]
            ser_title = l_title[0]
            df_fred = fred_model.get_series_data(ser, start_date)

            if export:
                l_series_fred.append(df_fred)

            df_fred.index.name = "Date"

            if raw:
                df_fred.index = df_fred.index.strftime("%d/%m/%Y")
                if gtff.USE_TABULATE_DF:
                    print(
                        tabulate(
                            df_fred.dropna().to_frame(),
                            showindex=True,
                            headers=[f"{ser}: {ser_title}"],
                            tablefmt="fancy_grid",
                            floatfmt=".2f",
                        ),
                        "\n",
                    )
                else:
                    print(df_fred.dropna().to_frame().to_string(), "\n")

            else:
                success += 1
                success_series.append(ser.upper())
                success_titles.append(ser_title)

                axes = ax.twinx()
                axes.spines["right"].set_position(("axes", 1 + success * 0.15))
                axes.spines["right"].set_color(l_colors[success])
                (p[success],) = axes.plot(
                    df_fred.index,
                    df_fred.values,
                    c=l_colors[success],
                    label=ser.upper(),
                )

                axes.yaxis.label.set_color(l_colors[success])

                l_ts_start.append(df_fred.index[0])
                l_ts_end.append(df_fred.index[-1])

    if not raw and success > -1:
        plt.title("FRED: " + ", ".join(success_series))
        plt.xlim(min(l_ts_start), max(l_ts_end))
        plt.gcf().autofmt_xdate()
        plt.xlabel("Time")
        plt.legend(
            [val for _, val in p.items()], success_titles, loc="best", prop={"size": 6}
        )
        plt.gca().spines["left"].set_visible(False)
        export_data(
            export,
            os.path.dirname(os.path.abspath(__file__)),
            "series",
        )
        if gtff.USE_ION:
            plt.ion()
        plt.show()

    if export and raw:
        df_data = pd.concat(l_series_fred, axis=1)
        df_data.columns = success_series

        export_data(
            export,
            os.path.dirname(os.path.abspath(__file__)),
            "series",
            df_data,
        )
