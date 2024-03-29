from uuid import uuid5, UUID

from libquery.gallica._typing import Page, MetadataEntry


def get_image_url(page: Page, entry: MetadataEntry) -> str:
    """Get the download url of the image corresponding to a page."""

    identifier = entry["sourceData"]["identifier"]
    image_id_in_source = f'{identifier}/f{page["ordre"]}'
    return f"{image_id_in_source}.highres"


def get_view_url(page: Page, entry: MetadataEntry) -> str:
    """Get the online viewing url of the image corresponding to a page."""
    identifier = entry["sourceData"]["identifier"]
    image_id_in_source = f'{identifier}/f{page["ordre"]}'
    return f"{image_id_in_source}.item"


def get_image_uuid(page: Page, entry: MetadataEntry) -> str:
    """Get the uuid of the image corresponding to a page."""

    source_name = entry["source"]
    identifier = entry["sourceData"]["identifier"]
    image_id_in_source = f'{identifier}/f{page["ordre"]}'
    return str(uuid5(UUID(int=0), f"{source_name}/{image_id_in_source}"))
