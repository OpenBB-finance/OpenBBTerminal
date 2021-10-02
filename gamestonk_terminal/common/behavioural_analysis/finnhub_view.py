"""Finnhub View"""
__docformat__ = "numpy"

import os

import pandas as pd

from gamestonk_terminal.helper_funcs import export_data
from gamestonk_terminal.common.behavioural_analysis import finnhub_model


def display_sentiment_stats(ticker: str, export: str = ""):
    """
    Sentiment stats which displays buzz, news score, articles last week, articles weekly average,
    bullish vs bearish percentages, sector average bullish percentage, and sector average news score

    Parameters
    ----------
    ticker : str
        Ticker to get sentiment stats
    export : str
        Format to export data
    """
    d_stats = finnhub_model.get_sentiment_stats(ticker)

    if d_stats:
        print(
            f"""
Buzz: {round(100*d_stats['buzz']['buzz'],2)} %
News Score: {round(100*d_stats['companyNewsScore'],2)} %

Articles Last Week: {d_stats['buzz']['articlesInLastWeek']}
Articles Weekly Average: {d_stats['buzz']['weeklyAverage']}

Bullish: {round(100*d_stats['sentiment']['bullishPercent'],2)} %
Bearish: {round(100*d_stats['sentiment']['bearishPercent'],2)} %

Sector Average Bullish: {round(100*d_stats['sectorAverageBullishPercent'],2)}
Sector Average News Score: {round(100*d_stats['sectorAverageNewsScore'],2)} %"""
        )
        export_data(
            export,
            os.path.dirname(os.path.abspath(__file__)),
            "stats",
            pd.DataFrame(d_stats),
        )

    else:
        print("No sentiment stats found.")
    print("")
