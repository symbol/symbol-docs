from abc import ABC, abstractmethod
from catapult_docs_cli.utils import indent


class Command(ABC):
    """ Base class for commands.

    Attributes:
        config (obj): Command configuration.

    Args:
        config (obj): Command configuration.
    """

    def __init__(self, config):
        self.config = config

    @abstractmethod
    def execute(self):
        """Contains all the logic to execute a command."""


class Paragraph:
    """Represents a block of text within a RST document.

    Attributes:
        text (str): Body of the paragraph.

    Args:
        text (str): Body of the paragraph.
    """

    def __init__(self, text):
        self.text = text

    def to_string(self):
        """Formats a paragraph as a string.

        Returns:
            str: The paragraph formatted as a string.
        """
        return self.text + '\n'


class Yaml(ABC):
    """Base class to format tables within a yaml document.

    Attributes:
        rows (:obj:`list` of str): The rows of the table.

    Args:
        rows (:obj:`list` of str): The rows of the table.
    """

    def __init__(self, rows, note):
        self.rows = rows
        self.note = note

    @abstractmethod
    def _format_rows(self):
        """Formats the table rows as a string."""

    def to_string(self):
        """Formats the table as a string.

        Returns:
            str: The table formatted as a string.
        """
        result = self._format_rows()
        return result


class Table(ABC):
    """Base class to format tables within a RST document.

    Attributes:
        header (:obj:`list` of str): The header of the table.
        rows (:obj:`list` of str): The rows of the table.

    Args:
        header (:obj:`list` of str): The header of the table.
        rows (:obj:`list` of str): The rows of the table.
    """
    def __init__(self, header, widths, rows):
        self.header = header
        self.widths = widths
        self.rows = rows

    def _format_header(self):
        """Formats the table header as a string.

        Returns:
            str: The header formatted as a string.
        """
        result = '<table class="docutils" style="width:100%; table-layout:fixed;"><thead valign="bottom"><tr class="row-even" style="background-color:#C0C0C0">'
        for (head, width) in zip(self.header, self.widths):
            result += '<th class="head" style="width:' + width + '%">' + head + '</th>'
        result += '</tr></thead><tbody valign="top">\n'
        return result

    def _format_footer(self):
        """Formats the table footer as a string.

        Returns:
            str: The footer formatted as a string.
        """
        result = '</tbody></table>'
        return result

    @abstractmethod
    def _format_rows(self):
        """Formats the table rows as a string."""

    def to_string(self):
        """Formats the table as a string.

        Returns:
            str: The table formatted as a string.
        """
        result = self._format_header() + '\n' + self._format_rows() + self._format_footer()
        return result


class Title:
    """Base class for titles within a RST document.

    Attributes:
        title (string): The content of the title.

    Args:
        title (string): The content of the title.
    """

    def __init__(self, title, text, source, core_version):
        self.title = title
        self.text = text
        self.source = source
        self.core_version = core_version

    def to_string(self):
        """Formats the title as a string.

        Returns:
            str: The title formatted as a string.
        """
        result = ''
        # If we want the sections to appear in the page TOC they must be produced from rst :(
        #result += '<h2>' + self.title + '<a class="headerlink" href="#'
        #result += self.title.lower().replace(' ', '-') + '" title="Permalink to this headline">¶</a></h2>'
        if (self.text):
            result += self.text + '<br/>\n'
        result += '<small>From <code class="docutils literal"><span class="pre">' + self.source
        result += '</span></code> ' + self.core_version + '</small>'
        return result + '\n'

class Parser(ABC):
    """Base class for the code processor.

    Parsers looks for the properties list in one main file (source_files),
    and looks for the descriptions in a set of files (description_files).

    The source_file and description_files could belong to different projects.

    Attributes:
        source_file (string): Absolute path of the source file with the properties list.
        description_files (:obj:`list` of str): Absolute paths of the files with the descriptions.

    Args:
        source_file (string): Path of the source file with the properties list.
        description_files (:obj:`list` of str): Path of the files with the descriptions.
    """

    def __init__(self, source_file, description_files):
        self.source_file = source_file
        self.description_files = description_files

    @abstractmethod
    def _parse_source_file(self):
        """Parses the source file."""

    @abstractmethod
    def _parse_description_files(self):
        """Parses the description files."""

    @abstractmethod
    def parse(self):
        """Merges multiple parsers."""
