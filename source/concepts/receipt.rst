#######
Receipt
#######

Conditional state changes in the background enable complex transactions.

For example, a :ref:`hash lock <hash-lock-transaction>` concludes as soon as the :doc:`aggregate bonded transaction <aggregate-transaction>` is confirmed. When the locked funds are automatically returned to the account, there is no additional :doc:`transaction <transaction>` recorded. This might appear as a *hidden change* that increases the :doc:`account <account>` balance. Receipts provide proof for every hidden change.

The collection of receipts are hashed into a |merkle| and linked to a :doc:`block <block>`. The block header stores the root hash, which is different from zero when the block has receipts.

*********************
Transaction statement
*********************

A :ref:`transaction statement <transaction-statement>` is a collection of receipts linked with a transaction in a particular block. Statements can include receipts with the following basic types:

* **Balance Transfer**: A mosaic transfer was triggered.
* **Balance Change**: A mosaic credit or debit was triggered.
* **Artifact Expiry**: An artifact (e.g. :doc:`namespace <mosaic>`, :doc:`mosaic <mosaic>`) expired.

****************
Alias resolution
****************

When a transaction includes an :doc:`alias <namespace>`, a so called :ref:`resolution statement <resolution-statement>` reflects the resolved value for that block:

* **Address Resolution**: An account alias was used in the block.
* **Mosaic Resolution**: A mosaic alias was used in the block.

The alias receipts record the first occurrence of an (unresolved, resolved) alias pair used in a block.

*****************
Recorded receipts
*****************

Catapult records invisible state changes for the following entities.

.. csv-table::
    :header:  "Id", "Receipt", "Type", "Description"
    :delim: ;

    **Core**;;;
    0x4321; Harvest_Fee; :ref:`BalanceCredit <balance-change-receipt>`; The recipient, account and amount of fees received for harvesting a block. It is recorded when a block is :doc:`harvested <harvesting>`.
    0x43F1; Address_Alias_Resolution; :ref:`Alias Resolution <resolution-statement>`; The unresolved and resolved :doc:`alias <namespace>`. It is recorded when a transaction indicates a valid address alias instead of an address.
    0x43F2; Mosaic_Alias_Resolution; :ref:`Alias Resolution <resolution-statement>`; The unresolved and resolved alias. It is recorded when a transaction indicates a valid mosaic alias instead of a mosaicId.
    0x43E1; Transaction_Group;  :ref:`Aggregate <transaction-statement>`; A collection of state changes for a given source. It is recorded when a state change receipt is issued.
    **Mosaic**;;;
    0x4D41; Mosaic_Expired; :ref:`ArtifactExpiry <artifact-expiry-receipt>`; The mosaicId expiring in this block. It is recorded when a :doc:`mosaic <mosaic>` expires.
    0x4D12; Mosaic_Levy; :ref:`BalanceTransfer <balance-transfer-receipt>`; The sender and recipient of the levied mosaic, the mosaicId and amount. It is recorded when a transaction has a levied mosaic.
    0x4D13; Mosaic_Rental_Fee; :ref:`BalanceTransfer <balance-transfer-receipt>`; The sender and recipient of the mosaicId and amount representing the cost of registering the mosaic. It is recorded when a mosaic is registered.
    **Namespace**;;;
    0x4E41; Namespace_Expired; :ref:`ArtifactExpiry <artifact-expiry-receipt>`; The namespaceId expiring in this block. It is recorded when a :doc:`namespace <namespace>` expires.
    0x4E12; Namespace_Rental_Fee; :ref:`BalanceTransfer <balance-transfer-receipt>`; The sender and recipient of the mosaicId and amount representing the cost of extending the namespace. It is recorded when a namespace is registered or its duration is extended.
    **HashLock**;;;
    0x4831; LockHash_Created; :ref:`BalanceDebit <balance-transfer-receipt>`; The lockhash  sender, mosaicId and amount locked. It is recorded when a valid :ref:`HashLockTransaction <hash-lock-transaction>` is announced.
    0x4822; LockHash_Completed; :ref:`BalanceCredit <balance-change-receipt>`; The haslock sender, mosaicId and amount locked that is returned. It is recorded when an aggregate bonded transaction linked to the hash completes.
    0x4823; LockHash_Expired; :ref:`BalanceCredit <balance-change-receipt>`; The account receiving the locked mosaic, the mosaicId and the amount. It is recorded when a lock hash expires.
    **SecretLock**;;;
    0x5231; LockSecret_Created; :ref:`BalanceDebit <balance-change-receipt>`; The secretlock sender, mosaicId and amount locked. It is recorded when a valid :ref:`SecretLockTransaction <secret-lock-transaction>` is announced.
    0x5222; LockSecret_Completed; :ref:`BalanceCredit <balance-change-receipt>`; The secretlock sender, mosaicId and amount locked. It is recorded when a secretlock is proved.
    0x5223; LockSecret_Expired; :ref:`BalanceCredit <balance-change-receipt>`; The account receiving the locked mosaic, the mosaicId and the amount. It is recorded when a secretlock expires.

*******
Schemas
*******

.. _receipt:

Receipt
=======

**Inlines**:

* :ref:`SizePrefixedEntity <size-prefixed-entity>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    version; uint16; The receipt version.
    type; ReceiptType; The receipt type.

.. _transaction-statement:

TransactionStatement
====================

* **version**: 0x1
* **type**: Transaction_Group

**Inlines**:

* :ref:`Receipt <receipt>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    m_source; ReceiptSource; The receipt source.
    receipts; array(ReceiptHeader, receiptsHeadersSize);  The array of receipt headers.

.. _resolution-statement:

ResolutionStatement
===================

* **version**: 0x1
* **type**: Address_Alias_Resolution or Mosaic_Alias_Resolution

**Inlines**:

* :ref:`Receipt <receipt>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    unresolved; 25 bytes (binary) or uint64; An unresolved address or unresolved mosaicId.
    m_entries; array(:ref:`ResolutionEntry <resolution-entry>`, resolvedEntriesSize); The array of resolution entries.

.. _resolution-entry:

ResolutionEntry
===============

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    resolvedValue; 25 bytes (binary) or uint64; A resolved address or resolved mosaicId.
    source; :ref:`ReceiptSource <receipt-source>`;  The receipt source.

.. _receipt-source:

ReceiptSource
=============

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    primaryId; uint32;  The transaction primary source (e.g. index within block).
    secondaryId; uint32; The transaction secondary source (e.g. index within aggregate).

.. _balance-transfer-receipt:

BalanceTransferReceipt
======================

* **version**: 0x1
* **basicType**: 0x1

**Inlines**:

* :ref:`Receipt <receipt>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    sender; 32 bytes (binary); The public key of the sender.
    recipient; 32 bytes (binary); The public key of the recipient.
    mosaicId; uint64; The mosaic id.
    amount; uint64; The amount of mosaics.

.. _balance-change-receipt:

BalanceChangeReceipt
====================

* **version**: 0x1
* **basicType**: (0x2) credit or (0x3) debit

**Inlines**:

* :ref:`Receipt <receipt>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    account; 32 bytes (binary); The target account public key.
    mosaicId; uint64; The mosaic id.
    amount; uint64; The amount of the mosaic.

.. _artifact-expiry-receipt:

ArtifactExpiryReceipt
=====================

* **version**: 0x1
* **basicType**: 0x4

**Inlines**:

* :ref:`Receipt <receipt>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    artifactId; uint64; The id of the artifact (eg. namespace, mosaic).


.. |merkle| raw:: html

    <a href="https://en.wikipedia.org/wiki/Merkle_tree" target="_blank">merkle tree</a>
