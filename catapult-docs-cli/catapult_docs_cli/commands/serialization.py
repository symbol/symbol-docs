import re
import os
import ruamel.yaml as yaml
from markdown import markdown, Markdown
from .base import Command
from io import StringIO

def unmark_element(element, stream=None):
    """Markdown renderer that ignores markup and outputs only plain text.
    """
    if stream is None:
        stream = StringIO()
    if element.text:
        stream.write(element.text)
    for sub in element:
        unmark_element(sub, stream)
    if element.tail:
        stream.write(element.tail)
    return stream.getvalue()

# This adds an output_format to the Markdown parser to produce plain text.
# Useful for stripping out markdown formatting. https://stackoverflow.com/a/54923798
Markdown.output_formats["plain"] = unmark_element
__md = Markdown(output_format="plain")
__md.stripTopLevelTags = False

def make_anchor(type):
    """Takes a type name in CamelCase and returns the label (anchor) equivalent which is
    all lower case, as the labels Sphinx generates for headers.
    """
    return type.lower()

def make_keyword(keyword):
    """Adds HTML <code> tags around input
    """
    return '<code class="docutils literal">{}</code>'.format(keyword)

def make_breakable(keyword):
    """Inserts zero-width-space HTML entities after each underscore IF the keyword is long.
       This is useful to allow long keywords to be split into different lines.
    """
    return '_&ZeroWidthSpace;'.join(keyword.split('_')) if len(keyword) > 30 else keyword

def make_size_label(size, var):
    """Takes a `size` and a flag `var` indicating if the size is variable and
    returns an HTML string describing it. E.g. "16+ bytes = 0x10+ (variable)"
    """
    template = '{} byte{} = {}' if var == 0 else '{}+ byte{} = {}+ <i>(variable)</i>'
    return template.format(size, '' if size == 1 else 's', hex(size))

def make_title(comment):
    """Replace quotes with &quot; and use only the first line, so comments can be used inside HTML attributes.
    """
    return __md.convert(comment.partition('\n')[0].replace('"', '&quot;'))

def find_schema_locations(path):
    """Find all schema files in the given path and quickly scan them to find struct and enum definition locations.
    """
    locations = {}
    fullpath = os.path.abspath(path)
    for root, dirs, filenames in os.walk(fullpath):
        # Remove .git from the search. This functionality prevents me from using glob.glob() or pathlib.rglob().
        dirs[:] = [d for d in dirs if d not in ['.git']]
        for filename in filenames:
            # Only interested in schema files
            if filename.endswith(".cats"):
                absfilename = os.path.join(root, filename)
                f = open(absfilename, "r")
                for linenum, line in enumerate(f):
                    # If line contains "struct" or "enum" followed by a keyword...
                    m = re.search(r'^(struct|enum) ([0-9a-zA-Z]+)\b', line)
                    if m:
                        # Store the file path and line number, indexed by the keyword
                        locations[m.group(2)] = (os.path.relpath(absfilename, fullpath), linenum + 1)
    return locations

