"""CoinPaprika view"""
__docformat__ = "numpy"

import os
from gamestonk_terminal.helper_funcs import export_data, rich_table_from_df
import gamestonk_terminal.cryptocurrency.discovery.coinpaprika_model as paprika
from gamestonk_terminal.rich_config import console


def display_search_results(
    query: str, category: str, top: int, sortby: str, descend: bool, export: str
) -> None:
    """Search over CoinPaprika. [Source: CoinPaprika]

    Parameters
    ----------
    query: str
        Search query
    category: str
        Categories to search: currencies|exchanges|icos|people|tags|all. Default: all
    top: int
        Number of records to display
    sortby: str
        Key by which to sort data
    descend: bool
        Flag to sort data descending
    export : str
        Export dataframe data to csv,json,xlsx file
    """

    if category.lower() == "all":
        category = "currencies,exchanges,icos,people,tags"

    df = paprika.get_search_results(query=query, category=category)

    if df.empty:
        console.print(
            f"No results for search query '{query}' in category '{category}'\n"
        )
        return

    df = df.sort_values(by=sortby, ascending=descend)

    rich_table_from_df(
        df.head(top),
        headers=list(df.columns),
        show_index=False,
        title="CoinPaprika Results",
    )
    console.print("")

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        "search",
        df,
    )
