from catapult_docs_cli.commands.status_errors import StatusErrorsParser, StatusErrorsTable


def test_status_errors_parser():
    parser = StatusErrorsParser('status.js', ['Result.h'], 'tests/example/', 'tests/example/')
    assert parser.source_file == 'tests/example/status.js'
    assert parser.description_files == ['tests/example/Result.h']
    assert parser._parse_source_file() == [
        {'key': 'Neutral_Test_Hash_In_Recency_Cache', 'code': '0x0122'},
        {'key': 'Failure_Test_Exceeded', 'code': '0x0123'},
    ]
    assert parser._parse_description_files() == [
        {'key': 'Neutral_Test_Hash_In_Recency_Cache', 'description': 'Validation failed because XYZ.'},
        {'key': 'Failure_Test_Exceeded', 'description': 'Validation failed because XYZ.'},
    ]
    assert parser.parse() == [
        {'key': 'Neutral_Test_Hash_In_Recency_Cache', 'code': '0x0122',
         'description': 'Validation failed because XYZ.'},
        {'key': 'Failure_Test_Exceeded', 'code': '0x0123',
         'description': 'Validation failed because XYZ.'},
    ]


def test_status_errors_table():
    table = StatusErrorsTable([{'key': 'key', 'code': 'code', 'description': 'description'}])
    assert table.rows == [{'key': 'key', 'code': 'code', 'description': 'description'}]
    assert table.header == ['Id', 'Status', 'Description']
    expected_header_formatted = '.. csv-table::\n    :header: "Id", "Status", "Description"\n    :delim: ;'
    expected_rows_formatted = '\n    code; key; description'
    assert table._format_header() == expected_header_formatted
    assert table._format_rows() == expected_rows_formatted
    assert table.to_string() == expected_header_formatted + '\n' + expected_rows_formatted
