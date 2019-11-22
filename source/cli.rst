####
CLI
####

|NEM2-CLI| is an open-source command-line interface to interact with the blockchain.

************
Installation
************

NEM2-CLI is distributed using the node package manager ``npm``.

.. code-block:: bash

    sudo npm install --global nem2-cli

*************
Configuration
*************

To start using NEM2-CLI, configure a profile.

A profile holds an account and a node URL for a specific network. Profiles are used to set a base URL and have an account to sign transactions.

.. code-block:: bash

    nem2-cli profile create --private-key your_private_key --network MIJIN_TEST --url http://localhost:3000

NEM2-CLI supports named profiles. You can configure additional profiles by using the --profile option.

.. code-block:: bash

    nem2-cli profile create --private-key your_private_key --network MIJIN_TEST --url http://localhost:3000 --profile mijin_test_net_profile

By default, NEM2-CLI will always use the default profile. To use a named profile, add the --profile option to the command.

.. code-block:: bash

    nem2-cli account info --profile mijin_test_net_profile

If you are going to use named profile for multiple commands, you can change the default profile with the following command.

.. code-block:: bash

    nem2-cli profile setdefault --profile new_profile

If you do not have a private key to create a profile, you can generate a new account, add a node URL and save it as default or named profile.

.. code-block:: bash

    nem2-cli account generate --network MIJIN_TEST -s --url http://localhost:3000 --profile mijin_test_net_profile

********
Commands
********

Profile
=======

**Create**

Creates a new profile.

*Options*

.. code-block:: bash

    -p, --private-key <privateKey> - Account private key.
    -n, --network <network>        - Network Type. Example: MAIN_NET, TEST_NET, MIJIN, MIJIN_TEST.
    -u, --url <url>                - NEM2 Node URL. Example: http://localhost:3000
    --profile <profile>            - (Optional) Profile name, if not private key will override the default profile.

*Command*

.. viewsource:: resources/examples/bash/account/OpeningAnAccountWallet.sh
    :language: bash
    :start-after: #!/bin/sh

**List**

Displays the list of stored profiles.

*Command*

.. viewsource:: resources/examples/bash/account/ListingProfiles.sh
    :language: bash
    :start-after: #!/bin/sh

.. note:: By default, NEM2-CLI will always use the default profile to connect to a node and set default options such as: address, public key and sign transactions with private key. To use a named profile, add the --profile option to any command.

**Set default**

Change the default profile.

*Options*

.. code-block:: bash

    --profile <profile>     - (Optional) Profile name, if not private key will override the default profile.

*Command*

.. viewsource:: resources/examples/bash/account/SettingDefaultProfile.sh
    :language: bash
    :start-after: #!/bin/sh

Account
=======

**Generate new account**

Generates a new :doc:`account <concepts/account>`. This command generates a private key, public key and address.

Generated accounts can be stored as named profiles by adding a node url.

*Options*

.. code-block:: bash

    -s, --save              - (Optional) Saves the profile
    -u, --url <url>         - (Optional) When saving profile, provide a NEM2 Node URL. Example: http://localhost:3000
    --profile <profile>     - (Optional) When saving profile you can add profile name, if not will be stored as default.
    -n, --network <network> - Network Type (MAIN_NET, TEST_NET, MIJIN, MIJIN_TEST).

*Command*

.. viewsource:: resources/examples/bash/account/CreatingAnAccount.sh
    :language: bash
    :start-after: #!/bin/sh

**Get account info**

Returns the account information, such as the public key, importance and :doc:`mosaics <concepts/mosaic>` balance.

*Options*

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -a, --address <address> - Account address.

*Command*

.. viewsource:: resources/examples/bash/account/GettingAccountInformation.sh
    :language: bash
    :start-after: #!/bin/sh

**Get confirmed transactions**

Gets an array of transactions for which an account is the sender or receiver.

*Options*

