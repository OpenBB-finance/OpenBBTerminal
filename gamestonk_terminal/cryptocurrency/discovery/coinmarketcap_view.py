"""CoinMarketCap view"""
__docformat__ = "numpy"

import os
from gamestonk_terminal.cryptocurrency.discovery import coinmarketcap_model
from gamestonk_terminal.helper_funcs import export_data, rich_table_from_df
from gamestonk_terminal.rich_config import console

sort_map = {
    "Symbol": "Symbol",
    "CMC_Rank": "CMC_Rank",
    "LastPrice": "Last Price",
    "DayPctChange": "1 Day Pct Change",
    "MarketCap": "Market Cap ($B)",
}


def display_cmc_top_coins(top: int, sortby: str, descend: bool, export: str) -> None:
    """Shows top n coins. [Source: CoinMarketCap]

    Parameters
    ----------
    top: int
        Number of records to display
    sortby: str
        Key by which to sort data
    descend: bool
        Flag to sort data descending
    export : str
        Export dataframe data to csv,json,xlsx file

    """

    df = coinmarketcap_model.get_cmc_top_n()

    if df.empty:
        console.print("No Data Found\n")
        return

    df = df.sort_values(by=sort_map[sortby], ascending=descend)

    rich_table_from_df(
        df.iloc[:top, :], headers=list(df.columns), show_index=False, title="Top Coins"
    )
    console.print("")

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        "cmctop",
        df,
    )
