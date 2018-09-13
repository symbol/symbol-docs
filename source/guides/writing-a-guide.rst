:orphan:

###############
Writing a guide
###############

Thank you for considering writing a new guide! 

***************
Before starting 
***************

1. Open the nem2-docs issues, and find which are the guides pending to be written. 

2. Opt to contribute to one of them by adding a comment, or create a new issue with your idea. 

3. Look if you can classify your guide under the current categories. If not, create a new issue proposing a new category:

* :doc:`Interacting with accounts <account>`
* :doc:`Monitoring blockchain <blockchain>`
* :doc:`Registering namespaces <namespace>`
* :doc:`Interacting with mosaics <mosaic>`
* :doc:`Sending transactions <transaction>`
* :doc:`Running a node <running-a-node>`

*****************
Writing the guide
*****************

You can opt to upload the guide directly in this repository, or use your own blog.

Write a guide for this repository
=================================

1. Create a new rst file inside one of the guides folders, named with your name title:

2. 

***************************
Fork nem2-workshop-template
***************************

We suggest forking the `nem2-workshop-template <https://github.com/nemtech/nem2-workshop-template/>`__. However, it is not necessary to follow the structure proposed as long as the previous requirements are met.

Check your Ruby version meets our requirements.

``ruby -v  2.3.3``

Clone the forked repository.

``git clone <url>``

Install gems.

``bundle install``

Run Jekyll.

``bundle exec jekyll serve``

More information about Jekyll can be found on their `official website <https://jekyllrb.com/>`__.

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

Create a new markdown file inside ``_lessons`` folder. The lesson file name must start with the following consecutive number.

Example:

::

    _lessons/01-introduction.markdown
    _lessons/02-setting-up-your-workstation.markdown

The markdown file must start with the following header. Remember to update the title and permalink.

::

    ---
    layout: post
    title:  "Introduction"
    permalink: /lessons/introduction/
    ---

Check `Markdown Cheatsheet <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>`__ to style your text.

Add project and slides
======================

Consider attaching your project code and slides inside ``project`` and ``slides``\ folder.