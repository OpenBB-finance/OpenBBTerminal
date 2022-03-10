import logging
import os
import time

import bs4
import df2img
import disnake
import pandas as pd
import undetected_chromedriver.v2 as uc
from selenium.webdriver.common.by import By

import bots.config_discordbot as cfg
from bots import helpers
from bots.config_discordbot import gst_imgur
from bots.menus.menu import Menu
from gamestonk_terminal.decorators import log_start_end

logger = logging.getLogger(__name__)


@log_start_end(log=logger)
def by_ticker_command(ticker="", num: int = 15):
    """Display ETF Holdings. [Source: StockAnalysis]"""

    # Debug
    if cfg.DEBUG:
        logger.debug("etfs")

    options = uc.ChromeOptions()

    options.headless = True
    options.add_argument("--headless")
    options.add_argument("--incognito")
    global browser
    driver = uc.Chrome(options=options, version_main=98)
    driver.set_window_size(1920, 1080)
    driver.get(f"http://etf.com/stock/{ticker.upper()}/")

    time.sleep(2)
    driver.find_element(By.XPATH, "(//div[@id='inactiveResult'])[3]").click()
    soup5 = bs4.BeautifulSoup(driver.page_source, "html.parser")
    r_ticker = []
    r_holdings = []
    r_name = []
    r_market = []
    table1 = soup5.find("table", id="StockTable")
    table = table1.find("tbody")
    for x in table.find_all("tr"):
        r_ticker.append(x.find("td").text)
        r_name.append(x.find("td").findNext("td").text)
        r_holdings.append(
            x.find("td").findNext("td").findNext("td").findNext("td").text
        )
        r_market.append(
            x.find("td")
            .findNext("td")
            .findNext("td")
            .findNext("td")
            .findNext("td")
            .text
        )

    df = pd.DataFrame(
        {
            "Ticker": r_ticker,
            "Name": r_name,
            "Holdings": r_holdings,
            "Market Value": r_market,
        }
    )

    if df.empty:
        raise Exception("No company holdings found!\n")

    df = df.iloc[:num]
    df.set_index("Ticker", inplace=True)
    title = f"ETF's Holding {ticker.upper()}"
    dindex = len(df.index)
    if dindex > 15:
        embeds: list = []
        # Output
        i, i2, end = 0, 0, 15
        df_pg = []
        embeds_img = []
        dindex = len(df.index)
        while i < dindex:
            df_pg = df.iloc[i:end]
            df_pg.append(df_pg)
            fig = df2img.plot_dataframe(
                df_pg,
                fig_size=(900, (40 * dindex)),
                col_width=[0.6, 3.5, 0.65, 1.1],
                tbl_header=cfg.PLT_TBL_HEADER,
                tbl_cells=cfg.PLT_TBL_CELLS,
                font=cfg.PLT_TBL_FONT,
                paper_bgcolor="rgba(0, 0, 0, 0)",
            )
            fig.update_traces(
                cells=(dict(align=["center", "center", "center", "right"]))
            )
            imagefile = "etf-byticker.png"
            imagefile = helpers.save_image(imagefile, fig)

            if cfg.IMAGES_URL:
                image_link = cfg.IMAGES_URL + imagefile
            else:
                imagefile_save = cfg.IMG_DIR / imagefile
                uploaded_image = gst_imgur.upload_image(
                    imagefile_save, title="something"
                )
                image_link = uploaded_image.link
                os.remove(imagefile_save)

            embeds_img.append(
                f"{image_link}",
            )
            embeds.append(
                disnake.Embed(
                    title=title,
                    colour=cfg.COLOR,
                ),
            )
            i2 += 1
            i += 15
            end += 15

        # Author/Footer
        for i in range(0, i2):
            embeds[i].set_author(
                name=cfg.AUTHOR_NAME,
                url=cfg.AUTHOR_URL,
                icon_url=cfg.AUTHOR_ICON_URL,
            )
            embeds[i].set_footer(
                text=cfg.AUTHOR_NAME,
                icon_url=cfg.AUTHOR_ICON_URL,
            )

        i = 0
        for i in range(0, i2):
            embeds[i].set_image(url=embeds_img[i])

            i += 1
        embeds[0].set_footer(text=f"Page 1 of {len(embeds)}")
        choices = [
            disnake.SelectOption(label="Home", value="0", emoji="🟢"),
        ]

        output = {
            "view": Menu,
            "title": title,
            "embed": embeds,
            "choices": choices,
            "embeds_img": embeds_img,
        }
    else:
        fig = df2img.plot_dataframe(
            df,
            fig_size=(900, (40 * dindex)),
            col_width=[0.6, 3.5, 0.65, 1.1],
            tbl_header=cfg.PLT_TBL_HEADER,
            tbl_cells=cfg.PLT_TBL_CELLS,
            font=cfg.PLT_TBL_FONT,
            paper_bgcolor="rgba(0, 0, 0, 0)",
        )
        fig.update_traces(cells=(dict(align=["center", "center", "center", "right"])))
        imagefile = helpers.save_image("etf-holdings.png", fig)

        output = {
            "title": title,
            "imagefile": imagefile,
        }

    return output
