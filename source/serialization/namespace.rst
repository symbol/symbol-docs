#################
Namespace Schemas
#################

.. note:: The `catbuffer schemas <https://github.com/symbol/catbuffer-schemas>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/symbol/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages. 

*************
Address Alias
*************

.. _address-alias-transaction:

AddressAliasTransaction
=======================

Announce an AliasTransaction to attach a namespace to an account. A namespace can be assigned to any account present in the network.

**Version**: 0x01

**EntityType**: 0x424E

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    namespaceId; :schema:`NamespaceId <namespace/namespace_types.cats#L1>`; Identifier of the namespace that will become an alias.
    address; :schema:`Address <types.cats>`; Aliased address.
    aliasAction; :ref:`AliasAction <alias-action>`; Alias action.

************
Mosaic Alias
************

.. _mosaic-alias-transaction:

MosaicAliasTransaction
======================

Announce an AliasTransaction to attach a namespace to a mosaic. Setting an alias to a mosaic is only possible if the account announcing the transaction has created the namespace and mosaic involved.

**Version**: 0x01

**EntityType**: 0x434E

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    namespaceId; :schema:`NamespaceId <namespace/namespace_types.cats>`; Identifier of the namespace that will become an alias.
    mosaicId; :schema:`MosaicId <types.cats>`; Aliased mosaic identifier.
    aliasAction; :ref:`AliasAction <alias-action>`; Alias action.

******************
Namespace Receipts
******************

.. _namespace-expiry-receipt:

NamespaceExpiryReceipt
======================

A :doc:`namespace <namespace>` expired.

* **version**: 0x1
* **basicType**: 0x4

**Inlines**:

* :ref:`Receipt <receipt>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    artifactId; :schema:`NamespaceId <namespace/namespace_types.cats#L1>`; Namespace identifier.

**********************
Namespace Registration
**********************

.. _namespace-registration-transaction:

NamespaceRegistrationTransaction
================================

Announce a NamespaceRegistrationTransaction to register and re-rent a namespace.

**Version**: 0x01

**EntityType**: 0x414E

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    duration; :schema:`BlockDuration <types.cats>`; Number of confirmed blocks you would like to rent the namespace for. Required for root namespaces.
    parentId; :schema:`NamespaceId <namespace/namespace_types.cats>`; Parent namespace identifier. Required for subnamespaces.
    id; :schema:`NamespaceId <namespace/namespace_types.cats#L1>`; Namespace identifier.
    registrationType; :ref:`NamespaceRegistrationType <namespace-registration-type>`; Namespace registration type.
    nameSize; uint8; Namespace name size in bytes.
    name; array(bytes, namespaceNameSize); Namespace name.

***************
Namespace Types
***************

.. _namespace-registration-type:

NamespaceRegistrationType
=========================

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0; Root namespace.
    1; Child namespace.

.. _alias-action:

AliasAction
===========

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x00; Link alias.
    0x01; Unlink alias.
