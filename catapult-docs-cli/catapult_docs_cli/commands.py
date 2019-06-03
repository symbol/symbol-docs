from .utils import clean_dicts, merge_dicts, clean_line, clean_entity
from abc import ABC, abstractmethod


class Parser(ABC):

    def __init__(self, source_file, description_files):
        self.source_file = source_file
        self.description_files = description_files

    @abstractmethod
    def _parse_source_file(self):
        pass

    @abstractmethod
    def _parse_description_files(self):
        pass

    @abstractmethod
    def parse(self):
        pass


class PropertiesDocsParser(Parser):

    def __init__(self, source_file, description_files, server_path):
        _description_files = []
        for file in description_files:
            _description_files.append(server_path + file)
        Parser.__init__(self, server_path + source_file, _description_files)

    def _parse_source_file(self):
        try:
            with open(self.source_file, encoding='utf-8') as file:
                lines = file.readlines()
                rows = []
                for line in lines:
                    line = line.replace('\n', '')
                    if '[' in line:
                        rows.append({'key': "**" + line.replace('[', '').replace(']', '') + '**'})
                    elif line != '' and '#' not in line:
                        line_array = line.split('=')
                        # get key
                        key = line_array[0].replace(' ', '')
                        while any(key in x for x in rows):
                            key += "!"
                        # get default
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
                    antepenultimate_line = ''
                    penulimate_line = ''
                    lines = file.readlines()
                    for line in lines:
                        line = clean_line(line)
                        if ("///" in penulimate_line) and (";" in line) and ("(" not in line):
                            line_split = line.split(' ')
                            # get key
                            key = line_split[len(line_split)-1].replace(';', '').replace(' ', '')
                            key = key[0].lower() + key[1:]
                            # get type
                            classification = ' '.join(line_split[:len(line_split)-1]).lstrip()
                            # get description
                            description = ''
                            if "///" in antepenultimate_line:
                                description = antepenultimate_line.split('///')[1].lstrip() + " "
                            description += penulimate_line.split('///')[1].lstrip()
                            while any(key in x for x in rows):
                                key += "!"
                            rows.append({'key': key, 'type': classification, 'description': description})
                        antepenultimate_line = penulimate_line
                        penulimate_line = line
            except IOError:
                print('Operation failed: %s does not exist' % path)
        return rows

    def parse(self):
        return clean_dicts(merge_dicts(self._parse_source_file(), self._parse_description_files()))


class StatusErrorsDocsParser(Parser):

    def __init__(self, source_file, description_files, server_path, rest_path):
        _description_files = []
        for file in description_files:
            _description_files.append(server_path + file)
        Parser.__init__(self, rest_path + source_file, _description_files)

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
                    antepenultimate_line = ''
                    penulimate_line = ''
                    lines = file.readlines()
                    for line in lines:
                        line = clean_line(line)
                        if ("///" in penulimate_line) and ("DEFINE" in line) and (";" in line):
                            line_split = line.split('(')
                            # get key
                            entity = clean_entity(line_split[0])
                            key = entity + '_' + line_split[1].split(',')[0]
                            if 'Neutral' not in entity:
                                key = 'Failure_' + key
                            # get description
                            description = ''
                            if "///" in antepenultimate_line:
                                description = antepenultimate_line.split('///')[1].lstrip() + " "
                            description += penulimate_line.split('///')[1].lstrip()
                            rows.append({'key': key, 'description': description})
                        antepenultimate_line = penulimate_line
                        penulimate_line = line
            except IOError:
                print('Operation failed: %s does not exist' % path)
        return rows

    def parse(self):
        return clean_dicts(merge_dicts(self._parse_source_file(), self._parse_description_files()))
