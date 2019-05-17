#####################
Aggregate Transaction
#####################

.. _aggregate-transaction:

Aggregated Transactions merge multiple transactions into one, allowing **trustless swaps**, and other advanced logic. NEM does this by generating a one-time disposable smart contract. When all involved :doc:`accounts<../concepts/account>` have cosigned the aggregate transaction, all the inner transactions are executed at the same time.

.. _aggregate-complete:

******************
Aggregate complete
******************

An aggregate transaction is  **complete** when all the required participants have signed it.

The cosigners can sign the transaction without using the blockchain. Once it has all the required signatures, one of them can announce it to the network. If the inner transaction setup is valid, and there is no validation error, the transactions will get executed at the same time.

Aggregate complete transactions enable adding more transactions per block by gathering multiple inner transactions.

Sending payouts
===============

Dan announces an aggregate transaction that merges two transfer transactions.

As he is the only required signatory, the transaction is considered complete after he signed. After announcing it to the network, Alice and Bob will receive the mosaics at the same time.

.. figure:: ../resources/images/examples/aggregate-sending-payouts.png
    :align: center
    :width: 450px

    Sending payouts with aggregate complete transactions

.. _aggregate-bonded:

****************
Aggregate bonded
****************

An aggregate transaction is **bonded** when it requires signatures from other participants.

.. note:: Before announcing an **aggregate bonded transaction**, an account must announce and get confirmed a :ref:`hash lock transaction<hash-lock-transaction>` locking ``10 cat.currency``.

Once an aggregate bonded is announced, it reaches partial state and notifies its status through WebSockets or HTTP API calls.

Every time a cosignatory signs the transaction and :ref:`announces an aggregate bonded cosignature <cosignature>`, the network checks if all the required cosigners have signed. When all signatures are acquired, the transaction changes to unconfirmed state until the network includes it in a block.

.. figure:: ../resources/images/diagrams/aggregate-bonded-transaction-cycle.png
    :width: 900px
    :align: center

    Aggregate bonded transaction cycle

Multi-Asset Escrowed Transactions
=================================

In this example, Alice is buying tickets with ``currency.euro`` :doc:`mosaic <mosaic>`. When the ticket distributor cosigns the aggregate transaction, the swap will happen atomically.

.. figure:: ../resources/images/examples/aggregate-escrow-1.png
    :align: center
    :width: 450px

    Multi-Asset Escrowed Transactions

Paying for others fees
======================

Alice sends 10 ``currency.euro`` to Bob using an app to make payments. But she doesn’t have any cat.currency to pay the blockchain transaction fee.

By creating an aggregate bonded transaction, she can convert EUR to cat.currency to pay the fee. Now Alice and Bob can use NEM blockchain without ever having to buy or hold cat.currency.

Since the app creator can put their own branding on the open source payment app, Alice and Bob may not even know they are using blockchain.

.. figure:: ../resources/images/examples/aggregate-paying-for-others-fees.png
    :align: center
    :width: 450px

    Paying for others fees

******
Guides
******

.. postlist::
    :category: Aggregate Transaction
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

*******
Schemas
*******

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_ . Public network configuration may differ.

AggregateTransaction
====================

Announce an aggregate transaction to combine multiple transactions together.

**Version**: 0x02

**Entity type**: 0x4141 (:ref:`complete<aggregate-complete>`), 0x4241 (:ref:`bonded<aggregate-bonded>`)

**Inlines**:

:ref:`Transaction <transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    payloadSize; uint32; The transaction payload size in bytes. In other words, the total number of bytes occupied by all inner transactions.
    transactions; array<byte, payloadSize>;  The array of transactions, which can be initiated by different accounts. An aggregate transaction can contain up to ``1000`` inner transactions involving up to ``15`` different cosignatories. Other aggregate transactions are not allowed as inner transactions.
    cosignatures; array<byte, size - payloadSize>; An array of transaction :ref:`cosignatures <cosignature>`.

.. _cosignature-transaction:

DetachedCosignature
===================

Cosignature transactions are used to sign :ref:`announced aggregate bonded transactions <aggregate-transaction>` with missing cosignatures.

**Inlines**:

* :ref:`Cosignature <cosignature-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    parentHash; 32 bytes (binary);  The aggregate bonded transaction hash to cosign.

.. _cosignature:

Cosignature
===========

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    signer;  32 bytes (binary); The cosigner public key.
    signature; 64 bytes (binary); The transaction signature.


.. _hash-lock-transaction:

HashLockTransaction
===================

**Alias**: LockFundsTransaction

Lock funds with a hash lock transaction before sending an :ref:`aggregate bonded transaction<aggregate-transaction>`. This transaction prevents spamming the partial cache with transactions that never will complete.

After enough funds are locked, the aggregate transaction can be announced and added into the partial transactions cache.

.. note:: It's not necessary to sign the aggregate and its hash lock transaction with the same account. For example, if Bob wants to announce an aggregate and does not have enough funds to announce a hash lock transaction, he can ask Alice to send the hash lock funds transaction sharing the signed aggregate transaction hash.

Upon completion of the aggregate, the locked funds become available in the account that signed the initial hash lock transaction.

If the aggregate bonded transaction duration is reached without being signed by all cosignatories, the locked amount becomes a reward collected by the block harvester at the height where the lock expires.

**Version**: 0x01

**Entity type**: 0x4148

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaic; :ref:`Mosaic<mosaic>`; Locked mosaic, must be at least ``10 cat.currency``.
    duration; uint64; The lock duration. Duration is allowed to lie up to ``2`` days.
    hash; 32 bytes (binary); The aggregate bonded transaction hash that has to be confirmed before unlocking the mosaics.
