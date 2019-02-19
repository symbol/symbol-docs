#########
Namespace
#########

Namespaces allow you to create an on-chain **unique place** for your business and your assets on the NEM blockchain.

A namespace starts with a name that you choose, similar to an internet domain name. If one :doc:`account <account>` creates a namespace, that will appear as unique in the NEM ecosystem.

An account can link a registered name (namespace or subnamespace) with an :doc:`account <account>` or a :doc:`mosaic <mosaic>` identifier.

*************
Subnamespaces
*************

On the internet, a domain can have a sub-domain. In NEM, namespaces can have subnamespaces.

You can create multiple subnamespaces with the same name. For example, you can create the subnamespaces ``foo.bar`` and ``foo2.bar``.

Namespaces can have up to ``3`` levels, a namespace and its two levels of subnamespace domains.

*****
Alias
*****

:ref:`Alias transactions<address-alias-transaction>` make long addresses rememberable and mosaics recognizable.

The creator of the namespace can edit the link between a namespace and an asset. The alias relation for a given transaction can be retrieved later from the block's :doc:`receipts <receipt>`.

Restrictions:

- An account can only associate a name with one account or mosaic, but those can have many aliases linked.
- An account can assign a name to any account that permits receiving :doc:`AddressNamespaceTransactions <account-filter>`. In contrast, if the account wants to assign the alias to a mosaicId, it should be the creator of the mosaic.

*******
Example
*******

A customer buys a ticket for an event. The ticket sales company sends a ticket to the customer account.

.. figure:: ../resources/images/examples/namespace-tickets.png
    :align: center
    :width: 500px

    Recognizable mosaics and addresses

Identifying the sender
======================

The ticket seller has registered the namespace ``ticketsales`` to link it to its account as an alias. Customers can quickly recognize incoming transactions from the vendor account.

Identifying the ticket
======================

The same company sells tickets for events organized in different venues. The company registers a non-transferable :doc:`mosaic <mosaic>` for each actuation.

The ticket seller adds a series of subdomains on top of the root domain of ``ticketsales``. The root plus subdomains are ``ticketsales.event<ID>.ticket``.

The company links one registered mosaic with ``ticketsales.event1.ticket`` namespace name.

Identifying the buyer
=====================

Alice, who wants to buy the ticket, has registered the namespace ``alice`` and assigned it to her account as an alias.

The ticket vendor can send 1 ``ticketsales.event1.ticket`` to ``alice`` instead of 1  ``0dc67fbe1cad29e3`` to ``SCVG35-ZSPMYP-L2POZQ-JGSVEG-RYOJ3V-BNIU3U-N2E6``.

******
Guides
******

.. postlist::
    :category: Namespace
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

*******
Schemas
*******

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_ . Public network configuration may differ.

.. _register-namespace-transaction:

RegisterNamespaceTransaction
============================

Announce a register namespace transaction to register and re-rent a namespace.

**Version**: 0x02

**Entity type**: 0x414E

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    namespaceType; :ref:`NamespaceType <namespace-type>`; The type of the registered namespace.
    duration; uint64; The renting duration represents the number of confirmed blocks we would like to rent our namespace for. During the renting period, it is possible to extend the rental by sending a :ref:`register namespace transaction<register-namespace-transaction>` with the extra-confirmed block to rent the namespace. When a renting period ends, the namespace will become inactive.
    parentId; uint64; If it is a subdomain, a reference to parent namespace name is required.
    namespaceId; uint64; The id of the namespace.
    namespaceNameSize; uint8; The size of the namespace name.
    name; array(bytes, namespaceNameSize); A namespace name must be unique and may have a maximum length of ``64`` characters. Allowed characters are a, b, c, ..., z, 0, 1, 2, ..., 9, ', _ , -.


.. _address-alias-transaction:

AddressAliasTransaction
=======================

Announce an alias transaction to attach a namespace to an account. A namespace can be assigned to any account present in the network.

**Version**: 0x01

**Entity type**: 0x424E

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    aliasAction; :ref:`AliasAction <alias-action>`; The alias action.
    namespaceId; uint64; The id of the namespace that will become an alias.
    address; 25 bytes (binary); The aliased address.

.. _mosaic-alias-transaction:

MosaicAliasTransaction
======================

Announce an alias transaction to attach a namespace to a mosaic. Setting an alias to a mosaic is only possible if the account announcing the transaction has created the namespace and mosaic involved.

**Version**: 0x01

**Entity type**: 0x434E

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    aliasAction; :ref:`AliasAction <alias-action>`; The alias action.
    namespaceId; uint64; The id of the namespace that will become an alias.
    mosaicId; uint64; The aliased mosaic id.

.. _namespace-type:

NamespaceType
=============

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0; Root namespace.
    1; Child namespace.

.. _alias-action:

Alias Action
============

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0; Link alias.
    1; Unlink alias.
