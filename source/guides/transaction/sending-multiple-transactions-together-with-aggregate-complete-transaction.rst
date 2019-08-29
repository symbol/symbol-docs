:orphan:

.. post:: 11 Aug, 2018
    :category: Aggregate Transaction
    :excerpt: 1
    :nocomments:

######################################
Sending multiple transactions together
######################################

Send transactions to different accounts at the same time, using aggregate transactions.

**********
Background
**********

Dan wants to send mosaics to Alice and Bob. He could achieve this sending a couple of **TransferTransactions**.

However, to make sure Alice and Bob receive the funds at the same time, we are going to define an :ref:`AggregateTransaction <aggregate-transaction>`.

.. figure:: ../../resources/images/examples/aggregate-sending-payouts.png
    :align: center
    :width: 400px

    Sending transactions to different recipients atomically

*************
Prerequisites
*************

- Finish :doc:`sending mosaics and messages between two accounts guide <sending-a-transfer-transaction>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

**********************
Getting into some code
**********************

1. Define two :ref:`TransferTransaction <transfer-transaction>` with two different recipients, wrapping them in an :ref:`AggregateTransaction <aggregate-transaction>`.
As one private key can sign all the transactions in the aggregate, we can define the transaction as *complete*.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingMultipleTransactionsTogetherWithAggregateCompleteTransaction.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SendingMultipleTransactionsTogetherWithAggregateCompleteTransaction.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Sign and announce the transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingMultipleTransactionsTogetherWithAggregateCompleteTransaction.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SendingMultipleTransactionsTogetherWithAggregateCompleteTransaction.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

************
What's next?
************

Send an AggregateBondedTransaction following :doc:`creating an escrow contract <creating-an-escrow-contract-with-aggregate-bonded-transaction>` guide.
