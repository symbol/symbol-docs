:orphan:

################
Metadata Schemas
################

.. note:: The `catbuffer schemas <https://github.com/nemtech/catbuffer>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/nemtech/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages. 

****************
Account Metadata
****************

.. _account-metadata-transaction:

AccountMetadataTransaction
==========================

Announce an AccountMetadataTransaction to associate a key-value state to an account.

**Version**: 0x01

**EntityType**: 0x4144

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    targetAddress; :schema:`UnresolvedAddress <types.cats>`; Metadata target address.
    scopedMetadataKey; uint64; Metadata key scoped to source, target and type.
    valueSizeDelta; int16; Change in value size in bytes.
    valueSize; uint16; Value size in bytes.
    value; array(byte, valueSize); Difference between the previous value and new value. You can calculate value as ``xor(previous-value, new-value)``. If there is no previous value, use directly the new value.

***************
Mosaic Metadata
***************

.. _mosaic-metadata-transaction:

MosaicMetadataTransaction
=========================

Announce a MosaicMetadataTransaction to associate a key-value state to a mosaic.

**Version**: 0x01

**EntityType**:  0x4244

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    targetAddress; :schema:`UnresolvedAddress <types.cats>`; Metadata target address.
    scopedMetadataKey; uint64; Metadata key scoped to source, target and type.
    targetMosaicId; :schema:`UnresolvedMosaicId <L6>`; Target mosaic identifier.
    valueSizeDelta; int16; Change in value size in bytes.
    valueSize; uint16; New value size in bytes.
    value; array(byte, valueSize); Difference between the previous value and new value. You can calculate value as ``xor(previous-value, new-value)``. If there is no previous value, use directly the new value.

******************
Namespace Metadata
******************

.. _namespace-metadata-transaction:

NamespaceMetadataTransaction
============================

Announce a NamespaceMetadataTransaction to associate a key-value state to a namespace.

**Version**: 0x01

**EntityType**:  0x4344

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    targetAddress; :schema:`UnresolvedAddress <types.cats>`; Metadata target address.
    scopedMetadataKey; uint64; Metadata key scoped to source, target and type.
    targetNamespaceId; :schema:`NamespaceId <namespace/namespace_types.cats#L1>`; Target namespace identifier.
    valueSizeDelta; int16; Change in value size in bytes.
    valueSize; uint16; New value size in bytes.
    value; array(byte, valueSize); Difference between the previous value and new value. You can calculate value as ``xor(previous-value, new-value)``. If there is no previous value, use directly the new value.
