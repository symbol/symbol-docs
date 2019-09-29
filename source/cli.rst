####
CLI
####

The NEM2 Command Line Interface is a unified tool to interact with the NEM blockchain.

This tool will enable you to perform the most common used actions to interact with the blockchain.

**NEM2-CLI** is an open source tool built on top of the :doc:`NEM2-SDK<sdk>` Typescript. Use it in your favorite terminal program.

************
Installation
************

NEM2-CLI is distributed using the node package manager ``npm``.

To install:

.. code-block:: bash

    sudo npm install --global nem2-cli

To update:

.. code-block:: bash

    sudo npm update --global nem2-cli

*************
Configuration
*************

To start using NEM2-CLI, configure a profile.

A profile holds an account and a node url for a specific network. Profiles are used to set a base url and have an account to sign transactions.

Configure default profile.

.. code-block:: bash

    nem2-cli profile create --private-key your_private_key --network MIJIN_TEST --url http://localhost:3000

NEM2-CLI supports named profiles. You can configure additional profiles by using the --profile option.

.. code-block:: bash

    nem2-cli profile create --private-key your_private_key --network MIJIN_TEST --url http://localhost:3000 --profile mijin_test_net_profile

By default, NEM2-CLI will always use the default profile. To use a named profile, add the --profile option to the command.

.. code-block:: bash

    nem2-cli account info --profile mijin_test_net_profile

..
    If you are going to use named profile for multiple commands, you can use the NEM2_PROFILE environment variable at the command line.

    .. code-block:: bash

        export NEM2_PROFILE=mijin_test_net_profile

If you do not have a private key to create a profile you can generate a new account, add a node url and save it as default or named profile.

.. code-block:: bash

    nem2-cli account generate --network MIJIN_TEST -s --url http://localhost:3000 --profile mijin_test_net_profile

********
Commands
********

Profile
=======

**Create**

Creates a new profile.

Options

.. code-block:: bash

    -p, --private-key <privateKey> - Account private key.
    -n, --network <network>        - Network Type. Example: MAIN_NET, TEST_NET, MIJIN, MIJIN_TEST.
    -u, --url <url>                - NEM2 Node URL. Example: http://localhost:3000
    --profile <profile>            - (Optional) Profile name, if not private key will override the default profile.

Command

.. code-block:: bash

    nem2-cli profile create -p 206CE7E4B16B48430FD2C216E4BB105564B21E21DEE196267B4B33C54F1023FC -n MIJIN_TEST -u http://localhost:3000

**List**

Displays the list of stored profiles.

Command

.. code-block:: bash

    nem2-cli profile list

.. note:: By default, NEM2-CLI will always use the default profile to connect to a node and set default options such as: address, public key and sign transactions with private key. To use a named profile, add the --profile option to any command.

Account
=======

**Generate new account**

Generates a new :doc:`account <../concepts/account>`. This command generates a private key, public key and address.

Generated accounts can be stored as named profiles by adding a node url.

Options

.. code-block:: bash

    -s, --save              - (Optional) Saves the profile
    -u, --url <url>         - (Optional) When saving profile, provide a NEM2 Node URL. Example: http://localhost:3000
    --profile <profile>     - (Optional) When saving profile you can add profile name, if not will be stored as default.
    -n, --network <network> - Network Type (MAIN_NET, TEST_NET, MIJIN, MIJIN_TEST).

Command

.. code-block:: bash

    nem2-cli account generate --network MIJIN_TEST

**Get account info**

Returns the account information, such as the public key, importance and :doc:`mosaics <../concepts/mosaic>` balance.

Options

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -a, --address <address> - Account address

Command

.. code-block:: bash

    nem2-cli account info --address SDAUTVFWMVXVWWKTTEFTLGUO6HP6MR4GLEK6POJ4

**Get confirmed transactions**

Gets an array of transactions for which an account is the sender or receiver.

Options

.. code-block:: bash

  Fetch transactions from account

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.
    -p, --public-key <publicKey>             - Account public key.
    -n, --num-transactions <numTransactions> - (Optional) Number of transactions. [10]
    -i, --id <id>                            - (Optional) Identifier of the transaction after which we want the transactions to be returned.

Command

.. code-block:: bash

    nem2-cli account transactions --public-key C811AC654B77522D5283640CDA7A222AED49B08FF74445F3CD1FD27CD4FB75E3

    nem2-cli account transactions --public-key C811AC654B77522D5283640CDA7A222AED49B08FF74445F3CD1FD27CD4FB75E3 --num-transactions 40 --id 5A69C893FD331300012A001C

**Get incoming transactions**

