"""Charting router."""

from typing import Any, Dict, Tuple

import pandas as pd
from openbb_core.app.model.charts.chart import ChartFormat
from openbb_core.app.utils import basemodel_to_df

from openbb_charting.core.chart_style import ChartStyle
from openbb_charting.core.openbb_figure import OpenBBFigure
from openbb_charting.core.plotly_ta.ta_class import PlotlyTA
from openbb_charting.core.to_chart import to_chart
from openbb_charting.query_params import (
    EconomyFredSeriesChartQueryParams,
    EquityPriceHistoricalChartQueryParams,
    TechnicalConesChartQueryParams,
)
from openbb_charting.styles.colors import LARGE_CYCLER
from openbb_charting.utils.helpers import (
    calculate_returns,
    heikin_ashi,
    should_share_axis,
    z_score_standardization,
)

CHART_FORMAT = ChartFormat.plotly

# if TYPE_CHECKING:

# from .core.openbb_figure_table import OpenBBFigureTable


def equity_price_historical(  # noqa: PLR0912
    **kwargs: EquityPriceHistoricalChartQueryParams,
) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """Equity price chart."""

    if "data" in kwargs and isinstance(kwargs["data"], pd.DataFrame):
        data = kwargs["data"]
    elif "data" in kwargs and isinstance(kwargs["data"], list):
        data = basemodel_to_df(kwargs["data"], index=kwargs.get("index", "date"))  # type: ignore
    else:
        data = basemodel_to_df(
            kwargs["obbject_item"], index=kwargs.get("index", "date")  # type: ignore
        )

    if "date" in data.columns:
        data = data.set_index("date")

    target = str(kwargs.get("target"))
    normalize = kwargs.get("normalize") is True
    returns = kwargs.get("returns") is True
    same_axis = kwargs.get("same_axis") is True
    text_color = "black" if ChartStyle().plt_style == "light" else "white"
    title = f"{kwargs.get('title')}" if "title" in kwargs else "Historical Prices"
    y1title = ""
    y2title = ""
    candles = True
    multi_symbol = (
        bool(kwargs.get("multi_symbol") is True)
        or (
            "symbol" in data.columns
            and target in data.columns
            and len(data.symbol.unique()) > 1
        )
        or ("target" in kwargs and kwargs.get("target") is not None)
        or "symbol" in data.columns
        or (
            "symbol" not in data.columns
            and bool(data.columns.isin(["open", "high", "low", "close"]).all())
        )
    )

    target = "close" if target is None or target == "None" or target == "" else target

    if multi_symbol is True:
        if "symbol" not in data.columns and target in data.columns:
            data = data[[target]]
            y1title = target.title()
        if "symbol" in data.columns and target in data.columns:
            data = data.pivot(columns="symbol", values=target)
            y1title = target
            title = f"Historical {target.title()}"

    indicators = kwargs.get("indicators", {})
    candles = bool(~data.columns.isin(["open", "high", "low", "close"]).all())
    candles = candles if kwargs.get("candles", True) else False
    volume = kwargs.get("volume", True) if "volume" in data.columns else False

    if normalize is True:
        if "symbol" not in data.columns and target in data.columns:
            data = data[[target]]
        multi_symbol = True
        candles = False
        volume = False

    if returns is True:
        if "symbol" not in data.columns and target in data.columns:
            data = data[[target]]
        multi_symbol = True
        candles = False
        volume = False

    if (
        multi_symbol is False
        and normalize is False
        and returns is False
        and candles is True
    ):
        if "heikin_ashi" in kwargs and kwargs["heikin_ashi"] is True:
            data = heikin_ashi(data)
            title = f"{title} - Heikin Ashi"
        _volume = False
        if "atr" in indicators:  # type: ignore
            _volume = volume
            volume = False

        ta = PlotlyTA()
        fig = ta.plot(  # type: ignore
            data,
            indicators=indicators,  # type: ignore
            symbol=title,
            candles=candles,
            volume=volume,  # type: ignore
        )
        fig.update_traces(selector=dict(type="scatter", mode="lines"), connectgaps=True)
        if _volume is True and "atr" in indicators:  # type: ignore
            fig.add_inchart_volume(data)
        fig.update_layout(
            title=dict(text=title, x=0.5, font=dict(size=16)),
            paper_bgcolor="rgba(0,0,0,0)",
            plot_bgcolor="rgba(0,0,0,0)",
            font=dict(color=text_color),
            showlegend=True,
            legend=dict(
                orientation="h",
                yanchor="bottom",
                xanchor="auto",
                y=1.02,
                x=0.95,
                xref="paper",
                bgcolor="rgba(0,0,0,0)",
                font=dict(size=12),
            ),
            xaxis=dict(
                ticklen=0,
                showgrid=True,
                gridcolor="rgba(128,128,128,0.3)",
                zeroline=True,
                mirror=True,
                showline=True,
            ),
            xaxis2=dict(
                ticklen=0,
                showgrid=True,
                gridcolor="rgba(128,128,128,0.3)",
                zeroline=True,
                mirror=True,
                showline=True,
            ),
            yaxis=dict(
                ticklen=0,
                showgrid=True,
                gridcolor="rgba(128,128,128,0.3)",
                zeroline=True,
                mirror=True,
                showline=True,
            ),
            yaxis2=dict(
                ticklen=0,
                gridcolor="rgba(128,128,128,0.3)",
            ),
            yaxis3=dict(
                ticklen=0,
                gridcolor="rgba(128,128,128,0.3)",
            ),
            dragmode="pan",
            hovermode="x",
        )

        content = fig.show(external=True).to_plotly_json()

        return fig, content

    if multi_symbol is True or candles is False:

        if "symbol" not in data.columns and target in data.columns:
            data = data[[target]]

        if "symbol" in data.columns:
            data = data.pivot(columns="symbol", values=target)

        title: str = kwargs.get("title") if "title" in kwargs else title if title else "Historical Prices"  # type: ignore

        y1title = data.iloc[:, 0].name
        y2title = ""

        if len(data.columns) > 2 or normalize is True or returns is True:
            if returns is True or (len(data.columns) > 2 and normalize is False):
                data = data.apply(calculate_returns)
                title = f"{title} - Cumulative Returns"
                y1title = "Percent"
            if normalize is True:
                if returns is True:
                    title = f"{title.replace(' - Cumulative Returns', '')} - Normalized Cumulative Returns"
                else:
                    title = title + " - Normalized"
                data = data.apply(z_score_standardization)
                y1title = None
                y2title = None

        fig = OpenBBFigure()

        fig.update_layout(ChartStyle().plotly_template.get("layout", {}))

        for i, col in enumerate(data.columns):

            hovertemplate = f"{data[col].name}: %{{y}}<extra></extra>"
            yaxis = "y1"
            if y1title and y1title != "Percent":
                yaxis = (
                    (
                        "y1"
                        if should_share_axis(data, col, y1title)  # type: ignore
                        or col == y1title
                        or normalize is True
                        or returns is True
                        else "y2"
                    )
                    if same_axis is False
                    else "y1"
                )

            if yaxis == "y2":
                y2title = data[col].name

            fig.add_scatter(
                x=data.index,
                y=data[col],
                name=data[col].name,
                mode="lines",
                hovertemplate=hovertemplate,
                line=dict(width=1, color=LARGE_CYCLER[i % len(LARGE_CYCLER)]),
                yaxis=yaxis,
            )

    if normalize is True or returns is True:
        y1title = "Percent" if returns is True else None
        y2title = None

    if same_axis is True:
        y1title = None
        y2title = None

    fig.update_layout(
        title=dict(text=title, x=0.5, font=dict(size=16)),
        paper_bgcolor="rgba(0,0,0,0)",
        plot_bgcolor="rgba(0,0,0,0)",
        font=dict(color=text_color),
        legend=dict(
            orientation="h",
            yanchor="bottom",
            xanchor="right",
            y=1.02,
            x=1,
            bgcolor="rgba(0,0,0,0)",
        ),
        yaxis1=(
            dict(
                side="right",
                ticklen=0,
                showgrid=True,
                title=dict(
                    text=y1title if y1title else None, standoff=20, font=dict(size=20)
                ),
                tickfont=dict(size=14),
                anchor="x",
            )
        ),
        yaxis2=(
            dict(
                overlaying="y",
                side="left",
                ticklen=0,
                showgrid=False,
                title=dict(
                    text=y2title if y2title else None, standoff=10, font=dict(size=20)
                ),
                tickfont=dict(size=14),
                anchor="x",
            )
            if y2title
            else None
        ),
        xaxis=dict(
            ticklen=0,
            showgrid=True,
        ),
        margin=dict(l=20, r=20, b=20),
        dragmode="pan",
        hovermode="x",
    )

    content = fig.show(external=True).to_plotly_json()

    return fig, content


