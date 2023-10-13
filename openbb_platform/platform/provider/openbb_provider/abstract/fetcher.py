"""Abstract class for the fetcher."""
# ruff: noqa: S101
# pylint: disable=E1101

import datetime
from typing import Any, Dict, Generic, Optional, TypeVar, get_args, get_origin

from openbb_provider.abstract.data import Data
from openbb_provider.abstract.query_params import QueryParams

Q = TypeVar("Q", bound=QueryParams)
D = TypeVar("D", bound=Data)
R = TypeVar("R")  # Return, usually List[D], but can be just D for example


class classproperty:
    """Class property decorator."""

    def __init__(self, f):
        """Initialize decorator."""
        self.f = f

    def __get__(self, obj, owner):
        """Get the property."""
        return self.f(owner)


class Fetcher(Generic[Q, R]):
    """Abstract class for the fetcher."""

    @staticmethod
    def transform_query(params: Dict[str, Any]) -> Q:
        """Transform the params to the provider-specific query."""
        raise NotImplementedError

    @staticmethod
    def extract_data(query: Q, credentials: Optional[Dict[str, str]]) -> Any:
        """Extract the data from the provider."""
        raise NotImplementedError

    @staticmethod
    def transform_data(data: Any) -> R:
        """Transform the provider-specific data."""
        raise NotImplementedError

    @classmethod
    def fetch_data(
        cls,
        params: Dict[str, Any],
        credentials: Optional[Dict[str, str]] = None,
        **kwargs,
    ) -> R:
        """Fetch data from a provider."""
        query = cls.transform_query(params=params)
        data = cls.extract_data(query=query, credentials=credentials, **kwargs)
        return cls.transform_data(data=data)

    @classproperty
    def query_params_type(self) -> Q:
        """Get the type of query."""
        # pylint: disable=E1101
        return self.__orig_bases__[0].__args__[0]  # type: ignore

    @classproperty
    def return_type(self) -> R:
        """Get the type of return."""
        # pylint: disable=E1101
        return self.__orig_bases__[0].__args__[1]  # type: ignore

    @classproperty
    def data_type(self) -> D:  # type: ignore
        """Get the type data."""
        # pylint: disable=E1101
        return self._get_data_type(self.__orig_bases__[0].__args__[1])  # type: ignore

    @staticmethod
    def _get_data_type(data: Any) -> D:  # type: ignore
        """Get the type of the data."""
        if get_origin(data) == list:
            data = get_args(data)[0]
        return data

    @classmethod
    def test(
        cls,
        test_params: Dict[str, Any],
        credentials: Optional[Dict[str, str]] = None,
        **kwargs,
    ) -> None:
        """Test the fetcher.

        This method will test each stage of the fetcher TET (Transform, Extract, Transform).

        Args
        ----
            test_params: The params to test the fetcher with.
            credentials: The credentials to test the fetcher with.

        Raises
        ------
            AssertionError: If any of the tests fail.
        """
        query = cls.transform_query(params=test_params)
        data = cls.extract_data(query=query, credentials=credentials, **kwargs)
        transformed_data = cls.transform_data(data=data)

        # Query Assertions
        assert query
        assert issubclass(type(query), cls.query_params_type)
        assert all(getattr(query, key) == value for key, value in test_params.items())

        # Data Assertions
        assert data
        is_list = isinstance(data, list)
        if is_list:
            assert all(
                field in data[0]
                for field in cls.data_type.__fields__
                if field in data[0]
            )
            # This makes sure that the data is not transformed yet so that the
            # pipeline is implemented correctly. We can remove this assertion if we
            # want to be less strict.
            assert issubclass(type(data[0]), cls.data_type) is False
        else:
            assert all(
                field in data for field in cls.data_type.__fields__ if field in data
            )
            assert issubclass(type(data), cls.data_type) is False

        assert len(data) > 0

        # Transformed Data Assertions
        assert transformed_data

        is_list = isinstance(transformed_data, list)
        if is_list:
            assert len(transformed_data) > 0  # type: ignore
            assert all(
                field in transformed_data[0].__dict__  # type: ignore
                for field in cls.return_type.__args__[0].__fields__
            )
            assert issubclass(type(transformed_data[0]), cls.data_type)  # type: ignore
            assert issubclass(
                type(transformed_data[0]),  # type: ignore
                cls.return_type.__args__[0],
            )
        else:
            assert all(
                field in transformed_data.__dict__
                for field in cls.return_type.__fields__
            )
            assert issubclass(type(transformed_data), cls.data_type)
            assert issubclass(type(transformed_data), cls.return_type)
