import ruamel.yaml as yaml
from .base import Command


class SerializationCommand(Command):
    """Command to parse the Symbol schema YAML file into RST documentation pages
    """

    def make_anchor(self, type):
        return 'Serialization' + type

    def make_keyword(self, keyword):
        return '<code class="docutils literal">%s</code>' % keyword

    def make_breakable(self, keyword):
        return '_&ZeroWidthSpace;'.join(keyword.split('_')) if len(keyword) > 30 else keyword

    def type_description(self, element):
        if element['type'] == 'byte':
            return 'byte[%s]' % element['size']
        elif element['type'] == 'enum':
            return 'enum (%d bytes)' % element['size']
        elif element['type'] == 'struct':
            return 'struct (%d fields)' % len(element['layout'])
        else:
            return '<a href="#%s">%s</a>' % (self.make_anchor(element['type']), element['type'])

    def parse_comment(self, comment):
        return '<br/><b>Note:</b> '.join(comment.split('\\note'))

    def print_header(self, name):
        print('<h2 id="%s">%s</h2>' % (self.make_anchor(name), name))
        print()

    def print_type(self, element):
        self.print_header(element['name'])
        print('<b>Byte array</b>: %d byte%s (%s)' % (element['size'], 's' if element['size'] > 1 else '', element['signedness']))
        print()
        print(self.parse_comment(element['comments']))

    def print_enum(self, element):
        self.print_header(element['name'])
        print('<b>Enumeration</b>: %d byte%s (%s)' % (element['size'], 's' if element['size'] > 1 else '', element['signedness']))
        print()
        print(self.parse_comment(element['comments']))
        print()
        print('<table class="big-table"><tbody>')
        print('<tr><th>Value</th><th>Name</th><th style="width: 100%">Description</th></tr>')
        for v in element['values']:
            print('<tr>')
            print('<td>%s</td>' % hex(v['value']))
            print('<td>%s</td>' % self.make_keyword(v['name']))
            print('<td>%s</td>' % self.parse_comment(v['comments']))
            print('</tr>')
        print('</tbody></table>')
        print()

    def print_struct_content(self, element):
        for v in element['layout']:
            comment = ''
            disposition = v.get('disposition') or ''
            if disposition == 'inline':
                self.print_struct_content(self.types[v['type']])
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
            print('<tr>')
            print('<td>&nbsp;</td>')
            print('<td>%s</td>' % self.make_keyword(self.make_breakable(v['name'])))
            print('<td>%s</td>' % self.type_description(v))
            print('<td>%s</td>' % comment)
            print('</tr>')

    def print_struct(self, element):
        self.print_header(element['name'])
        print('<b>Struct</b>:')
        print()
        print(self.parse_comment(element['comments']))
        print()
        print('<table class="big-table"><tbody>')
        print('<tr><th></th><th>Name</th><th>Type</th><th style="width: 100%">Description</th></tr>')
        self.print_struct_content(element)
        print('</tbody></table>')

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
            if e['type'] == 'enum':
                # Build a dictionary for enum values too
                e['values_dict'] = {}
                for l in e['values']:
                    e['values_dict'][l['name']] = l
        # Process all elements
        for e in self.schema:
            if e['type'] == 'byte':
                self.print_type(e)
            elif e['type'] == 'enum':
                self.print_enum(e)
            elif e['type'] == 'struct':
                self.print_struct(e)
            else:
                raise Exception ("Unknown type %s" % e['type'])
