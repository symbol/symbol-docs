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

This transaction is required for node operators wanting to vote for finalized blocks.

Announce a VotingKeyLinkTransaction to associate a |BLS| public key with an account during a fixed period. An account can have active up to ``3`` different voting keys at the same time.

The recommended production setting is always to have registered at least  ``2`` keys with different ``endPoint`` values to ensure a key is registered after the first key expires.

**Version**: 0x01

**EntityType**: 0x4143

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    linkedPublicKey; :schema:`VotingKey <types.cats>`; Linked public key.
    startPoint; :schema:`FinalizationPoint <types.cats>`; Start finalization point. The value must be higher than the current finalization round.
    endPoint; :schema:`FinalizationPoint <types.cats>`; End finalization point. The value must be in the range between ``startPoint`` and ``startPoint`` + ``maxVotingKeyLifetime`` - ``minVotingKeyLifetime``.The lifetime properties are :ref:`configurable per network <config-network-properties>`.
    linkAction; :ref:`LinkAction <link-action>`; Account link action.

************
Vrf Key Link
************

.. _vrf-key-link-transaction:

VrfKeyLinkTransaction
=====================

This transaction is required for all harvesting eligible accounts.

Announce a VrfKeyLinkTransaction to link an account with a VRF public key.
The linked key is used to randomize block production and leader/participant selection.

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
