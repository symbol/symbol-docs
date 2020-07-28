###
CLI
###

.. _wallet-cli:

.. figure:: resources/images/screenshots/cli.png
    :align: center
    :width: 600px

|cli| is an |open-source| command-line interface to interact with the blockchain.

************
Installation
************

|cli| is distributed using the node package manager ``npm``.

.. note:: Symbol CLI require Node.js 12 LTS to execute.

Execute the following command in a new terminal:

.. code-block:: bash

    npm install --global symbol-cli

*************
Configuration
*************

To start using |cli|, configure a profile.
Profiles are used to set a base URL and account to sign transactions.

.. code-block:: bash

    symbol-cli profile import --private-key <PRIVATE_KEY> --network TEST_NET --url http://api-01.us-east-1.096x.symboldev.network:3000 --password <PASSWORD> --profile <PROFILE_NAME>

By default, |cli| will always use the default profile.
To use a named profile with any other command, add the ``--profile`` option to the command.

.. code-block:: bash

    symbol-cli account info --profile <PROFILE_NAME>

If you are going to use named profile for multiple commands, you can change the default profile with the following command.

.. code-block:: bash

    symbol-cli profile setdefault --profile <PROFILE_NAME>

If you do not have a private key to create a profile, you can generate a new account, add a node URL and save it as default or named profile.

.. code-block:: bash

    symbol-cli account generate --network TEST_NET --url http://api-01.us-east-1.096x.symboldev.network:3000 --password <PASSWORD> --profile <PROFILE_NAME> --save

.. |open-source| raw:: html

   <a href="https://github.com/nemtech/symbol-cli" target="_blank">open-source</a>

********
Commands
********

These are the available commands for Symbol CLI separated by version.

Find out which CLI version do you have installed by running ``symbol-cli`` from the command line.

.. ghreference:: nemtech/symbol-cli
    :folder: