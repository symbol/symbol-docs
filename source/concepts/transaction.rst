###########
Transaction
###########

.. warning:: The configuration presented is NOT intended to be used on the public network. These are the parameters used for the Catapult Testnet version (MIJIN_TEST).

Transactions are actions taken on the blockchain that change its state. In other words, how your Smart Assets are put into action.

Transactions let you transfer :doc:`mosaics <mosaic>` between :doc:`account <account>`, transfer or configure ownership of accounts (including the use of :doc:`multisig <multisig-account>` rules), send messages and more. NEMs blockchain includes a built-in consensus-driven timekeeping facility, so transactions are automatically and accurately time stamped.

**********************
Transaction life-cycle
**********************

When a transaction is initiated through the API, it always returns an OK. It is still unconfirmed and thus not yet accepted by the network. At this point, it is not clear if it will get included in a block. Never rely on a transaction which has the state unconfirmed.

To know the status of the transaction, which can be OK or :doc:`Failure<../api/error>`, you have to:

1) Check the status via API endpoint
2) Listen to the different :doc:`WebSocket<listener>` channels.

.. figure:: ../resources/images/transaction-cycle.png
    :width: 800px
    :align: center

    Transaction cycle

Once it is included in a :doc:`block <block>`, the transaction gets processed and, in case of a transfer transaction, the amount stated in the transaction gets transferred from the sender's account to the recipient's account. Additionally, the transaction fee is deducted from the sender's account.

The transaction is said to have 0 confirmations at this point. When another block is added to the blockchain, the transaction has 1 confirmation. The next block added to the chain will give it 2 confirmations and so on.

Cryptocurrencies have the ability to roll back part of the blockchain. This is essential for being able to resolve forks of the blockchain. 

There is, however, a maximum number of blocks that can be rolled back, which is called the "rewrite limit". Hence, forks can only be resolved up to a certain depth too. 

NEM has a rewrite limit of ``360`` blocks. Once a transaction has more than 360 confirmations, it cannot be reversed.

In real life, forks that are deeper than ``20`` blocks do not happen, unless there are some severe problem with the blockchain due to a bug in the code or an attack of some kind.

.. raw:: html

    <h2>Properties</h2>

Transactions share the following properties:

**Type**

NEM defines some types of transactions that can be performed. See :ref:`transaction types <transaction-types>`.

    **Version number**

    The version of the structure.

    **Deadline**

    The maximum amount of time to include the transaction in the blockchain.

    **Fee**

    How many XEM costs announcing the transaction.

    **Signature**

    The transaction signature.

    **Signer**

    The account of the transaction creator public key.


In :doc:`NEM2-SDK <../sdk/overview>`, transactions are announced using ``TransactionHttp``.

.. csv-table:: Catapult REST API vs SDK TransactionHttp

    PUT /transaction, ``announce(signedTransaction: SignedTransaction)`` : ``Observable<TransactionAnnounceResponse>``
    PUT /transaction/partial, ``announceAggregateBonded(signedTransaction: SignedTransaction)`` : ``Observable<TransactionAnnounceResponse>``
    PUT /transaction/cosignature, ``announceAggregateBondedCosignature(cosignatureSignedTransaction: CosignatureSignedTransaction)`` : ``Observable<TransactionAnnounceResponse>``

.. _transaction-types:

*****************
Transaction types
*****************

* :ref:`Transfer Transaction <transfer-transaction>`
* :ref:`Register Namespace Transaction <register-namespace-transaction>`
* :ref:`Mosaic Definition Transaction <mosaic-definition-transaction>`
* :ref:`Mosaic Supply Change Transaction <mosaic-supply-change-transaction>`
* :ref:`Modify Multisig Account Transaction <modify-multisig-account-transaction>`
* :ref:`Aggregate Transaction <aggregate-transaction>`
* :ref:`Cosignature Transaction <cosignature-transaction>`
* :ref:`Lock Funds Transaction <lock-funds-transaction>`
* :ref:`Secret Lock Transaction <secret-lock-transaction>`
* :ref:`Secret Proof Transaction <secret-proof-transaction>`