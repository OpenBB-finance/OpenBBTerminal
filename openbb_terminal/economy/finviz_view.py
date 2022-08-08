""" Finviz View """
__docformat__ = "numpy"

import logging
import os

import pandas as pd
from PIL import Image

from openbb_terminal.decorators import log_start_end
from openbb_terminal.economy import finviz_model
from openbb_terminal.helper_funcs import export_data, print_rich_table
from openbb_terminal.rich_config import console

logger = logging.getLogger(__name__)


@log_start_end(log=logger)
def display_performance_map(period: str = "1d", filter: str = "sp500"):
    """Opens Finviz map website in a browser. [Source: Finviz]

    Parameters
    ----------
    period : str
        Performance period. Available periods are 1d, 1w, 1m, 3m, 6m, 1y.
    scope : str
        Map filter. Available map filters are sp500, world, full, etf.
    """
    finviz_model.get_performance_map(period, filter)


@log_start_end(log=logger)
def display_valuation(
    group: str = "sector",
    sort_by: str = "Name",
    ascending: bool = True,
    export: str = "",
):
    """Display group (sectors, industry or country) valuation data. [Source: Finviz]

    Parameters
    ----------
    group : str
        Group by category. Available groups can be accessed through get_groups().
    sort_by : str
        Column to sort by
    ascending : bool
        Flag to sort in ascending order
    export : str
        Export data to csv,json,xlsx or png,jpg,pdf,svg file
    """
    df_group = finviz_model.get_valuation_data(group, sort_by, ascending)

    if df_group.empty:
        return

    print_rich_table(
        df_group,
        show_index=False,
        headers=list(df_group.columns),
        title="Group Valuation Data",
    )

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        "valuation",
        df_group,
    )


@log_start_end(log=logger)
def display_performance(
    group: str = "sector",
    sort_by: str = "Name",
    ascending: bool = True,
    export: str = "",
):
    """View group (sectors, industry or country) performance data. [Source: Finviz]

    Parameters
    ----------
    group : str
        Group by category. Available groups can be accessed through get_groups().
    sort_by : str
        Column to sort by
    ascending : bool
        Flag to sort in ascending order
    export : str
        Export data to csv,json,xlsx or png,jpg,pdf,svg file
    """
    df_group = finviz_model.get_performance_data(group, sort_by, ascending)

    if df_group.empty:
        return

    print_rich_table(
        df_group,
        show_index=False,
        headers=df_group.columns,
        title="Group Performance Data",
    )

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        "performance",
        df_group,
    )


@log_start_end(log=logger)
def display_spectrum(s_group: str, export: str = ""):
    """Display finviz spectrum in system viewer [Source: Finviz]

    Parameters
    ----------
    s_group: str
        group between sectors, industry or country
    export: str
        Format to export data
    """
    finviz_model.get_spectrum_data(s_group)
    console.print("")

    img = Image.open(s_group + ".jpg")

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        "spectrum",
    )

    img.show()


@log_start_end(log=logger)
def display_future(
    future_type: str = "Indices",
    sort_col: str = "ticker",
    ascending: bool = False,
    export: str = "",
):
    """Display table of a particular future type. [Source: Finviz]

    Parameters
    ----------
    future_type : str
        From the following: Indices, Energy, Metals, Meats, Grains, Softs, Bonds, Currencies
    sort_col : str
        Column to sort by
    ascending : bool
        Flag to sort in ascending order
    export : str
        Export data to csv,json,xlsx or png,jpg,pdf,svg file
    """
    d_futures = finviz_model.get_futures()

    df = pd.DataFrame(d_futures[future_type])
    df = df.set_index("label")
    df = df.sort_values(by=sort_col, ascending=ascending)
    print_rich_table(
        df[["prevClose", "last", "change"]].fillna(""),
        show_index=True,
        headers=["prevClose", "last", "change (%)"],
        title="Future Table [Source: FinViz]",
    )

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        future_type.lower(),
        df,
    )
