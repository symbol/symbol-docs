from catapult_docs_cli.models import Text, Title, ConfigTable, StatusErrorsTable


def test_model_text():
    text = Text('test')
    assert text.text == 'test'
    assert text.print() == 'test'


def test_model_title():
    title = Title('test')
    assert title.title == 'test'
    expected_title_formatted = title._format_tag()
    assert expected_title_formatted == '####\ntest\n####'
    assert expected_title_formatted == title._format_tag()


def test_config_table():
    table = ConfigTable([{'key': 'property', 'type': 'type', 'description': 'description', 'default': 'default'}])
    assert table.rows == [{'key': 'property', 'type': 'type', 'description': 'description', 'default': 'default'}]
    assert table.header == ['Property', 'Type', 'Description', 'Default']
    expected_header_formatted = '.. csv-table::\n    :header: "Property", "Type", ' \
                                '"Description", "Default"\n    :delim: ;'
    expected_rows_formatted = '\n    property; type; description; default'
    assert table._build_header() == expected_header_formatted
    assert table._format_rows() == expected_rows_formatted
    assert table.print() == expected_header_formatted + '\n' + expected_rows_formatted


def test_status_errors_table():
    table = StatusErrorsTable([{'key': 'status', 'code': 'code', 'description': 'description'}])
    assert table.rows == [{'key': 'status', 'code': 'code', 'description': 'description'}]
    assert table.header == ['Status', 'Code', 'Description']
    expected_header_formatted = '.. csv-table::\n    :header: "Status", "Code", "Description"\n    :delim: ;'
    expected_rows_formatted = '\n    status; code; description'
    assert table._build_header() == expected_header_formatted
    assert table._format_rows() == expected_rows_formatted
    assert table.print() == expected_header_formatted + '\n' + expected_rows_formatted
