############################
Resolution Statement Schemas
############################

.. note:: The `catbuffer schemas <https://github.com/symbol/catbuffer-schemas>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/symbol/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages. 

**************************
Resolution Statement Types
**************************

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

.. _resolution-entry:

ResolutionEntry
===============

A single resolution statement can have multiple resolution entries.

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    resolvedValue; :schema:`Address <types.cats>` or :schema:`MosaicId <types.cats>`; Resolved address or resolved mosaic identifier.
    source; :ref:`ReceiptSource <receipt-source>`; Information about the transaction that triggered the receipt.

*********************
Resolution Statements
*********************

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
