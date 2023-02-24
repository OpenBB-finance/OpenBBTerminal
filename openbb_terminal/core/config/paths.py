# IMPORTATION STANDARD
import os
from pathlib import Path


def get_user_data_directory():
    """Gets user data path from .env file or returns default path"""
    if os.getenv("OPENBB_USER_DATA_DIRECTORY"):
        user_data_directory = Path(os.getenv("OPENBB_USER_DATA_DIRECTORY"))
    else:
        user_data_directory = Path.home() / "OpenBBUserData"
    return user_data_directory


# Installation related paths
HOME_DIRECTORY = Path.home()
REPOSITORY_DIRECTORY = Path(__file__).parent.parent.parent.parent
PACKAGE_DIRECTORY = Path(__file__).parent.parent.parent
MISCELLANEOUS_DIRECTORY = PACKAGE_DIRECTORY / "miscellaneous"
USER_DATA_SOURCES_DEFAULT_FILE = MISCELLANEOUS_DIRECTORY / "data_sources_default.json"
REPOSITORY_ENV_FILE = REPOSITORY_DIRECTORY / ".env"
PACKAGE_ENV_FILE = PACKAGE_DIRECTORY / ".env"
SETTINGS_DIRECTORY = HOME_DIRECTORY / ".openbb_terminal"
USER_ENV_FILE = SETTINGS_DIRECTORY / ".env"
HIST_FILE_PATH = SETTINGS_DIRECTORY / ".openbb_terminal.his"

# User should be able to change these -> move to preferences
USER_DATA_DIRECTORY = HOME_DIRECTORY / "OpenBBUserData"
USER_EXPORTS_DIRECTORY = USER_DATA_DIRECTORY / "exports"
USER_CUSTOM_IMPORTS_DIRECTORY = USER_DATA_DIRECTORY / "custom_imports"
USER_PORTFOLIO_DATA_DIRECTORY = USER_DATA_DIRECTORY / "portfolio"
USER_ROUTINES_DIRECTORY = USER_DATA_DIRECTORY / "routines"
USER_PRESETS_DIRECTORY = USER_DATA_DIRECTORY / "presets"
USER_REPORTS_DIRECTORY = USER_DATA_DIRECTORY / "reports"
USER_CUSTOM_REPORTS_DIRECTORY = USER_DATA_DIRECTORY / "reports" / "custom reports"
USER_FORECAST_MODELS_DIRECTORY = USER_DATA_DIRECTORY / "exports" / "forecast_models"
