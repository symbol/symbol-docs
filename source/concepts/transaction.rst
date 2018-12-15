###########
Transaction
###########

Transactions are actions taken on the blockchain that change its state. When an :doc:`account <account>` signs a transaction, and the network accepts it, this is stored permanently on a :doc:`block <block>`.

.. _transaction-types:

There are different types of transactions. For example, you can transfer :doc:`mosaics <mosaic>` between accounts, transfer or configure ownership of accounts (including the use of :doc:`multisig <multisig-account>` rules), and more.

.. csv-table::
    :header:  "Id",  "Type", "Description"
    :delim: ;

    0x4154; :ref:`Transfer Transaction <transfer-transaction>`; Send mosaics and messages between two accounts.
    0x414D; :ref:`Mosaic Definition Transaction <mosaic-definition-transaction>`; Register a new mosaic.
    0x424D; :ref:`Mosaic Supply Change Transaction <mosaic-supply-change-transaction>`; Change an existent mosaic supply.
    0x414E; :ref:`Register Namespace Transaction <register-namespace-transaction>`; Register a namespace to organize your assets.
    0x4155; :ref:`Modify Multisig Account Transaction <modify-multisig-account-transaction>`; Create or modify a multisig contract.
    0x4141; :ref:`Aggregate Complete Transaction <aggregate-transaction>`; Send transactions in batches to different accounts.
    0x4241; :ref:`Aggregate Bonded Transaction <aggregate-transaction>`; Propose many transactions between different accounts.
    0x414C; :ref:`Lock Funds Transaction <lock-funds-transaction>`; Deposit to announce aggregate bonded transactions. Prevents the network spamming.
    --; :ref:`Cosignature Transaction <cosignature-transaction>`; Cosign an aggregate bonded transaction.
    0x4152; :ref:`Secret Lock Transaction <secret-lock-transaction>`; Start a mosaic swap between different chains.
    0x434C; :ref:`Secret Proof Transaction <secret-proof-transaction>`; Conclude a mosaic swap between different chains.

**********************
Defining a transaction
**********************

Every transaction shares some common properties. Each transaction extends from the following definition, adding the type's particular properties.

Transactions are defined in a :doc:`serialized form <../api/serialization>`. We recommend to `use the NEM2-SDK to define <https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SendingATransferTransaction.ts#L30>`_ transactions.

Properties
==========

    **Size**: 4 bytes

    The size of the transaction.

    **Signature**: 64 bytes

    The :ref:`transaction signature <transaction-signature>`.

    **Signer**: 32 bytes

    The transaction signer's :doc:`public key <account>`.

    **Version**: 2 bytes

    The version of the structure.

    **Type**: 2 bytes

    See :ref:`transaction types <transaction-types>`.

    **Fee**: 8 bytes

    The cost of announcing a transaction.  This fee is necessary to provide an incentive for those who secure the network. The account pays the fee  in XEM, the underlying cryptocurrency of the NEM network. Private chains can edit the network configuration to suppress the fees.

    **Deadline**: 8 bytes

    The maximum amount of time to include the transaction in the blockchain.

.. _transaction-signature:

*********************
Signing a transaction
*********************

Accounts must sign transactions before announcing them to the network. `Signing a transaction <https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SendingATransferTransaction.ts#L40>`_ expresses the account's agreement to change the network state as defined.

For example, a transfer transaction describes who is the recipient and the quantity of mosaics to transfer. In this case, signing the transaction means to accept moving those mosaics from one account to the other.

The account generates the signature `signing the first 100 bytes of the defined transaction <https://github.com/nemtech/nem2-library-js/blob/f171afb516a282f698081aea407339cfcd21cd63/src/transactions/VerifiableTransaction.js#L64>`_ with its private key. Then, the signature is appended to the transaction's body, resulting in a signed transaction.

The hash of the transaction is generated once `the Sha3-256 algorithm <https://github.com/nemtech/nem2-library-js/blob/f171afb516a282f698081aea407339cfcd21cd63/src/transactions/VerifiableTransaction.js#L76>`_ is applied to the serialized transaction.

.. _transaction-validation:

************************
Announcing a transaction
************************

Signed transactions are ready to be announced to the network.

.. figure:: ../resources/images/diagrams/transaction-cycle.png
    :width: 800px
    :align: center

    Transaction cycle

After `announcing a transaction <https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SendingATransferTransaction.ts#L47>`_, the REST API will always return an OK response immediately. At this point, it still unknown whether the transaction is valid.

The first validation happens in the API nodes. If the transaction presents some error, the WebSocket throws a notification through the status channel. In the positive case, the transaction reaches the P2P network with an **unconfirmed** status.  Never rely on a transaction which has an unconfirmed state. It is not clear if it will get included in a block, as it should pass a second validation before.

The second validation is done before the transaction is added in a harvested block. If valid, the harvester stores the transaction in a block, and it reaches the **confirmed** status.

Continuing the previous example, the transaction gets processed and the amount stated gets transferred from the signer's account to the recipient's account. Additionally, the transaction fee is deducted from the signer's account.

The transaction has **zero confirmations** at this point. When another block is added to the blockchain, the transaction has one confirmation. The next block added to the chain will give it two confirmations and so on.

*********
Rollbacks
*********

Cryptocurrencies can roll back part of the blockchain. Rollbacks are essential for resolving forks of the blockchain.

The "rewrite limit" is the maximum number of blocks that can be rolled back. Hence, forks can only be resolved up to a certain depth too.

NEM has a rewrite limit of 360 blocks. Once a transaction has more than 360 confirmations, it cannot be reversed.

In real life, forks that are deeper than 20 blocks do not happen, unless there is a severe problem with the blockchain due to a bug in the code or an attack.

**************
Related guides
**************

.. postlist::
    :category: monitoring
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:
