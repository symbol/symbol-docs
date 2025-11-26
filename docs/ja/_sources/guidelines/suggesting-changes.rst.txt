################################
Suggesting documentation changes
################################

|sitename| is an open source project and we love to receive contributions from our community: you!
There are many ways to contribute, from writing guides, improving the documentation, submitting errors and requests or
writing new pieces of documentation which can be incorporated into the docs itself.

*************
Error reports
*************

If you think you have found an error in the |sitename|, first make sure that you are testing against the latest version of |sitename|—your issue may already have been fixed. If not, search our issues list on GitHub in case a similar
|issue| has already been opened.

It is very helpful if you can prepare a reproduction of the error. It makes it easier to find the problem and to fix it.

Please, take into consideration the next template to report your issue:

    **Describe the error**

    A clear and concise description of what the error is.

    **To Reproduce**

    Steps to reproduce the behavior:

    1. Go to '...'

    2. Click on '....'

    3. Scroll down to '....'

    4. See error

    **Expected behavior**

    A clear and concise description of what you expected to happen.

    **Screenshots**

    If applicable, add screenshots to help explain your problem.

Open a new |issue| here.

********
Requests
********

If you find yourself wishing for content that does not exist in the |sitename|, you are probably not alone.
Most of the documentation and guides that the |sitename| has today have been added because our users saw the need.
Open an |issue| on our issues list on GitHub which describes the missing documentation or improvement you would like to see.

If the improvement is not related to documentation, but with a specific project, please check ``CONTRIBUTING.md`` in the project repository.

*******************************************
Contributing code and documentation changes
*******************************************

To expand and improve |sitename|, please find or open an |issue| about it first. Talk about what you would like to do. It may be that somebody is already working on it, or that there are particular issues that you should know about before implementing the change.

We enjoy working with contributors to get their pull-requests accepted.

Building symbol-docs
====================

If the documentation change is small, you can use the *"Edit on Github"* button at the top of the page.

For substantial changes or contributions, you may need to fork the main |repository| and clone it to your local machine. See |github-help| page for help.

First, make sure you have Python 2.7 or 3.4+ and pip installed.

Then, install requirements using pip:

.. code-block:: bash

   pip install -r requirements.txt

Run the following command and open the provided url in a browser.

.. code-block:: bash

   make livehtml

Submitting your changes
=======================

Once your changes and tests are ready to submit for review:

1. Test your changes.

   Run ``make livehtml`` and preview your changes.

2. Submit a pull request.

   Push your local changes to your forked copy of the repository and |pull-request|. In the pull request, choose a title which sums up the changes that you have made, and in the body provide more details about what your changes do. Also mention the number of the issue where discussion has taken place, eg "Closes #123".

   Then sit back and wait. There will probably be a discussion about the pull request and, if any changes are needed, we would love to work with you to get your pull request merged into symbol-docs.

Contributing License Notice
===========================

When you contribute code, you affirm that the contribution is your original work and that you license the work to the project under the project's open source license.

Whether or not you state this explicitly, by submitting any copyrighted material via pull request, email, or other means you agree to license the material under the project's open source license and warrant that you have the legal authority to do so.

``CONTRIBUTING.md`` is based on `CONTRIBUTING-template.md <https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md>`_ , `elasticsearch/CONTRIBUTING <https://github.com/elastic/elasticsearch/blob/master/CONTRIBUTING.md>`_ and `spark/CONTRIBUTING <https://github.com/apache/spark/blob/master/CONTRIBUTING.md>`_.

.. |issue| raw:: html

   <a href="https://github.com/symbol/symbol-docs/issues" target="_blank">issue</a>

.. |github-help| raw:: html

   <a href="https://help.github.com/articles/fork-a-repo/" target="_blank">github help</a>

.. |pull-request| raw:: html

   <a href="https://help.github.com/articles/about-pull-requests/" target="_blank">submit a pull request</a>

.. |repository| raw:: html

   <a href="https://github.com/symbol/symbol-docs/" target="_blank">symbol-docs repository</a>
