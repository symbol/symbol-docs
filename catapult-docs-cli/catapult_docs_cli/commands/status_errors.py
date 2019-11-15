from catapult_docs_cli.utils import clean_dicts, clean_entity, merge_dicts, clean_line, indent
from .base import Command, Table, Title, Paragraph, Parser


class StatusErrorsCommand(Command):

    def execute(self):
        for c in self.config['status-errors']:
            print(Title(c['title']).to_string())
            if c['text']:
                print(Paragraph(c['text']).to_string())
            print(StatusErrorsTable(
                StatusErrorsParser(c['source'], c['descriptions'],
                                   self.config['serverPath'], self.config['restPath']).parse()).to_string() + '\n')


class StatusErrorsTable(Table):

    def __init__(self, rows):
        super().__init__(['Id', 'Status', 'Description'], rows)

    def _format_rows(self):
        result = ''
        for row in self.rows:
            key = row['key']
            code = row['code']
            description = '' if 'description' not in row else row['description']
            result += '\n' + indent(code + "; " + key + "; " + description, 4)
        return result


class StatusErrorsParser(Parser):

    def __init__(self, source_file, description_files, server_path, rest_path):
        super().__init__(rest_path + source_file, list(map(lambda file: server_path + file, description_files)))

    def _parse_source_file(self):
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
        return clean_dicts(merge_dicts(self._parse_source_file(), self._parse_description_files()))
