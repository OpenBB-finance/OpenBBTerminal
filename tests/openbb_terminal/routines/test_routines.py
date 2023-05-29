from typing import List

import pytest
from freezegun import freeze_time

from openbb_terminal.routine_functions import (
    match_and_return_openbb_keyword_date,
    parse_openbb_script,
)


def cleanup_script(script: str) -> List[str]:
    raw_lines = [x for x in script.split("\n") if ("#" not in x) and x]
    raw_lines = [raw_line.strip("\n") for raw_line in raw_lines if raw_line.strip("\n")]
    return raw_lines


@freeze_time("2023-05-17")
def test_days_ago():
    assert match_and_return_openbb_keyword_date("$1DAYSAGO") == "2023-05-16"
    assert match_and_return_openbb_keyword_date("$10DAYSAGO") == "2023-05-07"
    assert match_and_return_openbb_keyword_date("$-5DAYSAGO") == ""


@freeze_time("2023-05-17")
def test_months_ago():
    assert match_and_return_openbb_keyword_date("$1MONTHSAGO") == "2023-04-17"
    assert match_and_return_openbb_keyword_date("$10MONTHSAGO") == "2022-07-17"
    assert match_and_return_openbb_keyword_date("$-5MONTHSAGO") == ""


@freeze_time("2023-05-17")
def test_years_ago():
    assert match_and_return_openbb_keyword_date("$1YEARSAGO") == "2022-05-17"
    assert match_and_return_openbb_keyword_date("$10YEARSAGO") == "2013-05-17"
    assert match_and_return_openbb_keyword_date("$-5YEARSAGO") == ""


@freeze_time("2023-05-17")
def test_days_from_now():
    assert match_and_return_openbb_keyword_date("$1DAYSFROMNOW") == "2023-05-18"
    assert match_and_return_openbb_keyword_date("$10DAYSFROMNOW") == "2023-05-27"
    assert match_and_return_openbb_keyword_date("$-5DAYSFROMNOW") == ""


@freeze_time("2023-05-17")
def test_months_from_now():
    assert match_and_return_openbb_keyword_date("$1MONTHSFROMNOW") == "2023-06-17"
    assert match_and_return_openbb_keyword_date("$10MONTHSFROMNOW") == "2024-03-17"
    assert match_and_return_openbb_keyword_date("$-5MONTHSFROMNOW") == ""


@freeze_time("2023-05-17")
def test_years_from_now():
    assert match_and_return_openbb_keyword_date("$1YEARSFROMNOW") == "2024-05-17"
    assert match_and_return_openbb_keyword_date("$10YEARSFROMNOW") == "2033-05-17"
    assert match_and_return_openbb_keyword_date("$-5YEARSFROMNOW") == ""


@freeze_time("2023-05-17")
def test_others():
    assert match_and_return_openbb_keyword_date("$LASTMONDAY") == "2023-05-15"
    assert match_and_return_openbb_keyword_date("$LASTFRIDAY") == "2023-05-12"
    assert match_and_return_openbb_keyword_date("$NEXTFRIDAY") == "2023-05-19"
    assert match_and_return_openbb_keyword_date("$LASTJANUARY") == "2023-01-01"
    assert match_and_return_openbb_keyword_date("$NEXTMARCH") == "2024-03-01"
    assert match_and_return_openbb_keyword_date("$LASTDECEMBER") == "2022-12-01"
    assert match_and_return_openbb_keyword_date("$NEXTTUESDAY") == "2023-05-23"
    assert match_and_return_openbb_keyword_date("$NEXTSEPTEMBER") == "2023-09-01"


@freeze_time("2023-05-17")
def test_parse_openbb_script():
    raw_lines = [
        "stocks",
        "foreach $$VAR in PLTR,BB",
        "    load $$VAR --start $LASTJANUARY",
        "    candle",
        "END",
    ]
    test_out = parse_openbb_script(raw_lines)
    assert test_out[1] == [
        "stocks",
        "load PLTR --start 2023-01-01",
        "candle",
        "load BB --start 2023-01-01",
        "candle",
    ]

    raw_lines2 = [
        "$DATE = 2022-01-01",
        "$DATES = 2022-01-01,2023-01-01",
        "stocks",
        "load $ARGV[0]",
        "ta/ema/..",
        "foreach $$VAR in $ARGV[1:]",
        "    load $$VAR --start $DATE[0]",
        "    candle",
        "end",
        "ca/set $ARGV[2:]/historical/..",
        "FOREACH $$VAR in $ARGV",
        "load $$VAR --start $DATES[0] --end $DATES[1]",
        "candle",
        " end",
        "foreach $$VAR in $ARGV[1:3]",
        "    load $$VAR --start 2022-01-01",
        "        candle",
        "END",
        "foreach $$VAR in PLTR,BB",
        "    load $$VAR --start 2022-01-01",
        "        candle",
        "END",
    ]
    test_out2 = parse_openbb_script(raw_lines2, None)
    assert (
        test_out2[0]
        == "[red]Variable $ARGV not given for current routine script.[/red]"
    )