.. code-block:: bash

  Fetch transactions from account

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.
    -p, --public-key <publicKey>             - Account public key.
    -n, --num-transactions <numTransactions> - (Optional) Number of transactions. [10]
    -i, --id <id>                            - (Optional) Identifier of the transaction after which we want the transactions to be returned.

*Command*

.. viewsource:: resources/examples/bash/account/GettingConfirmedTransactions.sh
    :language: bash
    :start-after: #!/bin/sh

**Get incoming transactions**

Gets an array of incoming transactions. A transaction is said to be incoming with respect to an account if the account is the recipient of the transaction.

*Options*

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.
    -p, --public-key <publicKey>             - Account public key.
    -n, --num-transactions <numTransactions> - (Optional) Number of transactions. [10]
    -i, --id <id>                            - (Optional) Identifier of the transaction after which we want the transactions to be returned.

*Command*

.. viewsource:: resources/examples/bash/account/GettingIncomingTransactions.sh
    :language: bash
    :start-after: #!/bin/sh

**Get outgoing transactions**

Gets an array of outgoing transactions. A transaction is said to be outgoing with respect to an account if the account is the sender of the transaction.

*Options*

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.
    -p, --public-key <publicKey>             - Account public key.
    -n, --num-transactions <numTransactions> - (Optional) Number of transactions. [10]
    -i, --id <id>                            - (Optional) Identifier of the transaction after which we want the transactions to be returned.

*Command*

.. viewsource:: resources/examples/bash/account/GettingOutgoingTransactions.sh
    :language: bash
    :start-after: #!/bin/sh

**Get unconfirmed transactions**

Gets the array of transactions for which an account is the sender or receiver and which have not yet been included in a block.

*Options*

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.
    -p, --public-key <publicKey>             - Account public key.
    -n, --num-transactions <numTransactions> - (Optional) Number of transactions. [10]
    -i, --id <id>                            - (Optional) Identifier of the transaction after which we want the transactions to be returned.

*Command*

.. viewsource:: resources/examples/bash/account/GettingUnconfirmedTransactions.sh
    :language: bash
    :start-after: #!/bin/sh

**Get aggregate bonded transactions**

Gets an array of aggregate bonded transactions where the account is the sender or requires to cosign the transaction.

*Options*

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.
    -p, --public-key <publicKey>             - Account public key.
    -n, --num-transactions <numTransactions> - (Optional) Number of transactions. [10]
    -i, --id <id>                            - (Optional) Identifier of the transaction after which we want the transactions to be returned.

*Command*

.. viewsource:: resources/examples/bash/account/GettingAggregateBondedTransactions.sh
    :language: bash
    :start-after: #!/bin/sh

Block
=====

**Header**

Returns the block header by height.

*Options*

.. code-block:: bash

    --profile <profile>        - (Optional) Select between your profiles, by providing a profile name.
    -h, --height <height>      - Block height.

*Command*

.. viewsource:: resources/examples/bash/blockchain/GettingBlockHeader.sh
    :language: bash
    :start-after: #!/bin/sh

**Transactions**

Returns the transactions for a given block height.

*Options*

.. code-block:: bash

    --profile <profile>        - (Optional) Select between your profiles, by providing a profile name.
    -h, --height <height>      - Block height.
    -s, --page-size <pageSize> - (Optional) Page size between 10 and 100. Default: 10
    -i, --id <id>              - (Optional) Id after which we want objects to be returned.
    -o, --order <order>        - (Optional): Order of transactions. DESC. Newer to older. ASC. Older to newer. Default: DESC

*Command*

.. viewsource:: resources/examples/bash/blockchain/GettingBlockTransactions.sh
    :language: bash
    :start-after: #!/bin/sh

**Receipts**

Returns the receipts for a given block height.

*Options*

.. code-block:: bash

    --profile <profile>        - (Optional) Select between your profiles, by providing a profile name.
    -h, --height <height>      - Block height.

*Command*

.. viewsource:: resources/examples/bash/blockchain/GettingBlockReceipts.sh
    :language: bash
    :start-after: #!/bin/sh

Chain
=====

**Chain height**

Returns the current height of the block chain.

