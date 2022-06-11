# pylint: disable=too-many-arguments
"""NBEATS Model"""
__docformat__ = "numpy"

import logging
from typing import Any, Tuple, Union, List


# import torch
# import torch.nn as nn
# import torch.optim as optim
import numpy as np
import pandas as pd

from darts import TimeSeries
from darts.models import NBEATSModel
from darts.dataprocessing.transformers import MissingValuesFiller, Scaler
from darts.metrics import mape
from pytorch_lightning.callbacks.early_stopping import EarlyStopping
from openbb_terminal.decorators import log_start_end

from openbb_terminal.rich_config import console

logger = logging.getLogger(__name__)


@log_start_end(log=logger)
def get_NBEATS_data(
    data: Union[pd.Series, pd.DataFrame],
    n_predict: int = 5,
    target_col: str = "close",
    past_covariates: str = None,
    train_split: float = 0.85,
    forecast_horizon: int = 3,
    input_chunk_length: int = 30,
    output_chunk_length: int = 7,
    num_stacks: int = 10,
    num_blocks: int = 3,
    num_layers: int = 4,
    layer_widths: int = 512,
    batch_size: int = 800,
    n_epochs: int = 100,
    learning_rate: float = 1e-3,
    model_save_name: str = "nbeats_model",
    force_reset: bool = True,
    save_checkpoints: bool = True,
) -> Tuple[List[TimeSeries], List[TimeSeries], List[TimeSeries], float, Any]:

    """Performs NBEATS forecasting

    Parameters
    ----------
    data : Union[pd.Series, np.ndarray]
        Input data.
    n_predict: int
        Number of days to forecast
    start_window: float
        Size of sliding window from start of timeseries and onwards
    forecast_horizon: int
        Number of days to forecast when backtesting and retraining historical

    Returns
    -------
    List[TimeSeries]
        Adjusted Data series
    List[TimeSeries]
        Historical forecast by best NBEATS model
    List[TimeSeries]
        list of Predictions
    float
        Mean average precision error
    Any
        NBEATS Model
    """
    filler = MissingValuesFiller()
    scaler = Scaler()

    # TODO add proper doc string
    # TODO Check if torch GPU AVAILABLE
    # TODO add in covariates
    # todo add in all possible parameters for training
    # Export model / save
    # load trained model

    # Target Timeseries
    scaled_ticker_series = scaler.fit_transform(
        filler.transform(
            TimeSeries.from_dataframe(
                data,
                time_col="date",
                value_cols=[target_col],
                freq="B",
                fill_missing_dates=True,
            )
        )
    ).astype(np.float32)

    scaled_train, scaled_val = scaled_ticker_series.split_before(float(train_split))

    # --------------------------------------------------
    # Covariates
    # split covariates by name filering out commas
    covariates_scalers = []  # to hold all temp scalers in case we need them
    target_covariates_names = past_covariates.split(",")

    # create first covariate to then stack onto
    past_covariate_scaler = Scaler()
    console.print(f"[green]Covariate #0: {target_covariates_names[0]}[/green]")
    scaled_past_covariate_whole = past_covariate_scaler.fit_transform(
        filler.transform(
            TimeSeries.from_dataframe(
                data,
                time_col="date",
                value_cols=target_covariates_names[0],
                freq="B",
                fill_missing_dates=True,
            )
        )
    ).astype(np.float32)

    if len(target_covariates_names) > 1:
        for i, column in enumerate(target_covariates_names[1:]):
            console.print(f"[green]Covariate #{i+1}: {column}[/green]")
            _temp_scaler = Scaler()
            covariates_scalers.append(_temp_scaler)
            _temp_new_scaled_covariate = _temp_scaler.fit_transform(
                filler.transform(
                    TimeSeries.from_dataframe(
                        data,
                        time_col="date",
                        value_cols=[column],
                        freq="B",
                        fill_missing_dates=True,
                    )
                )
            ).astype(np.float32)

            # continually stack covariates based on column names
            scaled_past_covariate_whole = scaled_past_covariate_whole.stack(
                _temp_new_scaled_covariate
            )

    # Split the full scale covariate to train and val
    (
        scaled_past_covariate_train,
        scaled_past_covariate_val,
    ) = scaled_past_covariate_whole.split_before(float(train_split))

    # --------------------------------------------------
    # Early Stopping
    my_stopper = EarlyStopping(
        monitor="val_loss",
        patience=10,
        min_delta=0,
        mode="min",
    )
    pl_trainer_kwargs = {"callbacks": [my_stopper], "accelerator": "cpu"}

    nbeats_model = NBEATSModel(
        input_chunk_length=input_chunk_length,
        output_chunk_length=output_chunk_length,
        generic_architecture=True,
        num_stacks=num_stacks,
        num_blocks=num_blocks,
        num_layers=num_layers,
        layer_widths=layer_widths,
        n_epochs=n_epochs,
        nr_epochs_val_period=1,
        batch_size=batch_size,
        optimizer_kwargs={"lr": learning_rate},
        model_name=model_save_name,
        force_reset=force_reset,
        save_checkpoints=save_checkpoints,
        random_state=42,
        pl_trainer_kwargs=pl_trainer_kwargs,
    )

    # fit model on train series for historical forecasting
    nbeats_model.fit(
        series=scaled_train,
        val_series=scaled_val,
        past_covariates=scaled_past_covariate_train,
        val_past_covariates=scaled_past_covariate_val,
    )
    best_model = NBEATSModel.load_from_checkpoint(model_name="nbeats_model", best=True)

    # Showing historical backtesting without retraining model (too slow)
    scaled_historical_fcast = best_model.historical_forecasts(
        scaled_ticker_series,
        past_covariates=scaled_past_covariate_whole,
        start=float(train_split),
        forecast_horizon=int(forecast_horizon),
        retrain=False,
        verbose=True,
    )

    # Predict N timesteps in the future
    scaled_prediction = best_model.predict(
        series=scaled_ticker_series,
        past_covariates=scaled_past_covariate_whole,
        n=int(n_predict),
    )

    precision = mape(
        actual_series=scaled_ticker_series, pred_series=scaled_historical_fcast
    )  # mape = mean average precision error
    console.print(f"NBEATS model obtains MAPE: {precision:.2f}% \n")

    # scale back
    ticker_series = scaler.inverse_transform(scaled_ticker_series)
    historical_fcast = scaler.inverse_transform(scaled_historical_fcast)
    prediction = scaler.inverse_transform(scaled_prediction)

    return (
        ticker_series,
        historical_fcast,
        prediction,
        precision,
        best_model,
    )
