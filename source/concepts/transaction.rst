###########
Transaction
###########

A transaction generally represents a unit of work within a database system. In the case of blockchain, that is when an action signed by an :doc:`account <account>` changes its state.

Transactions accepted by the network are stored permanently on :doc:`blocks <block>`.

*****************
Transaction types
*****************

.. _transaction-types:

There are different types of transactions. For example, you can transfer :doc:`mosaics <mosaic>` between accounts, transfer or configure ownership of accounts (including the use of :doc:`multisig <multisig-account>` rules), and more.

.. csv-table::
    :header:  "Id",  "Type", "Description"
    :delim: ;

    **Mosaic Transactions**;;
    0x414D; :ref:`Mosaic Definition Transaction <mosaic-definition-transaction>`; Register a new mosaic.
    0x424D; :ref:`Mosaic Supply Change Transaction <mosaic-supply-change-transaction>`; Change an existent mosaic supply.
    **Namespace Transactions**;;
    0x414E; :ref:`Register Namespace Transaction <register-namespace-transaction>`; Register a namespace to organize your assets.
    **Transfer**;;
    0x4154; :ref:`Transfer Transaction <transfer-transaction>`; Send mosaics and messages between two accounts.
    **Multisignature Transactions**;;
    0x4155; :ref:`Modify Multisig Account Transaction <modify-multisig-account-transaction>`; Create or modify a multisig contract.
    0x4141; :ref:`Aggregate Complete Transaction <aggregate-transaction>`; Send transactions in batches to different accounts.
    0x4241; :ref:`Aggregate Bonded Transaction <aggregate-transaction>`; Propose many transactions between different accounts.
    0x4148; :ref:`Hash Lock Transaction <hash-lock-transaction>`;  A deposit before announcing aggregate bonded transactions.
    --; :ref:`Cosignature Transaction <cosignature-transaction>`; Cosign an aggregate bonded transaction.
    **Account Filters**;;
    0x4150; :ref:`Account Properties Address Transaction <account-properties-address-transaction>`; Allow or block incoming transactions for a given a set of addresses.
    0x4250; :ref:`Account Properties Mosaic Transaction <account-properties-mosaic-transaction>`; Allow or block incoming transactions containing a given set of mosaics.
    0x4350; :ref:`Account Properties Entity Type Transaction <account-properties-entity-type-transaction>`; Allow or block outgoing transactions by transaction type.
    **Cross-chain swaps Transactions**;;
    0x4152; :ref:`Secret Lock Transaction <secret-lock-transaction>`; Start a mosaic swap between different chains.
    0x4252; :ref:`Secret Proof Transaction <secret-proof-transaction>`; Conclude a mosaic swap between different chains.

**********************
Defining a transaction
**********************

Every transaction shares some common properties. Each transaction extends from the :ref:`transaction schema definition <transaction>`, adding the type's particular properties.

Transactions are defined in a :doc:`serialized form <../api/serialization>`. We recommend to `use the NEM2-SDK to define <https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SendingATransferTransaction.ts#L30>`_ transactions.

.. _transaction-signature:

*********************
Signing a transaction
*********************

Accounts must sign transactions before announcing them to the network. `Signing a transaction <https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SendingATransferTransaction.ts#L40>`_ expresses the account's agreement to change the network state as defined.

For example, a transfer transaction describes who is the recipient and the quantity of mosaics to transfer. In this case, signing the transaction means to accept moving those mosaics from one account’s balance to another.

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

After `announcing a transaction <https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SendingATransferTransaction.ts#L47>`_, the REST API will always return an OK response immediately. At this point, it is still unknown whether the transaction is valid.

The first stage of validation happens in the API nodes. If the transaction presents some error, the WebSocket throws a notification through the status channel. In the positive case, the transaction reaches the P2P network with an **unconfirmed** status.  Never rely on a transaction which has an unconfirmed state. It is not clear if it will get included in a block, as it should pass a second validation.

The second validation is done before the transaction is added in a harvested block. If valid, the harvester stores the transaction in a block, and it reaches the **confirmed** status.

Continuing the previous example, the transaction gets processed and the amount stated gets transferred from the signer's account to the recipient's account. Additionally, the transaction fee is deducted from the signer's account.

The transaction has **zero confirmations** at this point. When another block is added to the blockchain, the transaction has one confirmation. The next block added to the chain will give it two confirmations and so on.

*********
Rollbacks
*********

Blockchains are designed in a way that under certain circumstances recent blocks need to be rolled back. These are essential to resolve forks of the blockchain.

The "rewrite limit" is the maximum number of blocks that can be rolled back. Hence, forks can only be resolved up to a certain depth too.

NEM has a rewrite limit of ``360`` blocks. Once a transaction has more than 360 confirmations, it cannot be reversed.

From experience, forks that are deeper than 20 blocks do not happen, unless there is a severe problem with the blockchain due to a bug in the code or an attack.

******
Guides
******

.. postlist::
    :category: Monitoring
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

*******
Schemas
*******

.. _transaction:

Transaction
===========

**Inlines**:

* :ref:`SizePrefixedEntity<size-prefixed-entity>`
* :ref:`VerifiableEntity<verifiable-entity>`
* :ref:`EntityBody<entity-body>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    fee; uint64; The cost of announcing a transaction.  This fee is necessary to provide an incentive for those who secure the network. The account pays the fee  in XEM, the underlying cryptocurrency of the NEM network. Private chains can edit the network configuration to suppress the fees.
    deadline; uint64; The maximum amount of time to include the transaction in the blockchain.

.. _embedded-transaction:

EmbeddedTransaction
===================

**Inlines**:

* :ref:`SizePrefixedEntity<size-prefixed-entity>`
* :ref:`EntityBody<entity-body>`

.. _size-prefixed-entity:

SizePrefixedEntity
==================

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    size; unit32; The size of the transaction.