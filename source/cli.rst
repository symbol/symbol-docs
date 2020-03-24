####
CLI
####

|cli| is an |open-source| command-line interface to interact with the blockchain.

************
Installation
************

|cli| is distributed using the node package manager ``npm``.

.. code-block:: bash

    npm install --global symbol-cli

*************
Configuration
*************

To start using |cli|, configure a profile.
Profiles are used to set a base URL and have an account to sign transactions.

.. code-block:: bash

    symbol-cli profile import --private-key your_private_key --network TEST_NET --url http://api-01.us-west-1.symboldev.network:3000/ --password your_password --profile test_net_profile

By default, |cli| will always use the default profile.
To use a named profile, add the ``--profile`` option to the command.

.. code-block:: bash

    symbol-cli account info --profile test_net_profile

If you are going to use named profile for multiple commands, you can change the default profile with the following command.

.. code-block:: bash

    symbol-cli profile setdefault --profile new_profile

If you do not have a private key to create a profile, you can generate a new account, add a node URL and save it as default or named profile.

.. code-block:: bash

    symbol-cli account generate --network TEST_NET -s --url http://api-01.us-west-1.symboldev.network:3000/ --pasword your_password --profile test_net_profile

.. |open-source| raw:: html

   <a href="https://github.com/nemtech/symbol-cli" target="_blank">open-source</a>

********
Commands
********

.. ghreference:: nemtech/symbol-cli
    :folder:
