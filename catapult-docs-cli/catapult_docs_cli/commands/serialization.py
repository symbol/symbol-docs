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
    words separated by hyphens, as Sphinx likes them.
    """
    return re.sub(r'(?<!^)(?=[A-Z])', '-', type).lower()

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
                    m = re.search(r'^(struct|enum) ([a-zA-Z]+)\b', line)
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
    locations['AggregateCompleteTransaction'] = locations['AggregateTransaction']
    locations['AggregateBondedTransaction'] = locations['AggregateTransaction']
    return locations

class SerializationCommand(Command):
    """Command to parse the Symbol schema YAML file into a ReStructured Text documentation page.

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

    def type_description(self, element):
        """Receives a YAML object describing a type and returns an HTML string describing it.
        For example: "byte[4]", "enum (2 bytes)" or an HTML hyperlink to another type in the page.
        """
        if element['type'] == 'byte':
            return 'byte[{}]'.format(element['size'])
        elif element['type'] == 'enum':
            return 'enum ({} bytes)'.format(element['size'])
        elif element['type'] == 'struct':
            return '<a href="#{}" title="{}">{}</a>'.format(make_anchor(element['name']), make_title(element['comments']), element['name'])
        else:
            # Add the array indicator only if the type has a size
            return '<a href="#{}" title="{}">{}</a>{}'.format(make_anchor(element['type']), make_title(self.types[element['type']]['comments']), element['type'],
                '' if element.get('size', 0) == 0 else '&ZeroWidthSpace;[{}]'.format(element['size']))

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
            for word in line.split():
                if word in self.types:
                    output += self.type_description(self.types[word])
                elif word == '\\note':
                    output += '<br/><b>Note:</b>'
                else:
                    output += word
                output += ' '
        return markdown(output)

    def print_header(self, element, size, var):
        """Prints header common to Enums and Structs, including:
        - A RST label so this type can be referenced from other places
        - A RST header so Sphinx adds <h3> tags
        - An two-cells HTML table containing the type's description on the left and
          an info box on the right with type size and code links.
        """
        name = element['name']
        print('.. _{}:'.format(make_anchor(name)))
        print()
        print(name)
        print('=' * len(name))
        print()

        print('.. raw:: html')
        print()
        print('   <table style="width: 100%;"><tr><td>')
        print('       <div class="side-info"><table>')
        print('       <tr><td class="side-info-icon">&varr;</td><td>Size: {}</td></tr>'.format(make_size_label(size, var)))
        if name in self.type_schema_locations:
            print('       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td>'
                '<td><a href="https://github.com/symbol/catbuffer-schemas/blob/main/symbol/{}#L{}">schema</a></td></tr>'.format( \
                self.type_schema_locations[name][0], self.type_schema_locations[name][1]))
        if name in self.type_catapult_locations:
            print('       <tr><td class="side-info-icon"><i class="fab fa-github"></i></td>'
                '<td><a href="https://github.com/symbol/catapult-client/blob/main/{}#L{}">catapult model</a></td></tr>'.format(
                self.type_catapult_locations[name][0], self.type_catapult_locations[name][1]))
        print('       </table></div>')
        print('   ' + self.parse_comment(element['comments']))
        print('   </td></tr></table>')
        print()

    def print_type(self, element):
        """Adds a row to the basic types HTML table.
        """
        print('   <tr>')
        print('   <td id="{}"><b>{}</b></td>'.format(make_anchor(element['name']), element['name']))
        print('   <td>{}&nbsp;{}byte{}</td>'.format(element['size'], 'u' if element['signedness'] == 'unsigned' else '', 's' if element['size'] > 1 else ''))
        print('   <td>{}</td>'.format(self.parse_comment(element['comments'])))
        print('   </tr>')

    def print_enum(self, element):
        """Describes an Enum type using the common header and an HTML table with all the values.
        """
        self.print_header(element, element['size'], 0)
        print('.. raw:: html')
        print()
        print('   <table class="big-table"><tbody>')
        print('   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>')
        for v in element['values']:
            print('   <tr>')
            print('   <td>{}</td>'.format(hex(v['value'])))
            print('   <td>{}</td>'.format(make_keyword(v['name'])))
            print('   <td>{}</td>'.format(self.parse_comment(v['comments'])))
            print('   </tr>')
        print('   </tbody></table>')
        print()

    def print_struct_content(self, element, indent):
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
                    print('   <tr><td colspan="6" class="big-table-section">{}<span style="float:right">{}</span></td></tr>'.
                        format(self.type_description(self.types[v['type']]), size_label))
                elif indent < 2:
                    print('   <tr><td class="indentation-cell"></td>'
                        '<td colspan="5" class="big-table-section">{}<span style="float:right">{}</span></td></tr>'.
                        format(self.type_description(self.types[v['type']]), size_label))
                else:
                    print('   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td>'
                        '<td colspan="4" class="big-table-section">{}<span style="float:right">{}</span></td></tr>'.
                        format(self.type_description(self.types[v['type']]), size_label))
                self.print_struct_content(self.types[v['type']], indent + 1)
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
            print('   <tr>')
            print('   <td{}>&nbsp;</td>'.format('' if indent < 1 else ' class="indentation-cell"'))
            print('   <td{}>&nbsp;</td>'.format('' if indent < 2 else ' class="indentation-cell"'))
            print('   <td{}>&nbsp;</td>'.format('' if indent < 3 else ' class="indentation-cell"'))
            print('   <td>{}</td>'.format(make_keyword(make_breakable(v['name']))))
            print('   <td>{}</td>'.format(self.type_description(v)))
            print('   <td>{}</td>'.format(comment))
            print('   </tr>')

    def print_struct(self, element):
        """Describes a Struct type using the common header and an HTML table with all the fields.
        It opens an HTML table with 6 columns: 3 for indentation and 3 for field data.
        Actual content is provided by print_struct_content().
        It adds a last row in the table with the list of all types which include this struct (only present
        in inline structs).
        """
        (size, var) = self.calc_total_type_size(element)
        self.print_header(element, size, var)
        print('.. raw:: html')
        print()
        print('   <table class="big-table"><tbody>')
        print('   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>')
        self.print_struct_content(element, 0)
        if len(element['inlined-from']) > 0:
            print('   <tr><td colspan="6"><br/>Included in: ')
            print('   %s' % ', '.join(self.type_description(self.types[x]) for x in element['inlined-from']))
            print('   </tr></td>')
            print()
        print('   </tbody></table>')
        print()

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

        # Print document title and introduction
        print('#############')
        print('Serialization')
        print('#############')
        print()
        print('The `catbuffer schemas <https://github.com/symbol/catbuffer-schemas>`_ repository defines how the different Symbol entities type should be serialized (for example, Transactions). In combination with the `catbuffer-generators <https://github.com/symbol/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages.')
        print()

        # Hide level 4 headers from local TOC using CSS: there's too many of them and I could not find
        # a Sphinx-friendly way of doing it.
        print('.. raw:: html')
        print()
        print('   <style>.bs-sidenav ul ul ul > li {display: none;}</style>')
        print()

        # Process all basic types
        print('Basic Types')
        print('***********')
        print()
        print('.. raw:: html')
        print()
        print('   <table class="big-table"><tbody>')
        print('   <tr><th>Name</th><th>Size</th><th style="width: 100%">Description</th></tr>')
        for e in self.schema:
            if e['type'] == 'byte':
                self.print_type(e)
        print('   </tbody></table>')
        print()

        # Process all enums
        print('Enumerations')
        print('************')
        print()
        for e in self.schema:
            if e['type'] == 'enum':
                self.print_enum(e)

        # Process all "user" structs
        print('Structures')
        print('**********')
        print()
        for e in self.schema:
            if e['type'] == 'struct' and len(e['inlined-from']) == 0:
                self.print_struct(e)

        # Process all "inner" structs
        print('Inner Structures')
        print('****************')
        print()
        print('These are structures only meant to be included inside other structures.')
        print('Their description is already present in the containing structures above and is only repeated here for completeness.')
        print()
        for e in self.schema:
            if e['type'] == 'struct' and len(e['inlined-from']) > 0:
                self.print_struct(e)
