######
Client
######

The NEM2 Command Line Interface is a unified tool to interact with the NEM blockchain.

This tool will enable you to perform the most common used actions to interact with the blockchain.

**NEM2-CLI** is an open source tool built on top of the :doc:`NEM2-SDK<sdk>` Typescript. Use it in your favorite terminal program.

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

********
Commands
********

Profile
=======

**Create**

Creates a new profile.

Options

.. code-block:: bash

    -p, --privatekey <privatekey> - Private key
    -n, --network <network>       - Network Type: MAIN_NET, TEST_NET, MIJIN, MIJIN_TEST
    -u, --url <url>               - NEM2 Node URL. Example: http://localhost:3000
    --profile <profile>           - (Optional) profile name, if not private key will be stored as default

Command

.. code-block:: bash

    $> nem2-cli profile create -p 206CE7E4B16B48430FD2C216E4BB105564B21E21DEE196267B4B33C54F1023FC -n MIJIN_TEST -u http://localhost:3000


**List**

Gets the list of stored accounts.

Command

.. code-block:: bash

    $> nem2-cli profile list

.. note:: By default, NEM2-CLI will always use the default profile to connect to a node and set default options such as: address, public key and sign transactions with private key. To use a named profile, add the --profile option to any command.

Account
=======

**Generate new account**

Generates a new :doc:`account <../concepts/account>`. This command generates a private key, public key and address.

Generated accounts can be stored as named profiles by adding a node url.

Options

.. code-block:: bash

    -s, --save              - (Optional) Save profile
    -u, --url <url>         - (Optional) When saving profile, provide a NEM2 Node URL
    --profile <profile>     - (Optional) When saving profile you can add profile name, if not will be stored as default
    -n, --network <network> - Network Type: MAIN_NET, TEST_NET, MIJIN, MIJIN_TEST

Command

.. code-block:: bash

    $> nem2-cli account generate --network MIJIN_TEST

**Get account info**

Returns the account information, such as the public key, importance and :doc:`mosaics <../concepts/mosaic>` balance.

Options

.. code-block:: bash

    -a, --address <address> - Address

Command

.. code-block:: bash

    $> nem2-cli account info --address SDAUTVFWMVXVWWKTTEFTLGUO6HP6MR4GLEK6POJ4

**Get confirmed transactions**

Gets an array of transactions for which an account is the sender or receiver.

Options

.. code-block:: bash

    -p, --publickey <publickey>             - Account public key
    -n, --numtransactions <numtransactions> - (optional) Number of transactions
    -i, --id <id>                           - (optional) Identifier of the transaction after which we want the transactions to be returned

Command

.. code-block:: bash

    $> nem2-cli account transactions --publickey C811AC654B77522D5283640CDA7A222AED49B08FF74445F3CD1FD27CD4FB75E3

    $> nem2-cli account transactions --publickey C811AC654B77522D5283640CDA7A222AED49B08FF74445F3CD1FD27CD4FB75E3 --numtransactions 40 --id 5A69C893FD331300012A001C

**Get incoming transactions**

Gets an array of incoming transactions. A transaction is said to be incoming with respect to an account if the account is the recipient of the transaction.

Options

.. code-block:: bash

    -p, --publickey <publickey>             - Account public key
    -n, --numtransactions <numtransactions> - (optional) Number of transactions
    -i, --id <id>                           - (optional) Identifier of the transaction after which we want the transactions to be returned

Command

.. code-block:: bash

    $> nem2-cli account incoming --publickey C811AC654B77522D5283640CDA7A222AED49B08FF74445F3CD1FD27CD4FB75E3

**Get outgoing transactions**

Gets an array of outgoing transactions. A transaction is said to be outgoing with respect to an account if the account is the sender of the transaction.

Options

.. code-block:: bash

    -p, --publickey <publickey>             - Account public key
    -n, --numtransactions <numtransactions> - (optional) Number of transactions
    -i, --id <id>                           - (optional) Identifier of the transaction after which we want the transactions to be returned

Command

.. code-block:: bash

    $> nem2-cli account outgoing --publickey C811AC654B77522D5283640CDA7A222AED49B08FF74445F3CD1FD27CD4FB75E3

**Get unconfirmed transactions**

Gets the array of transactions for which an account is the sender or receiver and which have not yet been included in a block.

