:orphan:

.. post:: 10 Aug, 2018
    :category: Transfer Transaction
    :excerpt: 1
    :nocomments:

#################################################
Sending mosaics and messages between two accounts
#################################################

Transfer mosaics and messages between two accounts.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with network currency <setup-creating-a-test-account>`

**********
Background
**********

.. figure:: ../../resources/images/examples/transfer-transaction.png
    :align: center
    :width: 450px

    Sending a TransferTransaction

Alice wants to send 10 |networkcurrency| to Bob, whose address is ``TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP``.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with network currency <setup-creating-a-test-account>`

*************************
Method #01: Using the SDK
*************************

1. In a new terminal, monitor which transactions involving the ticket vendor's address are confirmed and which of them are rejected by the network.

.. code-block:: bash

   symbol-cli monitor all --address <alice-address>

2. Define the **TransferTransaction**, including Bob address as the recipient and attaching 10 |networkcurrency|.

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

.. note:: |codename| works with absolute amounts. To get an absolute amount, multiply the number of assets you want to send by 10\ :sup:`divisibility`.  For example, if the mosaic has :doc:`divisibility <../mosaic/getting-mosaic-information>` 2, to send 10 units (relative) you should define 1000 (absolute) instead.

3. Sign the transaction with Alice's account.

.. note:: Include the first block generation hash to make the transaction only valid for your network. Open ``nodeUrl + '/block/1'`` in a new browser tab and copy the ``meta.generationHash`` value.

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
The transaction should appear as confirmed after ±15 seconds and the amount defined gets transferred from the sender's account to the recipient's account.
If the terminal raises an error, check the error code meaning :ref:`here <status-errors>`.

*************************
Method #02: Using the CLI
*************************

.. viewsource:: ../../resources/examples/bash/transfer/SendingATransferTransaction.sh
    :language: bash
    :start-after: #!/bin/sh

