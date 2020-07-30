#####################
Aggregate Transaction
#####################

.. _aggregate-transaction:

Aggregate transactions merge multiple transactions into one, allowing **trustless swaps**, and other advanced logic.
|codename| does this by generating a one-time disposable smart contract.

.. figure:: ../resources/images/examples/aggregate-escrow-1.png
    :align: center
    :width: 450px

    Example of an AggregateTransaction between two participants

When all involved :doc:`accounts <../concepts/account>` have cosigned the AggregateTransaction, all the inner transactions are executed at the same time.

|codename|'s :ref:`public network <config-network-properties>` supports aggregate transaction containing up to ``1,000`` inner transactions involving up to ``25`` different cosignatories.
Other aggregate transactions are not allowed as inner transactions.

.. _aggregate-complete:

******************
Aggregate complete
******************

An AggregateTransaction is  **complete** when all the required participants have signed it.

The cosigners can sign the transaction without using the blockchain.
Once it has all the required signatures, one of them can announce it to the network.
If the inner transaction setup is valid, and there is no validation error, the transactions will get executed at the same time.

Aggregate complete transactions enable adding more transactions per block by gathering multiple inner transactions.

.. _aggregate-bonded:

****************
Aggregate bonded
****************

An AggregateTransaction is **bonded** when it requires signatures from other participants.

.. note:: Before announcing an **AggregateBondedTransaction**, an account must announce and get confirmed a :ref:`HashLockTransaction<hash-lock-transaction>` locking ``10`` |networkcurrency|.

Once an aggregate bonded is announced, it reaches partial state—where it can live up to ``2 days``—and notifies its status through WebSockets or HTTP API calls.

Every time a cosignatory signs the transaction and announces an aggregate bonded :ref:`cosignature <cosignature>`, the network checks if all the required cosigners have signed.
When all signatures are acquired, the transaction changes to unconfirmed state until the network includes it in a block.

.. figure:: ../resources/images/diagrams/aggregate-bonded-transaction-cycle.png
    :width: 900px
    :align: center

    AggregateBondedTransaction cycle

********
Examples
********

Sending multiple transactions together
======================================

Dan announces an AggregateTransaction that merges two transfer transactions.
Alice and Bob will receive the mosaics at the same time.

.. figure:: ../resources/images/examples/aggregate-sending-payouts.png
    :align: center
    :width: 450px

    Sending payouts with aggregate complete transactions

Multi-asset escrowed transactions
=================================

In this example, Alice is buying tickets with ``currency.euro`` :doc:`mosaic <mosaic>`.
When the ticket distributor cosigns the AggregateTransaction, the swap will happen atomically.

.. figure:: ../resources/images/examples/aggregate-escrow-1.png
    :align: center
    :width: 450px

    Multi-Asset Escrowed Transactions

Paying for others fees
======================

Alice sends 10 ``currency.euro`` to Bob using an app to make payments.
However, Alice doesn't own |networkcurrency| to pay the transaction fee.

By creating an AggregateBondedTransaction, Alice can convert ``currency.euro`` to |networkcurrency| to pay the fee.
Now, Alice and Bob can use |codename|'s public blockchain without ever having to buy or hold |networkcurrency| units.

Since the app creator can put its own branding on the open source payment app, Alice and Bob may not even know they are using blockchain technology.

.. figure:: ../resources/images/examples/aggregate-paying-for-others-fees.png
    :align: center
    :width: 450px

    Paying for others fees

********************
Related transactions
********************

.. csv-table::
    :header:  "Id",  "Type", "Description"
    :widths: 20 30 50
    :delim: ;
    
    0x4141; :ref:`AggregateCompleteTransaction <aggregate-transaction>`; Send transactions in batches to different accounts.
    0x4241; :ref:`AggregateBondedTransaction <aggregate-transaction>`; Propose an arrangement of transactions between different accounts.
    --; :ref:`CosignatureTransaction <cosignature-transaction>`; Cosign an AggregateBondedTransaction.
    0x4148; :ref:`HashLockTransaction <hash-lock-transaction>`;  Lock a deposit needed to announce aggregate bonded transactions.

******
Guides
******

.. postlist::
    :category: Aggregate Transaction
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

Continue: :doc:`Account Restrictions <account-restriction>`.
