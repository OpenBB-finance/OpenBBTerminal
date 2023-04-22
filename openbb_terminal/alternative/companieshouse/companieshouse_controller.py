"""Companies House Controller."""
__docformat__ = "numpy"

import argparse
import logging
from typing import List, Optional

from openbb_terminal.alternative.companieshouse import companieshouse_view
from openbb_terminal.core.session.current_user import get_current_user
from openbb_terminal.custom_prompt_toolkit import NestedCompleter
from openbb_terminal.decorators import log_start_end
from openbb_terminal.helper_funcs import (
    EXPORT_ONLY_RAW_DATA_ALLOWED,
    check_positive,
)
from openbb_terminal.menu import session
from openbb_terminal.parent_classes import BaseController
from openbb_terminal.rich_config import MenuText, console

logger = logging.getLogger(__name__)


class CompaniesHouseController(BaseController):

    """Companies House Controller class."""

    CHOICES_COMMANDS = [
        "search",
        "load",
        "officers",
        "signifcontrol",
        "filings",
        "filingdocument",
    ]
    PATH = "/alternative/companieshouse/"
    CHOICES_GENERATION = True

    def __init__(self, queue: Optional[List[str]] = None):
        """Construct Data."""
        super().__init__(queue)

        self.companyNo = ""
        self.companyName = ""
        if session and get_current_user().preferences.USE_PROMPT_TOOLKIT:
            choices: dict = self.choices_default
            self.completer = NestedCompleter.from_nested_dict(choices)

    def print_help(self):
        """Print help"""
        company_string = (
            f"{self.companyNo} ({self.companyName})" if self.companyNo else ""
        )

        mt = MenuText("alternative/companieshouse/")
        mt.add_param("_company", company_string)
        mt.add_raw("\n")
        mt.add_cmd("search")
        mt.add_cmd("load")
        mt.add_cmd("officers")
        mt.add_cmd("signifcontrol")
        mt.add_cmd("filings")
        mt.add_cmd("filingdocument")

        console.print(text=mt.menu_text, menu="UK Companies House Data")

    @log_start_end(log=logger)
    def call_search(self, other_args: List[str]):
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="search",
            description="Select the company name to search for. [Source: UK Companies House]",
        )
        parser.add_argument(
            "-n",
            "--name",
            help="name",
            type=str.upper,
            required="-h" not in other_args,
            dest="name",
            metavar="name",
            nargs="+",
        )

        parser.add_argument(
            "-l",
            "--limit",
            help="Number of entries to return",
            type=check_positive,
            required=False,
            dest="limit",
            metavar="limit",
            default=20,
        )

        if (
            other_args
            and "-n" not in other_args[0]
            and "--name" not in other_args[0]
            and "-h" not in other_args
        ):
            other_args.insert(0, "-n")

        ns_parser = self.parse_known_args_and_warn(
            parser, other_args, EXPORT_ONLY_RAW_DATA_ALLOWED
        )

        if ns_parser:
            if ns_parser.name:
                query = " ".join(ns_parser.name)
                companieshouse_view.display_search(
                    query, ns_parser.limit, export=ns_parser.export
                )
            else:
                console.print("[red]No entries found for search string[/red]\n")

    @log_start_end(log=logger)
    def call_load(self, other_args: List[str]):
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="load",
            description="Select the company number to get detailed info on. [Source: UK Companies House]",
        )
        parser.add_argument(
            "-c",
            "--companyNo",
            help="companyNo",
            type=str.upper,
            required="-h" not in other_args,
            dest="companyNo",
            metavar="companyNo",
        )

        if (
            other_args
            and "-c" not in other_args[0]
            and "--companyNo" not in other_args[0]
            and "-h" not in other_args
        ):
            other_args.insert(0, "-c")

        ns_parser = self.parse_known_args_and_warn(
            parser, other_args, EXPORT_ONLY_RAW_DATA_ALLOWED
        )

        if ns_parser and ns_parser.companyNo:
            self.companyNo = ns_parser.companyNo
            company = companieshouse_view.display_company_info(
                ns_parser.companyNo, export=ns_parser.export
            )
            if company.dataAvailable():
                self.companyName = company.name
                console.print(company.name)
                console.print(company.address)
                console.print(company.lastAccounts)
            else:
                console.print(
                    f"[red]No data found for company number {ns_parser.companyNo}[/red]\n"
                )

    @log_start_end(log=logger)
    def call_officers(self, other_args: List[str]):
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="officers",
            description="Select the company number to retrieve officers for. [Source: UK Companies House]",
        )
        parser.add_argument(
            "-c",
            "--companyNo",
            help="companyNo",
            type=str.upper,
            action="store",
            required=("-h" not in other_args) and not self.companyNo,
            dest="companyNo",
            metavar="companyNo",
        )

        if (
            other_args
            and "-c" not in other_args[0]
            and "--companyNo" not in other_args[0]
            and "-h" not in other_args
        ):
            other_args.insert(0, "-c")

        ns_parser = self.parse_known_args_and_warn(
            parser, other_args, EXPORT_ONLY_RAW_DATA_ALLOWED
        )

        if ns_parser:
            companyNo = ns_parser.companyNo if ns_parser.companyNo else self.companyNo
            companieshouse_view.display_officers(companyNo, export=ns_parser.export)

    @log_start_end(log=logger)
    def call_signifcontrol(self, other_args: List[str]):
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="signifcontrol",
            description="Select the company number to retrieve persons with significant control of company. \
            [Source: UK Companies House]",
        )
        parser.add_argument(
            "-c",
            "--companyNo",
            help="companyNo",
            type=str.upper,
            action="store",
            required=("-h" not in other_args) and not self.companyNo,
            dest="companyNo",
            metavar="companyNo",
        )

        if (
            other_args
            and "-c" not in other_args[0]
            and "--companyNo" not in other_args[0]
            and "-h" not in other_args
        ):
            other_args.insert(0, "-c")

        ns_parser = self.parse_known_args_and_warn(
            parser, other_args, EXPORT_ONLY_RAW_DATA_ALLOWED
        )

        if ns_parser:
            companyNo = ns_parser.companyNo if ns_parser.companyNo else self.companyNo
            # if ns_parser.companyNo:
            companieshouse_view.display_persons_with_significant_control(
                companyNo, export=ns_parser.export
            )
            # else:
            #     console.print("[red]No data found for company number[/red]\n")

    @log_start_end(log=logger)
    def call_filings(self, other_args: List[str]):
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="signifcontrol",
            description="Select the company number to retrieve filling history for. [Source: UK Companies House]",
        )
        parser.add_argument(
            "-c",
            "--companyNo",
            help="companyNo",
            type=str.upper,
            action="store",
            required=("-h" not in other_args) and not self.companyNo,
            dest="companyNo",
            metavar="companyNo",
        )

        if (
            other_args
            and "-c" not in other_args[0]
            and "--companyNo" not in other_args[0]
            and "-h" not in other_args
        ):
            other_args.insert(0, "-c")

        ns_parser = self.parse_known_args_and_warn(
            parser, other_args, EXPORT_ONLY_RAW_DATA_ALLOWED
        )

        if ns_parser:
            companyNo = ns_parser.companyNo if ns_parser.companyNo else self.companyNo
            companieshouse_view.display_filings(companyNo, export=ns_parser.export)

    @log_start_end(log=logger)
    def call_filingdocument(self, other_args: List[str]):
        parser = argparse.ArgumentParser(
            add_help=False,
            formatter_class=argparse.ArgumentDefaultsHelpFormatter,
            prog="signifcontrol",
            description="Select the company number and transaction ID to retrieve filling history for. \
            [Source: UK Companies House]",
        )

        parser.add_argument(
            "-t",
            "--transactionID",
            help="transactionID",
            action="store",
            required=("-h" not in other_args),
            dest="transactionID",
            metavar="transactionID",
        )

        if (
            other_args
            and "-t" not in other_args[0]
            and "--transactionID" not in other_args[0]
            and "-h" not in other_args
        ):
            other_args.insert(0, "-t")

        ns_parser = self.parse_known_args_and_warn(
            parser, other_args, EXPORT_ONLY_RAW_DATA_ALLOWED
        )

        if self.companyNo:
            if ns_parser:
                companieshouse_view.download_filing_document(
                    self.companyNo,
                    self.companyName,
                    ns_parser.transactionID,
                    export=ns_parser.export,
                )
        else:
            console.print("[red]Load companyNo first[/red]\n")
