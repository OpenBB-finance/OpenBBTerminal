# IMPORTATION STANDARD

# IMPORTATION THIRDPARTY
import pandas as pd
import pytest

# IMPORTATION INTERNAL
from gamestonk_terminal.economy import alphavantage_view
from gamestonk_terminal import helper_classes


@pytest.fixture(scope="module")
def vcr_config():
    return {
        "filter_headers": [("User-Agent", None)],
        "filter_query_parameters": [("apikey", "MOCK_API_KEY")],
    }


@pytest.mark.default_cassette("test_realtime_performance_sector")
@pytest.mark.vcr
@pytest.mark.parametrize(
    "raw, tab",
    [
        (True, True),
        (True, False),
        (False, False),
    ],
)
@pytest.mark.record_stdout
def test_realtime_performance_sector(mocker, raw, tab):
    # MOCK GTFF
    mocker.patch.object(
        target=helper_classes.gtff, attribute="USE_TABULATE_DF", new=tab
    )
    mocker.patch.object(target=helper_classes.gtff, attribute="USE_ION", new=True)

    # MOCK ION + SHOW
    mocker.patch(target="gamestonk_terminal.stocks.options.yfinance_view.plt.ion")
    mocker.patch(target="gamestonk_terminal.stocks.options.yfinance_view.plt.show")

    # MOCK EXPORT_DATA
    mocker.patch(target="gamestonk_terminal.economy.alphavantage_view.export_data")

    alphavantage_view.realtime_performance_sector(
        raw=raw,
        export="",
    )


@pytest.mark.default_cassette("test_display_real_gdp")
@pytest.mark.vcr
@pytest.mark.parametrize(
    "raw, tab",
    [
        (True, True),
        (True, False),
    ],
)
@pytest.mark.record_stdout
def test_display_real_gdp(mocker, raw, tab):
    # MOCK GTFF
    mocker.patch.object(
        target=helper_classes.gtff, attribute="USE_TABULATE_DF", new=tab
    )
    mocker.patch.object(target=helper_classes.gtff, attribute="USE_ION", new=True)

    # MOCK ION + SHOW
    mocker.patch(target="gamestonk_terminal.stocks.options.yfinance_view.plt.ion")
    mocker.patch(target="gamestonk_terminal.stocks.options.yfinance_view.plt.show")

    # MOCK EXPORT_DATA
    mocker.patch(target="gamestonk_terminal.economy.alphavantage_view.export_data")

    alphavantage_view.display_real_gdp(
        interval="a",
        start_year=2022,
        raw=raw,
        export="",
    )


@pytest.mark.vcr(record_mode="none")
@pytest.mark.record_stdout
def test_display_real_gdp_no_data(mocker):
    # MOCK EXPORT_DATA
    mocker.patch(
        target="gamestonk_terminal.economy.alphavantage_view.alphavantage_model.get_real_gdp",
        return_value=pd.DataFrame(),
    )

    alphavantage_view.display_real_gdp(
        interval="a",
        start_year=2022,
        raw=False,
        export="",
    )


@pytest.mark.default_cassette("test_display_gdp_capita")
@pytest.mark.vcr
@pytest.mark.parametrize(
    "raw, tab",
    [
        (True, True),
        (True, False),
    ],
)
@pytest.mark.record_stdout
def test_display_gdp_capita(mocker, raw, tab):
    # MOCK GTFF
    mocker.patch.object(
        target=helper_classes.gtff, attribute="USE_TABULATE_DF", new=tab
    )
    mocker.patch.object(target=helper_classes.gtff, attribute="USE_ION", new=True)

    # MOCK ION + SHOW
    mocker.patch(target="gamestonk_terminal.stocks.options.yfinance_view.plt.ion")
    mocker.patch(target="gamestonk_terminal.stocks.options.yfinance_view.plt.show")

    # MOCK EXPORT_DATA
    mocker.patch(target="gamestonk_terminal.economy.alphavantage_view.export_data")

    alphavantage_view.display_gdp_capita(
        start_year=2022,
        raw=raw,
        export="",
    )


@pytest.mark.vcr(record_mode="none")
@pytest.mark.record_stdout
def test_display_gdp_capita_no_data(mocker):
    # MOCK EXPORT_DATA
    mocker.patch(
        target="gamestonk_terminal.economy.alphavantage_view.alphavantage_model.get_gdp_capita",
        return_value=pd.DataFrame(),
    )

    alphavantage_view.display_gdp_capita(
        start_year=2022,
        raw=False,
        export="",
    )


@pytest.mark.default_cassette("test_display_inflation")
@pytest.mark.vcr
@pytest.mark.parametrize(
    "raw, tab",
    [
        (True, True),
        (True, False),
    ],
)
@pytest.mark.record_stdout
def test_display_inflation(mocker, raw, tab):
    # MOCK GTFF
    mocker.patch.object(
        target=helper_classes.gtff, attribute="USE_TABULATE_DF", new=tab
    )
    mocker.patch.object(target=helper_classes.gtff, attribute="USE_ION", new=True)

    # MOCK ION + SHOW
    mocker.patch(target="gamestonk_terminal.stocks.options.yfinance_view.plt.ion")
    mocker.patch(target="gamestonk_terminal.stocks.options.yfinance_view.plt.show")

    # MOCK EXPORT_DATA
    mocker.patch(target="gamestonk_terminal.economy.alphavantage_view.export_data")

    alphavantage_view.display_inflation(
        start_year=2010,
        raw=raw,
        export="",
    )


