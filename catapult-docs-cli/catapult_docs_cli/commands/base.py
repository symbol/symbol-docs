from abc import ABC, abstractmethod
from catapult_docs_cli.utils import indent


class Command(ABC):
    def __init__(self, config):
        self.config = config

    @abstractmethod
    def execute(self):
        return self.parser.parse()


class Paragraph:

    def __init__(self, text):
        self.text = text

    def to_string(self):
        return self.text + '\n'


class Table(ABC):

    def __init__(self, header, rows):
        self.header = header
        self.rows = rows

    def _format_header(self):
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

    def to_string(self):
        result = self._format_header() + '\n' + self._format_rows()
        # print(result + '\n')
        return result


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

    def to_string(self):
        result = self._format_tag()
        return result + '\n'


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
