"""
External Resources XBlock's main module.
"""

import logging

from xblock.core import XBlock
from xblock.fields import Scope, String

logger = logging.getLogger(__name__)


class ExternalResourcesXBlock(XBlock):
    """
    External Resources XBlock lets course authors curate external learning
    resources, and lets learners mark each resource as read.
    """

    display_name = String(
        display_name="Display Name",
        default="External Resources",
        scope=Scope.settings,
        help="Name of the component in the studio",
    )
