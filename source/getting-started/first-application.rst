##############################
Writing your first application
##############################

This guide will take you through the NEM development cycle. First, we will architect our solution combining some built-in features available in Catapult, such as :doc:`Mosaics <../concepts/mosaic>` and :doc:`Accounts <../concepts/account>`. Then, you will record your first transaction on the blockchain.

**********
Background
**********

The secondary ticket market, also known as the resale market, is the exchange of tickets that happens between individuals after they have purchased a ticket from an initial vendor. The initial vendor could be the event website, an online ticket vending platform, a shop, or a stall at the entrance of the event.

Buying a ticket from someone that is not the initial vendor does not necessarily only mean to pay more for the ticket. The is the chance to be a victim of buying a fake or duplicate ticket, where the initial original vendor can't do anything to solve the issue.

*************************
What do we want to solve?
*************************

.. figure:: ../resources/images/examples/getting-started.png
    :width: 450px
    :align: center

    Authorization model

The ticket vendor wants to set up a system to:

a) Identify each ticket and customer.
b) Avoid ticket reselling.
c) Avoid non-authentic tickets and duplicate ones.

***************************
Why should we use Catapult?
***************************

Blockchain technology makes sense in cases where:

* There are different participants involved.
* These participants need to trust each other.
* There is a need to keep track of an immutable set of events.

Catapult is a **flexible blockchain** technology. Instead of uploading all the application logic into the blockchain, you can use its tested features through **API calls** for transfer and storage of value, authorization, traceability, and identification.

The rest of the code remains **off-chain**. This reduces the inherent immutability risk, as you could change the process when necessary.

****************************************
Creating an account for each participant
****************************************

First, identify the actors involved in the problem we want to solve:

* The ticket vendor.
* The customer.

We have decided to represent the ticket vendor and customer as separate :doc:`accounts <../concepts/account>`. Each account is unique and identified by an address. An account has access to a deposit box on the blockchain, which can be modified with an appropriate private key.

1. Have you :ref:`loaded an account with test nem.xem <setup-creating-a-test-account>`? The account you have loaded in NEM2-CLI represents the **ticket vendor**. After running the following command, you should see on your screen a line similar to:

.. code-block:: bash

    nem2-cli account info --profile testnet

    Account Information
    ┌───────────────────┬────────────────────────────────────────────────┐
    │ Property          │ Value                                          │
    ├───────────────────┼────────────────────────────────────────────────┤
    │ Address           │ TCVQ2R-XKJQKH-4RJZWG-DARWJ6-V4J4W7-F4DGH6-ZFAB │
    ├───────────────────┼────────────────────────────────────────────────┤
    │ Address Height    │ 1                                              │
    ├───────────────────┼────────────────────────────────────────────────┤
    │ Public Key        │ 203...C0A                                      │
    ├───────────────────┼────────────────────────────────────────────────┤
    │ Public Key Height │ 3442                                           │
    ├───────────────────┼────────────────────────────────────────────────┤
    │ Importance        │ 0                                              │
    ├───────────────────┼────────────────────────────────────────────────┤
    │ Importance Height │ 0                                              │
    └───────────────────┴────────────────────────────────────────────────┘

    Balance Information
    ┌──────────────────┬─────────────────┬─────────────────┬───────────────────┐
    │ Mosaic Id        │ Relative Amount │ Absolute Amount │ Expiration Height │
    ├──────────────────┼─────────────────┼─────────────────┼───────────────────┤
    │ 75AF035421401EF0 │ 750.0           │ 750000000       │ Never             │
    └──────────────────┴─────────────────┴─────────────────┴───────────────────┘

This account owns ``750 nem.xem`` units. If your row after mosaics is empty, follow :doc:`the previous guide instructions <setup-workstation>` to get test currency.

2. Create a second account to identify the **customer**.

.. code-block:: bash

    nem2-cli account generate --network TEST_NET --save --url http://api-harvest-20.us-west-1.nemtech.network:3000 --profile customer

    New Account

    ┌─────────────┬────────────────────────────────────────────────┐
    │ Property    │ Value                                          │
    ├─────────────┼────────────────────────────────────────────────┤
    │ Address     │ TBULEA-UG2CZQ-ISUR44-2HWA6U-AKGWIX-HDABJV-IPS4 │
    ├─────────────┼────────────────────────────────────────────────┤
    │ Public Key  │ E59...82F                                      │
    ├─────────────┼────────────────────────────────────────────────┤
    │ Private Key │ 111...111                                      │
    └─────────────┴────────────────────────────────────────────────┘

