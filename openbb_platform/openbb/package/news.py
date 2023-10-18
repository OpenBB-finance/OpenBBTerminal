### THIS FILE IS AUTO-GENERATED. DO NOT EDIT. ###

from openbb_core.app.static.container import Container
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.model.custom_parameter import OpenBBCustomParameter
import openbb_provider
import pandas
import datetime
import pydantic
from pydantic import BaseModel
from inspect import Parameter
import typing
from typing import List, Dict, Union, Optional, Literal
from annotated_types import Ge, Le, Gt, Lt
<<<<<<< Updated upstream
from typing_extensions import Annotated
=======
import typing_extensions
>>>>>>> Stashed changes
from openbb_core.app.utils import df_to_basemodel
from openbb_core.app.static.decorators import validate

from openbb_core.app.static.filters import filter_inputs

from openbb_provider.abstract.data import Data
import openbb_core.app.model.command_context
import openbb_core.app.model.obbject
import types


class ROUTER_news(Container):
    """/news
    globalnews
    """

    def __repr__(self) -> str:
        return self.__doc__ or ""

    @validate
    def globalnews(
        self,
        limit: typing_extensions.Annotated[
            int, OpenBBCustomParameter(description="Number of articles to return.")
        ] = 20,
<<<<<<< Updated upstream
        provider: Optional[Literal["benzinga", "fmp", "intrinio"]] = None,
=======
        provider: Union[Literal["benzinga", "fmp", "intrinio"], None] = None,
>>>>>>> Stashed changes
        **kwargs
    ) -> OBBject[List[Data]]:
        """Global News. Global news data.

        Parameters
        ----------
        limit : int
            Number of articles to return.
        provider : Union[Literal['benzinga', 'fmp', 'intrinio'], None]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'benzinga' if there is
            no default.
        display : Literal['headline', 'abstract', 'full']
            Specify headline only (headline), headline + teaser (abstract), or headline + full body (full). (provider: benzinga)
        date : Optional[Union[str]]
            Date of the news to retrieve. (provider: benzinga)
        start_date : Optional[Union[str]]
            Start date of the news to retrieve. (provider: benzinga)
        end_date : Optional[Union[str]]
            End date of the news to retrieve. (provider: benzinga)
        updated_since : Optional[Union[int]]
            Number of seconds since the news was updated. (provider: benzinga)
        published_since : Optional[Union[int]]
            Number of seconds since the news was published. (provider: benzinga)
        sort : Optional[Union[Literal['id', 'created', 'updated']]]
            Key to sort the news by. (provider: benzinga)
        order : Optional[Union[Literal['asc', 'desc']]]
            Order to sort the news by. (provider: benzinga)
        isin : Optional[Union[str]]
            The ISIN of the news to retrieve. (provider: benzinga)
        cusip : Optional[Union[str]]
            The CUSIP of the news to retrieve. (provider: benzinga)
        channels : Optional[Union[str]]
            Channels of the news to retrieve. (provider: benzinga)
        topics : Optional[Union[str]]
            Topics of the news to retrieve. (provider: benzinga)
        authors : Optional[Union[str]]
            Authors of the news to retrieve. (provider: benzinga)
        content_types : Optional[Union[str]]
            Content types of the news to retrieve. (provider: benzinga)

        Returns
        -------
        OBBject
            results : Union[List[GlobalNews]]
                Serializable results.
            provider : Union[Literal['benzinga', 'fmp', 'intrinio'], None]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            extra: Dict[str, Any]
                Extra info.

        GlobalNews
        ----------
        date : datetime
            Published date of the news.
        title : str
            Title of the news.
        images : Optional[Union[List[Dict[str, str]]]]
            Images associated with the news.
        text : Optional[Union[str]]
            Text/body of the news.
        url : Optional[Union[str]]
            URL of the news.
        id : Optional[Union[str]]
            ID of the news. (provider: benzinga); Article ID. (provider: intrinio)
        author : Optional[Union[str]]
            Author of the news. (provider: benzinga)
        teaser : Optional[Union[str]]
            Teaser of the news. (provider: benzinga)
        channels : Optional[Union[str]]
            Channels associated with the news. (provider: benzinga)
        stocks : Optional[Union[str]]
            Stocks associated with the news. (provider: benzinga)
        tags : Optional[Union[str]]
            Tags associated with the news. (provider: benzinga)
        updated : Optional[Union[datetime]]
            None
        site : Optional[Union[str]]
            Site of the news. (provider: fmp)
<<<<<<< Updated upstream
        company : Optional[Dict[str, Any]]
            Company details related to the news article. (provider: intrinio)
        Example
        --------

        >>> from openbb import obb
        >>> obb.news.globalnews(limit=20)
        """  # noqa: E501
=======
        company : Optional[Union[Dict[str, Any]]]
            Company details related to the news article. (provider: intrinio)"""  # noqa: E501
>>>>>>> Stashed changes

        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "limit": limit,
            },
            extra_params=kwargs,
        )

        return self._run(
            "/news/globalnews",
            **inputs,
        )