*Options*

.. code-block:: bash

    --profile <profile>                      - (Optional) Select between your profiles, by providing a profile name.

*Command*

.. viewsource:: resources/examples/bash/blockchain/GettingBlockchainHeight.sh
    :language: bash
    :start-after: #!/bin/sh

**Chain score**

Gets the current score of the block chain. The higher the score, the better the chain. During synchronization, nodes try to get the best block chain in the network.

*Options*

.. code-block:: bash

    --profile <profile>  - (Optional) Select between your profiles, by providing a profile name.

*Command*

.. viewsource:: resources/examples/bash/blockchain/GettingChainScore.sh
    :language: bash
    :start-after: #!/bin/sh

Diagnostic
==========

**Server info**

Returns the REST server components versions.

*Options*

.. code-block:: bash

    --profile <profile>  - (Optional) Select between your profiles, by providing a profile name.

*Command*

.. viewsource:: resources/examples/bash/monitor/GettingServerInfo.sh
    :language: bash
    :start-after: #!/bin/sh

**Storage**

Returns diagnostic information about the node storage.

*Options*

.. code-block:: bash

    --profile <profile>  - (Optional) Select between your profiles, by providing a profile name.

*Command*

.. viewsource:: resources/examples/bash/monitor/GettingServerStorage.sh
    :language: bash
    :start-after: #!/bin/sh

Metadata
========

**Account**

Returns :doc:`metadata <concepts/metadata>` entries from an account.

*Options*

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -a, --address <address> - Account address.

*Command*

.. viewsource:: resources/examples/bash/metadata/GettingMetadataEntriesAccount.sh
    :language: bash
    :start-after: #!/bin/sh

**Mosaic**

Returns :doc:`metadata <concepts/metadata>` entries from a mosaic.

*Options*

.. code-block:: bash

    --profile <profile>        - (Optional) Select between your profiles, by providing a profile name.
    -m, --mosaic-id <mosaicId> - Mosaic id in hexadecimal format.

*Command*

.. viewsource:: resources/examples/bash/metadata/GettingMetadataEntriesMosaic.sh
    :language: bash
    :start-after: #!/bin/sh


**Namespace**

Returns :doc:`metadata <concepts/metadata>` entries from a namespace.

*Options*

.. code-block:: bash

    --profile <profile>                  - (Optional) Select between your profiles, by providing a profile name.
    -n, --namespace-name <namespaceName> - Namespace name.

*Command*

.. viewsource:: resources/examples/bash/metadata/GettingMetadataEntriesNamespace.sh
    :language: bash
    :start-after: #!/bin/sh

Monitor
=======

The NEM2 command line interface has a set of monitoring commands to track events in the NEM blockchain.


**Block**

Monitors new confirmed :doc:`blocks <concepts/block>` harvested on the blockchain.

*Options*

.. code-block:: bash

    --profile <profile> - (Optional) Select between your profiles, by providing a profile name.

*Command*

.. viewsource:: resources/examples/bash/monitor/MonitoringNewBlocks.sh
    :language: bash
    :start-after: #!/bin/sh

**Confirmed transactions**

Monitors new confirmed :doc:`transactions <concepts/transaction>` signed or received by an :doc:`account <concepts/account>`.

*Options*

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -a, --address <address> - Account address.

*Command*

.. viewsource:: resources/examples/bash/monitor/MonitoringTransactionConfirmed.sh
    :language: bash
    :start-after: #!/bin/sh

**Unconfirmed transactions**

Monitors new unconfirmed :doc:`transactions <concepts/transaction>` signed or received by an :doc:`account <concepts/account>`.

*Options*

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -a, --address <address> - Account address.

*Command*

.. viewsource:: resources/examples/bash/monitor/MonitoringTransactionUnconfirmed.sh
    :language: bash
    :start-after: #!/bin/sh

**Aggregate bonded transactions**

Monitors new :ref:`aggregate transactions <aggregate-transaction>` with missing signatures added to an :doc:`account <concepts/account>`.

