:orphan:

###################
Lock Secret Schemas
###################

.. note:: The `catbuffer schemas <https://github.com/nemtech/catbuffer>`_ repository defines how each transaction type should be serialized. In combination with the `catbuffer-generators <https://github.com/nemtech/catbuffer-generators>`_ project, developers can generate builder classes for a given set of programming languages. 

*****************
Lock Secret Types
*****************

.. _lock-hash-algorithm:

LockHashAlgorithm
=================

The list of supported hashing algorithms.

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0 (Op_Sha3_256); Proof is hashed using SHA3-256.
    1 (Op_Hash_160); Proof is hashed twice: first with SHA-256 and then with RIPEMD-160 (bitcoin's OP_HASH160).
    2 (Op_Hash_256); Proof is hashed twice with SHA-256 (bitcoin's OP_HASH256).

***********
Secret Lock
***********

.. _secret-lock-transaction:

SecretLockTransaction
=====================

Use a SecretLockTransaction to transfer mosaics between two accounts.
The mosaics sent remain locked until a valid :ref:`SecretProofTransaction <secret-proof-transaction>` unlocks them.

The maximum number of blocks the lock can lie up to is ``30 days``, being this parameter :ref:`configurable per network <config-network-properties>`.
If the transaction duration is reached without being proved, the locked amount goes back to the initiator of the SecretLockTransaction.

**Version**: 0x01

**EntityType**: 0x4152

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    recipientAddress; :schema:`UnresolvedAddress <types.cats>`; Address that receives the funds once unlocked.
    secret; :schema:`Hash256 <types.cats>`; Proof hashed.
    mosaic; :ref:`UnresolvedMosaic <unresolved-mosaic>`; Locked mosaic.
    duration; :schema:`BlockDuration <types.cats>`; Number of blocks for which a lock should be valid. If reached, the mosaics will be returned to the initiator.
    hashAlgorithm ; :ref:`LockHashAlgorithm<lock-hash-algorithm>`; Algorithm used to hash the proof.

************
Secret Proof
************

.. _secret-proof-transaction:

SecretProofTransaction
======================

Use a SecretProofTransaction to unlock :ref:`SecretLockTransactions <secret-lock-transaction>`.

The transaction must prove knowing the *proof* that unlocks the mosaics.

**Version**: 0x01

**EntityType**: 0x4252

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    recipientAddress; :schema:`UnresolvedAddress <types.cats>`; Address that receives the funds once unlocked.
    secret; :schema:`Hash256 <types.cats>`; Proof hashed.
    proofSize; uint16; Proof size in bytes.
    hashAlgorithm ; :ref:`LockHashAlgorithm<lock-hash-algorithm>`; Algorithm used to hash the proof.
    proof; array(byte, proofSize); Original random set of bytes.

