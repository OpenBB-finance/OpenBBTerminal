import logging

import plotly.graph_objects as go

import bots.config_discordbot as cfg
from bots import helpers, load_candle
from gamestonk_terminal.common.technical_analysis import trend_indicators_model
from gamestonk_terminal.decorators import log_start_end

logger = logging.getLogger(__name__)


# pylint: disable=R0913
@log_start_end(log=logger)
def adx_command(
    ticker="",
    interval: int = 15,
    past_days: int = 0,
    length="14",
    scalar="100",
    drift="1",
    start="",
    end="",
    extended_hours: bool = False,
    heikin_candles: bool = False,
    news: bool = False,
):
    """Displays chart with average directional movement index [Yahoo Finance]"""

    # Debug
    if cfg.DEBUG:
        # pylint: disable=logging-too-many-args
        logger.debug(
            "ta adx %s %s %s %s %s %s %s %s %s %s %s",
            ticker,
            interval,
            past_days,
            length,
            scalar,
            drift,
            start,
            end,
            extended_hours,
            heikin_candles,
            news,
        )

    # Check for argument
    if ticker == "":
        raise Exception("Stock ticker is required")

    # Retrieve Data
    df_stock, start, end, bar_start = load_candle.stock_data(
        ticker=ticker,
        interval=interval,
        past_days=past_days,
        extended_hours=extended_hours,
        start=start,
        end=end,
        heikin_candles=heikin_candles,
    )

    if df_stock.empty:
        return Exception("No Data Found")

    if not length.lstrip("-").isnumeric():
        raise Exception("Number has to be an integer")
    length = float(length)
    if not scalar.lstrip("-").isnumeric():
        raise Exception("Number has to be an integer")
    scalar = float(scalar)
    if not drift.lstrip("-").isnumeric():
        raise Exception("Number has to be an integer")
    drift = float(drift)

    df_ta = df_stock.loc[(df_stock.index >= start) & (df_stock.index < end)]

    if df_ta.empty:
        return Exception("No Data Found")

    ta_data = trend_indicators_model.adx(
        df_stock["High"],
        df_stock["Low"],
        df_stock["Adj Close"],
        length,
        scalar,
        drift,
    )
    df_ta = df_ta.join(ta_data)

    # Output Data
    if interval != 1440:
        ta_start = load_candle.local_tz(bar_start)
        ta_end = load_candle.local_tz(end)
        df_ta = df_ta.loc[(df_ta.index >= ta_start) & (df_ta.index < ta_end)]

    plot = load_candle.candle_fig(
        df_ta,
        ticker,
        interval,
        extended_hours,
        news,
        bar=bar_start,
        int_bar=interval,
        rows=2,
        cols=1,
        shared_xaxes=True,
        vertical_spacing=0.07,
        row_width=[0.4, 0.6],
        specs=[[{"secondary_y": True}], [{"secondary_y": False}]],
    )
    fig = plot["fig"]

    fig.add_trace(
        go.Scatter(
            mode="lines",
            name=f"ADX ({length})",
            x=df_ta.index,
            y=df_ta[f"ADX_{length}"],
            opacity=1,
            line=dict(width=2),
        ),
        row=2,
        col=1,
        secondary_y=False,
    )
    fig.add_trace(
        go.Scatter(
            mode="lines",
            name=f"+DI ({length})",
            x=df_ta.index,
            y=df_ta[f"DMP_{length}"],
            opacity=1,
            line=dict(width=1),
        ),
        row=2,
        col=1,
        secondary_y=False,
    )
    fig.add_trace(
        go.Scatter(
            mode="lines",
            name=f"-DI ({length})",
            x=df_ta.index,
            y=df_ta[f"DMN_{length}"],
            opacity=1,
            line=dict(width=1),
        ),
        row=2,
        col=1,
        secondary_y=False,
    )
    fig.add_hline(
        y=25,
        fillcolor="grey",
        opacity=1,
        layer="below",
        line_width=3,
        line=dict(color="grey", dash="dash"),
        row=2,
        col=1,
    )
    fig.update_layout(
        margin=dict(l=0, r=0, t=50, b=20),
        template=cfg.PLT_TA_STYLE_TEMPLATE,
        colorway=cfg.PLT_TA_COLORWAY,
        title=f"{ticker.upper()} {interval}m Average Directional Movement Index (ADX)",
        title_x=0.02,
        title_font_size=12,
        dragmode="pan",
    )
    imagefile = "ta_adx.png"

    # Check if interactive settings are enabled
    plt_link = ""
    if cfg.INTERACTIVE:
        plt_link = helpers.inter_chart(fig, imagefile, callback=False)

    fig.update_layout(
        width=800,
        height=500,
    )

    imagefile = helpers.image_border(imagefile, fig=fig)

    return {
        "title": f"Stocks: Average-Directional-Movement-Index {ticker}",
        "description": plt_link,
        "imagefile": imagefile,
    }