*Options*

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -a, --address <address> - Account address.

*Command*

.. viewsource:: resources/examples/bash/monitor/MonitoringTransactionAggregateBonded.sh
    :language: bash
    :start-after: #!/bin/sh

**Transaction status**

Monitors :doc:`account <concepts/account>` validation errors.

*Options*

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -a, --address <address> - Account address.

*Command*

.. viewsource:: resources/examples/bash/monitor/MonitoringTransactionStatusError.sh
    :language: bash
    :start-after: #!/bin/sh

Mosaic
======

**Info**

Gets information from a :doc:`mosaic <concepts/mosaic>`.

*Options*

.. code-block:: bash

    --profile <profile>            - (Optional) Select between your profiles, by providing a profile name.
    -m, --mosaic-id <mosaicId>     - Mosaic id in hexadecimal format.

*Command*

.. viewsource:: resources/examples/bash/mosaic/GettingMosaicInformation.sh
    :language: bash
    :start-after: #!/bin/sh

Namespace
=========

**Info**

Gets information from a :doc:`namespace <concepts/namespace>`.

*Options*

.. code-block:: bash

    --profile <profile> - (Optional) Select between your profiles, by providing a profile name.
    -n, --name <name>   - Namespace name.
    -h, --hex <hex>     - Namespace id in hexadecimal.

*Command*

.. viewsource:: resources/examples/bash/namespace/GettingNamespaceInformation.sh
    :language: bash
    :start-after: #!/bin/sh

**Owned**

Gets all the :doc:`namespaces <concepts/namespace>` owned by an account.

*Options*

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -n, --name <name>       - Namespace name.
    -h, --hex <hex>         - Namespace id in hexadecimal.
    -a, --address <address> - Address

*Command*

.. viewsource:: resources/examples/bash/namespace/GettingNamespacesOwned.sh
    :language: bash
    :start-after: #!/bin/sh

**Alias**

Get mosaicId or address behind an namespace.

*Options*

.. code-block:: bash

    --profile <profile> - (Optional) Select between your profiles, by providing a profile name.
    -n, --name <name>   - Namespace name.

*Command*

.. viewsource:: resources/examples/bash/namespace/GettingAliasResolution.sh
    :language: bash
    :start-after: #!/bin/sh

Transaction
===========

Transactions are signed with the profiles configured with ``nem2-cli profile create``.

**Transaction info**

Returns transaction information given a hash.

*Options*

.. code-block:: bash

    --profile <profile> - (Optional) Select between your profiles, by providing a profile name.
    -h, --hash <hash>   - Transaction hash.

*Command*

.. viewsource:: resources/examples/bash/monitor/GettingTransactionInfo.sh
    :language: bash
    :start-after: #!/bin/sh

**Transaction Status**

Gets the confirmation status of a transaction.

*Options*

.. code-block:: bash

    --profile <profile> - (Optional) Select between your profiles, by providing a profile name.
    -h, --hash <hash>   - Transaction hash.

*Command*

.. viewsource:: resources/examples/bash/monitor/GettingTransactionStatus.sh
    :language: bash
    :start-after: #!/bin/sh

**AccountLinkTransaction**

Delegates the account importance to a :ref:`proxy account <account-link-transaction>`.

*Options*

.. code-block:: bash

    --profile <profile>          - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>       - Maximum fee (absolute amount).
    -p, --public-key <publicKey> - Remote account public key.
    -a, --action <action>        - Alias action (1: Link, 0: Unlink).

*Command*

.. viewsource:: resources/examples/bash/harvesting/DelegatingAccountImportanceToProxyAccount.sh
    :language: bash
    :start-after: #!/bin/sh

**CosignatureTransaction**

Cosigns and announces an :ref:`AggregateBondedTransaction <aggregate-transaction>`.

*Options*

.. code-block:: bash

    -h, --hash <hash>       - AggregateBondedTransaction hash to be signed.

*Command*

.. viewsource:: resources/examples/bash/aggregate/CosigningAggregateBondedTransactions.sh
    :language: bash
    :start-after: #!/bin/sh

