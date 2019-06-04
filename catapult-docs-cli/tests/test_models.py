from catapult_docs_cli.models import Text, Title, PropertiesTable, StatusErrorsTable


def test_model_text():
    text = Text('test')
    assert text.text == 'test'
    assert text.print() == 'test'


def test_model_title():
    title = Title('test')
    assert title.title == 'test'
    expected_title_formatted = title._format_tag()
    assert expected_title_formatted == 'test\n===='
    assert expected_title_formatted == title._format_tag()


def test_config_table():
    table = PropertiesTable([{'key': 'property', 'type': 'type', 'description': 'description', 'default': 'default'}])
    assert table.rows == [{'key': 'property', 'type': 'type', 'description': 'description', 'default': 'default'}]
    assert table.header == ['Property', 'Type', 'Description', 'Default']
    expected_header_formatted = '.. csv-table::\n    :header: "Property", "Type", ' \
                                '"Description", "Default"\n    :delim: ;'
    expected_rows_formatted = '\n    property; type; description; default'
    assert table._build_header() == expected_header_formatted
    assert table._format_rows() == expected_rows_formatted
    assert table.print() == expected_header_formatted + '\n' + expected_rows_formatted


def test_status_errors_table():
    table = StatusErrorsTable([{'key': 'key', 'code': 'code', 'description': 'description'}])
    assert table.rows == [{'key': 'key', 'code': 'code', 'description': 'description'}]
    assert table.header == ['Id', 'Status', 'Description']
    expected_header_formatted = '.. csv-table::\n    :header: "Id", "Status", "Description"\n    :delim: ;'
    expected_rows_formatted = '\n    code; key; description'
    assert table._build_header() == expected_header_formatted
    assert table._format_rows() == expected_rows_formatted
    assert table.print() == expected_header_formatted + '\n' + expected_rows_formatted
