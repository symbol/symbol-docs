:orphan:

###############
Writing a guide
###############

Thank you for considering writing a new guide!

***************
Before starting
***************

1. Open the `nem2-docs repository issues <https://github.com/nemtech/nem2-docs/issues>`_, and find some ideas pending to be written. They have the label "great new issue".

2. Opt to contribute to one of them by adding a comment, or create a new issue with your guide idea.

3. Classify your guide under one of the following categories:

* Account
* Account Filter
* Aggregate Transaction
* Block
* Cross-Chain Swaps
* Harvesting
* Mosaic
* Namespace
* Node
* Receipt
* Transfer Transaction
* Tools

.. note:: You can suggest new categories creating a `GitHub issue <https://github.com/nemtech/nem2-docs>`_.

*****************
Writing the guide
*****************

1. `Fork <https://help.github.com/articles/fork-a-repo/>`_ and clone the `nem2-docs <https://github.com/nemtech/nem2-docs>`_ repository.

.. code-block:: bash

    git clone <url>

2. Make sure you have Python 2.7 or 3.4+ and `pip <https://pip.pypa.io/en/stable/installing/>`_ installed.

.. code-block:: bash

    python --version

3. Install requirements using pip:

.. code-block:: bash

    pip install -r requirements.txt

3. Create a new ``rst`` file inside one of the guides folder,

.. code-block:: bash

    mkdir source/guides/<folder_name>/<title>.rst

4. Use the following template to organize your content.

::

    :orphan:

    .. post:: 18 Aug, 2018
        :category: <category>
        :excerpt: 1
        :nocomments:
        :author: <your_name_or_username>

    #####
    Title
    #####

    Objective after finishing the guide.

    **********
    Background
    **********

    Explain necessary concepts before starting to code.

    *************
    Prerequisites
    *************

    - A
    - B
    - C

    **********************
    Getting into some code
    **********************

    Present the code and step-by-step explanation.

    ************
    What's next?
    ************

    Is there any extra exercise that readers could try on their own?

5. Write and code your guide! Check the `restructured text cheatsheet <https://github.com/ralsina/rst-cheatsheet/blob/master/rst-cheatsheet.rst>`_ to style your text.

6. Add the `code examples <https://github.com/nemtech/nem2-docs/tree/master/source/resources/examples>`_ under ``source/resources/examples/<language_or_tool>``. You can render fragments of code from a file inside your rst file.

::

    .. example-code::

        .. viewsource:: <relative_url>.ts
            :language: typescript
            :start-after:  /* start block 01*/
            :end-before: /* end block 01 */

7. Test and preview your changes.

    make livehtml

8. Push your changes and do a `pull-request <https://help.github.com/articles/creating-a-pull-request/>`_. The repository maintainers will proofread and edit the content to follow the documentation writing style.
