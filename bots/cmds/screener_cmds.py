from __future__ import annotations

import disnake
from disnake.ext import commands

from bots.common import commands_dict
from bots.helpers import ShowView, presets_custom_autocomp, signals_autocomp
from bots.stocks.screener.financial import financial_command
from bots.stocks.screener.historical import historical_command
from bots.stocks.screener.overview import overview_command
from bots.stocks.screener.ownership import ownership_command
from bots.stocks.screener.performance import performance_command
from bots.stocks.screener.presets_custom import presets_custom_command
from bots.stocks.screener.presets_default import presets_default_command
from bots.stocks.screener.technical import technical_command
from bots.stocks.screener.valuation import valuation_command

# pylint: disable=R0912


class ScreenerCommands(commands.Cog):
    """Screener menu"""

    def __init__(self, bot: commands.Bot):
        self.bot = bot

    @commands.slash_command(name="scr")
    async def scr(self, inter):
        pass

    @scr.sub_command()
    async def presets_default(self, inter: disnake.AppCmdInter):
        """Displays every available preset"""
        await ShowView().discord(presets_default_command, inter, "scr presets_default")

    @scr.sub_command()
    async def presets_custom(self, inter: disnake.AppCmdInter):
        """Displays every available preset"""
        await ShowView().discord(presets_custom_command, inter, "scr presets_custom")

    @scr.sub_command()
    async def historical(
        self,
        inter: disnake.AppCmdInter,
        signal: str = commands.Param(autocomplete=signals_autocomp),
        start="",
    ):
        """Displays trades made by the congress/senate/house [quiverquant.com]

        Parameters
        -----------
        signal: Signal. Default: most_volatile
        start: Starting date in YYYY-MM-DD format
        """
        await ShowView().discord(
            historical_command, inter, "scr historical", signal, start
        )

    @scr.sub_command()
    async def overview(
        self,
        inter: disnake.AppCmdInter,
        preset: str = commands.Param(autocomplete=presets_custom_autocomp),
        sort: str = commands.Param(choices=commands_dict.sort["overview"]),
        limit: int = 5,
        ascend: bool = False,
    ):
        """Displays stocks with overview data such as Sector and Industry [Finviz]

        Parameters
        -----------
        preset: screener preset
        sort: column to sort by
        limit: number of stocks to display
        ascend: whether it's sorted by ascending order or not. Default: False
        """
        await ShowView().discord(
            overview_command, inter, "scr overview", preset, sort, limit, ascend
        )

    @scr.sub_command()
    async def valuation(
        self,
        inter: disnake.AppCmdInter,
        preset: str = commands.Param(autocomplete=presets_custom_autocomp),
        sort: str = commands.Param(choices=commands_dict.sort["valuation"]),
        limit: int = 5,
        ascend: bool = False,
    ):
        """Displays results from chosen preset focusing on valuation metrics [Finviz]

        Parameters
        -----------
        preset: screener preset
        sort: column to sort by
        limit: number of stocks to display
        ascend: whether it's sorted by ascending order or not. Default: False
        """
        await ShowView().discord(
            valuation_command, inter, "scr valuation", preset, sort, limit, ascend
        )

    @scr.sub_command()
    async def financial(
        self,
        inter: disnake.AppCmdInter,
        preset: str = commands.Param(autocomplete=presets_custom_autocomp),
        sort: str = commands.Param(choices=commands_dict.sort["financial"]),
        limit: int = 5,
        ascend: bool = False,
    ):
        """Displays returned results from preset by financial metrics [Finviz]

        Parameters
        -----------
        preset: screener preset
        sort: column to sort by
        limit: number of stocks to display
        ascend: whether it's sorted by ascending order or not. Default: False
        """
        await ShowView().discord(
            financial_command, inter, "scr financial", preset, sort, limit, ascend
        )

    @scr.sub_command()
    async def ownership(
        self,
        inter: disnake.AppCmdInter,
        preset: str = commands.Param(autocomplete=presets_custom_autocomp),
        sort: str = commands.Param(choices=commands_dict.sort["ownership"]),
        limit: int = 5,
        ascend: bool = False,
    ):
        """Displays stocks based on own share float and ownership data [Finviz]

        Parameters
        -----------
        preset: screener preset
        sort: column to sort by
        limit: number of stocks to display
        ascend: whether it's sorted by ascending order or not. Default: False
        """
        await ShowView().discord(
            ownership_command, inter, "scr ownership", preset, sort, limit, ascend
        )

    @scr.sub_command()
    async def performance(
        self,
        inter: disnake.AppCmdInter,
        preset: str = commands.Param(autocomplete=presets_custom_autocomp),
        sort: str = commands.Param(choices=commands_dict.sort["performance"]),
        limit: int = 5,
        ascend: bool = False,
    ):
        """Displays stocks and sort by performance categories [Finviz]

        Parameters
        -----------
        preset: screener preset
        sort: column to sort by
        limit: number of stocks to display
        ascend: whether it's sorted by ascending order or not. Default: False
        """
        await ShowView().discord(
            performance_command, inter, "scr performance", preset, sort, limit, ascend
        )

    @scr.sub_command()
    async def technical(
        self,
        inter: disnake.AppCmdInter,
        preset: str = commands.Param(autocomplete=presets_custom_autocomp),
        sort: str = commands.Param(choices=commands_dict.sort["technical"]),
        limit: int = 5,
        ascend: bool = False,
    ):
        """Displays stocks according to chosen preset, sorting by technical factors [Finviz]

        Parameters
        -----------
        preset: screener preset
        sort: column to sort by
        limit: number of stocks to display
        ascend: whether it's sorted by ascending order or not. Default: False
        """
        await ShowView().discord(
            technical_command, inter, "scr technical", preset, sort, limit, ascend
        )


def setup(bot: commands.Bot):
    bot.add_cog(ScreenerCommands(bot))
