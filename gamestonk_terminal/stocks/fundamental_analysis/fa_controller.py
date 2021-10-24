""" Fundamental Analysis Controller """
__docformat__ = "numpy"

import argparse
import os
from typing import List
from prompt_toolkit.completion import NestedCompleter

from gamestonk_terminal.stocks.fundamental_analysis.financial_modeling_prep import (
    fmp_controller,
    fmp_view,
)
from gamestonk_terminal.stocks.fundamental_analysis import (
    eclect_us_view,
    finviz_view,
    yahoo_finance_view,
    av_view,
    business_insider_view,
    dcf_view,
    market_watch_view,
)
from gamestonk_terminal import feature_flags as gtff
from gamestonk_terminal.helper_funcs import get_flair, parse_known_args_and_warn
from gamestonk_terminal.menu import session

# pylint: disable=inconsistent-return-statements


class FundamentalAnalysisController:
    """Fundamental Analysis Controller"""

    CHOICES = [
        "cls",
        "?",
        "help",
        "q",
        "quit",
    ]

    CHOICES_COMMANDS = [
        "analysis",
        "score",
        "dcf",
        "screener",
        "fraud",
        "income",
        "balance",
        "cash",
        "mgmt",
        "info",
        "shrs",
        "sust",
        "cal",
        "web",
        "hq",
        "overview",
        "key",
        "income",
        "balance",
        "cash",
        "earnings",
        "warnings",
    ]

    CHOICES_MENUS = [
        "fmp",
    ]

    CHOICES += CHOICES_COMMANDS
    CHOICES += CHOICES_MENUS

    def __init__(self, ticker: str, start: str, interval: str):
        """Constructor

        Parameters
        ----------
        ticker : str
            Fundamental analysis ticker symbol
        start : str
            Stat date of the stock data
        interval : str
            Stock data interval
        """

        self.ticker = ticker
        self.start = start
        self.interval = interval

        self.fa_parser = argparse.ArgumentParser(add_help=False, prog="fa")
        self.fa_parser.add_argument(
            "cmd",
            choices=self.CHOICES,
        )

    def print_help(self):
        """Print help"""
        intraday = (f"Intraday {self.interval}", "Daily")[self.interval == "1440min"]

        if self.start:
            help_text = f"\n\n{intraday} Stock: {self.ticker} (from {self.start.strftime('%Y-%m-%d')})"
        else:
            help_text = f"\n\n{intraday} Stock: {self.ticker}"

        help_text += """
Fundamental Analysis:
    cls           clear screen
    ?/help        show this menu again
    q             quit this menu, and shows back to main menu
    quit          quit to abandon program

    screener      screen info about the company [Finviz]
    mgmt          management team of the company [Business Insider]
    analysis      analyse SEC filings with the help of machine learning [Elect.us]
    score         investing score from Warren Buffett, Joseph Piotroski and Benjamin Graham [FMP]
    warnings      company warnings according to Sean Seah book [Market Watch]
    dcf           a customizable discounted cash flow created in excel [stockanalysis]
Yahoo Finance:
    info          information scope of the company
    shrs          shareholders of the company
    sust          sustainability values of the company
    cal           calendar earnings and estimates of the company
    web           open web browser of the company
    hq            open HQ location of the company
Alpha Vantage:
    overview      overview of the company
    key           company key metrics
    income        income statements of the company
    balance       balance sheet of the company
    cash          cash flow of the company
    earnings      earnings dates and reported EPS
    fraud         key fraud ratios
Other Sources:
>   fmp           profile,quote,enterprise,dcf,income,ratios,growth from FMP
        """
        print(help_text)
        # No longer used, but keep for future:
        # print("")
        # print("Market Watch API - DEPRECATED")
        # print("   income        income statement of the company")
        # print("   balance       balance sheet of the company")
        # print("   cash          cash flow statement of the company")

    def switch(self, an_input: str):
        """Process and dispatch input

        Returns
        -------
        True, False or None
            False - quit the menu
            True - quit the program
            None - continue in the menu
        """

        # Empty command
        if not an_input:
            print("")
            return None

        (known_args, other_args) = self.fa_parser.parse_known_args(an_input.split())

        # Help menu again
        if known_args.cmd == "?":
            self.print_help()
            return None

        # Clear screen
        if known_args.cmd == "cls":
            os.system("cls||clear")
            return None

        return getattr(
            self, "call_" + known_args.cmd, lambda: "Command not recognized!"
        )(other_args)

    def call_help(self, _):
        """Process Help command"""
        self.print_help()

    def call_q(self, _):
        """Process Q command - quit the menu"""
        return False

    def call_quit(self, _):
        """Process Quit command - quit the program"""
        return True

    def call_analysis(self, other_args: List[str]):
        """Process analysis command"""
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="analysis",
            description="""Display analysis of SEC filings based on NLP model. [Source: https://eclect.us]""",
        )
        try:
            ns_parser = parse_known_args_and_warn(parser, other_args)
            if not ns_parser:
                return

            eclect_us_view.display_analysis(self.ticker)

        except Exception as e:
            print(e, "\n")

    def call_mgmt(self, other_args: List[str]):
        """Process mgmt command"""
        business_insider_view.management(other_args, self.ticker)

    def call_screener(self, other_args: List[str]):
        """Process screener command"""
        finviz_view.screener(other_args, self.ticker)

    def call_score(self, other_args: List[str]):
        """Process score command"""
        fmp_view.valinvest_score(other_args, self.ticker)

    def call_info(self, other_args: List[str]):
        """Process info command"""
        yahoo_finance_view.info(other_args, self.ticker)

    def call_shrs(self, other_args: List[str]):
        """Process shrs command"""
        yahoo_finance_view.shareholders(other_args, self.ticker)

    def call_sust(self, other_args: List[str]):
        """Process sust command"""
        yahoo_finance_view.sustainability(other_args, self.ticker)

    def call_cal(self, other_args: List[str]):
        """Process cal command"""
        yahoo_finance_view.calendar_earnings(other_args, self.ticker)

    def call_web(self, other_args: List[str]):
        """Process web command"""
        yahoo_finance_view.web(other_args, self.ticker)

    def call_hq(self, other_args: List[str]):
        """Process hq command"""
        yahoo_finance_view.headquarters(other_args, self.ticker)

    def call_overview(self, other_args: List[str]):
        """Process overview command"""
        av_view.overview(other_args, self.ticker)

    def call_key(self, other_args: List[str]):
        """Process overview command"""
        av_view.key(other_args, self.ticker)

    def call_income(self, other_args: List[str]):
        """Process income command"""
        av_view.income_statement(other_args, self.ticker)

    def call_balance(self, other_args: List[str]):
        """Process balance command"""
        av_view.balance_sheet(other_args, self.ticker)

    def call_cash(self, other_args: List[str]):
        """Process cash command"""
        av_view.cash_flow(other_args, self.ticker)

    def call_earnings(self, other_args: List[str]):
        """Process earnings command"""
        av_view.earnings(other_args, self.ticker)

    def call_fraud(self, other_args: List[str]):
        """Process fraud command"""
        av_view.fraud(other_args, self.ticker)

    def call_dcf(self, other_args: List[str]):
        """Process dcf command"""
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="dcf",
            description="""
                Generates a completed discounted cash flow statement. The statement uses machine
                learning to predict the future financial statement, and then predicts the future
                value of the stock based on the predicted financials.""",
        )
        parser.add_argument(
            "-a",
            "--audit",
            action="store_true",
            dest="audit",
            default=False,
            help="Confirms that the numbers provided are accurate.",
        )

        try:
            ns_parser = parse_known_args_and_warn(parser, other_args)
            if not ns_parser:
                return

            dcf = dcf_view.CreateExcelFA(self.ticker, ns_parser.audit)
            dcf.create_workbook()

        except Exception as e:
            print(e, "\n")

    def call_warnings(self, other_args: List[str]):
        """Process warnings command"""
        market_watch_view.sean_seah_warnings(other_args, self.ticker)

    def call_fmp(self, _):
        """Process fmp command"""
        ret = fmp_controller.menu(self.ticker, self.start, self.interval)

        if ret is False:
            self.print_help()
        else:
            return True


