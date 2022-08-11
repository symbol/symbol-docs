from catapult_docs_cli.commands.properties import PropertiesParser, PropertiesTable


def test_properties_parser():
    parser = PropertiesParser('test-config.properties', ['test-configInfo.h'], 'tests/example/',)
    assert parser.source_file == 'tests/example/test-config.properties'
    assert parser.description_files == ['tests/example/test-configInfo.h']
    assert parser._parse_source_file() == [{'key': '**header**'}, {'key': 'variableName', 'default': 'test'}]
    assert parser._parse_description_files() == [{'key': 'variableName',
                                                         'type': 'array uint16',
                                                         'description': 'Set to true the parameter. *Note*: body.'}]
    assert parser.parse() == [{'key': '**header**'}, {'key': 'variableName',
                                                             'type': 'array uint16',
                                                             'description': 'Set to true the parameter. *Note*: body.',
                                                             'default': 'test'}]


def test_properties_table():
    table = PropertiesTable([{'key': 'property', 'type': 'type', 'description': 'description', 'default': 'default'}])
    assert table.rows == [{'key': 'property', 'type': 'type', 'description': 'description', 'default': 'default'}]
    assert table.header == ['Property', 'Type', 'Description', 'Default']
    expected_header_formatted = '.. csv-table::\n    :header: "Property", "Type", ' \
                                '"Description", "Default"\n    :delim: ;'
    expected_rows_formatted = '\n    property; type; description; default'
    assert table._format_header() == expected_header_formatted
    assert table._format_rows() == expected_rows_formatted
    assert table.to_string() == expected_header_formatted + '\n' + expected_rows_formatted