def etf_historical(
    **kwargs: EquityPriceHistoricalChartQueryParams,
) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """ETF Historical Chart."""
    return equity_price_historical(**kwargs)


def index_price_historical(
    **kwargs: EquityPriceHistoricalChartQueryParams,
) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """Index Price Historical Chart."""
    return equity_price_historical(**kwargs)


def currency_price_historical(
    **kwargs: EquityPriceHistoricalChartQueryParams,
) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """Currency Price Historical Chart."""
    return equity_price_historical(**kwargs)


def crypto_price_historical(
    **kwargs: EquityPriceHistoricalChartQueryParams,
) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """Crypto Price Historical Chart."""
    return equity_price_historical(**kwargs)


def _ta_ma(**kwargs):
    """Plot moving average helper."""

    index = (
        kwargs.get("index")
        if "index" in kwargs and kwargs.get("index") is not None
        else "date"
    )
    data = kwargs.get("data")
    ma_type = (
        kwargs["ma_type"]
        if "ma_type" in kwargs and kwargs.get("ma_type") is not None
        else "sma"
    )
    ma_types = ma_type.split(",") if isinstance(ma_type, str) else ma_type

    if isinstance(data, pd.DataFrame) and not data.empty:
        data = data.set_index(index) if index in data.columns else data

    if data is None:
        data = basemodel_to_df(kwargs["obbject_item"], index=index)

    if isinstance(data, list):
        data = basemodel_to_df(data, index=index)

    window = (
        kwargs.get("length", [])
        if "length" in kwargs and kwargs.get("length") is not None
        else [50]
    )
    offset = kwargs.get("offset", 0)
    target = (
        kwargs.get("target")
        if "target" in kwargs and kwargs.get("target") is not None
        else "close"
    )
    if "target" in kwargs and kwargs.get("target") is not None:
        target = kwargs.get("target") if kwargs.get("target") != "close" else target

    if target not in data.columns and "close" in data.columns:
        target = "close"

    if target not in data.columns and "close" not in data.columns:
        raise ValueError(f"Column '{target}', or 'close', not found in the data.")

    df = data.copy()
    if target in data.columns:
        df = df[[target]]
        df.columns = ["close"]
    title = (
        kwargs.get("title")
        if "title" in kwargs and kwargs.get("title") is not None
        else f"{ma_type.upper()}"
    )

    fig = OpenBBFigure()
    fig = fig.create_subplots(
        1,
        1,
        shared_xaxes=True,
        vertical_spacing=0.06,
        horizontal_spacing=0.01,
        row_width=[1],
        specs=[[{"secondary_y": True}]],
    )
    fig.update_layout(ChartStyle().plotly_template.get("layout", {}))

    ma_df = pd.DataFrame()
    window = [window] if isinstance(window, int) else window
    for w in window:
        for ma_type in ma_types:
            ma_df[f"{ma_type.upper()} {w}"] = getattr(df.ta, ma_type)(
                length=w, offset=offset
            )

    if kwargs.get("dropnan") is True:
        ma_df = ma_df.dropna()
        data = data.iloc[-len(ma_df) :]

    color = 0

    if (
        "candles" in kwargs
        and kwargs.get("candles") is True
        and kwargs.get("target") is None
    ):
        volume = kwargs.get("volume") is True
        fig, _ = to_chart(data, candles=True, volume=volume)

    else:
        ma_df[f"{target}".title()] = data[target]

    for col in ma_df.columns:
        name = col.replace("_", " ")
        fig.add_scatter(
            x=ma_df.index,
            y=ma_df[col],
            name=name,
            mode="lines",
            hovertemplate=f"{name}: %{{y}}<extra></extra>",
            line=dict(width=1, color=LARGE_CYCLER[color]),
            showlegend=True,
        )
        color += 1

    fig.update_layout(
        title=dict(text=title, x=0.5, font=dict(size=16)),
        paper_bgcolor="rgba(0,0,0,0)",
        plot_bgcolor="rgba(0,0,0,0)",
        showlegend=True,
        legend=dict(
            orientation="h",
            yanchor="bottom",
            xanchor="right",
            y=1.02,
            x=0.95,
            bgcolor="rgba(0,0,0,0)",
        ),
        xaxis=dict(
            ticklen=0,
            showgrid=True,
            gridcolor="rgba(128,128,128,0.3)",
            zeroline=True,
            mirror=True,
        ),
        yaxis=dict(
            ticklen=0,
            showgrid=True,
            gridcolor="rgba(128,128,128,0.3)",
            zeroline=True,
            mirror=True,
            autorange=True,
        ),
    )

    content = fig.show(external=True).to_plotly_json()

    return fig, content


