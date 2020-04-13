#######
Wallets
#######

.. _wallet-desktop:

**************
Desktop Wallet
**************

.. figure:: resources/images/screenshots/wallet.png
    :align: center
    :width: 600px

Cross-platform client for Symbol to manage accounts, mosaics, namespaces, and issue transactions.
|desktop-wallet| is available for Mac, Windows, and as a web application.

.. note:: The desktop wallet is only available for the public test network.

Installation
============

1. Download the |desktop-wallet| from the `releases section <https://github.com/nemfoundation/symbol-desktop-wallet/releases>`_.
The executable file for your operative system is under the "Assets" tab.

2. Launch the executable file and follow the installation instructions.

3. Follow this :doc:`step-by-step guide <guides/account/creating-an-account>` to create a new account.

Guides
======

.. postlist::
    :tags: wallet
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

.. _wallet-cli:

**********************
Command-Line Interface
**********************

.. figure:: resources/images/screenshots/cli.png
    :align: center
    :width: 600px

|cli| is an |open-source| command-line interface to interact with the blockchain.

Installation
============

|cli| is distributed using the node package manager ``npm``.

.. note:: Symbol CLI require Node.js 12 LTS to execute.

Execute the following command in a new terminal:

.. code-block:: bash

    npm install --global symbol-cli

Configuration
=============

To start using |cli|, configure a profile.
Profiles are used to set a base URL and account to sign transactions.

.. code-block:: bash

    symbol-cli profile import --private-key <PRIVATE_KEY> --network TEST_NET --url http://api-01.us-west-1.symboldev.network:3000/ --password <PASSWORD> --profile <PROFILE_NAME>

By default, |cli| will always use the default profile.
To use a named profile with any other command, add the ``--profile`` option to the command.

.. code-block:: bash

    symbol-cli account info --profile <PROFILE_NAME>

If you are going to use named profile for multiple commands, you can change the default profile with the following command.

.. code-block:: bash

    symbol-cli profile setdefault --profile <PROFILE_NAME>

If you do not have a private key to create a profile, you can generate a new account, add a node URL and save it as default or named profile.

.. code-block:: bash

    symbol-cli account generate --network TEST_NET --url http://api-01.us-west-1.symboldev.network:3000/ --password <PASSWORD> --profile <PROFILE_NAME> --save

.. |open-source| raw:: html

   <a href="https://github.com/nemtech/symbol-cli" target="_blank">open-source</a>

Commands
========

These are the available commands for Symbol CLI separated by version.

Find out which CLI version do you have installed by running ``symbol-cli`` from the command line.

.. ghreference:: nemtech/symbol-cli
    :folder:

Guides
======

.. postlist::
    :tags: CLI
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:
