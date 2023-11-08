"""Polygon provider module."""
from openbb_polygon.models.balance_sheet import PolygonBalanceSheetFetcher
from openbb_polygon.models.cash_flow import PolygonCashFlowStatementFetcher
from openbb_polygon.models.company_news import PolygonCompanyNewsFetcher
from openbb_polygon.models.crypto_historical import PolygonCryptoHistoricalFetcher
from openbb_polygon.models.forex_historical import PolygonForexHistoricalFetcher
from openbb_polygon.models.forex_pairs import PolygonForexPairsFetcher
from openbb_polygon.models.income_statement import PolygonIncomeStatementFetcher
from openbb_polygon.models.major_indices_historical import (
    PolygonMajorIndicesHistoricalFetcher,
)
from openbb_polygon.models.market_snapshots import PolygonMarketSnapshotsFetcher
from openbb_polygon.models.stock_historical import PolygonStockHistoricalFetcher
from openbb_polygon.models.stock_nbbo import PolygonStockNBBOFetcher
from openbb_provider.abstract.provider import Provider

polygon_provider = Provider(
    name="polygon",
    website="https://polygon.io/",
    description="""The Polygon.io Stocks API provides REST endpoints that let you query
     the latest market data from all US stock exchanges. You can also find data on
     company financials, stock market holidays, corporate actions, and more.""",
    required_credentials=["api_key"],
    fetcher_dict={
        "BalanceSheet": PolygonBalanceSheetFetcher,
        "CashFlowStatement": PolygonCashFlowStatementFetcher,
        "CompanyNews": PolygonCompanyNewsFetcher,
        "CryptoHistorical": PolygonCryptoHistoricalFetcher,
        "ForexHistorical": PolygonForexHistoricalFetcher,
        "ForexPairs": PolygonForexPairsFetcher,
        "StockNBBO": PolygonStockNBBOFetcher,
        "IncomeStatement": PolygonIncomeStatementFetcher,
        "MajorIndicesHistorical": PolygonMajorIndicesHistoricalFetcher,
        "StockHistorical": PolygonStockHistoricalFetcher,
        "MarketSnapshots": PolygonMarketSnapshotsFetcher,
    },
)
