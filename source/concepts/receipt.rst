#######
Receipt
#######

Conditional state changes in the background enable complex transactions.
For example, a :ref:`hash lock <hash-lock-transaction>` concludes as soon as the :doc:`AggregateBondedTransaction <aggregate-transaction>` is confirmed.
When the locked funds are automatically returned to the account, there is no additional :doc:`transaction <transaction>` recorded.
This might appear as a *hidden change* that increases the :doc:`account <account>` balance.

Receipts provide proof for every hidden change.
The collection of receipts are hashed into a |merkle| and linked to a :doc:`block <block>`.
The block header stores the root hash, which is different from zero when the block has receipts.

*********************
Transaction statement
*********************

A :ref:`transaction statement <transaction-statement>` is a collection of receipts linked to a transaction in a particular block.
Statements can include receipts with the following basic types:

* **Balance Transfer**: The invisible state change triggered a mosaic transfer.
* **Balance Change**: The invisible state change altered an account balance.
* **Mosaic Expiry**: A mosaic expired.
* **Namespace Expiry**: A namespace expired.
* **Inflation**: Network currency mosaics were created due to :doc:`inflation <inflation>`.

********************
Resolution statement
********************

When a transaction includes an :doc:`alias <namespace>`, a so called :ref:`resolution statement <resolution-statement>` reflects the resolved value for that block:

* **Address Resolution**: An account alias was used in the block.
* **Mosaic Resolution**: A mosaic alias was used in the block.

The alias receipts record the first occurrence of an (unresolved, resolved) alias pair used in a block.

It is technically possible to get more than one resolution for the same namespace id and block.
This situation is common when a namespace creator changes the alias link to another asset, leading to two different resolutions in the same block.

The receipt source ``primaryId`` references the transaction where the alias first appears within the block.
The ``secondaryId`` is not 0 when the transaction is part of an :doc:`AggregateTransaction <../../concepts/aggregate-transaction>`, and it will indicate the index position within the aggregate.

*****************
Recorded receipts
*****************

|codename| records invisible state changes for the following entities.

.. csv-table::
    :header:  "Id", "Receipt", "Basic type", "Description"
    :delim: ;
    :widths: 15 30 25 30

    **Core**;;;
    0x2143; Harvest_Fee; :ref:`BalanceCredit <balance-change-receipt>`; The recipient, account and amount of fees received for harvesting a block. It is recorded when a block is :doc:`harvested <harvesting>`.
    0x5143; Inflation; :ref:`Inflation <inflation-receipt>`; The amount of native currency mosaics created. The receipt is recorded when the network has inflation configured, and a new block triggers the creation of currency mosaics.
    0xE143; Transaction_Group;  :ref:`Aggregate <transaction-statement>`; A collection of state changes for a given source. It is recorded when a state change receipt is issued.
    0xF143; Address_Alias_Resolution; :ref:`Alias Resolution <resolution-statement>`; The unresolved and resolved :doc:`alias <namespace>`. It is recorded when a transaction indicates a valid address alias instead of an address.
    0xF243; Mosaic_Alias_Resolution; :ref:`Alias Resolution <resolution-statement>`; The unresolved and resolved alias. It is recorded when a transaction indicates a valid mosaic alias instead of a mosaic id.
    **Mosaic**;;;
    0x414D; Mosaic_Expired; :ref:`MosaicExpiry <mosaic-expiry-receipt>`; The identifier of the mosaic expiring in this block. It is recorded when a :doc:`mosaic <mosaic>` lifetime elapses.
    0x124D; Mosaic_Rental_Fee; :ref:`BalanceTransfer <balance-transfer-receipt>`; The sender and recipient of the mosaic id and amount representing the cost of registering the mosaic. It is recorded when a mosaic is registered.
    **Namespace**;;;
    0x414E; Namespace_Expired; :ref:`NamespaceExpiry <namespace-expiry-receipt>`; The identifier of the namespace expiring in this block. It is recorded when the :doc:`namespace <namespace>` lifetime elapses.
    0x424E; Namespace_Deleted; :ref:`NamespaceExpiry <namespace-expiry-receipt>`; The identifier of the namespace deleted in this block. It is recorded when the :doc:`namespace <namespace>` grace period elapses.
    0x134E; Namespace_Rental_Fee; :ref:`BalanceTransfer <balance-transfer-receipt>`; The sender and recipient of the mosaic id and amount representing the cost of extending the namespace. It is recorded when a namespace is registered or its duration is extended.
    **HashLock**;;;
    0x3148; LockHash_Created; :ref:`BalanceDebit <balance-change-receipt>`; The lockhash sender, mosaic id and amount locked. It is recorded when a valid :ref:`HashLockTransaction <hash-lock-transaction>` is announced.
    0x2248; LockHash_Completed; :ref:`BalanceCredit <balance-change-receipt>`; The hashlock sender, mosaic id and amount locked that is returned. It is recorded when an AggregateBondedTransaction linked to the hash completes.
    0x2348; LockHash_Expired; :ref:`BalanceCredit <balance-change-receipt>`; The account receiving the locked mosaic, the mosaic id and the amount. It is recorded when a lock hash expires.
    **SecretLock**;;;
    0x3152; LockSecret_Created; :ref:`BalanceDebit <balance-change-receipt>`; The secretlock sender, mosaic id and amount locked. It is recorded when a valid :ref:`SecretLockTransaction <secret-lock-transaction>` is announced.
    0x2252; LockSecret_Completed; :ref:`BalanceCredit <balance-change-receipt>`; The secretlock recipient, mosaic id and amount locked. It is recorded when a secretlock is proved.
    0x2352; LockSecret_Expired; :ref:`BalanceCredit <balance-change-receipt>`; The account receiving the locked mosaic, the mosaic id and the amount. It is recorded when a secretlock expires.

