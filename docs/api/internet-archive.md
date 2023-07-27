# Internet Archive

The class for fetching metadata and images from [Internet Archive](https://archive.org/) with its [Python API](https://archive.org/developers/internetarchive/index.html).

The class inherits the [corresponding class in libquery](https://oldvis.github.io/libquery/api/internet-archive.html), and additionally supports validation and processing of the metadata.

## Usage

Create a querier for Internet Archive:

```python
from libquery import InternetArchive

directory = "./output/internet-archive"
querier = InternetArchive(
    metadata_dir=f"{directory}/metadata",
    download_dir=f"{directory}/downloads",
    img_dir=f"{directory}/imgs",
)
```

Query metadata:

```python
queries = [
    "creator:(Snow, John) AND -collection:(david-rumsey-map-collection) AND date:[1800-01-01 TO 1950-12-31]",
    "creator:(Cheysson, Émile) AND -collection:(david-rumsey-map-collection) AND date:[0001-01-01 TO 1990-12-31]",
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

interface ProcessedMetadataEntry {
    uuid: string
    authors: string[]
    displayName: string
    publishDate: TimePoint | null
    viewUrl: string
    downloadUrl: string
    md5?: string
    phash?: string
    resolution?: [number, number]
    fileSize?: number
    languages: string[] | null
    tags: string[]
    abstract: string
    source: {
        name: 'Internet Archive'
        /** The url where the metadata is collected. */
        url: string
        accessDate: string
    }
}
```