**MosaicDefinitionTransaction**

Creates a new :doc:`mosaic <concepts/mosaic>`.

*Options*

.. code-block:: bash

    --profile <profile>               - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>            - Maximum fee (absolute amount).
    -a, --amount <amount>             - Initial supply of mosaics.
    -t, --transferable                - (Optional)  Mosaic transferable.
    -s, --supply-mutable              - (Optional)  Mosaic supply mutable.
    -r, --restrictable                - (Optional) Mosaic restrictable.
    -d, --divisibility <divisibility> - Mosaic divisibility, from 0 to 6.
    -u, --duration <duration>         - Mosaic duration in amount of blocks.
    -n, --non-expiring                - (Optional) Mosaic non-expiring.

*Command*

.. viewsource:: resources/examples/bash/mosaic/CreatingAMosaic.sh
    :language: bash
    :start-after: #!/bin/sh

**MosaicSupplyChangeTransaction**

Changes a mosaic :doc:`mosaic <concepts/mosaic>`.

*Options*

.. code-block:: bash

    --profile <profile>        - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>     - Maximum fee (absolute amount).
    -a, --action <action>      - Mosaic supply change action (1: Increase, 0: Decrease).
    -m, --mosaic-id <mosaicId> - Mosaic id in hexadecimal format.
    -d, --delta <delta>        - Atomic amount of supply change.

*Command*

.. viewsource:: resources/examples/bash/mosaic/ModifyingMosaicSupply.sh
    :language: bash
    :start-after: #!/bin/sh

**NamespaceRegistrationTransaction**

Registers a :doc:`namespace <concepts/namespace>`.

*Options*

.. code-block:: bash

    --profile <profile>            - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>         - Maximum fee (absolute amount).
    -n, --name <name>              - Namespace name.
    -r, --rootnamespace            - Root namespace.
    -s, --subnamespace             - Sub namespace.
    -d, --duration <duration>      - Duration (use it with --rootnamespace).
    -p, --parent-name <parentName> - Parent namespace name (use it with --subnamespace).

*Command*

Register a root namespace:

.. viewsource:: resources/examples/bash/namespace/RegisteringANamespace.sh
    :language: bash
    :start-after: #!/bin/sh

Register a subnamespace:

.. viewsource:: resources/examples/bash/namespace/RegisteringASubnamespace.sh
    :language: bash
    :start-after: #!/bin/sh

**AddressAliasTransaction**

Links a namespace to an :doc:`address <concepts/account>`.

*Options*

.. code-block:: bash

    --profile <profile>         - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>      - Maximum fee (absolute amount).
    -a, --action <action>       - Alias action (1: Link, 0: Unlink).
    -a, --address <address>     - Account address.
    -n, --namespace <namespace> - Namespace name.

*Command*

.. viewsource:: resources/examples/bash/namespace/LinkNamespaceAddress.sh
    :language: bash
    :start-after: #!/bin/sh

**MosaicAliasTransaction**

Links a namespace to a :doc:`mosaic <concepts/mosaic>`.

*Options*

.. code-block:: bash

    --profile <profile>         - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>      - Maximum fee (absolute amount).
    -a, --action <action>       - Alias action (1: Link, 0: Unlink).
    -m, --mosaic-id <mosaicId>  - Mosaic id in in hexadecimal format.
    -n, --namespace <namespace> - Namespace name.

*Command*

.. viewsource:: resources/examples/bash/namespace/LinkNamespaceMosaic.sh
    :language: bash
    :start-after: #!/bin/sh

**MultisigModificationAccountTransaction**

Create or modify a :doc:`multisig account <concepts/multisig-account>`.

.. note:: The command only supports to add or remove one account as a cosignatory at a time.

*Options*

