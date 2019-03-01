:orphan:

.. post:: 13 Aug, 2018
    :category: Aggregate Transaction
    :excerpt: 1
    :nocomments:

####################################################
Asking for mosaics with aggregate bonded transaction
####################################################

Ask an account to send you funds using an :ref:`aggregate bonded transaction <aggregate-transaction>`.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`
- Know how to :doc:`create accounts <../account/creating-and-opening-an-account>`

************************
Let’s get into some code
************************

.. figure:: ../../resources/images/examples/aggregate-asking-for-mosaics.png
    :align: center
    :width: 450px

    Asking for mosaics with an aggregate bonded transaction

Alice wants to ask Bob for ``20 cat.currency``.

1. Set up both Alice's and Bob's accounts.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-ts|
        :language: typescript
        :lines:  40-48

    .. literalinclude:: ../../resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-js|
        :language: javascript
        :lines:  40-48

2. Alice creates an aggregate bonded transaction with two inner transactions:

A. Define the first inner :ref:`transfer transaction <transfer-transaction>`:

* message: "message reason" (custom, but not empty)
* receiver: Bob address
* signer: Alice

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-ts|
        :language: typescript
        :lines:  51-56

    .. literalinclude:: ../../resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-js|
        :language: javascript
        :lines:  51-56

B. Define the second inner :ref:`transfer transaction <transfer-transaction>`:

* message: empty
* receiver: Alice address
* mosaics: 20 cat.currency
* signer: Bob

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-ts|
        :language: typescript
        :lines: 58-63

    .. literalinclude:: ../../resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-js|
        :language: javascript
        :lines: 58-63

3.Wrap the defined transactions in an aggregate bonded transaction:

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-ts|
        :language: typescript
        :lines:  66-72

    .. literalinclude:: ../../resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-js|
        :language: javascript
        :lines:  66-72

4. Alice signs the aggregate bonded transaction and announces it to the network, locking first ``10 cat.currency``.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-ts|
        :language: typescript
        :lines:  75-

    .. literalinclude:: ../../resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-js|
        :language: javascript
        :lines:  75-

.. note:: The :ref:`listener implementation changes <monitoring-transactions-client-side>` when used on the client side (e.g., Angular, React, Vue).

If all goes well, :doc:`Bob receives a notification <../transaction/monitoring-a-transaction-status>`.

************
What's next?
************

Bob has not cosigned the transaction yet. Consider reading :doc:`signing announced aggregate bonded transactions guide <signing-announced-aggregate-bonded-transactions>`.

After receiving the transaction, Bob signs the ``transaction hash`` and announces the cosignature signed transaction.

As the aggregate bonded transaction has all the cosignatures required, it will be included in a block.

.. |asking-for-mosaics-with-aggregate-bonded-transaction-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts" target="_blank">View Code</a>

.. |asking-for-mosaics-with-aggregate-bonded-transaction-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js" target="_blank">View Code</a>