def key_metrics_explained(other_args: List[str]):
    """Key metrics explained

    Parameters
    ----------
    other_args : List[str]
        argparse other args
    """
    parser = argparse.ArgumentParser(
        add_help=False,
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
        prog="info",
        description="""
            Provides information about main key metrics. Namely: EBITDA,
            EPS, P/E, PEG, FCF, P/B, ROE, DPR, P/S, Dividend Yield Ratio, D/E, and Beta.
        """,
    )

    try:
        ns_parser = parse_known_args_and_warn(parser, other_args)
        if not ns_parser:
            return

        filepath = "fundamental_analysis/key_metrics_explained.txt"
        with open(filepath) as fp:
            line = fp.readline()
            while line:
                print(f"{line.strip()}")
                line = fp.readline()
            print("")

    except Exception as e:
        print(e, "ERROR!\n")


def menu(ticker: str, start: str, interval: str):
    """Fundamental Analysis menu

    Parameters
    ----------
    ticker : str
        Fundamental analysis ticker symbol
    start : str
        Start date of the stock data
    interval : str
        Stock data interval
    """
    fa_controller = FundamentalAnalysisController(ticker, start, interval)
    fa_controller.call_help(None)

    while True:
        # Get input command from user
        if session and gtff.USE_PROMPT_TOOLKIT:
            completer = NestedCompleter.from_nested_dict(
                {c: None for c in fa_controller.CHOICES}
            )

            an_input = session.prompt(
                f"{get_flair()} (stocks)>(fa)> ",
                completer=completer,
            )
        else:
            an_input = input(f"{get_flair()} (stocks)>(fa)> ")

        try:
            process_input = fa_controller.switch(an_input)

            if process_input is not None:
                return process_input

        except SystemExit:
            print("The command selected doesn't exist\n")
            continue
