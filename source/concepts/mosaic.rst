######
Mosaic
######

.. warning:: The configuration presented is NOT intended to be used on the public network. These are the parameters used for the Catapult Testnet version (MIJIN_TEST).

:doc:`Namespaces <namespace>` give rise to a unique naming convention. Mosaics give rise to the creation of assets.

Mosaics can be used to represent any asset in the blockchain such as objects, tickets, coupons, stock share representation, and even your cryptocurrency.

A mosaic is like a file hosted on a domain, and represents an asset.  Like a website and directory, a mosaic can have the same name as other files on other domains. However,  a namespace + mosaic is always unique, as the root namespace was unique even if the rest of it is not.

******
Fields
******

The basic data for a mosaic definition consists of:

    **Namespace**

    To be able to create a mosaic definition, an account must rent at least one root namespace which the mosaic definition can then refer to.

    **Name**

    Name of the mosaic, up to a size limit of ``64`` characters; must be unique under the domain name.

    Allowed characters are a, b, c, ..., z, 0, 1, 2, ..., 9, ', _ , -.

    Mosaics are usually identified by the joining the namepace name with the mosaic name using ':' symbol. For example, if we create a namespace called ``nem`` and a mosaic called ``xem`` under it, mosaic is referenced as ``nem:xem``.

    **Owner**

    The public key of the mosaic creator.

    **Properties**

    The behavior of a mosaic can be customized by a set of properties. Supported properties are:

    * Divisibility: Determines up to what decimal place the mosaic can be divided. Divisibility of 3 means that a mosaic can be divided into smallest parts of 0.001 mosaics. The divisibility must be in the range of 0 and 6.

    * Duration: The number of confirmed blocks we would like to rent our namespace for. Should be inferior or equal to namespace duration.

    * Supply: The amount of mosaic in circulation. The creator can specify an initial supply of mosaics when creating the definition. The initial supply must be in the range of 0 and 9,000,000,000.

    * Supply mutable: The creator can choose between a definition that allows a mosaic supply change at a later point or a **immutable** supply. In the first case the creator is only allowed to decrease the supply within the limits of mosaics owned.

    * Transferability: The creator can choose if the mosaic can be transferred to and from arbitrary accounts, or only allowing itself to be the recipient once transferred for the first time.

