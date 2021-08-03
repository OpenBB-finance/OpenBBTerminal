"""Helper functions for scraping options data"""
__docformat__ = "numpy"

import argparse
import os
from typing import List
import configparser

import requests
import pandas as pd
import matplotlib.pyplot as plt
from tabulate import tabulate

from gamestonk_terminal.helper_funcs import (
    parse_known_args_and_warn,
    export_data,
    plot_autoscale,
)
from gamestonk_terminal.options import yfinance_model
from gamestonk_terminal import config_plot as cfp
from gamestonk_terminal import feature_flags as gtff

presets_path = os.path.join(os.path.abspath(os.path.dirname(__file__)), "presets/")


def view_available_presets(other_args: List[str]):
    """View available presets.

    Parameters
    ----------
    other_args: List[str]
        Other arguments to be parsed
    """
    parser = argparse.ArgumentParser(
        add_help=False,
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
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
        choices=[
            preset.split(".")[0]
            for preset in os.listdir(presets_path)
            if preset[-4:] == ".ini"
        ],
    )

    try:
        if other_args:
            if "-" not in other_args[0]:
                other_args.insert(0, "-p")
        ns_parser = parse_known_args_and_warn(parser, other_args)
        if not ns_parser:
            return

        if ns_parser.preset:
            preset_filter = configparser.RawConfigParser()
            preset_filter.optionxform = str  # type: ignore
            preset_filter.read(presets_path + ns_parser.preset + ".ini")

            filters_headers = ["FILTER"]

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
            presets = [
                preset.split(".")[0]
                for preset in os.listdir(presets_path)
                if preset[-4:] == ".ini"
            ]

            for preset in presets:
                with open(
                    presets_path + preset + ".ini",
                    encoding="utf8",
                ) as f:
                    description = ""
                    for line in f:
                        if line.strip() == "[FILTER]":
                            break
                        description += line.strip()
                print(f"\nPRESET: {preset}")
                print(description.split("Description: ")[1].replace("#", ""))
            print("")
    except Exception as e:
        print(e)


def screener_output(other_args: List[str]):
    """screener filter output"""
    parser = argparse.ArgumentParser(
        add_help=False,
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
        prog="scr",
        description="""Sreener filter output from https://ops.syncretism.io/index.html.
Where: CS: Contract Symbol; S: Symbol, T: Option Type; Str: Strike; Exp v: Expiration;
IV: Implied Volatility; LP: Last Price; B: Bid; A: Ask; V: Volume; OI: Open Interest;
Y: Yield; MY: Monthly Yield; SMP: Regular Market Price; SMDL: Regular Market Day Low;
SMDH: Regular Market Day High; LU: Last Trade Date; LC: Last Crawl; ITM: In The Money;
PC: Price Change; PB: Price-to-book. """,
    )
    parser.add_argument(
        "-p",
        "--preset",
        action="store",
        dest="preset",
        type=str,
        default="template",
        help="Filter presets",
        choices=[
            preset.split(".")[0]
            for preset in os.listdir(presets_path)
            if preset[-4:] == ".ini"
        ],
    )

    try:
        if other_args:
            if "-" not in other_args[0]:
                other_args.insert(0, "-p")

        ns_parser = parse_known_args_and_warn(parser, other_args)
        if not ns_parser:
            return

        d_cols = {
            "contractSymbol": "CS",
            "symbol": "S",
            "optType": "T",
            "strike": "Str",
            "expiration": "Exp ∨",
            "impliedVolatility": "IV",
            "lastPrice": "LP",
            "bid": "B",
            "ask": "A",
            "volume": "V",
            "openInterest": "OI",
            "yield": "Y",
            "monthlyyield": "MY",
            "regularMarketPrice": "SMP",
            "regularMarketDayLow": "SMDL",
            "regularMarketDayHigh": "SMDH",
            "lastTradeDate": "LU",
            "lastCrawl": "LC",
            "inTheMoney": "ITM",
            "pChange": "PC",
            "priceToBook": "PB",
        }

        preset_filter = configparser.RawConfigParser()
        preset_filter.optionxform = str  # type: ignore
        preset_filter.read(presets_path + ns_parser.preset + ".ini")

        d_filters = {k: v for k, v in dict(preset_filter["FILTER"]).items() if v}
        s_filters = str(d_filters)
        s_filters = s_filters.replace(": '", ": ").replace("',", ",").replace("'}", "}")
        s_filters = s_filters.replace("'", '"')
        errors = check_presets(d_filters)
        if errors:
            print(errors, "\n")
            return
        link = "https://api.syncretism.io/ops"

        res = requests.get(
            link, headers={"Content-type": "application/json"}, data=s_filters
        )

        if res.status_code == 200:
            df_res = pd.DataFrame(res.json())

            if df_res.empty:
                print(f"No options data found for preset: {ns_parser.preset}", "\n")
                return

            df_res = df_res.rename(columns=d_cols)[list(d_cols.values())[:17]]
            df_res["Exp ∨"] = df_res["Exp ∨"].apply(
                lambda x: pd.to_datetime(x, unit="s").strftime("%m-%d-%y")
            )
            df_res["LU"] = df_res["LU"].apply(
                lambda x: pd.to_datetime(x, unit="s").strftime("%m-%d-%y")
            )
            print(
                tabulate(
                    df_res,
                    headers=df_res.columns,
                    showindex=False,
                    tablefmt="fancy_grid",
                )
            )
        else:
            print("Wrong arguments specified. Error " + str(res.status_code))
        print("")

    except Exception as e:
        print(e, "\n")


