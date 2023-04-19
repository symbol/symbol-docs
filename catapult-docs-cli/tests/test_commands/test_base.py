from catapult_docs_cli.commands.base import Paragraph, Title


def test_paragraph():
    text = Paragraph('test')
    assert text.text == 'test'
    assert text.to_string() == 'test\n'


def test_model_title():
    title = Title('test')
    assert title.title == 'test'
    expected_title_formatted = title._format_title()
    assert expected_title_formatted == 'test\n===='
    assert expected_title_formatted == title._format_title()
