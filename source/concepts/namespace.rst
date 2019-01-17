#########
Namespace
#########

Namespaces allow you to create an on-chain **unique place** for your business and your assets on the NEM blockchain.

A namespace starts with a name that you choose, similar to an internet domain name. If one :doc:`account <account>` creates a namespace, that will appear as unique in the NEM ecosystem.

After registering your namespace, you have the ability to define your own subdomains, as well as the names for your :doc:`mosaics <mosaic>`.

*************
Subnamespaces
*************

On the internet, a domain can have a sub-domain. In NEM, namespaces can have subnamespaces.

It is possible to create multiple subnamespaces with the same name (example: ``foo.bar`` and ``foo2.bar``, ``bar`` is the subnamespace/sub-domain).

Namespaces can have up to ``3`` levels, a namespace and its two levels of subnamespace domains.

******
Guides
******

.. postlist::
    :category: namespace
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

.. _namespace-type:

NamespaceType
=============

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x00; Root namespace.
    0x01; Child namespace.
