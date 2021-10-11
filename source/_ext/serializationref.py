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

class SerializationReference(SphinxDirective):
    """Adds support for the serializationref directive, which adds a collapsed
    topic box including the serialization reference documentation from
    /serialization/arg[0].html
    """
    required_arguments = 1

    def run(self):
        rawcontent='''
.. raw:: html

   <details><summary><p class="topic-title">{}</p></summary>

.. raw:: html
   :file: {}/serialization/{}.html
   
.. raw:: html

    </details>'''.format(self.arguments[0], self.env.srcdir, self.arguments[0])
        content = ViewList(rawcontent.split('\n'), source='')

        node = nodes.topic()
        nested_parse_with_titles(self.state, content, node)
        return [node]

def setup(app):
    app.add_directive('serializationref', SerializationReference)
