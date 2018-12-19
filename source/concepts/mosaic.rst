######
Mosaic
######

Mosaics are part of what makes the Smart Asset System unique and flexible. They are **fixed assets** on the NEM blockchain that can represent a set of multiple identical things that do not change.

A mosaic could be a token, but it could also be a collection of more specialized assets such as reward points, shares of stock, signatures, status flags, votes or even other currencies.

Each mosaic has a set of configurable properties. During the mosaic creation, you can define:

.. _mosaic-properties:

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    Divisibility; Integer; Determines up to what decimal place the mosaic can be divided. Divisibility of 3 means that a mosaic can be divided into smallest parts of 0.001 mosaics. The divisibility must be in the range of 0 and 6.
    Duration; Integer; Specifies the number of confirmed blocks the mosaic is rented for.
    Initial supply; Integer; Indicates the amount of mosaic in circulation. The initial supply must be in the range of 0 and 9,000,000,000.
    Supply mutable; Boolean; If set to true, the mosaic supply can change at a later point. Otherwise, the mosaic supply remains immutable.
    Transferability; Boolean; If set to true, the mosaic can be transferred between arbitrary accounts. Otherwise, the mosaic can be only transferred back to the mosaic creator.

.. _mosaic-definition-transaction:

*****************************
Mosaic definition transaction
*****************************

Announce a mosaic definition transaction to create a new mosaic.

Parameters
==========

    **Namespace**

    A mosaic is always linked to a :doc:`namespace <namespace>`, like a file hosted on a domain.

    **Name**

    Like a website and directory, a mosaic can have the same name as other files on other domains. However,  a namespace + mosaic is always unique, as the root namespace was unique, even if the rest of it is not.

    Mosaics are named joining the namespace name with the mosaic name using the ':' symbol. Renting a namespace called ``nem`` and a mosaic called ``xem`` under it, the mosaic is referenced as ``nem:xem``.

    Mosaic names have a size limit of ``64`` characters and must be unique under the domain name. Allowed characters are a, b, c, ..., z, 0, 1, 2, ..., 9, ', _ , -.

    **Owner**

    The public key of the :doc:`mosaic creator <account>`.

    **Properties**

    See :ref:`mosaic configurable properties<mosaic-properties>`

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_ . Public network configuration may differ.

.. _mosaic-supply-change-transaction:

********************************
Mosaic supply change transaction
********************************

Announce a supply change transaction to increase or decrease a mosaic's supply.

Parameters
==========

    **Mosaic Id**

    A combination of namespace name and mosaic name. For example "foo.bar:token".

    **Direction**

    The direction could be Increase (0) or Decrease (1).

    **Delta**

    The amount of supply to increase or decrease.


**************
Related guides
**************

.. postlist::
    :category: mosaic
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

