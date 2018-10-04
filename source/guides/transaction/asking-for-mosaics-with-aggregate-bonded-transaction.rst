:orphan:

.. post:: 13 Aug, 2018
    :category: aggregate-transaction
    :excerpt: 1
    :nocomments:

####################################################
Asking for mosaics with aggregate bonded transaction
####################################################

Ask an account to send you funds using an :ref:`aggregate bonded transaction <aggregate-transaction>`.

*************
Prerequisites
*************

- Finish :doc:`creating an escrow with aggregate bonded transaction guide <creating-an-escrow-with-aggregate-bonded-transaction>`
- A text editor or IDE
- An account with XEM

************************
Let’s get into some code
************************

.. figure:: ../../resources/images/guides-transactions-asking-for-mosaics.png
    :align: center
    :width: 450px

    Asking for mosaics with an aggregate bonded transaction

Alice wants to ask Bob for 20 XEM. 

1. Set up both Alice's and Bob's accounts.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-ts|
        :language: typescript
        :lines:  38-46

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/AskingForMosaicsWithAggregateBondedTransaction.java
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-java|
        :language: java
        :lines:  30-52

    .. literalinclude:: ../../resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-js|
        :language: javascript
        :lines:  39-47

2. Alice creates an aggregate bonded transaction with two inner transactions:

A. Define the first inner :ref:`transfer transaction <transfer-transaction>`:

* message: "message reason" (custom, but not empty)
* receiver: Bob address
* signer: Alice

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-ts|
        :language: typescript
        :lines:  49-54

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/AskingForMosaicsWithAggregateBondedTransaction.java
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-java|
        :language: java
        :lines:  52-59

    .. literalinclude:: ../../resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-js|
        :language: javascript
        :lines:  50-55

B. Define the second inner :ref:`transfer transaction <transfer-transaction>`:

* message: empty
* receiver: Alice address
* mosaics: 20 XEM
* signer: Bob

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-ts|
        :language: typescript
        :lines: 56-61

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/AskingForMosaicsWithAggregateBondedTransaction.java
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-java|
        :language: java
        :lines:  60-67

    .. literalinclude:: ../../resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-js|
        :language: javascript
        :lines:  57-62

3.Wrap the defined transactions in an aggregate bonded transaction:

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-ts|
        :language: typescript
        :lines:  64-70

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/AskingForMosaicsWithAggregateBondedTransaction.java
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-java|
        :language: java
        :lines:  68-76

    .. literalinclude:: ../../resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-js|
        :language: javascript
        :lines:  65-71

4. Alice signs the aggregate bonded transaction and announces it to the network, locking first 10 XEM.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-ts|
        :language: typescript
        :lines:  73-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/AskingForMosaicsWithAggregateBondedTransaction.java
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-java|
        :language: java
        :lines:  77-103

    .. literalinclude:: ../../resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js
        :caption: |asking-for-mosaics-with-aggregate-bonded-transaction-js|
        :language: javascript
        :lines:  74-

If all goes well, :doc:`Bob receives a notification <../transaction/debugging-transactions>`.

************
What's next?
************

Bob has not cosigned the transaction yet. Consider reading :doc:`signing announced aggregate bonded transactions guide <signing-announced-aggregate-bonded-transactions>`.

After receiving the transaction, Bob signs the ``transaction hash`` and announces the cosignature signed transaction.

As the aggregate bonded transaction has all the cosignatures required, it will be included in a block.

.. |asking-for-mosaics-with-aggregate-bonded-transaction-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts" target="_blank">View Code</a>

.. |asking-for-mosaics-with-aggregate-bonded-transaction-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/transaction/AskingForMosaicsWithAggregateBondedTransaction.java" target="_blank">View Code</a>

.. |asking-for-mosaics-with-aggregate-bonded-transaction-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js" target="_blank">View Code</a>