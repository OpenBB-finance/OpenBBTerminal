import argparse
import matplotlib.pyplot as plt

import pandas_ta as ta
from pandas.plotting import register_matplotlib_converters

from helper_funcs import check_positive, plot_stock_ta

register_matplotlib_converters()


# ----------------------------------------------------- EMA -----------------------------------------------------
def ema(l_args, s_ticker, s_interval, df_stock):
    parser = argparse.ArgumentParser(prog='ema', 
                                     description="""The Exponential Moving Average is a staple of technical 
                                     analysis and is used in countless technical indicators. In a Simple Moving 
                                     Average, each value in the time period carries equal weight, and values outside 
                                     of the time period are not included in the average. However, the Exponential 
                                     Moving Average is a cumulative calculation, including all data. Past values have 
                                     a diminishing contribution to the average, while more recent values have a greater 
                                     contribution. This method allows the moving average to be more responsive to changes 
                                     in the data.""")

    parser.add_argument('-l', "--length", action="store", dest="n_length", type=check_positive, default=20, help='length')
    parser.add_argument('-o', "--offset", action="store", dest="n_offset", type=check_positive, default=0, help='offset')

    (ns_parser, l_unknown_args) = parser.parse_known_args(l_args)

    if l_unknown_args:
        print(f"The following args couldn't be interpreted: {l_unknown_args}\n")
        return

    # Daily
    if s_interval == "1440min":
        df_ta = ta.ema(df_stock['5. adjusted close'], length=ns_parser.n_length, offset=ns_parser.n_offset).dropna()
        plot_stock_ta(df_stock['5. adjusted close'], s_ticker, df_ta, f"{ns_parser.n_length} EMA")
    # Intraday
    else:
        df_ta = ta.ema(df_stock['4. close'], length=ns_parser.n_length, offset=ns_parser.n_offset).dropna()
        plot_stock_ta(df_stock['4. close'], s_ticker, df_ta, f"{ns_parser.n_length} EMA")

    

# ----------------------------------------------------- SMA -----------------------------------------------------
def sma(l_args, s_ticker, s_interval, df_stock):
    parser = argparse.ArgumentParser(prog='sma',
                                     description=""" Moving Averages are used to smooth the data in an array to 
                                     help eliminate noise and identify trends. The Simple Moving Average is literally 
                                     the simplest form of a moving average. Each output value is the average of the 
                                     previous n values. In a Simple Moving Average, each value in the time period carries 
                                     equal weight, and values outside of the time period are not included in the average. 
                                     This makes it less responsive to recent changes in the data, which can be useful for 
                                     filtering out those changes. """)

    parser.add_argument('-l', "--length", dest="l_length", type=lambda s: [int(item) for item in s.split(',')], default=[20, 50], help='length of MA window')
    parser.add_argument('-o', "--offset", action="store", dest="n_offset", type=check_positive, default=0, help='offset')

    (ns_parser, l_unknown_args) = parser.parse_known_args(l_args)

    if l_unknown_args:
        print(f"The following args couldn't be interpreted: {l_unknown_args}\n")
        return


    title = f"SMA on {s_ticker}"
    offset = ns_parser.n_offset
    if s_interval == "1440min":  # Daily
        _plot_sma(df_stock, s_ticker, '5. adjusted close', ns_parser.l_length, title, offset)
    else:  # Intraday
        _plot_sma(df_stock, s_ticker, '4. close', ns_parser.n_length, title, offset)
    print("")


def _plot_sma(df_stock, s_ticker, close_field, length, title, offset):
    plt.plot(df_stock.index, df_stock[close_field].values, color='k')
    l_legend = list()
    l_legend.append(s_ticker)
    for length in length:
        df_ta = ta.sma(df_stock[close_field], length=length, offset=offset).dropna()
        plt.plot(df_ta.index, df_ta.values)
        l_legend.append(f"{length} SMA")
    plt.title(title)
    plt.xlim(df_stock.index[0], df_stock.index[-1])
    plt.xlabel('Time')
    plt.ylabel('Share Price ($)')
    plt.legend(l_legend)
    plt.grid(b=True, which='major', color='#666666', linestyle='-')
    plt.minorticks_on()
    plt.grid(b=True, which='minor', color='#999999', linestyle='-', alpha=0.2)
    plt.show()


# ----------------------------------------------------- VWAP -----------------------------------------------------
def vwap(l_args, s_ticker, s_interval, df_stock):
    parser = argparse.ArgumentParser(prog='vwap', 
                                     description=""" The Volume Weighted Average Price that measures the average typical price
                                     by volume.  It is typically used with intraday charts to identify general direction. """)

    parser.add_argument('-o', "--offset", action="store", dest="n_offset", type=check_positive, default=0, help='offset')

    (ns_parser, l_unknown_args) = parser.parse_known_args(l_args)

    if l_unknown_args:
        print(f"The following args couldn't be interpreted: {l_unknown_args}\n")
        return


    title = f"VWAP on {s_ticker}"
    offset = ns_parser.n_offset
    if s_interval == "1440min":  # Daily
        _plot_vwap(title, offset, s_ticker, df_stock, '5. adjusted close')
    else:  # Intraday
        _plot_vwap(title, offset, s_ticker, df_stock, '4. close')
    print("")


def _plot_vwap(title, offset, s_ticker, df_stock, data_field):
    df_ta = ta.vwap(high=df_stock['2. high'], low=df_stock['3. low'], close=df_stock[data_field],
                    volume=df_stock['6. volume'], offset=offset)
    pfig, axPrice = plt.subplots()
    plt.plot(df_stock.index, df_stock[data_field].values, color='k')
    plt.plot(df_ta.index, df_ta.values)
    plt.title(title)
    plt.xlim(df_stock.index[0], df_stock.index[-1])
    plt.xlabel('Time')
    plt.ylabel('Share Price ($)')
    plt.legend([s_ticker, "VWAP"])
    axVolume = axPrice.twinx()
    plt.bar(df_stock.index, df_stock['6. volume'].values, color='k', alpha=0.8, width=.3)
    plt.ylabel('Volume')
    plt.grid(b=True, which='major', color='#666666', linestyle='-')
    plt.minorticks_on()
    plt.grid(b=True, which='minor', color='#999999', linestyle='-', alpha=0.2)
    plt.show()
