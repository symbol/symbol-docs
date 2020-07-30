:orphan:

###############
Writing a guide
###############

|sitename| guides help other developers to get started on Symbol's technology, giving step-by-step instructions on how to use the tools, integrate with other technologies, and combine the built-in features to architect solutions.

***************
Before starting
***************

If you are looking for inspiration to write the guide, you can browse the `symbol-docs repository open issues <https://github.com/nemtech/symbol-docs/issues>`_ to find some ideas pending to be written.
We also encourage you to join our `Slack <https://join.slack.com/t/nem2/shared_invite/enQtMzY4MDc2NTg0ODgyLTFhZjgxM2NhYTQ1MTY1Mjk0ZDE2ZTJlYzUxYWYxYmJlYjAyY2EwNGM5NzgxMjM4MGEzMDc5ZDIwYTgzZjgyODM>`_ #sig-docs channel and present yourself!

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

4. Create a new ``rst`` file inside one of the guides folder.

.. code-block:: bash

    mkdir source/guides/<folder_name>/<title>.rst

5. Write and code your guide in **restructuredText**. If you need help to format your text, you can check this `cheatsheet <https://github.com/ralsina/rst-cheatsheet/blob/master/rst-cheatsheet.rst>`_.

You can use the following template to organize your content:

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

    ********
    Use case
    ********

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

6. Add the `code examples <https://github.com/nemtech/symbol-docs/tree/main/source/resources/examples>`_ under ``source/resources/examples/<language_or_tool>``.
You can render fragments of code from a file inside your ``.rst`` file with the directive ``example-code``.

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
