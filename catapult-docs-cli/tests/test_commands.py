from catapult_docs_cli.commands import PropertiesDocsParser, StatusErrorsDocsParser


def test_properties_docs_parser():
    parser = PropertiesDocsParser('test-config.properties', ['test-configInfo.h'], 'tests/example/',)
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


def test_status_docs_parser():
    parser = StatusErrorsDocsParser('status.js', ['Result.h'], 'tests/example/', 'tests/example/')
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
        {'key': 'Neutral_Test_Hash_In_Recency_Cache', 'code': '0x0122', 'description': 'Validation failed because XYZ.'},
        {'key': 'Failure_Test_Exceeded', 'code': '0x0123', 'description': 'Validation failed because XYZ.'},
    ]