Gets an array of incoming transactions. A transaction is said to be incoming with respect to an account if the account is the recipient of the transaction.

Options

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.
    -p, --public-key <publicKey>             - Account public key.
    -n, --num-transactions <numTransactions> - (Optional) Number of transactions. [10]
    -i, --id <id>                            - (Optional) Identifier of the transaction after which we want the transactions to be returned.

Command

.. code-block:: bash

    nem2-cli account incoming --public-key C811AC654B77522D5283640CDA7A222AED49B08FF74445F3CD1FD27CD4FB75E3

**Get outgoing transactions**

Gets an array of outgoing transactions. A transaction is said to be outgoing with respect to an account if the account is the sender of the transaction.

Options

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.
    -p, --public-key <publicKey>             - Account public key.
    -n, --num-transactions <numTransactions> - (Optional) Number of transactions. [10]
    -i, --id <id>                            - (Optional) Identifier of the transaction after which we want the transactions to be returned.

Command

.. code-block:: bash

    nem2-cli account outgoing --public-key C811AC654B77522D5283640CDA7A222AED49B08FF74445F3CD1FD27CD4FB75E3

**Get unconfirmed transactions**

Gets the array of transactions for which an account is the sender or receiver and which have not yet been included in a block.

Options

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.
    -p, --public-key <publicKey>             - Account public key.
    -n, --num-transactions <numTransactions> - (Optional) Number of transactions. [10]
    -i, --id <id>                            - (Optional) Identifier of the transaction after which we want the transactions to be returned.

Command

.. code-block:: bash

    nem2-cli account unconfirmedtransactions --publickey C811AC654B77522D5283640CDA7A222AED49B08FF74445F3CD1FD27CD4FB75E3

**Get aggregate bonded transactions**

Gets an array of aggregate bonded transactions where the account is the sender or requires to cosign the transaction.

Options

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.
    -p, --public-key <publicKey>             - Account public key.
    -n, --num-transactions <numTransactions> - (Optional) Number of transactions. [10]
    -i, --id <id>                            - (Optional) Identifier of the transaction after which we want the transactions to be returned.

Command

.. code-block:: bash

    nem2-cli account aggregatebonded --public-key C811AC654B77522D5283640CDA7A222AED49B08FF74445F3CD1FD27CD4FB75E3

Block
=====

**Transactions**

Returns the transactions for a given block height.

Options

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.

Command

.. code-block:: bash

    nem2-cli block transactions

**Receipts**

Returns the receipts for a given block height.

Options

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.

Command

.. code-block:: bash

    nem2-cli block receipts

Chain
=====

**Chain height**

Returns the current height of the block chain.

Options

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.

Command

.. code-block:: bash

    nem2-cli chain height

**Chain score**

Gets the current score of the block chain. The higher the score, the better the chain. During synchronization, nodes try to get the best block chain in the network.

Options

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.

Command

.. code-block:: bash

    nem2-cli chain score

Diagnostic
==========

**Server info**

Returns the REST server components versions.

Options

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.

Command

.. code-block:: bash

    nem2-cli diagnostic serverinfo

**Storage**

Returns diagnostic information about the node storage.

Options

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.

Command

.. code-block:: bash

    nem2-cli diagnostic storage

Monitor
=======

The NEM2 command line interface has a set of monitoring commands to track events in the NEM blockchain.


**Block**

Monitors new confirmed :doc:`blocks <../concepts/block>` harvested in the blockchain.

Options

.. code-block:: bash

    --profile <profile> - (Optional) Select between your profiles, by providing a profile name.

Command

.. code-block:: bash

    nem2-cli monitor block

**Confirmed transactions**

Monitors new confirmed :doc:`transactions <../concepts/transaction>` signed or received by an :doc:`account <../concepts/account>`.

Options

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -a, --address <address> - Account address.

Command

.. code-block:: bash

    nem2-cli monitor confirmed --address SCEKUG-H2IJBF-7JZRNK-ECMW52-E66SZ6-ODLB4W-NI7K

**Unconfirmed transactions**

Monitors new unconfirmed :doc:`transactions <../concepts/transaction>` signed or received by an :doc:`account <../concepts/account>`.

Options

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -a, --address <address> - Account address.

Command

.. code-block:: bash

    nem2-cli monitor unconfirmed --address SCEKUG-H2IJBF-7JZRNK-ECMW52-E66SZ6-ODLB4W-NI7K

**Aggregate bonded transactions**

Monitors new :ref:`aggregate transactions <aggregate-transaction>` with missing signatures added to an :doc:`account <../concepts/account>`.

