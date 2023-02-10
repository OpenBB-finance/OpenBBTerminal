# pylint: disable=unused-import
from openbb_terminal import helper_funcs as helper  # noqa: F401
from openbb_terminal.base_helpers import load_dotenv_and_reload_configs
from openbb_terminal.config_terminal import theme  # noqa: F401
from openbb_terminal.core.library.breadcrumb import Breadcrumb, MetadataBuilder
from openbb_terminal.core.library.trail_map import TrailMap
from openbb_terminal.cryptocurrency.due_diligence.pycoingecko_model import (
    Coin,
)  # noqa: F401
from openbb_terminal.helper_classes import TerminalStyle
from openbb_terminal.reports import widget_helpers as widgets
from openbb_terminal.session.user import User  # noqa: F401


if User.is_guest():
    load_dotenv_and_reload_configs()

TerminalStyle().applyMPLstyle()
trail = ""
trail_map = TrailMap()
metadata = MetadataBuilder.build(trail=trail, trail_map=trail_map)

openbb = Breadcrumb(
    metadata=metadata,
    trail=trail,
    trail_map=trail_map,
)
