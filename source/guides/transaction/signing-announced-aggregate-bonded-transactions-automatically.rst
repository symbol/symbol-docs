:orphan:

.. post:: 15 Aug, 2018
    :category: Aggregate Transaction
    :excerpt: 1
    :nocomments:

#############################################################
Signing announced aggregate bonded transactions automatically
#############################################################

Sign automatically transactions pending to be cosigned.

*************
Prerequisites
*************

- Finish :doc:`creating an escrow with aggregate bonded transaction guide <creating-an-escrow-with-aggregate-bonded-transaction>`
- Have received some aggregate bonded transaction
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

**********************
Getting into some code
**********************

1. Create a function to cosign any aggregate bonded transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create a new listener to get notified every time a new aggregate bonded transaction requires the signature of your account.

3. Open the connection. You only need to open the connection once and then connect to all desired channels.

4. Start listening for new transactions, subscribing to the ``aggregateBondedAdded`` channel using your account's address.

.. note:: To automatically sign aggregate bonded transactions that must be signed by multisig cosignatories, refer to the multisig address instead. See :ref:`how to get multisig accounts where an account is cosignatory<guide-get-multisig-account-info>`.

5. For each received transaction, check if you have not already signed it.  Cosign each pending aggregate bonded transaction using the previously created function.

6. Announce ``CosignatureSignedTransaction`` to the network using the ``TransactionHttp`` repository.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

************
What's next?
************

Extend the previous function for signing transactions if they follow some constraints.

* Aggregate transactions with two inner transactions.
* Two inner transactions must be transfer transactions.
* The transaction sending funds must have yourself as the signer.
* The transaction sending funds should have only one mosaic, being this less than ``100 cat.currency``.

Try it yourself! Here you have a possible implementation:

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomaticallyWithConstraints.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */
