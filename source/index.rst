###########################
NEM Developer Documentation
###########################

Welcome to the *NEM Developer documentation*, the place where you'll find everything you need to start integrating NEM blockchain in your application or service.

.. note:: This documentation refers to NEM latest version, **Catapult**, which provides higher performance and new functionalities to NEM.

If it is your first time developing with blockchain technology, this guide is for you. NEM was created to be your entry point into the blockchain industry. If you’re an experienced developer, you will learn how to create cutting-edge blockchain apps.

Getting started
===============
Easy-to-follow :doc:`step by step guides <guides/overview>` with code examples.

* :doc:`NEM Overview<getting-started/nem-overview>`
* :doc:`Setting up your environment<getting-started/setup-workstation>`
* :doc:`Writing your first application<getting-started/first-application>`


Fundamentals
============
NEM Smart Assets are built using four closely connected parts:

* :doc:`Accounts <concepts/account>`
* :doc:`Transactions <concepts/transaction>`
* :doc:`Namespaces <concepts/namespace>`
* :doc:`Mosaics <concepts/mosaic>`

References
==========
NEM provides tools and services to accelerate blockchain development, greatly reducing development time.

* :doc:`NEM2-CLI <cli/overview>` Reference.
* :doc:`NEM2-SDK <sdk/overview>` Reference.
* :doc:`NIS2-API <api/overview>` Reference.
* :doc:`NEM Libraries <libraries/overview>`



.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: Getting Started

    getting-started/nem-overview
    getting-started/setup-workstation
    getting-started/first-application

.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: Fundamentals

    concepts/account
    concepts/multisig-account
    concepts/transaction
    concepts/namespace
    concepts/mosaic
    concepts/block
    concepts/node

.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: Guides
    
    guides/overview
    guides/account
    guides/blockchain
    guides/namespace
    guides/mosaic
    guides/transaction

.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: NEM2-CLI

    cli/overview
    cli/commands

.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: NEM2-SDK

    sdk/overview
    sdk/architecture
    sdk/languages

.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: NIS2-API

    api/overview
    api/announce-transaction
    api/websockets
    api/errors

.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: NEM2 Libraries

    libraries/overview

.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: Support
    
    support/contributing