:orphan:

.. post:: 15 Aug, 2018
    :category: aggregate-transaction
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
- Received some aggregate bonded transaction
- NEM2-SDK
- A text editor or IDE
- An account with XEM

************************
Let’s get into some code
************************

1. Create a function to cosign any aggregate bonded transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.ts
        :caption: |signing-announced-aggregate-bonded-transactions-automatically-ts|
        :language: typescript
        :lines: 31-34

    .. literalinclude:: ../../resources/examples/javascript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.js
        :caption: |signing-announced-aggregate-bonded-transactions-automatically-js|
        :language: javascript
        :lines:  31-34

2. Create a new listener to get notified every time a new aggregate bonded transaction requires the signature of your account.

3. Open the connection. You only need to open the connection once and then connect to all desired channels.

4. Start listening for new transactions, subscribing to the ``aggregateBondedAdded`` channel using your account's address.

.. note:: To automatically sign aggregate bonded transactions that must be signed by multisig cosignatories, refer to the multisig address instead. See :ref:`how to get multisig accounts where an account is cosignatory<guide-get-multisig-account-info>`.

5. For each received transaction, check if you have not already signed it.  Cosign each pending aggregate bonded transaction using the previously created function.

6. Announce ``CosignatureSignedTransaction`` to the network using the ``TransactionHttp`` repository.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.ts
        :caption: |signing-announced-aggregate-bonded-transactions-automatically-ts|
        :language: typescript
        :lines: 36-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.java
        :caption: |signing-announced-aggregate-bonded-transactions-automatically-java|
        :language: java
        :lines:  39-61

    .. literalinclude:: ../../resources/examples/javascript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.js
        :caption: |signing-announced-aggregate-bonded-transactions-automatically-js|
        :language: javascript
        :lines:  36-

************
What's next?
************

Extend the previous function for signing transactions if they follow some constraints.

* Aggregate transactions with two inner transactions.
* Two inner transactions must be transfer transactions.
* The transaction sending funds must have yourself as the signer.
* The transaction sending funds should have only one mosaic, being this less than 100 XEM.

Try it yourself! Here you have a possible implementation:

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomaticallyWithConstraints.ts
        :caption: |signing-announced-aggregate-bonded-transactions-automatically-with-constraints-ts|
        :language: typescript
        :lines:  35-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/SigningAnnouncedAggregateBondedTransactionsAutomaticallyWithConstraints.java
        :caption: |signing-announced-aggregate-bonded-transactions-automatically-with-constraints-java|
        :language: java
        :lines:  40-72

.. |signing-announced-aggregate-bonded-transactions-automatically-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.ts" target="_blank">View Code</a>

.. |signing-announced-aggregate-bonded-transactions-automatically-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.java" target="_blank">View Code</a>

.. |signing-announced-aggregate-bonded-transactions-automatically-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomatically.js" target="_blank">View Code</a>

.. |signing-announced-aggregate-bonded-transactions-automatically-with-constraints-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactionsAutomaticallyWithConstraints.ts" target="_blank">View Code</a>

.. |signing-announced-aggregate-bonded-transactions-automatically-with-constraints-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/transaction/SigningAnnouncedAggregateBondedTransactionsAutomaticallyWithConstraints.java" target="_blank">View Code</a>
