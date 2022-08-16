"""TA Overlap View"""
__docformat__ = "numpy"

import logging
import os
from typing import List, Optional
from datetime import datetime

import matplotlib.pyplot as plt
import mplfinance as mpf
import pandas as pd
from pandas.plotting import register_matplotlib_converters

from openbb_terminal.config_terminal import theme
from openbb_terminal.common.technical_analysis import overlap_model
from openbb_terminal.config_plot import PLOT_DPI
from openbb_terminal.decorators import log_start_end
from openbb_terminal.helper_funcs import (
    export_data,
    plot_autoscale,
    reindex_dates,
    lambda_long_number_format_y_axis,
    is_valid_axes_count,
)
from openbb_terminal.rich_config import console

logger = logging.getLogger(__name__)

register_matplotlib_converters()


@log_start_end(log=logger)
def view_ma(
    series: pd.Series,
    length: List[int] = None,
    offset: int = 0,
    ma_type: str = "EMA",
    symbol: str = "",
    export: str = "",
    external_axes: Optional[List[plt.Axes]] = None,
) -> None:
    """Plots MA technical indicator

    Parameters
    ----------
    series: pd.Series
        Series of prices
    length: List[int]
        Length of EMA window
    offset: int
        Offset variable
    ma_type: str
        Type of moving average.  Either "EMA" "ZLMA" or "SMA"
    symbol: str
        Ticker
    export: str
        Format to export data
    external_axes: Optional[List[plt.Axes]], optional
        External axes (1 axis is expected in the list), by default None
    """
    # Define a dataframe for adding EMA series to it
    price_df = pd.DataFrame(series)

    l_legend = [symbol]
    if not length:
        length = [20, 50]

    for win in length:
        if ma_type == "EMA":
            df_ta = overlap_model.ema(series, win, offset)
            l_legend.append(f"EMA {win}")
        elif ma_type == "SMA":
            df_ta = overlap_model.sma(series, win, offset)
            l_legend.append(f"SMA {win}")
        elif ma_type == "WMA":
            df_ta = overlap_model.wma(series, win, offset)
            l_legend.append(f"WMA {win}")
        elif ma_type == "HMA":
            df_ta = overlap_model.hma(series, win, offset)
            l_legend.append(f"HMA {win}")
        elif ma_type == "ZLMA":
            df_ta = overlap_model.zlma(series, win, offset)
            l_legend.append(f"ZLMA {win}")
        price_df = price_df.join(df_ta)

    plot_data = reindex_dates(price_df)

    # This plot has 1 axis
    if external_axes is None:
        _, ax = plt.subplots(figsize=plot_autoscale(), dpi=PLOT_DPI)
    elif is_valid_axes_count(external_axes, 1):
        (ax,) = external_axes
    else:
        return

    ax.plot(plot_data.index, plot_data.iloc[:, 1].values)
    ax.set_xlim([plot_data.index[0], plot_data.index[-1]])
    ax.set_ylabel(f"{symbol} Price")
    for idx in range(2, plot_data.shape[1]):
        ax.plot(plot_data.iloc[:, idx])

    ax.set_title(f"{symbol} {ma_type.upper()}")
    ax.legend(l_legend)
    theme.style_primary_axis(
        ax,
        data_index=plot_data.index.to_list(),
        tick_labels=plot_data["date"].to_list(),
    )

    if external_axes is None:
        theme.visualize_output()

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)).replace("common", "stocks"),
        f"{ma_type.lower()}{'_'.join([str(win) for win in length])}",
        price_df,
    )


@log_start_end(log=logger)
def view_vwap(
    symbol: str = "",
    data: pd.DataFrame = None,
    start_date: Optional[datetime] = None,
    end_date: Optional[datetime] = None,
    offset: int = 0,
    s_interval: str = "",
    export: str = "",
    external_axes: Optional[List[plt.Axes]] = None,
):
    """Plots EMA technical indicator

    Parameters
    ----------
    symbol : str
        Ticker
    data : pd.DataFrame
        Dataframe of OHLC prices
    offset : int
        Offset variable
    start_date: datetime
        Start date to get data from with
    end_date: datetime
        End date to get data from with
    s_interval : str
        Interval of data
    export : str
        Format to export data
    external_axes : Optional[List[plt.Axes]], optional
        External axes (3 axes are expected in the list), by default None
    """

    data.index = data.index.tz_localize(None)

    if start_date and end_date:
        start = start_date.date()
        end = end_date.date()
    else:
        start = end = data.index[-1].date()
        console.print(
            f"No Specified date range. load most recent trading data: {start.strftime('%Y-%m-%d')}"
        )

    day_df = data[(start <= data.index.date) & (data.index.date <= end)]
    if len(day_df) == 0:
        console.print(
            f"[red]No data found between {start.strftime('%Y-%m-%d')} and {end.strftime('%Y-%m-%d')}\n[/red]"
        )
        return

    df_vwap = overlap_model.vwap(day_df, offset)

    candle_chart_kwargs = {
        "type": "candle",
        "style": theme.mpf_style,
        "volume": True,
        "xrotation": theme.xticks_rotation,
        "scale_padding": {"left": 0.3, "right": 1.2, "top": 0.8, "bottom": 0.8},
        "update_width_config": {
            "candle_linewidth": 0.6,
            "candle_width": 0.8,
            "volume_linewidth": 0.8,
            "volume_width": 0.8,
        },
        "warn_too_much_data": 10000,
    }
    # This plot has 2 axes
    if external_axes is None:
        candle_chart_kwargs["returnfig"] = True
        candle_chart_kwargs["figratio"] = (10, 7)
        candle_chart_kwargs["figscale"] = 1.10
        candle_chart_kwargs["figsize"] = plot_autoscale()
        candle_chart_kwargs["addplot"] = mpf.make_addplot(
            df_vwap, width=theme.line_width
        )
        fig, ax = mpf.plot(day_df, **candle_chart_kwargs)
        fig.suptitle(
            f"{symbol} {s_interval} VWAP",
            x=0.055,
            y=0.965,
            horizontalalignment="left",
        )
        lambda_long_number_format_y_axis(day_df, "Volume", ax)
        theme.visualize_output(force_tight_layout=False)
    elif is_valid_axes_count(external_axes, 3):
        (ax1, ax2, ax3) = external_axes
        candle_chart_kwargs["ax"] = ax1
        candle_chart_kwargs["volume"] = ax2
        candle_chart_kwargs["addplot"] = mpf.make_addplot(
            df_vwap, width=theme.line_width, ax=ax3
        )
        mpf.plot(day_df, **candle_chart_kwargs)
    else:
        return

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)).replace("common", "stocks"),
        "VWAP",
        df_vwap,
    )
