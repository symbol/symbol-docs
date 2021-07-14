################
Transfer Schemas
################

.. note:: The `catbuffer schemas <https://github.com/symbol/catbuffer-schemas>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/symbol/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages. 

********
Transfer
********

.. _transfer-transaction:

TransferTransaction
===================

Announce a TransferTransaction to send :doc:`mosaics <mosaic>` or messages between two :doc:`accounts <../concepts/account>`.

**Version**: 0x01

**EntityType**: 0x4154

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    recipientAddress; :schema:`UnresolvedAddress <types.cats>`; Transaction recipient.
    messageSize; uint16; Size of the attached message.
    mosaicsCount; uint8; Number of attached mosaics.
    transferTransactionBody_Reserved1; uint32; Reserved padding to align mosaics on 8-byte boundary.
    transferTransactionBody_Reserved2; uint8; Reserved padding to align mosaics on 8-byte boundary.
    mosaics; array(:ref:`UnresolvedMosaic <unresolved-mosaic>`, mosaicsCount); Attached mosaics to send.
    message; array(byte, messageSize); :ref:`Message type <message-type>` and hexadecimal payload.

.. _persistent-delegation-request-transaction:

PersistentDelegationRequestTransaction
======================================

This is actually a :ref:`TransferTransaction <transfer-transaction>` with a :ref:`Message type <message-type>` equal to ``0xFE``.

.. _message-type:

MessageType
===========

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x00; Plain message.
    0x01; Encrypted message.
    0xFE; Persistent harvesting delegation.
