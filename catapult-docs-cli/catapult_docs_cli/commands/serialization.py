import ruamel.yaml as yaml
from .base import Command


class SerializationCommand(Command):
    """Command to parse the Symbol schema YAML file into RST documentation pages
    """

    def make_anchor(self, type):
        return 'serialization' + type.lower()

    def make_keyword(self, keyword):
        return '<code class="docutils literal">%s</code>' % keyword

    def make_breakable(self, keyword):
        return '_&ZeroWidthSpace;'.join(keyword.split('_')) if len(keyword) > 30 else keyword

    def make_size_label(self, size, var):
        if var == 0:
            return '%d byte%s' % (size, 's' if size > 1 else '')
        else:
            return '%d+ byte%s (variable)' % (size, 's' if size > 1 else '')

    def calc_total_type_size(self, element):
        size = 0
        var = 0
        if element['type'] == 'byte':
            if isinstance(element['size'], int):
                size = element['size']
            else:
                var = 1
        elif element['type'] == 'enum':
            size = element['size']
        else:
            # Structs
            for f in element['layout']:
                if f['type'] == 'byte':
                    type_size = 1
                    type_var = 0
                else:
                    (type_size, type_var) = self.calc_total_type_size(self.types[f['type']])
                if isinstance(f.get('size', 1), int):
                    size += type_size * f.get('size', 1)
                    var += type_var
                else:
                    var = 1
        return (size, var)

    def type_description(self, element):
        if element['type'] == 'byte':
            return 'byte[%s]' % element['size']
        elif element['type'] == 'enum':
            return 'enum (%d bytes)' % element['size']
        elif element['type'] == 'struct':
            return 'struct (%d fields)' % len(element['layout'])
        else:
            return '<a href="#%s">%s</a>%s' % (self.make_anchor(element['type']), element['type'], '' if element.get('size', 0) == 0 else '&ZeroWidthSpace;[%s]' % element['size'])

    def parse_comment(self, comment):
        return '<br/><b>Note:</b> '.join(comment.split('\\note'))

    def print_header(self, name, size, var):
        print('.. _%s:' % self.make_anchor(name))
        print()
        print(name)
        print('=' * len(name))
        print()
        print('.. rst-class:: side-info')
        print()
        print('   Size: %s' % self.make_size_label(size, var))
        print()

    def print_type(self, element):
        print('   <tr>')
        print('   <td id="%s"><b>%s</b></td>' % (self.make_anchor(element['name']), element['name']))
        print('   <td>%d&nbsp;%sbyte%s</td>' % (element['size'], 'u' if element['signedness'] == 'unsigned' else '', 's' if element['size'] > 1 else ''))
        print('   <td>%s</td>' % self.parse_comment(element['comments']))
        print('   </tr>')

    def print_enum(self, element):
        self.print_header(element['name'], element['size'], 0)
        print('.. raw:: html')
        print()
        print('   ' + self.parse_comment(element['comments']))
        print()
        print('   <table class="big-table"><tbody>')
        print('   <tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>')
        for v in element['values']:
            print('   <tr>')
            print('   <td>%s</td>' % hex(v['value']))
            print('   <td>%s</td>' % self.make_keyword(v['name']))
            print('   <td>%s</td>' % self.parse_comment(v['comments']))
            print('   </tr>')
        print('   </tbody></table>')
        print()

    def print_struct_content(self, element, indent):
        for v in element['layout']:
            comment = ''
            disposition = v.get('disposition') or ''
            if disposition == 'inline':
                (size, var) = self.calc_total_type_size(self.types[v['type']])
                size_label = self.make_size_label(size, var)
                if indent < 1:
                    print('   <tr><td colspan="6" class="big-table-section">%s<span style="float:right">%s</span></td></tr>' % (v['type'], size_label))
                elif indent < 2:
                    print(
                        '   <tr><td class="indentation-cell"></td><td colspan="5" class="big-table-section">%s<span style="float:right">%s</span></td></tr>' % (v['type'], size_label))
                else:
                    print('   <tr><td class="indentation-cell"></td><td class="indentation-cell"></td><td colspan="4" class="big-table-section">%s<span style="float:right">%s</span></td></tr>' %
                          (v['type'], size_label))
                self.print_struct_content(self.types[v['type']], indent + 1)
                continue
            elif disposition == 'const':
                type = self.types.get(v['type'])
                if type and type['type'] == 'enum':
                    comment = '<b>const</b> %s (%s)<br/>' % (self.make_keyword(v['value']), self.make_keyword(hex(type['values_dict'][v['value']]['value'])))
                else:
                    comment = '<b>const</b> %s<br/>' % self.make_keyword(v['value'])
            elif disposition == 'reserved':
                comment = '<b>reserved</b> %s<br/>' % self.make_keyword(v['value'])
            comment += self.parse_comment(v['comments'])
            print('   <tr>')
            print('   <td%s>&nbsp;</td>' % ('' if indent < 1 else ' class="indentation-cell"'))
            print('   <td%s>&nbsp;</td>' % ('' if indent < 2 else ' class="indentation-cell"'))
            print('   <td%s>&nbsp;</td>' % ('' if indent < 3 else ' class="indentation-cell"'))
            print('   <td>%s</td>' % self.make_keyword(self.make_breakable(v['name'])))
            print('   <td>%s</td>' % self.type_description(v))
            print('   <td>%s</td>' % comment)
            print('   </tr>')

    def print_struct(self, element):
        (size, var) = self.calc_total_type_size(element)
        self.print_header(element['name'], size, var)
        print('.. raw:: html')
        print()
        print('   ' + self.parse_comment(element['comments']))
        print()
        print('   <table class="big-table"><tbody>')
        print('   <tr><th></th><th></th><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>')
        self.print_struct_content(element, 0)
        print('   </tbody></table>')
        print()

    def execute(self):
        """Contains all the logic to execute a command."""
        with open(self.config['schema']) as f:
            try:
                self.schema = yaml.safe_load(f)
            except yaml.YAMLError as exc:
                print(exc)
                return
        self.types = {}
        # Build types dictionary for simpler access
        for e in self.schema:
            self.types[e['name']] = e
            self.types[e['name']]['inlined'] = 0
            if e['type'] == 'enum':
                # Build a dictionary for enum values too
                e['values_dict'] = {}
                for l in e['values']:
                    e['values_dict'][l['name']] = l
        # Mark inlined structs so they can be filtered out
        for e in self.schema:
            if e['type'] == 'struct':
                for f in e['layout']:
                    if f.get('disposition', '') == 'inline':
                        self.types[f['type']]['inlined'] = 1

        print('Transaction serialization')
        print('#########################')
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
        # Process all structs
        print('Structures')
        print('**********')
        print()
        for e in self.schema:
            if e['type'] == 'struct' and e['inlined'] == 0:
                self.print_struct(e)
