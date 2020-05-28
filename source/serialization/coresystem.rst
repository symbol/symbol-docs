:orphan:

###################
Core System Schemas
###################

.. note:: The `catbuffer schemas <https://github.com/nemtech/catbuffer>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/nemtech/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages. 

***************
Voting Key Link
***************

.. _voting-key-link-transaction:

VotingKeyLinkTransaction
========================

Announce a VotingKeyLinkTransaction to associate a |BLS| public key with an account.
Required for node operators willing to vote finalized blocks.

**Version**: 0x01

**EntityType**: 0x4143

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    linkedPublicKey; :schema:`VotingKey <types.cats>`; Linked public key.
    linkAction; :ref:`LinkAction <link-action>`; Account link action.

************
Vrf Key Link
************

.. _vrf-key-link-transaction:

VrfKeyLinkTransaction
=====================

Announce a VrfKeyLinkTransaction to link an account with a VRF public key.
The key is used to randomize block production and leader/participant selection.
Required for all harvesting eligible accounts.

**Version**: 0x01

**EntityType**: 0x4243

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    linkedPublicKey; :schema:`Key <types.cats>`; Linked public key.
    linkAction; :ref:`LinkAction <link-action>`; Account link action.

.. |BLS| raw:: html

   <a href="https://en.wikipedia.org/wiki/Boneh%E2%80%93Lynn%E2%80%93Shacham" target="_blank">BLS</a>
