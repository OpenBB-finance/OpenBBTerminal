"""Insider Controller Module"""
__docformat__ = "numpy"

import os
import argparse
import difflib
import configparser
from typing import List, Union
import pandas as pd
from colorama import Style
from prompt_toolkit.completion import NestedCompleter
from gamestonk_terminal.helper_funcs import (
    get_flair,
    parse_known_args_and_warn,
    check_positive,
    try_except,
    system_clear,
)
from gamestonk_terminal.menu import session
from gamestonk_terminal import feature_flags as gtff
from gamestonk_terminal.stocks import stocks_helper
from gamestonk_terminal.stocks.insider import (
    openinsider_view,
    businessinsider_view,
    finviz_view,
)

presets_path = os.path.join(os.path.abspath(os.path.dirname(__file__)), "presets/")

# pylint: disable=inconsistent-return-statements,too-many-public-methods


class InsiderController:
    """Screener Controller class"""

    CHOICES = [
        "cls",
        "home",
        "h",
        "?",
        "help",
        "q",
        "quit",
        "..",
        "exit",
        "r",
        "reset",
    ]
    CHOICES_COMMANDS = [
        "load",
        "view",
        "set",
        "filter",
        "lcb",
        "lpsb",
        "lit",
        "lip",
        "blip",
        "blop",
        "blcp",
        "lis",
        "blis",
        "blos",
        "blcs",
        "topt",
        "toppw",
        "toppm",
        "tipt",
        "tippw",
        "tippm",
        "tist",
        "tispw",
        "tispm",
        "act",
        "lins",
    ]
    CHOICES += CHOICES_COMMANDS

    preset_choices = [
        preset.split(".")[0]
        for preset in os.listdir(presets_path)
        if preset[-4:] == ".ini"
    ]

    def __init__(
        self,
        ticker: str,
        start: str,
        interval: str,
        stock: pd.DataFrame,
        queue: List[str] = None,
    ):
        """Constructor"""
        self.insider_parser = argparse.ArgumentParser(add_help=False, prog="ins")
        self.insider_parser.add_argument(
            "cmd",
            choices=self.CHOICES,
        )

        self.completer: Union[None, NestedCompleter] = None

        if session and gtff.USE_PROMPT_TOOLKIT:
            choices: dict = {c: {} for c in self.CHOICES}
            self.completer = NestedCompleter.from_nested_dict(choices)

        if queue:
            self.queue = queue
        else:
            self.queue = list()

        self.ticker = ticker
        self.start = start
        self.interval = interval
        self.stock = stock

        self.preset = "whales"

    def print_help(self):
        """Print help"""
        help_text = f"""
    view          view available presets
    set           set one of the available presets

PRESET: {self.preset}

    filter        filter insiders based on preset

Latest Insiders:
    lcb           latest cluster boys
    lpsb          latest penny stock buys
    lit           latest insider trading (all filings)
    lip           latest insider purchases
    blip          big latest insider purchases ($25k+)
    blop          big latest officer purchases ($25k+)
    blcp          big latest CEO/CFO purchases ($25k+)
    lis           latest insider sales
    blis          big latest insider sales ($100k+)
    blos          big latest officer sales ($100k+)
    blcs          big latest CEO/CFO sales ($100k+)
Top Insiders:
    topt          top officer purchases today
    toppw         top officer purchases past week
    toppm         top officer purchases past month
    tipt          top insider purchases today
    tippw         top insider purchases past week
    tippm         top insider purchases past month
    tist          top insider sales today
    tispw         top insider sales past week
    tispm         top insider sales past month

    load          load a specific stock ticker for analysis
{Style.DIM if not self.ticker else ''}
Ticker: {self.ticker}

    act           insider activity over time [Business Insider]
    lins          last insider trading of the company [Finviz]
{Style.RESET_ALL if not self.ticker else ''}"""
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
            return self.queue

        # Navigation slash is being used
        if "/" in an_input:
            actions = an_input.split("/")

            # Absolute path is specified
            if not actions[0]:
                an_input = "home"
            # Relative path so execute first instruction
            else:
                an_input = actions[0]

            # Add all instructions to the queue
            for cmd in actions[1:][::-1]:
                if cmd:
                    self.queue.insert(0, cmd)

        (known_args, other_args) = self.insider_parser.parse_known_args(
            an_input.split()
        )

        # Redirect commands to their correct functions
        if known_args.cmd:
            if known_args.cmd in ("..", "q"):
                known_args.cmd = "quit"
            elif known_args.cmd in ("?", "h"):
                known_args.cmd = "help"
            elif known_args.cmd == "r":
                known_args.cmd = "reset"

        return getattr(
            self,
            "call_" + known_args.cmd,
            lambda _: "Command not recognized!",
        )(other_args)

    def call_cls(self, _):
        """Process cls command"""
        system_clear()
        return self.queue

    def call_home(self, _):
        """Process home command"""
        self.queue.insert(0, "quit")
        self.queue.insert(0, "quit")
        return self.queue

    def call_help(self, _):
        """Process help command"""
        self.print_help()
        return self.queue

    def call_quit(self, _):
        """Process quit menu command"""
        print("")
        if len(self.queue) > 0:
            self.queue.insert(0, "quit")
            return self.queue
        return ["quit"]

    def call_exit(self, _):
        """Process exit terminal command"""
        if len(self.queue) > 0:
            self.queue.insert(0, "quit")
            self.queue.insert(0, "quit")
            self.queue.insert(0, "quit")
            return self.queue
        return ["quit", "quit", "quit"]

    def call_reset(self, _):
        """Process reset command"""
        if len(self.queue) > 0:
            if self.ticker:
                self.queue.insert(0, f"load {self.ticker}")
            self.queue.insert(0, "ins")
            self.queue.insert(0, "options")
            self.queue.insert(0, "stocks")
            self.queue.insert(0, "reset")
            self.queue.insert(0, "quit")
            self.queue.insert(0, "quit")
            self.queue.insert(0, "quit")
            return self.queue

        reset_commands = ["quit", "quit", "quit", "reset", "stocks", "options", "ins"]
        if self.ticker:
            reset_commands.append(f"load {self.ticker}")

        return reset_commands

    @try_except
    def call_load(self, other_args: List[str]):
        """Process load command"""
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="load",
            description="Load stock ticker to perform analysis on. When the data source is 'yf', an Indian ticker can be"
            " loaded by using '.NS' at the end, e.g. 'SBIN.NS'. See available market in"
            " https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html.",
        )
        parser.add_argument(
            "-t",
            "--ticker",
            action="store",
            dest="ticker",
            required="-h" not in other_args,
            help="Stock ticker",
        )
        if other_args and "-" not in other_args[0]:
            other_args.insert(0, "-t")
        ns_parser = parse_known_args_and_warn(parser, other_args)
        if ns_parser:
            df_stock_candidate = stocks_helper.load(
                ns_parser.ticker,
            )
            if not df_stock_candidate.empty:
                if "." in ns_parser.ticker:
                    self.ticker = ns_parser.ticker.upper().split(".")[0]
                else:
                    self.ticker = ns_parser.ticker.upper()

        return self.queue

    @try_except
    def call_view(self, other_args: List[str]):
        """Process view command"""
        parser = argparse.ArgumentParser(
            add_help=False,
            prog="view",
            description="""View available presets under presets folder.""",
        )
        parser.add_argument(
            "-p",
            "--preset",
            action="store",
            dest="preset",
            type=str,
            help="View specific preset",
            default="",
            choices=self.preset_choices,
        )

        if other_args and "-" not in other_args[0]:
            other_args.insert(0, "-p")
        ns_parser = parse_known_args_and_warn(parser, other_args)
        if ns_parser:
            if ns_parser.preset:
                preset_filter = configparser.RawConfigParser()
                preset_filter.optionxform = str  # type: ignore
                preset_filter.read(presets_path + ns_parser.preset + ".ini")

                filters_headers = [
                    "General",
                    "Date",
                    "TransactionFiling",
                    "Industry",
                    "InsiderTitle",
                    "Others",
                    "CompanyTotals",
                ]

                print("")
                for filter_header in filters_headers:
                    print(f" - {filter_header} -")
                    d_filters = {**preset_filter[filter_header]}
                    d_filters = {k: v for k, v in d_filters.items() if v}
                    if d_filters:
                        max_len = len(max(d_filters, key=len))
                        for key, value in d_filters.items():
                            print(f"{key}{(max_len-len(key))*' '}: {value}")
                    print("")

            else:
                for preset in self.preset_choices:
                    with open(
                        presets_path + preset + ".ini",
                        encoding="utf8",
                    ) as f:
                        description = ""
                        for line in f:
                            if line.strip() == "[General]":
                                break
                            description += line.strip()
                    print(f"\nPRESET: {preset}")
                    print(description.split("Description: ")[1].replace("#", ""))
                print("")

        return self.queue

    @try_except
    def call_set(self, other_args: List[str]):
        """Process set command"""
        parser = argparse.ArgumentParser(
            add_help=False,
            prog="set",
            description="""Set preset from under presets folder.""",
        )
        parser.add_argument(
            "-p",
            "--preset",
            action="store",
            dest="preset",
            type=str,
            default="template",
            help="Filter presets",
            choices=self.preset_choices,
        )

        if other_args and "-" not in other_args[0]:
            other_args.insert(0, "-p")

        ns_parser = parse_known_args_and_warn(parser, other_args)
        if ns_parser:
            self.preset = ns_parser.preset
            print("")

        return self.queue

    @try_except
    def call_filter(self, other_args: List[str]):
        """Process filter command"""
        openinsider_view.print_insider_filter(other_args, self.preset)

        return self.queue

    @try_except
    def call_lcb(self, other_args: List[str]):
        """Process latest-cluster-buys"""
        openinsider_view.print_insider_data(other_args, "lcb")

        return self.queue

    @try_except
    def call_lpsb(self, other_args: List[str]):
        """Process latest-penny-stock-buys"""
        openinsider_view.print_insider_data(other_args, "lpsb")

        return self.queue

    @try_except
    def call_lit(self, other_args: List[str]):
        """Process latest-insider-trading"""
        openinsider_view.print_insider_data(other_args, "lit")

        return self.queue

    @try_except
    def call_lip(self, other_args: List[str]):
        """Process insider-purchases"""
        openinsider_view.print_insider_data(other_args, "lip")

        return self.queue

    @try_except
    def call_blip(self, other_args: List[str]):
        """Process latest-insider-purchases-25k"""
        openinsider_view.print_insider_data(other_args, "blip")

        return self.queue

    @try_except
    def call_blop(self, other_args: List[str]):
        """Process latest-officer-purchases-25k"""
        openinsider_view.print_insider_data(other_args, "blop")

        return self.queue

    @try_except
    def call_blcp(self, other_args: List[str]):
        """Process latest-ceo-cfo-purchases-25k"""
        openinsider_view.print_insider_data(other_args, "blcp")

        return self.queue

    @try_except
    def call_lis(self, other_args: List[str]):
        """Process insider-sales"""
        openinsider_view.print_insider_data(other_args, "lis")

        return self.queue

    @try_except
    def call_blis(self, other_args: List[str]):
        """Process latest-insider-sales-100k"""
        openinsider_view.print_insider_data(other_args, "blis")

        return self.queue

    @try_except
    def call_blos(self, other_args: List[str]):
        """Process latest-officer-sales-100k"""
        openinsider_view.print_insider_data(other_args, "blos")

        return self.queue

    @try_except
    def call_blcs(self, other_args: List[str]):
        """Process latest-ceo-cfo-sales-100k"""
        openinsider_view.print_insider_data(other_args, "blcs")

        return self.queue

    @try_except
    def call_topt(self, other_args: List[str]):
        """Process top-officer-purchases-of-the-day"""
        openinsider_view.print_insider_data(other_args, "topt")

        return self.queue

    @try_except
    def call_toppw(self, other_args: List[str]):
        """Process top-officer-purchases-of-the-week"""
        openinsider_view.print_insider_data(other_args, "toppw")

        return self.queue

    @try_except
    def call_toppm(self, other_args: List[str]):
        """Process top-officer-purchases-of-the-month"""
        openinsider_view.print_insider_data(other_args, "toppm")

        return self.queue

    @try_except
    def call_tipt(self, other_args: List[str]):
        """Process top-insider-purchases-of-the-day"""
        openinsider_view.print_insider_data(other_args, "tipt")

        return self.queue

    @try_except
    def call_tippw(self, other_args: List[str]):
        """Process top-insider-purchases-of-the-week"""
        openinsider_view.print_insider_data(other_args, "tippw")

        return self.queue

    @try_except
    def call_tippm(self, other_args: List[str]):
        """Process top-insider-purchases-of-the-month"""
        openinsider_view.print_insider_data(other_args, "tippm")

        return self.queue

    @try_except
    def call_tist(self, other_args: List[str]):
        """Process top-insider-sales-of-the-day"""
        openinsider_view.print_insider_data(other_args, "tist")

        return self.queue

    @try_except
    def call_tispw(self, other_args: List[str]):
        """Process top-insider-sales-of-the-week"""
        openinsider_view.print_insider_data(other_args, "tispw")

        return self.queue

    @try_except
    def call_tispm(self, other_args: List[str]):
        """Process top-insider-sales-of-the-month"""
        openinsider_view.print_insider_data(other_args, "tispm")

        return self.queue

    @try_except
    def call_act(self, other_args: List[str]):
        """Process act command"""
        parser = argparse.ArgumentParser(
            add_help=False,
            prog="act",
            description="""Prints insider activity over time [Source: Business Insider]""",
        )
        parser.add_argument(
            "-n",
            "--num",
            action="store",
            dest="n_num",
            type=check_positive,
            default=10,
            help="number of latest insider activity.",
        )
        parser.add_argument(
            "--raw",
            action="store_true",
            default=False,
            dest="raw",
            help="Print raw data.",
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
            if "-" not in other_args[0]:
                other_args.insert(0, "-n")

        ns_parser = parse_known_args_and_warn(parser, other_args)
        if not ns_parser:
            return

        if not self.ticker:
            print("No ticker loaded.  First use `load {ticker}` \n")
            return

        businessinsider_view.insider_activity(
            stock=self.stock,
            ticker=self.ticker,
            start=self.start,
            interval=self.interval,
            num=ns_parser.n_num,
            raw=ns_parser.raw,
            export=ns_parser.export,
        )

    @try_except
    def call_lins(self, other_args: List[str]):
        """Process lins command"""
        parser = argparse.ArgumentParser(
            add_help=False,
            prog="lins",
            description="""
                Prints information about inside traders. The following fields are expected: Date, Relationship,
                Transaction, #Shares, Cost, Value ($), #Shares Total, Insider Trading, SEC Form 4. [Source: Finviz]
            """,
        )
        parser.add_argument(
            "-n",
            "--num",
            action="store",
            dest="n_num",
            type=check_positive,
            default=10,
            help="number of latest inside traders.",
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

        if not self.ticker:
            print("No ticker loaded.  First use `load {ticker}` \n")
            return

        finviz_view.last_insider_activity(
            ticker=self.ticker,
            num=ns_parser.n_num,
            export=ns_parser.export,
        )


def menu(
    ticker: str, start: str, interval: str, stock: pd.DataFrame, queue: List[str] = None
):
    """Insider Menu"""
    ins_controller = InsiderController(ticker, start, interval, stock, queue)
    an_input = "HELP_ME"

    while True:
        # There is a command in the queue
        if ins_controller.queue and len(ins_controller.queue) > 0:
            # If the command is quitting the menu we want to return in here
            if ins_controller.queue[0] in ("q", "..", "quit"):
                print("")
                if len(ins_controller.queue) > 1:
                    return ins_controller.queue[1:]
                return []

            # Consume 1 element from the queue
            an_input = ins_controller.queue[0]
            ins_controller.queue = ins_controller.queue[1:]

            # Print the current location because this was an instruction and we want user to know what was the action
            if an_input and an_input in ins_controller.CHOICES_COMMANDS:
                print(f"{get_flair()} /stocks/ins/ $ {an_input}")

        # Get input command from user
        else:
            # Display help menu when entering on this menu from a level above
            if an_input == "HELP_ME":
                ins_controller.print_help()

            # Get input from user using auto-completion
            if session and gtff.USE_PROMPT_TOOLKIT and ins_controller.completer:
                an_input = session.prompt(
                    f"{get_flair()} /stocks/ins/ $ ",
                    completer=ins_controller.completer,
                    search_ignore_case=True,
                )
            # Get input from user without auto-completion
            else:
                an_input = input(f"{get_flair()} /stocks/ins/ $ ")

        try:
            # Process the input command
            ins_controller.queue = ins_controller.switch(an_input)

        except SystemExit:
            print(
                f"\nThe command '{an_input}' doesn't exist on the /stocks/ins menu.",
                end="",
            )
            similar_cmd = difflib.get_close_matches(
                an_input.split(" ")[0] if " " in an_input else an_input,
                ins_controller.CHOICES,
                n=1,
                cutoff=0.7,
            )
            if similar_cmd:
                if " " in an_input:
                    candidate_input = (
                        f"{similar_cmd[0]} {' '.join(an_input.split(' ')[1:])}"
                    )
                    if candidate_input == an_input:
                        an_input = ""
                        ins_controller.queue = []
                        print("\n")
                        continue
                    an_input = candidate_input
                else:
                    an_input = similar_cmd[0]

                print(f" Replacing by '{an_input}'.")
                ins_controller.queue.insert(0, an_input)
            else:
                print("\n")
