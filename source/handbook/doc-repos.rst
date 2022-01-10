####################
Repository structure
####################

There are currently 3 sources of documentation for Symbol. Feel free to jump to the one you are interested in.

- `Technical documentation <#technical-documentation>`__: Tool guides, developer tutorials, SDK reference guides and the Syndicate's handbook.
- `NEM NIS1 documentation <#nis1-documentation>`__: Old NEM NIS1 guides, pending assimilation into the Symbol technical docs.
- `Working documentation <#working-documentation>`__: Meeting minutes, Community logs, stuff that changes often.

Technical documentation
***********************

.. csv-table::
    :delim: ;
    :widths: 30 70
    :class: docs-repo-table

    **Site** ; `docs.symbolplatform.com <https://docs.symbolplatform.com>`__
    **Source repo** ; `github.com/symbol/symbol-docs <https://github.com/symbol/symbol-docs>`__
    **Host** ; `GitHub pages <https://github.com/symbol/symbol-docs/tree/gh-pages>`__
    **Engine** ; `Sphinx <https://www.sphinx-doc.org>`__
    **Format** ; `reStructuredText <https://docutils.sourceforge.io/rst.html>`__
    **Intended readers** ; The world at large.
    **Intended writers** ; The Symbol technical writers.
    **Editing workflow** ; Git-based: Check out the source repository, make modifications, check results by building the pages locally and submit pull requests.
    **Localization** ; `Transifex <https://www.transifex.com/nemtech/symboldocs/>`__
    **Maintainers** ; `Xavi <https://github.com/segfaultxavi>`__

Content
-------

This is the main technical reference for **Symbol**. It contains (or will contain):

- **User guides** for the different tools (Wallet, CLI, Explorer, etc.), intended for non-heavily-technical readers, including screenshots and step-by-step instructions on how to solve common problems.
- **Developer tutorials** with source code examples in different languages, organized by topics. Ranging from Getting Started to in-depth guides on specific topics.
- **Concept definitions** required to understand the Symbol protocol.
- **Technical reference** guides describing every API and REST endpoint.

Due to the complexity of the technical content, the `Sphinx <https://www.sphinx-doc.org>`__ engine and `reStructuredText <https://docutils.sourceforge.io/rst.html>`__ is used instead of the simpler MarkDown format. This enables much more flexibility, so we can use multi-language (tabbed) code snippets, Python macros which automatically retrieve content from GitHub or have more formatting options for complex tables, for example.

Editing
-------

This repository follows the docs-as-code approach, meaning that you treat the documentation as if it was source code.

To contribute you need to check out the Git repository, make your changes and submit a `Pull Request <https://docs.github.com/en/github/collaborating-with-pull-requests>`__ to GitHub. The repository maintainers will review your contribution, suggest changes if required and eventually merge it.

Testing locally
---------------

Before submitting a pull request it is a good idea to test your changes locally, to ensure that everything shows as expected and nothing breaks.

You first need to `Install Sphinx <https://www.sphinx-doc.org/en/master/usage/installation.html>`__. Basically, you need to:

- Install Python 3.7
- Run ``pip install -r requirements.txt``

After that you can trigger a build by running from the repository's root:

.. code-block:: bash

    make livehtml

This generates all HTML files in the ``build/html`` folder, including all assets like images, javascript, CSS, code snippets, etc. This also monitors your source folder and regenerates the output when changes are detected. It also instantiates a web server on ``localhost:8000`` for your convenience.

.. note::

    On Windows you have a handy ``make-win.bat`` that does the same thing but takes care of some Windows shenanigans like incorrect console output and filesystem monitoring.

Deployment
----------

The GitHub repository is linked to `Travis <https://travis-ci.com/github/symbol/symbol-docs>`__, so on every push to the ``main`` branch a full build is triggered (See ``.travis.yml`` and the ``travis`` folder for details). This involves several steps besides the generation of the output documentation:

- **Source snippets validation**: The guides include lots of source code examples which are actually snippets from complete programs. These programs must **compile** and pass **lint checks** at all times and Travis makes sure of this. Right now only the TypeScript programs are checked.
- **Link checking**: All pages are examined to find broken links using ``make linkcheck``.

  Throttling is enabled to avoid pestering servers too much and getting ``HTTP 429 Too Many Requests`` errors. Still, sometimes your build fails because of this. If you detect such error in the Travis logs just try again.

  If you are sure a link is correct but linkcheck on Travis keeps failing, you can add this particular link to the ``linkcheck_ignore`` list in ``conf.py`` to skip checking it. Please add a comment explaining the reason.
