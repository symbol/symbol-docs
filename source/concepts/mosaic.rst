######
Mosaic
######

Mosaics are part of what makes the Smart Asset System unique and flexible. They are **fixed assets** on the NEM blockchain that can represent a set of multiple identical things that do not change.

A mosaic could be a token, but it could also be a collection of more specialized assets such as reward points, shares of stock, signatures, status flags, votes or even other currencies.

**********
Properties
**********

Each mosaic has a unique identifier and a set of configurable properties. During the  :doc:`mosaic creation <../guides/mosaic/creating-a-mosaic>`, you can define:

.. _mosaic-properties:

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    Divisibility; Integer; Determines up to what decimal place the mosaic can be divided. Divisibility of 3 means that a mosaic can be divided into smallest parts of 0.001 mosaics. The divisibility must be in the range of 0 and ``6``.
    Duration; Integer; Specifies the number of confirmed blocks the mosaic is rented for. To create non-expiring mosaics, leave this property undefined.  Duration is allowed to lie up to ``365`` days.
    Initial supply; Integer; Indicates the amount of mosaic in circulation. The total supply must be in the range of 0 and ``9,000,000,000``.
    Supply mutable; Boolean; If set to true, the mosaic supply can change at a later point. Otherwise, the mosaic supply remains immutable.
    Transferability; Boolean; If set to true, the mosaic can be transferred between arbitrary accounts. Otherwise, the mosaic can be only transferred back to the mosaic creator.

*****************************
Absolute and relative amounts
*****************************

NEM works with absolute amounts, removing the comma when the mosaic can be divisible. To get an absolute amount, multiply the amount of assets you want to create or send by 10\ :sup:`divisibility`.

For example, if the mosaic has divisibility 2, to create or send 10 units (relative) you should define 1000 (absolute) instead.

****
Cost
****

The cost of creating a mosaic is `configurable per network <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_. By default, it has a cost of ``500 cat.currency`` plus transaction fees.

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

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_ . Public network configuration may differ.

.. _mosaic-definition-transaction:

MosaicDefinitionTransaction
===========================

Announce a mosaic definition transaction to create a new mosaic.

**Version**: 0x02

**Entity type**: 0x414D

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicNonce; uint32; Random nonce used to generate the mosaic id.
    mosaicId; uint64; The mosaic Id.
    propertiesCount; uint8; The number of elements in optional properties
    flags; :ref:`MosaicFlag<mosaic-flags>`; The mosaic flags.
    divisibility; uint8; The mosaic divisibility. The maximum divisibility is ``6``.
    properties; array<:ref:`MosaicProperty<mosaic-property>`, count>; The optional mosaic properties.

.. _mosaic-supply-change-transaction:

MosaicSupplyChangeTransaction
=============================

Announce a supply change transaction to increase or decrease a mosaic's supply.

**Version**: 0x02

**Entity type**: 0x424D

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicId; uint64; The id of the affected mosaic.
    direction; :ref:`MosaicSupplyChangeDirection<mosaic-supply-change-direction>`; The supply change direction.
    delta; uint64; The amount of supply to increase or decrease.

.. _mosaic-property:

MosaicProperty
==============

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    id; uint8; The property id. (0x02) stands for duration.
    value; uint64; The mosaic property value.

.. _mosaic:

Mosaic
======
.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicId; uint64; The mosaic id.
    amount; uint64; The amount of the mosaic.

.. _unresolved-mosaic:

UnresolvedMosaic
================

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicId; uint64; The mosaic id.
    amount; uint64; The amount of the mosaic.

.. _mosaic-flags:

MosaicFlags
===========

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x00; No flags present.
    0x01; The mosaic supply is mutable.
    0x02; The mosaic is transferable.
    0x04; The mosaic levy is mutable

.. _mosaic-supply-change-direction:

MosaicSupplyChangeDirection
===========================
Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0; Decrease.
    1; Increase.
