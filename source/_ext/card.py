# -*- encoding: utf-8 -*-
#
# (c) 2021 Symbol Contributors
# This code is licensed under Apache 2.0 (see LICENSE.md for details)

from docutils.parsers.rst import nodes
from docutils.statemachine import ViewList
from sphinx.util.nodes import nested_parse_with_titles
from sphinx.util.docutils import SphinxDirective

class Card(SphinxDirective):
    """Adds support for the card directive, which adds an image and text under it,
    all wrapped in a hyperlink. Useful for card type menus.
    param[0]: Link target
    param[1]: Image file (just like regular Sphinx images it will be copied to target folder)
    param[2]: Text under the image
    """
    required_arguments = 3
    final_argument_whitespace = True

    def run(self):
        rawcontent='''
.. raw:: html

   <a href="{}">

.. image:: {}

.. raw:: html

   <p>{}</p>
   </a>'''.format(self.arguments[0], self.arguments[1], self.arguments[2])
        content = ViewList(rawcontent.split('\n'), source='')

        node = nodes.section()
        nested_parse_with_titles(self.state, content, node)
        return [node]


def setup(app):
    app.add_directive('card', Card)