- **Localization**: Text strings are extracted from every page using ``make gettext`` and uploaded to Transifex (see next section).
- **Publishing**: The built HTML pages are moved to the ``docs`` folder in the ``gh-pages`` branch and pushed. GitHub pages is configured to serve them from there.

Due to this process, pushes to ``main`` normally take up to 5 minutes to go live.

Localization
------------

Right now almost every page is available in Japanese besides the original English, but the repository is ready to accept more languages.

`Transifex <https://www.transifex.com/nemtech/symboldocs/>`__ is integrated in the deployment process, so after every push to ``main`` Travis extracts and sends all strings (``.pot`` files) to Transifex, which detects any new or updated text and notifies the translators.

Translators can log in to Transifex and provide the translations there. Developers can then download the updated text (``.po`` files) and commit them to the source repository.

So far this process has been entirely done by the Symbol community, even committing the updated texts and submitting pull requests.

NEM NIS1 documentation
**********************

.. csv-table::
    :delim: ;
    :widths: 30 70
    :class: table-double-rows docs-repo-table

    **Site** ; **Docs**: `nemproject.github.io/nem-docs <https://nemproject.github.io/nem-docs>`__
    ;**API**: `nemproject.github.io <https://nemproject.github.io/>`__
    **Source repo** ; **Docs**: `github.com/NemProject/nem-docs <https://github.com/NemProject/nem-docs/tree/gh-pages>`__ (``gh-pages`` branch)
    ;**API**: `https://github.com/NemProject/NemProject.github.io <https://github.com/NemProject/NemProject.github.io>`__
    **Host** ; **Docs**: `GitHub pages <https://github.com/NemProject/nem-docs/tree/gh-pages>`__
    ;**API**: `GitHub pages <https://github.com/NemProject/NemProject.github.io>`__
    **Engine** ; **Docs**: `GitHub Jekyll <https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll>`__
    ;**API**: Static HTML page
    **Format** ; **Docs**: `Markdown <https://www.markdownguide.org/>`__
    ;**API**: HTML
    **Intended readers** ; The world at large.
    ;
    **Intended writers** ; The Symbol technical writers.
    ;
    **Editing workflow** ; Git-based: Check out the source repository, make modifications, check results by building the pages locally and submit pull requests.
    ;
    **Localization** ; None
    ;
    **Maintainers** ; `Xavi <https://github.com/segfaultxavi>`__

Content
-------

These are the old NEM NIS1 docs, which were spread over several repos, blogs and forum posts, ported over a to single repository. This documentation is rather old and parts of it are still being figured out.

The old docs were mainly hosted at ``docs.nem.io`` from the `github.com/saulgray/nemioDev <https://github.com/saulgray/nemioDev>`__ repository using the `Grav Engine <https://getgrav.org/>`__.

A much simpler GitHub page is setup now, using the `Jekyll Engine <https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll>`__ provided by GitHub, using plain Markdown. All content is in the ``gh-pages`` branch.

.. note:: There is still some placeholders left in the docs (like `the overview page <https://nemproject.github.io/nem-docs/pages/Overview/docs.en.html>`__) so a big **PREVIEW** banner is shown at the top of every page.

    This banner is `hardcoded in the layout HTML file <https://github.com/NemProject/nem-docs/blob/gh-pages/_layouts/default.html#L45>`__ and can be removed once the docs are good to go public.

Editing
-------

This repository follows the docs-as-code approach, meaning that you treat the documentation as if it was source code.

To contribute you need to check out the Git repository, make your changes and submit a `Pull Request <https://docs.github.com/en/github/collaborating-with-pull-requests>`__ to GitHub. The repository maintainers will review your contribution, suggest changes if required and eventually merge it.

Testing locally
---------------

Before submitting a pull request it is a good idea to test your changes locally, to ensure that everything shows as expected and nothing breaks.

Follow `GitHub's instructions <https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll>`__ to install a local Jekyll instance and run it.

Deployment
----------

Deployment is straightforward since a standard GitHub pages setup is used (GitHub repo + Jekyll site + GitHub pages). Just push to the ``gh-pages`` branch and it will be published in seconds.

Working documentation
*********************

.. csv-table::
    :delim: ;
    :widths: 30 70
    :class: docs-repo-table

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

.. code-block::

   ###### tags: `tag1` `tag2`

Use any tag you want, but please look at the other documents and try to be consistent.

.. caution:: If you don't use a tag your document will appear in the **Untagged** section and you will be severely reprimanded.
