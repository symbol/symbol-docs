#####################
Aggregate Transaction
#####################

.. _aggregate-transaction:

Aggregated Transactions merge multiple transactions into one, allowing **trustless swaps**, and other advanced logic. NEM does this by generating a one-time disposable smart contract. When all involved :doc:`accounts<../concepts/account>` have cosigned the aggregate transaction, all the inner transactions are executed at the same time.

********
Examples
********

Sending payouts
===============

Dan announces an aggregate transaction that merges two transfer transactions.

As he is the only required signed, we say the aggregate transaction it is complete. After announcing it to the network, Alice and Bob will receive the mosaics at the same time.

.. figure:: ../resources/images/examples/aggregate-sending-payouts.png
    :align: center
    :width: 450px

    Sending payouts with aggregate complete transactions

Multi-Asset Escrowed Transactions
=================================

In this example, Alice is buying tickets with currency:euro. When the ticket distributor cosigns the aggregate transaction, the swap will happen atomically.

.. figure:: ../resources/images/examples/aggregate-escrow-1.png
    :align: center
    :width: 450px

    Multi-Asset Escrowed Transactions

Paying for others fees
======================

Alice sends 10 € to Bob using an app to make payments. But she doesn’t have any XEM to pay the blockchain transaction fee.

By creating an aggregate bonded transaction, she can convert USD to XEM to pay the fee. Now Alice and Bob can use NEM blockchain without ever having to buy or hold XEM.

Since the app creator can put their own branding on the open source payment app, Alice and Bob may not even know they are using blockchain.

.. figure:: ../resources/images/examples/aggregate-paying-for-others-fees.png
    :align: center
    :width: 450px

    Paying for others fees

**********
Parameters
**********

Aggregate transactions accept the following parameters:

    **Inner transactions**

    Transactions initiated by different accounts. An aggregate transaction can contain up to ``1000`` inner transactions involving up to ``15`` different cosignatories. Other aggregate transactions are not allowed as inner transactions.

    **Cosignatures**

    An array of transaction cosignatures.

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_ . Public network configuration may differ.

******************
Aggregate complete
******************

An aggregate transaction is  **complete** when all cosigners have signed it.

The different participants can sign without using the blockchain the aggregate transaction. Once it has all the required signatures, one of them can announce it to the network. If the inner transaction setup is valid, and there is no validation error, the transactions will get executed at the same time.

Aggregate complete transactions enable adding more transactions per block by gathering multiple inner transactions between different participants in the same operation.

****************
Aggregate bonded
****************

An aggregate transaction is **bonded** when it requires signatures from other participants.

.. note:: When sending an **aggregate bonded transaction**, an account must first announce and get confirmed a Lock Funds Transaction for this aggregate with at least ``10`` XEM.

Once an aggregate bonded is announced, it reaches partial state and notifies its status through WebSockets or HTTP API calls.

Every time a cosignatory signs the transaction and :ref:`announces an aggregate bonded cosignature<cosignature-transaction>`, the network checks if all the required cosigners have already signed. In this situation, the transaction changes to unconfirmed state until the network accepts it, and it is included in a block once processed.

.. figure:: ../resources/images/diagrams/aggregate-bonded-transaction-cycle.png
    :width: 900px
    :align: center

    Aggregate bonded transaction cycle

.. _cosignature-transaction:

***********************
Cosignature transaction
***********************

Cosignature transactions are used to sign :ref:`announced aggregate bonded transactions <aggregate-transaction>` with missing cosignatures.

Parameters
==========

    **Transaction to cosign**

    Aggregate bonded transaction to cosign.

.. _lock-funds-transaction:

**********************
Lock funds transaction
**********************

Announce a lock funds transaction before sending a signed :ref:`aggregate bonded transaction<aggregate-transaction>`. This mechanism is required to prevent network spamming.

Once the related aggregate bonded transaction is confirmed, locked funds become available again in the account that signed the initial lock funds transaction.

If the aggregate bonded transaction duration is reached without being signed by all cosignatories, the locked amount is collected by the block harvester at the height where the lock expires.

Parameters
==========

    **Mosaic**

    Locked mosaic, must be at least ``10 nem:xem``.

    **Duration**

    The funds lock duration.

    **Hash**

    Aggregate bonded has to be confirmed before unlocking funds.

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_ . Public network configuration may differ.

**************
Related guides
**************

.. postlist::
    :category: aggregate-transaction
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:
