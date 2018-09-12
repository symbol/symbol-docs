:orphan:

.. post:: 14 Aug, 2018
    :category: aggregate-transaction
    :excerpt: 1
    :nocomments:

###############################################
Signing announced aggregate bonded transactions
###############################################

You have probably announced an :ref:`aggregate bonded transaction <aggregate-transaction>`, but all required cosigners have not signed it yet.

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

1. Create a function to cosign any aggregate bonded transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactions.ts
        :language: typescript
        :lines: 30-33

    .. literalinclude:: ../../resources/examples/javascript/transaction/SigningAnnouncedAggregateBondedTransactions.js
        :language: javascript
        :lines:  31-34

2. Fetch all aggregate bonded transactions pending to be signed by your account.

.. note:: To fetch aggregate bonded transactions that must be signed by multisig cosignatories, refer to the multisig public key instead. See :ref:`how to get multisig accounts where an account is cosignatory<guide-get-multisig-account-info>`.

3. For each transaction, check if you have not already signed it. Cosign each pending transaction using the previously created function.

4. Announce ``CosignatureSignedTransaction`` to the network using the ``TransactionHttp`` repository.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SigningAnnouncedAggregateBondedTransactions.ts
        :language: typescript
        :lines: 34-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/SigningAnnouncedAggregateBondedTransactions.java
        :language: java
        :lines:  37-57

    .. literalinclude:: ../../resources/examples/javascript/transaction/SigningAnnouncedAggregateBondedTransactions.js
        :language: javascript
        :lines:  35-

    .. literalinclude:: ../../resources/examples/cli/transaction/SigningAnnouncedAggregateBondedTransactions.sh
        :language: bash
        :lines:  3