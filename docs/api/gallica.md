# Gallica

The class for fetching metadata and images from [Gallica](https://gallica.bnf.fr/) with its [search API](https://api.bnf.fr/api-gallica-de-recherche) and [metadata API](https://api.bnf.fr/api-document-de-gallica).

The class inherits the [corresponding class in libquery](https://oldvis.github.io/libquery/api/gallica.html), and additionally supports validation and processing of the metadata.

## Usage

Create a querier for Gallica:

```python
from libprocess import Gallica

directory = "./output/gallica"
querier = DavidRumseyMapCollection(
    metadata_dir=f"{directory}/metadata",
    img_dir=f"{directory}/imgs",
)
```

Query metadata:

```python
base_url = "https://gallica.bnf.fr/SRU?operation=searchRetrieve&version=1.2&maximumRecords={maximumRecords}&startRecord={startRecord}"
queries = [
    f"{base_url}&query=dc.title all %22cartes figurative%22",
    f"{base_url}&query=dc.title all %22tableau graphique%22",
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
querier.process_metadata(save_path=f"{directory}/processed/processed.json")
```

## Processed Metadata Schema

Each processed metadata entry is stored as:

```typescript
interface TimePoint {
    year: number
    month?: number
    day?: number
}

interface MetadataEntry {
    uuid: string
    /** Null when API returns no author attribute. */
    authors: string[] | null
    displayName: string
    publishDate: TimePoint[] | TimePoint
    viewUrl: string
    downloadUrl: string
    md5: string
    phash: string
    languages: string[]
    tags: string[]
    abstract: string | null
    source: {
        name: 'Gallica'
        /** The url where the metadata is collected. */
        url: string
        accessDate: string
    }
}
```
