from .base import Command
import subprocess


class CLIUsageCommand(Command):
    """Command to parse CLI usage into Markdown."""

    def execute(self):
        """Contains all the logic to execute a command."""
        print('# Commands' + '\n')
        for folder in self.config['folders']:
            print('## ' + folder['title'].title() + '\n')
            for command in folder['commands']:
                print('### ' + command.title() + '\n')
                cli_command = "symbol-cli " + folder['title'] + " " + command + " -h"
                process = subprocess.run(cli_command, shell=True, text=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
                print(process.stdout)
