# catapult-docs-cli

Exports some documentation from catapult code into reStructuredText tables.

The generated tables are used in the [NEM Developer Center](http://nemtech.github.io).

## Installation

```
pip install .
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
| -s, --server TEXT     | The catapult-server folder path.                    |
| -s, --rest TEXT       | The catapult-rest folder path.                      |
| --help                | Show this message and exit.                         |

## Examples
    
### Generate catapult-server properties docs

```
catapult-docs-cli properties --config .catdocs --server catapult-server/
```


### Generate catapult-rest status-errors docs

```
catapult-docs-cli status-errors --config .catdocs --server catapult-server/ --rest catapult-rest/
```
    
### Export generated docs to a file

```
catapult-docs-cli properties > properties.rst
```

### Compare differences between two versions

```
diff properties_bison.rst properties_cow.rst``
```

## License

[MIT License](LICENSE.md)