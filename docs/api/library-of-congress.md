# Library of Congress

The class for fetching metadata and images from [Library of Congress](https://www.loc.gov/) with its [search API](https://www.loc.gov/apis/).

The class inherits the [corresponding class in libquery](https://oldvis.github.io/libquery/api/library-of-congress.html), and additionally supports validation and processing of the metadata.

## Usage

Create a querier for Library of Congress:

```python
from libquery import LibraryOfCongress

directory = "./output/library-of-congress"
querier = LibraryOfCongress(
    metadata_path=f"{directory}/metadata/metadata.jsonl",
    img_dir=f"{directory}/imgs",
)
```

Query metadata:

```python
base_url = "https://www.loc.gov"
queries = [
    f"{base_url}/photos/?fo=json&fa=online-format:image&q=chart",
    f"{base_url}/photos/?fo=json&fa=online-format:image&q=diagram",
]
# Note: querying 1 image's metadata takes ~6s
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

interface ProcessedMetadataEntry {
    uuid: string
    /** Null when API returns no author attribute. */
    authors: string[] | null
    displayName: string
    publishDate: TimePoint[] | TimePoint
    viewUrl: string
    downloadUrl: string
    md5?: string
    phash?: string
    resolution?: [number, number]
    fileSize?: number
    languages: string[]
    tags: string[]
    abstract: string | null
    source: {
        name: 'Library of Congress'
        /** The url where the metadata is collected. */
        url: string
        accessDate: string
    }
}
```
