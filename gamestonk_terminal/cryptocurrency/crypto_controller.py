"""Cryptocurrency Context Controller"""
__docformat__ = "numpy"
# pylint: disable=R0904, C0302, R1710, W0622

import argparse
import difflib
from typing import List, Union
import pandas as pd
from colorama import Style
from prompt_toolkit.completion import NestedCompleter
from binance.client import Client

from gamestonk_terminal import feature_flags as gtff
from gamestonk_terminal.helper_funcs import (
    get_flair,
    parse_known_args_and_warn,
    check_positive,
    system_clear,
    try_except,
)
from gamestonk_terminal.menu import session
from gamestonk_terminal.cryptocurrency.due_diligence import (
    coinpaprika_view,
    binance_view,
    pycoingecko_view,
    finbrain_crypto_view,
    binance_model,
    coinbase_model,
)
from gamestonk_terminal.cryptocurrency.cryptocurrency_helpers import (
    load,
    find,
    load_ta_data,
    plot_chart,
)
import gamestonk_terminal.config_terminal as cfg

# pylint: disable=import-outside-toplevel


class CryptoController:
    CHOICES = [
        "cls",
        "cd",
        "h",
        "?",
        "q",
        "..",
        "exit",
        "r",
    ]

    CHOICES_COMMANDS = [
        "headlines",
        "chart",
        "load",
        "find",
    ]

    CHOICES_MENUS = ["ta", "dd", "ov", "disc", "onchain", "defi", "nft", "pred"]

    SOURCES = {
        "bin": "Binance",
        "cg": "CoinGecko",
        "cp": "CoinPaprika",
        "cb": "Coinbase",
    }

    DD_VIEWS_MAPPING = {
        "cg": pycoingecko_view,
        "cp": coinpaprika_view,
        "bin": binance_view,
    }

    CHOICES += CHOICES_COMMANDS
    CHOICES += CHOICES_MENUS

    def __init__(self, queue: List[str] = None):
        """CONSTRUCTOR"""

        self.crypto_parser = argparse.ArgumentParser(add_help=False, prog="crypto")
        self.crypto_parser.add_argument("cmd", choices=self.CHOICES)

        self.symbol = ""
        self.current_coin = ""
        self.current_df = pd.DataFrame()
        self.current_currency = ""
        self.source = ""

        self.completer: Union[None, NestedCompleter] = None

        if session and gtff.USE_PROMPT_TOOLKIT:
            choices: dict = {c: {} for c in self.CHOICES}

            self.completer = NestedCompleter.from_nested_dict(choices)

        if queue:
            self.queue = queue
        else:
            self.queue = list()

    def print_help(self):
        """Print help"""
        help_text = (
            f"\nCoin: {self.current_coin}" if self.current_coin != "" else "\nCoin: ?"
        )
        help_text += (
            f"\nSource: {self.SOURCES.get(self.source, '?')}\n"
            if self.source != ""
            else "\nSource: ?\n"
        )
        help_text += """
    load        load a specific cryptocurrency for analysis
    chart       view a candle chart for a specific cryptocurrency
    find        alternate way to search for coins
    headlines   crypto sentiment from 15+ major news headlines [Finbrain]
    """
        dim = Style.DIM if not self.current_coin else ""
        help_text += f"""
Crypto Menus:
    /disc        discover trending cryptocurrencies,     e.g.: top gainers, losers, top sentiment
    /ov          overview of the cryptocurrencies,       e.g.: market cap, DeFi, latest news, top exchanges, stables{dim}
    /dd          due-diligence for loaded coin,          e.g.: coin information, social media, market stats
    /ta          technical analysis for loaded coin,     e.g.: ema, macd, rsi, adx, bbands, obv
    /pred        prediction techniques                   e.g.: regression, arima, rnn, lstm, conv1d, monte carlo
{Style.RESET_ALL if not self.current_coin else ""}
    /onchain     information on different blockchains,   e.g.: eth gas fees, active asset addresses, whale alerts
    /defi        decentralized finance information,      e.g.: dpi, llama, tvl, lending, borrow, funding
    /nft         non-fungible tokens,                    e.g.: today drops
"""
        print(help_text)

    def switch(self, an_input: str):
        """Process and dispatch input

        Returns
        -------
        List[str]
            List of commands in the queue to execute
        """

        # Empty command
        if not an_input:
            print("")
            return self.queue if len(self.queue) > 0 else []

        if "/" in an_input:
            actions = an_input.split("/")
            an_input = actions[0]
            for cmd in actions[1:][::-1]:
                self.queue.insert(0, cmd)

        (known_args, other_args) = self.crypto_parser.parse_known_args(an_input.split())

        if known_args.cmd:
            if known_args.cmd == "..":
                known_args.cmd = "q"
            elif known_args.cmd == "?":
                known_args.cmd = "h"

        return getattr(
            self, "call_" + known_args.cmd, lambda: "command not recognized!"
        )(other_args)

    def call_cls(self, _):
        """Process cls command"""
        system_clear()
        return self.queue if len(self.queue) > 0 else []

    def call_cd(self, other_args):
        """Process cd command"""
        if other_args:
            args = other_args[0].split("/")
            if len(args) > 0:
                for m in args[::-1]:
                    if m:
                        self.queue.insert(0, m)
            else:
                self.queue.insert(0, args[0])

        self.queue.insert(0, "q")

        return self.queue if len(self.queue) > 0 else []

    def call_h(self, _):
        """Process help command"""
        self.print_help()
        return self.queue if len(self.queue) > 0 else []

    def call_q(self, _):
        """Process quit menu command"""
        if len(self.queue) > 0:
            self.queue.insert(0, "q")
            return self.queue
        return ["q"]

    def call_exit(self, _):
        """Process exit terminal command"""
        if len(self.queue) > 0:
            self.queue.insert(0, "q")
            self.queue.insert(0, "q")
            return self.queue
        return ["q", "q"]

    def call_r(self, _):
        """Process reset command"""
        if len(self.queue) > 0:
            self.queue.insert(0, "crypto")
            self.queue.insert(0, "r")
            self.queue.insert(0, "q")
            return self.queue
        return ["q", "r", "crypto"]

    def call_load(self, other_args):
        """Process load command"""
        try:
            parser = argparse.ArgumentParser(
                add_help=False,
                formatter_class=argparse.ArgumentDefaultsHelpFormatter,
                prog="load",
                description="Load crypto currency to perform analysis on. "
                "Available data sources are CoinGecko, CoinPaprika, Binance, Coinbase"
                "By default main source used for analysis is CoinGecko (cg). To change it use --source flag",
            )

            parser.add_argument(
                "-c",
                "--coin",
                help="Coin to get",
                dest="coin",
                type=str,
                required="-h" not in other_args,
            )

            parser.add_argument(
                "-s",
                "--source",
                help="Source of data",
                dest="source",
                choices=("cp", "cg", "bin", "cb"),
                default="cg",
                required=False,
            )

            try:
                if other_args:
                    if not other_args[0][0] == "-":
                        other_args.insert(0, "-c")

                ns_parser = parse_known_args_and_warn(parser, other_args)

                if not ns_parser:
                    self.current_coin, self.source = self.current_coin, None
                    return

                source = ns_parser.source

                for arg in ["--source", source]:
                    if arg in other_args:
                        other_args.remove(arg)

                self.current_coin, self.source, self.symbol = load(
                    coin=ns_parser.coin, source=ns_parser.source
                )
                return self.queue if len(self.queue) > 0 else []

            except Exception as e:
                print(e, "\n")
                self.current_coin, self.source = self.current_coin, None

        except TypeError:
            print("Couldn't load data\n")

    def call_chart(self, other_args):
        """Process chart command"""
        if self.current_coin:
            parser = argparse.ArgumentParser(
                add_help=False,
                formatter_class=argparse.ArgumentDefaultsHelpFormatter,
                prog="chart",
                description="""Display chart for loaded coin. You can specify currency vs which you want
                to show chart and also number of days to get data for.""",
            )

            if self.source == "cp":
                parser.add_argument(
                    "--vs",
                    default="usd",
                    dest="vs",
                    help="Currency to display vs coin",
                    choices=["usd", "btc", "BTC", "USD"],
                    type=str,
                )

                parser.add_argument(
                    "-d",
                    "--days",
                    default=30,
                    dest="days",
                    help="Number of days to get data for",
                    type=check_positive,
                )

            if self.source == "cg":
                parser.add_argument(
                    "--vs", default="usd", dest="vs", help="Currency to display vs coin"
                )

                parser.add_argument(
                    "-d",
                    "--days",
                    default=30,
                    dest="days",
                    help="Number of days to get data for",
                )

            if self.source == "bin":
                client = Client(cfg.API_BINANCE_KEY, cfg.API_BINANCE_SECRET)
                interval_map = {
                    "1day": client.KLINE_INTERVAL_1DAY,
                    "3day": client.KLINE_INTERVAL_3DAY,
                    "1hour": client.KLINE_INTERVAL_1HOUR,
                    "2hour": client.KLINE_INTERVAL_2HOUR,
                    "4hour": client.KLINE_INTERVAL_4HOUR,
                    "6hour": client.KLINE_INTERVAL_6HOUR,
                    "8hour": client.KLINE_INTERVAL_8HOUR,
                    "12hour": client.KLINE_INTERVAL_12HOUR,
                    "1week": client.KLINE_INTERVAL_1WEEK,
                    "1min": client.KLINE_INTERVAL_1MINUTE,
                    "3min": client.KLINE_INTERVAL_3MINUTE,
                    "5min": client.KLINE_INTERVAL_5MINUTE,
                    "15min": client.KLINE_INTERVAL_15MINUTE,
                    "30min": client.KLINE_INTERVAL_30MINUTE,
                    "1month": client.KLINE_INTERVAL_1MONTH,
                }

                _, quotes = binance_model.show_available_pairs_for_given_symbol(
                    self.current_coin
                )

                parser.add_argument(
                    "--vs",
                    help="Quote currency (what to view coin vs)",
                    dest="vs",
                    type=str,
                    default="USDT",
                    choices=quotes,
                )

                parser.add_argument(
                    "-i",
                    "--interval",
                    help="Interval to get data",
                    choices=list(interval_map.keys()),
                    dest="interval",
                    default="1day",
                    type=str,
                )

                parser.add_argument(
                    "-l",
                    "--limit",
                    dest="limit",
                    default=100,
                    help="Number to get",
                    type=check_positive,
                )

            if self.source == "cb":
                interval_map = {
                    "1min": 60,
                    "5min": 300,
                    "15min": 900,
                    "1hour": 3600,
                    "6hour": 21600,
                    "24hour": 86400,
                    "1day": 86400,
                }

                _, quotes = coinbase_model.show_available_pairs_for_given_symbol(
                    self.current_coin
                )
                if len(quotes) < 0:
                    print(
                        f"Couldn't find any quoted coins for provided symbol {self.current_coin}"
                    )
                    return

                parser.add_argument(
                    "--vs",
                    help="Quote currency (what to view coin vs)",
                    dest="vs",
                    type=str,
                    default="USDT" if "USDT" in quotes else quotes[0],
                    choices=quotes,
                )

                parser.add_argument(
                    "-i",
                    "--interval",
                    help="Interval to get data",
                    choices=list(interval_map.keys()),
                    dest="interval",
                    default="1day",
                    type=str,
                )

                parser.add_argument(
                    "-l",
                    "--limit",
                    dest="limit",
                    default=100,
                    help="Number to get",
                    type=check_positive,
                )

            try:
                ns_parser = parse_known_args_and_warn(parser, other_args)

                if not ns_parser:
                    return

                if self.source in ["bin", "cb"]:
                    limit = ns_parser.limit
                    interval = ns_parser.interval
                    days = 0
                else:
                    limit = 0
                    interval = "1day"
                    days = ns_parser.days

                plot_chart(
                    coin=self.current_coin,
                    limit=limit,
                    interval=interval,
                    days=days,
                    currency=ns_parser.vs,
                    source=self.source,
                )
                return self.queue if len(self.queue) > 0 else []

            except Exception as e:
                print(e, "\n")

        else:
            print(
                "No coin selected. Use 'load' to load the coin you want to look at.\n"
            )

    def call_ta(self, other_args):
        """Process ta command"""
        from gamestonk_terminal.cryptocurrency.technical_analysis import ta_controller

        # TODO: Play with this to get correct usage
        if self.current_coin:
            parser = argparse.ArgumentParser(
                add_help=False,
                formatter_class=argparse.ArgumentDefaultsHelpFormatter,
                prog="ta",
                description="""Loads data for technical analysis. You can specify currency vs which you want
                                   to show chart and also number of days to get data for.
                                   By default currency: usd and days: 60.
                                   E.g. if you loaded in previous step Ethereum and you want to see it's price vs btc
                                   in last 90 days range use `ta --vs btc --days 90`""",
            )

            if self.source == "cp":
                parser.add_argument(
                    "--vs",
                    default="usd",
                    dest="vs",
                    help="Currency to display vs coin",
                    choices=["usd", "btc", "BTC", "USD"],
                    type=str,
                )

                parser.add_argument(
                    "-d",
                    "--days",
                    default=60,
                    dest="days",
                    help="Number of days to get data for",
                    type=check_positive,
                )

            if self.source == "cg":
                parser.add_argument(
                    "--vs", default="usd", dest="vs", help="Currency to display vs coin"
                )

                parser.add_argument(
                    "-d",
                    "--days",
                    default=60,
                    dest="days",
                    help="Number of days to get data for",
                )

            if self.source == "bin":
                client = Client(cfg.API_BINANCE_KEY, cfg.API_BINANCE_SECRET)
                interval_map = {
                    "1day": client.KLINE_INTERVAL_1DAY,
                    "3day": client.KLINE_INTERVAL_3DAY,
                    "1hour": client.KLINE_INTERVAL_1HOUR,
                    "2hour": client.KLINE_INTERVAL_2HOUR,
                    "4hour": client.KLINE_INTERVAL_4HOUR,
                    "6hour": client.KLINE_INTERVAL_6HOUR,
                    "8hour": client.KLINE_INTERVAL_8HOUR,
                    "12hour": client.KLINE_INTERVAL_12HOUR,
                    "1week": client.KLINE_INTERVAL_1WEEK,
                    "1min": client.KLINE_INTERVAL_1MINUTE,
                    "3min": client.KLINE_INTERVAL_3MINUTE,
                    "5min": client.KLINE_INTERVAL_5MINUTE,
                    "15min": client.KLINE_INTERVAL_15MINUTE,
                    "30min": client.KLINE_INTERVAL_30MINUTE,
                    "1month": client.KLINE_INTERVAL_1MONTH,
                }

                _, quotes = binance_model.show_available_pairs_for_given_symbol(
                    self.current_coin
                )
                parser.add_argument(
                    "--vs",
                    help="Quote currency (what to view coin vs)",
                    dest="vs",
                    type=str,
                    default="USDT",
                    choices=quotes,
                )

                parser.add_argument(
                    "-i",
                    "--interval",
                    help="Interval to get data",
                    choices=list(interval_map.keys()),
                    dest="interval",
                    default="1day",
                    type=str,
                )

                parser.add_argument(
                    "-l",
                    "--limit",
                    dest="limit",
                    default=100,
                    help="Number to get",
                    type=check_positive,
                )

                if self.source == "cb":
                    interval_map = {
                        "1min": 60,
                        "5min": 300,
                        "15min": 900,
                        "1hour": 3600,
                        "6hour": 21600,
                        "24hour": 86400,
                        "1day": 86400,
                    }

                    _, quotes = coinbase_model.show_available_pairs_for_given_symbol(
                        self.current_coin
                    )
                    if len(quotes) < 0:
                        print(
                            f"Couldn't find any quoted coins for provided symbol {self.current_coin}"
                        )
                        return

                    parser.add_argument(
                        "--vs",
                        help="Quote currency (what to view coin vs)",
                        dest="vs",
                        type=str,
                        default="USDT" if "USDT" in quotes else quotes[0],
                        choices=quotes,
                    )

                    parser.add_argument(
                        "-i",
                        "--interval",
                        help="Interval to get data",
                        choices=list(interval_map.keys()),
                        dest="interval",
                        default="1day",
                        type=str,
                    )

                    parser.add_argument(
                        "-l",
                        "--limit",
                        dest="limit",
                        default=100,
                        help="Number to get",
                        type=check_positive,
                    )

            if self.source == "cb":
                interval_map = {
                    "1min": 60,
                    "5min": 300,
                    "15min": 900,
                    "1hour": 3600,
                    "6hour": 21600,
                    "24hour": 86400,
                    "1day": 86400,
                }

                _, quotes = coinbase_model.show_available_pairs_for_given_symbol(
                    self.current_coin
                )
                if len(quotes) < 0:
                    print(
                        f"Couldn't find any quoted coins for provided symbol {self.current_coin}"
                    )
                    return

                parser.add_argument(
                    "--vs",
                    help="Quote currency (what to view coin vs)",
                    dest="vs",
                    type=str,
                    default="USDT" if "USDT" in quotes else quotes[0],
                    choices=quotes,
                )

                parser.add_argument(
                    "-i",
                    "--interval",
                    help="Interval to get data",
                    choices=list(interval_map.keys()),
                    dest="interval",
                    default="1day",
                    type=str,
                )

                parser.add_argument(
                    "-l",
                    "--limit",
                    dest="limit",
                    default=100,
                    help="Number to get",
                    type=check_positive,
                )

            try:
                ns_parser = parse_known_args_and_warn(parser, other_args)

                if not ns_parser:
                    return

                if self.source in ["bin", "cb"]:
                    limit = ns_parser.limit
                    interval = ns_parser.interval
                    days = 0
                else:
                    limit = 0
                    interval = "1day"
                    days = ns_parser.days

                self.current_df, self.current_currency = load_ta_data(
                    coin=self.current_coin,
                    source=self.source,
                    currency=ns_parser.vs,
                    days=days,
                    limit=limit,
                    interval=interval,
                )

            except Exception as e:
                print(e, "\n")

            if self.current_currency != "" and not self.current_df.empty:
                try:
                    quit = ta_controller.menu(
                        stock=self.current_df,
                        ticker=self.current_coin,
                        start=self.current_df.index[0],
                        interval="",
                    )
                    print("")
                    if quit is not None:
                        if quit is True:
                            return quit
                        self.print_help()

                except (ValueError, KeyError) as e:
                    print(e)
            else:
                return

        else:
            print(
                "No coin selected. Use 'load' to load the coin you want to look at.\n"
            )

    def call_disc(self, _):
        """Process disc command"""
        from gamestonk_terminal.cryptocurrency.discovery import discovery_controller

        return discovery_controller.menu(queue=self.queue)

    def call_ov(self, _):
        """Process ov command"""
        from gamestonk_terminal.cryptocurrency.overview import overview_controller

        ret = overview_controller.menu()
        if ret is False:
            self.print_help()
        else:
            return True

    def call_defi(self, _):
        """Process defi command"""
        from gamestonk_terminal.cryptocurrency.defi import defi_controller

        return defi_controller.menu(queue=self.queue)

    @try_except
    def call_headlines(self, other_args):
        """Process sentiment command"""
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="headlines",
            description="""Display sentiment analysis from FinBrain for chosen Cryptocurrencies""",
        )

        parser.add_argument(
            "-c",
            "--coin",
            default="BTC",
            type=str,
            dest="coin",
            help="Symbol of coin to load data for, ~100 symbols are available",
            choices=finbrain_crypto_view.COINS,
        )

        parser.add_argument(
            "--export",
            choices=["csv", "json", "xlsx"],
            default="",
            type=str,
            dest="export",
            help="Export dataframe data to csv,json,xlsx file",
        )

        ns_parser = parse_known_args_and_warn(parser, other_args)

        if not ns_parser:
            return

        finbrain_crypto_view.display_crypto_sentiment_analysis(
            coin=ns_parser.coin, export=ns_parser.export
        )
        return self.queue if len(self.queue) > 0 else []

    def call_dd(self, _):
        """Process dd command"""
        if self.current_coin:
            from gamestonk_terminal.cryptocurrency.due_diligence import dd_controller

            return dd_controller.menu(
                self.current_coin, self.source, self.symbol, queue=self.queue
            )
        print("No coin selected. Use 'load' to load the coin you want to look at.\n")
        return self.queue

    def call_pred(self, _):
        """Process pred command"""
        if not self.current_coin:
            print(
                "No coin loaded.  Please use `load <coin>` to access prediction menu\n."
            )
            return

        if self.source != "cg":
            print("Currently only supports CoinGecko source.\n")
            return
        if self.current_coin:
            from gamestonk_terminal.cryptocurrency.prediction_techniques import (
                pred_controller,
            )
            from gamestonk_terminal.cryptocurrency import (
                cryptocurrency_helpers as c_help,
            )

            pred = pred_controller.menu(
                self.current_coin,
                c_help.load_cg_coin_data(self.current_coin, "USD", 365, "1D"),
            )
            if pred is False:
                self.print_help()
            else:
                return True
        else:
            print(
                "No coin selected. Use 'load' to load the coin you want to look at.\n"
            )

    def call_onchain(self, _):
        """Process onchain command"""
        from gamestonk_terminal.cryptocurrency.onchain import onchain_controller

        ret = onchain_controller.menu()

        if ret is False:
            self.print_help()
        else:
            return True

    def call_nft(self, _):
        """Process nft command"""
        from gamestonk_terminal.cryptocurrency.nft import nft_controller

        ret = nft_controller.menu()

        if ret is False:
            self.print_help()
        else:
            return True

    @try_except
    def call_find(self, other_args):
        """Process find command"""
        parser = argparse.ArgumentParser(
            prog="find",
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            description="""
            Find similar coin by coin name,symbol or id. If you don't remember exact name or id of the Coin at CoinGecko,
            Binance, Coinbase or CoinPaprika you can use this command to display coins with similar name, symbol or id
            to your search query.
            Example of usage: coin name is something like "polka". So I can try: find -c polka -k name -t 25
            It will search for coin that has similar name to polka and display top 25 matches.
            -c, --coin stands for coin - you provide here your search query
            -k, --key it's a searching key. You can search by symbol, id or name of coin
            -l, --limit it displays top N number of records.""",
        )

        parser.add_argument(
            "-c",
            "--coin",
            help="Symbol Name or Id of Coin",
            dest="coin",
            required="-h" not in other_args,
            type=str,
        )

        parser.add_argument(
            "-k",
            "--key",
            dest="key",
            help="Specify by which column you would like to search: symbol, name, id",
            type=str,
            choices=["id", "symbol", "name"],
            default="symbol",
        )

        parser.add_argument(
            "-l",
            "--limit",
            default=10,
            dest="limit",
            help="Number of records to display",
            type=check_positive,
        )

        parser.add_argument(
            "--source",
            dest="source",
            choices=["cp", "cg", "bin", "cb"],
            default="cg",
            help="Source of data.",
            type=str,
        )

        parser.add_argument(
            "--export",
            choices=["csv", "json", "xlsx"],
            default="",
            type=str,
            dest="export",
            help="Export dataframe data to csv,json,xlsx file",
        )

        if other_args:
            if not other_args[0][0] == "-":
                other_args.insert(0, "-c")

        ns_parser = parse_known_args_and_warn(parser, other_args)
        if not ns_parser:
            return self.queue if len(self.queue) > 0 else []

        find(
            coin=ns_parser.coin,
            source=ns_parser.source,
            key=ns_parser.key,
            top=ns_parser.limit,
            export=ns_parser.export,
        )
        return self.queue if len(self.queue) > 0 else []


