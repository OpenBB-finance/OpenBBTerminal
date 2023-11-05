"""Nasdaq provider module."""
from openbb_nasdaq.models.economic_calendar import NasdaqEconomicCalendarFetcher
from openbb_nasdaq.models.top_retail import NasdaqTopRetailFetcher
from openbb_provider.abstract.provider import Provider

nasdaq_provider = Provider(
    name="nasdaq",
    website="https://www.nasdaq.com",
    description="""Positioned at the nexus of technology and the capital markets, Nasdaq
provides premier platforms and services for global capital markets and beyond with
unmatched technology, insights and markets expertise.""",
    required_credentials=["api_key"],
    fetcher_dict={
        "EconomicCalendar": NasdaqEconomicCalendarFetcher,
        "TopRetail": NasdaqTopRetailFetcher,
    },
)
