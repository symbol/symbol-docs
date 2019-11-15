from catapult_docs_cli.utils import clean_dicts, merge_dicts, clean_line, indent
from .base import Command, Table, Title, Paragraph, Parser


class PropertiesCommand(Command):

    def execute(self):
        for c in self.config['properties']:
            print(Title(c['title']).to_string())
            if c['text']:
                print(Paragraph(c['text']).to_string())
            print(PropertiesTable(
                PropertiesParser(c['source'], c['descriptions'], self.config['serverPath']).parse()).to_string() + '\n')


class PropertiesTable(Table):

    def __init__(self, rows):
        super().__init__(['Property', 'Type', 'Description', 'Default'], rows)

    def _format_rows(self):
        result = ''
        for row in self.rows:
            key = row['key']
            classification = '' if 'type' not in row else row['type']
            description = '' if 'description' not in row else row['description']
            default = '' if 'default' not in row else row['default']
            result += '\n' + indent(key + "; " + classification + "; " + description + "; " + default, 4)
        return result


class PropertiesParser(Parser):

    def __init__(self, source_file, description_files, server_path):
        super().__init__(server_path + source_file, list(map(lambda file: server_path + file, description_files)))

    def _parse_source_file(self):
        try:
            with open(self.source_file, encoding='utf-8') as file:
                lines = file.readlines()
                rows = []
                for line in lines:
                    # remove line break
                    line = line.replace('\n', '')
                    # format section
                    if '[' in line:
                        rows.append({'key': "**" + line.replace('[', '').replace(']', '') + '**'})
                    # format regular property
                    elif line != '' and '#' not in line:
                        line_array = line.split('=')
                        # get key
                        key = line_array[0].replace(' ', '')
                        # if key already exists, make it unique
                        while any(key in x for x in rows):
                            key += "!"
                        # get default value
                        default = line_array[1].lstrip()
                        rows.append({'key': key, 'default': default})
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
                        if ("///" in buffer1) and (";" in line) and ("(" not in line):
                            line_split = line.split(' ')
                            # get key
                            key = line_split[len(line_split)-1].replace(';', '').replace(' ', '')
                            key = key[0].lower() + key[1:]
                            while any(key in x for x in rows):
                                key += "!"
                            # get type
                            classification = ' '.join(line_split[:len(line_split)-1]).lstrip()
                            # get description
                            description = ''
                            if "///" in buffer2:
                                description = buffer2.split('///')[1].lstrip() + " "
                            description += buffer1.split('///')[1].lstrip()
                            # if key already exists, make it unique
                            rows.append({'key': key, 'type': classification, 'description': description})
                        buffer2 = buffer1
                        buffer1 = line
            except IOError:
                print('Operation failed: %s does not exist' % path)
        return rows

    def parse(self):
        return clean_dicts(merge_dicts(self._parse_source_file(), self._parse_description_files()))