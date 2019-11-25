####################
NEM Developer Center
####################

This documentation introduces NEM's next core engine (NEM2), code-named **Catapult**.

*****************************
NEM is Your Blockchain Engine
*****************************

|nem| is a **developer-friendly blockchain platform** for businesses. It offers flexible and customizable solutions through simple, yet powerful, built-in features.

Developers are able to integrate blockchain technology into their projects or create powerful dApps using NEM's :doc:`REST API <api>`. This allows creating a variety of architectural solutions with lightweight code in any language.

NEM provides access to both **public and private blockchains**, providing options to best suit your company's needs. The public blockchain is a decentralized, open, and self-sustaining ledger that can be used by anyone. The private blockchain, on the other hand, offers higher speed and privacy.

****************************************
Catapult: Preview NEM’s next core engine
****************************************

|Catapult| is NEM's next core engine. It is written in C++ and follows a :doc:`4-layered architecture <concepts/node>`, aiming to make NEM more scalable. It builds upon the achievements of its previous iteration, adding the newest innovations in blockchain technology.

Catapult introduce new exclusive features:

* :doc:`Aggregate Transactions <concepts/aggregate-transaction>`
* :doc:`Cross-Chain Swaps <concepts/cross-chain-swaps>`
* :doc:`Multi-level Multisig Accounts <concepts/multisig-account>`
* :doc:`Account Restriction <concepts/account-restriction>`
* :doc:`Mosaic Restriction <concepts/mosaic-restriction>`

Catapult will be a momentous step for NEM to be the widely utilized enterprise product it was envisioned to be. After three years of development, the long-awaited update is expected to launch `in 2020 <https://forum.nem.io/t/migration-committee-community-update-4/23847/3>`_.

***************
Getting Started
***************

To start developing on Catapult, we recommend you to :doc:`setup your workstation <getting-started/setup-workstation>`. Then, review the following documents to know more about Catapult:

* :doc:`Built-in Features <concepts/account>`
* :doc:`Protocol <concepts/cryptography>`
* :doc:`API Reference <api>`
* :doc:`Software Development Kits <api>`
* :doc:`Command Line Tool <cli>`

***************
Featured Guides
***************

Learn how to use the software development kits and tools with the following step-by-step implementation examples.

* :doc:`How to create a wallet <guides/account/creating-and-opening-an-account>`
* :doc:`How to send a transaction <guides/transfer/sending-a-transfer-transaction>`
* :doc:`How to create a mosaic <guides/mosaic/creating-a-mosaic>`
* :doc:`How to register a namespace <guides/namespace/registering-a-namespace>`
* :doc:`How to run a private test network <guides/network/creating-a-private-test-net>`
* :ref:`More guides <blog-categories>`

************************
Contributing to Catapult
************************

Catapult is an |open-source| project. Discover how our |community| is organized, and get started participating:

*   Ask in |stack-overflow| development-related questions
*   Reach our community joining the official |slack|.
*   Check the :doc:`contributing guidelines <guidelines/suggesting-changes>` to propose changes
*   Follow the development updates on |twitter|
*   Explore our |github| repositories

Continue: :doc:`Setting up your workstation <getting-started/setup-workstation>`

.. |nem| raw:: html

    <a href="https://nem.io/" target="_blank">NEM</a>

.. |catapult| raw:: html

    <a href="https://mijin.io/en/product/#mijin2" target="_blank">Catapult</a>

.. |community| raw:: html

   <a href="https://github.com/nemtech/community/" target="_blank">community</a>

.. |stack-overflow| raw:: html

   <a href="https://stackoverflow.com/tags/nem/" target="_blank">StackOverflow</a>

.. |slack| raw:: html

   <a href="https://join.slack.com/t/nem2/shared_invite/enQtMzY4MDc2NTg0ODgyLWZmZWRiMjViYTVhZjEzOTA0MzUyMTA1NTA5OWQ0MWUzNTA4NjM5OTJhOGViOTBhNjkxYWVhMWRiZDRkOTE0YmU" target="_blank">Slack</a>

.. |twitter| raw:: html

   <a href="https://twitter.com/NEMofficial" target="_blank">Twitter</a>

.. |github| raw:: html

   <a href="https://github.com/nemtech" target="_blank">GitHub</a>

.. |open-source| raw:: html

   <a href="https://github.com/nemtech" target="_blank">open source</a>

.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: Getting Started

    getting-started/setup-workstation
    getting-started/first-application
    guides/network/creating-a-private-test-net
    guides/migration/migrating-from-nis1-to-catapult

.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: Built-in Features

    concepts/account
    concepts/mosaic
    concepts/namespace
    concepts/metadata
    concepts/transfer-transaction
    concepts/aggregate-transaction
    concepts/account-restriction
    concepts/mosaic-restriction
    concepts/multisig-account
    concepts/cross-chain-swaps

.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: Protocol

    concepts/cryptography
    concepts/block
    concepts/transaction
    concepts/fees
    concepts/consensus-algorithm
    concepts/harvesting
    concepts/inflation
    concepts/receipt
    concepts/node

.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: References

    api
    server
    sdk
    cli
    extensions

.. toctree::
    :maxdepth: 2
    :hidden:
    :caption: Contribute

    contribute/community
    contribute/contributing
    contribute/contributors
