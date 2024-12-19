##############################
Writing your first application
##############################

This guide will take you through the |codename| development cycle.

First, we will architect our solution combining some built-in features available in |codename|, such as :doc:`mosaics <../concepts/mosaic>` and :doc:`accounts <../concepts/account>`.
By the end of this guide, you will know how to issue and monitor transactions on the blockchain.

********
Use case
********

The secondary ticket market, also known as the resale market, is the exchange of tickets that happens between individuals after they have purchased a ticket from an initial vendor.
The initial vendor could be the event website, an online ticket vending platform, a shop, or a stall at the entrance of the event.

Buying a ticket from someone that is not the initial vendor does not necessarily mean paying more for the ticket.
There is the chance to be a victim of buying a fake or duplicate ticket, where the initial original vendor can't do anything to solve the issue.

What do we want to solve?
=========================

.. figure:: ../resources/images/examples/getting-started.png
    :width: 600px
    :align: center

    Authorization model

A ticket vendor wants to set up a system to:

a) Identify each ticket and customer.
b) Avoid ticket reselling.
c) Avoid non-authentic tickets and duplicate ones.

Why Symbol is the right choice?
===============================

Blockchain technology makes sense in cases where:

* There are different participants involved.
* These participants need to trust each other.
* There is a need to keep track of an immutable set of events.

|codename| is a **flexible blockchain** technology.
Instead of uploading all the application logic into the blockchain, you can use its tested features through **API calls** to transfer and store value, authorization, traceability, and identification.

The rest of the code will remain **off-chain**.
This reduces the inherent immutability risk, as you could change the process when necessary.

****************************************
Creating an account for each participant
****************************************

First, let's identify the actors involved in the use case we want to solve:

* The ticket vendor.
* The customer.

We have decided to represent the ticket vendor and customer as separate :doc:`accounts <../concepts/account>`.
Think of accounts as deposit boxes on the blockchain, which can be modified with an appropriate private key.
Each account is unique and identified by an address.

Have you loaded an account with test |networkcurrency|?
In the :ref:`previous guide <setup-creating-a-test-account>`, you have learned how to create an account with |cli|.
This account will represent the **ticket vendor** account.

1. Run the following command to verify if the ticket vendor account has |networkcurrency| units.

   .. code-block:: bash

      symbol-cli account info --profile testnet

   You should see on your screen a line similar to:

   .. code-block:: symbol-cli

      Account Information
      ┌───────────────────┬────────────────────────────────────────────────┐
      │ Property          │ Value                                          │
      ├───────────────────┼────────────────────────────────────────────────┤
      │ Address           │ TCWYXK-VYBMO4-NBCUF3-AXKJMX-CGVSYQ-OS7ZG2-TLI  │
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
      │ 5E62990DCAC5BE8A │ 750.0           │ 750000000       │ Never             │
      └──────────────────┴─────────────────┴─────────────────┴───────────────────┘

   This account owns 750 |networkcurrency| relative units.
   If your row after "Balance Information" is empty, follow the :doc:`previous guide <setup-workstation>` to get test currency.

2. Create a second account with the CLI to identify the **customer**.

   .. code-block:: symbol-cli

      symbol-cli account generate --network TEST_NET --save \
                 --url <NODE_URL> --profile customer

      New Account

      ┌─────────────┬────────────────────────────────────────────────┐
      │ Property    │ Value                                          │
      ├─────────────┼────────────────────────────────────────────────┤
      │ Address     │ TCHBDE-NCLKEB-ILBPWP-3JPB2X-NY64OE-7PYHHE-32I  │
      ├─────────────┼────────────────────────────────────────────────┤
      │ Public Key  │ E59...82F                                      │
      ├─────────────┼────────────────────────────────────────────────┤
      │ Private Key │ 111...111                                      │
      └─────────────┴────────────────────────────────────────────────┘

*************************
Monitoring the blockchain
*************************

Accounts change the blockchain state through transactions.
Once an account announces a transaction, the server will return an OK response if it is properly formed.

However, receiving an OK response does not mean the transaction is valid or included in a block.
For example, the transaction could be rejected because the issuer does not have enough |networkcurrency|, the message set is too large, or the fee set is too low.

A good practice is to **monitor transactions** before being announced to know when they get confirmed or rejected by the network.

1. In a new terminal, monitor the transactions involving the ticket vendor's account to know if they are confirmed or rejected by the network.

   .. code-block:: bash

      symbol-cli monitor all --address TCWYXK-VYBMO4-NBCUF3-AXKJMX-CGVSYQ-OS7ZG2-TLI

*******************
Creating the ticket
*******************

We are representing the ticket with |codename| :doc:`mosaics <../concepts/mosaic>`.
This feature can be used to represent any asset on the blockchain, such as objects, tickets, coupons, stock share representation, and even your cryptocurrency.