.. code-block:: bash

    --profile <profile>                                          - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>                                       - Maximum fee you want to pay to announce the transaction.
    -F, --max-fee-hash-lock <maxFeeHashLock>                     - Maximum fee you want to pay to announce the hash lock transaction.
    -D, --duration <duration>                                    - Hash lock duration expressed in blocks. [480]
    -L, --amount <amount>                                        - Amounts of mosaics to lock. [10]
    -R, --min-removal-delta <minRemovalDelta>                    - (Optional) Number of signatures needed to remove a cosignatory.  [0]
    -A, --min-approval-delta <minApprovalDelta>                  - (Optional) Number of signatures needed to approve a transaction. [0]
    -a, --action <action>                                        - Modification Action (1: Add, 0: Remove).
    -p, --cosignatory-public-key <cosignatoryPublicKey>          - Cosignatory account public key.
    -m, --multisig-account-public-key <multisigAccountPublicKey> - Multisig account public key.

*Command*

.. viewsource:: resources/examples/bash/multisig/ModifyingAMultisigAccount.sh
    :language: bash
    :start-after: #!/bin/sh

**SecretLockTransaction**

Announces a :doc:`SecretLockTransaction <concepts/cross-chain-swaps>`.

*Options*

.. code-block:: bash

    --profile <profile>                        - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>                     - Maximum fee (absolute amount).
    -m, --mosaic-id <mosaicId>                 - Locked mosaic identifier.
    -a, --amount <amount>                      - Amount of mosaic units to lock.
    -d, --duration <duration>                  - Number of blocks for which a lock should be valid. Duration is allowed to lie up to 30 days. If reached, the mosaics will be returned to the initiator.
    -s, --secret <secret>                      - Proof hashed in hexadecimal format.
    -H, --hash-algorithm <hashAlgorithm>       - Algorithm used to hash the proof (0: Op_Sha3_256, 1: Op_Keccak_256, 2: Op_Hash_160, 3: Op_Hash_256).
    -r, --recipient-address <recipientAddress> - Address that receives the funds once unlocked.

*Command*

.. viewsource:: resources/examples/bash/secretlock/AnnouncingASecretLockTransaction.sh
    :language: bash
    :start-after: #!/bin/sh

**SecretProofTransaction**

Announces a :doc:`SecretProofTransaction <concepts/cross-chain-swaps>`.

*Options*

.. code-block:: bash

    --profile <profile>                        - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>                     - Maximum fee (absolute amount).
    -s, --secret <secret>                      - Proof hashed in hexadecimal.
    -p, --proof <proof>                        - Original random set of bytes in hexadecimal.
    -H, --hash-algorithm <hashAlgorithm>       - Algorithm used to hash the proof (0: Op_Sha3_256, 1: Op_Keccak_256, 2: Op_Hash_160, 3: Op_Hash_256).
    -r, --recipient-address <recipientAddress> - Address that receives the funds once unlocked.

*Command*

.. viewsource:: resources/examples/bash/secretlock/AnnouncingASecretProofTransaction.sh
    :language: bash
    :start-after: #!/bin/sh

**AccountAddressRestrictionTransaction**

:doc:`Allow or block <concepts/account-restriction>` incoming and outgoing transactions for a given a set of addresses.

*Options*

.. code-block:: bash

    --profile <profile>                                - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>                             - Maximum fee (absolute amount).
    -t, --restriction-type <restrictionFlag>           - Restriction flag (allow, block).
    -d, --restriction-direction <restrictionDirection> - Restriction direction (incoming, outgoing).
    -a, --modification-action <modificationAction>     - Modification action. (1: Add, 0: Remove).
    -v, --value <value>                                - Address to allow / block.

*Command*

.. viewsource:: resources/examples/bash/restriction/AnnouncingAccountAddressRestrictionTransaction.sh
    :language: bash
    :start-after: #!/bin/sh

**AccountMosaicRestrictionTransaction**

:doc:`Allow or block <concepts/account-restriction>` incoming transactions containing a given set of mosaics.

*Options*

.. code-block:: bash

    --profile <profile>                                - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>                             - Maximum fee (absolute amount).
    -t, --restriction-type <restrictionFlag>           - Restriction flag (allow, block).
    -a, --modification-action <modificationAction>     - Modification action. (1: Add, 0: Remove).
    -v, --value <value>                                - Mosaic to allow / block.