def technical_sma(**kwargs) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """Plot simple moving average chart."""
    if "ma_type" not in kwargs:
        kwargs["ma_type"] = "sma"
    return _ta_ma(**kwargs)


def technical_ema(**kwargs) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """Exponential moving average chart."""
    if "ma_type" not in kwargs:
        kwargs["ma_type"] = "ema"
    return _ta_ma(**kwargs)


def technical_hma(**kwargs) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """Hull moving average chart."""
    if "ma_type" not in kwargs:
        kwargs["ma_type"] = "hma"
    return _ta_ma(**kwargs)


def technical_wma(**kwargs) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """Weighted moving average chart."""
    if "ma_type" not in kwargs:
        kwargs["ma_type"] = "wma"
    return _ta_ma(**kwargs)


def technical_zlma(**kwargs) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """Zero lag moving average chart."""
    if "ma_type" not in kwargs:
        kwargs["ma_type"] = "zlma"
    return _ta_ma(**kwargs)


def technical_aroon(**kwargs) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """Technical Aroon Chart."""

    if "data" in kwargs and isinstance(kwargs["data"], pd.DataFrame):
        data = kwargs["data"]
    else:
        data = basemodel_to_df(
            kwargs["obbject_item"], index=kwargs.get("index", "date")
        )

    if "date" in data.columns:
        data = data.set_index("date")

    if "symbol" in data.columns and len(data.symbol.unique()) > 1:
        raise ValueError(
            "Please provide data with only one symbol and columns for OHLC."
        )

    symbol = kwargs.get("symbol", "")

    volume = kwargs.get("volume") is True
    title = f"Aroon Indicator & Oscillator {symbol}"

    length = kwargs.get("length", 25)
    scalar = kwargs.get("scalar", 100)
    symbol = kwargs.get("symbol", "")

    ta = PlotlyTA()
    fig = ta.plot(
        data,
        dict(aroon=dict(length=length, scalar=scalar)),
        title,
        False,
        volume=volume,
    )

    content = fig.show(external=True).to_plotly_json()

    return fig, content


