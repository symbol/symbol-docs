# -*- coding: utf-8 -*-
"""
Examplecode specs
=================
"""
import os
from docutils.parsers.rst import Directive
from docutils import nodes
from sphinx.util.osutil import copyfile


CSS_FILE = 'examplecode.css'
JS_FILE = 'examplecode.js'


class ExampleCodeDirective(Directive):
    """
    This directive is intended to be used to contain a group of 
    code blocks which are beingused to show code examples in many different
    languages. When rendered as HTML the the examples will all be rolled up
    into a single display area with buttons to select between the different
    languages.
    """

    has_content = True

    def run(self):
        self.assert_has_content()
        text = '\n'.join(self.content)
        node = nodes.container(text)
        node['classes'].append('example-code')
        self.add_name(node)
        self.state.nested_parse(self.content, self.content_offset, node)
        return [node]


def add_assets(app):
    app.add_css_file(CSS_FILE)
    app.add_js_file(JS_FILE)

def copy_assets(app, exception):
    if app.builder.name != 'html' or exception:
        return
    print('Copying examplecode stylesheet/javascript... ')
    dest = os.path.join(app.builder.outdir, '_static', CSS_FILE)
    source = os.path.join(os.path.abspath(os.path.dirname(__file__)), CSS_FILE)
    copyfile(source, dest)
    dest = os.path.join(app.builder.outdir, '_static', JS_FILE)
    source = os.path.join(os.path.abspath(os.path.dirname(__file__)), JS_FILE)
    copyfile(source, dest)
    print('done')

def setup(app):
    app.add_directive('example-code',  ExampleCodeDirective)
    app.connect('builder-inited', add_assets)
    app.connect('build-finished', copy_assets)

