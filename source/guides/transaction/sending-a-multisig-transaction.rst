:orphan:

.. post:: 20 Aug, 2018
    :category: Aggregate Transaction, Multisig Account
    :excerpt: 1
    :nocomments:

##############################
Sending a multisig transaction
##############################

Send a transaction involving a :doc:`multisig <../../concepts/multisig-account>` account.

**********
Background
**********

.. figure:: ../../resources/images/examples/multisig-transaction-1-of-2.png
    :align: center
    :width: 600px

    Sending an aggregate complete transaction

Alice and Bob live together and have separate accounts. They also have a shared account so that if Bob is out shopping, he can buy groceries for both himself and Alice.

This shared account is in NEM translated as 1-of-2 multisig, meaning that one cosignatory needs to cosign the transaction to be included in a block.

Remember that a multisig account has cosignatories accounts, and it cannot start transactions itself. Only the cosignatories can initiate transactions.

*************
Prerequisites
*************

- Finish :doc:`sending a transfer transaction guide <sending-a-transfer-transaction>`
- Finish :doc:`converting an account to multisig guide <../account/converting-an-account-to-multisig>`
- Know how to :doc:`create accounts <../account/creating-and-opening-an-account>`
- A multisig :ref:`account with cat.currency <setup-getting-a-test-account>`
- A cosignatory :ref:`account with cat.currency <setup-getting-a-test-account>`

************************
Let’s get into some code
************************

1-of-2 signatures required
==========================

Bob has finished filling his basket, and he is ready to pay. The cashier's screen indicates that the cost of the purchase adds up to ``10 cat.currency``.

1. Bob needs to know:

* The private key of his account.
* The public key of the multisig account shared with Alice.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateComplete.ts
        :caption: |sending-a-multisig-transaction-aggregate-complete-ts|
        :language: typescript
        :lines: 33-41

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateComplete.js
        :caption: |sending-a-multisig-transaction-aggregate-complete-js|
        :language: javascript
        :lines: 33-41

2. Define the following :ref:`transfer transaction <transfer-transaction>`:

* Recipient: Grocery's address
* Message: sending 10 cat.currency
* Mosaics: [``10 cat.currency``]

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateComplete.ts
        :caption: |sending-a-multisig-transaction-aggregate-complete-ts|
        :language: typescript
        :lines:  44-49

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateComplete.js
        :caption: |sending-a-multisig-transaction-aggregate-complete-js|
        :language: javascript
        :lines:  44-49

3. Wrap the transfer transaction under an :ref:`aggregate transaction <aggregate-transaction>`, attaching the multisig public key as the signer.

An aggregate transaction is **complete** if before announcing it to the network, all required cosigners have signed it. In this case the multisig requires only one signature (1-of-2), so you can define the aggregate as complete.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateComplete.ts
        :caption: |sending-a-multisig-transaction-aggregate-complete-ts|
        :language: typescript
        :lines:  52-56

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateComplete.js
        :caption: |sending-a-multisig-transaction-aggregate-complete-js|
        :language: javascript
        :lines:  52-56

4. Sign and announce the transaction using Bob's account.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateComplete.ts
        :caption: |sending-a-multisig-transaction-aggregate-complete-ts|
        :language: typescript
        :lines:  59-

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateComplete.js
        :caption: |sending-a-multisig-transaction-aggregate-complete-js|
        :language: javascript
        :lines:  59-

2-of-2 signatures required
==========================

What would have happened if the account was a 2-of-2 multisig instead of a 1-of-2? As all required cosigners did not sign the transaction, it should be announced as :ref:`aggregate bonded <aggregate-transaction>` and cosigned later with Alice's account.

.. figure:: ../../resources/images/examples/multisig-transaction-2-of-2.png
    :align: center
    :width: 600px

    Sending an aggregate bonded transaction

1. Open a new terminal to :doc:`monitor<../transaction/monitoring-a-transaction-status>` the aggregate bonded transaction.

.. code-block:: bash

    $> nem2-cli monitor aggregatebonded --address <your-address-here>

2. Modify the previous code, defining the transaction as ``aggregate bonded``.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateBonded.ts
        :caption: |sending-a-multisig-transaction-aggregate-bonded-ts|
        :language: typescript
        :lines:  61-67

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateBonded.js
        :caption: |sending-a-multisig-transaction-aggregate-bonded-js|
        :language: javascript
        :lines:  61-67


3. When an aggregate transaction is bonded, Bob needs to lock at least ``10`` cat.currency to avoid network spamming. Once all cosigners sign the transaction, the amount of cat.currency locked becomes available again in Bob's account. After :ref:`hash lock transaction <hash-lock-transaction>` has been confirmed, :doc:`announce the aggregate bonded transaction <../../concepts/aggregate-transaction>`.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateBonded.ts
        :caption: |sending-a-multisig-transaction-aggregate-bonded-ts|
        :language: typescript
        :lines:  69-

    .. literalinclude:: ../../resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateBonded.js
        :caption: |sending-a-multisig-transaction-aggregate-bonded-js|
        :language: javascript
        :lines:  69-

.. note:: The :ref:`listener implementation changes <monitoring-transactions-client-side>` when used on the client side (e.g., Angular, React, Vue).

4. :doc:`Cosign the aggregate transaction <../../cli>` with Alice's account. Use the transaction hash output from the first step.

.. code-block:: bash

    $> nem2-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile alice

.. |sending-a-multisig-transaction-aggregate-complete-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateComplete.ts" target="_blank">View Code</a>

.. |sending-a-multisig-transaction-aggregate-complete-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateComplete.js" target="_blank">View Code</a>

.. |sending-a-multisig-transaction-aggregate-bonded-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/SendingAMultisigTransactionAggregateBonded.ts" target="_blank">View Code</a>

.. |sending-a-multisig-transaction-aggregate-bonded-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/transaction/SendingAMultisigTransactionAggregateBonded.js" target="_blank">View Code</a>
