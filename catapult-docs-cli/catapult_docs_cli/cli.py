import json
import subprocess
import click

from catapult_docs_cli.commands import PropertiesCommand, StatusErrorsCommand, CLIUsageCommand, SerializationCommand


def load_config(config):
    """Reads the configuration from a file.

    Args:
        config (str): Relative path to the config (.catdocs) file.

    Returns:
        obj: The config parsed as a JSON object.
    """
    try:
        with open(config, encoding='utf-8') as file:
            return json.load(file)
    except IOError:
        click.ClickException('Operation failed: .catdocs file was not found.')


@click.command()
@click.option('--config', '-c', default='.catdocs', help='.catdocs file path')
@click.option('--mainnet-report', '-t', default='target/report/peer-node-config.csv', help='file containing the CSV report from a symbol-bootstrap MAINNET configuration')
@click.option('--schema', '-s', default='symbol.yaml', help='YAML file containing the whole Symbol schema obtained through the parser.')
@click.argument('command', required=True)
def main(command, config, mainnet_report, schema):
    """ COMMAND: properties | status-errors | cli-usage | serialization
    """
    config = load_config(config)
    config['mainnet_report'] = mainnet_report
    config['schema'] = schema
    config['core_version'] = subprocess.run(['git', '--git-dir', config['serverPath'] + '.git', 'describe', '--tags', '--abbrev=0'], stdout=subprocess.PIPE).stdout.decode('utf-8')
    if command == 'properties':
        PropertiesCommand(config).execute()
    elif command == 'status-errors':
        StatusErrorsCommand(config).execute()
    elif command == 'cli-usage':
        CLIUsageCommand(config).execute()
    elif command == 'serialization':
        SerializationCommand(config).execute()
    else:
        raise click.ClickException('Unknown command.')

if __name__ == '__main__':
    main()