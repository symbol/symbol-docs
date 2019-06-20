:orphan:

.. post:: 12 Aug, 2018
    :category: Aggregate Transaction
    :excerpt: 1
    :nocomments:

####################################################
Creating an escrow with aggregate bonded transaction
####################################################

Learn about :ref:`aggregate bonded transactions <aggregate-transaction>` creating an escrow contract.

**********
Background
**********

    An **escrow** is a *contractual arrangement* in which a *third party receives and disburses money*
    or documents for the *primary transacting parties*. This disbursement is dependent on the
    *conditions agreed by the transacting parties*, or an *account established by a broker for holding funds*
    on behalf of the broker’s principal or some other person until the consummation or termination of a transaction.

See the full description at |escrow_wikipedia|.

For this example, imagine that the two parties agree on a virtual service, implying that the escrow can be executed immediately:

1. The buyer and seller agree on terms.
2. The buyer submits payment to escrow.
3. The seller delivers goods or service to the buyer.
4. The buyer approves goods or service.
5. The escrow releases payment to the seller.

**How is it applied to NEM?**

Normalizing the language into NEM related concepts:

* **contractual arrangement**: A new type of transaction called Aggregate Transaction.

* **third party receives and disburses money**: There is no third party, we are going to use blockchain technology.

* **primary transacting parties**: NEM accounts will represent the participants.

* **conditions agreed to by the transacting parties**: When every participant signs the aggregate transaction.

* **account established by a broker for holding funds**: There will not be an intermediate account, the exchange will happen atomically using an aggregate transaction.

* **until the consummation or termination of a transaction**: The transaction gets included in a block or expires.

*************
Prerequisites
*************

- Know how to :doc:`create accounts <../account/creating-and-opening-an-account>`
- Finish :doc:`creating a mosaic guide <../mosaic/creating-a-mosaic>`
- Finish :doc:`sending payouts with aggregate complete transactions <sending-payouts-with-aggregate-complete-transaction>`

**********************
Getting into some code
**********************

.. figure:: ../../resources/images/examples/aggregate-escrow-1.png
    :align: center
    :width: 450px

    Multi-Asset Escrowed Transactions

Setting up the required accounts and mosaics
============================================

Alice and a ticket distributor want to swap the following mosaics.

.. csv-table::
        :header: "Owner", "Amount", "MosaicId", "Description"

        Alice, 100, cat.currency, Native currency mosaic
        Ticket distributor, 1, 7cdf3b117a3c40cc, Represents a museum ticket.

Before continuing, :ref:`create the two accounts <setup-getting-a-test-account>` loaded with cat.currency.

Then, :doc:`create a mosaic <../mosaic/creating-a-mosaic>` with the ticket distributor account. This new mosaic will represent the ticket.

Creating the escrow contract
============================

Alice will send a transaction to the ticket distributor exchanging ``100 cat.currency`` for ``1 7cdf3b117a3c40cc`` (museum ticket).

1. Create two :ref:`transfer transactions <transfer-transaction>`:

A. From Alice to the ticket distributor sending ``100 cat.currency``.
B. From the ticket distributor to Alice sending ``1 7cdf3b117a3c40cc`` (museum ticket).

.. note:: The museum ticket does not have the id 7cdf3b117a3c40cc in your network. Replace the MosaicId for the one you have created in the previous step.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/CreatingAnEscrowWithAggregateBondedTransaction.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/transaction/CreatingAnEscrowWithAggregateBondedTransaction.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Wrap the defined transactions in an :ref:`aggregate transaction <aggregate-transaction>` and sign it.

An aggregate Transaction is *complete* if before announcing it to the network, all required cosigners have signed it. If valid, it will be included in a block.

In case that signatures are required from other participants and the transaction is announced to the network, it is considered an aggregate bonded.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/CreatingAnEscrowWithAggregateBondedTransaction.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/javascript/transaction/CreatingAnEscrowWithAggregateBondedTransaction.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. When an aggregate transaction is bonded, Alice will need to :ref:`lock <hash-lock-transaction>` at least ``10 cat.currency``. Once the ticket distributor signs the aggregate transaction, the amount of locked cat.currency becomes available again on Alice's account, and the exchange will get through.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transaction/CreatingAnEscrowWithAggregateBondedTransaction.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/javascript/transaction/CreatingAnEscrowWithAggregateBondedTransaction.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

.. note:: The :ref:`listener implementation changes <monitoring-transactions-client-side>` when used on the client side (e.g., Angular, React, Vue).

The distributor has not signed the aggregate bonded transaction yet, so the exchange has not been completed.

Copy the aggregate transaction hash, and check how to :doc:`cosign the aggregate transaction <signing-announced-aggregate-bonded-transactions>` in the following guide.

**********************************************
Is it possible without aggregate transactions?
**********************************************

**It is not secure**, since:

- Alice could decide not to pay the distributor after receiving the ticket.
- The distributor could choose not to send the ticket after receiving the payment.

Using the aggregate transaction feature we ensure that multiple transactions are executed at the same time when all the participants agree.

************
What's next?
************

Try to swap mosaics adding a third participant.

.. figure:: ../../resources/images/examples/aggregate-escrow-2.png
    :align: center
    :width: 400px

    Multi-Asset Escrowed Transactions

.. |escrow_wikipedia| raw:: html

   <a href="https://en.wikipedia.org/wiki/Escrow" target="_blank">Wikipedia</a>
