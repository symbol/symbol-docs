"""
    sphinxcontrib.redirects
    ~~~~~~~~~~~~~~~~~~~~~~~
    Generate redirects for moved pages when using the HTML builder.
    See the README file for details.
    :copyright: Copyright 2017 by Stephen Finucane <stephen@that.guru>
    :license: BSD, see LICENSE for details.
"""

import os

from sphinx.builders import html as builders

TEMPLATE = """<html>
  <head><meta http-equiv="refresh" content="0; url=%s"/></head>
</html>
"""


def generate_redirects(app):

    path = os.path.join(app.srcdir, app.config.redirects_file)
    if not os.path.exists(path):
        app.info("Could not find redirects file at '%s'" % path)
        return

    in_suffix = next(iter(app.config.source_suffix))

    if not type(app.builder) == builders.StandaloneHTMLBuilder:
        print("The 'sphinxcontib-redirects' plugin is only supported "
                 "by the 'html' builder. Skipping...")
        return

    with open(path) as redirects:
        for line in redirects.readlines():
            from_path, to_path = line.rstrip().split(' ')

            print("Redirecting '%s' to '%s'" % (from_path, to_path))

            from_path = from_path.replace(in_suffix, '.html')
            to_path_prefix = '..%s' % os.path.sep * (
                len(from_path.split(os.path.sep)) - 1)
            to_path = to_path_prefix + to_path.replace(in_suffix, '.html')

            redirected_filename = os.path.join(app.builder.outdir, from_path)
            redirected_directory = os.path.dirname(redirected_filename)
            if not os.path.exists(redirected_directory):
                os.makedirs(redirected_directory)

            with open(redirected_filename, 'w') as f:
                f.write(TEMPLATE % to_path)


def setup(app):
    app.add_config_value('redirects_file', 'redirects', 'env')
    app.connect('builder-inited', generate_redirects)
