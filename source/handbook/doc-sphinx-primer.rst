#############
Sphinx primer
#############

The Symbol documentation pages are made with `Sphinx <https://www.sphinx-doc.org>`__, a documentation engine built around the `reStructuredText <https://docutils.sourceforge.io/rst.html>`__ format and adding its own extensions.

Therefore, you will need to read both the RST and `Sphinx <https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html>`__ docs to learn about their syntax. This page is intended as an extremely quick summary of the things you will most commonly use.

It is extremely helpful to use an IDE that supports reStructuredText, like `Visual Studio Code <https://code.visualstudio.com/>`__ with an `RST extension <https://marketplace.visualstudio.com/items?itemName=lextudio.restructuredtext>`__, for example.

.. caution:: Pay attention to Sphinx's log output when building! Any warning you see there is worth investigating.

Basic formatting
================

- **Bold**: \*\*Bold\*\*
- *Italics*: \*Italics\*
- ``Monospace``: \`\`Monospace\`\`
- Unordered lists: Start items with - or \*.
- Ordered lists: Start items with numbers or #.
- Headers: Underline (and optionally overline) the header with any of the characters #, \*, =, -, ^ or ". The level of the header will be inferred from the order in which they are found. The Symbol docs mostly use only 3 levels indicated with the characters #, \* and =.

  .. code-block:: rst

     ##########
     Main Title
     ##########

     Header level 2
     **************

     Header level 3
     ==============

     Normal text.

- Quoted block: Indent with a space. **Indentation is critical in RST!**
- Code blocks: See the directives section below.

Links
=====

- External link: Enclosed in backticks, with a trailing **double underscore**.

  .. code-block:: rst

     `Link Title <link-url>`__

- Internal link to another page:

  .. code-block:: rst

     :doc:`Link Title <relative-file-path-without-extension>`

  The path is relative to the current file, or absolute (from the ``source`` directory) if it starts with ``/``.

  You can skip the Link Title part and use the document's actual title (its first header):

  .. code-block:: rst

     :doc:`relative-file-path-without-extension`

- Internal link to a label (anchor):

  .. code-block:: rst

     :ref:`Link Title <label-name>`

  And define labels (in any file) like this:

  .. code-block:: rst

     .. _label-name:

     Here comes a new section
     ========================

  If the label appears right before a header (as in the example above), you can omit the "Link Title" part in the link and the header text will be used:

  .. code-block:: rst

     :ref:`label-name`

Tables
======

There are `different mechanisms <https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#table-directives>`__ to render tables in Sphinx. The most used in the Symbol docs is the `csv-table <https://docutils.sourceforge.io/docs/ref/rst/directives.html#csv-table>`__:

.. code-block:: rst

   .. csv-table::
      :header: "Header 1", "Header 2", "Header 3"
      :widths: 25 25 50
      :delim: ;

      Data 1; Data 2; Data 3
      Data 4; Data 5; Data 6

``:header:``, ``:widths:`` and ``:delim:`` are optional and do not require much explanation. ``:delim:`` indicates the character used to separate columns in the data that follows.

Note that the data is indented so it is aligned with the word ``csv-table`` (i.e. indented by 3 spaces).

Adding pages
============

In the Symbol docs all pages appear in the Navigation bar at the left, therefore all pages **must appear in a TOC tree**. Any page can indicate what other pages are its children by using the ``toctree`` directive (you can search for examples in the current docs).

If you add a new page, besides creating the ``.rst`` file in the proper folder, you will need to add its name to the ``toctree`` of its parent:

.. code-block:: rst

   .. toctree::
       :maxdepth: 1

       doc-repos
       doc-workflow
       doc-sphinx-primer
       doc-common-tasks

``:maxdepth: 1`` indicates that you do not want that page's sections or its sub-pages to be listed. If the page has sub-pages you will give it its own ``toctree`` so they are shown.

You can add ``:hidden:`` so the list of pages does not render on the page. It will still show up in the navigation bar.

Substitutions
=============

Sphinx allows defining some codewords to be substituted by longer text. The codewords are indicated between pipe characters ``|like-this|`` and can be defined anywhere. In the Symbol docs they are mostly defined in the ``conf.py`` file (In the ``rst_prolog`` variable).

The most commonly used substitution is ``|codename|`` which expands to "|codename|". `There is an open issue to remove this particular one <https://github.com/symbol/symbol-docs/issues/670>`__.

Useful directives
=================

Directives have the form ``.. directive-name::`` and are a mechanism to extend RST functionality. Sphinx added its own directives over RST, and the Symbol docs further add a few more (Look at the ``/source/_ext`` folder. They are written in Python).

Directives can have an unnamed parameter **after** the directive name (see ``code-block`` below), or multiple named parameters between colons ``:`` in the lines below (as you have seen above in the Tables section).

The directive **body** is separated from the directive and parameters by a blank line and is indented by 3 spaces.

These are the most commonly used directives in the Symbol docs (besides the ones already mentioned):

- ``code-block``: To insert syntax-highlighted code.

  .. code-block:: rst

     .. code-block:: language

        code

- ``figure``: To insert a captioned image.

  .. code-block:: rst

     .. figure:: image-file-path

        Caption text.

- ``note``, ``caution``, ``topic``: To insert a titled, colored box (notes are blue, cautions are orange). Topics allow defining your own title, otherwise it will be "Note" or "Caution".

  .. code-block:: rst

     .. note:: Some text

        Some more text.

- ``raw``: To insert raw HTML. Use only in case of emergency.

  .. code-block:: rst

     .. raw:: html

        HTML code.

- ``tabs``: Define tabbed content.

  .. code-block:: rst

     .. tabs::

        .. tab:: Tab1 title

           Tab1 content

        .. tab:: Tab2 title

           Tab2 content

- ``example-code``: Tabbed source code, with syntax highlight and link to original source file.

  .. code-block:: rst

     .. example-code::

        .. viewsource:: ../resources/examples/typescript/transfer/DefiningMaxFee.ts
            :language: typescript
            :start-after: /* start block 01 */
            :end-before: /* end block 01 */

        .. viewsource:: ../resources/examples/typescript/transfer/DefiningMaxFee.js
            :language: javascript
            :start-after: /* start block 01 */
            :end-before: /* end block 01 */

- ``serializationref``: Inserts nicely-formatted serialization documentation.

  .. code-block:: rest

     .. serializationref:: StructureName
