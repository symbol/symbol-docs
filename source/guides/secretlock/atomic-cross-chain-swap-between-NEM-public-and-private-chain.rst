.. post:: 18 Aug, 2018
    :category: Cross-Chain Swaps
    :excerpt: 1
    :nocomments:

########################################################
Atomic cross-chain swap between public and private chain
########################################################

Trade tokens between different blockchains without using an intermediary party in the process.

********
Use case
********

Alice and Bob want to exchange **10 alice.tokens for 10 bob.tokens**.
The problem is that they are not in the same network: alice.token is defined in a private chain using |codename| tech, whereas bob.token is only present in |codename|'s public chain.

One non-atomic solution could be:

1. Alice sends 10 alice tokens to Bob (private chain).
2. Bob receives the transaction.
3. Bob sends 10 bob tokens to Alice (public chain).
4. Alice receives the transaction.

However, they do not trust each other that much.
As you may have noticed, Bob could keep Alice's tokens if he opts not to perform 3.

This guide will show you how to define a secure way to exchange tokens between different participants and networks.

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.
- All participant involved in the swap must own at least one account in each blockchain:

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

   .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

- Alice account in the private chain must own at least 10 alice.tokens.
- Bob account in the public chain must own at least 10 bob.tokens.
- Both accounts should have enough network currency to pay for the transaction fees.

*************************
Method #01: Using the SDK
*************************

1. Alice generates a random set of bytes called ``proof``. The proof should have a size between ``10`` and ``1000`` bytes.
Then, applies a **SHA3-256** algorithm to it, obtaining the ``secret``.

2. Alice hashes the obtained proof with one of the :ref:`available algorithms <lockhashalgorithm>` to generate the ``secret``.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Alice defines the :ref:`secretlocktransaction` **TX1**:

.. csv-table::
    :header: "TX1 Property", "Value"
    :widths: 20 80
    :delim: ;

    Type; SecretLockTransaction
    Mosaic; 10 ``00D3378709746FC4`` (alice token)
    Recipient; Bob's address (Private Chain)
    Algorithm; SHA3-256
    Duration; 96 h
    Secret; SHA3-256(proof)
    Network; Private Chain

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

Once announced, this transaction will remain locked until someone discovers the proof that matches the secret. If no one unlocks it before the duration set is reached, the locked funds will be returned back to Alice.

4. Alice **announces TX1 to the private network** and **shares with Bob the secret**.

.. note:: Bob should retrieve the secret from the chain. It is Bob's responsibility to verify the secret correctness.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

    .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.js
        :language: javascript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

5. Bob announces the following **SecretLockTransaction TX2** to the **public network**

.. csv-table::
    :header: "TX2 Property", "Value"
    :widths: 20 80
    :delim: ;

    Type; SecretLockTransaction
    Mosaic; 10 ``10293DE77C684F71`` (bob token)
    Recipient; Alice's address (Public Chain)
    Algorithm; SHA3-256
    Duration; 84 h
    Secret; SHA3-256(proof)
    Network; Public Chain

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.ts
        :language: typescript
        :start-after:  /* start block 05 */
        :end-before: /* end block 05 */

    .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.js
        :language: javascript
        :start-after:  /* start block 05 */
        :end-before: /* end block 05 */

.. note::  The duration which funds can be unlocked should be a smaller time frame than TX1's. Alice knows the secret, so Bob must make sure he will have some time left after Alice releases the secret.

.. note:: To guarantee that TX1 cannot be :ref:`rolled back <rollbacks>`, Bob must wait until TX1 receives at least ``maxRollBackBlocks`` confirmations before announcing TX2.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.ts
        :language: typescript
        :start-after:  /* start block 06 */
        :end-before: /* end block 06 */

    .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.js
        :language: javascript
        :start-after:  /* start block 06 */
        :end-before: /* end block 06 */

6. Alice announces the :ref:`secretprooftransaction` **TX3** to the **public network**. This transaction defines the encrypting algorithm used, the original proof and the secret:

.. csv-table::
    :header: "TX3 Property", "Value"
    :widths: 20 80
    :delim: ;

    Type; SecretProofTransaction
    Recipient; Alice's address (Public Chain)
    Algorithm; SHA3-256
    Secret; SHA3-256(proof)
    Proof; proof
    Network; Public Chain

.. note:: To guarantee that TX2 cannot be :ref:`rolled back <rollbacks>`, Alice must wait until TX2 receives at least ``maxRollBackBlocks`` confirmations before announcing TX3.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.ts
        :language: typescript
        :start-after:  /* start block 07 */
        :end-before: /* end block 07 */

    .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.js
        :language: javascript
        :start-after:  /* start block 07 */
        :end-before: /* end block 07 */

7. Once TX3 is confirmed, the **proof** is revealed. **TX2 transaction is unlocked**, and Alice receives the locked funds.

8. Bob picks the proof and announces the **SecretProofTransaction TX4** to the **private network**, receiving the locked funds from **TX1**.

.. note:: To guarantee that TX3 cannot be :ref:`rolled back <rollbacks>`, Bob must wait until TX3 receives at least ``maxRollBackBlocks`` before announcing TX4.

.. csv-table::
    :header: "TX4 Property", "Value"
    :widths: 20 80
    :delim: ;

    Type; SecretProofTransaction
    Recipient; Bob's address (Private Chain)
    Algorithm; SHA3-256
    Secret; SHA3-256(proof)
    Proof; proof
    Network; Private Chain

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.ts
        :language: typescript
        :start-after:  /* start block 08 */
        :end-before: /* end block 08 */

    .. viewsource:: ../../resources/examples/typescript/secretlock/CrossChainSwap.js
        :language: javascript
        :start-after:  /* start block 08 */
        :end-before: /* end block 08 */

**********************
Is the process atomic?
**********************

The process is atomic but should be completed with lots of time before the deadlines:

* ✅ Bob does not want to announce TX2: Alice will receive her funds back after 94 hours.

* ✅ Alice does not announce TX3: Bob will receive his refund after 84h. Alice will unlock her funds as well after 94 hours.

* ⚠️Alice signs and announces TX3: Alice receives Bob's funds. Bob will have enough time to sign TX4 because TX1's duration is longer than TX2's.

* ⚠️A rollback rewrites the history: Alice and Bob have waited at least ``maxRollBackBlocks`` between each transaction confirmation.
