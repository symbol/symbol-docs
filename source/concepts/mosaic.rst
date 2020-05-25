######
Mosaic
######

Mosaics are part of what makes the Smart Asset System unique and flexible.
They are **fixed assets** that can represent a set of multiple identical things that do not change.

A mosaic could be a **token**, but it could also be a collection of more specialized assets such as reward points, shares of stock, signatures, status flags, votes or even other currencies.

Each mosaic has a unique identifier represented as a 64-bit unsigned integer and a set of :ref:`configurable properties <mosaic-properties>` and flags that can be defined during the :doc:`mosaic creation <../guides/mosaic/creating-a-mosaic>`.

.. _mosaic-properties:

**********
Properties
**********

Find below the complete list of configurable properties.

Divisibility
============

Determines the decimal place to which the mosaic can be divided.
A divisibility of 3 means that the smallest fraction a mosaic can be divided into will be 0.001.
The divisibility must be in the range of 0 and 6.

Initial supply
==============

Indicates the amount of mosaic in circulation.
The total supply must be in the range of 0 and ``9,000,000,000,000,000`` atomic units.

|codename| works with **absolute amounts**.
To get an absolute amount, multiply the amount of assets you want to create or send by 10\ :sup:`divisibility`.

For example, if the mosaic has **divisibility** 2, to create or send 10 units (relative) you should define 1,000 (absolute) instead.

Duration
========

Specifies the number of confirmed blocks the mosaic is rented for.
It is allowed to lie in |codename|'s public network up to ``3650`` days (10 years), being this maximum parameter :ref:`editable per network <config-network-properties>`.
**Non-expiring mosaics** can be created by setting this property to ``0``.

.. note:: Different from namespaces, a mosaic duration cannot be extended after its creation. Before creating one, consider if your use case requires the mosaic to expire or not.

The following formula is used to convert days to blocks approximately:

.. math::

    duration ≈ numberOfDays * 86400 / blockGenerationTargetTimeInSeconds


Supply mutable
==============

If set to true, the mosaic supply can change at a later point.
In this case, the mosaic creator is allowed to redefine the total mosaic supply with a :ref:`MosaicSupplyChangeTransaction <mosaic-supply-change-transaction>`.
The transaction increases or decreases the mosaic supply in ``delta`` units.

To decrease the mosaic supply, the mosaic creator account must own at least ``delta`` units.
This means that the mosaic creator cannot remove mosaics from other account balances, even if the supply mutable property is enabled.

If set to false, the mosaic supply remains immutable.
However, if the mosaic creator owns all the mosaic supply, this is modifiable even if the mosaic is defined as not mutable.

Transferable
============

.. figure:: ../resources/images/examples/mosaic-transferable.png
    :align: center
    :width: 400px

    Example of a non-transferable mosaic

If set to true, the mosaic can be transferred between arbitrary accounts.
Otherwise, the mosaic can only be transferred back to the mosaic creator.

Restrictable
============

.. figure:: ../resources/images/examples/mosaic-restriction-delegated.png
    :align: center
    :width: 400px

    Example of a mosaic restriction

If set to true, the mosaic creator can configure custom :doc:`restrictions <mosaic-restriction>`.

.. _mosaic-rental-fee:

************
Creation fee
************

An account willing to create a mosaic has to pay a rental fee in addition to the :doc:`transaction fee <fees>`.
Both fees will be deducted from the account's balance after the announcement of a valid **MosaicDefinitionTransaction**.

The :doc:`REST Gateway <../api>` provides an endpoint to get an estimation of how much network currency will cost you to create a mosaic:

.. example-code::

    .. viewsource:: ../resources/examples/typescript/mosaic/GettingMosaicRentalFee.ts
        :language: typescript
        :start-after: /* start block 01 */
        :end-before: /* end block 01 */
    
    .. viewsource:: ../resources/examples/typescript/mosaic/GettingMosaicRentalFee.js
        :language: javascript
        :start-after: /* start block 01 */
        :end-before: /* end block 01 */

By default, creating a mosaic in |codename|'s public network has an :ref:`initial cost <config-network-properties>` of ``0.0005`` |networkcurrency|.
However, **the network dynamically adjusts the mosaic rental fee** over time.

To calculate the effective rental fee, the network multiplies the default value set in the configuration by the :doc:`median network multiplier <harvesting>` over last :ref:`maxDifficultyBlocks <config-network-properties>`.
In case there are zero multipliers, these are replaced by the :ref:`defaultDynamicFeeMultiplier <config-network-properties>` before the median calculation.

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

*******************
Transaction schemas
*******************

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

Continue: :doc:`Namespaces <namespace>`.