*************************
Monitoring the blockchain
*************************

Accounts change the blockchain state through transactions. Once an account announces a transaction, if properly formed, the server will return an OK response.

Receiving an OK response does not mean the transaction is valid, or included included in a block. A good practice is to **monitor transactions** before being announced.

Open three new terminals:

1.  Monitor transaction validation errors.

.. code-block:: bash

   nem2-cli monitor status

2. Monitor ``unconfirmed`` transactions to know which transactions have reached the network but are not included in a block yet.

.. code-block:: bash

   nem2-cli monitor unconfirmed

3. Monitor ``confirmed`` transactions to see which announced transactions are included in a block.

.. code-block:: bash

   nem2-cli monitor confirmed

*******************
Creating the ticket
*******************

We are representing the ticket with Catapult :doc:`Mosaics <../concepts/mosaic>`. This feature can be used to represent any asset on the blockchain, such as objects, tickets, coupons, stock share representation, and even your cryptocurrency. They have configurable properties, which are defined at the moment of their creation. For example, we opt to set **transferable property to false**. This means that the customer can only send back the ticket to the creator of the mosaic, avoiding the ticket reselling.

1. Create a new mosaic to represent the ticket configured as follows with the ticket vendor account.

.. csv-table::
    :header: "Property", "Value", "Description"
    :delim: ;
    :widths: 20 30 50

    Divisibility; 0 ; The mosaic units must not be divisible, no one should be able to send "0.5 tickets".
    Duration; 1000; The mosaic will be registered for 1000 blocks.
    Amount; 99; The number of tickets you are going to create.
    Supply mutable; True; The mosaic supply can change at a later point.
    Transferable; False; The mosaic can be only transferred back to the mosaic creator.

.. code-block:: bash

   nem2-cli transaction mosaic --amount 99 --supply-mutable --divisibility 0 --duration 1000 --max-fee 2000000

2. Copy the MosaicId returned in the ``monitor confirmed`` tab after the transaction gets confirmed.

.. code-block:: bash

   ...  MosaicId:7cdf3b117a3c40cc ...

******************
Sending the ticket
******************

Now that we have defined the mosaic, we are going to send one ticket unit to a customer announcing a :ref:`TransferTransaction <transfer-transaction>`.

1. Prepare the **TransferTransaction** with the following values.

.. csv-table::
    :header: "Property", "Value", "Description"
    :delim: ;
    :widths: 20 30 50

    Deadline; Default (2 hours) ; The maximum amount of time to include the transaction on the blockchain. A transaction will be dropped if it stays unconfirmed after the stipulated time. The parameter is defined in hours and must in a range of 1 to 23 hours.
    Recipient; TBULEA...IPS4; The recipient account address. In this case, the customer's address.
    Mosaics; [1 7cdf3b117a3c40cc]; The array of mosaics to send.
    Message; enjoy your ticket; The attached message.
    Network; TEST_NET; The network type.

.. example-code::

    .. viewsource:: ../resources/examples/typescript/transfer/FirstApplication.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../resources/examples/typescript/transfer/FirstApplication.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

Although the transaction is defined, it has not been announced to the network yet.

2. Sign the transaction with the **ticket vendor account**, so that the network can verify the authenticity of the transaction.

.. note:: Include the first block generation hash to make the transaction only valid for your network. Open ``nodeUrl + '/block/1'`` in a new browser tab and copy the ``meta.generationHash`` value.

.. example-code::

    .. viewsource:: ../resources/examples/typescript/transfer/FirstApplication.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../resources/examples/typescript/transfer/FirstApplication.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Once signed, you can announce the transaction to the network.

.. example-code::

    .. viewsource:: ../resources/examples/typescript/transfer/FirstApplication.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../resources/examples/typescript/transfer/FirstApplication.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. code-block:: bash

        nem2-cli transaction transfer --recipient-address TBULEA-UG2CZQ-ISUR44-2HWA6U-AKGWIX-HDABJV-IPS4 --mosaics 7cdf3b117a3c40cc::1 --message enjoy_your_ticket --max-fee 2000000

4. When the transaction is confirmed, check if the customer has received the ticket.

.. code-block:: bash

    nem2-cli account info --profile customer

***************************
Did you solve the use case?
***************************

* ✅ Identify each customer: Creating Catapult accounts for each customer.

* ✅ Avoid ticket reselling: Creating a non-transferable mosaic.

* ✅ Avoid non-authentic tickets and duplicate ones: Creating a unique mosaic.

Continue learning about more :doc:`Catapult built-in features <../concepts/account>`.