def menu(queue: List[str] = None):
    crypto_controller = CryptoController(queue)
    an_input = "first"

    while True:
        # There is a command in the queue
        if crypto_controller.queue and len(crypto_controller.queue) > 0:
            if crypto_controller.queue[0] in ("q", ".."):
                if len(crypto_controller.queue) > 1:
                    return crypto_controller.queue[1:]
                return []

            an_input = crypto_controller.queue[0]
            crypto_controller.queue = crypto_controller.queue[1:]
            if an_input and an_input in crypto_controller.CHOICES_COMMANDS:
                print(f"{get_flair()} /crypto/ $ {an_input}")

        # Get input command from user
        else:
            if an_input == "first" or an_input in crypto_controller.CHOICES:
                crypto_controller.print_help()

            if session and gtff.USE_PROMPT_TOOLKIT and crypto_controller.completer:
                an_input = session.prompt(
                    f"{get_flair()} /crypto/ $ ",
                    completer=crypto_controller.completer,
                    search_ignore_case=True,
                )

            else:
                an_input = input(f"{get_flair()} /crypto/ $ ")

        try:
            crypto_controller.queue = crypto_controller.switch(an_input)

        except SystemExit:
            print(f"\nThe command '{an_input}' doesn't exist.", end="")
            similar_cmd = difflib.get_close_matches(
                an_input.split(" ")[0] if " " in an_input else an_input,
                crypto_controller.CHOICES,
                n=1,
                cutoff=0.7,
            )

            if similar_cmd:
                if " " in an_input:
                    an_input = f"{similar_cmd[0]} {' '.join(an_input.split(' ')[1:])}"
                else:
                    an_input = similar_cmd[0]
                print(f" Replacing by '{an_input}'.")
                crypto_controller.queue.insert(0, an_input)
            print("\n")
