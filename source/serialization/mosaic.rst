##############
Mosaic Schemas
##############

.. note:: The `catbuffer schemas <https://github.com/symbol/catbuffer-schemas>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/symbol/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages. 

*****************
Mosaic Definition
*****************

.. _mosaic-definition-transaction:

MosaicDefinitionTransaction
===========================

Announce a MosaicDefinitionTransaction to create a new mosaic.

**Version**: 0x01

**EntityType**: 0x414D

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    id; :schema:`MosaicId <types.cats>`; Identifier of the mosaic.
    duration; :schema:`BlockDuration <types.cats>`; Mosaic duration expressed in blocks. If set to 0, the mosaic is non-expiring.
    nonce; uint32; Random nonce used to generate the mosaic id.
    flags; :ref:`MosaicFlag <mosaic-flags>`; Mosaic flags.
    divisibility; uint8; Mosaic divisibility.

********************
Mosaic Supply Change
********************

.. _mosaic-supply-change-transaction:

MosaicSupplyChangeTransaction
=============================

Announce a supply change transaction to increase or decrease a mosaic's supply.

**Version**: 0x01

**EntityType**: 0x424D

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicId; :schema:`UnresolvedMosaicId <types.cats>`; Affected mosaic identifier.
    delta; :schema:`Amount <types.cats>`; Amount of supply to increase or decrease.
    action; :ref:`MosaicSupplyChangeAction<mosaic-supply-change-action>`; Supply change action.

************
Mosaic Types
************

.. _mosaic:

Mosaic
======

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicId; :schema:`MosaicId <types.cats>`; Mosaic identifier.
    amount; :schema:`Amount <types.cats>`; Mosaic amount.

.. _unresolved-mosaic:

UnresolvedMosaic
================

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicId; :schema:`UnresolvedMosaicId <types.cats>`; Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias) is used instead of the real mosaic identifier.
    amount; :schema:`Amount <types.cats>`; Mosaic amount.

.. _mosaic-flags:

MosaicFlags
===========

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x00; No flags present.
    0x01; Mosaic supports supply changes even when the mosaic creator owns partial supply.
    0x02; Mosaic supports transfers between arbitrary accounts. When not set, the mosaic can only be transferred to/from the mosaic creator.
    0x04; Mosaic creator can add rules to restrict which accounts are enabled to send and receive the mosaic.

.. _mosaic-supply-change-action:

MosaicSupplyChangeAction
========================

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x00; Decrease.
    0x01; Increase.
