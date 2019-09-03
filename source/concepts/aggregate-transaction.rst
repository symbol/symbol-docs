#####################
Aggregate Transaction
#####################

.. _aggregate-transaction:

Aggregate transactions merge multiple transactions into one, allowing **trustless swaps**, and other advanced logic. NEM does this by generating a one-time disposable smart contract.

.. figure:: ../resources/images/examples/aggregate-escrow-1.png
    :align: center
    :width: 450px

    Example of an AggregateTransaction between two participants

When all involved :doc:`accounts <../concepts/account>` have cosigned the AggregateTransaction, all the inner transactions are executed at the same time.

.. _aggregate-complete:

******************
Aggregate complete
******************

An AggregateTransaction is  **complete** when all the required participants have signed it.

The cosigners can sign the transaction without using the blockchain. Once it has all the required signatures, one of them can announce it to the network. If the inner transaction setup is valid, and there is no validation error, the transactions will get executed at the same time.

Aggregate complete transactions enable adding more transactions per block by gathering multiple inner transactions.

.. _aggregate-bonded:

****************
Aggregate bonded
****************

An AggregateTransaction is **bonded** when it requires signatures from other participants.

.. note:: Before announcing an **AggregateBondedTransaction**, an account must announce and get confirmed a :ref:`HashLockTransaction<hash-lock-transaction>` locking ``10 cat.currency``.

Once an aggregate bonded is announced, it reaches partial state and notifies its status through WebSockets or HTTP API calls.

Every time a cosignatory signs the transaction and :ref:`announces an aggregate bonded cosignature <cosignature>`, the network checks if all the required cosigners have signed. When all signatures are acquired, the transaction changes to unconfirmed state until the network includes it in a block.

.. figure:: ../resources/images/diagrams/aggregate-bonded-transaction-cycle.png
    :width: 900px
    :align: center

    AggregateBondedTransaction cycle

********
Examples
********

Sending multiple transactions together
======================================

Dan announces an AggregateTransaction that merges two transfer transactions.

As Dan is the only required signatory, the transaction is considered complete after he signed. After announcing it to the network, Alice and Bob will receive the mosaics at the same time.

.. figure:: ../resources/images/examples/aggregate-sending-payouts.png
    :align: center
    :width: 450px

    Sending payouts with aggregate complete transactions

Multi-asset escrowed transactions
=================================

In this example, Alice is buying tickets with ``currency.euro`` :doc:`mosaic <mosaic>`. When the ticket distributor cosigns the AggregateTransaction, the swap will happen atomically.

.. figure:: ../resources/images/examples/aggregate-escrow-1.png
    :align: center
    :width: 450px

    Multi-Asset Escrowed Transactions

Paying for others fees
======================

Alice sends 10 ``currency.euro`` to Bob using an app to make payments. But Alice doesn't own cat.currency to pay the transaction fee.

By creating an AggregateBondedTransaction, Alice can convert EUR to cat.currency to pay the fee. Now, Alice and Bob can use NEM blockchain without ever having to buy or hold cat.currency.

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

.. note:: Configuration parameters are :properties:`editable <config-network.properties>`. Public network configuration may differ.

AggregateTransaction
====================

Announce an AggregateTransaction to combine multiple transactions together.

**Version**: 0x01

**Entity type**: 0x4141 (:ref:`complete<aggregate-complete>`), 0x4241 (:ref:`bonded<aggregate-bonded>`)

**Inlines**:

:ref:`Transaction <transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    payloadSize; uint32; Transaction payload size in bytes. In other words, the total number of bytes occupied by all inner transactions.
    transactions; array(:ref:`Transaction <transaction>`, size=payloadSize); Array of inner transactions.  An AggregateTransaction can contain up to ``1000`` inner transactions involving up to ``15`` different cosignatories. Other aggregate transactions are not allowed as inner transactions.
    cosignatures; array(:ref:`Cosignature <cosignature>`, __FILL__); Array of transaction :ref:`cosignatures <cosignature>`. Fills the remaining body space after transactions.

.. _cosignature-transaction:

DetachedCosignature
===================

Cosignature transactions are used to sign :ref:`announced AggregateBondedTransactions <aggregate-transaction>` with missing cosignatures.

**Inlines**:

* :ref:`Cosignature <cosignature-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    parentHash; :schema:`Hash256 <types.cats#L9>`;  AggregateBondedTransaction hash to cosign.

.. _cosignature:

Cosignature
===========

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    signerPublicKey; :schema:`Key <types.cats#L11>`; Cosigner public key.
    signature; :schema:`Signature <types.cats#L12>`; Transaction signature.


.. _hash-lock-transaction:

HashLockTransaction
===================

**Alias**: LockFundsTransaction

Lock funds with a HashLockTransaction before sending an :ref:`AggregateBondedTransaction<aggregate-transaction>`. This transaction prevents spamming the partial cache with transactions that never will complete.

After enough funds are locked (``10 cat.currency`` by default), the AggregateTransaction can be announced and added into the partial transactions cache.

.. note:: It's not necessary to sign the aggregate and its HashLockTransaction with the same account. For example, if Bob wants to announce an aggregate and does not have enough funds to announce a HashLockTransaction, he can ask Alice to send the hash lock funds transaction for him sharing the signed AggregateTransaction hash.

Upon completion of the aggregate, the locked funds become available in the account that signed the initial HashLockTransaction. If the AggregateBondedTransaction duration is reached without being signed by all cosignatories, the locked amount becomes a reward collected by the block harvester at the height where the lock expires.

**Version**: 0x01

**Entity type**: 0x4148

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaic; :ref:`UnresolvedMosaic <unresolved-mosaic>`; Locked mosaic`(`10 cat.currency``).
    duration; :schema:`BlockDuration <types.cats#L2>`; Number of blocks for which a lock should be valid. Duration is allowed to lie up to ``2`` days.
    hash; :schema:`Hash256 <types.cats#L9>`; AggregateBondedTransaction hash that has to be confirmed before unlocking the mosaics.
