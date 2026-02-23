"""
Minions Releases Python SDK

Release planning, version bumps, changelog generation, and publish targets
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Releases.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
