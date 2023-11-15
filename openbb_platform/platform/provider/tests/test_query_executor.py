"""Test the Query Executor."""
# pylint: disable=W0621

from unittest.mock import MagicMock, patch

import pytest
from openbb_provider.abstract.fetcher import Fetcher
from openbb_provider.abstract.provider import Provider
from openbb_provider.query_executor import QueryExecutor
from openbb_provider.utils.errors import ProviderError
from pydantic import SecretStr


@pytest.fixture
def mock_query_executor():
    """Mock the query executor."""
    registry = MagicMock()
    registry.providers = {
        "test_provider": Provider(
            name="Test",
            description="Test provider",
            fetcher_dict={"test_fetcher": Fetcher},
        ),
    }
    executor = QueryExecutor(registry=registry)
    return executor


def test_get_provider_success(mock_query_executor):
    """Test if the method can retrieve a provider successfully."""
    provider = mock_query_executor.get_provider("test_provider")
    assert provider.name == "Test"


def test_get_provider_failure(mock_query_executor):
    """Test if the method fails properly when the provider does not exist."""
    with pytest.raises(ProviderError, match="Provider 'nonexistent' not found"):
        mock_query_executor.get_provider("nonexistent")


def test_get_fetcher_success(mock_query_executor):
    """Test if the method can retrieve a fetcher successfully."""
    provider = mock_query_executor.get_provider("test_provider")
    fetcher = mock_query_executor.get_fetcher(provider, "test_fetcher")
    assert issubclass(fetcher, Fetcher)


def test_get_fetcher_failure(mock_query_executor):
    """Test if the method fails properly when the fetcher does not exist."""
    provider = mock_query_executor.get_provider("test_provider")
    with pytest.raises(ProviderError, match="Fetcher not found"):
        mock_query_executor.get_fetcher(provider, "nonexistent_fetcher")


def test_filter_credentials_success(mock_query_executor):
    """Test if credentials are properly filtered."""
    provider = mock_query_executor.get_provider("test_provider")
    provider.credentials = ["api_key"]
    credentials = {"api_key": SecretStr("12345")}

    filtered_credentials = mock_query_executor.filter_credentials(provider, credentials)

    assert filtered_credentials == {"api_key": "12345"}


def test_filter_credentials_missing(mock_query_executor):
    """Test if the proper error is raised when a credential is missing."""
    provider = mock_query_executor.get_provider("test_provider")
    provider.credentials = ["api_key"]

    with pytest.raises(ProviderError, match="Missing credential"):
        mock_query_executor.filter_credentials(provider, {})


def test_execute_success(mock_query_executor):
    """Test if the method can execute a query successfully."""
    mock_result = {"data": "test_data"}

    params = {"param1": "value1"}
    credentials = {"api_key": SecretStr("12345")}

    with patch.object(Fetcher, "fetch_data", return_value=mock_result) as mock_fetch:
        result = mock_query_executor.execute(
            "test_provider", "test_fetcher", params, credentials
        )

        assert result == mock_result
        mock_fetch.assert_called_once_with(params, {}, **{})
