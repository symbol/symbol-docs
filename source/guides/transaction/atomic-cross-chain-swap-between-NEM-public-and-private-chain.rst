:orphan:

.. post:: 18 Aug, 2018
    :category: Cross-Chain Swaps
    :excerpt: 1
    :nocomments:

############################################################
Atomic cross-chain swap between NEM public and private chain
############################################################

:doc:`Cross-chain swaps <../../concepts/cross-chain-swaps>` enable trading tokens between different blockchains, without using an intermediary party in the process.

This exchange of tokens will succeed atomically. If some of the actors do not agree, each of them will receive the locked tokens back after a determined amount of time.

When talking about tokens in NEM, we are actually referring to :doc:`mosaics <../../concepts/mosaic>`. Catapult enables atomic swaps through :ref:`secret lock <secret-lock-transaction>` / :ref:`secret proof transaction <secret-proof-transaction>` mechanism.

**********
Background
**********

Alice and Bob want to exchange **10 alice:token for 10 bob:token**. The problem is that they are not in the same blockchain: alice:token is defined in NEM public chain, whereas bob:token is only present in a private chain using catapult technology.

.. note:: These two chain shares are SDK. You could implement atomic cross-chain swap between NEM public chain and other blockchains if they permit the secret lock/proof mechanism.

One non-atomic solution could be:

1) Alice sends 10 alice:token to Bob (private chain)
2) Bob receives the transaction
3) Bob sends 10 bob:token to Alice (public chain)
4) Alice receives the transaction

However, they do not trust each other that much. Bob could decide his mosaics to Alice. Following this guide, you will see how to make this swap possible, trusting technology.

*************
Prerequisites
*************

- Finish :doc:`creating an escrow with aggregate bonded transaction guide <creating-an-escrow-with-aggregate-bonded-transaction>`
- NEM2-SDK
- A text editor or IDE

************************
Let's get into some code
************************

Trading tokens directly from one blockchain to the other is not possible, due to the technological differences between them.

In case of NEM public and private chain, the same mosaic name could have a different definition and distribution, or even not exist. Between Bitcoin and NEM, the difference is even more evident, as each blockchain uses an entirely different technology.

Instead of transferring tokens between different chains, the trade will be performed inside each chain. The Secret proof / secret lock mechanism guarantees the token swap occurs atomically.

.. figure:: ../../resources/images/examples/cross-chain-swap.png
        :align: center
        :width: 700px

        Atomic cross-chain swap between public and private network

For that reason, each actor involved should have at least one account in each blockchain.

.. example-code::

   .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :caption: |using-secret-lock-for-atomic-crosschain-swap-transactions-ts|
        :language: typescript
        :lines:  37-44

1. Alice picks a random number, called ``proof``. Then, applies a SHA512 hash algorithm to it, obtaining the ``secret``.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :caption: |using-secret-lock-for-atomic-crosschain-swap-transactions-ts|
        :language: typescript
        :lines:  48-51

2. Alice creates a secret lock transaction, including:

* The mosaic and amount to be sent: 10 alice:token
* The recipient address: Bob's address in private chain
* The secret: Hashed proof.
* The amount of time in which funds can be unlocked: 96h
* The network: Private Chain

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :caption: |using-secret-lock-for-atomic-crosschain-swap-transactions-ts|
        :language: typescript
        :lines:  54-61

Once announced, this transaction will remain locked until someone discovers the proof that matches the secret. If after a determined period of time no one proved it, the locked funds will be returned to Alice.

3. Alice signs and announces TX1 to the private chain.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :caption: |using-secret-lock-for-atomic-crosschain-swap-transactions-ts|
        :language: typescript
        :lines:  64-67

4. Alice can tell Bob the secret. Also, he could retrieve it directly from the chain.

5. Bob creates a secret lock transaction TX2, which contains:

* The mosaic and amount to be sent: 10 bob:token
* A recipient address: Alice's address in public chain
* The secret that should be achieved to unlock the funds.
* The amount of time in which funds can be unlocked: 84h
* The network: Public Chain

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :caption: |using-secret-lock-for-atomic-crosschain-swap-transactions-ts|
        :language: typescript
        :lines:  70-77


.. note::  The amount of time in which funds can be unlocked should be a smaller time frame than TX1's. Alice knows the secret, so Bob must be sure he will have some time left after Alice releases the secret.

6. Once signed, Bob announces TX2 to the public chain.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :caption: |using-secret-lock-for-atomic-crosschain-swap-transactions-ts|
        :language: typescript
        :lines:  80-83

7. Alice can announce the secret proof transaction TX3 on the public network. This transaction defines the encrypting algorithm used, the original proof and the secret. It will unlock TX2 transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :caption: |using-secret-lock-for-atomic-crosschain-swap-transactions-ts|
        :language: typescript
        :lines:  86-96

8. The proof is revealed in the public chain. Bob does the same by announcing a secret proof transaction TX4 in the private chain.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :caption: |using-secret-lock-for-atomic-crosschain-swap-transactions-ts|
        :language: typescript
        :lines:  99-

It is at that moment when Bob unlocks TX1 funds, and the atomic cross-chain swap concludes.

*************
Is it atomic?
*************

Consider the following scenarios:

A. Bob does not want to announce TX2. Alice will receive her funds back after 94 hours.
B. Alice does not want to swap tokens by signing Tx3. Bob will receive his refund after 84h. Alice will unlock her funds as well after 94 hours.
C. Alice signs and announces TX3, receiving Bob's funds. Bob will have time to sign TX4, as Tx1 validity is longer than Tx2.

The process is atomic but should be completed with lots of time before the deadlines.

.. |using-secret-lock-for-atomic-crosschain-swap-transactions-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts" target="_blank">View Code</a>