def find_catapult_model_locations(path):
    """Find all catapult-client model files in the given path and quickly scan them to find struct and enum definition locations.
    """
    locations = {}
    fullpath = os.path.abspath(path)
    for root, dirs, filenames in os.walk(fullpath):
        # Remove .git and _build from the search. This functionality prevents me from using glob.glob() or pathlib.rglob().
        dirs[:] = [d for d in dirs if d not in ['.git', '_build']]
        for filename in filenames:
            # Only interested in header files
            if filename.endswith(".h"):
                absfilename = os.path.join(root, filename)
                f = open(absfilename, "r")
                for linenum, line in enumerate(f):
                    # Detect all struct and enum definitions. There are several checks because macros make detection complex.
                    m = re.search(r'\b(struct|enum class) ([a-zA-Z]+)\b', line)
                    if m:
                        locations[m.group(2)] = (os.path.relpath(absfilename, fullpath), linenum + 1)
                        continue
                    m = re.search(r'DEFINE_EMBEDDABLE_TRANSACTION\(([a-zA-Z]+)\)', line)
                    if m:
                        locations[m.group(1) + 'Transaction'] = (os.path.relpath(absfilename, fullpath), linenum + 1)
                        locations['Embedded' + m.group(1) + 'Transaction'] = (os.path.relpath(absfilename, fullpath), linenum + 1)
                        continue
                    m = re.search(r'DEFINE_EMBEDDABLE_TRANSACTION\(([a-zA-Z]+)##[A-Z_]+##([a-zA-Z]+)\)', line)
                    if m:
                        locations[m.group(1) + 'Address' + m.group(2) + 'Transaction'] = (os.path.relpath(absfilename, fullpath), linenum + 1)
                        locations[m.group(1) + 'Mosaic' + m.group(2) + 'Transaction'] = (os.path.relpath(absfilename, fullpath), linenum + 1)
                        locations['Embedded' + m.group(1) + 'Address' + m.group(2) + 'Transaction'] = (os.path.relpath(absfilename, fullpath), linenum + 1)
                        locations['Embedded' + m.group(1) + 'Mosaic' + m.group(2) + 'Transaction'] = (os.path.relpath(absfilename, fullpath), linenum + 1)
                        continue
                    m = re.search(r'DEFINE_ACCOUNT_RESTRICTION_TRANSACTION\(([a-zA-Z]+)', line)
                    if m:
                        locations['Account' + m.group(1) + 'RestrictionTransaction'] = (os.path.relpath(absfilename, fullpath), linenum + 1)
                        locations['EmbeddedAccount' + m.group(1) + 'RestrictionTransaction'] = (os.path.relpath(absfilename, fullpath), linenum + 1)
                        continue
    # Add special case for AggregateCompleteTransaction and AggregateBondedTransaction, which are actually just AggregateTransactions
    if 'AggregateTransaction' in locations:
        locations['AggregateCompleteTransaction'] = locations['AggregateTransaction']
        locations['AggregateBondedTransaction'] = locations['AggregateTransaction']
    return locations

