######
Mosaic
######

Mosaics are **fixed assets** that represent a set of multiple identical things that do not change.

A mosaic can be what is conventionally called **a token**, but it can also be a collection of more specialized assets such as reward points, shares of stock, signatures, status flags, votes or other currencies, for example.

Mosaic specialization is achieved through its properties, which are set during :doc:`mosaic creation <../guides/mosaic/creating-a-mosaic>`.

Once created, each mosaic has a unique identifier represented as a 64-bit unsigned integer. For example, |codename|'s native currency, **XYM**, has the mosaic ID ``0x6BED913FA20223F8``.

.. note:: If you create a mosaic which should be used by other users, it is very convenient to use a :doc:`namespace` to alias the mosaic ID to a human-readable string. XYM use the |networkcurrency| alias, for example.

.. _configurable-mosaic-properties:

*****************
Mosaic Properties
*****************

Divisibility
============

Determines the number of **decimal places** to which the mosaic can be divided. A divisibility of **3** means that the smallest fraction a mosaic can be divided into is **0.001**.

When decimals are used units are called **relative**, and when no decimals are used units are called **absolute**. I.e., with a divisibility of 3, **1** absolute unit corresponds to **0.001** relative units. To convert from relative to absolute units multiply by 10\ :sup:`divisibility`.

Divisibility must be in the **0** to **6** range (included).

Initial supply
==============

Indicates the amount of mosaics initially in circulation, in **absolute units**.

This amount can be later changed by a :ref:`mosaicsupplychangetransaction` if the **Supply mutable** flag (see below) of the mosaic is set to true.

The total supply must be in the **0** to **9,000,000,000,000,000** range in absolute units.

Duration
========

Specifies the number of confirmed blocks the mosaic is rented for.

**Expiring mosaics** are allowed to lie in |codename|'s public network up to **3650** days (10 years), being this maximum parameter :ref:`editable per network <config-network-properties>`.

**Non-expiring mosaics** can be created by setting this property to **0**.

.. note:: Mosaic duration cannot be extended after its creation. Before creating one, consider if your use case requires the mosaic to expire or not. Note that this behavior is different for :doc:`Namespaces <namespace>`.

The following formula is used to convert days to blocks approximately:

.. math::

    duration ≈ \frac{numberOfDays * 86400}{blockGenerationTargetTimeInSeconds}

By default, ``blockGenerationTargetTimeInSeconds`` is **30** seconds.

Supply mutable
==============

If set to true, the mosaic supply can change at a later point.
In this case, the mosaic creator is allowed to redefine the total mosaic supply with a :ref:`mosaicsupplychangetransaction`.
The transaction increases or decreases the mosaic supply in ``delta`` units.

To decrease the mosaic supply, the mosaic creator account must own at least ``delta`` units.
This means that the mosaic creator cannot remove mosaics from other account balances, even if the supply mutable property is enabled.

If Supply mutable set to false, the mosaic supply cannot be changed.
However, if the mosaic creator owns all the mosaic supply, this is modifiable even if the mosaic is defined as not mutable.

Transferable
============

.. figure:: ../resources/images/examples/mosaic-transferable.png
    :align: center
    :width: 400px

    Example of a non-transferable mosaic

If set to true, the mosaic can be transferred between arbitrary accounts.
Otherwise, the mosaic can only be transferred to or from the mosaic creator.

Restrictable
============

.. figure:: ../resources/images/examples/mosaic-restriction-delegated.png
    :align: center
    :width: 400px

    Example of a mosaic restriction

If set to true, the mosaic creator can configure custom :doc:`restrictions <mosaic-restriction>`.

Revokable
=========

Mosaics can be revoked (i.e., **reclaimed**) by the mosaic creator when this flag is set to true.

.. _mosaic-rental-fee:

************
Creation fee
************

An account willing to create a mosaic has to pay a rental fee in addition to the :doc:`transaction fee <fees>`.
Both fees will be deducted from the account's balance after the announcement of a valid :ref:`mosaicdefinitiontransaction`.

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

By default, creating a mosaic in |codename|'s public network has an initial cost of **0.5** |networkcurrency| (:ref:`configurable per network <config-network-properties>` by the ``mosaicRentalFee`` property).
However, **the network dynamically adjusts the mosaic rental fee** over time.

To calculate the effective rental fee, the network multiplies the default value set in the configuration by the network's :ref:`dynamic fee multiplier <fees_dynamic_multiplier>`.

********************
Related transactions
********************

.. csv-table::
    :header:  "Id",  "Type", "Description"
    :widths: 15 45 40
    :delim: ;

    0x414D; :ref:`mosaicdefinitiontransaction`; Create a new mosaic.
    0x424D; :ref:`mosaicsupplychangetransaction`; Change the mosaic total supply.
    0x434D; :ref:`mosaicsupplyrevocationtransaction`; Reclaim transferred mosaics.

**************
Related guides
**************

.. postlist::
    :category: Mosaic
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:
