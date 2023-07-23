# David Rumsey Map Collection

The class for fetching metadata and images from [David Rumsey Map Collection](https://www.davidrumsey.com/) with its [LUNA API](https://doc.lunaimaging.com/display/V74D/LUNA+API+Documentation).

The class inherits the [corresponding class in libquery](https://oldvis.github.io/libquery/api/david-rumsey-map-collection.html), and additionally supports validation and processing of the metadata.

## Usage

Create a querier for David Rumsey Map Collection:

```python
from libprocess import DavidRumseyMapCollection

directory = "./output/david-rumsey-map-collection"
querier = DavidRumseyMapCollection(
    metadata_dir=f"{directory}/metadata",
    img_dir=f"{directory}/imgs",
)
```

Query metadata:

```python
base_url = "https://www.davidrumsey.com/luna/servlet/as/search?"
queries = [
    f"{base_url}q=type=chart",
    f"{base_url}q=type=diagram",
]
querier.fetch_metadata(queries=queries)
```

Validate metadata:

```python
querier.validate_metadata()
```

Query images:

```python
querier.fetch_image()
```

Process metadata:

```python
processed_metadata_path = f"{directory}/metadata-processed/metadataProcessed.json"
querier.process_metadata(save_path=processed_metadata_path)
```

## Processed Metadata Schema

Each processed metadata entry is stored as:

```typescript
interface MetadataEntry {
    uuid: string
    /** Null when LUNA API returns no author attribute. */
    authors: string[] | null
    displayName: string
    publishDate: {
        year: number
    }
    viewUrl: string
    downloadUrl: string
    md5: string
    phash: string
    languages: string[]
    tags: string[]
    abstract: string
    source: {
        name: 'David Rumsey Map Collection'
        /** The url where the metadata is collected. */
        url: string
        accessDate: string
    }
}
```