def technical_macd(**kwargs) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """Plot moving average convergence divergence chart."""

    if "data" in kwargs and isinstance(kwargs["data"], pd.DataFrame):
        data = kwargs["data"]
    else:
        data = basemodel_to_df(
            kwargs["obbject_item"], index=kwargs.get("index", "date")
        )

    if "date" in data.columns:
        data = data.set_index("date")

    if "symbol" in data.columns and len(data.symbol.unique()) > 1:
        raise ValueError(
            "Please provide data with only one symbol and columns for OHLC."
        )

    fast = kwargs.get("fast", 12)
    slow = kwargs.get("slow", 26)
    signal = kwargs.get("signal", 9)
    symbol = kwargs.get("symbol", "")

    title = f"{symbol.upper()} MACD"
    volume = kwargs.get("volume") is True

    ta = PlotlyTA()
    fig = ta.plot(
        data,
        dict(macd=dict(fast=fast, slow=slow, signal=signal)),
        title,
        False,
        volume=volume,
    )
    content = fig.show(external=True).to_plotly_json()

    return fig, content


def technical_adx(**kwargs) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """Average directional movement index chart."""

    if "data" in kwargs and isinstance(kwargs["data"], pd.DataFrame):
        data = kwargs["data"]
    else:
        data = basemodel_to_df(
            kwargs["obbject_item"], index=kwargs.get("index", "date")
        )

    if "date" in data.columns:
        data = data.set_index("date")

    if "symbol" in data.columns and len(data.symbol.unique()) > 1:
        raise ValueError(
            "Please provide data with only one symbol and columns for OHLC."
        )

    length = kwargs.get("length", 14)
    scalar = kwargs.get("scalar", 100.0)
    drift = kwargs.get("drift", 1)
    symbol = kwargs.get("symbol", "")

    ta = PlotlyTA()
    fig = ta.plot(
        data,
        dict(adx=dict(length=length, scalar=scalar, drift=drift)),
        f"Average Directional Movement Index (ADX) {symbol}",
        False,
        volume=False,
    )
    content = fig.show(external=True).to_plotly_json()

    return fig, content


