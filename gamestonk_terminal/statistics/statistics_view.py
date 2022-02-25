"""Statistics View"""
__docformat__ = "numpy"

import logging
import os
from itertools import combinations
from typing import Dict, Any

import matplotlib.pyplot as plt
import pandas as pd
from pandas.plotting import register_matplotlib_converters

from gamestonk_terminal import feature_flags as gtff
from gamestonk_terminal.config_plot import PLOT_DPI
from gamestonk_terminal.decorators import log_start_end
from gamestonk_terminal.helper_funcs import (
    export_data,
    plot_autoscale,
)
from gamestonk_terminal.helper_funcs import (
    print_rich_table,
)
from gamestonk_terminal.rich_config import console
from gamestonk_terminal.statistics import statistics_model

logger = logging.getLogger(__name__)

register_matplotlib_converters()


@log_start_end(log=logger)
def show_options(
    datasets: Dict[pd.DataFrame, Any],
    dataset_name: str = None,
    export: str = "",
):
    """Plot custom data

    Parameters
    ----------
    data: pd.DataFrame
        Dataframe of custom data
    dataset: str
        Dataset name
    column: str
        Column for y data
    kind : str
        Kind of plot to pass to pandas plot function
    export: str
        Format to export image
    """
    option_tables = statistics_model.get_options(datasets, dataset_name)

    for dataset, data_values in option_tables.items():
        print_rich_table(
            data_values,
            headers=list(data_values.columns),
            show_index=False,
            title=f"Options for {dataset}",
        )

        export_data(
            export,
            os.path.dirname(os.path.abspath(__file__)),
            f"{dataset}_options",
            data_values.set_index("column"),
        )


@log_start_end(log=logger)
def get_plot(
    data: pd.DataFrame,
    dataset: str,
    column: str,
    export: str = "",
):
    """Plot data from a dataset

    Parameters
    ----------
    data: pd.DataFrame
        Dataframe of custom data
    dataset: str
        Dataset name
    column: str
        Column for y data
    kind : str
        Kind of plot to pass to pandas plot function
    export: str
        Format to export image
    """
    if isinstance(data.index, pd.MultiIndex):
        console.print(
            "The index appears to be a multi-index. "
            "Therefore, it is not possible to plot the data."
        )
    else:
        plt.subplots(figsize=plot_autoscale(), dpi=PLOT_DPI)

        if isinstance(data, pd.Series):
            plt.plot(data)
        elif isinstance(data, pd.DataFrame):
            plt.plot(data[column])

        plt.title(f"{column} data from dataset {dataset}")
        if gtff.USE_ION:
            plt.ion()
        plt.tight_layout()
        plt.show()

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        f"{column}_{dataset}_plot",
    )


@log_start_end(log=logger)
def display_norm(
    data: pd.DataFrame,
    dataset: str,
    column: str,
    export: str = "",
):
    """Determine the normality of a timeseries.

    Parameters
    ----------
    data: pd.DataFrame
        Dataframe of custom data
    dataset: str
        Dataset name
    column: str
        Column for y data
    export: str
        Format to export data.
    """

    results = statistics_model.get_normality(data)

    print_rich_table(
        results,
        headers=list(results.columns),
        show_index=True,
        title=f"Normality Test [Column: {column} | Dataset: {dataset}]",
    )

    plt.subplots(figsize=plot_autoscale(), dpi=PLOT_DPI)

    plt.hist(data, bins=100)

    plt.title(f"Histogram of {column} data from dataset {dataset}")
    if gtff.USE_ION:
        plt.ion()
    plt.tight_layout()
    plt.show()

    if export:
        export_data(
            export,
            os.path.dirname(os.path.abspath(__file__)),
            f"{column}_{dataset}_norm",
            results,
        )
    else:
        console.print("")


@log_start_end(log=logger)
def display_root(
    df: pd.DataFrame,
    dataset_name: str,
    column_name: str,
    fuller_reg: str,
    kpss_reg: str,
    export: str = "",
):
    """Determine the normality of a timeseries.

    Parameters
    ----------
    df : pd.DataFrame
        DataFrame of target variable
    dataset_name: str
        Name of the dataset
    column_name: str
        Name of the column
    fuller_reg : str
        Type of regression of ADF test
    kpss_reg : str
        Type of regression for KPSS test
    export: str
        Format to export data.
    """

    results = statistics_model.get_root(df, fuller_reg, kpss_reg)

    print_rich_table(
        results,
        headers=list(results.columns),
        show_index=True,
        title=f"Unitroot Test [Column: {column_name} | Dataset: {dataset_name}]",
    )

    if export:
        export_data(
            export,
            os.path.dirname(os.path.abspath(__file__)),
            f"{column_name}_{dataset_name}_root",
            results,
        )
    else:
        console.print("")


