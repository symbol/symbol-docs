#############################
Translating the documentation
#############################

Symbol's awesome community actively localizes the contents of this site, and we're endlessly thankful for that.

The original text is in English and right now only the Japanese translation is complete enough to be public. Languages are made public when enough pages have been translated.

If you are planning on helping, make sure to join the |discord| server and enter the ``#docs-general`` channel. There is a ``#translation`` thread for just this purpose!

|sitename| uses **Transifex**, a collaborative localization platform, to manage translations and make the process participative. Follow these instructions to start submitting your contributions.

*******************************
Getting started for translators
*******************************

1. Create a new Transifex account `here <https://www.transifex.com/signup/?join_project=symboldocs>`_.

2. Join the `symbol-docs team <https://www.transifex.com/nemtech/symboldocs/>`_. Click on **Help Translate "symbol-docs"** button on the right side of the header, selecting the language you want to contribute.

3. Wait until the translation coordinator approves your request. Once accepted you will receive an email. At this moment, you will be able to start translating the docs.

4. Once you have joined the team, you can contribute either translating new content or reviewing translations provided by other users.

.. note:: First time using Transifex? We recommend you to read the following guides from Transifex's documentation:

        * `Getting started as a translator <https://docs.transifex.com/getting-started-1/translators>`_
        * `Translating with the web editor <https://docs.transifex.com/translation/translating-with-the-web-editor>`_

.. caution::

   Please do **NOT** translate:

   - Words in camel-case (like ``EntityBody``)
   - Text between pipes (``|``)
   - Text between colons (``:``)
   - Text between single or double backticks (|bt|)

     **Exception**: You MUST translate everything inside backticks IF there are angle brackets inside the backticks too. What's inside the angle brackets must NOT be translated. See the last example below.

   **Examples**:

   ============================= ================================ =================
   Original                      Translated                       Should translate?
   ============================= ================================ =================
   This is a test                это проверка                     ✅
   feeMultiplier                 feeMultiplier                    ❌
   \|codename\|                  \|codename\|                     ❌
   \:ref\:                       \:ref\:                          ❌
   \`keyword\`                   \`keyword\`                      ❌
   \`\`keyword\`\`               \`\`keyword\`\`                  ❌
   \:doc\:\`blocks\`             \:doc\:\`blocks\`                ❌
   \:doc\:\`one block <blocks>\` \:doc\:\`один квартал <blocks>\` ✅/❌
   ============================= ================================ =================

********************
Notes for developers
********************

This guide explains how to interact with Transifex service using the ``transifex-client`` tool.

Pull latest files
=================

Follow these instructions to download the latest translations from Transifex.

1. Install ``transifex-client``.

   .. code-block:: bash

      pip install transifex-client

2. Download the latest translated files. Replace ``<lang>`` with your `language code <https://en.wikipedia.org/wiki/ISO_639-1>`_.

   .. code-block:: bash

      tx pull --mode onlyreviewed --language <lang>

3. Compile the docs for the target language.

   .. tabs::

      .. tab:: Linux/Mac

         .. code-block:: bash

            make -e SPHINXOPTS="-D language='<lang>'" livehtml

      .. tab:: Windows

         .. code-block:: bash

            set SPHINXOPTS=-D language=<lang>
            make.bat html

Push new literals
=================

Follow these instructions to publish updated source literals to Transifex.

.. note:: You will need explicit permissions from the Transifex project coordinator to push source files.

1. Generate the literals. For each documentation file, a .po file will be created under ``build/gettext``.

   .. tabs::

      .. tab:: Linux/Mac

         .. code-block:: bash

            make gettext

      .. tab:: Windows

         .. code-block:: bash

            make.bat gettext

2. Push the source literals to Transifex.

   .. code-block:: bash

      tx push --source

:doc:`Submit your changes <suggesting-changes>` into the symbol-docs repository.

.. |bt| raw:: html

    <code class="code docutils literal notranslate">`</code>