def check_presets(preset_dict: dict):
    """Checks option screener preset values

    Parameters
    ----------
    preset_dict: dict
        Defined presets from configparser
    Returns
    -------
    error: str
        String of all errors accumulated
    """
    float_list = [
        "min-diff",
        "max-diff",
        "min-ask-bid",
        "max-ask-bid",
        "min-exp",
        "max-exp",
        "min-price",
        "max-price",
        "min-price-20d",
        "max-price-20d",
        "min-volume-20d",
        "max-volume-20d",
        "min-iv-20d",
        "max-iv-20d",
        "min-delta-20d",
        "max-delta-20d",
        "min-gamma-20d",
        "max-gamma-20d",
        "min-theta-20d",
        "max-theta-20d",
        "min-vega-20d",
        "max-vega-20d",
        "min-rho-20d",
        "max-rho-20d",
        "min-price-100d",
        "max-price-100d",
        "min-volume-100d",
        "max-volume-100d",
        "min-iv-100d",
        "max-iv-100d",
        "min-delta-100d",
        "max-delta-100d",
        "min-gamma-100d",
        "max-gamma-100d",
        "min-theta-100d",
        "max-theta-100d",
        "min-vega-100d",
        "max-vega-100d",
        "min-rho-100d",
        "max-rho-100d",
        "min-sto",
        "max-sto",
        "min-yield",
        "max-yield",
        "min-myield",
        "max-myield",
        "min-delta",
        "max-delta",
        "min-gamma",
        "max-gamma",
        "min-theta",
        "max-theta",
        "min-vega",
        "max-vega",
        "min-cap",
        "max-cap",
    ]
    bool_list = ["active", "stock", "etf", "puts", "calls", "itm", "otm", "exclude"]
    error = ""
    for key, value in preset_dict.items():
        if key in float_list:
            try:
                float(value)
                if value.startswith("."):
                    error += f"{key} : {value} needs to be formatted with leading 0\n"
            except Exception:
                error += f"{key} : {value}, should be float\n"

        elif key in bool_list:
            if value not in ["true", "false"]:
                error += f"{key} : {value},  Should be [true/false]\n"

        elif key == "tickers":
            if value[0] != '"':
                error += f'{key} : {value}, ticker should have quotes "AAPL" \n'
            else:
                try:
                    for ticker in value.split(","):
                        if ticker[0] != '"':
                            error += f'{key} : {ticker}, all tickers should have quotes "AAPL","GME" \n'
                except Exception:
                    error += f"Error splitting tickers: {value} \n"

        elif key == "limit":
            try:
                int(value)
            except Exception:
                error += f"{key} : {value} , should be integer\n"

        elif key == "order-by":
            accepted_orders = [
                "e_desc",
                "e_asc",
                "iv_desc",
                "iv_asc",
                "md_desc",
                "md_asc",
                "lp_desc",
                "lp_asc",
            ]
            if value not in accepted_orders:
                error += f"{key} : {value} not accepted ordering\n"

    if "itm" in preset_dict.keys() and "otm" in preset_dict.keys():
        if preset_dict["itm"] == preset_dict["otm"]:
            error += "Check otm/itm.  Both can't be the same value\n"

    return error


possible_greeks = [
    "iv",
    "gamma",
    "theta",
    "vega",
    "delta",
    "rho",
    "premium",
]