Mosaics have configurable properties, which are defined at the moment of their creation.
For example, we opt to set **transferable property to false**.
This means that the customer can only send the ticket back to the mosaic's creator, avoiding the ticket reselling.

1. Use the CLI with the ticket vendor account to create a new mosaic that will represent the ticket. This new mosaic can be configured as follows:

   .. csv-table::
       :header: "Property", "Value", "Description"
       :delim: ;
       :widths: 20 15 65

       Divisibility; 0 ; The mosaic units must not be divisible. No one should be able to send "0.5 tickets".
       Duration; 1000; The mosaic will be registered for 1000 blocks.
       Amount; 99; The number of tickets you are going to create.
       Supply mutable; True; The mosaic supply can change at a later point.
       Transferable; False; The mosaic can be only transferred back to the mosaic creator.


   .. code-block:: bash

      symbol-cli transaction mosaic --amount 99 --supply-mutable \
                 --divisibility 0 --duration 1000 --max-fee 2000000 \
                 --sync --profile testnet

2. After announcing the transaction, copy the mosaic id displayed in the terminal.

   .. code-block:: bash

      The new mosaic id is: 7cdf3b117a3c40cc

   The transaction should appear as confirmed after 30 seconds at most.
   If the terminal raises an error, you can check the error code description `here <https://github.com/symbol/symbol-openapi/blob/main/spec/core/transaction/schemas/TransactionStatusEnum.yml>`_.

******************
Sending the ticket
******************

Now that we have defined the mosaic, we will send one ticket unit to a customer announcing a :ref:`transfertransaction`.

1. Open a new file, and define a **TransferTransaction** with the following values.

   .. csv-table::
       :header: "Property", "Value", "Description"
       :delim: ;
       :widths: 20 30 50

       Deadline; Default (2 hours) ; The maximum amount of time to wait for the transaction to be included on the blockchain. A transaction will be dropped if it stays unconfirmed after this amount of time. The parameter is defined in hours and must be in the 1 to 6 range (1 to 48 for :ref:`aggregate-bonded` transactions).
       Recipient; TCHBDE...32I; The recipient account address. In this case, the customer's address.
       Mosaics; [1 ``7cdf3b117a3c40cc``]; The array of mosaics to send.
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

       .. viewsource:: ../resources/examples/java/src/test/java/symbol/guides/examples/transfer/FirstApplication.java
           :language: java
           :start-after:  /* start block 01 */
           :end-before: /* end block 01 */

   Although the transaction is defined, it has not been announced to the network yet.

2. Sign the transaction with the **ticket vendor account**, so that the network can verify the authenticity of the transaction.

   .. note:: Include the network generation hash to make the transaction only valid for your network. Open :term:`NODE_URL` ``/node/info`` in a new browser tab and copy the ``meta.networkGenerationHash`` value.

   .. example-code::

       .. viewsource:: ../resources/examples/typescript/transfer/FirstApplication.ts
           :language: typescript
           :start-after:  /* start block 02 */
           :end-before: /* end block 02 */

       .. viewsource:: ../resources/examples/typescript/transfer/FirstApplication.js
           :language: javascript
           :start-after:  /* start block 02 */
           :end-before: /* end block 02 */

       .. viewsource:: ../resources/examples/java/src/test/java/symbol/guides/examples/transfer/FirstApplication.java
           :language: java
           :start-after:  /* start block 02 */
           :end-before: /* end block 02 */

3. Once signed, announce the transaction to the network.

   .. example-code::

       .. viewsource:: ../resources/examples/typescript/transfer/FirstApplication.ts
           :language: typescript
           :start-after:  /* start block 03 */
           :end-before: /* end block 03 */

       .. viewsource:: ../resources/examples/typescript/transfer/FirstApplication.js
           :language: javascript
           :start-after:  /* start block 03 */
           :end-before: /* end block 03 */

       .. viewsource:: ../resources/examples/java/src/test/java/symbol/guides/examples/transfer/FirstApplication.java
           :language: java
           :start-after:  /* start block 03 */
           :end-before: /* end block 03 */

       .. code-block:: bash

           symbol-cli transaction transfer --recipient-address TCHBDE-NCLKEB-ILBPWP-3JPB2X-NY64OE-7PYHHE-32I --mosaics 7cdf3b117a3c40cc::1 --message enjoy_your_ticket --max-fee 2000000 --sync

4. Look at the terminal window where you are monitoring transactions. When the transaction appears as confirmed, you can check if the customer has received the ticket with the following command.

   .. code-block:: bash

      symbol-cli account info --profile customer

**************************
Did we solve the use case?
**************************

* ✅ Identify each customer: Creating |codename| accounts for each customer.

* ✅ Avoid ticket reselling: Creating a non-transferable mosaic.

* ✅ Avoid non-authentic tickets and duplicate ones: Creating a unique mosaic.

Continue learning about more about |codename| :doc:`built-in features <../concepts/overview>`.
