# catapult-docs-cli

[![Build Status](https://travis-ci.org/nemtech/catapult-docs-cli.svg?branch=master)](https://travis-ci.org/nemtech/catapult-docs-cli)

Exports documentation available in ``catapult-server`` and ``catapult-rest`` code into reStructuredText tables. 

The generated outputs are used in the [NEM Developer Center](http://nemtech.github.io).

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