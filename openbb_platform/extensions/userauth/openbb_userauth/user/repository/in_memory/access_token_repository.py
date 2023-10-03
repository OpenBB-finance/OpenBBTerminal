from typing import Any, Dict, Optional

from openbb_userauth.auth.model.access_token import AccessToken
from openbb_userauth.user.repository.abstract.access_token_repository import (
    AccessTokenRepository as AbstractAccessTokenRepository,
)
from openbb_userauth.user.repository.base.in_memory_repository import (
    Repository as BaseRepository,
)


class AccessTokenRepository(BaseRepository[AccessToken], AbstractAccessTokenRepository):
    def __init__(
        self,
        collection_name: str = "token",
        database_name: str = "openbb_platform",
        database_map: Optional[Dict[str, Any]] = None,
    ):
        super().__init__(
            collection_name=collection_name,
            database_name=database_name,
            database_map=database_map,
        )
