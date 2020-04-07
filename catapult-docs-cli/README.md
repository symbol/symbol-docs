# catapult-docs-cli

[![PyPI](https://img.shields.io/pypi/v/catapultdocscli)](https://pypi.org/project/catapultdocscli/)
[![Build Status](https://travis-ci.com/nemtech/catapult-docs-cli.svg?branch=master)](https://travis-ci.com/nemtech/catapult-docs-cli)

Exports documentation available in ``catapult-server`` and ``catapult-rest`` code into reStructuredText tables. 

The generated outputs are used in the [Symbol Developer Documentation](http://nemtech.github.io).

## Requirements

- Python 3.4+
- pip

## Installation

1. Clone the repository.

```
git clone https://github.com/nemtech/catapult-docs-cli.git
cd catapult-docs-clli
```

2. Install the command-line tool.

```
pip install .
```

3. Clone ``catapult-server`` and ``catapult-rest``.

```
git clone https://github.com/nemtech/catapult-server.git
git clone https://github.com/nemtech/catapult-rest.git
```

## Usage 
   
```  
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

## Usage
    
### Generate catapult-server properties docs

```
catapult-docs-cli properties --config .catdocs
```


### Generate catapult-rest status-errors docs

```
catapult-docs-cli status-errors --config .catdocs
```

### Generate symbol-cli command docs

```
catapult-docs-cli cli-usage --config .clidocs
```
    
### Export generated docs to a file

```
catapult-docs-cli properties > properties.rst
```

### Compare differences between two versions

```
diff properties_bison.rst properties_cow.rst
```

## License

[MIT License](LICENSE.md)

Copyright (c) 2019 NEM.