Options

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -a, --address <address> - Account address.

Command

.. code-block:: bash

    nem2-cli monitor aggregatebonded --address SCEKUG-H2IJBF-7JZRNK-ECMW52-E66SZ6-ODLB4W-NI7K

**Transaction status**

Monitors :doc:`account <../concepts/account>` validation errors.

Options

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -a, --address <address> - Account address.

Command

.. code-block:: bash

    nem2-cli monitor status --address SCEKUG-H2IJBF-7JZRNK-ECMW52-E66SZ6-ODLB4W-NI7K

Mosaic
======

**Info**

Gets information from a :doc:`mosaic <../concepts/mosaic>`.

Options

.. code-block:: bash

    --profile <profile> - (Optional) Select between your profiles, by providing a profile name.
    -m, --mosaic-id <mosaicId>     - Mosaic id in hexadecimal format.

Command

.. code-block:: bash

    nem2-cli mosaic info --u 7cdf3b117a3c40cc

Namespace
=========

**Info**

Gets information from a :doc:`namespace <../concepts/namespace>`.

Options

.. code-block:: bash

    --profile <profile> - (Optional) Select between your profiles, by providing a profile name.
    -n, --name <name>   - Namespace name.
    -h, --hex <hex>     - Namespace id in hexadecimal.

Command

.. code-block:: bash

    nem2-cli namespace info --hex 85BBEA6CC462B244

**Owned**

Gets all the :doc:`namespaces <../concepts/namespace>` owned by an account.

Options

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -n, --name <name>       - Namespace name.
    -h, --hex <hex>         - Namespace id in hexadecimal.
    -a, --address <address> - Address

Command

.. code-block:: bash

    nem2-cli namespace owned --address SCEKUG-H2IJBF-7JZRNK-ECMW52-E66SZ6-ODLB4W-NI7K

**Alias**

Get mosaicId or address behind an namespace.

Options

.. code-block:: bash

    --profile <profile> - (Optional) Select between your profiles, by providing a profile name.
    -n, --name <name>   - Namespace name.

Command

.. code-block:: bash

    nem2-cli namespace alias --name cat.currency

Transaction
===========

Transactions are signed with the profiles configured with ``nem2-cli profile create``.

**Delegate account importance**

Delegates the account importance to a :ref:`proxy account <account-link-transaction>`.

Options

.. code-block:: bash

    --profile <profile>          - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>       - Maximum fee you want to pay to announce this transaction.
    -p, --public-key <publicKey> - Remote account public key.
    -a, --action <action>        - Alias action (1: Link, 0: Unlink).

Command

.. code-block:: bash

    nem2-cli transaction accountlink --public-key 07A87708BF791A69EB715E466935705E7C98141FBA9EB132644C74FBA467B197 --action 1

**Cosign AggregateBondedTransaction**

Cosigns and announces an :ref:`AggregateBondedTransaction <aggregate-transaction>`.

Options

.. code-block:: bash

    -h, --hash <hash>       - AggregateBondedTransaction hash to be signed.

Command

.. code-block:: bash

    nem2-cli transaction cosign --hash AF92D0A1DC40F786DF455A54F3754E6ACBCEC1B590646404B5ACC85403A92690

**Transaction info**

Returns transaction information given a hash.

Options

.. code-block:: bash

    --profile <profile> - (Optional) Select between your profiles, by providing a profile name.
    -h, --hash <hash>   - Transaction hash.

Command

.. code-block:: bash

    nem2-cli transaction info --hash AF92D0A1DC40F786DF455A54F3754E6ACBCEC1B590646404B5ACC85403A92690

**Transfer mosaics and messages**

Announces a :ref:`TransferTransaction <transfer-transaction>` to an account exchanging value and/or data. For this transaction provide recipient, message and :doc:`mosaics <../concepts/mosaic>`.

You can send ``multiple mosaics`` splitting them with a comma, e.g: @cat.currency::10000000,7cdf3b117a3c40cc::10. The ``mosaic amount`` after :: is in ``absolute value`` so 1 @cat.currency is 1000000 (divisibility 6).

Options

.. code-block:: bash

    --profile <profile>         - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>      - Maximum fee you want to pay to announce this transaction.
    -r, --recipient <recipient> - Recipient address or @alias.
    -m, --message <message>     - Transaction message.
    -c, --mosaics <mosaics>     - Mosaic to transfer in the format (mosaicId(hex)|@aliasName)::absoluteAmount. Add multiple mosaics with commas.

Command

