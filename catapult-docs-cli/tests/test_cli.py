import pytest
from click.testing import CliRunner

from catapult_docs_cli.cli import main, load_config


@pytest.fixture
def runner():
    return CliRunner()


def test_cli_properties(runner):
    result = runner.invoke(main, ['properties', '--config', 'tests/example/.catdocs'])
    assert result.exit_code == 0
    assert not result.exception


def test_cli_status_errors(runner):
    result = runner.invoke(main, ['status-errors', '--config', 'tests/example/.catdocs'])
    assert result.exit_code == 0
    assert not result.exception


def test_cli_with_invalid_option(runner):
    result = runner.invoke(main, ['invalid-option', '--config', 'tests/example/.catdocs'])
    assert result.exit_code == 1
    assert result.exception


def test_load_config():
    result = load_config('tests/example/.catdocs')
    assert result is not None
