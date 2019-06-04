##############################
Writing your first application
##############################

This guide will take you through the NEM development cycle. You will send your first transaction to the blockchain after combining some NEM :doc:`built-in features <../concepts/account>`.

**********
Background
**********

The secondary ticket market, also known as the resale market, is the exchange of tickets that happens between individuals after they have purchased a ticket from an initial vendor. The initial vendor could be the event website, an online ticket vending platform, a shop or a stall at the entrance of the event.

Buying a ticket from someone that is not the initial vendor does not necessarily only mean to pay more for the ticket. The is the chance to be a victim of buying a fake or duplicate ticket, where the initial original vendor can't do anything to solve the issue.

What do we want to solve?
=========================

.. figure:: ../resources/images/examples/getting-started.png
    :width: 450px
    :align: center

    Authorization model

The ticket vendor wants to set up a system to:

a) Identify each ticket buyer.
b) Avoid ticket reselling.
c) Avoid non-authentic tickets and duplicate ones.

Why should we use NEM?
======================

Blockchain technology makes sense in cases where:

* There are different participants involved.
* These participants need to trust each other.
* There is a need to keep track of an immutable set of events.

NEM is a **flexible blockchain** technology. Instead of uploading all the application logic into the blockchain, you can use its tested features through **API calls** for transfer and storage of value, authorization, traceability, and identification.

The rest of the code remains **off-chain**. This reduces the inherent immutability risk, as you could change the process when necessary.

************************
Let’s get into some code
************************

Creating an account for each participant
========================================

First, identify the actors involved in the problem we want to solve:

* The ticket vendor.
* The ticket buyer.

We have decided to represent the ticket vendor and buyer as separate :doc:`accounts <../concepts/account>`. Each account is unique and identified by an address. An account has access to a deposit box in the blockchain, which can be modified with an appropriate private key.

Have you loaded an account with test ``cat.currency``? If it is not the case, go back to :doc:`getting started section <setup-workstation>`. The account you have created represents the ticket vendor.

1. After running the following command, you should see on your screen a line similar to:

.. code-block:: bash

   nem2-cli account info


   New Account: SCVG35-ZSPMYP-L2POZQ-JGSVEG-RYOJ3V-BNIU3U-N2E6

   [...]

   Mosaics

   0dc67fbe1cad29e3: 1000000

2. This account owns ``1.000.000 cat.currency``. If your row after mosaics is empty, follow :doc:`the previous guide instructions <setup-workstation>`.

3. Create a second account to identify the ticket buyer.

.. code-block:: bash

   nem2-cli account generate --network MIJIN_TEST --save --url http://localhost:3000 --profile buyer


Monitoring the blockchain
=========================

Accounts change the blockchain state through transactions. Once an account announces a transaction, if properly formed, the server will return an OK response.

Receiving an OK response does not mean the transaction is valid, which means it is still not included in a block. A good practice is to monitor transactions before being announced.

Open three new terminals:

1. The first terminal :doc:`monitors announced transactions <../guides/transaction/monitoring-a-transaction-status>` validation errors.

.. code-block:: bash

   nem2-cli monitor status

2. Monitoring ``unconfirmed`` shows you which transactions have reached the network, but are not included in a block yet.

.. code-block:: bash

   nem2-cli monitor unconfirmed

3. Once a transaction is included, you will see it under the ``confirmed`` terminal.

.. code-block:: bash

   nem2-cli monitor confirmed

Creating the ticket
===================

We are representing the ticket as a NEM mosaic. :doc:`Mosaics <../concepts/mosaic>` can be used to represent any asset in the blockchain, such as objects, tickets, coupons, stock share representation, and even your cryptocurrency. They have configurable properties, which are defined at the moment of their creation. For example, we opt to set **transferable property to false**. This means that the ticket buyer can only send back the ticket to the creator of the mosaic, avoiding the ticket reselling.

1. Create a  mosaic named ``ticket``:

.. code-block:: bash

   nem2-cli transaction mosaic --amount 1000000 --supplymutable --divisibility 0 --duration 1000

.. csv-table::
    :header: "Property", "Value", "Description"
    :delim: ;
    :widths: 20 20 60

    Divisibility; 0 ; The mosaic won't be divisible, no one should be able to send “0.5 tickets”.
    Duration; 1000; The mosaic will be registered for 1000 blocks.
    Amount; 1000000; The number of tickets you are going to create
    Supply mutable; True; The mosaic supply can change at a later point.
    Transferable; False; The mosaic can be only transferred back to the mosaic creator.

2. Copy the mosaicId returned in the ``monitor confirmed`` tab after the transaction gets confirmed.


.. code-block:: bash

   ...  MosaicId:7cdf3b117a3c40cc ...

Sending the ticket
==================

Send one ``company.ticket`` to the ticket vendor account announcing a :ref:`transfer transaction <transfer-transaction>`, one of the most commonly used actions in NEM.

1. Prepare the transfer transaction. The following attributes form a transfer transaction:

.. csv-table::
    :header: "Property", "Value", "Description"
    :delim: ;
    :widths: 20 20 60

    Deadline; Default ; The maximum amount of time to include the transaction in the blockchain.
    Recipient; SC7A4H-7CYCSH-4CP4XI-ZS4G2G-CDZ7JP-PR5FRG-2VBU; The recipient account address.
    Mosaics; 1 [7cdf3b117a3c40cc] (ticket); The array of mosaics to send.
    Message; enjoy your ticket; The attached message.
    Network; MIJIN_TEST; The local network identifier.

.. example-code::

    .. viewsource:: ../resources/examples/typescript/transaction/FirstApplication.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../resources/examples/javascript/transaction/FirstApplication.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

Although the transaction is defined, it has not been announced to the network yet.

2.  Sign the transaction with the ticket vendor account, so that the network can verify the authenticity of the transaction.

.. note:: To make the transaction only valid for your network, include the first block generation hash. Open ``http://localhost:3000/block/1`` in a new tab and copy the ``meta.generationHash`` value.

.. example-code::

    .. viewsource:: ../resources/examples/typescript/transaction/FirstApplication.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../resources/examples/javascript/transaction/FirstApplication.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Once signed, you can announce the transaction to the network.

.. example-code::

    .. viewsource:: ../resources/examples/typescript/transaction/FirstApplication.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../resources/examples/javascript/transaction/FirstApplication.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. code-block:: bash

        nem2-cli transaction transfer --recipient SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54 --mosaics 7cdf3b117a3c40cc::1 --message enjoy_your_ticket

4. When the transaction is confirmed, check that the ticket buyer has received the ticket.

.. code-block:: bash

    nem2-cli account info --profile buyer

************
What's next?
************

Did you solve the use case?

✅ Identify each ticket buyer: Creating NEM accounts for each buyer.

✅ Avoid ticket reselling: Creating a non-transferable mosaic.

✅ Avoid non-authentic tickets and duplicate ones: Creating a unique mosaic.

Continue learning about more :doc:`NEM built-in features <../concepts/account>`.
