from .utils import indent
from abc import ABC, abstractmethod


class Title:

    def __init__(self, title):
        self.title = title

    def _format_tag(self):
        tag = ''
        i = 0
        while i < len(self.title):
            tag += '='
            i += 1
        result = self.title + '\n' + tag
        return result

    def print(self):
        result = self._format_tag()
        print(result + '\n')
        return result


class Text:

    def __init__(self, text):
        self.text = text

    def print(self):
        print(self.text + '\n')
        return self.text


class Table(ABC):

    def __init__(self, header, rows):
        self.header = header
        self.rows = rows

    def _build_header(self):
        result = '.. csv-table::\n' + indent(':header: ', 4)
        for i, head in enumerate(self.header):
            if i != 0:
                result += (', "' + head + '"')
            else:
                result += '"' + head + '"'
        result += '\n' + indent(':delim: ;', 4)
        return result

    @abstractmethod
    def _format_rows(self):
        pass

    def print(self):
        result = self._build_header() + '\n' + self._format_rows()
        print(result + '\n')
        return result


class PropertiesTable(Table):

    def __init__(self, rows):
        Table.__init__(self, ['Property', 'Type', 'Description', 'Default'], rows)

    def _format_rows(self):
        result = ''
        for row in self.rows:
            key = row['key']
            classification = '' if 'type' not in row else row['type']
            description = '' if 'description' not in row else row['description']
            default = '' if 'default' not in row else row['default']
            result += '\n' + indent(key + "; " + classification + "; " + description + "; " + default, 4)
        return result


class StatusErrorsTable(Table):

    def __init__(self, rows):
        Table.__init__(self, ['Id', 'Status', 'Description'], rows)

    def _format_rows(self):
        result = ''
        for row in self.rows:
            key = row['key']
            code = row['code']
            description = '' if 'description' not in row else row['description']
            result += '\n' + indent(code + "; " + key + "; " + description, 4)
        return result
