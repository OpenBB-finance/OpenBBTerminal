"""Test news extension."""

import pytest
from extensions.tests.conftest import parametrize
from openbb_core.app.model.obbject import OBBject


@pytest.fixture(scope="session")
def obb(pytestconfig):  # pylint: disable=inconsistent-return-statements
    """Fixture to setup obb."""

    if pytestconfig.getoption("markexpr") != "not integration":
        import openbb  # pylint: disable=import-outside-toplevel

        return openbb.obb


# pylint: disable=redefined-outer-name


@parametrize(
    "params",
    [
        (
            {
                "display": "full",
                "date": "2023-01-01",
                "start_date": "2023-01-01",
                "end_date": "2023-06-06",
                "updated_since": 900000,
                "published_since": 900000,
                "sort": "created",
                "order": "desc",
                "isin": "US0378331005",
                "cusip": "037833100",
                "channels": "General",
                "topics": "car",
                "authors": "Benzinga Insights",
                "content_types": "Car",
                "provider": "benzinga",
                "limit": 20,
            }
        ),
        (
            {
                "provider": "fmp",
                "limit": 20,
                "date": None,
                "start_date": None,
                "end_date": None,
            }
        ),
        (
            {
                "provider": "intrinio",
                "limit": 20,
                "date": None,
                "start_date": None,
                "end_date": None,
            }
        ),
        (
            {
                "provider": "biztoc",
                "filter": "tag",
                "tag": "federalreserve",
                "source": "bloomberg",
                "term": "MSFT",
                "date": None,
                "start_date": None,
                "end_date": None,
            }
        ),
        (
            {
                "provider": "tiingo",
                "limit": 30,
                "source": "bloomberg.com",
                "date": None,
                "start_date": None,
                "end_date": None,
            }
        ),
    ],
)
@pytest.mark.integration
def test_news_world(params, obb):
    result = obb.news.world(**params)
    assert result
    assert isinstance(result, OBBject)


@parametrize(
    "params",
    [
        (
            {
                "display": "full",
                "date": None,
                "start_date": None,
                "end_date": None,
                "updated_since": None,
                "published_since": None,
                "sort": "created",
                "order": "desc",
                "isin": None,
                "cusip": None,
                "channels": "General",
                "topics": "earnings",
                "authors": None,
                "content_types": "headline",
                "provider": "benzinga",
                "symbols": "AAPL,MSFT",
                "limit": 20,
            }
        ),
        (
            {
                "published_utc": "2024-01-10",
                "order": "desc",
                "provider": "polygon",
                "symbols": "AAPL",
                "limit": 20,
                "date": None,
                "start_date": None,
                "end_date": None,
            }
        ),
        (
            {
                "provider": "fmp",
                "symbols": "AAPL",
                "limit": 20,
                "page": 1,
                "date": None,
                "start_date": None,
                "end_date": None,
            }
        ),
        (
            {
                "provider": "yfinance",
                "symbols": "AAPL",
                "limit": 20,
                "date": None,
                "start_date": None,
                "end_date": None,
            }
        ),
        (
            {
                "provider": "intrinio",
                "symbols": "AAPL",
                "limit": 20,
                "date": None,
                "start_date": None,
                "end_date": None,
            }
        ),
        (
            {
                "provider": "tiingo",
                "symbols": "AAPL,MSFT",
                "limit": 20,
                "source": "bloomberg.com",
                "date": None,
                "start_date": None,
                "end_date": None,
            }
        ),
    ],
)
@pytest.mark.integration
def test_news_company(params, obb):
    params = {p: v for p, v in params.items() if v}

    result = obb.news.company(**params)
    assert result
    assert isinstance(result, OBBject)
    assert len(result.results) > 0


@pytest.mark.skip("openbb-ultima is not installed on the CI.")
@parametrize(
    "params",
    [
        (
            {
                "provider": "ultima",
                "sectors": "Real Estate",
            }
        ),
    ],
)
@pytest.mark.integration
def test_news_sector(params, obb):
    params = {p: v for p, v in params.items() if v}

    result = obb.news.sector(**params)
    assert result
    assert isinstance(result, OBBject)
    assert len(result.results) > 0
