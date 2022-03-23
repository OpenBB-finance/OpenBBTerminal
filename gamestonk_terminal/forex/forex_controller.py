"""Forex Controller."""
__docformat__ = "numpy"

import argparse
import logging
import os
from datetime import datetime, timedelta
from typing import List

import pandas as pd
from prompt_toolkit.completion import NestedCompleter

from gamestonk_terminal import feature_flags as gtff
from gamestonk_terminal.decorators import log_start_end
from gamestonk_terminal.forex import av_model, av_view
from gamestonk_terminal.helper_funcs import parse_known_args_and_warn, valid_date
from gamestonk_terminal.menu import session
from gamestonk_terminal.parent_classes import BaseController
from gamestonk_terminal.rich_config import console

# pylint: disable=R1710,import-outside-toplevel

logger = logging.getLogger(__name__)


class ForexController(BaseController):
    """Forex Controller class."""

    CHOICES_COMMANDS = ["to", "from", "load", "quote", "candle", "resources"]
    CHOICES_MENUS = ["ta", "oanda"]
    PATH = "/forex/"
    FILE_PATH = os.path.join(os.path.dirname(__file__), "README.md")

    def __init__(self, queue: List[str] = None):
        """Construct Data."""
        super().__init__(queue)

        self.from_symbol = "USD"
        self.to_symbol = ""
        self.data = pd.DataFrame()

        if session and gtff.USE_PROMPT_TOOLKIT:
            choices: dict = {c: {} for c in self.controller_choices}
            choices["to"] = {c: None for c in av_model.CURRENCY_LIST}
            choices["from"] = {c: None for c in av_model.CURRENCY_LIST}
            self.completer = NestedCompleter.from_nested_dict(choices)

    def print_help(self):
        """Print help."""
        has_symbols_start = "" if self.from_symbol and self.to_symbol else "[dim]"
        has_symbols_end = "" if self.from_symbol and self.to_symbol else "[/dim]"
        help_text = f"""[cmds]
    from      select the "from" currency in a forex pair
    to        select the "to" currency in a forex pair[/cmds]

[param]From: [/param]{None or self.from_symbol}
[param]To:   [/param]{None or self.to_symbol}[cmds]
{has_symbols_start}
[src][AlphaVantage][/src][cmds]
    quote         get last quote
    load          get historical data
    candle        show candle plot for loaded data[/cmds]
[menu]
>   ta          technical analysis for loaded coin,     e.g.: ema, macd, rsi, adx, bbands, obv
[/menu]
{has_symbols_end}
[info]Forex brokerages:[/info][menu]
>   oanda         Oanda menu[/menu][/cmds]
 """
        console.print(text=help_text, menu="Forex")

    def custom_reset(self):
        """Class specific component of reset command"""
        set_from_symbol = f"from {self.from_symbol}" if self.from_symbol else ""
        set_to_symbol = f"to {self.to_symbol}" if self.to_symbol else ""
        if set_from_symbol and set_to_symbol:
            return ["forex", set_from_symbol, set_to_symbol]
        return []

    @log_start_end(log=logger)
    def call_to(self, other_args: List[str]):
        """Process 'to' command."""
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="to",
            description='Select the "to" currency symbol in a forex pair',
        )
        parser.add_argument(
            "-n",
            "--name",
            help="To currency",
            type=av_model.check_valid_forex_currency,
            dest="to_symbol",
        )

        if (
            other_args
            and "-n" not in other_args[0]
            and "--name" not in other_args[0]
            and "-h" not in other_args
        ):
            other_args.insert(0, "-n")

        ns_parser = parse_known_args_and_warn(parser, other_args)
        if ns_parser:
            self.to_symbol = ns_parser.to_symbol

            console.print(
                f"\nSelected pair\nFrom: {self.from_symbol}\nTo:   {self.to_symbol}\n\n"
            )

    @log_start_end(log=logger)
    def call_from(self, other_args: List[str]):
        """Process 'from' command."""
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="to",
            description='Select the "from" currency symbol in a forex pair',
        )
        parser.add_argument(
            "-n",
            "--name",
            help="From currency",
            type=av_model.check_valid_forex_currency,
            dest="from_symbol",
        )

        if (
            other_args
            and "-n" not in other_args[0]
            and "--name" not in other_args[0]
            and "-h" not in other_args
        ):
            other_args.insert(0, "-n")

        ns_parser = parse_known_args_and_warn(parser, other_args)
        if ns_parser:
            self.from_symbol = ns_parser.from_symbol
            console.print(
                f"\nSelected pair\nFrom: {self.from_symbol}\nTo:   {self.to_symbol}\n\n"
            )

    @log_start_end(log=logger)
    def call_load(self, other_args: List[str]):
        """Process select command."""
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="load",
            description="Load historical exchange rate data.",
        )
        parser.add_argument(
            "-r",
            "--resolution",
            choices=["i", "d", "w", "m"],
            default="d",
            help="Resolution of data.  Can be intraday, daily, weekly or monthly",
            dest="resolution",
        )
        parser.add_argument(
            "-i",
            "--interval",
            choices=[1, 5, 15, 30, 60],
            default="5",
            help="Interval of intraday data.  Can be 1, 5, 15, 30 or 60.",
            dest="interval",
        )
        parser.add_argument(
            "-s",
            "--start_date",
            default=(datetime.now() - timedelta(days=366)),
            type=valid_date,
            help="Start date of data.",
            dest="start_date",
        )
        ns_parser = parse_known_args_and_warn(parser, other_args)
        if ns_parser:
            if self.to_symbol and self.from_symbol:
                self.data = av_model.get_historical(
                    to_symbol=self.to_symbol,
                    from_symbol=self.from_symbol,
                    resolution=ns_parser.resolution,
                    interval=ns_parser.interval,
                    start_date=ns_parser.start_date.strftime("%Y-%m-%d"),
                )
                self.data.index.name = "date"
                console.print(
                    f"Loaded historic data from {self.from_symbol} to {self.to_symbol}"
                )
            else:
                logger.error(
                    "Make sure both a to symbol and a from symbol are supplied."
                )
                console.print(
                    "\n[red]Make sure both a to symbol and a from symbol are supplied.[/red]\n"
                )

    @log_start_end(log=logger)
    def call_candle(self, other_args: List[str]):
        """Process quote command."""
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="candle",
            description="Show candle for loaded fx data",
        )
        ns_parser = parse_known_args_and_warn(parser, other_args)
        if ns_parser:
            if not self.data.empty:
                av_view.display_candle(self.data, self.to_symbol, self.from_symbol)
            else:
                logger.error(
                    "No forex historical data loaded.  Load first using <load>."
                )
                console.print(
                    "[red]No forex historical data loaded.  Load first using <load>.[/red]\n"
                )

    @log_start_end(log=logger)
    def call_quote(self, other_args: List[str]):
        """Process quote command."""
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="quote",
            description="Get current exchange rate quote",
        )
        ns_parser = parse_known_args_and_warn(parser, other_args)
        if ns_parser:
            if self.to_symbol and self.from_symbol:
                av_view.display_quote(self.to_symbol, self.from_symbol)
            else:
                logger.error(
                    "Make sure both a 'to' symbol and a 'from' symbol are selected."
                )
                console.print(
                    '[red]Make sure both a "to" symbol and a "from" symbol are selected.[/red]\n'
                )

    # MENUS
    @log_start_end(log=logger)
    def call_oanda(self, _):
        """Enter Oanda menu."""
        from gamestonk_terminal.forex.oanda.oanda_controller import OandaController

        self.queue = self.load_class(OandaController, self.queue)

    @log_start_end(log=logger)
    def call_ta(self, _):
        """Process ta command"""
        from gamestonk_terminal.forex.technical_analysis.ta_controller import (
            TechnicalAnalysisController,
        )

        # TODO: Play with this to get correct usage
        if self.to_symbol and self.from_symbol and not self.data.empty:
            self.queue = self.load_class(
                TechnicalAnalysisController,
                ticker=f"{self.from_symbol}/{self.to_symbol}",
                data=self.data,
                start=self.data.index[0],
                interval="",
                queue=self.queue,
            )

        else:
            console.print("No currency pair data is loaded. Use 'load' to load data.\n")

    # HELP WANTED!
    # TODO: Add news and reddit commands back
    # behavioural analysis and exploratory data analysis would be useful in the
    # forex menu. The examples of integration of the common ba and eda components
    # into the stocks context can provide an insight on how this can be done.
    # The earlier implementation did not work and was deleted in commit
    # d0e51033f7d5d4da6386b9e0b787892979924dce
