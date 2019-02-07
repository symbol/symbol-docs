# catapult docs cli

Exports some documentation from catapult code into reStructuredText tables.

The tables are used in the [NEM Developer Center](http://nemtech.github.io), and to get readable changelogs of the configuration properties and status errors.

# Installation

    $ pip install .

# Usage    
    
catapult-docs-cli COMMAND [OPTIONS]

| Option                | Description                                         |
|-----------------------|-----------------------------------------------------|
| -c, --config TEXT     | The .catdocs file path.                             |
| -s, --server TEXT     | The catapult-server folder path.                    |
| -s, --rest TEXT       | The catapult-rest folder path.                      |
| --help                | Show this message and exit.                         |


| Command               | Description                                         |
|-----------------------|-----------------------------------------------------|
| config                | Generates catapult server configuration docs.       |
| status-errors         | Generates catapult server/rest status errors docs.  |
| --help                | Show this message and exit.                         |

# Examples
    
## Generate configuration docs

``catapult-docs-cli config --config .catdocs --server catapult-server/``

## Generate status-errors docs

``catapult-docs-cli status-errors --config .catdocs --server catapult-server/ --rest catapult-rest/``
    
## Export generated docs to a file

``catapult-docs-cli config > config.rst``

## Compare differences between two versions

``diff config_bison.rst config_cow.rst``


# License

[MIT License](LICENSE.md)