*Command*

.. viewsource:: resources/examples/bash/restriction/AnnouncingAccountMosaicRestrictionTransaction.sh
    :language: bash
    :start-after: #!/bin/sh

**AccountOperationRestrictionTransaction**

:doc:`Allow or block <concepts/account-restriction>` outgoing transactions by transaction type.

*Options*

.. code-block:: bash

    --profile <profile>                                - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>                             - Maximum fee (absolute amount).
    -t, --restriction-flag <restrictionFlag>           - Restriction flag (allow, block).
    -a, --modification-action <modificationAction>     - Modification action. (1: Add, 0: Remove).
    -v, --value <value>                                - Transaction type formatted as hex.

*Command*

.. viewsource:: resources/examples/bash/restriction/AnnouncingAccountOperationRestrictionTransaction.sh
    :language: bash
    :start-after: #!/bin/sh

**TransferTransaction**

Announces a :ref:`TransferTransaction <transfer-transaction>` to an account exchanging value and/or data. For this transaction provide recipient, message and :doc:`mosaics <concepts/mosaic>`.

You can send ``multiple mosaics`` splitting them with a comma, e.g: @cat.currency::10000000,7cdf3b117a3c40cc::10. The ``mosaic amount`` after :: is in ``absolute value`` so 1 @cat.currency is 1000000 (divisibility 6).

*Options*

.. code-block:: bash

    --profile <profile>         - (Optional) Select between your profiles, by providing a profile name.
    -f, --max-fee <maxFee>      - Maximum fee (absolute amount).
    -r, --recipient <recipient> - Recipient address or @alias.
    -m, --message <message>     - Transaction message.
    -c, --mosaics <mosaics>     - Mosaic to transfer in the format (mosaicId(hex)|@aliasName)::absoluteAmount. Add multiple mosaics with commas.
    -e, --encrypted             - (Optional) Send an encrypted message. If you set this value, you should set the value of 'recipientPublicKey' as well).
    -p, --recipient-public-key <recipientPublicKey> - (Optional) The recipient public key in an encrypted message.
    -d, --persistent-harvesting-delegation - (Optional) Start persistent harvesting delegation.

*Command*

.. viewsource:: resources/examples/bash/transfer/SendingATransferTransaction.sh
    :language: bash
    :start-after: #!/bin/sh

Restriction
===========

**Get account restrictions**

Returns the account restrictions attached to an address.

*Options*

.. code-block:: bash

    --profile <profile>     - (Optional) Select between your profiles, by providing a profile name.
    -a, --address <address> - Account address

*Command*

.. viewsource:: resources/examples/bash/restriction/GettingAccountRestrictions.sh
    :language: bash
    :start-after: #!/bin/sh

**Get mosaic global restrictions**

Returns the :ref:`global restrictions <mosaic-global-restriction-transaction>` assigned to a mosaic.

*Options*

.. code-block:: bash

    --profile <profile>        - (Optional) Select between your profiles, by providing a profile name.
    -m, --mosaic-id <mosaicId> - Mosaic id in hexadecimal format.

*Command*

.. viewsource:: resources/examples/bash/restriction/GettingMosaicGlobalRestrictions.sh
    :language: bash
    :start-after: #!/bin/sh

**Get mosaic address restrictions**

Returns the :ref:`mosaic address restrictions <mosaic-address-restriction-transaction>` assigned to an address.

*Options*

.. code-block:: bash

    --profile <profile>        - (Optional) Select between your profiles, by providing a profile name.
    -m, --mosaic-id <mosaicId> - Mosaic id in hexadecimal format.
    -a, --address <address>    - Account address.

*Command*

.. viewsource:: resources/examples/bash/restriction/GettingMosaicAddressRestrictions.sh
    :language: bash
    :start-after: #!/bin/sh

.. |nem2-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-cli" target="_blank">NEM2-CLI</a>
