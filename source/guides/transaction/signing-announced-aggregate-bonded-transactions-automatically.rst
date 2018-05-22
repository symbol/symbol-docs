:orphan:

#############################################################
Signing announced aggregate bonded transactions automatically
#############################################################

Following this guide, you will create an application that is notified every time your account receives a transaction pending to be cosigned.

Automatically, the app will cosign the transaction and announce it to the network.

*************
Prerequisites
*************

- Finish :doc:`creating an escrow with aggregate bonded transaction guide <creating-an-escrow-with-aggregate-bonded-transaction>`
- Received some aggregate bonded transaction
- NEM2-SDK
- A text editor or IDE
- An account with XEM

************************
Let’s get into some code
************************

Create a function to cosign any aggregate bonded transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactions.ts
        :language: typescript
        :lines: 24-27

    .. literalinclude:: ../../resources/examples/javascript/transaction/SigningAnnouncedAggregateBondedTransactions.js
        :language: javascript
        :lines:  26-30

Create a new listener to get notified every time a new aggregate bonded transaction requires the signature of your account.

Open the connection. You only need to open the connection once and then connect to all desired channels.

Start listening for new transactions, subscribing to the ``aggregateBondedAdded`` channel using your account's address.

.. note:: To sign automatically aggregate bonded transactions that should be signed by multisig cosignatories, refer to the multisig address instead. See :ref:`how to get multisig accounts where an account is cosignatory<guide-get-multisig-account-info>`.

For each received transaction, check if you have not already signed it.  Cosign each pending aggregate bonded transaction using the previously created function.

Did you realise that we are using RxJS operators intensively? Announce ``CosignatureSignedTransaction`` to the network using the ``TransactionHttp`` repository.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.ts
        :language: typescript
        :lines: 29-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.java
        :language: java
        :lines:  39-61

    .. literalinclude:: ../../resources/examples/javascript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.js
        :language: javascript
        :lines:  31-

************
What's next?
************

In this guide, you have seen how to create an automatic signature for an account aggregate bonded transactions. Now that you know some general concepts, you could extend it by filtering transactions matching some constraints.

* Aggregate transactions with two inner transactions.
* Two inner transactions must be transfer transactions.
* The transaction sending funds must have yourself as the signer.
* The transaction sending funds should have only one mosaic being this less than 100 XEM.

Try it yourself! Here you have the implementation:

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomaticallyWithConstraints.ts
        :language: typescript
        :lines:  25-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/SigningAnnouncedAggregateBondedTransactionsAutomaticallyWithConstraints.java
        :language: java
        :lines:  40-72

    .. literalinclude:: ../../resources/examples/javascript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomaticallyWithConstraints.js
        :language: javascript
        :lines:  26-