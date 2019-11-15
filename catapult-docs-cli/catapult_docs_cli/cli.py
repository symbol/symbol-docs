import json

import click

from catapult_docs_cli.commands import PropertiesCommand, StatusErrorsCommand


def load_config(config):
    try:
        with open(config, encoding='utf-8') as file:
            return json.load(file)
    except IOError:
        click.ClickException('Operation failed: .catdocs file was not found.')


@click.command()
@click.option('--config', '-c', default='.catdocs', help='.catdocs file path')
@click.argument('command', required=True)
def main(command, config):
    config = load_config(config)
    if command == 'properties':
        PropertiesCommand(config).execute()
    elif command == 'status-errors':
        StatusErrorsCommand(config).execute()
    else:
        raise click.ClickException('The specified option is not implemented.')
