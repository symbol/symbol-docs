.. post:: 20 Aug, 2018
    :category: Multisig Account
    :tags: SDK
    :excerpt: 1
    :nocomments:

##############################
Sending a multisig transaction
##############################

This guide will show you how to issue transactions from a multisig account.

********
Use case
********

.. figure:: ../../resources/images/examples/multisig-transaction-1-of-2.png
    :align: center
    :width: 500px

    Sending an AggregateCompleteTransaction

In this example, Alice and Bob are cosignatories of a **1-of-2 multisig** account.
This multisig configuration permits Alice and Bob to share funds in a separate account, requiring only the signature from one of them to transact.

Let's send 10  |networkcurrency| from the shared account to a third address.

*************
Prerequisites
*************

- Complete :doc:`sending mosaics and messages between two accounts <../transfer/sending-a-transfer-transaction>` guide.
- Complete :doc:`converting an account to multisig <../multisig/creating-a-multisig-account>` guide.
- Load the 1-of-2 multisig account with 10 |networkcurrency| units.
- Load Bob's account with enough |networkcurrency| units to pay for the transactions fees.

************************************
Method #01: Using the Desktop Wallet
************************************

1. Log in to one of the cosignatory accounts of the multisig.

2. Click on the “**transfer**” tab.

3. Enter the appropriate information for your transfer transaction. Select the multisig account from the dropdown menu of the “FROM” field. Enter the address of the recipient. Select the mosaic you desire to send and the amount. Click “**Send**”. Review the information on the popup and enter your wallet password. Click “**Confirm**”

.. figure:: ../../resources/images/screenshots/multisig-transaction-1.gif
    :align: center
    :width: 800px

4. If the multisig account has the "**minimum approval**" set to a number greater than 1, log in to another cosignatory account and :doc:`cosign the transaction <../aggregate/signing-announced-aggregate-bonded-transactions>`. Repeat this step until the minimum approval number is satisfied.

.. figure:: ../../resources/images/screenshots/add-signer-2.gif
    :align: center
    :width: 800px

5. Once the transaction is confirmed, you should see changes in the respective account balances.

*************************
Method #02: Using the SDK
*************************

1. Define the private key of one of the multisig cosignatories in a new variable. Then, define the public key of the shared account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/SendingAMultisigTransactionAggregateComplete.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Define the a :ref:`transfertransaction` as follows:

.. csv-table::
    :header: "Property", "Value"
    :widths: 20 80
    :delim: ;

    Type; TransferTransaction
    Recipient; Address of the account that will receive the transaction
    Mosaics; [10 |networkcurrency|]
    Message; sending 10 |networkcurrency|

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/SendingAMultisigTransactionAggregateComplete.java
        :language: java
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Wrap the TransferTransaction in an :ref:`aggregate-transaction`, attaching the multisig public key as the signer of the transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/SendingAMultisigTransactionAggregateComplete.java
        :language: java
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. Then, sign and announce the transaction with a cosignatory account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/SendingAMultisigTransactionAggregateComplete.java
        :language: java
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

5. The recipient of the transction should receive the funds once the funds are confirmed.

This time, the TransferTransaction was wrapped in an AggregateCompleteTransaction because just one account was required to announce the transaction.
If more than one cosignature is required to announce the transaction (e.g., the multisig is a 2-of-2 account), the transaction must be defined as aggregate **bonded**, and all other required multisig participants should cosign it in order to be confirmed.

1. To issue a transaction from a **2-of-2 multisig**, modify the previous code and define the transaction as bonded.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateBonded.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateBonded.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/SendingAMultisigTransactionAggregateBonded.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. When an AggregateTransaction is bonded, an account needs to lock at least ``10`` |networkcurrency| to prevent spamming the network.
Once all cosigners sign the transaction, the amount of |networkcurrency| locked becomes available again in the account that has locked the funds.
After :ref:`hashlocktransaction` has been confirmed, :doc:`announce the AggregateBondedTransaction <../../concepts/aggregate-transaction>` with a cosignatory.
In our case, we will sign the transaction with Bob's account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateBonded.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingAMultisigTransactionAggregateBonded.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/SendingAMultisigTransactionAggregateBonded.java
        :language: java
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Once the transaction reaches the network, every other multisig cosignatory required to reach quorum must cosign the transaction.

To cosign the transaction, you can use the :ref:`CLI <wallet-cli>` command ``transaction cosign``, replacing the transaction hash from (2).

.. code-block:: bash

    symbol-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile alice

4. The recipient should receive the funds once the transaction is cosigned by at least ``minApproval`` cosignatories. Besides, the account that has locked the 10 |networkcurrency| should have received the locked funds back.
