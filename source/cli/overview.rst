########
Overview
########

The NEM2 Command Line Interface is a unified tool to interact with the NEM blockchain.

This tool will enable you to perform the most common used actions to interact with the blockchain.

**NEM2-CLI** is an open source tool built on top of the :doc:`NEM2-SDK<../sdk/overview>` Typescript. Use it in your favorite terminal program.

************
Installation
************

NEM2-CLI is distributed using the node package manager ``npm``.

To install:

.. code-block:: bash

    $> sudo npm install --global nem2-cli

To update:

.. code-block:: bash

    $> sudo npm update --global nem2-cli

*************
Configuration
*************

To start using NEM2-CLI, configure a profile.

A profile holds an account and a node url for a specific network. Profiles are used to set a base url and have an account to sign transactions.

Configure default profile.

.. code-block:: bash

    $> nem2-cli profile create --privatekey your_private_key --network MIJIN_TEST --url http://localhost:3000

NEM2-CLI supports named profiles. You can configure additional profiles by using the --profile option.

.. code-block:: bash

    $> nem2-cli profile create --privatekey your_private_key --network MIJIN_TEST --url http://localhost:3000 --profile mijin_test_net_profile

By default, NEM2-CLI will always use the default profile. To use a named profile, add the --profile option to the command.

.. code-block:: bash

    $> nem2-cli account info --profile mijin_test_net_profile

If you are going to use named profile for multiple commands, you can use the NEM2_PROFILE environment variable at the command line.

.. code-block:: bash

    $> export NEM2_PROFILE=mijin_test_net_profile

If you do not have a private key to create a profile you can generate a new account, add a node url and save it as default or named profile.

.. code-block:: bash

    $> nem2-cli account generate --network MIJIN_TEST -s --url http://localhost:3000 --profile mijin_test_net_profile


Continue: :doc:`Commands <commands>`.