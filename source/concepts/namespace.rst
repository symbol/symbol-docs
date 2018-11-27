#########
Namespace
#########

Namespaces allow you to create an on-chain **unique place** for your business and your assets on the NEM blockchain.

A namespace starts with a name that you choose, similar to an internet domain name. If one :doc:`account <account>` creates a namespace, that will appear as unique in the NEM ecosystem.

You can associate a name with an account address or a :doc:`mosaic <mosaic>` identifier by announcing an alias transaction. The binding between namespaces and assets makes long account addresses rememberable and mosaics identifiers recognizable.

*************
Subnamespaces
*************

On the internet, a domain can have a sub-domain. In NEM, namespaces can have subnamespaces.

It is possible to create multiple subnamespaces with the same name (example: ``foo.bar`` and ``foo2.bar``, ``bar`` is the subnamespace/sub-domain).

Namespaces can have up to ``3`` levels, a namespace and its two levels of subnamespace domains.

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_ . Public network configuration may differ.

********
Examples
********

Identifying an account
======================
Every time a customer buys a ticket for an event, a ticket sales company sends a ticket to the customer account.

The seller company has assigned the namespace "ticketsales" to its main account. Customers can quickly recognize incoming transactions from the vendor account.

Organizing mosaics
==================
The same distributor sells tickets for an event organized in different venues. The company registers a non-transferable mosaic for each function.

Namespaces and subnamespaces are used to organize the different mosaics. Now, customers can send 1 ``ticketsales.eventname.ticket`` instead of 1 ``0xE4EEB491``.

.. _register-namespace-transaction:

******************************
Register namespace transaction
******************************

Announce a register namespace transaction to register and re-rent a namespace.

Parameters
==========

    **Name**

    A namespace name must be unique and may have a maximum length of ``64`` characters.

    Allowed characters are a, b, c, ..., z, 0, 1, 2, ..., 9, ', _ , -.

    **Parent namespace**

    If it is a subdomain, a reference to parent namespace name is required.

    **Owner**

    The public key of the namespace creator.

    **Renting duration**

    The renting duration represents the number of confirmed blocks we would like to rent our namespace for.

    During the renting period, it is possible to extend the rental by sending a :ref:`register namespace transaction<register-namespace-transaction>` with the extra-confirmed block to rent the namespace.

    When a renting period ends, the namespace will become inactive.

    .. and you will have ``N`` blocks to re-rent it.

*****************
Alias transaction
*****************

Announce an alias transaction to attach a namespace to an account or mosaic. A namespace can be assigned to any account present in the network. Setting an alias to mosaics is only possible if the account announcing the transaction owns the namespace and mosaic involved.

Parameters
==========

    **Type**

    Mosaic or account.

    **Id**

    A MosaicId or an address.

    **Namespace name**

    The namespace or subnamespace name.