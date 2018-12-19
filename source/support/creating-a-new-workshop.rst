:orphan:

#########################
Creating a new workshop
#########################

Thank you for considering doing a new workshop!

Start by choosing the topic and target audience. Workshops published in this repository must be open source, available online and come with a written or recorded guide.

Consider checking already published workshops. You could contribute to one of them instead of creating a complete new workshop from scratch.

***************************
Fork nem2-workshop-template
***************************

We suggest forking the `nem2-workshop-template <https://github.com/nemtech/nem2-workshop-template/>`_. However, it is not necessary to follow the structure proposed as long as the previous requirements are met.

1. Check your Ruby version meets our requirements.

.. code-block:: bash

    $> ruby -v  2.3.3

2. Clone the forked repository.

.. code-block:: bash

    $> git clone <url>

3. Install gems.

.. code-block:: bash

    $> bundle install

4. Run Jekyll.

.. code-block:: bash

    $> bundle exec jekyll serve


Find more information about Jekyll on their `official website <https://jekyllrb.com/>`__.

Modify \_config.yml
===================

::

    title: NEM2 Workshop Title
    email: your@email.com
    description: >- # this means to ignore newlines until "baseurl:"
      Start developing a real use case step by step.
    baseurl: "/repository-name" # the subpath of your site, e.g. /blog
    url: "https://your-github-username.github.io" # the base hostname & protocol for your site, e.g. http://example.com
    repository: your-username/repository-name/

Modify README and index.md
==========================

**Learning objectives**: Describe the target and outcomes of the workshop.

**Requirements**: Remark the pre-requisites that a person who takes the workshop must take into account before starting.

**Modules**: Summarize the workshop contents.

Add new lessons
===============

1. Create a new markdown file inside ``_lessons`` folder. The lesson file name must start with the following consecutive number.

Example:

::

    _lessons/01-introduction.markdown
    _lessons/02-setting-up-your-workstation.markdown

2. The markdown file must start with the following header. Remember to update the title and permalink.

::

    ---
    layout: post
    title:  "Introduction"
    permalink: /lessons/introduction/
    ---

3. Check `Markdown Cheatsheet <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>`__ to style your text.

Add project and slides
======================

4. Consider attaching your project code and slides inside ``project`` and ``slides`` folder.