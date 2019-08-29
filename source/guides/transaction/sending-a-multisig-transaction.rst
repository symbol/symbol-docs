:orphan:

.. post:: 20 Aug, 2018
    :category: Aggregate Transaction, Multisig Account
    :excerpt: 1
    :nocomments:

##############################
Sending a multisig transaction
##############################

Send a transaction involving a multisig account.

**********
Background
**********

.. figure:: ../../resources/images/examples/multisig-transaction-1-of-2.png
    :align: center
    :width: 500px

    Sending an AggregateCompleteTransaction

Alice and Bob have separate :doc:`accounts <../../concepts/account>`. They also want to have a shared account to buy groceries, so that if Bob is out shopping, he can buy groceries for both himself and Alice.

This shared account appears in NEM as **1-of-2 multisig**. Multisig accounts permit Alice and Bob sharing funds in a separate account, requiring only the signature from one of them to transact.

In this guide, you will send a transaction from a multisig account.

*************
Prerequisites
*************

- Finish :doc:`sending mosaics and messages between two accounts guide <sending-a-transfer-transaction>`
- Finish :doc:`converting an account to multisig guide <../account/converting-an-account-to-multisig>`
- Know how to :doc:`create accounts <../account/creating-and-opening-an-account>`
- A multisig :ref:`account with cat.currency <setup-getting-a-test-account>`
- A cosignatory :ref:`account with cat.currency <setup-getting-a-test-account>`

**********************
Getting into some code
**********************

1-of-2 signatures required
==========================

Bob has finished filling the basket, and he is ready to pay. The cashier's screen indicates that the cost of the purchase adds up to ``10 cat.currency``.

Let's develop the piece of code present in Bob's mobile wallet that enables him to send multisig transactions.

1. Define the private key of Bob's account and the public key of the multisig account shared with Alice.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Define the following :ref:`TransferTransaction <transfer-transaction>`:

* Recipient: Grocery's address
* Message: sending 10 cat.currency
* Mosaics: [``10 cat.currency``]

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Wrap the TransferTransaction in an :ref:`AggregateTransaction <aggregate-transaction>`, attaching the multisig public key as the signer.

An AggregateTransaction is **complete** if before announcing it to the network, all the required cosigners have signed it. In this case the multisig requires only one signature (1-of-2), so you can define the aggregate as complete.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. Sign and announce the transaction using Bob's account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

2-of-2 signatures required
==========================

What would have happened if the account was a **2-of-2 multisig** instead of a 1-of-2? As all required cosigners did not sign the transaction, it should be announced as :ref:`aggregate bonded <aggregate-transaction>` and cosigned later with Alice's account.

.. figure:: ../../resources/images/examples/multisig-transaction-2-of-2.png
    :align: center
    :width: 500px

    Sending an AggregateBondedTransaction

1. Open a new terminal to :doc:`monitor <../transaction/monitoring-a-transaction-status>` the **AggregateBondedTransaction**.

.. code-block:: bash

    nem2-cli monitor aggregatebonded --address <your-address-here>

2. Modify the previous code, defining the transaction as  **bonded**.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateBonded.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateBonded.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

3. When an AggregateTransaction is bonded, Bob needs to **lock at least 10 cat.currency** to prevent spamming the network. Once all cosigners sign the transaction, the amount of cat.currency locked becomes available again in Bob's account. After :ref:`HashLockTransaction <hash-lock-transaction>` has been confirmed, :doc:`announce the AggregateBondedTransaction <../../concepts/aggregate-transaction>`.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateBonded.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateBonded.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

4. :doc:`Cosign the AggregateTransaction <../../cli>` with Alice's account. Use the transaction hash output from the first step.

.. code-block:: bash

    nem2-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile alice
