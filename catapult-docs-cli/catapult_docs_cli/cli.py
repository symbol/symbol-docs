import json
import subprocess
import click

from catapult_docs_cli.commands import PropertiesCommand, StatusErrorsCommand, CLIUsageCommand


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
@click.option('--testnet-report', '-t', default='target/report/peer-node-config.csv', help='file containing the CSV report from a symbol-bootstrap TESTNET configuration')
@click.argument('command', required=True)
def main(command, config, testnet_report):
    config = load_config(config)
    config['testnet_report'] = testnet_report
    config['core_version'] = subprocess.run(['git', '--git-dir', config['serverPath'] + '.git', 'describe', '--tags', '--abbrev=0'], stdout=subprocess.PIPE).stdout.decode('utf-8')
    if command == 'properties':
        PropertiesCommand(config).execute()
    elif command == 'status-errors':
        StatusErrorsCommand(config).execute()
    elif command == 'cli-usage':
        CLIUsageCommand(config).execute()
    else:
        raise click.ClickException('The specified option is not implemented.')
