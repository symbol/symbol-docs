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

.. note:: Before sending an **aggregate bonded transaction**, an account must first announce a :ref:`hash lock transaction<hash-lock-transaction>` and get its confirmation with at least ``10`` XEM.

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

Alice sends 10 € to Bob using an app to make payments. But she doesn’t have any XEM to pay the blockchain transaction fee.

By creating an aggregate bonded transaction, she can convert USD to XEM to pay the fee. Now Alice and Bob can use NEM blockchain without ever having to buy or hold XEM.

Since the app creator can put their own branding on the open source payment app, Alice and Bob may not even know they are using blockchain.

.. figure:: ../resources/images/examples/aggregate-paying-for-others-fees.png
    :align: center
    :width: 450px
    
    Paying for others fees

******
Guides
******

.. note:: ⚠ The latest release introduces breaking changes. Until the SDKs are not aligned, we recommend using :doc:`catapult-service-bootstrap 0.1.0 <../getting-started/setup-workstation>` to run the guides.

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

**Version**: 0x02

**Entity type**: 0x4141 (:ref:`complete<aggregate-complete>`), 0x4241 (:ref:`bonded<aggregate-bonded>`)

**Inlines**:

:ref:`Transaction <transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    payloadSize; uint8; The transaction payload size in bytes. In other words, the total number of bytes occupied by all inner transactions.
    transactions; array(byte, payloadSize);  The array of transactions initiated by different accounts. An aggregate transaction can contain up to ``1000`` inner transactions involving up to ``15`` different cosignatories. Other aggregate transactions are not allowed as inner transactions.
    cosignatures; array(byte, size - payloadSize); An array of transaction :ref:`cosignatures <cosignature>`.

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

Announce a hash lock transaction before sending a signed :ref:`aggregate bonded transaction<aggregate-transaction>`. This mechanism is required to prevent network spamming.

Once the related aggregate bonded transaction is confirmed, locked funds become available again in the account that signed the initial hash lock transaction.

If the aggregate bonded transaction duration is reached without being signed by all cosignatories, the locked amount is collected by the block harvester at the height where the lock expires.

**Version**: 0x01

**Entity type**: 0x4148

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaic; :ref:`Mosaic<mosaic>`; Locked mosaic, must be at least ``10 nem:xem``.
    duration; uint64; The lock duration.
    hash; 32 bytes (binary); The aggregate bonded transaction hash that has to be confirmed before unlocking the mosaics.
