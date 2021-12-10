########################
Contribute Documentation
########################

There are several ways in which you can help the documentation effort, depending on how much involvement you want to have.

- Just passing by? :ref:`Make a casual suggestion <contribute-suggestion>`.
- Saw something not quite right? :ref:`Review the text <contribute-review>`.
- Would you like to see a page in your language? :doc:`Provide a translation <../guidelines/translating-the-documentation>`.
- Didn't find what you were looking for? :doc:`Write a new guide <../guidelines/writing-a-guide>`.

.. _contribute-suggestion:

Making suggestions
******************

You don't have to write anything if you don't want to. **Reporting mistakes or inaccurate information** is also very valuable!

At the bottom of every page (including this one) there is a link to `submit your feedback <https://github.com/symbol/symbol-docs/issues/new/choose>`__. This link will take you to **GitHub**'s issue reporting page. GitHub is the repository where all |codename| documentation is stored and you need to have an **account** to access it (creating one is easy and free).

Select whether you want to report an error or make a proposal:

.. figure:: /resources/images/screenshots/github-issue-type.png
   :align: center
   :class: with-shadow

It really does not matter much which one you choose, they are all called **issues** by GitHub.

Give your issue a **title**, write as much **detail** as you can about it, and click on ``Submit new issue``. That's all!

.. figure:: /resources/images/screenshots/github-new-issue.png
   :align: center
   :class: with-shadow

We will take care of properly labelling, categorizing and prioritizing the issue. There is nothing else you need to do, except maybe answer questions if there are any. You can go back to your issue at any time and follow its evolution.

.. _contribute-review:

Reviewing and Proofreading
**************************

There is also a mechanism in place in case you want to **edit a page directly** and **suggest your own text**, be it a sentence, a paragraph or a whole section.

At the top of the right column of every article (only visible on horizontal screens) there is a link to `Improve this page <https://github.com/symbol/symbol-docs/edit/main/source/contribute/contributing-docs.rst>`__. This link will open the article directly in the GitHub editor:

.. figure:: /resources/images/screenshots/github-editor.png
   :align: center
   :class: with-shadow

Edit as much or as little as you want. Pages are written using `ReStructuredText <https://docutils.sourceforge.io/docs/user/rst/quickstart.html>`__, an easy-to-read plain-text markup language. If you are not familiar with it, don't worry: any mistakes will be caught up in the review process.

.. note:: There is a **Preview** button, but it does not work with ReStructuredText so it is not very helpful.

When you are done editing scroll down to the bottom of the page: it is time to **commit your changes** and **start a pull request**.

.. figure:: /resources/images/screenshots/github-commit-changes.png
   :align: center
   :class: with-shadow

What this means is:

- You need to give your changes a **short title**, a **description** and **sign** them with your email. In this way, the whole world will know your contribution!
- Your changes are not accepted automatically, they need to be **reviewed** in a process called **pull request**.

When you click on ``Commit changes``, they are stored in a **branch**. The branch name proposed by GitHub (``username-patch-1``) is typically good enough.

A **Pull request** is the process of requesting that your changes are "pulled" from your branch and included in the public pages. To do so, just click on the ``Create pull request`` button in the next screen.

That's it! Your pull request is given a number (like `#733 <https://github.com/symbol/symbol-docs/pull/733>`__) which you can use to follow its progress.

The repository maintainers (some of :doc:`these guys <authors>`) will be notified, review your changes and either accept them or propose further modifications. You will be notified of every step through your email.