Options

.. code-block:: bash

    -p, --publickey <publickey>             - Account public key
    -n, --numtransactions <numtransactions> - (optional) Number of transactions
    -i, --id <id>                           - (optional) Identifier of the transaction after which we want the transactions to be returned

Command

.. code-block:: bash

    $> nem2-cli account unconfirmedtransactions --publickey C811AC654B77522D5283640CDA7A222AED49B08FF74445F3CD1FD27CD4FB75E3

**Get Aggregate bonded transactions**

Gets an array of aggregate bonded transactions where the account is the sender or requires to cosign the transaction.

Options

.. code-block:: bash

    -p, --publickey <publickey>             - Account public key
    -n, --numtransactions <numtransactions> - (optional) Number of transactions
    -i, --id <id>                           - (optional) Identifier of the transaction after which we want the transactions to be returned

Command

.. code-block:: bash

    $> nem2-cli account aggregatebonded --publickey C811AC654B77522D5283640CDA7A222AED49B08FF74445F3CD1FD27CD4FB75E3

Blockchain
==========

**Blockchain height**

Returns the current height of the block chain.

Command

.. code-block:: bash

    $> nem2-cli blockchain height

**Blockchain score**

Gets the current score of the block chain. The higher the score, the better the chain. During synchronization, nodes try to get the best block chain in the network.

Command

.. code-block:: bash

    $> nem2-cli blockchain score

Transaction
===========

Transactions are signed with the profiles configured with ``nem2-cli profile create``.

**Cosign aggregate bonded transaction**

Cosigns and announces an :ref:`aggregate bonded transaction <aggregate-transaction>`.

Options

.. code-block:: bash

    -h, --hash <hash>       - Aggregate bonded transaction hash to be signed

Command

.. code-block:: bash

    $> nem2-cli transaction cosign --hash AF92D0A1DC40F786DF455A54F3754E6ACBCEC1B590646404B5ACC85403A92690

**Transaction info**

Returns transaction information given a hash.

Options

.. code-block:: bash

    -h, --hash <hash>       - Transaction hash

Command

.. code-block:: bash

    $> nem2-cli transaction info --hash AF92D0A1DC40F786DF455A54F3754E6ACBCEC1B590646404B5ACC85403A92690

**Send transfer transaction**

Announces a :ref:`transfer transaction <transfer-transaction>` to an account exchanging value and/or data. For this transaction provide recipient, message and :doc:`mosaics <../concepts/mosaic>`.

You can send ``multiple mosaics`` splitting them with a comma, e.g: @cat.currency::10000000,7cdf3b117a3c40cc::10. The ``mosaic amount`` after :: is in ``absolute value`` so 1 @cat.currency is 1000000 (divisibility 6).

Options

.. code-block:: bash

    -r, --recipient <recipient> - Recipient
    -m, --message <message>     - Transaction message
    -t, --mosaics <mosaics>     - Mosaic in the format (mosaicId(hex)|@aliasName)::absoluteAmount, add multiple mosaics splitting them with a comma

Command

.. code-block:: bash

    $> nem2-cli transaction transfer --recipient SDBDG4-IT43MP-CW2W4C-BBCSJJ-T42AYA-LQN7A4-VVWL --message "payout of 10 xem" --mosaics @cat.currency::10000000

**Send pull transaction**

Requests :doc:`mosaics <../concepts/mosaic>` from an account. The other account has to cosign the transaction.

Options

.. code-block:: bash

    -r, --recipient <recipient>   - Recipient public key
    -m, --message <message>       - Message to the funds holder
    -x, --mosaic <mosaic>         - Mosaic you want to get in the format (mosaicId(hex)|@aliasName)::absoluteAmount
    -c, --currency <currency>     - The network native currency mosaicId in hexadecimal

Command

.. code-block:: bash

    $> nem2-cli transaction pullfunds --recipient SDBDG4-IT43MP-CW2W4C-BBCSJJ-T42AYA-LQN7A4-VVWL --message "invoice 10 xem" --mosaic @cat.currency::10000000 --currency 0dc67fbe1cad29e3

**Register root namespace**

Registers a root :doc:`namespace <../concepts/namespace>`.

Options

