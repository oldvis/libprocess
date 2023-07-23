# Get Started

libprocess is a collection of functions for processing the metadata and images in digital libraries retrieved with [libquery](https://github.com/oldvis/libquery).
The classes in libprocess inherit the classes in [libquery](https://github.com/oldvis/libquery).

## Installation

```sh
pip install libprocess
```

## Usage Example

```python
from libprocess import DavidRumseyMapCollection

querier = DavidRumseyMapCollection(
    metadata_dir="./metadata",
    img_dir="./imgs",
)
querier.fetch_metadata(
    queries=[
        "https://www.davidrumsey.com/luna/servlet/as/search?q=type=chart",
    ]
)
querier.process_metadata(path="processedMetadata.json", img_dir=None)
```

More examples can be found in the API Reference.
