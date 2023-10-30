# pylint: disable=W0613:unused-argument
# ruff: noqa: F401
"""Companies House Router."""

from openbb_core.app.model.command_context import CommandContext
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.provider_interface import (
    ExtraParams,
    ProviderChoices,
    StandardParams,
)
from openbb_core.app.query import Query
from openbb_core.app.router import Router
from pydantic import BaseModel

router = Router(prefix="/companies_house")

# @router.command(model="Filings")
# def filings(
#    cc: CommandContext,
#    provider_choices: ProviderChoices,
#    standard_params: StandardParams,
#    extra_params: ExtraParams,
# ) -> OBBject[BaseModel]:
#    """Look up Companies House filings by ID number."""
#    return OBBject(results=Query(**locals()).execute())
