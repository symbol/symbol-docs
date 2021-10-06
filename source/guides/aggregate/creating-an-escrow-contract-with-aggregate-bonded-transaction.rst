.. post:: 12 Aug, 2018
    :category: Aggregate Transaction
    :tags: SDK
    :excerpt: 1
    :nocomments:

###########################
Creating an escrow contract
###########################

Learn about aggregate bonded transactions creating an escrow contract.

********
Use case
********

    An **escrow** is a *contractual arrangement* in which a *third party receives and disburses money*
    or documents for the *primary transacting parties*. This disbursement is dependent on the
    *conditions agreed by the transacting parties*, or an *account established by a broker for holding funds*
    on behalf of the broker’s principal or some other person until the consummation or termination of a transaction. See the full description at |escrow_wikipedia|.

For this example, imagine that the two parties agree on a virtual service, implying that the escrow can be executed immediately:

1. The buyer and seller agree on terms.
2. The buyer submits payment to escrow.
3. The seller delivers goods or service to the buyer.
4. The buyer approves goods or service.
5. The escrow releases payment to the seller.

.. figure:: ../../resources/images/examples/aggregate-escrow-1.png
    :align: center
    :width: 600px

    Multi-Asset Escrowed Transactions

How to create an escrow contract with Symbol
============================================

Normalizing the previous description into |codename| related concepts:

* **contractual arrangement**: A new type of transaction called :ref:`aggregate-transaction`.

* **third party receives and disburses money**: There is no third party, we are going to use blockchain technology.

* **primary transacting parties**: |codename| accounts will represent the participants.

* **conditions agreed to by the transacting parties**: When every participant signs the AggregateTransaction.

* **account established by a broker for holding funds**: There will not be an intermediate account, the exchange will happen atomically using an AggregateTransaction.

* **until the consummation or termination of a transaction**: The transaction gets included in a block or expires.

*************
Prerequisites
*************

- Complete :doc:`sending mosaics and messages between two accounts <../transfer/sending-a-transfer-transaction>` guide.
- Create :ref:`accounts <setup-creating-a-test-account>` for Alice and the ticket distributor.
- Load Alice's account with at least 200 |networkcurrency| units.
- Create a :doc:`new mosaic <../mosaic/creating-a-mosaic>` with the ticket distributor account to represent the museum ticket.

********************************************
Setting up the required accounts and mosaics
********************************************

Alice and a ticket distributor want to swap the following mosaics.

.. csv-table::
        :header: "Owner", "Amount", "MosaicId", "Description"

        Alice, 100, |networkcurrency|, Native currency mosaic
        Ticket distributor, 1, ``7cdf3b117a3c40cc``, Represents a museum ticket.

Before continuing, :ref:`create the two accounts <setup-creating-a-test-account>` loaded with |networkcurrency|.
You should also :doc:`create a mosaic <../mosaic/creating-a-mosaic>` with the ticket distributor's account.
This new mosaic will represent the ticket.

****************************
Creating the escrow contract
****************************

1. Open a new file, and define two transfer transactions:

A) A TransferTransaction from Alice to the ticket distributor sending 100 |networkcurrency|.

B) A TransferTransaction from the ticket distributor to Alice sending 1 ``7cdf3b117a3c40cc`` (museum ticket).

.. note:: The museum ticket does not have the id ``7cdf3b117a3c40cc`` in your network. Replace the mosaic identifier for the one you have created in the previous step.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/CreatingAnEscrowContractWithAggregateBondedTransaction.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/CreatingAnEscrowContractWithAggregateBondedTransaction.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/CreatingAnEscrowContractWithAggregateBondedTransaction.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Wrap the defined transactions in an :ref:`aggregate-transaction` and sign it with Alice's account.
An AggregateTransaction is *complete* if before announcing it to the network, all required cosigners have signed it.
If valid, it will be included in a block.
In case that signatures are required from other participants—the ticket distributor—it is considered *bonded*.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/CreatingAnEscrowContractWithAggregateBondedTransaction.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/CreatingAnEscrowContractWithAggregateBondedTransaction.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/CreatingAnEscrowContractWithAggregateBondedTransaction.java
        :language: java
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. When an **AggregateTransaction is bonded**, Alice will need to lock ``10`` |networkcurrency| to prevent spamming the network.
Once the ticket distributor signs the AggregateTransaction, the amount of locked |networkcurrency| becomes available again on Alice's account, and the exchange will get through.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/CreatingAnEscrowContractWithAggregateBondedTransaction.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/CreatingAnEscrowContractWithAggregateBondedTransaction.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/aggregate/CreatingAnEscrowContractWithAggregateBondedTransaction.java
        :language: java
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

The distributor has not signed the AggregateBondedTransaction yet, so the exchange has not been completed.

4. Copy the **AggregateTransaction hash** from (2), and check how to cosign the AggregateTransaction by :doc:`following the next guide <signing-announced-aggregate-bonded-transactions>`.

**********************************************
Is it possible without aggregate transactions?
**********************************************

**It is not secure**, since:

- Alice could decide not to pay the distributor after receiving the ticket.
- The distributor could choose not to send the ticket after receiving the payment.

Using the AggregateTransaction feature, we ensure that multiple transactions are executed at the same time when all the participants agree.

.. |escrow_wikipedia| raw:: html

   <a href="https://en.wikipedia.org/wiki/Escrow" target="_blank">Wikipedia</a>
