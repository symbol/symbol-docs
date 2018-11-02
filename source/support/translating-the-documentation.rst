:orphan:

#############################
Translating the documentation
#############################

The NEM Developer Center uses Sphinx, a Python framework to write documentation. The extension `sphinx-intl <http://www.sphinx-doc.org/en/master/intl.html>`_ permits translating documentation into multiple languages without having to host different documentation sites.

****************************
Adding/updating translations
****************************

1. Clone the repository, and make sure you have Python 2.7 or 3.4+ and pip installed.

.. code-block:: bash

  $> git clone https://github.com/nemtech/nem2-docs.git

2. Install the project's requirements.

.. code-block:: bash

  $> pip install -r requirements.txt

3. Extract the docs messages into .po files.

.. code-block:: bash

  $>  make gettext

For each documentation file, a .po file will be generated under ``_build/gettext``.

4. Copy translation files into ``source/locale`` with the following command. It is also used to update .po files when the documentation in English have changed:

.. code-block:: bash

  $>  sphinx-intl update -p _build/gettext -l <lang>

Replace <lang> for your `language code <https://en.wikipedia.org/wiki/ISO_639-1>`_.

5. Translate your .po files under ``source/locale/<lang>/LC_MESSAGES/``. For each ``msgid``, provide the translated ``msgstr``.

6. Generate the translated document and review the changes.

.. code-block:: bash

  $> make -e SPHINXOPTS="-D language='<lang>'" livehtml


:doc:`Submit your changes<suggesting-changes>` into the nem2-docs repository.