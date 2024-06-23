""" ECB helpers"""

async def get_series_data(series_id: str, start_date: str = "", end_date: str = ""):
    """Get ECB data

    Parameters
    ----------
    series_id: str
        ECB ID of data
    start_date: Optional[str]
        Start date, formatted YYYY-MM-DD
    end_date: Optional[str]
        End date, formatted YYYY-MM-DD
    """
    # pylint: disable=import-outside-toplevel
    import json  # noqa
    import time  # noqa
    from typing import List  # noqa
    from urllib.error import HTTPError  # noqa
    from openbb_core.app.model.abstract.error import OpenBBError  # noqa
    from openbb_core.provider.utils.helpers import amake_request  # noqa

    start_date = start_date.replace("-", "")
    end_date = end_date.replace("-", "")
    url = f"https://data.ecb.europa.eu/data-detail-api/{series_id}"
    data: List = []  # noqa
    try:
        data = await amake_request(  # noqa
            url=url,
            params={"startPeriod": start_date, "endPeriod": end_date},
        )
    except KeyboardInterrupt as interrupt:
        raise interrupt
    except (json.JSONDecodeError, Exception):
        raise ValueError("Invalid JSON response from ECB")

    if start_date:
        data = [item for item in data if item["PERIOD"][0] >= start_date]
    if end_date:
        data = [item for item in data if item["PERIOD"][0] <= end_date]

    return data
