:orphan:

################
Receipts Schemas
################

.. note:: The `catbuffer schemas <https://github.com/nemtech/catbuffer>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/nemtech/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages. 

********
Receipts
********

.. _receipt-type:

ReceiptType
===========

Enumeration: uint16

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x0000; Reserved.

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
    senderAddress; :schema:`Address <types.cats>`; Address of the sender.
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
    targetAddress; :schema:`Address <types.cats>`; Address of the target account.

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

.. _inflation-receipt:

InflationReceipt
================

Network currency mosaics were created due to :doc:`inflation <../concepts/inflation>`.

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