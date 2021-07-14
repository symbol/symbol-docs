#################
Lock Hash Schemas
#################

.. note:: The `catbuffer schemas <https://github.com/symbol/catbuffer-schemas>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/symbol/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages. 

*********
Hash Lock
*********

.. _hash-lock-transaction:

HashLockTransaction
===================

**Alias**: LockFundsTransaction

Lock funds for a certain amount of blocks with a HashLockTransaction before sending an :ref:`AggregateBondedTransaction <aggregate-transaction>`.
This transaction prevents spamming the partial cache with transactions that never will complete.
The lock duration is allowed to lie up to ``2 days``, being this value :ref:`configurable per network <config-network-properties>`.

After enough funds are locked (``10`` |networkcurrency| by default), the AggregateTransaction can be announced and added into the partial transactions cache.

.. note:: It's not necessary to sign the aggregate and its HashLockTransaction with the same account. For example, if Bob wants to announce an aggregate and does not have enough funds to announce a HashLockTransaction, he can ask Alice to send the hash lock funds transaction for him by sharing the signed AggregateTransaction hash.

Upon completion of the aggregate, the locked funds become available in the account that signed the initial HashLockTransaction.
If the AggregateBondedTransaction duration is reached without being signed by all cosignatories, the locked amount becomes a reward collected by the block harvester at the height where the lock expires.

**Version**: 0x01

**EntityType**: 0x4148

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaic; :ref:`UnresolvedMosaic <unresolved-mosaic>`; Locked mosaic.
    duration; :schema:`BlockDuration <types.cats>`; Number of blocks for which a lock should be valid.
    hash; :schema:`Hash256 <types.cats>`; AggregateBondedTransaction hash that has to be confirmed before unlocking the mosaics.