******
Guides
******

.. postlist::
    :category: Receipt
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

***************
Receipt schemas
***************

.. _receipt:

Receipt
=======

Receipts provide proof for every state change not retrievable from the block.

**Inlines**:

* :ref:`SizePrefixedEntity <size-prefixed-entity>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    version; uint16; Receipt version.
    type; :ref:`ReceiptType <receipt-type>`; Receipt type.

.. _balance-transfer-receipt:

BalanceTransferReceipt
======================

The invisible state change triggered a mosaic transfer.

* **version**: 0x1
* **basicType**: 0x1

**Inlines**:

* :ref:`Receipt <receipt>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaic; :ref:`Mosaic <mosaic>`; Mosaic transferred.
    senderPublicKey; :schema:`Key <types.cats>`; Public key of the sender.
    recipientAddress; :schema:`Address <types.cats>`; Address of the recipient.

.. _balance-change-receipt:

BalanceChangeReceipt
====================

The invisible state change changed an account balance.

* **version**: 0x1
* **basicType**: (0x2) credit or (0x3) debit

**Inlines**:

* :ref:`Receipt <receipt>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaic; :ref:`Mosaic <mosaic>`; Mosaic increased or decreased.
    targetPublicKey; :schema:`Key <types.cats>`; Public key of the target account.

.. _mosaic-expiry-receipt:

MosaicExpiryReceipt
===================

An :doc:`mosaic <mosaic>` expired.

* **version**: 0x1
* **basicType**: 0x4

**Inlines**:

* :ref:`Receipt <receipt>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    artifactId; :schema:`MosaicId <types.cats>`; Mosaic identifier.


.. _namespace-expiry-receipt:

NamespaceExpiryReceipt
======================

A :doc:`namespace <namespace>` expired.

* **version**: 0x1
* **basicType**: 0x4

**Inlines**:

* :ref:`Receipt <receipt>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    artifactId; :schema:`NamespaceId <namespace/namespace_types.cats#L1>`; Namespace identifier.


.. _inflation-receipt:

InflationReceipt
================

Network currency mosaics were created due to :doc:`inflation <inflation>`.

* **version**: 0x1
* **basicType**: 0x5

**Inlines**:

* :ref:`Receipt <receipt>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicId; :schema:`MosaicId <types.cats>`; Identifier of the mosaic that has been created.
    amount; :schema:`Amount <types.cats>`; Number of mosaics created.

.. _transaction-statement:

TransactionStatement
====================

The collection of receipts related to a transaction.

* **version**: 0x1
* **type**: Transaction_Group

**Inlines**:

* :ref:`Receipt <receipt>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    source; :ref:`ReceiptSource <receipt-source>` ; Transaction that triggered the receipt.
    receipts; array(:ref:`Receipt <receipt>`, size=receiptsSize);  Array of receipts.

.. _resolution-statement:

ResolutionStatement
===================

A resolution statement keeps the relation between a namespace alias used in a transaction and the real address or mosaic id.

* **version**: 0x1
* **type**: Address_Alias_Resolution or Mosaic_Alias_Resolution

**Inlines**:

* :ref:`Receipt <receipt>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    unresolved; :schema:`UnresolvedAddress <types.cats>` or :schema:`UnresolvedMosaicId <types.cats>`; Unresolved address or unresolved mosaic identifier.
    resolutionEntries; array(:ref:`ResolutionEntry <resolution-entry>`, size=resolvedEntriesSize); Array of resolution entries linked to the unresolved namespace identifier. It is an array instead of a single UInt64 field since within one block the resolution might change for different sources due to alias related transactions.

.. _resolution-entry:

ResolutionEntry
===============

A single resolution statement can have multiple resolution entries.

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    resolvedValue; :schema:`Address <types.cats>` or :schema:`MosaicId <types.cats>`; Resolved address or resolved mosaic identifier.
    source; :ref:`ReceiptSource <receipt-source>`; Information about the transaction that triggered the receipt.

.. _receipt-source:

ReceiptSource
=============

The transaction that triggered the receipt.

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    primaryId; uint32;  Transaction index within the block.
    secondaryId; uint32; Transaction index inside within the AggregateTransaction. If the transaction is not an inner transaction, then the secondary identifier is set to 0.

.. |merkle| raw:: html

    <a href="https://en.wikipedia.org/wiki/Merkle_tree" target="_blank">merkle tree</a>

.. _receipt-type:

ReceiptType
===========

Enumeration: uint16

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x0000; Reserved.

Continue: :doc:`Data validation <data-validation>`.
