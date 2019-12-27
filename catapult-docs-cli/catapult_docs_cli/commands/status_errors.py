from catapult_docs_cli.utils import clean_dicts, clean_entity, merge_dicts, clean_line, indent
from .base import Command, Table, Title, Paragraph, Parser


class StatusErrorsCommand(Command):
    """Command to parse status errors from catapult-rest (catapult-sdk/src/model/status.js) into RST text.

    The command searches in catapult-server code the description for each status error.
    """

    def execute(self):
        """Contains all the logic to execute a command."""
        for c in self.config['status-errors']:
            print(Title(c['title']).to_string())
            if c['text']:
                print(Paragraph(c['text']).to_string())
            print(StatusErrorsTable(
                StatusErrorsParser(c['source'], c['descriptions'],
                                   self.config['serverPath'], self.config['restPath']).parse()).to_string() + '\n')


class StatusErrorsTable(Table):
    """Class to format a set of status errors into RST.

    Each row contains:
        - The status error ID in hexadecimal.
        - The status error friendly name.
        - The status error description.
    """

    def __init__(self, rows):
        super().__init__(['Id', 'Status', 'Description'], rows)

    def _format_rows(self):
        """Formats the table rows as a str.

        Returns:
            str: The rows formatted as a str.
        """
        result = ''
        for row in self.rows:
            key = row['key']
            code = row['code']
            description = '' if 'description' not in row else row['description']
            result += '\n' + indent(code + "; " + key + "; " + description, 4)
        return result


class StatusErrorsParser(Parser):
    """Class to parse Catapult status-errors from catapult-rest code.

    Parsers looks for the status errors list in one main catapult-rest file (catapult-sdk/src/model/status.js),
    and looks for the descriptions in a set of catapult-server files (*validators/Results.h).

    Args:
        source_file (str): Relative path of the source file with the status errors list (status.js).
        description_files (:obj:`list` of str): Relative paths of the files with the descriptions (*validators/Results.h).
        server_path (str): Absolute path where catapult-server is located.
        rest_path (str): Absolute path where catapult-rest is located.
    """

    def __init__(self, source_file, description_files, server_path, rest_path):
        super().__init__(rest_path + source_file, list(map(lambda file: server_path + file, description_files)))

    def _parse_source_file(self):
        """Parses the source file.

        Picks the id and name of each status error.

        Returns:
            rows (:obj:`list` of str): The status errors formatted as rows.
        """
        try:
            with open(self.source_file, encoding='utf-8') as file:
                lines = file.readlines()
                rows = []
                for line in lines:
                    line = line.replace('\n', '')
                    if 'case 0x' in line:
                        # get key
                        key = line.split("'")[1]
                        # get code
                        code = line.split(":")[0].replace('case', '').lstrip()
                        rows.append({'key': key, 'code': code})
                return rows
        except IOError:
            print('Operation failed: %s does not exist' % self.source_file)

    def _parse_description_files(self):
        """Parses the description files.

        Picks the name and description of each status error.

        Returns:
            rows (:obj:`list` of str): The status errors formatted as rows.
        """
        rows = []
        for path in self.description_files:
            try:
                with open(path, encoding='utf-8') as file:
                    # buffers to store last two lines processed
                    buffer1 = ''
                    buffer2 = ''
                    lines = file.readlines()
                    for line in lines:
                        line = clean_line(line)
                        # detect line to process
                        if ("///" in buffer1) and ("DEFINE" in line) and (";" in line):
                            line_split = line.split('(')
                            # get key
                            entity = clean_entity(line_split[0])
                            key = entity + '_' + line_split[1].split(',')[0]
                            if 'Neutral' not in entity:
                                key = 'Failure_' + key
                            # get description
                            description = ''
                            if "///" in buffer2:
                                description = buffer2.split('///')[1].lstrip() + " "
                            description += buffer1.split('///')[1].lstrip()
                            rows.append({'key': key, 'description': description})
                        buffer2 = buffer1
                        buffer1 = line
            except IOError:
                print('Operation failed: %s does not exist' % path)
        return rows

    def parse(self):
        """Merges source and description parsers.

        Returns:
            rows (:obj:`list` of str): The status errors formatted as rows.
        """
        return clean_dicts(merge_dicts(self._parse_source_file(), self._parse_description_files()))
