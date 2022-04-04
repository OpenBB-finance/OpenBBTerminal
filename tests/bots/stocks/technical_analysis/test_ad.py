import pytest

try:
    from bots.stocks.technical_analysis.ad import ad_command
except ImportError:
    pytest.skip(allow_module_level=True)


@pytest.fixture(scope="module")
def vcr_config():
    return {
        "filter_headers": [("User-Agent", None)],
        "filter_query_parameters": [
            ("period1", "MOCK_PERIOD_1"),
            ("period2", "MOCK_PERIOD_2"),
            ("date", "MOCK_DATE"),
        ],
    }


@pytest.mark.vcr
@pytest.mark.bots
@pytest.mark.parametrize(
    "start, end, extended, heikin, news",
    [
        ("", "", False, False, False),
        ("2022-01-01", "2022-04-01", True, True, True),
    ],
)
def test_ad(recorder, start, end, extended, heikin, news):
    value = ad_command(
        "TSLA",
        start=start,
        end=end,
        extended_hours=extended,
        heikin_candles=heikin,
        news=news,
    )
    value["imagefile"] = str(type(value["imagefile"]))

    recorder.capture(value)


@pytest.mark.vcr
@pytest.mark.bots
@pytest.mark.parametrize("ticker", ["", "ZZZZ"])
def test_ad_invalid(ticker):
    with pytest.raises(Exception):
        ad_command(ticker)
