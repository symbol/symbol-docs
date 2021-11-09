##########################
Contributing documentation
##########################

There are currently 4 sources of documentation for Symbol. Feel free to jump to the one you are interested in.

- `Technical documentation <#technical-documentation>`__: Tool guides, developer tutorials, SDK reference guides and syndicate handbook.
- `Symbol handbook <#symbol-handbook>`__: The syndicate's Handbook explaining its vision and organization.
- `Working documentation <#working-documentation>`__: Meeting minutes, Community logs, stuff that changes often.
- `NIS1 documentation <#nis1-documentation>`__: Old NIS1 guides, pending assimilation into the Symbol technical docs.

Technical documentation
***********************

.. csv-table::
    :delim: ;
    :widths: 30 70

    **Site** ; `docs.symbolplatform.com <https://docs.symbolplatform.com>`__
    **Source repo** ; `github.com/symbol/symbol-docs <https://github.com/symbol/symbol-docs>`__
    **Host** ; `GitHub pages <https://github.com/symbol/symbol.github.io>`__
    **Engine** ; `Sphinx <https://www.sphinx-doc.org>`__
    **Format** ; `reStructuredText <https://docutils.sourceforge.io/rst.html>`__
    **Intended readers** ; The world at large.
    **Intended writers** ; The Symbol technical writers.
    **Editing workflow** ; Git-based: Check out the source repository, make modifications and submit pull requests.
    **Localization** ; `Transifex <https://www.transifex.com/nemtech/symboldocs/>`__
    **Maintainers** ; `Xavi <https://github.com/segfaultxavi>`__

Content
-------

This is the main technical reference. It contains (or will contain):

- **User guides** for the different tools (Wallet, CLI, Explorer, etc.), intended for non-heavily-technical readers, including screenshots and step-by-step instructions on how to solve common problems.
- **Developer tutorials** with source code examples in different languages, organized by topics. Ranging from Getting Started to in-depth guides on specific topics.
- **Concept definitions** required to understand the Symbol protocol.
- **Technical reference** guides describing every API and REST endpoint.

Due to the complexity of the technical content, the `Sphinx <https://www.sphinx-doc.org>`__ engine and `reStructuredText <https://docutils.sourceforge.io/rst.html>`__ is used instead of the simpler MarkDown format. This enables much more flexibility, so we can use multi-language (tabbed) code snippets, Python macros which automatically retrieve content from GitHub or have more formatting options for complex tables, for example.

Editing
-------

This repository follows the doc-as-code approach, meaning that you treat the documentation as if it was source code.

To contribute you need to check out the Git repository, make your changes and submit a `Pull Request <https://docs.github.com/en/github/collaborating-with-pull-requests>`__ to GitHub. The repository maintainers will review your contribution, suggest changes if required and eventually merge it.

Testing
-------

Before submitting a pull request it is a good idea to test your changes locally, to ensure that everything shows as expected and nothing breaks.

You first need to `Install Sphinx <https://www.sphinx-doc.org/en/master/usage/installation.html>`__.

After that you can trigger a build by running from the repository's root:

.. code-block:: bash

    make livehtml

This will monitor your source folder and regenerate the output when changes are detected. It also instantiates a web server on ``localhost:8000`` for your convenience.

.. note::

    On Windows you have a handy ``make-win.bat`` that does the same thing but takes care of some Windows shenanigans.

Deployment
----------

The GitHub repository is linked to `Travis <https://travis-ci.com/github/symbol/symbol-docs>`__, so on every push to the ``main`` branch a full build is triggered (See ``.travis.yml`` and the ``travis`` folder for details). This involves several steps besides the generation of the output documentation:

- **Source snippets validation**: The guides include lots of source code examples which are actually snippets from complete programs. These programs must **compile** and pass **lint checks** at all times and Travis makes sure of this. Right now only the TypeScript programs are checked.
- **Link checking**: All pages are examined to find broken links using ``make linkcheck``. Throttling is enabled to avoid pestering servers too much and getting ```HTTP 429 Too Many Requests``` errors. Still, sometimes your build fails because of this. If you detect such error in the Travis logs just try again.
- **Localization**: Text strings are extracted from every page using ``make gettext`` and uploaded to Transifex (see next section).
- **Publishing**: The built HTML pages are pushed to a different git repository (`symbol/symbol.github.io <https://www.github.com/symbol/symbol.github.io>`__) where they are served via GitHub pages.

Due to this process, pushes to ``main`` normally take up to 5 minutes to go live.

Localization
------------

Right now almost every page is available in Japanese besides the original English, but the repository is ready to accept more languages.

`Transifex <https://www.transifex.com/nemtech/symboldocs/>`__ is integrated in the deployment process, so after every push to ``main`` any changed strings are uploaded to Transifex where translators can provide text in their own language. So far this process has been done by the Symbol community.

When new translations are available the repo maintainer can download them from Transifex as ``.po`` files and commit them, or translators can provide the ``.po`` files directly via a Pull Request.

Working documentation
*********************

.. csv-table::
    :delim: ;
    :widths: 30 70

    **Site** ; `hackmd.io/team/syndicate <https://hackmd.io/team/syndicate>`__
    **Source repo** ; `hackmd.io/team/syndicate <https://hackmd.io/team/syndicate>`__
    **Host** ; `hackmd.io/team/syndicate <https://hackmd.io/team/syndicate>`__
    **Engine** ; HackMD
    **Format** ; `Markdown <https://www.markdownguide.org/>`__
    **Intended readers** ; Syndicate members.
    **Intended writers** ; Syndicate members.
    **Editing workflow** ; Edit pages directly on HackMD.
    **Localization** ; None
    **Maintainers** ; Every syndicate member.

This is meant as a scratch pad for collaborative editing, or as a means of storage for documents that change too often or are too big or numerous to be in the Handbook.

Examples are:

- Documents being worked on (they are live, or waiting approval to go into the Handbook)
- Meeting minutes (there are too many of them)
- Test results (they change continuously)

To keep this area organized all documents should be **tagged**. Please add this line at the bottom of your document:

.. code-block:: markdown

   ###### tags: `tag1` `tag2`

Use any tag you want, but please look at the other documents and try to be consistent.

NIS1 documentation
******************

.. csv-table::
    :delim: ;
    :widths: 30 70

    **Site** ; General: `docs.nem.io/en <https://docs.nem.io/en>`__
    ;API: `nemproject.github.io <https://nemproject.github.io/>`__
    **Source repo** ; General: `github.com/saulgray/nemioDev <https://github.com/saulgray/nemioDev>`__
    ;API: `https://github.com/NemProject/NemProject.github.io <https://github.com/NemProject/NemProject.github.io>`__
    **Host** ; General: ?
    ;API: `GitHub pages <https://github.com/NemProject/NemProject.github.io>`__
    **Engine** ; General: `Grav <https://getgrav.org/>`__
    ;API: Static HTML page
    **Format** ; General: `Markdown <https://www.markdownguide.org/>`__
    ;API: HTML
    **Intended readers** ; The world at large.
    **Intended writers** ; The Symbol technical writers.
    **Editing workflow** ; ?
    **Localization** ; ?
    **Maintainers** ; ?

This documentation is rather old and parts of it are still being figured out.

There's an ongoing effort to port it all to `GitHub pages <https://github.com/NemProject/nem-docs>`__ and `deployed here <https://nemproject.github.io/nem-docs>`__.
