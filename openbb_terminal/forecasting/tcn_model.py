# pylint: disable=too-many-arguments
"""TCN Model"""
__docformat__ = "numpy"

import logging
from typing import Any, Tuple, Union, List, Optional


# import torch
# import torch.nn as nn
# import torch.optim as optim
import pandas as pd

from darts import TimeSeries
from darts.models import TCNModel
from openbb_terminal.decorators import log_start_end
from openbb_terminal.forecasting import helpers

logger = logging.getLogger(__name__)


@log_start_end(log=logger)
def get_tcn_data(
    data: Union[pd.Series, pd.DataFrame],
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
) -> Tuple[List[TimeSeries], List[TimeSeries], List[TimeSeries], Optional[float], Any]:
    """Perform TCN forecasting

    Args:
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
            Whether or not to automatically save the untrained model and checkpoints from training.
            Defaults to True.

    Returns:
        List[TimeSeries]
            Adjusted Data series
        List[TimeSeries]
            Historical forecast by best RNN model
        List[TimeSeries]
            list of Predictions
        Optional[float]
            Mean average precision error
        Any
            Best TCN Model
    """

    # TODO Check if torch GPU AVAILABLE

    use_scalers = True
    probabilistic = False

    filler, scaler, ticker_series = helpers.get_series(
        data, target_col, is_scaler=use_scalers
    )
    train, val = ticker_series.split_before(train_split)
    valid = helpers.check_data_length(
        train, val, input_chunk_length, output_chunk_length
    )
    if not valid:
        return [], [], [], None, None

    (
        past_covariate_whole,
        past_covariate_train,
        past_covariate_val,
    ) = helpers.past_covs(past_covariates, filler, data, train_split, use_scalers)

    tcn_model = TCNModel(
        input_chunk_length=input_chunk_length,
        output_chunk_length=output_chunk_length,
        dropout=dropout,
        dilation_base=dilation_base,
        weight_norm=weight_norm,
        num_filters=num_filters,
        n_epochs=n_epochs,
        nr_epochs_val_period=1,
        batch_size=batch_size,
        optimizer_kwargs={"lr": learning_rate},
        model_name=model_save_name,
        force_reset=force_reset,
        save_checkpoints=save_checkpoints,
        random_state=42,
        pl_trainer_kwargs=helpers.get_pl_kwargs(
            patience=5, monitor="val_loss", accelerator="cpu"
        ),
    )

    # fit model on train series for historical forecasting
    helpers.fit_model(
        tcn_model,
        train,
        val,
        past_covariate_train,
        past_covariate_val,
    )
    best_model = TCNModel.load_from_checkpoint(model_name=model_save_name, best=True)

    # Showing historical backtesting without retraining model (too slow)
    return helpers.get_prediction(
        "TCN",
        probabilistic,
        use_scalers,
        scaler,
        past_covariates,
        best_model,
        ticker_series,
        past_covariate_whole,
        train_split,
        forecast_horizon,
        n_predict,
    )
