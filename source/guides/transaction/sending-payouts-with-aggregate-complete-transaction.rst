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

Dan wants to send mosaics to Alice and Bob.

.. figure:: ../../resources/images/examples/aggregate-sending-payouts.png
    :align: center
    :width: 450px

    Sending transactions to different recipients atomically

He chooses to send an aggregate complete transaction, so both will receive the funds at the same time.

*************
Prerequisites
*************

- Finish :doc:`sending a transfer transaction guide <sending-a-transfer-transaction>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

*************************
Let's get into some code
*************************

1. Dan creates two :ref:`transfer transaction <transfer-transaction>` with two different recipients, wrapping them in an :ref:`aggregate transaction <aggregate-transaction>`.

As one private key can sign all the transactions in the aggregate, define the aggregate as *complete*. That means that there is no need to lock funds to send the transaction. If valid, it will be accepted by the network.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingPayoutsWithAggregateCompleteTransaction.ts
        :caption: |sending-a-payouts-with-aggregate-complete-transaction-ts|
        :language: typescript
        :lines:  32-54

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingPayoutsWithAggregateCompleteTransaction.js
        :caption: |sending-a-payouts-with-aggregate-complete-transaction-js|
        :language: javascript
        :lines:  32-54

2. Sign and announce the transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingPayoutsWithAggregateCompleteTransaction.ts
        :caption: |sending-a-payouts-with-aggregate-complete-transaction-ts|
        :language: typescript
        :lines:  57-

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingPayoutsWithAggregateCompleteTransaction.js
        :caption: |sending-a-payouts-with-aggregate-complete-transaction-js|
        :language: javascript
        :lines:  57-

************
What's next?
************

Send an aggregate bonded transaction following :doc:`creating an escrow with aggregate bonded transaction <creating-an-escrow-with-aggregate-bonded-transaction>` guide.

.. |sending-a-payouts-with-aggregate-complete-transaction-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SendingPayoutsWithAggregateCompleteTransaction.ts" target="_blank">View Code</a>

.. |sending-a-payouts-with-aggregate-complete-transaction-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/transaction/SendingPayoutsWithAggregateCompleteTransaction.js" target="_blank">View Code</a>