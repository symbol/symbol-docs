:orphan:

#############################
Translating the documentation
#############################

The |sitename| is translated using **Transifex**, a collaborative localization platform.

***********
Translators
***********

Follow this guide to start contributing to the translation of the |sitename|.

1. Sign up for an account

Create a new Transifex account `here <https://www.transifex.com/signup/?join_project=symboldocs>`_ .
Also, we recommend reading Transifex's `Getting Started as a Translator guide <https://docs.transifex.com/getting-started-1/translators>`_.

2. Join symbol-docs team and choose a language

Explore the `symbol-docs project in Transifex <https://www.transifex.com/nemtech/symboldocs/>`_.
Check which languages are being translated and up to which point they are complete.

Click on `Help Translate "symbol-docs" <https://www.transifex.com/signup/?join_project=symboldocs>`_ button on the right side of the header, selecting the language you want to contribute.

The translation coordinator will approve your request.
Once accepted, you will receive an email. At this moment, you will be able to start translating the docs.

3. Find and translate content

Once you have joined the team, read `Translating with the Web Editor guide <https://docs.transifex.com/translation/translating-with-the-web-editor>`_ to get started.
You can also contribute by `reviewing translations done by other users <https://docs.transifex.com/translation/reviewing-strings>`_.

**********
Developers
**********

This guide explains how to interact with Transifex service using the ``transifex-client`` tool.

Pull latest files
=================

Follow these instructions to download the latest translations from Transifex.

1. Install ``transifex-client``.

.. code-block:: bash

  pip install transifex-client

2. Download the latest translated files.
Replace <lang> with your `language code <https://en.wikipedia.org/wiki/ISO_639-1>`_.

.. code-block:: bash

  tx pull --mode onlyreviewed --language <lang>

3. Compile the docs for the target language.

**Linux/Mac**

.. code-block:: bash

  make -e SPHINXOPTS="-D language='<lang>'" livehtml

**Windows**

.. code-block:: bash

  set SPHINXOPTS=-D language=<lang>
  .\make.bat html

Push new literals
=================

Follow these instructions to publish updated source literals to Transifex.

.. note:: You will need explicit permissions from the Transifex project coordinator to push source files.

1. Generate the literals.
For each documentation file, a .po file will be created under ``build/gettext``.

**Linux/Mac**

.. code-block:: bash

  make gettext

**Windows**

.. code-block:: bash

  .\make.bat gettext

2. Push the source literals to Transifex.

.. code-block:: bash

    tx push --source

:doc:`Submit your changes <suggesting-changes>` into the symbol-docs repository.