def technical_rsi(**kwargs) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """Relative strength index chart."""

    if "data" in kwargs and isinstance(kwargs["data"], pd.DataFrame):
        data = kwargs["data"]
    else:
        data = basemodel_to_df(
            kwargs["obbject_item"], index=kwargs.get("index", "date")
        )

    if "date" in data.columns:
        data = data.set_index("date")

    if "symbol" in data.columns and len(data.symbol.unique()) > 1:
        raise ValueError(
            "Please provide data with only one symbol and columns for OHLC."
        )

    window = kwargs.get("window", 14)
    scalar = kwargs.get("scalar", 100.0)
    drift = kwargs.get("drift", 1)
    symbol = kwargs.get("symbol", "")

    ta = PlotlyTA()
    fig = ta.plot(
        data,
        dict(rsi=dict(length=window, scalar=scalar, drift=drift)),
        f"{symbol.upper()} RSI {window}",
        False,
        volume=False,
    )
    content = fig.show(external=True).to_plotly_json()

    return fig, content


def technical_cones(
    **kwargs: TechnicalConesChartQueryParams,
) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """Volatility Cones Chart."""

    data = kwargs.get("data")

    if isinstance(data, pd.DataFrame) and not data.empty and "window" in data.columns:
        df_ta = data.set_index("window")
    else:
        df_ta = basemodel_to_df(kwargs["obbject_item"], index="window")  # type: ignore

    df_ta.columns = [col.title().replace("_", " ") for col in df_ta.columns]

    # Check if the data is formatted as expected.
    if not all(col in df_ta.columns for col in ["Realized", "Min", "Median", "Max"]):
        raise ValueError("Data supplied does not match the expected format.")

    model = (
        str(kwargs.get("model"))
        .replace("std", "Standard Deviation")
        .replace("_", "-")
        .title()
        if kwargs.get("model")
        else "Standard Deviation"
    )

    symbol = str(kwargs.get("symbol")) + " - " if kwargs.get("symbol") else ""

    title = (
        str(kwargs.get("title"))
        if kwargs.get("title")
        else f"{symbol}Realized Volatility Cones - {model} Model"
    )

    colors = [
        "green",
        "red",
        "burlywood",
        "grey",
        "orange",
        "blue",
    ]
    color = 0

    fig = OpenBBFigure()

    fig.update_layout(ChartStyle().plotly_template.get("layout", {}))

    text_color = "black" if ChartStyle().plt_style == "light" else "white"

    for col in df_ta.columns:
        fig.add_scatter(
            x=df_ta.index,
            y=df_ta[col],
            name=col,
            mode="lines+markers",
            hovertemplate=f"{col}: %{{y}}<extra></extra>",
            marker=dict(
                color=colors[color],
                size=11,
            ),
        )
        color += 1

    fig.set_title(title)

    fig.update_layout(
        paper_bgcolor="rgba(0,0,0,0)",
        plot_bgcolor="rgba(0,0,0,0)",
        font=dict(color=text_color),
        legend=dict(
            orientation="h",
            yanchor="bottom",
            xanchor="right",
            y=1.02,
            x=1,
            bgcolor="rgba(0,0,0,0)",
        ),
        yaxis=dict(
            ticklen=0,
            showgrid=True,
            showline=True,
            mirror=True,
            zeroline=False,
            gridcolor="rgba(128,128,128,0.3)",
        ),
        xaxis=dict(
            type="category",
            tickmode="array",
            ticklen=0,
            tickvals=df_ta.index,
            ticktext=df_ta.index,
            title_text="Period",
            showgrid=False,
            showline=True,
            mirror=True,
            zeroline=False,
        ),
        margin=dict(l=20, r=20, b=20),
        dragmode="pan",
    )

    content = fig.to_plotly_json()

    return fig, content


