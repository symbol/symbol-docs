:orphan:

################
Multisig Schemas
################

.. note:: The `catbuffer schemas <https://github.com/nemtech/catbuffer>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/nemtech/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages. 

*****************************
Multisig Account Modification
*****************************

.. _multisig-account-modification-transaction:

MultisigAccountModificationTransaction
======================================

Announce a MultisigAccountModificationTransaction to:

a) Transform an account to multisig account.
b) Change the configurable properties of a multisig account.
c) Add or delete cosignatories from a multisig account.

**Version**: 0x01

**EntityType**: 0x4155

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    minRemovalDelta; int8; Number of signatures needed to remove a cosignatory. If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories.
    minApprovalDelta; int8; Number of signatures needed to approve a transaction. If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories.
    addressAdditionsCount; uint8; Number of cosignatory address additions.
    addressDeletionsCount; uint8; Number of cosignatory address deletions.
    multisigAccountModificationTransactionBody_Reserved1; uint32; Reserved padding to align addressAdditions on 8-byte boundary.
    addressAdditions; array(:schema:`UnresolvedAddress <types.cats>`, addressAdditionsCount); Cosignatory address additions.
    addressDeletions; array(:schema:`UnresolvedAddress <types.cats>`, addressDeletionsCount); Cosignatory address deletions.
