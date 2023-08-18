"""FMP Balance Sheet Fetcher."""


from typing import Any, Dict, List, Optional

from openbb_provider.abstract.fetcher import Fetcher
from openbb_provider.standard_models.balance_sheet import (
    BalanceSheetData,
    BalanceSheetQueryParams,
)
from pydantic import root_validator

from openbb_fmp.utils.helpers import create_url, get_data_many


class FMPBalanceSheetQueryParams(BalanceSheetQueryParams):
    """FMP Balance Sheet QueryParams.

    Source: https://financialmodelingprep.com/developer/docs/#Balance-Sheet
    """

    cik: Optional[str]

    @root_validator()
    def check_symbol_or_cik(cls, values):  # pylint: disable=no-self-argument
        """Check if symbol or cik is provided."""
        if values.get("symbol") is None and values.get("cik") is None:
            raise ValueError("symbol or cik must be provided")
        return values


class FMPBalanceSheetData(BalanceSheetData):
    """FMP Balance Sheet Data."""

    class Config:
        """Pydantic alias config using fields Dict."""

        fields = {
            "currency": "reportedCurrency",
            "filing_date": "fillingDate",
            "accepted_date": "acceptedDate",
            "cash_and_cash_equivalents": "cashAndCashEquivalents",
            "short_term_investments": "shortTermInvestments",
            "net_receivables": "netReceivables",
            "other_current_assets": "otherCurrentAssets",
            "current_assets": "totalCurrentAssets",
            "long_term_investments": "longTermInvestments",
            "property_plant_equipment_net": "propertyPlantEquipmentNet",
            "intangible_assets": "intangibleAssets",
            "other_non_current_assets": "otherNonCurrentAssets",
            "tax_assets": "taxAssets",
            "other_assets": "otherAssets",
            "noncurrent_assets": "totalNonCurrentAssets",
            "assets": "totalAssets",
            "account_payables": "accountPayables",
            "other_current_liabilities": "otherCurrentLiabilities",
            "tax_payables": "taxPayables",
            "short_term_debt": "shortTermDebt",
            "deferred_revenue": "deferredRevenue",
            "current_liabilities": "totalCurrentLiabilities",
            "long_term_debt": "longTermDebt",
            "other_non_current_liabilities": "otherNonCurrentLiabilities",
            "other_liabilities": "otherLiabilities",
            "noncurrent_liabilities": "totalNonCurrentLiabilities",
            "liabilities": "totalLiabilities",
            "common_stock": "commonStock",
            "other_stockholder_equity": "othertotalStockholdersEquity",
            "accumulated_other_comprehensive_income_loss": "accumulatedOtherComprehensiveIncomeLoss",
            "preferred_stock": "preferredStock",
            "retained_earnings": "retainedEarnings",
            "minority_interest": "minorityInterest",
            "total_stockholders_equity": "totalStockholdersEquity",
            "total_equity": "totalEquity",
            "total_liabilities_and_stockholders_equity": "totalLiabilitiesAndStockholdersEquity",
            "total_liabilities_and_total_equity": "totalLiabilitiesAndTotalEquity",
        }

    # Leftovers below
    calendarYear: Optional[int]
    link: Optional[str]
    finalLink: Optional[str]

    cashAndShortTermInvestments: Optional[int]
    goodwillAndIntangibleAssets: Optional[int]
    deferredRevenueNonCurrent: Optional[int]
    totalInvestments: Optional[int]

    capitalLeaseObligations: Optional[int]
    deferredTaxLiabilitiesNonCurrent: Optional[int]
    totalNonCurrentLiabilities: Optional[int]
    totalDebt: Optional[int]
    netDebt: Optional[int]


class FMPBalanceSheetFetcher(
    Fetcher[
        FMPBalanceSheetQueryParams,
        List[FMPBalanceSheetData],
    ]
):
    """Transform the query, extract and transform the data from the FMP endpoints."""

    @staticmethod
    def transform_query(params: Dict[str, Any]) -> FMPBalanceSheetQueryParams:
        """Transform the query params."""

        return FMPBalanceSheetQueryParams(**params)

    @staticmethod
    def extract_data(
        query: FMPBalanceSheetQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any,
    ) -> List[Dict]:
        """Return the raw data from the FMP endpoint."""

        api_key = credentials.get("fmp_api_key") if credentials else ""

        url = create_url(
            3, f"balance-sheet-statement/{query.symbol}", api_key, query, ["symbol"]
        )

        return get_data_many(url, **kwargs)

    @staticmethod
    def transform_data(data: List[Dict]) -> List[FMPBalanceSheetData]:
        """Return the transformed data."""

        return [FMPBalanceSheetData(**d) for d in data]