class SerializationCommand(Command):
    """Command to parse the Symbol or NEM schema YAML file into a ReStructured Text documentation page.

    Reads configuration from `self.config`, parses a YAML file produced by `catbuffer-parser`
    and prints to stdout a RST file.
    """

    def calc_total_type_size(self, element):
        """Receives a YAML object describing a type and returns a tuple containing:
        first: The total size in bytes of the type (calculated recursively)
        second: A flag indicating if the size is variable. When 1, the calculated
           size is actually the _minimum_ type size.
        A type is deemed variable if its size is not an integer (e.g: message[message_size]).
        """
        size = 0
        var = 0
        if element['type'] == 'byte':
            if isinstance(element['size'], int):
                size = int(element['size'])
            else:
                var = 1
        elif element['type'] == 'enum':
            size = int(element['size'])
        else:
            # Structs
            for f in element['layout']:
                if f['type'] == 'byte':
                    field_size = 1
                    field_var = 0
                else:
                    (field_size, field_var) = self.calc_total_type_size(self.types[f['type']])
                if isinstance(f.get('size', 1), int):
                    # If the field has an int `size`, OR it has no size (and then we assume it's 1)
                    size += field_size * int(f.get('size', 1))
                    var += field_var
                else:
                    # If the size is not an int it means it is variable
                    var = 1
        return (size, var)

    def field_description(self, field):
        """Receives a YAML object describing a struct field and returns an HTML string.
        For example: "byte[4]", or an HTML hyperlink to another type in the page.
        """
        if field['type'] == 'byte':
            return 'byte[{}]'.format(field['size'])
        else:
            # Add the array indicator only if the field has a size
            return '<a href="{}#{}" title="{}">{}</a>{}'.format(self.page_prefix, make_anchor(field['type']), make_title(self.types[field['type']]['comments']), field['type'],
                '' if field.get('size', 0) == 0 else '&ZeroWidthSpace;[{}]'.format(field['size']))

    def type_description(self, element):
        """Receives a YAML object describing a type and returns an HTML string containing
        a hyperlink to its section in the page.
        """
        return '<a href="{}#{}" title="{}">{}</a>'.format(self.page_prefix, make_anchor(element['name']), make_title(element['comments']), element['name'])

    def parse_comment(self, comment):
        """Build proper HTML comments:
        - Turn markdown present in the comments into HTML code.
        - Detect type names and turn them into links.
        - Turn line breaks into <br/> (RST is very picky wrt indentation)
        """
        output = ''
        first_line = True
        for line in comment.split('\n'):
            if first_line:
                first_line = False
            else:
                output += '<br/>'
            ignore_keywords = False
            for word in line.split():
                if word[0] == '[':
                    # Do not look for keywords inside [markdown links](like this one).
                    ignore_keywords = True
                # Separate any non-keyword chars (like parenthesis or punctuation) before looking words up
                # (And special-case an optional ending 's' for things like "MosaicId's")
                m = re.search(r'^([^a-zA-Z]*)([a-zA-Z]+)([^a-rt-zA-Z]*)$', word)
                if not ignore_keywords and m and m.group(2) in self.types:
                    output += m.group(1) + self.type_description(self.types[m.group(2)]) + m.group(3)
                elif word == '\\note':
                    output += '<br/><b>Note:</b>'
                else:
                    output += word
                output += ' '
                if word[-1] == ')':
                    ignore_keywords = False
        return markdown(output).replace('<code>', '<code class="docutils literal">')

    def print_rst_header(self, element, index_file):
        """Prints RST header common to Enums and Structs, including:
        - A RST label so this type can be referenced from other places
        - A RST header so Sphinx adds <h3> tags
        """
        name = element['name']
        print('.. _{}:'.format(make_anchor(name)), file=index_file)
        print(file=index_file)
        print(name, file=index_file)
        print('=' * len(name), file=index_file)
        print(file=index_file)

    def print_md_header(self, element, index_file):
        """Prints MD header common to Enums and Structs
        """
        name = element['name']
        print('### {}'.format(name), file=index_file)
        print('{:.no_toc}', file=index_file)
        print(file=index_file)

    def print_html_header(self, element, size, var, html_file):
        """Prints HTML header common to Enums and Structs, including:
        - An two-cells HTML table containing the type's description on the left and
          an info box on the right with type size and code links.
        """
        name = element['name']
        print('<table style="width: 100%;"><tr><td>', file=html_file)
        print('    <div class="side-info"><table>', file=html_file)
        print('    <tr><td class="side-info-icon">&varr;</td><td>Size: {}</td></tr>'.format(make_size_label(size, var)), file=html_file)
        if name in self.type_schema_locations:
            print('    <tr><td class="side-info-icon"><i class="fab fa-github"></i></td>'
                '<td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/{}/{}#L{}">schema</a></td></tr>'.format( \
                    self.source_api, self.type_schema_locations[name][0], self.type_schema_locations[name][1]), file=html_file)
        if name in self.type_catapult_locations:
            print('    <tr><td class="side-info-icon"><i class="fab fa-github"></i></td>'
                '<td><a href="https://github.com/symbol/catapult-client/blob/main/{}#L{}">catapult model</a></td></tr>'.format(
                    self.type_catapult_locations[name][0], self.type_catapult_locations[name][1]), file=html_file)
        print('    </table></div>', file=html_file)
        print(self.parse_comment(element['comments']), file=html_file)
        print('</td></tr></table>', file=html_file)
        print(file=html_file)

    def print_type(self, element, index_file):
        """Adds a row to the basic types HTML table.
        """
        print('   <div id="{}"><b>{}</b></div>'.format(make_anchor(element['name']), element['name']), file=index_file)
        print('   <div>{}&nbsp;{}byte{}</div>'.
            format(element['size'], 'u' if element['signedness'] == 'unsigned' else '', 's' if element['size'] > 1 else ''), file=index_file)
        print('   <div class="description">{}</div>'.format(self.parse_comment(element['comments'])), file=index_file)

    def print_enum(self, element):
        """Describes an Enum type using the common header and an HTML table with all the values.
        """
        filename = os.path.join(self.config['dst_path'], '{}.html'.format(element['name']))
        with open(filename, 'w') as html_file:
            self.print_html_header(element, element['size'], 0, html_file)
            print('<div class="big-table3">', file=html_file)
            for v in element['values']:
                print('<div><b>{}</b></div>'.format(hex(v['value'])), file=html_file)
                print('<div>{}</div>'.format(make_keyword(v['name'])), file=html_file)
                print('<div class="description">{}</div>'.format(self.parse_comment(v['comments'])), file=html_file)
            print('</div>', file=html_file)

    def print_struct_content(self, element, indent, html_file):
        """Internal method to describe a Struct type. It calls itself to describe inlined structs, increasing the `indent` parameter.
        It prints HTML table rows so it assumes an HTML table with the correct number of columns has been already opened.
        Each entry in the `layout` array is printed as a row with name, type and description, except for inline struct which are expanded
        in place.
        """
        for v in element['layout']:
            comment = ''
            disposition = v.get('disposition') or ''
            if disposition == 'inline':
                (size, var) = self.calc_total_type_size(self.types[v['type']])
                size_label = make_size_label(size, var)
                # Manual handling of up to 3 indentation levels.
                # If we ever have more than these many levels this will need to be made more generic.
                if indent < 1:
                    print('   <div style="grid-column: 1 / span 6;" class="big-table-section">{}<span style="float:right">{}</span></div>'.
                        format(self.type_description(self.types[v['type']]), size_label), file=html_file)
                elif indent < 2:
                    print('   <div class="indentation-cell-h"></div>'
                        '<div style="grid-column: 2 / span 5;" class="big-table-section">{}<span style="float:right">{}</span></div>'.
                        format(self.type_description(self.types[v['type']]), size_label), file=html_file)
                else:
                    print('   <div class="indentation-cell-h"></div><div class="indentation-cell-h"></div>'
                        '<div style="grid-column: 3 / span 4;" class="big-table-section">{}<span style="float:right">{}</span></div>'.
                          format(self.type_description(self.types[v['type']]), size_label), file=html_file)
                self.print_struct_content(self.types[v['type']], indent + 1, html_file)
                continue
            elif disposition == 'const':
                type = self.types.get(v['type'])
                if type and type['type'] == 'enum':
                    comment = '<b>const</b> {} ({})<br/>'.format(make_keyword(v['value']), make_keyword(hex(type['values_dict'][v['value']]['value'])))
                else:
                    comment = '<b>const</b> {}<br/>'.format(make_keyword(v['value']))
            elif disposition == 'reserved':
                comment = '<b>reserved</b> {}<br/>'.format(make_keyword(v['value']))
            comment += self.parse_comment(v['comments'])
            print('   <div{}>&nbsp;</div>'.format('' if indent < 1 else ' class="indentation-cell"'), file=html_file)
            print('   <div{}>&nbsp;</div>'.format('' if indent < 2 else ' class="indentation-cell"'), file=html_file)
            print('   <div{}>&nbsp;</div>'.format('' if indent < 3 else ' class="indentation-cell"'), file=html_file)
            print('   <div>{}</div>'.format(make_keyword(make_breakable(v['name']))), file=html_file)
            print('   <div>{}</div>'.format(self.field_description(v)), file=html_file)
            print('   <div class="description">{}</div>'.format(comment), file=html_file)

    def print_struct(self, element):
        """Describes a Struct type using the common header and an HTML table with all the fields.
        It opens an HTML table with 6 columns: 3 for indentation and 3 for field data.
        Actual content is provided by print_struct_content().
        It adds a last row in the table with the list of all types which include this struct (only present
        in inline structs).
        """
        filename = os.path.join(self.config['dst_path'], '{}.html'.format(element['name']))
        with open(filename, 'w') as html_file:
            (size, var) = self.calc_total_type_size(element)
            self.print_html_header(element, size, var, html_file)
            print('<div class="big-table6">', file=html_file)
            self.print_struct_content(element, 0, html_file)
            print('</div>', file=html_file)
            if len(element['inlined-from']) > 0:
                print('<details><summary>Included in:</summary><div class="tabulated-list"><div>', file=html_file)
                print('</div><div>'.join(self.type_description(self.types[x]) for x in element['inlined-from']), file=html_file)
                print('</div></div></details>', file=html_file)
                print(file=html_file)

    def output_rst(self):
        """Creates an index file in ReStructuredText format and an HTML file for each structure.
        The index file includes all the other files.
        """
        filename = os.path.join(self.config['dst_path'], 'index.rst')
        index_file = open(filename, 'w')
        print('#############', file=index_file)
        print('Serialization', file=index_file)
        print('#############', file=index_file)
        print(file=index_file)
        print('The `catbuffer schemas <https://github.com/symbol/catbuffer-schemas>`_ repository defines how the different Symbol entities type should be serialized (for example, Transactions). In combination with the `catbuffer-generators <https://github.com/symbol/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages.', file=index_file)
        print(file=index_file)

        # Hide level 4 headers from local TOC using CSS: there's too many of them and I could not find
        # a Sphinx-friendly way of doing it.
        print('.. raw:: html', file=index_file)
        print(file=index_file)
        print('   <style>.bs-sidenav ul ul ul > li {display: none;}</style>', file=index_file)
        print(file=index_file)

        # Process all basic types
        print('Basic Types', file=index_file)
        print('***********', file=index_file)
        print(file=index_file)
        print('.. raw:: html', file=index_file)
        print(file=index_file)
        print('   <div class="big-table3">', file=index_file)
        for e in self.schema:
            if e['type'] == 'byte':
                self.print_type(e, index_file)
        print('   </div>', file=index_file)
        print(file=index_file)

        # Process all enums
        print('Enumerations', file=index_file)
        print('************', file=index_file)
        print(file=index_file)
        for e in self.schema:
            if e['type'] == 'enum':
                self.print_rst_header(e, index_file)
                print('.. raw:: html', file=index_file)
                print('   :file: {}.html'.format(e['name']), file=index_file)
                print(file=index_file)
                self.print_enum(e)

        # Process all "user" structs
        print('Structures', file=index_file)
        print('**********', file=index_file)
        print(file=index_file)
        for e in self.schema:
            if e['type'] == 'struct' and len(e['inlined-from']) == 0:
                self.print_rst_header(e, index_file)
                print('.. raw:: html', file=index_file)
                print('   :file: {}.html'.format(e['name']), file=index_file)
                print(file=index_file)
                self.print_struct(e)

        # Process all "inner" structs
        print('Inner Structures', file=index_file)
        print('****************', file=index_file)
        print(file=index_file)
        print('These are structures only meant to be included inside other structures.', file=index_file)
        print('Their description is already present in the containing structures above and is only repeated here for completeness.', file=index_file)
        print(file=index_file)
        for e in self.schema:
            if e['type'] == 'struct' and len(e['inlined-from']) > 0:
                self.print_rst_header(e, index_file)
                print('.. raw:: html', file=index_file)
                print('   :file: {}.html'.format(e['name']), file=index_file)
                print(file=index_file)
                self.print_struct(e)

        index_file.close()

    def output_md(self):
        """Creates an index file in MarkDown format and an HTML file for each structure.
        The index file includes all the other files.
        """
        filename = os.path.join(self.config['dst_path'], 'index.md')
        index_file = open(filename, 'w')

        # Frontmatter (admittedly customized for nem-docs)
        print('---', file=index_file)
        print('title: Serialization', file=index_file)
        print('parent: Developer resources', file=index_file)
        print('taxonomy:', file=index_file)
        print('    category:', file=index_file)
        print('        - docs', file=index_file)
        print('---', file=index_file)
        print(file=index_file)
        print('* TOC', file=index_file)
        print('{:toc}', file=index_file)

        # Process all basic types
        print('## Basic Types', file=index_file)
        print(file=index_file)
        print('<div class="big-table3">', file=index_file)
        for e in self.schema:
            if e['type'] == 'byte':
                self.print_type(e, index_file)
        print('</div>', file=index_file)
        print(file=index_file)

        # Process all enums
        print('## Enumerations', file=index_file)
        print(file=index_file)
        for e in self.schema:
            if e['type'] == 'enum':
                self.print_md_header(e, index_file)
                print('{{% include serialization/{}.html %}}'.format(e['name']), file=index_file)
                print(file=index_file)
                self.print_enum(e)

        # Process all "user" structs
        print('## Structures', file=index_file)
        print(file=index_file)
        for e in self.schema:
            if e['type'] == 'struct' and len(e['inlined-from']) == 0:
                self.print_md_header(e, index_file)
                print('{{% include serialization/{}.html %}}'.format(e['name']), file=index_file)
                print(file=index_file)
                self.print_struct(e)

        # Process all "inner" structs
        print('## Inner Structures', file=index_file)
        print(file=index_file)
        print('These are structures only meant to be included inside other structures.', file=index_file)
        print('Their description is already present in the containing structures above and is only repeated here for completeness.', file=index_file)
        print(file=index_file)
        for e in self.schema:
            if e['type'] == 'struct' and len(e['inlined-from']) > 0:
                self.print_md_header(e, index_file)
                print('{{% include serialization/{}.html %}}'.format(e['name']), file=index_file)
                print(file=index_file)
                self.print_struct(e)

        index_file.close()

    def execute(self):
        """Contains all the logic to execute the serialization command.
        It prints ReStructuredText (RST) to the console which can be redirected to a file to be directly included
        in Sphinx.
        The content is RST so all headers and labels can be referenced from other Sphinx pages, but contains
        embedded HTML (using `.. raw:: html` directives) for added flexibility.
        """
        # Read a single YAML file containing all schemas
        with open(self.config['schema']) as f:
            try:
                self.schema = yaml.safe_load(f)
            except yaml.YAMLError as exc:
                print(exc)
                return
        # Build types dictionary indexed by type name, for simpler access
        self.types = {}
        for e in self.schema:
            self.types[e['name']] = e
            self.types[e['name']]['inlined-from'] = []
            if e['type'] == 'enum':
                # For each value type, build a values dictionary indexed by value name, for simpler access too
                e['values_dict'] = {}
                for value in e['values']:
                    e['values_dict'][value['name']] = value
        # Keep track of all structs which include each struct.
        # This also allows marking "internal" structs and list them in a separate section.
        for e in self.schema:
            if e['type'] == 'struct':
                for field in e['layout']:
                    if field.get('disposition', '') == 'inline':
                        self.types[field['type']]['inlined-from'].append(e['name'])

        # Parse source schemas to extract exact locations of type definitions.
        # This step could be avoided if the parsed YAML file already contained this information.
        self.type_schema_locations = find_schema_locations(self.config['source_schema_path'])

        # Parse source of catapult-client to extract exact locations of model definitions.
        self.type_catapult_locations = find_catapult_model_locations(self.config['source_catapult_path'])

        self.source_api = self.config['source_schema_path'].split('/')[-1]

        # Print document title and introduction
        if self.config['format'] == 'rst':
            self.page_prefix = '/serialization'
            self.output_rst()
        else:
            self.page_prefix = ''
            self.output_md()
