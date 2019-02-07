from catapult_docs_cli.commands import ConfigurationDocsParser, StatusErrorsDocsParser


def test_config_docs_parser():
    config_parser = ConfigurationDocsParser('test-config.properties', ['test-configInfo.h'], 'tests/example/',)
    assert config_parser.source_file == 'tests/example/test-config.properties'
    assert config_parser.description_files == ['tests/example/test-configInfo.h']
    assert config_parser._parse_source_file() == [{'key': '**header**'}, {'key': 'variableName', 'default': 'test'}]
    assert config_parser._parse_description_files() == [{'key': 'variableName',
                                                         'type': 'array uint16',
                                                         'description': 'Returns the parameter. *Note*: body.'}]
    assert config_parser.parse() == [{'key': '**header**'}, {'key': 'variableName',
                                                             'type': 'array uint16',
                                                             'description': 'Returns the parameter. *Note*: body.',
                                                             'default': 'test'}]


def test_status_docs_parser():
    config_parser = StatusErrorsDocsParser('status.js', ['Result.h'], 'tests/example/', 'tests/example/')
    assert config_parser.source_file == 'tests/example/status.js'
    assert config_parser.description_files == ['tests/example/Result.h']
    assert config_parser._parse_source_file() == [{'key': 'Failure_Test_Exceeded', 'code': '0x0123'}]
    assert config_parser._parse_description_files() == [{'key': 'Failure_Test_Exceeded',
                                                         'description': 'Validation failed because XYZ.'}]
    assert config_parser.parse() == [{'key': 'Failure_Test_Exceeded',
                                      'code': '0x0123',
                                      'description': 'Validation failed because XYZ.'}]
