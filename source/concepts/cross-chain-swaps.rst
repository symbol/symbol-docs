#################
Cross-Chain Swaps
#################

A cross-chain swap enables **trading tokens** across **different blockchains**, without using an intermediary party (eg. an exchange service) in the process.

.. figure:: ../resources/images/examples/cross-chain-swap.png
    :align: center
    :width: 500px

    Atomic cross-chain swap between public and private network

In order to create a trustless environment for an exchange, a specific transaction type is required that is commonly referred to as **Hashed TimeLock Contract** (HTLC). Two additional components characterize this transaction type: *hashlocks* and *timelocks*. A thorough explanation can be found on the `Bitcoin Wiki <https://en.bitcoin.it/wiki/Hashed_Timelock_Contracts>`_.

In other words, to reduce counterparty risk, the receiver of a payment needs to present a proof for the transaction to execute. Failing to do so, the locked funds are released after the deadline is reached, even if just one actor does not agree. 
The figure below illustrates the cross-chain swap protocol.

.. figure:: ../resources/images/diagrams/cross-chain-swap-cycle.png
    :align: center
    :width: 700px

    Atomic cross-chain swap sequence diagram

When talking about tokens in NEM, we are actually referring to :doc:`mosaics <../../concepts/mosaic>`. Catapult enables atomic swaps through :ref:`secret lock <secret-lock-transaction>` / :ref:`secret proof transaction <secret-proof-transaction>` mechanism.

******
Guides
******

.. postlist::
    :category: cross-chain-swaps
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

*******
Schemas
*******

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_ . Public network configuration may differ.

.. _secret-lock-transaction:

SecretLockTransaction
=====================

Use a secret lock transaction to start the cross-chain swap:

1. Define the mosaic units you want to transfer to a determined account.

2. Generate a random set of bytes called ``proof``.

3. Hash the obtained proof with one of the available algorithms to generate the ``secret``.

4. Select during how much time the mosaics will be locked and announce the transaction.

The specified mosaics remain locked until a valid :ref:`Secret Proof Transaction <secret-proof-transaction>` unlocks them.

If the transaction duration is reached without being proved, the locked amount goes back to the initiator of the secret lock transaction.

**Version**: 0x01

**Entity type**: 0x4152

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    mosaic; :ref:`Mosaic<mosaic>`; Locked mosaic.
    duration; uint64; The lock duration. If reached, the mosaics will be returned to the initiator.
    hashAlgorithm ; :ref:`LockHashAlgorithm<lock-hash-algorithm>`; The algorithm used to hash the proof.
    secret; 64 bytes (binary);  The proof hashed.
    recipient; 25 bytes (binary); The address who will receive the funds once unlocked.

.. _secret-proof-transaction:

SecretProofTransaction
======================

Use a secret proof transaction to unlock :ref:`secret lock transactions <secret-lock-transaction>`.

The transaction must prove that knows the *proof* that unlocks the mosaics.

**Version**: 0x01

**Entity type**: 0x4252

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    hashAlgorithm ; :ref:`LockHashAlgorithm<lock-hash-algorithm>`; The algorithm used to hash the proof.
    secret; 64 bytes (binary); The proof hashed.
    proofSize; uint16; The proof size in bytes.
    proof; array(byte, proofSize); The original proof.

.. _lock-hash-algorithm:

LockHashAlgorithm
=================

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0 (SHA_3); Input is hashed using Sha3.
    1 (Keccak); Input is hashed using Keccak.
    2 (Hash_160); Input is hashed twice: first with Sha-256 and then with RIPEMD-160.
    3 (Hash_256); Input is hashed twice with Sha-256.