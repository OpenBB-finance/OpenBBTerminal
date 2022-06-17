import os
import pytest
import pandas as pd


def create_path(*path: str) -> str:
    base_path = os.path.dirname(os.path.abspath(__file__))
    in_between = os.path.dirname(base_path)
    default_path = os.path.join(in_between, *path)
    return default_path


@pytest.fixture
def tsla_csv():
    path = create_path("forecasting", "data", "TSLA.csv")
    df = pd.read_csv(path)
    df.columns = [x.lower() for x in df.columns]
    df["date"] = df["date"].apply(lambda x: pd.to_datetime(x))
    return df


def test_model(model, data, **kwargs):
    try:
        _, _, predict, MAPE, _ = model(data, **kwargs)
    except ValueError:
        _, _, predict, MAPE, _, _ = model(data, **kwargs)
    try:
        predict_list = predict.pd_dataframe()["close"].tolist()
    except (AssertionError, KeyError):
        predict_list = predict.quantile_df()
        predict_list = predict_list[predict_list.columns[0]].tolist()
    return predict_list, MAPE
