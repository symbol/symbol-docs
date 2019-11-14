######
Mosaic
######

Mosaics are part of what makes the Smart Asset System unique and flexible. They are **fixed assets** on the NEM blockchain that can represent a set of multiple identical things that do not change.

A mosaic could be a **token**, but it could also be a collection of more specialized assets such as reward points, shares of stock, signatures, status flags, votes or even other currencies.

Each mosaic has a **unique identifier** represented as a 64-bit unsigned integer and a set of :ref:`configurable properties <mosaic-properties>` and flags that can be defined during the :doc:`mosaic creation <../guides/mosaic/creating-a-mosaic>`.

.. _mosaic-properties:

**********
Properties
**********

Divisibility
============

Determines the decimal place to which the mosaic can be divided. Divisibility of 3 means that the smallest fraction a mosaic can be divided into will be 0.001. The divisibility must be in the range of 0 and 6.

Initial supply
==============

Indicates the amount of mosaic in circulation. The total supply must be in the range of 0 and ``9,000,000,000,000,000`` atomic units.

NEM works with **absolute amounts**. To get an absolute amount, multiply the amount of assets you want to create or send by 10\ :sup:`divisibility`.

For example, if the mosaic has **divisibility** 2, to create or send 10 units (relative) you should define 1000 (absolute) instead.

Duration
========

Specifies the number of confirmed blocks the mosaic is rented for, and it is allowed to lie up to ``3650`` days (10 years). You can also create **non-expiring mosaics** setting this property to ``0``.

*****
Flags
*****

Supply mutable
==============

If set to true, the mosaic supply can change at a later point. Otherwise, the mosaic supply remains immutable.

Transferable
============

.. figure:: ../resources/images/examples/mosaic-transferable.png
    :align: center
    :width: 400px

    Example of a non-transferable mosaic

If set to true, the mosaic can be transferred between arbitrary accounts. Otherwise, the mosaic can only be transferred back to the mosaic creator.

Restrictable
============

.. figure:: ../resources/images/examples/mosaic-restriction-delegated.png
    :align: center
    :width: 400px

    Example of a mosaic restriction

If set to true, the mosaic owner can configure custom :doc:`restrictions <mosaic-restriction>`.

.. _mosaic-rental-fee:

**********
Rental fee
**********

To create a mosaic, accounts have to pay a rental fee in addition to the :doc:`transaction fee <fees>`. The fees will be deducted from the account's balance after the announcement of a valid **MosaicDefinitionTransaction**.

By default, registering a mosaic has an :properties:`associated cost <config-network.properties>` of ``0.0005 cat.currency``, but **the network dynamically adjusts the mosaic rental fee** over time.

To calculate the effective rental fee, the network multiplies the default value set in the configuration by the :doc:`median network multiplier <harvesting>` over last :properties:`maxRollbackBlocks <config-network.properties#L20>`. In case there are zero multipliers, these are replaced by the :properties:`defaultDynamicFeeMultiplier <config-network.properties#L20>` before the median calculation.

******
Guides
******

.. postlist::
    :category: Mosaic
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

*******
Schemas
*******

.. note:: Configuration parameters are :properties:`editable <config-network.properties>`. Public network configuration may differ.

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

    id; :schema:`MosaicId <types.cats#L7>`; Identifier of the mosaic.
    duration; :schema:`BlockDuration <types.cats#L2>`; Mosaic duration expressed in blocks. Duration is allowed to lie up to ``3650`` days (10 years). If set to 0, the mosaic is non-expiring.
    nonce; uint32; Random nonce used to generate the mosaic id.
    flags; :ref:`MosaicFlag <mosaic-flags>`; Mosaic flags.
    divisibility; uint8; Mosaic divisibility. Maximum divisibility is ``6``.

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

    mosaicId; :schema:`UnresolvedMosaicId <types.cats#L6>`; Affected mosaic identifier.
    delta; :schema:`Amount <types.cats#L1>`; Amount of supply to increase or decrease.
    action; :ref:`MosaicSupplyChangeAction<mosaic-supply-change-action>`; Supply change action.

.. _mosaic:

Mosaic
======

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicId; :schema:`MosaicId <types.cats#L7>`; Mosaic identifier.
    amount; :schema:`Amount <types.cats#L1>`; Mosaic amount.

.. _unresolved-mosaic:

UnresolvedMosaic
================

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicId; :schema:`UnresolvedMosaicId <types.cats#L6>`; Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias) is used instead of the real  mosaic identifier.
    amount; :schema:`Amount <types.cats#L1>`; Mosaic amount.

.. _mosaic-flags:

MosaicFlags
===========

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x00; No flags present.
    0x01; Mosaic supports supply changes even when mosaic owner owns partial supply.
    0x02; Mosaic supports transfers between arbitrary accounts. When not set, mosaic can only be transferred to and from mosaic owner.
    0x04; Mosaic owner can add rules to restrict which accounts are enabled to send and receive the mosaic.

.. _mosaic-supply-change-action:

MosaicSupplyChangeAction
========================

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x00; Decrease.
    0x01; Increase.
