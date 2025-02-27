<a href="https://pypi.org/project/libprocess/">
    <img alt="Newest PyPI version" src="https://img.shields.io/pypi/v/libprocess.svg">
</a>
<a href="https://github.com/psf/black">
    <img alt="Code style: black" src="https://img.shields.io/badge/code%20style-black-000000.svg">
</a>
<a href="http://commitizen.github.io/cz-cli/">
    <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
</a>
<a href="https://pepy.tech/">
    <img alt="Pepy Total Downloads" src="https://img.shields.io/pepy/dt/libprocess">
</a>

# libprocess

A collection of utility functions to process the query returns from the query functions in [libquery](https://github.com/oldvis/libquery).

## Installation

```sh
pip install libprocess
```

## Usage Example

Query and process metadata in [David Rumsey Map Collection](https://www.davidrumsey.com/):

```python
from libprocess import DavidRumseyMapCollection
querier = DavidRumseyMapCollection("./metadata/", "./imgs/")
querier.fetch_metadata(["https://www.davidrumsey.com/luna/servlet/as/search?q=type=chart"])
querier.process_metadata(save_path="processedMetadata.json")
```

## Documentation

See our [documentation website](https://oldvis.github.io/libprocess/).
