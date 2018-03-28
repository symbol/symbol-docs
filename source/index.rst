###########################
NEM Developer Documentation
###########################

|nem| blockchain technology delivers a world-class platform for management of almost any kind of asset: currencies, supply chains, notarizations, ownership records and more.

NEM’s power is exposed through a straightforward and secure developer interface so that you can deploy your blockchain solution in record time.

.. note:: This documentation refers to NEM latest version, **Catapult**, which provides higher performance and new functionalities to NEM.

Here you will find everything you need to implement NEM in your application or service.

Getting started
===============
Is this your first time developing with NEM Catapult? Start by :doc:`setting up your working environment <getting-started/setup-workstation>` and then :doc:`follow the first guide <getting-started/first-application>`.

Fundamentals
============
When working with the NEM Blockchain technology, it is essential to understand its core concepts, such as :doc:`Blocks<concepts/block>`, :doc:`Nodes<concepts/node>`, :doc:`Accounts <concepts/account>`,  :doc:`Transactions <concepts/transaction>`,  :doc:`Namespaces <concepts/namespace>` and :doc:`Mosaics <concepts/mosaic>`.

Developer Guides
================
The guide section provides you with code examples of possible implementations of the abovementioned fundamentals, along with easy-to-follow :doc:`step by step guides <guides/overview>`.

References
==========
NEM provides tools and services to accelerate blockchain development, greatly reducing development time.

* Interact with NIS2-API directly from bash with :doc:`NEM2-CLI <cli/overview>`.
* See how :doc:`NEM2-SDK <sdk/overview>` makes API interaction much easier in different programming languages.
* Understand how :doc:`NIS2-API <api/overview>` routes and its behaviour.
* Check and discover :doc:`NEM2 Libraries <libraries/overview>` which extend NEM capabilities.

Support
=======
Couldn't find what you were looking for? Visit :doc:`Support <support/contributing>`.

Continue: :doc:`Getting started <getting-started/setup-workstation>`.

.. |nem| raw:: html

    <a href="https://nem.io/" target="_blank">NEM</a>

.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: Getting Started

    getting-started/setup-workstation
    getting-started/first-application

.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: Fundamentals

    concepts/overview
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