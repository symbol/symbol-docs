######
Mosaic
######

Mosaics are part of what makes the Smart Asset System unique and flexible. They are **fixed assets** on the NEM blockchain that can represent a set of multiple identical things that do not change.

A mosaic could be a token, but it could also be a collection of more specialized assets such as reward points, shares of stock, signatures, status flags, votes or even other currencies.

**********
Properties
**********

Each mosaic has a unique identifier and a set of configurable properties. During the :doc:`mosaic creation <../guides/mosaic/creating-a-mosaic>`, you can define:

.. _mosaic-properties:

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    Divisibility; Integer; Determines up to what decimal place the mosaic can be divided. Divisibility of 3 means that a mosaic can be divided into smallest parts of 0.001 mosaics. The divisibility must be in the range of 0 and ``6``.
    Duration; Integer; Specifies the number of confirmed blocks the mosaic is rented for. Duration is allowed to lie up to ``3650`` days (10 years). To create non-expiring mosaics, leave this property undefined.
    Initial supply; Integer; Indicates the amount of mosaic in circulation. The total supply must be in the range of 0 and ``9,000,000,000,000,000`` atomic units (absolute amount).
    Supply mutable; Boolean; If set to true, the mosaic supply can change at a later point. Otherwise, the mosaic supply remains immutable.
    Transferable; Boolean; If set to true, the mosaic can be transferred between arbitrary accounts. Otherwise, the mosaic can be only transferred back to the mosaic creator.
    Restrictable; Boolean; If set to true, the mosaic owner can configure custom :doc:`restrictions <mosaic-restriction>`.

=======
>>>>>>> master

*****************************
Absolute and relative amounts
*****************************

NEM works with absolute amounts, removing the comma when the mosaic can be divisible. To get an absolute amount, multiply the amount of assets you want to create or send by 10\ :sup:`divisibility`.

For example, if the mosaic has divisibility 2, to create or send 10 units (relative) you should define 1000 (absolute) instead.

****
Cost
****

The cost of creating a mosaic is :properties:`configurable per network <config-network.properties>`. By default, it has a cost of ``500 cat.currency`` plus transaction fees.

*******
Example
*******

A private company, ComfyClothingCompany, decides that it wants to go public. Instead of a traditional IPO, the company decides to do an STO to issue tokens through the NEM platform.

Thus, the company must create a mosaic to represent shares to their company. Here is how the company might configure the mosaic properties:

.. csv-table::
    :header: "Property", "Configuration"
    :delim: ;

    Duration; undefined
    Divisibility; 2
    Initial supply; 1000000000 (10,000,000.00)
    Supply mutable; true
    Transferable; true

**Duration:** Shares of the company should exist as long as the company is in business. The ComfyClothingCompany leaves this property ``undefined``, creating a non-expiring mosaic representing their assets.

**Divisibility:** Although brokerages and investment firms can fractionalize shares, the traditional minimum number of shares an investor can purchase from the open market is 1.

However, NEM mosaics offer more flexibility in tokenizing their company shares. ComfyClothingCompany chooses the divisibility to be ``2``, allowing the smallest fraction of their shares to be 0.01.

Fractional ownership, along with the ability to trade 24/7, brings additional liquidity to the market. These same characteristics also open up the market to smaller investors.

**Supply:** ComfyClothingCompany sets the initial supply of the mosaic to a typical startup amount of ``10,000,000`` authorized shares. As the company grows, it could choose to increase the number of shares, so the supply mutable is set to ``true``.

**Transferable:** Once the initial shares are distributed, the shares will be on the market to be traded in public. Thus, the transferability property needs to be set to ``true``.

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

Announce a mosaic definition transaction to create a new mosaic.

**Version**: 0x01

**Entity type**: 0x414D

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicNonce; uint32; Random nonce used to generate the mosaic id.
    mosaicId; :schema:`MosaicId <types.cats#L4>`; Identifier of the mosaic.
    propertiesCount; uint8; Number of elements in optional properties
    flags; :ref:`MosaicFlag <mosaic-flags>`; Mosaic flags.
    divisibility; uint8; Mosaic divisibility. Maximum divisibility is ``6``.
    properties; array(:ref:`MosaicProperty <mosaic-property>`, propertiesCount); Optional mosaic properties.

.. _mosaic-supply-change-transaction:

MosaicSupplyChangeTransaction
=============================

Announce a supply change transaction to increase or decrease a mosaic's supply.

**Version**: 0x01

**Entity type**: 0x424D

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicId; :schema:`UnresolvedMosaicId <types.cats#L3>`; Identifier of the affected mosaic.
    direction; :ref:`MosaicSupplyChangeDirection<mosaic-supply-change-direction>`; Supply change direction.
    delta; :schema:`Amount <types.cats#L1>`; Amount of supply to increase or decrease.

.. _mosaic-property:

MosaicProperty
==============

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    id; uint8; Mosaic property identifier. (0x02) stands for duration.
    value; uint64; The mosaic property value.

.. _mosaic:

Mosaic
======

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicId; :schema:`MosaicId <types.cats#L4>`; Mosaic identifier.
    amount; :schema:`Amount <types.cats#L1>`; Amount of the mosaic.

.. _unresolved-mosaic:

UnresolvedMosaic
================

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaicId; :schema:`UnresolvedMosaicId <types.cats#L3>`; Mosaic identifier.
    amount; :schema:`Amount <types.cats#L1>`; Amount of the mosaic.

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

.. _mosaic-supply-change-direction:

MosaicSupplyChangeDirection
===========================
Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0; Decrease.
    1; Increase.