@log_start_end(log=logger)
def display_granger(
    time_series_y: pd.Series,
    time_series_x: pd.Series,
    lags: int = 3,
    confidence_level: float = 0.05,
    export: str = "",
):
    """Show granger tests

    Parameters
    ----------
    time_series_y : Series
        The series you want to test Granger Causality for.
    time_series_x : Series
        The series that you want to test whether it Granger-causes time_series_y
    lags : int
        The amount of lags for the Granger test. By default, this is set to 3.
    confidence_level: float
        The confidence level you wish to use. By default, this is set to 0.05.
    export : str
        Format to export data
    """

    granger = statistics_model.get_granger_causality(time_series_y, time_series_x, lags)

    for test in granger[lags][0]:
        # As ssr_chi2test and lrtest have one less value in the tuple, we fill
        # this value with a '-' to allow the conversion to a DataFrame
        if len(granger[lags][0][test]) != 4:
            pars = granger[lags][0][test]
            granger[lags][0][test] = (pars[0], pars[1], "-", pars[2])

    granger_df = pd.DataFrame(
        granger[lags][0], index=["F-test", "P-value", "Count", "Lags"]
    ).T

    print_rich_table(
        granger_df,
        headers=list(granger_df.columns),
        show_index=True,
        title=f"Granger Causality Test [Y: {time_series_y.name} | X: {time_series_x.name} | Lags: {lags}]",
    )

    result_ftest = round(granger[lags][0]["params_ftest"][1], 3)

    if result_ftest > confidence_level:
        console.print(
            f"As the p-value of the F-test is {result_ftest}, we can not reject the null hypothesis at "
            f"the {confidence_level} confidence level."
        )
    else:
        console.print(
            f"As the p-value of the F-test is {result_ftest}, we can reject the null hypothesis at "
            f"the {confidence_level} confidence level and find the Series '{time_series_x.name}' "
            f"to Granger-cause the Series '{time_series_y.name}'"
        )

    if export:
        export_data(
            export,
            os.path.dirname(os.path.abspath(__file__)),
            f"{time_series_y.name}_{time_series_x.name}_granger",
            granger_df,
        )
    else:
        console.print("")


@log_start_end(log=logger)
def display_cointegration_test(
    datasets: Dict[pd.Series, Any],
    significant: bool = False,
    plot: bool = False,
    export: str = "",
):
    """Estimates long-run and short-run cointegration relationship for series y and x and apply
    the two-step Engle & Granger test for cointegration.

    Uses a 2-step process to first estimate coefficients for the long-run relationship
        y_t = c + gamma * x_t + z_t

    and then the short-term relationship,
        y_t - y_(t-1) = alpha * z_(t-1) + epsilon_t,

    with z the found residuals of the first equation.

    Then tests co-integration with the Dickey-Fuller phi=1 vs phi < 1 in
        z_t = phi * z_(t-1) + eta_t

    If this implies phi < 1, the z series is stationary is concluded to be
    stationary, and thus the series y and x are concluded to be cointegrated.

    Parameters
    ----------
    datasets: Dict[pd.Series, Any]
        All time series to perform co-integration tests on.
    significant: float
        Show only companies that have p-values lower than this percentage
    plot: bool
        Whether you wish to plot the z-values of all pairs.
    export : str
        Format to export data
    """

    pairs = list(combinations(datasets.keys(), 2))
    result: Dict[str, list] = dict()
    z_values: Dict[str, pd.Series] = dict()

    for x, y in pairs:
        (
            c,
            gamma,
            alpha,
            z,
            adfstat,
            pvalue,
        ) = statistics_model.get_engle_granger_two_step_cointegration_test(
            datasets[x], datasets[y]
        )
        result[f"{x}/{y}"] = [c, gamma, alpha, adfstat, pvalue]
        z_values[f"{x}/{y}"] = z

    df = pd.DataFrame.from_dict(
        result,
        orient="index",
        columns=["Constant", "Gamma", "Alpha", "Dickey-Fuller", "P Value"],
    )

    if significant:
        console.print(
            f"Only showing pairs that are statistically significant ({significant} > p-value)."
        )
        df = df[significant > df["P Value"]]
        console.print("")

    print_rich_table(
        df,
        headers=list(df.columns),
        show_index=True,
        index_name="Pairs",
        title="Cointegration Tests",
    )

    if plot:
        plt.subplots(figsize=plot_autoscale(), dpi=PLOT_DPI)

        for pair, values in z_values.items():
            plt.plot(values, label=pair)

        plt.legend()
        plt.title("Error correction terms")

        plt.tight_layout()

    if export:
        export_data(
            export,
            os.path.dirname(os.path.abspath(__file__)),
            "results_cointegration",
            df,
        )
    else:
        console.print("")
