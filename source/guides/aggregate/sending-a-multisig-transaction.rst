:orphan:

.. post:: 20 Aug, 2018
    :category: Multisig Account
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

Alice and Bob have separate :doc:`accounts <../../concepts/account>`.
They also want to have a shared account to buy groceries, so that if Bob is out shopping, he can buy groceries for both himself and Alice.

This shared account appears in |codename| as **1-of-2 multisig**.
Multisig accounts permit Alice and Bob sharing funds in a separate account, requiring only the signature from one of them to transact.

In this guide, you will send a transaction from a multisig account.

*************
Prerequisites
*************

- Finish :doc:`sending mosaics and messages between two accounts guide <../transfer/sending-a-transfer-transaction>`
- Finish :doc:`converting an account to multisig guide <../multisig/converting-an-account-to-multisig>`
- Know how to :doc:`create accounts <../account/creating-an-account>`
- A multisig :ref:`account with loaded with network currency <setup-creating-a-test-account>`
- A cosignatory :ref:`account with network currency <setup-creating-a-test-account>`

**************************************
Example #1: 1-of-2 signatures required
**************************************

Bob has finished filling the basket, and he is ready to pay.
The cashier's screen indicates that the cost of the purchase adds up to 10 |networkcurrency|.

Let's develop the piece of code present in Bob's mobile wallet that enables him to send multisig transactions.

1. Define the private key of Bob's account and the public key of the multisig account shared with Alice.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Define the following :ref:`TransferTransaction <transfer-transaction>`:

* Recipient: Grocery's address
* Message: sending 10 |networkcurrency|
* Mosaics: [10 |networkcurrency|]

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Wrap the TransferTransaction in an :ref:`AggregateTransaction <aggregate-transaction>`, attaching the multisig public key as the signer.

An AggregateTransaction is **complete** if before announcing it to the network, all the required cosigners have signed it.
In this case the multisig requires only one signature (1-of-2), so you can define the aggregate as complete.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. Sign and announce the transaction using Bob's account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

**************************************
Example #2: 2-of-2 signatures required
**************************************

What would have happened if the account was a **2-of-2 multisig** instead of a 1-of-2? As all required cosigners did not sign the transaction, it should be announced as :ref:`aggregate bonded <aggregate-transaction>` and cosigned later with Alice's account.

.. figure:: ../../resources/images/examples/multisig-transaction-2-of-2.png
    :align: center
    :width: 500px

    Sending an AggregateBondedTransaction

1. Open a new terminal to monitor the **AggregateBondedTransaction** status by passing the multisig's address.

.. code-block:: bash

    nem2-cli monitor aggregatebonded --address TAEG6L-KWXRA7-PSWUEE-ILQPG4-3V5CYZ-S5652T-JTUU

2. Modify the previous code, defining the transaction as  **bonded**.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateBonded.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateBonded.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

3. When an AggregateTransaction is bonded, Bob needs to lock at least ``10`` |networkcurrency| to prevent spamming the network.
Once all cosigners sign the transaction, the amount of |networkcurrency| locked becomes available again in Bob's account.
After :ref:`HashLockTransaction <hash-lock-transaction>` has been confirmed, :doc:`announce the AggregateBondedTransaction <../../concepts/aggregate-transaction>`.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateBonded.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateBonded.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

4. Once the transaction reaches the network, you will see it on the terminal where you are monitoring the aggregate bonded transactions added.
Then, :doc:`cosign the AggregateTransaction <../../cli>` with Alice's account. Use the transaction hash output from (2).

.. code-block:: bash

    nem2-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile alice
