from openbb_userauth.auth.model.access_token import AccessToken
from openbb_userauth.user.repository.abstract.access_token_repository import (
    AccessTokenRepository as AbstractAccessTokenRepository,
)
from openbb_userauth.user.repository.base.mongodb_repository import (
    Repository as BaseRepository,
)
from pymongo.mongo_client import MongoClient


class AccessTokenRepository(BaseRepository[AccessToken], AbstractAccessTokenRepository):
    def __init__(
        self,
        client: MongoClient,
        collection_name: str = "token",
        database_name: str = "openbb_sdk",
    ):
        super().__init__(
            client=client,
            collection_name=collection_name,
            database_name=database_name,
        )
