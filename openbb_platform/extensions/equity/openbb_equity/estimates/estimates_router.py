"""Estimates Router."""

from openbb_core.app.model import CommandContext, Example, OBBject
from openbb_core.app.provider_interface import (
    ExtraParams,
    ProviderChoices,
    StandardParams,
)
from openbb_core.app.query import Query
from openbb_core.app.router import Router

router = Router(prefix="/estimates")

# pylint: disable=unused-argument


@router.command(
    model="PriceTarget",
    api_examples=[
        Example(
            parameters={
                "start_date": "2020-01-01",
                "end_date": "2024-02-16",
                "limit": 10,
                "symbol": "msft",
                "provider": "benzinga",
                "action": "downgrades",
            }
        ),
    ],
)
async def price_target(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject:
    """Get analyst price targets by company."""
    return await OBBject.from_query(Query(**locals()))


@router.command(
    model="AnalystEstimates",
    api_examples=[Example(parameters={"symbol": "AAPL", "provider": "fmp"})],
)
async def historical(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject:
    """Get historical analyst estimates for earnings and revenue."""
    return await OBBject.from_query(Query(**locals()))


@router.command(
    model="PriceTargetConsensus",
    api_examples=[Example(parameters={"symbol": "AAPL,MSFT", "provider": "yfinance"})],
)
async def consensus(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject:
    """Get consensus price target and recommendation."""
    return await OBBject.from_query(Query(**locals()))


@router.command(
    model="AnalystSearch",
    api_examples=[Example(parameters={"firm_name": "Wedbush", "provider": "benzinga"})],
)
async def analyst_search(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject:
    """Search for specific analysts and get their forecast track record."""
    return await OBBject.from_query(Query(**locals()))
