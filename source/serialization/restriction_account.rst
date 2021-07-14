###########################
Restriction Account Schemas
###########################

.. note:: The `catbuffer schemas <https://github.com/symbol/catbuffer-schemas>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/symbol/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages. 

***************************
Account Address Restriction
***************************

.. _account-address-restriction-transaction:

AccountAddressRestrictionTransaction
====================================

Configure restrictions to prevent receiving or sending transactions from/to undesired addresses.

**Version**: 0x01

**EntityType**: 0x4150

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    restrictionType; :ref:`AccountRestrictionFlags <account-restriction-flags>` ; Type of the account restriction.
    restrictionAdditionsCount; uint8; number of account restriction additions.
    restrictionDeletionsCount; uint8; Number of account restriction deletions.
    accountRestrictionTransactionBody_Reserved1 ; uint32; Reserved padding to align restrictionAdditions on 8-byte boundary.
    restrictionAdditions; array(:schema:`UnresolvedAddress <types.cats>`, restrictionAdditionsCount); Account restriction additions.
    restrictionDeletions; array(:schema:`UnresolvedAddress <types.cats>`, restrictionDeletionsCount); Account restriction deletions.

**************************
Account Mosaic Restriction
**************************

.. _account-mosaic-restriction-transaction:

AccountMosaicRestrictionTransaction
===================================

Configure restrictions to prevent receiving transactions containing a specific mosaic.

**Version**: 0x01

**EntityType**: 0x4250

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    restrictionType; :ref:`AccountRestrictionFlags <account-restriction-flags>` ; Type of the account restriction.
    restrictionAdditionsCount; uint8; number of account restriction additions.
    restrictionDeletionsCount; uint8; Number of account restriction deletions.
    accountRestrictionTransactionBody_Reserved1 ; uint32; Reserved padding to align restrictionAdditions on 8-byte boundary.
    restrictionAdditions; array(:schema:`UnresolvedMosaicId <types.cats>`, restrictionAdditionsCount); Account restriction additions.
    restrictionDeletions; array(:schema:`UnresolvedMosaicId <types.cats>`, restrictionDeletionsCount); Account restriction deletions.

*****************************
Account Operation Restriction
*****************************

.. _account-operation-restriction-transaction:

AccountOperationRestrictionTransaction
======================================

Configure restrictions to prevent announcing transactions by :ref:`type <transaction-types>`.

**Version**: 0x01

**EntityType**: 0x4350

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    restrictionType; :ref:`AccountRestrictionFlags <account-restriction-flags>` ; Type of the account restriction.
    restrictionAdditionsCount; uint8; number of account restriction additions.
    restrictionDeletionsCount; uint8; Number of account restriction deletions.
    accountRestrictionTransactionBody_Reserved1 ; uint32; Reserved padding to align restrictionAdditions on 8-byte boundary.
    restrictionAdditions; array(:ref:`EntityType <entity-type>`, restrictionAdditionsCount); Account restriction additions.
    restrictionDeletions; array(:ref:`EntityType <entity-type>`, restrictionDeletionsCount); Account restriction deletions.

*************************
Restriction Account Types
*************************

.. _account-restriction-flags:

AccountRestrictionFlags
=======================

Enumeration: uint16

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0x0001; Restriction type is an address.
    0x0002; Restriction type is a mosaic identifier.
    0x0004; Restriction type is a transaction type.
    0x4000; Restriction is interpreted as outgoing.
    0x8000; Restriction is interpreted as blocking operation.
