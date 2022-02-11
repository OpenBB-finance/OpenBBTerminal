from __future__ import annotations

import disnake
from disnake.ext import commands

from bots.helpers import ShowView
from bots.config_discordbot import logger
from bots.economy.currencies import currencies_command
from bots.economy.energy import energy_command
from bots.economy.feargreed import feargreed_command
from bots.economy.futures import futures_command
from bots.economy.glbonds import glbonds_command
from bots.economy.grains import grains_command
from bots.economy.indices import indices_command
from bots.economy.meats import meats_command
from bots.economy.metals import metals_command
from bots.economy.overview import overview_command
from bots.economy.performance import performance_command
from bots.economy.softs import softs_command
from bots.economy.usbonds import usbonds_command
from bots.economy.valuation import valuation_command

group = [
    "basic_materials",
    "capitalization",
    "communication_services",
    "consumer_cyclical",
    "consumer_defensive",
    "country",
    "energy",
    "financial",
    "healthcare",
    "industry",
    "industrials",
    "real_estate",
    "sector",
    "technology",
    "utilities",
]

fgind = {
    "Junk Bond Demand": "jbd",
    "Market Volatility": "mv",
    "Put and Call Options": "pco",
    "Market Momentum": "mm",
    "Stock Price Strength": "sps",
    "Stock Price Breadth": "spb",
    "Safe Heaven Demand": "shd",
}


class EconomyCommands(commands.Cog):
    """Economy Commands menu"""

    def __init__(self, bot: commands.Bot):
        self.bot = bot

    @commands.slash_command(name="econ-feargreed")
    async def feargreed(
        self, ctx: disnake.AppCmdInter, indicator: str = commands.Param(choices=group)
    ):

        """CNN Fear and Greed Index [CNN]

        Parameters
        ----------
        indicator: Select an Indicator
        """
        await ctx.response.defer()
        logger.info("econ-feargreed")
        await ShowView().discord(feargreed_command, ctx, indicator)

    @commands.slash_command(name="econ-overview")
    async def overview(self, ctx: disnake.AppCmdInter):
        """Market data overview [Wall St. Journal]"""
        await ctx.response.defer()
        logger.info("econ-overview")
        await ShowView().discord(overview_command, ctx)

    @commands.slash_command(name="econ-indices")
    async def indices(self, ctx: disnake.AppCmdInter):
        """US indices overview [Wall St. Journal]"""
        await ctx.response.defer()
        logger.info("econ-indices")
        await ShowView().discord(indices_command, ctx)

    @commands.slash_command(name="econ-futures")
    async def futures(self, ctx: disnake.AppCmdInter):
        """Futures and commodities overview [Wall St. Journal]"""
        await ctx.response.defer()
        logger.info("econ-futures")
        await ShowView().discord(futures_command, ctx)

    @commands.slash_command(name="econ-usbonds")
    async def usbonds(self, ctx: disnake.AppCmdInter):
        """US bonds overview [Wall St. Journal]"""
        await ctx.response.defer()
        logger.info("econ-usbonds")
        await ShowView().discord(usbonds_command, ctx)

    @commands.slash_command(name="econ-glbonds")
    async def glbonds(self, ctx: disnake.AppCmdInter):
        """Global bonds overview [Wall St. Journal]"""
        await ctx.response.defer()
        logger.info("econ-glbonds")
        await ShowView().discord(glbonds_command, ctx)

    @commands.slash_command(name="econ-energy")
    async def energy(self, ctx: disnake.AppCmdInter):
        """Displays energy futures data [Finviz]"""
        await ctx.response.defer()
        logger.info("econ-energy")
        await ShowView().discord(energy_command, ctx)

    @commands.slash_command(name="econ-metals")
    async def metals(self, ctx: disnake.AppCmdInter):
        """Displays metals futures data [Finviz]"""
        await ctx.response.defer()
        logger.info("econ-metals")
        await ShowView().discord(metals_command, ctx)

    @commands.slash_command(name="econ-meats")
    async def meats(self, ctx: disnake.AppCmdInter):
        """Displays meats futures data [Finviz]"""
        await ctx.response.defer()
        logger.info("econ-meats")
        await ShowView().discord(meats_command, ctx)

    @commands.slash_command(name="econ-grains")
    async def grains(self, ctx: disnake.AppCmdInter):
        """Displays grains futures data [Finviz]"""
        await ctx.response.defer()
        logger.info("econ-grains")
        await ShowView().discord(grains_command, ctx)

    @commands.slash_command(name="econ-softs")
    async def softs(self, ctx: disnake.AppCmdInter):
        """Displays softs futures data [Finviz]"""
        await ctx.response.defer()
        logger.info("econ-softs")
        await ShowView().discord(softs_command, ctx)

    @commands.slash_command(name="econ-currencies")
    async def currencies(self, ctx: disnake.AppCmdInter):
        """Currencies overview [Wall St. Journal]"""
        await ctx.response.defer()
        logger.info("econ-currencies")
        await ShowView().discord(currencies_command, ctx)

    @commands.slash_command(name="econ-valuation")
    async def valuation(
        self,
        ctx: disnake.AppCmdInter,
        economy_group: str = commands.Param(choices=group),
    ):
        """Valuation of sectors, industry, country [Finviz]

        Parameters
        -----------
        economy_group: Economy Group
        """
        await ctx.response.defer()
        logger.info("econ-valuation")
        await ShowView().discord(valuation_command, ctx, economy_group)

    @commands.slash_command(name="econ-performance")
    async def performance(
        self,
        ctx: disnake.AppCmdInter,
        economy_group: str = commands.Param(choices=group),
    ):
        """Performance of sectors, industry, country [Finviz]

        Parameters
        -----------
        economy_group: Economy Group
        """
        await ctx.response.defer()
        logger.info("econ-performance")
        await ShowView().discord(performance_command, ctx, economy_group)


def setup(bot: commands.Bot):
    bot.add_cog(EconomyCommands(bot))
