:orphan:

###############
Writing a guide
###############

Thank you for considering writing a new guide!

Before starting, we recommend you to open the `symbol-docs repository issues <https://github.com/nemtech/symbol-docs/issues>`_ to find some ideas pending to be written.

To collaborate with one of the existing issues, express it in a comment to avoid duplicated efforts.
If there is no issue yet, create a new one introducing the content you want to publish.

*****************
Writing the guide
*****************

1. `Fork <https://help.github.com/articles/fork-a-repo/>`_ and clone the `symbol-docs <https://github.com/nemtech/symbol-docs>`_ repository.

.. code-block:: bash

    git clone https://github.com/nemtech/symbol-docs.git

2. Make sure you have Python 3.4+ and `pip <https://pip.pypa.io/en/stable/installing/>`_ installed.

.. code-block:: bash

    python --version

3. Install requirements using pip:

.. code-block:: bash

    pip install -r requirements.txt

3. Create a new ``rst`` file inside one of the guides folder.

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

    The objective to achieve after finishing the guide.

    **********
    Background
    **********

    Explain the necessary concepts before starting to code.

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

5. Write and code your guide.
Check the `restructured text cheatsheet <https://github.com/ralsina/rst-cheatsheet/blob/master/rst-cheatsheet.rst>`_ to style your text.

6. Add the `code examples <https://github.com/nemtech/symbol-docs/tree/master/source/resources/examples>`_ under ``source/resources/examples/<language_or_tool>``.
You can render fragments of code from a file inside your ``.rst`` file.

::

    .. example-code::

        .. viewsource:: <relative_url>.ts
            :language: typescript
            :start-after:  /* start block 01*/
            :end-before: /* end block 01 */

7. Test and preview your changes.

  .. example-code::

    make livehtml

8. Push your changes and create a `pull-request <https://help.github.com/articles/creating-a-pull-request/>`_.
The repository maintainers will proofread and edit the content to follow the :doc:`documentation style guide <style-guide>`.