.. code-block:: bash

    nem2-cli transaction transfer --recipient SDBDG4-IT43MP-CW2W4C-BBCSJJ-T42AYA-LQN7A4-VVWL --message "payout of 10 xem" --mosaics @cat.currency::10000000

**Register root namespace**

Registers a root :doc:`namespace <../concepts/namespace>`.

Options

.. code-block:: bash

   --profile <profile>            - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>         - Maximum fee you want to pay to announce this transaction.
    -n, --name <name>              - Namespace name.
    -r, --rootnamespace            - Root namespace.
    -d, --duration <duration>      - Duration (use it with --rootnamespace).

Command

.. code-block:: bash

    nem2-cli transaction namespace --rootnamespace --duration 100000 --name new-namespace

**Register subnamespace**

Registers a :doc:`subnamespace <../concepts/namespace>`.

Options

.. code-block:: bash

    --profile <profile>            - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>         - Maximum fee you want to pay to announce this transaction.
    -n, --name <name>              - Namespace name.
    -s, --subnamespace             - Sub namespace.
    -p, --parent-name <parentName> - Parent namespace name (use it with --subnamespace).

Command

.. code-block:: bash

    nem2-cli transaction namespace --subnamespace --parent-name new-namespace --name new-subnamespace


**Create a mosaic**

Creates a new :doc:`mosaic <../concepts/mosaic>`.

Options

.. code-block:: bash

    --profile <profile>               - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>            - Maximum fee you want to pay to announce this transaction.
    -a, --amount <amount>             - Initial supply of mosaics.
    -t, --transferable                - (Optional)  Mosaic transferable.
    -s, --supply-mutable              - (Optional)  Mosaic supply mutable.
    -r, --restrictable                - (Optional) Mosaic restrictable.
    -d, --divisibility <divisibility> - Mosaic divisibility, from 0 to 6.
    -u, --duration <duration>         - Mosaic duration in amount of blocks.
    -n, --non-expiring                - (Optional) Mosaic non-expiring.

Command

.. code-block:: bash

    nem2-cli transaction mosaic --amount 1000000 --transferable --supplymutable --divisibility 0 --duration  100000

**Modify a mosaic supply**

Changes a mosaic :doc:`mosaic <../concepts/mosaic>`.

Options

.. code-block:: bash

    --profile <profile>        - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>     - Maximum fee you want to pay to announce this transaction.
    -a, --action <action>      - Mosaic supply change action (1: Increase, 0: Decrease).
    -m, --mosaic-id <mosaicId> - Mosaic id in hexadecimal format.
    -d, --delta <delta>        - Atomic amount of supply change.

Command

.. code-block:: bash

    nem2-cli transaction mosaicsupplychange --action 1 --mosaic-id 7cdf3b117a3c40cc --delta 100000

**Link a namespace to a mosaic**

Links a namespace to a :doc:`mosaic <../concepts/mosaic>`.

Options

.. code-block:: bash

    --profile <profile>         - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>      - Maximum fee you want to pay to announce this transaction.
    -a, --action <action>       - Alias action (1: Link, 0: Unlink).
    -m, --mosaic-id <mosaicId>  - Mosaic id in in hexadecimal format.
    -n, --namespace <namespace> - Namespace name.

Command

.. code-block:: bash

    nem2-cli transaction mosaicalias --action 0 --mosaic 7cdf3b117a3c40cc --namespace foo

**Link a namespace to an address**

Links a namespace to an :doc:`address <../concepts/account>`.

Options

.. code-block:: bash

    --profile <profile>         - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>      - Maximum fee you want to pay to announce this transaction.
    -a, --action <action>       - Alias action (1: Link, 0: Unlink).
    -a, --address <address>     - Account address.
    -n, --namespace <namespace> - Namespace name.

Command

.. code-block:: bash

    nem2-cli transaction addressalias --action 0 --address SCEKUG-H2IJBF-7JZRNK-ECMW52-E66SZ6-ODLB4W-NI7K --namespace foo

**Status**

Gets the confirmation status of a transaction.

Options

.. code-block:: bash

    --profile <profile> - (Optional) Select between your profiles, by providing a profile name.
    -h, --hash <hash>   - Transaction hash.

Command

.. code-block:: bash

    nem2-cli transaction status -h 285A4B9A8ED41BD3DEF389667CA512F1038FBCA2D7A9E4188AF1D5292ACE79A4

Restriction
===========

**Get account restrictions**

Returns the account restrictions attached to an address.

Options

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -a, --address <address> - Account address

Command

.. code-block:: bash

    nem2-cli restriction account --address SDAUTVFWMVXVWWKTTEFTLGUO6HP6MR4GLEK6POJ4
