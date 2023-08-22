"""The OpenBB Standardized Data Model."""
from openbb_provider.utils.helpers import to_snake_case
from pydantic import BaseModel, Extra


class Data(BaseModel):
    """The OpenBB Standardized Data Model."""

    def dict(self, *args, **kwargs):
        original_dict = super().dict(*args, **kwargs)
        return {to_snake_case(k): v for k, v in original_dict.items()}

    def __repr__(self):
        """Return a string representation of the object."""
        return f"{self.__class__.__name__}({', '.join([f'{k}={v}' for k, v in self.dict().items()])})"

    class Config:
        """Pydantic configuration."""

        extra = Extra.allow
        allow_population_by_field_name = True

    def __init__(self, **data):
        """Initialize the model."""
        data = {to_snake_case(k): v for k, v in data.items()}
        super().__init__(**data)
