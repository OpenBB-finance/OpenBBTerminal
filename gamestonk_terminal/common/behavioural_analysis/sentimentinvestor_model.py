"""SentimentInvestor Model"""
__docformat__ = "numpy"

import requests
import pandas as pd

from gamestonk_terminal import config_terminal as cfg


def get_historical(ticker: str, start: str, end: str, number: int) -> pd.DataFrame:
    """Get hour-level sentiment data for the chosen ticker

    Source: [Sentiment Investor]

    Parameters
    ----------
    ticker: str
        Ticker to view sentiment data
    start: str
        Initial date like string or unix timestamp (e.g. 12-21-2021)
    end: str
        End date like string or unix timestamp (e.g. 12-21-2021)
    number : int
        Number of results returned by API call
        Maximum 250 per api call

    Returns
    -------
    pd.DataFrame
        Dataframe of historical sentiment
    """
    api_url = "https://api.sentimentinvestor.com/v1/historical"

    params = {
        "token": cfg.API_SENTIMENTINVESTOR_TOKEN,
        "symbol": ticker,
        "start": start,
        "end": end,
        "limit": number,
    }

    response = requests.get(api_url, params=params)

    if response.status_code == 200:
        df = pd.DataFrame(response.json()["results"])
        df = df.set_index("timestamp_date")
        df.index = pd.to_datetime(df.index)

        return df

    return pd.DataFrame()