def check_valid_option_greek_header(headers: str) -> List[str]:
    """Check valid greek selection

    Parameters
    ----------
    headers : str
        Option chains headers

    Returns
    ----------
    List[str]
        List of columns string
    """
    columns = [str(item) for item in headers.split(",")]

    for header in columns:
        if header not in possible_greeks:
            raise argparse.ArgumentTypeError("Invalid option chains header selected!")

    return columns


def historical_greeks(ticker: str, expiry: str, other_args: List[str]):
    """Get historical greeks

    Parameters
    ----------
    ticker: str
        Ticker
    expiry: str
        Expiration date
    other_args: List[str]
        Argparse arguments
    """

    parser = argparse.ArgumentParser(
        add_help=False,
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
        prog="grhist",
        description="Plot historical option greeks.",
    )

    parser.add_argument(
        "-s",
        "--strike",
        dest="strike",
        type=float,
        required="--chain" not in other_args or "-h" not in other_args,
        help="Strike price to look at",
    )
    parser.add_argument(
        "--put",
        dest="put",
        action="store_true",
        default=False,
        help="Flag for showing put option",
    )

    parser.add_argument(
        "-g",
        "--greek",
        dest="greek",
        type=str,
        choices=possible_greeks,
        default="delta",
        help="Greek column to select",
    )

    parser.add_argument("--chain", dest="chain_id", type=str, help="OCC option symbol")

    parser.add_argument(
        "--raw", dest="raw", action="store_true", default=False, help="Display raw data"
    )

    parser.add_argument(
        "--export",
        choices=["csv", "json", "xlsx"],
        default="",
        dest="export",
        help="Export dataframe data to csv,json,xlsx file",
    )

    try:
        ns_parser = parse_known_args_and_warn(parser, other_args)
        if not ns_parser:
            return

        if not ns_parser.chain_id:
            options = yfinance_model.get_option_chain(ticker, expiry)

            if ns_parser.put:
                options = options.puts
            else:
                options = options.calls

            chain_id = options.loc[
                options.strike == ns_parser.strike, "contractSymbol"
            ].values[0]
        else:
            chain_id = ns_parser.chain_id

        r = requests.get(f"https://api.syncretism.io/ops/historical/{chain_id}")

        if r.status_code != 200:
            print("Error in request.")
            return

        history = r.json()

        iv, delta, gamma, theta, rho, vega, premium, price, time = (
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
        )

        for entry in history:

            time.append(pd.to_datetime(entry["timestamp"], unit="s"))
            iv.append(entry["impliedVolatility"])
            gamma.append(entry["gamma"])
            delta.append(entry["delta"])
            theta.append(entry["theta"])
            rho.append(entry["rho"])
            vega.append(entry["vega"])
            premium.append(entry["premium"])
            price.append(entry["regularMarketPrice"])

        data = {
            "iv": iv,
            "gamma": gamma,
            "delta": delta,
            "theta": theta,
            "rho": rho,
            "vega": vega,
            "premium": premium,
            "price": price,
        }

        df = pd.DataFrame(data, index=time)

        if ns_parser.raw:
            print(df.tail(20))
        if ns_parser.export:
            export_data(
                ns_parser.export,
                os.path.dirname(os.path.abspath(__file__)),
                f"historical_greek_{ticker}_{expiry}_{ns_parser.greek}_{str(ns_parser.strike).replace('.', 'p')}"
                f"_{['Call','Put'][ns_parser.put]}",
                df,
            )
        fig, ax = plt.subplots(figsize=plot_autoscale(), dpi=cfp.PLOT_DPI)
        im1 = ax.plot(time, df[ns_parser.greek], c="firebrick", label=ns_parser.greek)
        ax.set_ylabel(ns_parser.greek)
        ax1 = ax.twinx()
        im2 = ax1.plot(time, price, c="dodgerblue", label="Stock Price")
        ax1.set_ylabel(f"{ticker} Price")
        ax1.set_xlabel("Date")
        ax.grid("on")
        ax.set_title(
            f"{ns_parser.greek} historical for {ticker.upper()} {ns_parser.strike} {['Call','Put'][ns_parser.put]}"
        )
        plt.gcf().autofmt_xdate()

        if gtff.USE_ION:
            plt.ion()

        ims = im1 + im2
        labels = [lab.get_label() for lab in ims]
        plt.legend(ims, labels, loc=0)
        fig.tight_layout(pad=1)
        plt.show()
        print("")

    except Exception as e:
        print(e, "\n")