@pytest.mark.vcr(record_mode="none")
@pytest.mark.record_stdout
def test_display_inflation_capita_no_data(mocker):
    # MOCK EXPORT_DATA
    mocker.patch(
        target="gamestonk_terminal.economy.alphavantage_view.alphavantage_model.get_inflation",
        return_value=pd.DataFrame(),
    )

    alphavantage_view.display_inflation(
        start_year=2010,
        raw=False,
        export="",
    )


@pytest.mark.default_cassette("test_display_cpi")
@pytest.mark.vcr
@pytest.mark.parametrize(
    "raw, tab",
    [
        (True, True),
        (True, False),
    ],
)
@pytest.mark.record_stdout
def test_display_cpi(mocker, raw, tab):
    # MOCK GTFF
    mocker.patch.object(
        target=helper_classes.gtff, attribute="USE_TABULATE_DF", new=tab
    )
    mocker.patch.object(target=helper_classes.gtff, attribute="USE_ION", new=True)

    # MOCK ION + SHOW
    mocker.patch(target="gamestonk_terminal.stocks.options.yfinance_view.plt.ion")
    mocker.patch(target="gamestonk_terminal.stocks.options.yfinance_view.plt.show")

    # MOCK EXPORT_DATA
    mocker.patch(target="gamestonk_terminal.economy.alphavantage_view.export_data")

    alphavantage_view.display_cpi(
        interval="m",
        start_year=2010,
        raw=raw,
        export="",
    )


@pytest.mark.vcr(record_mode="none")
@pytest.mark.record_stdout
def test_display_cpi_capita_no_data(mocker):
    # MOCK EXPORT_DATA
    mocker.patch(
        target="gamestonk_terminal.economy.alphavantage_view.alphavantage_model.get_cpi",
        return_value=pd.DataFrame(),
    )

    alphavantage_view.display_cpi(
        interval="m",
        start_year=2010,
        raw=False,
        export="",
    )


@pytest.mark.default_cassette("test_display_treasury_yield")
@pytest.mark.vcr
@pytest.mark.parametrize(
    "raw, tab",
    [
        (True, True),
        (True, False),
    ],
)
@pytest.mark.record_stdout
def test_display_treasury_yield(mocker, raw, tab):
    # MOCK GTFF
    mocker.patch.object(
        target=helper_classes.gtff, attribute="USE_TABULATE_DF", new=tab
    )
    mocker.patch.object(target=helper_classes.gtff, attribute="USE_ION", new=True)

    # MOCK ION + SHOW
    mocker.patch(target="gamestonk_terminal.stocks.options.yfinance_view.plt.ion")
    mocker.patch(target="gamestonk_terminal.stocks.options.yfinance_view.plt.show")

    # MOCK EXPORT_DATA
    mocker.patch(target="gamestonk_terminal.economy.alphavantage_view.export_data")

    alphavantage_view.display_treasury_yield(
        interval="m",
        maturity="3m",
        start_date="2021-01-01",
        raw=raw,
        export="",
    )


@pytest.mark.vcr(record_mode="none")
@pytest.mark.record_stdout
def test_display_treasury_yield_capita_no_data(mocker):
    # MOCK EXPORT_DATA
    mocker.patch(
        target="gamestonk_terminal.economy.alphavantage_view.alphavantage_model.get_treasury_yield",
        return_value=pd.DataFrame(),
    )

    alphavantage_view.display_treasury_yield(
        interval="m",
        maturity="3m",
        start_date="2021-01-01",
        raw=False,
        export="",
    )


@pytest.mark.default_cassette("test_display_unemployment")
@pytest.mark.vcr
@pytest.mark.parametrize(
    "raw, tab",
    [
        (True, True),
        (True, False),
    ],
)
@pytest.mark.record_stdout
def test_display_unemployment(mocker, raw, tab):
    # MOCK GTFF
    mocker.patch.object(
        target=helper_classes.gtff, attribute="USE_TABULATE_DF", new=tab
    )
    mocker.patch.object(target=helper_classes.gtff, attribute="USE_ION", new=True)

    # MOCK ION + SHOW
    mocker.patch(target="gamestonk_terminal.stocks.options.yfinance_view.plt.ion")
    mocker.patch(target="gamestonk_terminal.stocks.options.yfinance_view.plt.show")

    # MOCK EXPORT_DATA
    mocker.patch(target="gamestonk_terminal.economy.alphavantage_view.export_data")

    alphavantage_view.display_unemployment(
        start_year=2010,
        raw=raw,
        export="",
    )


@pytest.mark.vcr(record_mode="none")
@pytest.mark.record_stdout
def test_display_unemployment_capita_no_data(mocker):
    # MOCK EXPORT_DATA
    mocker.patch(
        target="gamestonk_terminal.economy.alphavantage_view.alphavantage_model.get_unemployment",
        return_value=pd.DataFrame(),
    )

    alphavantage_view.display_unemployment(
        start_year=2010,
        raw=False,
        export="",
    )
