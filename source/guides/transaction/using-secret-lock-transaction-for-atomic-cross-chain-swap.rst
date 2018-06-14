:orphan:

##########################################################
Using secret lock transaction for atomic cross-chain swap
##########################################################

Exchange tokens between different blockchains atomically using :ref:`secret lock <secret-lock-transaction>` and :ref:`secret proof transactions <secret-proof-transaction>`.

**********
Background
**********

Alice and Bob want to exchange 10 alice:token for 10 bob:token. The problem is that they are not in the same blockchain: Alice uses NEM public network, whereas Bob is using MIJIN private network.

One non-atomic solution could be:

1) Alice sends to Bob 10 alice:token in PUBLIC chain
2) Bob receives the transaction
3) Bob sends to Alice 10 bob:token in PRIVATE chain
4) Alice receives the transaction

But they don't trust each other that much. Ideally, they want to exchange their tokens between different blockchains atomically.

Following this guide, you will swap tokens between different blockchain platforms atomically using secret lock transaction.

.. figure:: ../../resources/images/guides-transactions-atomic-cross-chain-swap.png
    :align: center
    :width: 700px

    Atomic cross-chain trading between public and private network


.. note:: Mijin and NEM share SDK. The example will work with other blockchain platforms if implements Secret Lock / Secret Proof transactions mechanism.

*************
Prerequisites
*************

- Finish :doc:`creating an escrow with aggregate bonded transaction guide <creating-an-escrow-with-aggregate-bonded-transaction>`
- NEM2-SDK
- A text editor or IDE

*************************
Let's get into some code
*************************

Alice picks a random number, which we call ``proof``. Applies SHA512 hash algorithm to it, obtaining the ``secret``.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :language: typescript
        :lines:  28-36

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.java
        :language: java
        :lines:  46-55

    .. literalinclude:: ../../resources/examples/javascript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.js
        :language: javascript
        :lines:  32-41

Now, Alice creates a secret lock transaction, which contains:

* The mosaic and amount to be sent: 10 alice:token
* A recipient address: Bob's address in public chain
* The secret: Hashed proof.
* The amount of time while funds can be unlocked: 96h

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :language: typescript
        :lines:  38-47

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.java
        :language: java
        :lines:  57-66

    .. literalinclude:: ../../resources/examples/javascript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.js
        :language: javascript
        :lines:  43-52

Alice signs and announces TX1 to NEM network.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :language: typescript
        :lines:  49-55

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.java
        :language: java
        :lines:  68-71

    .. literalinclude:: ../../resources/examples/javascript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.js
        :language: javascript
        :lines:  54-60

Alice can tell Bob the secret, or he can retrieve it directly from the recently announced transaction.

Bob creates a secret lock transaction TX2, which contains:

* The mosaic and amount to be sent: 10 bob:token
* A recipient address: Alice's address in private chain
* The secret that should be achieved to unlock the funds.
* The amount of time while funds can be unlocked: 84h

.. note::  The amount of time while funds can be unlocked should be smaller time frame than TX1's. Alice knows the secret, so Bob must be sure, he’ll have some time left after Alice will release the secret.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :language: typescript
        :lines:  58-72

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.java
        :language: java
        :lines:  73-86

    .. literalinclude:: ../../resources/examples/javascript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.js
        :language: javascript
        :lines:  63-77

Once signed, Bob announces TX2 to MIJIN network.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :language: typescript
        :lines:  74-79

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.java
        :language: java
        :lines:  88-90

    .. literalinclude:: ../../resources/examples/javascript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.js
        :language: javascript
        :lines:  79-84

Now, Alice can announce a secret proof transaction in MIJIN network, selecting encrypting algorithm, the original proof and secret used.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :language: typescript
        :lines:  81-95

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.java
        :language: java
        :lines:  92-102

    .. literalinclude:: ../../resources/examples/javascript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.js
        :language: javascript
        :lines:  86-100

If all goes well, Alice unlocks TX2 funds, and the proof is revealed. Bob does the same by announcing a secret proof transaction TX4  in NEM blockchain.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.ts
        :language: typescript
        :lines:  97-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.java
        :language: java
        :lines:  104-

    .. literalinclude:: ../../resources/examples/javascript/transaction/UsingSecretLockForAtomicCrosschainSwapTransactions.js
        :language: javascript
        :lines:  102-

At that moment, Bob unlocks TX1 funds, and the atomic cross-chain swap concludes.

*************
Is it atomic?
*************

Consider the following scenarios:

A) Bob doesn't want to announce Tx2. Alice will receive his funds back after 94 hours.
B) Alice does not want to swap tokens by signing Tx3. Bob will receive his refund after 84h. Alice will unlock as well her funds after 94 hours.
C) Alice signs and announces Tx3, receiving Bob's funds. Bob will have time to sign Tx4, as Tx1 validity is longer than Tx2.

The process is atomic but should be completed with lots of time before the deadlines.