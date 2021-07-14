##########################
Restriction Mosaic Schemas
##########################

.. note:: The `catbuffer schemas <https://github.com/symbol/catbuffer-schemas>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/symbol/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages. 

**************************
Mosaic Address Restriction
**************************

.. _mosaic-address-restriction-transaction:

MosaicAddressRestrictionTransaction
===================================

Announce a MosaicAddressRestrictionTransaction transaction to set a restriction rule to an address.

**Version**: 0x01

**EntityType**: 0x4251

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicId; :schema:`UnresolvedMosaicId <types.cats>`; Identifier of the mosaic to which the restriction applies. The mosaic creator must be the signer of the transaction.
    restrictionKey; uint64; Restriction key.
    previousRestrictionValue; uint64; Previous restriction value. Set ``previousRestrictionValue`` to ``FFFFFFFFFFFFFFFF`` if the target address does not have a previous restriction value for this mosaic identifier and restriction key.
    newRestrictionValue; uint64; New restriction value.
    targetAddress; :schema:`UnresolvedAddress <types.cats>`; Address being restricted.

*************************
Mosaic Global Restriction
*************************

.. _mosaic-global-restriction-transaction:

MosaicGlobalRestrictionTransaction
==================================

Announce a MosaicGlobalRestrictionTransaction to set a restriction rule to a mosaic.

**Version**: 0x01

**EntityType**: 0x4151

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicId; :schema:`UnresolvedMosaicId <types.cats>`; Identifier of the mosaic being restricted. The mosaic creator must be the signer of the transaction.
    referenceMosaicId; :schema:`UnresolvedMosaicId <types.cats>`; Identifier of the mosaic providing the restriction key. The mosaic global restriction for the mosaic identifier depends on global restrictions set on the reference mosaic. Set ``referenceMosaicId`` to ``0000000000000000`` if the mosaic giving the restriction equals the mosaic identifier.
    restrictionKey; uint64; Restriction key relative to the reference mosaic identifier.
    previousRestrictionValue; uint64; Previous restriction value.
    newRestrictionValue; uint64; New restriction value.
    previousRestrictionType; :ref:`MosaicRestrictionType <mosaic-restriction-type>`; Previous restriction type.
    newRestrictionType; :ref:`MosaicRestrictionType <mosaic-restriction-type>`; New restriction type.

************************
Restriction Mosaic Types
************************

.. _mosaic-restriction-type:

MosaicRestrictionType
=====================

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0; Uninitialized value indicating no restriction.
    1 (EQ); Allow if equal.
    2 (NE); Allow if not equal.
    3 (LT); Allow if less than.
    4 (LTE); Allow if less than or equal.
    5 (GT); Allow if greater than.
    6 (GTE); Allow if greater than or equal.
