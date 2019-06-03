import click
import json
from .commands import PropertiesDocsParser, StatusErrorsDocsParser
from .models import Title, Text, PropertiesTable, StatusErrorsTable


def load_config(config):
    try:
        with open(config, encoding='utf-8') as file:
            return json.load(file)
    except IOError:
        click.ClickException('Operation failed: .catdocs file was not found.')


def properties_docs_command(config, server_path):
    for c in config['config']:
        Title(c['title']).print()
        if c['text']:
            Text(c['text']).print()
        PropertiesTable(PropertiesDocsParser(c['source'], c['descriptions'], server_path).parse()).print()


def status_errors_docs_command(config, server_path, rest_path):
    for c in config['status-errors']:
        Title(c['title']).print()
        if c['text']:
            Text(c['text']).print()
        StatusErrorsTable(StatusErrorsDocsParser(c['source'], c['descriptions'], server_path, rest_path)
                          .parse()).print()


@click.command()
@click.option('--config', '-c', default='.catdocs', help='.catdocs file path')
@click.option('--server', '-s', default='./catapult-server/', help='The catapult-server folder path.')
@click.option('--rest', '-s', default='./catapult-rest/', help='The catapult-rest folder path.')
@click.argument('command', required=True)
def main(command, config, server, rest):
    config = load_config(config)

    if command == 'properties':
        properties_docs_command(config, server)
    elif command == 'status-errors':
        status_errors_docs_command(config, server, rest)
    else:
        raise click.ClickException('The specified option is not implemented.')
