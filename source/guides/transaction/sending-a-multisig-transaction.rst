:orphan:


##############################
Sending a multisig transaction
##############################

Send a transaction involving a :doc:`multisig <../../concepts/multisig-account>`, learning how :ref:`aggregate bonded transaction <aggregate-transaction>` works.

**********
Background
**********

.. figure:: ../../resources/images/guides-transactions-multisig.png
    :align: center
    :width: 600px

    Sending an aggregate complete transaction

Alice and Bob live together and have separate accounts. They also have a shared account so that if Bob is out shopping, he can buy groceries for both him and Alice.

This shared account is in NEM translated as 1-of-2 multisig, meaning that one cosignatory needs to cosign the transaction to be included in a block.

Remember that a multisig account has cosignatories accounts, and it cannot start transactions itself. Only the cosignatories can initiate transactions.

*************
Prerequisites
*************

- Finish :doc:`sending a transfer transaction guide <sending-a-transfer-transaction>`
- Finish :doc:`converting an account to multisig guide <../account/converting-an-account-to-multisig>`
- NEM2-SDK
- A text editor or IDE
- An multisig account with XEM
- An cosignatory account with XEM

************************
Let’s get into some code
************************

Bob has finished filling his basket, and he is ready to pay. The cashier's screen indicates that the cost of the purchase is 10 XEM.

Bob needs to know which is the public key of the multisig account that he shares with Alice, and his private key to start announcing the transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :lines: 24-36

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/SendingAMultisigTransactionAggregateComplete.java
        :language: java
        :lines: 43-55

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :lines: 30-41

As he wants to pay the groceries with the multisig account, he defines a :ref:`transfer transaction <transfer-transaction>`.

* Recipient: Grocery's address
* Message: Grocery payment
* Mosaics: [10 XEM]

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :lines:  37-43

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/SendingAMultisigTransactionAggregateComplete.java
        :language: java
        :lines:  56-63

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :lines:  43-49

Wrap the transfer transaction under an :ref:`aggregate transaction <aggregate-transaction>`, attaching multisig public key as the signer.

An aggregate transaction is **complete** if before announcing it to the network, all required cosigners have signed it. If valid, it will be included in a block.

Remember that we are using a 1-of-2 multisig account? As Bob has one private key to sign the transaction, consider an *aggregate complete transaction*.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :lines:  45-52

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/SendingAMultisigTransactionAggregateComplete.java
        :language: java
        :lines:  64-71

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :lines:  51-58

Then, he signs and announces the transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateComplete.ts
        :language: typescript
        :lines:  54-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/SendingAMultisigTransactionAggregateComplete.java
        :language: java
        :lines:  72-78

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateComplete.js
        :language: javascript
        :lines:  60-

************
What's next?
************

What would have happened if the account were a 2-of-2 multisig instead of a 1-of-2?

As all required cosigners didn't sign the transaction, it should be announced as :ref:`aggregate bonded <aggregate-transaction>`.

.. figure:: ../../resources/images/guides-transactions-multisig-2.png
    :align: center
    :width: 600px

    Sending an aggregate bonded transaction

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateBonded.ts
        :language: typescript
        :lines:  45-51

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/SendingAMultisigTransactionAggregateBonded.java
        :language: java
        :lines:  62-70

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateBonded.js
        :language: javascript
        :lines:  55-61


Open a new terminal for :doc:`monitoring<../transaction/debugging-transactions>` the aggregate bonded transaction.

.. code-block:: bash

    $> nem2-cli monitor aggregatebonded --address <your-address-here>

When an aggregate transaction is bonded, Bob needs to lock at least 10 XEM to avoid network spamming. Once all cosigners sign the transaction, the amount of XEM becomes available again on Bob's account.

After :ref:`locks fund transaction <lock-funds-transaction>` has been confirmed, :doc:`announce the aggregate bonded transaction <../../concepts/aggregate-transaction>`.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateBonded.ts
        :language: typescript
        :lines:  53-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/SendingAMultisigTransactionAggregateBonded.java
        :language: java
        :lines:  70-99

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateBonded.js
        :language: javascript
        :lines:  63-

Alice should :doc:`cosign the transaction <signing-announced-aggregate-bonded-transactions>` to be confirmed!