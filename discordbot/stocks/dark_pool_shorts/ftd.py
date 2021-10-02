import discord
import config_discordbot as cfg
from discordbot import gst_imgur
from datetime import datetime, timedelta
from matplotlib import pyplot as plt
import matplotlib.dates as mdates
import os
import helpers

from gamestonk_terminal.stocks.dark_pool_shorts import sec_model


async def ftd_command(ctx, arg, arg2, arg3):
    try:
        # Debug
        if cfg.DEBUG:
            print(
                "-- STARTED COMMAND: !stocks.dps.ftd "
                + arg
                + " "
                + arg2
                + " "
                + arg3
                + "--"
            )

        # Help
        if arg == "-h" or arg == "help":
            help_txt = (
                "Display fails-to-deliver data for a given ticker. [Source: SEC]\n"
            )
            help_txt += "\nPossible argments:\n"
            help_txt += "<TICKER> Stock ticker. REQUIRED!\n"
            help_txt += "<DATE_START> Start of data. Default: 1 year ago\n"
            help_txt += "<DATE_END> End of data. Default: today\n"
            embed = discord.Embed(
                title="Stocks: [SEC] Failure-to-deliver HELP",
                description=help_txt,
                colour=cfg.COLOR,
            )
            embed.set_author(
                name=cfg.AUTHOR_NAME,
                icon_url=cfg.AUTHOR_ICON_URL,
            )

            await ctx.send(embed=embed)

        else:
            if not arg:
                title = "ERROR Stocks: [SEC] Failure-to-deliver"
                embed = discord.Embed(title=title, colour=cfg.COLOR)
                embed.set_author(
                    name=cfg.AUTHOR_NAME,
                    icon_url=cfg.AUTHOR_ICON_URL,
                )
                embed.set_description(
                    "No ticker entered." "\nEnter a valid ticker, example: GME"
                )
                if cfg.DEBUG:
                    print("-- ERROR at COMMAND: !stocks.dps.ftd --")
                    print("   ERROR: No ticker entered")
                    print("-- Command stopped before error --")
                return

            # Parse argument
            ticker = arg.upper()
            if arg2 == "":
                start = datetime.now() - timedelta(days=365)
            else:
                try:
                    start = datetime.strptime(arg2, cfg.DATE_FORMAT)
                except Exception as e:
                    title = "ERROR Stocks: [SEC] Failure-to-deliver " + ticker
                    embed = discord.Embed(title=title, colour=cfg.COLOR)
                    embed.set_author(
                        name=cfg.AUTHOR_NAME,
                        icon_url=cfg.AUTHOR_ICON_URL,
                    )
                    embed.set_description(
                        "Start Date given: "
                        + arg2
                        + "\nEnter a valid start date using the format: "
                        + cfg.DATE_FORMAT
                    )
                    if cfg.DEBUG:
                        print(
                            "-- ERROR at COMMAND: !stocks.dps.ftd "
                            + arg
                            + " "
                            + arg2
                            + " "
                            + arg3
                            + " --"
                        )
                        print("   POSSIBLE ERROR: Wrong start date parameter entered")
                        print("-- DETAILED REPORT: --\n\n" + e + "\n")
                    return
            if arg3 == "":
                end = datetime.now()
            else:
                try:
                    end = datetime.strptime(arg3, cfg.DATE_FORMAT)
                except Exception as e:
                    title = "ERROR Stocks: [SEC] Failure-to-deliver " + ticker
                    embed = discord.Embed(title=title, colour=cfg.COLOR)
                    embed.set_author(
                        name=cfg.AUTHOR_NAME,
                        icon_url=cfg.AUTHOR_ICON_URL,
                    )
                    embed.set_description(
                        "End Date given: "
                        + arg2
                        + "\nEnter a valid end date using the format: "
                        + cfg.DATE_FORMAT
                    )
                    if cfg.DEBUG:
                        print(
                            "-- ERROR at COMMAND: !stocks.dps.ftd "
                            + arg
                            + " "
                            + arg2
                            + " "
                            + arg3
                            + " --"
                        )
                        print("   POSSIBLE ERROR: Wrong end date parameter entered")
                        print("-- DETAILED REPORT: --\n\n" + e + "\n")
                    return

            plt.ion()
            try:
                ftds_data = sec_model.get_fails_to_deliver(ticker, start, end, 0)
            except Exception as e:
                title = "ERROR Stocks: [SEC] Failure-to-deliver " + ticker
                embed = discord.Embed(title=title, colour=cfg.COLOR)
                embed.set_author(
                    name=cfg.AUTHOR_NAME,
                    icon_url=cfg.AUTHOR_ICON_URL,
                )
                embed.set_description(
                    "Ticker given: " + arg + "\nEnter a valid ticker, example: GME"
                )
                if cfg.DEBUG:
                    print(
                        "-- ERROR at COMMAND: !stocks.dps.ftd "
                        + arg
                        + " "
                        + arg2
                        + " "
                        + arg3
                        + " --"
                    )
                    print("   POSSIBLE ERROR: Wrong ticker parameter entered")
                    print("-- DETAILED REPORT: --\n\n" + e + "\n")
                return
            plt.bar(
                ftds_data["SETTLEMENT DATE"],
                ftds_data["QUANTITY (FAILS)"] / 1000,
            )
            plt.ylabel("Shares [K]")
            plt.title(f"Fails-to-deliver Data for {ticker}")
            plt.grid(b=True, which="major", color="#666666", linestyle="-", alpha=0.2)
            plt.gca().xaxis.set_major_formatter(mdates.DateFormatter("%Y/%m/%d"))
            plt.gca().xaxis.set_major_locator(mdates.DayLocator(interval=7))
            plt.gcf().autofmt_xdate()
            plt.xlabel("Days")
            _ = plt.gca().twinx()
            stock = helpers.load(ticker, start)
            stock_ftd = stock[stock.index > start]
            stock_ftd = stock_ftd[stock_ftd.index < end]
            plt.plot(stock_ftd.index, stock_ftd["Adj Close"], color="tab:orange")
            plt.ylabel("Share Price [$]")
            plt.savefig("dps_ftd.png")
            plt.close("all")
            uploaded_image = gst_imgur.upload_image("dps_ftd.png", title="something")
            image_link = uploaded_image.link
            title = "Stocks: [SEC] Failure-to-deliver " + ticker
            embed = discord.Embed(title=title, colour=cfg.COLOR)
            embed.set_author(
                name=cfg.AUTHOR_NAME,
                icon_url=cfg.AUTHOR_ICON_URL,
            )
            embed.set_image(url=image_link)
            os.remove("dps_ftd.png")

            await ctx.send(embed=embed)

    except Exception as e:
        title = "INTERNAL ERROR"
        embed = discord.Embed(title=title, colour=cfg.COLOR)
        embed.set_author(
            name=cfg.AUTHOR_NAME,
            icon_url=cfg.AUTHOR_ICON_URL,
        )
        embed.set_description(
            "Try updating the bot, make sure DEBUG is True in the config "
            "and restart it.\nIf the error still occurs open a issue at: "
            "https://github.com/GamestonkTerminal/GamestonkTerminal/issues"
        )
        if cfg.DEBUG:
            print(
                "-- ERROR at COMMAND: !stocks.dps.ftd "
                + arg
                + " "
                + arg2
                + " "
                + arg3
                + " --"
            )
            print(
                "   Try updating the bot and restart it. If the error still occurs open "
                "a issue at:\n   https://github.com/GamestonkTerminal/GamestonkTerminal/issues"
            )
            print("-- DETAILED REPORT: --\n\n" + e + "\n")
