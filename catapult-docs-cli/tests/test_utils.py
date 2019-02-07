from catapult_docs_cli.utils import indent, merge_dicts, clean_dicts, clean_line, clean_entity


def test_utils_indent():
    assert indent('test', 4) == '    test'


def test_merge_dicts():
    dict_a = [{'key': 'test', 'attr1': 1, 'attr2': 2}]
    dict_b = [{'key': 'test', 'attr3': 3}]
    assert merge_dicts(dict_a, dict_b) == [{'key': 'test', 'attr1': 1, 'attr2': 2, 'attr3': 3}]


def test_clean_dicts():
    dict_a = [{'key': 'test!'}]
    assert clean_dicts(dict_a) == [{'key': 'test'}]


def test_clean_lines():
    line = '\\c the \\a parameter.\n \\note Teststd::.'
    assert clean_line(line) == 'Returns the parameter. *Note*: Test.'


def test_clean_entity():
    assert clean_entity('DEFINE_LOCKHASH__RESULT') == 'LockHash'
    assert clean_entity('DEFINE_ACCOUNT_LINK_RESULT') == 'AccountLink'
