"""TCN  View"""
__docformat__ = "numpy"

import logging
from typing import Union

import pandas as pd

from openbb_terminal.forecasting import TCN_model
from openbb_terminal.decorators import log_start_end
from openbb_terminal.forecasting import helpers

logger = logging.getLogger(__name__)
# pylint: disable=too-many-arguments


@log_start_end(log=logger)
def display_tcn_forecast(
    data: Union[pd.DataFrame, pd.Series],
    ticker_name: str,
    n_predict: int = 5,
    target_col: str = "close",
    past_covariates: str = None,
    train_split: float = 0.85,
    forecast_horizon: int = 5,
    input_chunk_length: int = 14,
    output_chunk_length: int = 5,
    dropout: float = 0.1,
    num_filters: int = 6,
    weight_norm: bool = True,
    dilation_base: int = 2,
    n_epochs: int = 100,
    learning_rate: float = 1e-3,
    batch_size: int = 800,
    model_save_name: str = "tcn_model",
    force_reset: bool = True,
    save_checkpoints: bool = True,
    export: str = "",
):
    """Display TCN forecast

    Parameters
    ----------
        data (Union[pd.Series, pd.DataFrame]):
            Input Data
        n_predict (int, optional):
            Days to predict. Defaults to 5.
        target_col (str, optional):
            Target column to forecast. Defaults to "close".
        train_split (float, optional):
            Train/val split. Defaults to 0.85.
        past_covariates (str, optional):
            Multiple secondary columns to factor in when forecasting. Defaults to None.
        forecast_horizon (int, optional):
            Forecast horizon when performing historical forecasting. Defaults to 5.
        input_chunk_length (int, optional):
            Number of past time steps that are fed to the forecasting module at prediction time. Defaults to 14.
        output_chunk_length (int, optional):
            The length of the forecast of the model. Defaults to 5.
        dropout (float, optional):
            Fraction of neurons afected by Dropout. Defaults to 0.1.
        num_filters (int, optional):
            The number of filters in a convolutional layer of the TCN. Defaults to 6.
        weight_norm (bool, optional):
            Boolean value indicating whether to use weight normalization. Defaults to True.
        dilation_base (int, optional):
            The base of the exponent that will determine the dilation on every level. Defaults to 2.
        batch_size (int, optional):
            Number of time series (input and output sequences) used in each training pass. Defaults to 32.
        n_epochs (int, optional):
            Number of epochs over which to train the model. Defaults to 100.
        learning_rate (float, optional):
            Defaults to 1e-3.
        model_save_name (str, optional):
            Name for model. Defaults to "brnn_model".
        force_reset (bool, optional):
            If set to True, any previously-existing model with the same name will be reset
            (all checkpoints will be discarded). Defaults to True.
        save_checkpoints (bool, optional):
            Whether or not to automatically save the untrained model and checkpoints from training. Defaults to True.
        export: str
            Format to export data
        external_axes : Optional[List[plt.Axes]], optional
            External axes (2 axis is expected in the list), by default None
    """

    # reformat the date column to remove any hour/min/sec
    data["date"] = data["date"].apply(helpers.dt_format)

    (
        ticker_series,
        historical_fcast,
        predicted_values,
        precision,
        _model,
    ) = TCN_model.get_tcn_data(
        data=data,
        n_predict=n_predict,
        target_col=target_col,
        past_covariates=past_covariates,
        train_split=train_split,
        forecast_horizon=forecast_horizon,
        input_chunk_length=input_chunk_length,
        output_chunk_length=output_chunk_length,
        dropout=dropout,
        # kernel_size=kernel_size,
        num_filters=num_filters,
        weight_norm=weight_norm,
        dilation_base=dilation_base,
        batch_size=batch_size,
        n_epochs=n_epochs,
        learning_rate=learning_rate,
        model_save_name=model_save_name,
        force_reset=force_reset,
        save_checkpoints=save_checkpoints,
    )
    helpers.plot_forecast(
        "TCN",
        target_col,
        historical_fcast,
        predicted_values,
        ticker_series,
        ticker_name,
        data,
        n_predict,
        forecast_horizon,
        past_covariates,
        precision,
        export,
    )
