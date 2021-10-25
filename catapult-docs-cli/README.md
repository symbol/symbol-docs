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

### Generate serialization docs for Symbol

Checkout the following git repositories:

- [catapult-docs-cli](git@github.com:symbol/catapult-docs-cli.git)
- [catbuffer-schemas](git@github.com:symbol/catbuffer-schemas.git)
- [catbuffer-parser](git@github.com:symbol/catbuffer-parser.git)
- [catapult-client](git@github.com:symbol/catapult-client.git)
- [symbol-docs](git@github.com:symbol/symbol-docs.git)

From within ``catbuffer-parser`` run:

``` bash
python3 -m catparser -s ../catbuffer-schemas/symbol/all.cats -i ../catbuffer-schemas/symbol/ > ../catapult-docs-cli/symbol.yaml
```

This will produce a ``symbol.yaml`` in the ``catapult-docs-cli`` folder. Go to that folder and run:

``` bash
python3 -m catapult_docs_cli.cli serialization
```

The default values are already configured to work with the above folder structure so you don't need to provide any additional parameters.

The default output folder is ``../symbol-docs/source/serialization``, and a lot of ``.html`` and one ``.rst`` file will be generated there.

### Generate serialization docs for NEM

Checkout the following git repositories:

- [catapult-docs-cli](git@github.com:symbol/catapult-docs-cli.git)
- [catbuffer-schemas](git@github.com:symbol/catbuffer-schemas.git)
- [catbuffer-parser](git@github.com:symbol/catbuffer-parser.git)
- [nem-docs](git@github.com:NemProject/nem-docs.git)

From within ``catbuffer-parser`` run:

``` bash
python3 -m catparser -s ../catbuffer-schemas/nem/all.cats -i ../catbuffer-schemas/nem/ > ../catapult-docs-cli/nem.yaml
```

This will produce a ``nem.yaml`` in the ``catapult-docs-cli`` folder. Go to that folder and run:

``` bash
python3 -m catapult_docs_cli.cli serialization --schema nem.yaml -h ../catbuffer-schemas/nem -a tests/ -d ../nem-docs/_includes/serialization/ -f md
mv ../nem-docs/_includes/serialization/index.md ../nem-docs/pages/Developers/serialization/index.md
```

> **NOTE**: The ``-a tests/`` parameter looks for catapult source files in the ``tests`` folder, where it will find none. This is to disable looking for catapult source files. NEM sources are in Java which means some changes in the code to locate the sources.

> **NOTE**: The ``index.md`` goes to a different folder (hence the ``mv``) but I didn't want to complicate the usage by adding yet another path parameter, or making this tool aware of ``nem-docs`` structure.

## License

[MIT License](LICENSE.md)

Copyright (c) 2019 NEM.
