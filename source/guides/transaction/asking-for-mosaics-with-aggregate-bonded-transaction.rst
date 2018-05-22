:orphan:

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

Alice creates an aggregate bonded transaction with two inner transactions:

Inner :ref:`transfer transaction <transfer-transaction>` 1:

* message: "message reason" (custom, but not empty)
* receiver: Bob address
* signer: Alice

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts
        :language: typescript
        :lines:  34-40

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/AskingForMosaicsWithAggregateBondedTransaction.java
        :language: java
        :lines:  52-59

    .. literalinclude:: ../../resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js
        :language: javascript
        :lines:  43-49

Inner transfer transaction 2:

* message: empty
* receiver: Alice address
* mosaics: 20 XEM
* signer: Bob

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts
        :language: typescript
        :lines: 42-48

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/AskingForMosaicsWithAggregateBondedTransaction.java
        :language: java
        :lines:  60-67

    .. literalinclude:: ../../resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js
        :language: javascript
        :lines:  51-57

Aggregate transaction:

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts
        :language: typescript
        :lines:  50-57

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/AskingForMosaicsWithAggregateBondedTransaction.java
        :language: java
        :lines:  68-76

    .. literalinclude:: ../../resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js
        :language: javascript
        :lines:  59-66

Alice signs the aggregate bonded transaction and announces it to the network, locking first 10 XEM.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/AskingForMosaicsWithAggregateBondedTransaction.ts
        :language: typescript
        :lines:  59-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/AskingForMosaicsWithAggregateBondedTransaction.java
        :language: java
        :lines:  77-103

    .. literalinclude:: ../../resources/examples/javascript/transaction/AskingForMosaicsWithAggregateBondedTransaction.js
        :language: javascript
        :lines:  68-

If all goes well, Bob receives a notification via :doc:`WebSocket <../blockchain/debugging-transactions>` (or fetched via :doc:`API Http request <../account/receiving-transactions-from-an-account>`).

************
What's next?
************

Bob didn't cosign the transaction yet. Consider reading :doc:`signing announced aggregate bonded transactions guide <signing-announced-aggregate-bonded-transactions>`.

After receiving the transaction, Bob signs the ``transaction hash`` and announces the cosignature signed transaction.

As the aggregate bonded transaction has all the cosignatures required, it will be included in a block.