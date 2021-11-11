# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.

from docutils.parsers.rst import nodes
from docutils.statemachine import ViewList
from sphinx.util.nodes import nested_parse_with_titles
from sphinx.util.docutils import SphinxDirective

class TooltipTerm(SphinxDirective):
    """Adds support for the ttt directive, which adds a reference to a gloosary
       term (just like :term:) but with a preview tooltip.
    """
    required_arguments = 1

    def run(self):
        rawcontent=''':term:`{}`'''.format(self.arguments[0])
        content = ViewList(rawcontent.split('\n'), source='')

        node = nodes.term()
        nested_parse_with_titles(self.state, content, node)
        return [node]


class ttt(nodes.General, nodes.Element):
    pass

def setup(app):

    def tooltip_term_role_fn (role, rawtext, text, lineno, inliner, options={}, content=[]):
        
        print('--- TTT role found')

        return [ttt()], []

    def process_ttt_nodes(app, doctree, fromdocname):

        for node in doctree.traverse(nodes.reference):
            target = ''
            if 'refid' in node and node['refid'].startswith('term-'):
                # Local reference
                target = '#' + node['refid']
            elif 'refuri' in node and 'glossary.html#term-' in node['refuri']:
                # External reference
                target = node['refuri']
            if target:
                import pdb; pdb.set_trace();
                print('--- Processing node ', target)
                newnode = nodes.emphasis('here', target)
                node.replace_self([newnode, node])

    #app.add_node(ttt)
    #app.add_role('ttt', tooltip_term_role_fn)
    app.connect('doctree-resolved', process_ttt_nodes)
