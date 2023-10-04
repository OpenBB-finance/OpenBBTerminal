"""User service."""
import json
from functools import reduce
from pathlib import Path
from typing import Any, Dict, List, MutableMapping, Optional

from openbb_core.app.constants import USER_SETTINGS_PATH
from openbb_core.app.model.abstract.singleton import SingletonMeta
from openbb_core.app.model.user_settings import UserSettings
from openbb_core.app.repository.abstract.access_token_repository import (
    AccessTokenRepository as AbstractAccessTokenRepository,
)
from openbb_core.app.repository.abstract.user_settings_repository import (
    UserSettingsRepository as AbstractUserSettingsRepository,
)
from openbb_core.app.repository.in_memory.access_token_repository import (
    AccessTokenRepository as InMemoryAccessTokenRepository,
)
from openbb_core.app.repository.in_memory.user_settings_repository import (
    UserSettingsRepository as InMemoryUserSettingsRepository,
)


class UserService(metaclass=SingletonMeta):
    """User service."""

    USER_SETTINGS_PATH = USER_SETTINGS_PATH
    USER_SETTINGS_ALLOWED_FIELD_SET = {"credentials", "preferences", "defaults"}

    def __init__(
        self,
        access_token_repository: Optional[AbstractAccessTokenRepository] = None,
        user_settings_repository: Optional[AbstractUserSettingsRepository] = None,
        default_user_settings: Optional[UserSettings] = None,
    ):
        self._token_repository = self.build_token_repository(access_token_repository)
        self._user_settings_repository = self.build_user_settings_repository(
            user_settings_repository
        )
        self._default_user_settings = (
            default_user_settings or self.read_default_user_settings()
        )

    @staticmethod
    def build_token_repository(
        access_token_repository: Optional[AbstractAccessTokenRepository] = None,
    ) -> AbstractAccessTokenRepository:
        """Build token repository."""
        return access_token_repository or InMemoryAccessTokenRepository()

    @staticmethod
    def build_user_settings_repository(
        user_settings_repository: Optional[AbstractUserSettingsRepository] = None,
    ) -> AbstractUserSettingsRepository:
        """Build user settings repository."""
        return user_settings_repository or InMemoryUserSettingsRepository()

    @classmethod
    def read_default_user_settings(cls, path: Optional[Path] = None) -> UserSettings:
        """Read default user settings."""
        path = path or cls.USER_SETTINGS_PATH

        return (
            UserSettings.model_validate(json.loads(path.read_text(encoding="utf-8")))
            if path.exists()
            else UserSettings()
        )

    @classmethod
    def write_default_user_settings(
        cls,
        user_settings: UserSettings,
        path: Optional[Path] = None,
    ) -> None:
        """Write default user settings."""
        path = path or cls.USER_SETTINGS_PATH

        user_settings_json = user_settings.model_dump_json(
            include=cls.USER_SETTINGS_ALLOWED_FIELD_SET, indent=4
        )
        path.write_text(user_settings_json, encoding="utf-8")

    @classmethod
    def update_default(cls, user_settings: UserSettings) -> UserSettings:
        """Update default user settings."""
        d1 = cls.read_default_user_settings().model_dump()
        d2 = user_settings.model_dump() if user_settings else {}
        updated = cls._merge_dicts([d1, d2])

        return UserSettings.model_validate(updated)

    @staticmethod
    def _merge_dicts(list_of_dicts: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Merge a list of dictionaries."""

        def recursive_merge(d1: Dict, d2: Dict) -> Dict:
            """Recursively merge dict d2 into dict d1 if d2 is value is not None."""
            for k, v in d1.items():
                if k in d2 and all(isinstance(e, MutableMapping) for e in (v, d2[k])):
                    d2[k] = recursive_merge(v, d2[k])

            d3 = d1.copy()
            d3.update((k, v) for k, v in d2.items() if v is not None)
            return d3

        result: Dict[str, Any] = {}
        for d in list_of_dicts:
            result = reduce(recursive_merge, (result, d))
        return result

    @property
    def default_user_settings(self) -> UserSettings:
        """Return default user settings."""
        return self._default_user_settings

    @default_user_settings.setter
    def default_user_settings(self, default_user_settings: UserSettings) -> None:
        """Set default user settings."""
        self._default_user_settings = default_user_settings

    @property
    def access_token_repository(self) -> AbstractAccessTokenRepository:
        """Access token repository."""
        return self._token_repository

    @property
    def user_settings_repository(self) -> AbstractUserSettingsRepository:
        """User settings repository."""
        return self._user_settings_repository
