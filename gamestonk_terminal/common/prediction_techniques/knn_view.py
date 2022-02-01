""" KNN Prediction View"""
__docformat__ = "numpy"

import logging
from typing import Union

import pandas as pd
from pandas.plotting import register_matplotlib_converters

from gamestonk_terminal.common.prediction_techniques import knn_model
from gamestonk_terminal.common.prediction_techniques.pred_helper import (
    plot_data_predictions,
    print_pretty_prediction,
)
from gamestonk_terminal.decorators import log_start_end
from gamestonk_terminal.rich_config import console

logger = logging.getLogger(__name__)

register_matplotlib_converters()

# pylint:disable=too-many-arguments


@log_start_end(log=logger)
def display_k_nearest_neighbors(
    ticker: str,
    data: Union[pd.DataFrame, pd.Series],
    n_neighbors: int,
    n_input_days: int,
    n_predict_days: int,
    test_size: float,
    end_date: str = "",
    no_shuffle: bool = True,
    time_res: str = "",
):
    """Display predictions using knn

    Parameters
    ----------
    ticker : str
        Stock data
    data : Union[pd.DataFrame, pd.Series]
        Data to use for ML
    n_neighbors : int
        Number of neighborns for knn
    n_input_days : int
        Length of input sequences
    n_predict_days : int
        Number of days to predict
    test_size : float
        Fraction of data for testing
    end_date : str, optional
        End date for backtesting, by default ""
    no_shuffle : bool, optional
        Flag to shuffle data randomly, by default True
    time_res : str
        Resolution for data, allowing for predicting outside of standard market days
    """
    (
        forecast_data_df,
        preds,
        y_valid,
        y_dates_valid,
        scaler,
    ) = knn_model.get_knn_model_data(
        data, n_input_days, n_predict_days, n_neighbors, test_size, end_date, no_shuffle
    )

    if forecast_data_df.empty:
        console.print("Issue performing data prep and prediction")
        return

    if time_res:
        forecast_data_df.index = pd.date_range(
            data.index[-1], periods=n_predict_days + 1, freq=time_res
        )[1:]
    print_pretty_prediction(forecast_data_df[0], data.values[-1])
    plot_data_predictions(
        data,
        preds,
        y_valid,
        y_dates_valid,
        scaler,
        f"KNN Model with {n_neighbors} Neighbors on {ticker}",
        forecast_data_df,
        1,
        time_res,
    )
    console.print("")