def economy_fred_series(
    **kwargs: EconomyFredSeriesChartQueryParams,
) -> Tuple["OpenBBFigure", Dict[str, Any]]:
    """FRED Series Chart."""

    ytitle_dict = {
        "chg": "Change",
        "ch1": "Change From Year Ago",
        "pch": "Percent Change",
        "pc1": "Percent Change From Year Ago",
        "pca": "Compounded Annual Rate Of Change",
        "cch": "Continuously Compounded Rate Of Change",
        "cca": "Continuously Compounded Annual Rate Of Change",
        "log": "Natural Log",
    }

    provider = kwargs.get("provider")

    if provider != "fred":
        raise RuntimeError(
            f"This charting method does not support {provider}. Supported providers: fred."
        )

    columns = basemodel_to_df(kwargs["obbject_item"], index=None).columns.to_list()  # type: ignore

    allow_unsafe = kwargs.get("allow_unsafe", False)
    dropnan = kwargs.get("dropna", True)
    normalize = kwargs.get("normalize", False)

    data_cols = []
    data = kwargs.get("data")

    if isinstance(data, pd.DataFrame) and not data.empty:
        data_cols = data.columns.to_list()
        df_ta = data

    else:
        df_ta = basemodel_to_df(kwargs["obbject_item"], index="date")  # type: ignore

    # Check for unsupported external data injection.
    if allow_unsafe is False and data_cols:
        for data_col in data_cols:
            if data_col not in columns:
                raise RuntimeError(
                    f"Column '{data_col}' was not found in the original data."
                    + " External data injection is not supported unless `allow_unsafe = True`."
                )

    # Align the data so each column has the same index and length.
    if dropnan:
        df_ta = df_ta.dropna(how="any")

    if df_ta.empty or len(df_ta) < 2:
        raise ValueError(
            "No data is left after dropping NaN values. Try setting `dropnan = False`,"
            + " or use the `frequency` parameter on request ."
        )

    columns = df_ta.columns.to_list()

    if normalize:
        df_ta = df_ta.apply(z_score_standardization)

    metadata = kwargs.get("metadata", {})

    # Check if the request was transformed by the FRED API.
    params = kwargs["extra_params"] if kwargs.get("extra_params") else {}
    has_params = hasattr(params, "transform") and params.transform is not None  # type: ignore

    # Get a unique list of all units of measurement in the DataFrame.
    y_units = list({metadata.get(col).get("units") for col in columns if col in metadata})  # type: ignore
    if has_params is True and not y_units:
        y_units = [ytitle_dict.get(params.transform)]  # type: ignore

    if len(y_units) > 2 and has_params is False and allow_unsafe is True:
        raise RuntimeError(
            "This method supports up to 2 y-axis units."
            + " Please use the 'transform' parameter, in the data request,"
            + " to compare all series on the same scale, or set `normalize = True`."
            + " Override this error by setting `allow_unsafe = True`."
        )

    y1_units = y_units[0]

    y1title = y1_units

    y2title = y_units[1] if len(y_units) > 1 else None

    xtitle = ""

    # If the request was transformed, the y-axis will be shared under these conditions.
    if has_params and any(
        i in params.transform for i in ["pc1", "pch", "pca", "cch", "cca", "log"]  # type: ignore
    ):
        y1title = "Log" if params.transform == "Log" else "Percent"  # type: ignore
        y2title = None

    # Set the title for the chart.
    if kwargs.get("title"):
        title = kwargs.get("title")
    else:
        if metadata.get(columns[0]):
            title = metadata.get(columns[0]).get("title") if len(columns) == 1 else "FRED Series"  # type: ignore
        else:
            title = "FRED Series"
        transform_title = ytitle_dict.get(params.transform) if has_params is True else ""  # type: ignore
        title = f"{title} - {transform_title}" if transform_title else title

    # Define this to use as a check.
    y3title = ""

    # Create the figure object with subplots.
    fig = OpenBBFigure().create_subplots(
        rows=1, cols=1, shared_xaxes=True, shared_yaxes=False
    )

    # For each series in the DataFrame, add a scatter plot.
    for i, col in enumerate(df_ta.columns):

        # Check if the y-axis should be shared for this series.
        on_y1 = (
            (
                metadata.get(col).get("units") == y1_units
                or y2title is None  # type: ignore
                or kwargs.get("same_axis") is True
            )
            if metadata.get(col)
            else False
        )
        if normalize:
            on_y1 = True

        yaxes = "y2" if not on_y1 else "y1"
        on_y3 = not metadata.get(col) and normalize is False
        if on_y3:
            yaxes = "y3"
            y3title = df_ta[col].name
        fig.add_scatter(
            x=df_ta.index,
            y=df_ta[col],
            name=df_ta[col].name,
            mode="lines",
            hovertemplate=f"{df_ta[col].name}: %{{y}}<extra></extra>",
            line=dict(width=1, color=LARGE_CYCLER[i % len(LARGE_CYCLER)]),
            yaxis="y1" if kwargs.get("same_axis") is True else yaxes,
        )

    # Set the y-axis titles, if supplied.
    if kwargs.get("y1title"):
        y1title = kwargs.get("y1title")
    if kwargs.get("y2title") and y2title is not None:
        y2title = kwargs.get("y2title")
    # Set the x-axis title, if suppiled.
    if kwargs.get("xtitle"):
        xtitle = kwargs.get("xtitle")
    # If the data was normalized, set the title to reflect this.
    if normalize:
        y1title = None
        y2title = None
        y3title = None
        title = f"{title} - Normalized"

    # Now update the layout of the complete figure.
    fig.update_layout(
        title=dict(text=title, x=0.5, font=dict(size=16)),
        paper_bgcolor="rgba(0,0,0,0)",
        plot_bgcolor="rgba(0,0,0,0)",
        legend=dict(
            orientation="h",
            yanchor="bottom",
            xanchor="right",
            y=1.02,
            x=0.95,
            bgcolor="rgba(0,0,0,0)",
            font=dict(size=12),
        ),
        yaxis=(
            dict(
                ticklen=0,
                side="right",
                showline=True,
                mirror=True,
                title=dict(text=y1title, standoff=30, font=dict(size=16)),
                tickfont=dict(size=14),
                anchor="x",
                gridcolor="rgba(128,128,128,0.3)",
            )
            if y1title
            else None
        ),
        yaxis2=(
            dict(
                overlaying="y",
                side="left",
                ticklen=0,
                showgrid=False,
                title=dict(
                    text=y2title if y2title else None, standoff=10, font=dict(size=16)
                ),
                tickfont=dict(size=14),
                anchor="x",
            )
            if y2title
            else None
        ),
        yaxis3=(
            dict(
                overlaying="y",
                side="left",
                ticklen=0,
                position=0,
                showgrid=False,
                showticklabels=True,
                title=(
                    dict(text=y3title, standoff=10, font=dict(size=16))
                    if y3title
                    else None
                ),
                tickfont=dict(size=12, color="rgba(128,128,128,0.9)"),
                anchor="free",
            )
            if y3title
            else None
        ),
        xaxis=dict(
            ticklen=0,
            showgrid=True,
            showline=True,
            mirror=True,
            title=(
                dict(text=xtitle, standoff=30, font=dict(size=16)) if xtitle else None
            ),
            gridcolor="rgba(128,128,128,0.3)",
            domain=[0.095, 0.95] if y3title else None,
        ),
        margin=dict(r=25, l=25) if normalize is False else None,
        autosize=True,
        dragmode="pan",
    )

    content = fig.to_plotly_json()

    return fig, content
