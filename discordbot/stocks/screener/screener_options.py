import os

import discordbot.config_discordbot as cfg

presets_path = os.path.join(
    cfg.GST_PATH, "gamestonk_terminal", "stocks", "screener", "presets", ""
)

d_signals_desc = {
    "top_gainers": "stocks with the highest %% price gain today",
    "top_losers": "stocks with the highest %% price loss today",
    "new_high": "stocks making 52-week high today",
    "new_low": "stocks making 52-week low today",
    "most_volatile": "stocks with the highest widest high/low trading range today",
    "most_active": "stocks with the highest trading volume today",
    "unusual_volume": "stocks with unusually high volume today - the highest relative volume ratio",
    "overbought": "stock is becoming overvalued and may experience a pullback.",
    "oversold": "oversold stocks may represent a buying opportunity for investors",
    "downgrades": "stocks downgraded by analysts today",
    "upgrades": "stocks upgraded by analysts today",
    "earnings_before": "companies reporting earnings today, before market open",
    "earnings_after": "companies reporting earnings today, after market close",
    "recent_insider_buying": "stocks with recent insider buying activity",
    "recent_insider_selling": "stocks with recent insider selling activity",
    "major_news": "stocks with the highest news coverage today",
    "horizontal_sr": "horizontal channel of price range between support and resistance trendlines",
    "tl_resistance": "once a rising trendline is broken",
    "tl_support": "once a falling trendline is broken",
    "wedge_up": "upward trendline support and upward trendline resistance (reversal)",
    "wedge_down": "downward trendline support and downward trendline resistance (reversal)",
    "wedge": "upward trendline support, downward trendline resistance (contiunation)",
    "triangle_ascending": "upward trendline support and horizontal trendline resistance",
    "triangle_descending": "horizontal trendline support and downward trendline resistance",
    "channel_up": "both support and resistance trendlines slope upward",
    "channel_down": "both support and resistance trendlines slope downward",
    "channel": "both support and resistance trendlines are horizontal",
    "double_top": "stock with 'M' shape that indicates a bearish reversal in trend",
    "double_bottom": "stock with 'W' shape that indicates a bullish reversal in trend",
    "multiple_top": "same as double_top hitting more highs",
    "multiple_bottom": "same as double_bottom hitting more lows",
    "head_shoulders": "chart formation that predicts a bullish-to-bearish trend reversal",
    "head_shoulders_inverse": "chart formation that predicts a bearish-to-bullish trend reversal",
}

presets = [
    preset.split(".")[0] for preset in os.listdir(presets_path) if preset[-4:] == ".ini"
]

all_presets = list(d_signals_desc.keys()) + presets


d_cols_to_sort = {
    "overview": [
        "Ticker",
        "Company",
        "Sector",
        "Industry",
        "Country",
        "Market Cap",
        "P/E",
        "Price",
        "Change",
        "Volume",
    ],
    "valuation": [
        "Ticker",
        "Market Cap",
        "P/E",
        "Fwd P/E",
        "PEG",
        "P/S",
        "P/B",
        "P/C",
        "P/FCF",
        "EPS this Y",
        "EPS next Y",
        "EPS past 5Y",
        "EPS next 5Y",
        "Sales past 5Y",
        "Price",
        "Change",
        "Volume",
    ],
    "financial": [
        "Ticker",
        "Market Cap",
        "Dividend",
        "ROA",
        "ROE",
        "ROI",
        "Curr R",
        "Quick R",
        "LTDebt/Eq",
        "Debt/Eq",
        "Gross M",
        "Oper M",
        "Profit M",
        "Earnings",
        "Price",
        "Change",
        "Volume",
    ],
    "ownership": [
        "Ticker",
        "Market Cap",
        "Outstanding",
        "Float",
        "Insider Own",
        "Insider Trans",
        "Inst Own",
        "Inst Trans",
        "Float Short",
        "Short Ratio",
        "Avg Volume",
        "Price",
        "Change",
        "Volume",
    ],
    "performance": [
        "Ticker",
        "Perf Week",
        "Perf Month",
        "Perf Quart",
        "Perf Half",
        "Perf Year",
        "Perf YTD",
        "Volatility W",
        "Volatility M",
        "Recom",
        "Avg Volume",
        "Rel Volume",
        "Price",
        "Change",
        "Volume",
    ],
    "technical": [
        "Ticker",
        "Beta",
        "ATR",
        "SMA20",
        "SMA50",
        "SMA200",
        "52W High",
        "52W Low",
        "RSI",
        "Price",
        "Change",
        "from Open",
        "Gap",
        "Volume",
    ],
}
