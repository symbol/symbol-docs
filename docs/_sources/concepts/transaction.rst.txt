###########
Transaction
###########

A transaction generally represents a unit of work within a database system.
In the case of blockchain, that is when an action signed by an :doc:`account <account>` changes its state.

.. _transaction-types:

*****************
Transaction types
*****************

|codename| supports many different transaction types.
For example, there are transactions to transfer :doc:`mosaics <mosaic>` between accounts, messages or configure the ownership of accounts (including the use of :doc:`multisig <multisig-account>` rules), and more.

The following transaction types are included in |codename| based networks by default:

.. serializationref:: TransactionType

Every base transaction type available in |codename| is defined as a separate :doc:`plugin <plugin>`.
The plugin approach allows developers to introduce new transaction types without modifying the core engine or disrupting other features.

.. _transaction-definition:

**********************
Defining a transaction
**********************

Transactions are defined in a serialized form.
Every transaction extends from the base ``Transaction`` schema, adding the type's particular properties.

All transactions should define a deadline and a max_fee:

* ``deadline``: A transaction has a time window to be accepted before it reaches its deadline. The transaction expires when the deadline is reached and all the nodes reject the transaction. By default, the SDK sets the deadline to 2 hours, but it can be extended up to 6 hours (or 48 for :ref:`aggregate-bonded` transactions).

* ``max_fee``: The maximum amount of network currency that the sender of the transaction is willing to pay to get the transaction accepted. :doc:`The next documentation <fees>` shows you how to set the optimal max_fee value.

.. note:: The `catbuffer schemas <https://github.com/symbol/symbol/tree/main/catbuffer/schemas>`_ repository defines how each transaction type should be serialized. In combination with the catbuffer generators, developers can generate builder classes for a given set of programming languages.

We recommend using the :doc:`SDK <../sdk>` to define new transactions.

.. example-code::

    .. viewsource:: ../resources/examples/typescript/transfer/SendingATransferTransaction.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

.. _transaction-signature:

*********************
Signing a transaction
*********************

Accounts must sign transactions before announcing them to the network.
Signing a transaction expresses the account's agreement to change the network state as defined.

For example, a TransferTransaction describes who the recipient is and the number of mosaics to transfer.
In this case, signing the transaction means to accept moving those mosaics from one account's balance to another.

An account has to follow the next steps to `sign a transaction <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/model/transaction/Transaction.ts#L216>`_:

1. Get the ``signing bytes``, which are all the bytes of the transaction except the size, signature, and signer.
2. Get the nemesis block ``generation hash``. You can query :term:`NODE_URL` ``/node/info'`` and copy ``meta.networkGenerationHash`` value.
3. Prepend the nemesis block generation hash to the signing bytes.
4. Sign the resulting string with the signer's private key. This will give you the transaction ``signature``.
5. Append the signer's signature and public key to the transaction to obtain the ``payload``.
6. Calculate the `transaction hash <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/model/transaction/Transaction.ts#L127>`_ by applying SHA3-512 hashing algorithm to the first 32 bytes of signature, the signer public key, nemesis block generation hash, and the remaining transaction payload.

.. example-code::

    .. viewsource:: ../resources/examples/typescript/transfer/SendingATransferTransaction.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

************************
Announcing a transaction
************************

Signed transactions are ready to be announced to the network.
You can either use the SDK ``TransactionHttp`` service or append the payload to the request of the `transaction endpoint <https://symbol.github.io/symbol-openapi/v0.11.3/#operation/announceTransaction>`_.

.. example-code::

    .. viewsource:: ../resources/examples/typescript/transfer/SendingATransferTransaction.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. code-block:: bash

        curl -X PUT -H "Content-type: application/json" -d '{"payload":"B3000000F77A8DCFCB57B81F9BE5B46738F7132998F55123BFF4D89DC8E5CAE1F071A040E5571F4D8DA125B243C785DA5261F878E3DE898815F6E8F12A2C0A5F0A9C3504FA6249E8334E3F83E972461125504AFFD3E7750AFBB3371E7B2D22A599A3D0E3039054410000000000000000265DEE3F1700000090FA39EC47E05600AFA74308A7EA607D145E371B5F4F1447BC0F00010057656C636F6D6520546F204E454D44B262C46CEABB858096980000000000"}' http://localhost:3000/transaction

After announcing the transaction, the REST API will always return an OK response immediately.
At this point, it is still unknown whether the transaction is valid.

.. figure:: ../resources/images/diagrams/transaction-cycle.png
    :width: 800px
    :align: center

    Transaction cycle

.. _transaction-validation:

**********
Validation
**********

The first stage of validation happens in the API nodes.
If the transaction encounters an error, the WebSocket throws a notification through the status channel.
If not, the transaction reaches the P2P network with an **unconfirmed** status.
In this state, it is not yet clear if the transaction will get included in a block. Thus, an unconfirmed transaction should never be relied upon.

The second validation happens before the transaction is added in a :doc:`harvested block <block>`.
If successful, the harvester stores the transaction in a block and the transaction reaches the **confirmed** status.
At this state, the transaction is officially recorded in the blockchain ledger, but has not yet reached **finality**.

Under certain circumstances, such as a network failure or partition, the most recently confirmed blocks can be :ref:`rolled back <rollbacks>`.
Hence, confirmed transactions that have not been finalized are recognized by the network but are not immutable because they can still be reversed.

For a block to be immutable, it needs to complete the :ref:`finalization <finalization>` process.
Once a block is finalized, the block and the included transactions are permanently recorded on the blockchain ledger.

*************
Spam Throttle
*************

The node's cache holds unconfirmed transactions until they can be included in a block.
Since cache is a valuable resource, |codename| implements a spam throttle that prevents an attacker from filling the cache with unconfirmed transactions while still letting honest actors successfully submit new unconfirmed transactions.

The spam throttle controls the amount of unconfirmed transactions accounts can submit by calculating the fair share of cache for each account relative to its importance score.
If an account has surpassed its fair share of the cache and the node cache contains more unconfirmed transactions than the amount that can be included in a single block, the transaction will be rejected.
This effectively blocks malicious actors from spamming a node with transactions while allowing other users to continue using the node normally.

**************
Related guides
**************

.. postlist::
    :category: Monitoring
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:
