######
Mosaic
######

.. warning:: The configuration presented is NOT intended to be used on the public network. These are the parameters used for the Catapult Testnet version (MIJIN_TEST).

Mosaics are part of what makes the Smart Asset System unique and flexible. Mosaics are fixed assets on the NEM blockchain that can represent a set of multiple identical things that do not change.

A mosaic could be as simple as a token, but it could also represent a set of more specialized assets like: reward points, shares of stock, signatures, status flags, votes or even other currencies.

Each Mosaic is defined by a variety of attributes such as name, description, quantity, divisibility, transferability and more.

Mosaics are held within :doc:`accounts <account>`, and can be transferred between them to represent a surprising variety of transactions such as: registering a signature, updating the status of an item, casting a vote, or simply passing coins or points between accounts.


.. _mosaic-definition-transaction:

*****************************
Mosaic definition transaction
*****************************

Mosaic definition transaction is used to create a new mosaic.

    **Namespace**

    A mosaic is always linked to a namespace, like a file hosted on a domain.

    **Name**

    Like a website and directory, a mosaic can have the same name as other files on other domains. However,  a namespace + mosaic is always unique, as the root namespace was unique even if the rest of it is not.

    Mosaics are named joining the namespace name with the mosaic name using ':' symbol. Renting a namespace called ``nem`` and a mosaic called ``xem`` under it, the mosaic is referenced as ``nem:xem``.

    Consider the following restrictions:

    * The name of the mosaic has a size limit of ``64`` characters and must be unique under the domain name.

    * Allowed characters are a, b, c, ..., z, 0, 1, 2, ..., 9, ', _ , -.

    **Owner**

    The public key of the mosaic creator.

    **Properties**

    The behavior of a mosaic can be customized by a set of properties. Supported properties are:

    * Divisibility: Determines up to what decimal place the mosaic can be divided. Divisibility of 3 means that a mosaic can be divided into smallest parts of 0.001 mosaics. The divisibility must be in the range of 0 and 6.

    * Duration: The number of confirmed blocks we would like to rent our namespace for.

    * Supply: The amount of mosaic in circulation. The creator can specify an initial supply of mosaics when creating the definition. The initial supply must be in the range of 0 and 9,000,000,000.

    * Supply mutable: The creator can choose between a definition that allows a mosaic supply change at a later point or a **immutable** supply. In the first case the creator is only allowed to decrease the supply within the limits of mosaics owned.

    * Transferability: The creator can choose if the mosaic can be transferred to and from arbitrary accounts, or only allowing itself to be the recipient once transferred.

.. _mosaic-supply-change-transaction:

********************************
Mosaic supply change transaction
********************************

Mosaic supply change transaction is used to assign supply to a mosaic.

    **Mosaic Id**

    Combination of namespace name and mosaic name. For example "foo.bar:token".

    **Direction**

    Could be Increase (0) or Decrease (1).

    **Delta**

    The amount of supply to increase or decrease.
