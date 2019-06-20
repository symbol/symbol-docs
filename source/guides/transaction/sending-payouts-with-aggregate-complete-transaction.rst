:orphan:

.. post:: 11 Aug, 2018
    :category: Aggregate Transaction
    :excerpt: 1
    :nocomments:

###################################################
Sending payouts with aggregate complete transaction
###################################################

Send transactions to different accounts atomically, using an :ref:`aggregate complete transaction <aggregate-transaction>`.

**********
Background
**********

Dan wants to send mosaics to Alice and Bob. He chooses to send an aggregate complete transaction, so both will receive the funds at the same time.


.. figure:: ../../resources/images/examples/aggregate-sending-payouts.png
    :align: center
    :width: 400px

    Sending transactions to different recipients atomically

*************
Prerequisites
*************

- Finish :doc:`sending a transfer transaction guide <sending-a-transfer-transaction>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

**********************
Getting into some code
**********************

1. Create two :ref:`transfer transaction <transfer-transaction>` with two different recipients, wrapping them in an :ref:`aggregate transaction <aggregate-transaction>`.

As one private key can sign all the transactions in the aggregate, define the aggregate as *complete*. That means that there is no need to lock funds to send the transaction. If valid, it will be accepted by the network.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingPayoutsWithAggregateCompleteTransaction.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SendingPayoutsWithAggregateCompleteTransaction.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Sign and announce the transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/SendingPayoutsWithAggregateCompleteTransaction.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/transaction/SendingPayoutsWithAggregateCompleteTransaction.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

************
What's next?
************

Send an aggregate bonded transaction following :doc:`creating an escrow with aggregate bonded transaction <creating-an-escrow-with-aggregate-bonded-transaction>` guide.
