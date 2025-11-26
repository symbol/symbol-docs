.. post:: 15 Aug, 2018
    :category: Aggregate Transaction
    :tags: SDK
    :excerpt: 1
    :nocomments:

#####################################################
Cosigning aggregate bonded transactions automatically
#####################################################

Create a bot to cosign automatically transactions that require your account's signature.

*************
Prerequisites
*************

- Complete :doc:`creating an escrow contract<creating-an-escrow-contract-with-aggregate-bonded-transaction>` guide.

******************
Developing the bot
******************

1. Create a function to cosign any **AggregateBondedTransaction**.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactionsAutomatically.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactionsAutomatically.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/CosigningAggregateBondedTransactionsAutomatically.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create a new **Listener** to get notified every time a new **AggregateBondedTransaction** requires the signature of your account.

3. Open the connection. You only need to open the connection once and then connect to all desired channels.

4. Start listening for new transactions, subscribing to the ``aggregateBondedAdded`` channel using your account's address.

.. note:: To automatically sign aggregate bonded transactions that must be signed by multisig cosignatories, refer to the multisig address instead.See :ref:`how to get multisig accounts where an account is cosignatory<guide-get-multisig-account-info>`.

5. For each received transaction, check if you have signed it.
At this point, you might want to do some extra checks, like verifying the contents of the transaction.
Cosign each pending **AggregateBondedTransaction** using the previously created function.

6. Announce ``CosignatureSignedTransaction`` to the network using the ``TransactionHttp`` repository.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactionsAutomatically.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactionsAutomatically.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/CosigningAggregateBondedTransactionsAutomatically.java
        :language: java
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

************
What's next?
************

Extend the previous function to cosign transactions if they follow some constraints. For example, adapt your bot to only cosign aggregate transactions matching the following conditions:

* The aggregate has **two inner transactions**.
* The inner transactions must be **transfer transactions.**
* The transaction sending funds must have **yourself as the signer**.
* The transaction sending funds should have **only one mosaic**, being this **less than** 100 |networkcurrency|.

Here you have a possible implementation:

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactionsAutomaticallyWithConstraints.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/CosigningAggregateBondedTransactionsAutomaticallyWithConstraints.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/CosigningAggregateBondedTransactionsAutomaticallyWithConstraints.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */
