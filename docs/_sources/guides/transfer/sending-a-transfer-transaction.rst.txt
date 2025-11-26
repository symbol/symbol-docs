.. post:: 10 Aug, 2018
    :category: Transfer Transaction
    :tags: wallet, SDK, CLI
    :excerpt: 1
    :nocomments:

#################################################
Sending mosaics and messages between two accounts
#################################################

Define, sign, and announce a transfer transaction.

This guide will show you how to send 10 |networkcurrency| from your account to Bob's, whose address is ``TB6Q5E-YACWBP-CXKGIL-I6XWCH-DRFLTB-KUK34I-YJQ``.

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.
- Create a new :ref:`account <setup-creating-a-test-account>`.
- Load the account with enough |networkcurrency| to pay for transaction fees.

************************************
Method #01: Using the Desktop Wallet
************************************

1. From the home page of your Desktop Wallet, click on the "**Transfer**" tab.

.. figure:: ../../resources/images/screenshots/desktop-transfer-1.gif
    :align: center
    :width: 800px

2. Fill out the necessary information for the transfer transaction.
For this example, you need to specify that you are sending 10 XYM to Bob (``TB6Q5E-YACWBP-CXKGIL-I6XWCH-DRFLTB-KUK34I-YJQ``).  You can add a message, but it is not necessary in this case.

.. figure:: ../../resources/images/screenshots/desktop-transfer-2.gif
    :align: center
    :width: 800px

3. Once you have filled out all the information, click "**Send**". A popup will show.
Read and verify the information, then enter your wallet password and click "**Confirm**".

4. You can verify that the transaction was successful by going back to the "**Dashboard**" tab.
At first, it might show up under "**Unconfirmed**" transactions as the transaction becomes included in a block, but you should soon be able to see it under the "**Confirmed**" transactions.

*************************
Method #02: Using the SDK
*************************

1. In a new terminal, monitor the transactions involving the sender account to know if they are confirmed or rejected by the network.

.. code-block:: bash

   symbol-cli monitor all --address <YOUR-ADDRESS>

2. Open a new file and define the **TransferTransaction**.
Include Bob's address as the recipient, and attach  10 |networkcurrency|.

Mosaic units in |codename| are defined as **absolute amounts**.
To get an absolute amount, multiply the number of assets you want to send by 10\ :sup:`divisibility`.
For example, if the mosaic had :doc:`divisibility <../mosaic/getting-mosaic-information>` 2, to send 10 units (relative) you should define 1000 (absolute) instead.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransaction.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransaction.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/transfer/SendingATransferTransaction.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

As you may have noticed, transfer transactions require an array of mosaics as a parameter.
This permits sending transfer transactions with multiple mosaics at the same time.

If you own more than one mosaic, you can send them together in the same transaction:

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionWithMultipleMosaics.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransactionWithMultipleMosaics.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/transfer/SendingATransferTransactionWithMultipleMosaics.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

3. Sign the transaction with your account.
Then, include the network generation hash seed to make the transaction only valid for your network.
To retrieve the network generation hash seed, open :term:`NODE_URL` ``/node/info`` in a new browser tab and copy ``meta.networkGenerationHashSeed`` value.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransaction.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransaction.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/transfer/SendingATransferTransaction.java
        :language: java
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

4. Once signed, :doc:`announce the transaction <../../concepts/transaction>` to the network.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransaction.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransaction.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/transfer/SendingATransferTransaction.java
        :language: java
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

5. Open the terminal where you are monitoring the transaction's status.
The transaction should appear as confirmed after 30 seconds at most and the amount defined gets transferred from the sender's account to the recipient's account.
If the terminal raises an error, you can check the error code description `here <https://github.com/symbol/symbol-openapi/blob/main/spec/core/transaction/schemas/TransactionStatusEnum.yml>`_.

*************************
Method #03: Using the CLI
*************************

Open a terminal window and run the following command to transfer 10 XYM from your default account.

Remember to replace ``TB6Q5E-YACWBP-CXKGIL-I6XWCH-DRFLTB-KUK34I-YJQ`` with the recipient address you want to send mosaics too
and ``@symbol.xym::10000000`` with the desired absolute amount.

Optionally, you can set a custom message with the option ``--message``.

.. viewsource:: ../../resources/examples/bash/transfer/SendingATransferTransaction.sh
    :language: bash
    :start-after: #!/bin/sh
