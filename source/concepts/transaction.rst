###########
Transaction
###########

A transaction generally represents a unit of work within a database system. In the case of blockchain, that is when an action signed by an :doc:`account <account>` changes its state.

Transactions accepted by the network are stored permanently on :doc:`blocks <block>`.

*****************
Transaction types
*****************

.. _transaction-types:

There are different types of transactions. For example, you can transfer :doc:`mosaics <mosaic>` between accounts, transfer or configure the ownership of accounts (including the use of :doc:`multisig <multisig-account>` rules), and more.

.. csv-table::
    :header:  "Id",  "Type", "Description"
    :delim: ;

    **Mosaic**;;
    0x414D; :ref:`Mosaic Definition Transaction <mosaic-definition-transaction>`; Register a new :doc:`mosaic <mosaic>`.
    0x424D; :ref:`Mosaic Supply Change Transaction <mosaic-supply-change-transaction>`; Change an existent mosaic supply.
    **Namespace**;;
    0x414E; :ref:`Register Namespace Transaction <register-namespace-transaction>`; Register a :doc:`namespace <mosaic>` to organize your assets.
    0x424E; :ref:`Address Alias Transaction <address-alias-transaction>`; Attach a namespace name to an account.
    0x434E; :ref:`Mosaic Alias Transaction <mosaic-alias-transaction>`; Attach a namespace name to a mosaic.
    **Transfer**;;
    0x4154; :ref:`Transfer Transaction <transfer-transaction>`; Send mosaics and messages between two accounts.
    **Multisignature**;;
    0x4155; :ref:`Modify Multisig Account Transaction <modify-multisig-account-transaction>`; Create or modify a :doc:`multisig contract <multisig-account>`.
    0x4141; :ref:`Aggregate Complete Transaction <aggregate-transaction>`; Send transactions in batches to different accounts.
    0x4241; :ref:`Aggregate Bonded Transaction <aggregate-transaction>`; Propose many transactions between different accounts.
    0x4148; :ref:`Hash Lock Transaction <hash-lock-transaction>`;  A deposit before announcing aggregate bonded transactions.
    --; :ref:`Cosignature Transaction <cosignature-transaction>`; Cosign an aggregate bonded transaction.
    **Account filters**;;
    0x4150; :ref:`Account Properties Address Transaction <account-properties-address-transaction>`; Allow or block incoming transactions for a given a set of addresses.
    0x4250; :ref:`Account Properties Mosaic Transaction <account-properties-mosaic-transaction>`; Allow or block incoming transactions containing a given set of mosaics.
    0x4350; :ref:`Account Properties Entity Type Transaction <account-properties-entity-type-transaction>`; Allow or block outgoing transactions by transaction type.
    **Cross-chain swaps**;;
    0x4152; :ref:`Secret Lock Transaction <secret-lock-transaction>`; Start a :doc:`token swap <cross-chain-swaps>` between different chains.
    0x4252; :ref:`Secret Proof Transaction <secret-proof-transaction>`; Conclude a token swap between different chains.
    **Remote harvesting**;;
    0x414C; :ref:`Account Link Transaction <account-link-transaction>`; Delegates the account importance to a proxy account to enable :doc:`delegated harvesting <harvesting>`.

**********************
Defining a transaction
**********************

Every transaction shares some common properties. Each transaction extends from the :ref:`transaction schema definition <transaction>`, adding the type's particular properties.

Transactions are defined in a :ref:`serialized form <serialization>`. We recommend `using the NEM2-SDK to define <https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SendingATransferTransaction.ts#L30>`_ transactions.

.. _fees:

Fees
====

Transactions have an associated cost. This cost is necessary to provide an incentive for the :doc:`harvesters <harvesting>` who secure the network and run the infrastructure.

The fee associated with a transaction primarily depends on the transaction’s size. The effective fee is the product of the size of the transaction, and a fee multiplier set by the harvester. The node owner can configure the latter value to all positive values, including zero.

    effective_fee = transaction::size * block::fee_multiplier

A sender of a transaction must specify during the transaction definition a ``max_fee``, meaning the maximum fee the account allows to spend for this transaction.

If the ``effective_fee`` is smaller or equal to the ``max_fee``, the harvester can opt to include the transaction in the block. The ``fee_multiplier`` is stored in the :ref:`block header <block-header>`, permitting to resolve which was the effective fee paid for every transaction included.

The harvesting nodes can decide their transaction inclusion strategy:

* **Prefer-oldest**: Preferred for networks with high transaction throughput requirements. Include first the oldest transactions.
* **Minimize-fees**: Philanthropic nodes. Include first transactions that other nodes do not want to include.
* **Maximize-fees**: Most common in public networks. Include first transactions with higher fees.

By default, the fee is paid in ``cat.currency``, the underlying currency of the NEM network. Private chains can edit the configuration of the network to eliminate fees, or use another :doc:`mosaic <mosaic>` that better suits their needs.

.. _transaction-signature:

*********************
Signing a transaction
*********************

Accounts must sign transactions before announcing them to the network. `Signing a transaction <https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SendingATransferTransaction.ts#L40>`_ expresses the account's agreement to change the network state as defined.

For example, a transfer transaction describes who is the recipient and the quantity of mosaics to transfer. In this case, signing the transaction means to accept moving those mosaics from one account’s balance to another.

The account generates the signature `signing the first 100 bytes of the defined transaction <https://github.com/nemtech/nem2-library-js/blob/f171afb516a282f698081aea407339cfcd21cd63/src/transactions/VerifiableTransaction.js#L64>`_ with its private key. Then, the signature is appended to the transaction's body, resulting in a signed transaction.

The hash of the transaction is generated once `the sha3-256 algorithm <https://github.com/nemtech/nem2-library-js/blob/f171afb516a282f698081aea407339cfcd21cd63/src/transactions/VerifiableTransaction.js#L76>`_ is applied to the serialized transaction.

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

    max_fee; uint64; The maximum fee allowed to spend for the transaction.
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