@freeze_time("2023-06-04")
@pytest.mark.parametrize(
    "routine, input_args, expected_error, expected_queue",
    [
        (
            """
# This is a comment that will be ignored
stocks/load aapl/candle
/
            """,
            None,
            "",
            "/stocks/load aapl/candle/home",
        ),
        #############################
        (
            """
# Set variable
$DATE = 2022-01-01

stocks/load AAPL --start $DATE
            """,
            None,
            "",
            "/stocks/load AAPL --start 2022-01-01",
        ),
        #############################
        (
            """
# Set variable
$DATE = 2022-01-01

stocks/load AAPL --start $DATE[0]
            """,
            None,
            "",
            "/stocks/load AAPL --start 2022-01-01",
        ),
        #############################
        (
            """
# Set variable
$DATE = 2022-01-01,2024-01-01

stocks/load AAPL --start $DATE[0]
            """,
            None,
            "",
            "/stocks/load AAPL --start 2022-01-01",
        ),
        #############################
        (
            """
# Set variable
$DATE = 2022-01-01,2024-01-01

stocks/load AAPL --start $DATE[0] --end $DATE[1]
            """,
            None,
            "",
            "/stocks/load AAPL --start 2022-01-01 --end 2024-01-01",
        ),
        #############################
        (
            """
# Set variable
$DATE = 2022-01-01

stocks/load AAPL --start $DATE[1]
            """,
            None,
            "[red]Variable $DATE only has 1 elements and there was an attempt to access it with index 1.[/red]",
            "",
        ),
        #############################
        (
            """
# Set variable
$DATE = 2022-01-01,2023-01-01

stocks/load AAPL --start $DATE[2]
            """,
            None,
            "[red]Variable $DATE only has 2 elements and there was an attempt to access it with index 2.[/red]",
            "",
        ),
        #############################
        (
            """
# Set variable
$DATE = 2022-01-01,2023-01-01

stocks/load AAPL --start $DATE[5]
            """,
            None,
            "[red]Variable $DATE only has 2 elements and there was an attempt to access it with index 5.[/red]",
            "",
        ),
        #############################
        (
            """
# Set variable
$DATE = 2022-01-01

stocks/load AAPL --start $DATE[5]
            """,
            None,
            "[red]Variable $DATE only has 1 elements and there was an attempt to access it with index 5.[/red]",
            "",
        ),
        #############################
        (
            """
# Set variable
$DATE = 2022-01-01

stocks/load AAPL --start $DATE[-2]
            """,
            None,
            "[red]Negative index on $DATE is not allowed[/red]",
            "",
        ),
        #############################
        (
            """
# Set variable
$DATE = 2022-01-01,2024-01-01

stocks/load AAPL --start $DATE[-1]
            """,
            None,
            "[red]Negative index on $DATE is not allowed[/red]",
            "",
        ),
        #############################
        (
            """
# Set variable
DATE = 2022-01-01,2024-01-01

stocks/load AAPL --start $DATE[0]
            """,
            None,
            "[red]Variable $DATE not given for current routine script.[/red]",
            "",
        ),
        #############################
        (
            """
stocks/load $ARGV[3]
            """,
            "TSLA,MSFT".split(","),
            "[red]Variable $ARGV only has 2 elements and there was an attempt to access it with index 3.[/red]",
            "",
        ),
        #############################
        (
            """
stocks/load $ARGV[-1]
            """,
            "TSLA,MSFT".split(","),
            "[red]Negative index on $ARGV is not allowed[/red]",
            "",
        ),
        #############################
        (
            """
stocks/load $ARGV[a]
            """,
            "TSLA,MSFT".split(","),
            "[red]Index 'a' is not a value[/red]",
            "",
        ),
        #############################
        (
            """
stocks/load $ARGV[0]/candle --start $1MONTHSAGO
            """,
            "TSLA,MSFT".split(","),
            "",
            "/stocks/load TSLA/candle --start 2023-05-04",
        ),
        #############################
        (
            """
# cool beans this is a comment that should be ignored

stocks/ca/set $ARGV[1:]/historical
..
            """,
            "TSLA,MSFT,AAPL,NVDA".split(","),
            "",
            "/stocks/ca/set MSFT,AAPL,NVDA/historical/..",
        ),
        #############################
        (
            """
# cool beans this is a comment that should be ignored

stocks/ca/set $ARGV/historical
/
            """,
            "TSLA,MSFT,AAPL,NVDA".split(","),
            "",
            "/stocks/ca/set TSLA,MSFT,AAPL,NVDA/historical/home",
        ),
    ],
)
def test_openbb_routines(routine, input_args, expected_error, expected_queue):
    err, queue = parse_openbb_script(routine.split("\n"), input_args)

    assert err == expected_error
    assert queue == expected_queue
