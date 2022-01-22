"""Substack View"""
__docformat__ = "numpy"


import os
from gamestonk_terminal.cryptocurrency.defi import substack_model
from gamestonk_terminal.helper_funcs import export_data, rich_table_from_df
from gamestonk_terminal.rich_config import console


def display_newsletters(top: int = 10, export: str = "") -> None:
    """Display DeFi related substack newsletters.
    [Source: substack.com]

    Parameters
    ----------
    top: int
        Number of records to display
    export : str
        Export dataframe data to csv,json,xlsx file
    """

    df = substack_model.get_newsletters()
    df_data = df.copy()

    rich_table_from_df(
        df.head(top),
        headers=list(df.columns),
        show_index=False,
        title="Substack Newsletters",
    )
    console.print("")

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        "newsletter",
        df_data,
    )
