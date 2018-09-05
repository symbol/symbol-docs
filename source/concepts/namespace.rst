#########
Namespace
#########

.. warning:: The configuration presented is NOT intended to be used on the public network. These are the parameters used for the Catapult Testnet version (MIJIN_TEST).

Namespaces allow you to create an on-chain **unique place** for your business and your assets on the NEM blockchain.

A namespace starts with a name that you choose, similar to an internet domain name. If one :doc:`account <account>` creates a namespace, that namespace will appear as unique in the NEM ecosystem.

After registering your namespace, you have the ability to define your own subdomains, as well as the names for your :doc:`mosaics <mosaic>`. This makes your assets unique, easy to use, and trustable.

*************
Subnamespaces
*************

Just like on the internet, where a domain can have a sub-domain, namespaces can have subnamespaces.

It is possible to create multiple subnamespaces with the same name (example: ``foo.bar`` and ``foo2.bar``, ``bar`` is the subnamespace/sub-domain).

Namespaces can have up to ``3`` levels, a namespace and its two levels of subnamespace domains.

.. _register-namespace-transaction:

******************************
Register namespace transaction
******************************

Register namespace transaction is used to create and re-rent a namespace or subnamespace.

    **Name**

    A namespace name must be unique and may have a maximum length of ``64`` characters.

    Allowed characters are a, b, c, ..., z, 0, 1, 2, ..., 9, ', _ , -.

    **Parent namespace**

    If it is a subdomain, a reference to parent namespace name is required.

    **Depth**

    Level of the namespace. Namespace ``foo`` level is 0, whereas ``foo.bar`` level is 1.

    **Owner**

    The public key of the namespace creator.

    **Renting duration**

    Renting duration represents the number of confirmed blocks we would like to rent our namespace for.

    During the renting period, it is possible to extend the rental by sending a :ref:`register namespace transaction<register-namespace-transaction>` with the extra-confirmed block to rent the namespace.

    When a renting period ends, the namespace will become inactive, and you will have ``N`` blocks to re-rent it.