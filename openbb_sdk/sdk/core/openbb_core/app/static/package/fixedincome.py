### THIS FILE IS AUTO-GENERATED. DO NOT EDIT. ###

import datetime
from typing import Annotated, List, Literal, Optional, Union

from pydantic import validate_arguments

import openbb_core.app.model.command_context
import openbb_core.app.model.results.empty
from openbb_core.app.model.custom_parameter import OpenBBCustomParameter
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.static.container import Container
from openbb_core.app.static.filters import filter_inputs


class CLASS_fixedincome(Container):
    """/fixedincome
    treasury
    ycrv
    """

    def __repr__(self) -> str:
        return self.__doc__ or ""

    @validate_arguments
    def treasury(
        self,
        start_date: Annotated[
            Union[datetime.date, None, str],
            OpenBBCustomParameter(
                description="Start date of the data, in YYYY-MM-DD format."
            ),
        ] = None,
        end_date: Annotated[
            Union[datetime.date, None, str],
            OpenBBCustomParameter(
                description="End date of the data, in YYYY-MM-DD format."
            ),
        ] = None,
        chart: bool = False,
        provider: Optional[Literal["fmp"]] = None,
        **kwargs
    ) -> OBBject[List]:
        """Get treasury rates.

        Parameters
        ----------
        start_date : Union[datetime.date, NoneType, str]
            Start date of the data, in YYYY-MM-DD format.
        end_date : Union[datetime.date, NoneType, str]
            End date of the data, in YYYY-MM-DD format.
        chart : bool
            Whether to create a chart or not, by default False.
        provider : Optional[Literal['fmp']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'fmp' if there is
            no default.

        Returns
        -------
        OBBject
            results : List[TreasuryRates]
                Serializable results.
            provider : Optional[Literal['fmp']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            metadata: Optional[Metadata]
                Metadata info about the command execution.

        TreasuryRates
        -------------
        date : Optional[date]
            The date of the data.
        month_1 : Optional[float]
            1 month treasury rate.
        month_2 : Optional[float]
            2 month treasury rate.
        month_3 : Optional[float]
            3 month treasury rate.
        month_6 : Optional[float]
            6 month treasury rate.
        year_1 : Optional[float]
            1 year treasury rate.
        year_2 : Optional[float]
            2 year treasury rate.
        year_3 : Optional[float]
            3 year treasury rate.
        year_5 : Optional[float]
            5 year treasury rate.
        year_7 : Optional[float]
            7 year treasury rate.
        year_10 : Optional[float]
            10 year treasury rate.
        year_20 : Optional[float]
            20 year treasury rate.
        year_30 : Optional[float]
            30 year treasury rate."""

        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "start_date": start_date,
                "end_date": end_date,
            },
            extra_params=kwargs,
            chart=chart,
        )

        return self._command_runner.run(
            "/fixedincome/treasury",
            **inputs,
        )

    @validate_arguments
    def ycrv(
        self, chart: bool = False
    ) -> OBBject[openbb_core.app.model.results.empty.Empty]:
        """Yield curve."""

        inputs = filter_inputs(
            chart=chart,
        )

        return self._command_runner.run(
            "/fixedincome/ycrv",
            **inputs,
        )
