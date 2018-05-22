:orphan:

###############################################
Signing announced aggregate bonded transactions
###############################################

You probably have announced an :ref:`aggregate bonded transaction <aggregate-transaction>`, but all cosigners have not signed it yet.

This guide will show you how to cosign aggregate bonded transactions that require being signed by your account.

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

Fetch all aggregate bonded transactions pending to be signed by your account.

.. note:: To fetch aggregate bonded transactions that should be signed by multisig cosignatories, refer to the multisig public key instead. See :ref:`how to get multisig accounts where an account is cosignatory<guide-get-multisig-account-info>`.

For each transaction, check if you have not already signed it. Cosign each pending transaction using the previously created function.

Did you realise that we are using RxJS operators intensively? Announce ``CosignatureSignedTransaction`` to the network using the ``TransactionHttp`` repository.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactions.ts
        :language: typescript
        :lines: 28-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/SigningAnnouncedAggregateBondedTransactions.java
        :language: java
        :lines:  37-57

    .. literalinclude:: ../../resources/examples/javascript/transaction/SigningAnnouncedAggregateBondedTransactions.js
        :language: javascript
        :lines:  31-