.. code-block:: bash

    -n, --name <name>             - Namespace name
    -r, --rootnamespace           - Root namespace
    -d, --duration <duration>     - Duration (use it with --rootnamespace)
    -p, --parentname <parentname> - Parent namespace name (use it with --subnamespace)

Command

.. code-block:: bash

    $> nem2-cli transaction namespace --rootnamespace --duration 100000 --name new-namespace

**Register subnamespace**

Registers a :doc:`subnamespace <../concepts/namespace>`.

Options

.. code-block:: bash

    -n, --name <name>             - Namespace name
    -s, --subnamespace            - Sub namespace
    -p, --parentname <parentname> - Parent namespace name (use it with --subnamespace)

Command

.. code-block:: bash

    $> nem2-cli transaction namespace --subnamespace --parentname new-namespace --name new-subnamespace


**Create a mosaic**

Creates a new :doc:`mosaic <../concepts/mosaic>`.

Options

.. code-block:: bash

    -a, --amount <amount>               - Amount of tokens
    -t, --transferable                  - Mosaic transferable
    -s, --supplymutable                 - Mosaic supply mutable
    -l, --levymutable                   - Mosaic levy mutable
    -d, --divisibility <divisibility>   - Mosaic divisibility, from 0 to 6
    -u, --duration <duration>           - Mosaic duration in amount of blocks

Command

.. code-block:: bash

    $> nem2-cli transaction mosaic --amount 1000000 --transferable --supplymutable --divisibility 0 --duration  100000

Namespace
=========

**Info**

Gets information from a :doc:`namespace <../concepts/namespace>`. Use this command providing the namespace name or the namespace uint ID in the form of [3646934825,3576016193].

Options

.. code-block:: bash

    -n, --name <name>   - Namespace Id in string format
    -u, --uint <uint>   - Namespace id in uint64 format. [number, number]

Command

.. code-block:: bash

    $> nem2-cli namespace info --uint [929036875,2226345261]

Mosaic
======

**Info**

Gets information from a :doc:`mosaic <../concepts/mosaic>`. Use this command providing the mosaic identifier name in hexadecimal or the mosaic uint ID ([lower,higher]).

Options

.. code-block:: bash

    -u, --uint <uint>   - Mosaic id in uint64 format. [number, number]
    -h, --hex <hex>    - Mosaic id in haxadecimal format

Command

.. code-block:: bash

    $> nem2-cli mosaic info --u 7cdf3b117a3c40cc

Monitoring
==========

The NEM2 command line interface has a set of monitoring commands to track events in the NEM blockchain.


**Block**

Monitors new confirmed :doc:`blocks <../concepts/block>` harvested in the blockchain.

Command

.. code-block:: bash

    $> nem2-cli monitor block

**Confirmed transactions**

Monitors new confirmed :doc:`transactions <../concepts/transaction>` signed or received by an :doc:`account <../concepts/account>`.

Options

.. code-block:: bash

    -a, --address <address> - Address

Command

.. code-block:: bash

    $> nem2-cli monitor confirmed --address SCEKUG-H2IJBF-7JZRNK-ECMW52-E66SZ6-ODLB4W-NI7K

**Unconfirmed transactions**

Monitors new unconfirmed :doc:`transactions <../concepts/transaction>` signed or received by an :doc:`account <../concepts/account>`.

Options

.. code-block:: bash

    -a, --address <address> - Address

Command

.. code-block:: bash

    $> nem2-cli monitor unconfirmed --address SCEKUG-H2IJBF-7JZRNK-ECMW52-E66SZ6-ODLB4W-NI7K

**Aggregate bonded transactions**

Monitors new :ref:`aggregate transactions <aggregate-transaction>` with missing signatures added to an :doc:`account <../concepts/account>`.

Options

.. code-block:: bash

    -a, --address <address> - Address

Command

.. code-block:: bash

    $> nem2-cli monitor aggregatebonded --address SCEKUG-H2IJBF-7JZRNK-ECMW52-E66SZ6-ODLB4W-NI7K

**Transaction status**

Monitors :doc:`account <../concepts/account>` validation errors.

Options

.. code-block:: bash

    -a, --address <address> - Address

Command

.. code-block:: bash

    $> nem2-cli monitor status --address SCEKUG-H2IJBF-7JZRNK-ECMW52-E66SZ6-ODLB4W-NI7K
