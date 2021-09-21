# catapult-docs-cli

[![PyPI](https://img.shields.io/pypi/v/catapultdocscli)](https://pypi.org/project/catapultdocscli/)
[![Build Status](https://travis-ci.com/symbol/catapult-docs-cli.svg?branch=master)](https://travis-ci.com/symbol/catapult-docs-cli)

Exports documentation available in ``catapult-server`` and ``catapult-rest`` code into reStructuredText tables.

The generated outputs are used in the [Symbol Developer Documentation](http://symbol.github.io).

## Requirements

- Python 3.4+
- pip

## Installation

1. Clone the repository.

   ``` bash
   git clone https://github.com/symbol/catapult-docs-cli.git
   cd catapult-docs-cli
   ```

2. Install the command-line tool.

   ``` bash
   pip install .
   ```

3. Clone ``catapult-server`` and ``catapult-rest``.

   ``` bash
   git clone https://github.com/symbol/catapult-server.git
   git clone https://github.com/symbol/catapult-rest.git
   ```

## Usage

``` bash
catapult-docs-cli COMMAND [OPTIONS]
```

| Command               | Description                                         |
|-----------------------|-----------------------------------------------------|
| properties            | Generates catapult-server properties docs.          |
| status-errors         | Generates catapult-rest status errors docs.         |
| cli-usage             | Generates symbol-cli commands docs.                 |
| --help                | Show this message and exit.                         |

| Option                | Description                                         |
|-----------------------|-----------------------------------------------------|
| -c, --config TEXT     | The .catdocs file path.                             |
| --help                | Show this message and exit.                         |

### Generate catapult-server properties docs

``` bash
catapult-docs-cli properties --config .catdocs
```

### Generate catapult-rest status-errors docs

``` bash
catapult-docs-cli status-errors --config .catdocs
```

### Generate symbol-cli command docs

``` bash
catapult-docs-cli cli-usage --config .clidocs
```

### Export generated docs to a file

``` bash
catapult-docs-cli properties > properties.rst
```

### Compare differences between two versions

``` bash
diff properties_bison.rst properties_cow.rst
```

## License

[MIT License](LICENSE.md)

Copyright (c) 2019 NEM.
