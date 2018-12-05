###########
Transaction
###########

Transactions are actions taken on the blockchain that change its state. In other words, how your Smart Assets are put into action.

Transactions allow you to transfer :doc:`mosaics <mosaic>` between :doc:`accounts <account>`, transfer or configure ownership of accounts (including the use of :doc:`multisig <multisig-account>` rules), send messages and more. NEMs blockchain includes a built-in consensus-driven timekeeping facility, so transactions are automatically and accurately time stamped.

**********
Properties
**********

Transactions share the following properties:

    **Signature**

    The transaction signature.

    **Signer**

    The transaction signer public key.

    **Type**

    NEM defines some types of transactions that can be performed. See :ref:`transaction types <transaction-types>`.

    **Version number**

    The version of the structure.

    **Fee**

    How much it costs to announce the transaction in XEM.

    **Deadline**

    The maximum amount of time to include the transaction in the blockchain.

*********
Lifecycle
*********

.. figure:: ../resources/images/diagrams/transaction-cycle.png
    :width: 800px
    :align: center

    Transaction cycle

When you announce a transaction, the REST API will always return an OK. At this point, it still unknown whether the transaction is valid.

To know the transaction status, which can be OK or :doc:`Failure <../api/websockets>`, you have to:

a) Check the status via API endpoint
b) Listen to the different :doc:`WebSocket<../api/websockets>` channels.

If valid, the transaction reaches the network with an **unconfirmed** status.

.. note:: Never rely on a transaction which has an unconfirmed state. It is not clear if it will get included in a block.

The transaction is **confirmed** once it is included in a :doc:`block <block>`. In case of a transfer transaction, the transaction gets processed and the amount stated gets transferred from the sender's account to the recipient's account. Additionally, the transaction fee is deducted from the sender's account.

The transaction has zero confirmations at this point. When another block is added to the blockchain, the transaction has one confirmation. The next block added to the chain will give it two confirmations and so on.

*********
Rollbacks
*********

Cryptocurrencies can roll back part of the blockchain. Rollbacks are essential for resolving forks of the blockchain.

The "rewrite limit" is the maximum number of blocks that can be rolled back. Hence, forks can only be resolved up to a certain depth too.

NEM has a rewrite limit of 360 blocks. Once a transaction has more than 360 confirmations, it cannot be reversed.

In real life, forks that are deeper than 20 blocks do not happen, unless there is a severe problem with the blockchain due to a bug in the code or an attack.

.. _transaction-types:

*****************
Transaction types
*****************

.. csv-table::
    :header: "Transaction type", "High byte", "Low byte", "Decimal"
    :delim: ;

    :ref:`Aggregate Complete Transaction <aggregate-transaction>`; 0x41;	0x41; 16705
    :ref:`Aggregate Complete Transaction <aggregate-transaction>`; 0x42;	0x41;	16961
    :ref:`Cosignature Transaction <cosignature-transaction>`; -- ; -- ; --
    :ref:`Lock Funds Transaction <lock-funds-transaction>`; 0x41; 0x4C; 16716
    :ref:`Mosaic Definition Transaction <mosaic-definition-transaction>`; 0x41; 0x4D; 16717
    :ref:`Mosaic Supply Change Transaction <mosaic-supply-change-transaction>`; 0x42; 0x4D; 16973
    :ref:`Modify Multisig Account Transaction <modify-multisig-account-transaction>`; 0x41; 0x55; 16725
    :ref:`Register Namespace Transaction <register-namespace-transaction>`; 0x41; 0x4E; 16718
    :ref:`Secret Lock Transaction <secret-lock-transaction>`; 0x41; 0x52; 16722
    :ref:`Secret Proof Transaction <secret-proof-transaction>`; 0x43 ;0x4C; 17228
    :ref:`Transfer Transaction <transfer-transaction>`; 0x41; 0x54; 16724

**************
Related guides
**************

.. postlist::
    :category: monitoring
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:
