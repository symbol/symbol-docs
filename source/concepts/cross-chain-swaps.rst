#################
Cross-Chain Swaps
#################

A cross-chain swap enables **trading tokens** across **different blockchains**, without using an intermediary party (e.g. an exchange service) in the process.

.. figure:: ../resources/images/examples/cross-chain-swap.png
    :align: center
    :width: 400px

    Atomic cross-chain swap between public and private network

|codename| follows the **Hashed TimeLock Contract** (HTLC) protocol to create a trustless environment for the decentralized exchange of assets.

HTLC uses *hashlocks* and *timelocks* to reduce the counterparty risk.
Every participant in the exchange of assets needs to present proof (hashlock) to complete it.
Failing to do so, the locked assets are released back to each original owner after the timelock expires.

A thorough explanation of the protocol can be found on the `Bitcoin Wiki <https://en.bitcoin.it/wiki/Hashed_Timelock_Contracts>`_.

********
Protocol
********

Alice and Bob want to exchange **10 alice tokens for 10 bob tokens**.
The problem is that they are not in the same blockchain: alice token is defined in |codename|'s public chain, whereas bob token is only present in a private chain using |codename| tech.

.. note:: |codename|'s private and future public chain share the SDK. You could implement atomic cross-chain swap between blockchains that use different technologies if they permit the :ref:`secret lock/proof mechanism <lock-hash-algorithm>`.

.. mermaid:: ../resources/diagrams/cross-chain-swap.mmd
    :caption: Atomic cross-chain swap sequence diagram
    :align: center

1. Alice generates a random set of bytes called ``proof``.
The proof should have a size between ``10`` and ``1000`` bytes.

2. Alice hashes the obtained proof with one of the :ref:`available algorithms <lock-hash-algorithm>` to generate the ``secret``.

3. Alice defines the :ref:`SecretLockTransaction <secret-lock-transaction>` **TX1**:

* Mosaic: 10 alice token
* Recipient: Bob's address (Private Chain)
* Algorithm: h
* Secret:  h(proof)
* Duration: 96h
* Network: Private Chain

4. Alice **announces TX1 to the private network** and **shares with Bob the secret**.

5. Bob defines announces the following **SecretLockTransaction TX2** to the **public network**:

* Mosaic: 10 bob token
* Recipient: Alice's address (Public Chain)
* Algorithm: h
* Secret:  h(proof)
* Duration: 84h
* Network: Public Chain

.. note::  The amount of time in which funds can be unlocked should be a smaller time frame than TX1's. Alice knows the secret, so Bob must be sure he will have some time left after Alice releases the secret.

6. Alice announces the :ref:`SecretProofTransaction <secret-proof-transaction>` **TX3** to the **public network**. This transaction defines the encrypting algorithm used, the original proof and the secret.

7. Once TX3 is confirmed, the **proof** is revealed. **TX2 transaction is unlocked** and Alice receives the locked funds.

8. Bob picks the proof and announces the **SecretProofTransaction TX4** to the **private network**, receiving the locked funds from **TX1**.

******
Guides
******

.. postlist::
    :category: Cross-Chain Swaps
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

*******************
Transaction schemas
*******************

.. _secret-lock-transaction:

SecretLockTransaction
=====================

Use a SecretLockTransaction to transfer mosaics between two accounts. The specified mosaics remain locked until a valid :ref:`SecretProofTransaction <secret-proof-transaction>` unlocks them.

The maximum number of blocks the lock can lie up to is ``30 days``, being this parameter :ref:`configurable per network <config-network-properties>`.
If the transaction duration is reached without being proved, the locked amount goes back to the initiator of the SecretLockTransaction.

**Version**: 0x01

**EntityType**: 0x4152

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    secret; :schema:`Hash256 <types.cats#L12>`; Proof hashed.
    mosaic; :ref:`UnresolvedMosaic <unresolved-mosaic>`; Locked mosaic.
    duration; :schema:`BlockDuration <types.cats#L2>`; Number of blocks for which a lock should be valid. If reached, the mosaics will be returned to the initiator.
    hashAlgorithm ; :ref:`LockHashAlgorithm<lock-hash-algorithm>`; Algorithm used to hash the proof.
    recipientAddress; :schema:`UnresolvedAddress <types.cats#L10>`; Address that receives the funds once unlocked.

.. _secret-proof-transaction:

SecretProofTransaction
======================

Use a SecretProofTransaction to unlock :ref:`SecretLockTransactions <secret-lock-transaction>`.

The transaction must prove that it knows the *proof* that unlocks the mosaics.

**Version**: 0x01

**EntityType**: 0x4252

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    secret; :schema:`Hash256 <types.cats#L12>`; Proof hashed.
    proofSize; uint16; Proof size in bytes.
    hashAlgorithm ; :ref:`LockHashAlgorithm<lock-hash-algorithm>`; Algorithm used to hash the proof.
    recipientAddress; :schema:`UnresolvedAddress <types.cats#L10>`; Address that receives the funds once unlocked.
    proof; array(byte, proofSize); Original random set of bytes.

.. _lock-hash-algorithm:

LockHashAlgorithm
=================

The list of supported hashing algorithms.

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0 (Op_Sha3_256); Proof is hashed using SHA3-256.
    1 (Op_Keccak_256); Proof is hashed using Keccak (ETH compatibility).
    2 (Op_Hash_160); Proof is hashed twice: first with SHA-256 and then with RIPEMD-160 (bitcoin's OP_HASH160).
    3 (Op_Hash_256); Proof is hashed twice with SHA-256 (bitcoin's OP_HASH256).

Continue: :doc:`Cryptography <cryptography>`.
