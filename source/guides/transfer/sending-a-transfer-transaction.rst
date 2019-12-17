:orphan:

.. post:: 10 Aug, 2018
    :category: Transaction
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

Alice wants to send 10 nem.xem to Bob, whose address is ``TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP``.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with network currency <setup-creating-a-test-account>`

**********************
Monitoring the network
**********************

To understand the transaction lifecycle, we recommend you to open three new terminal instances.

1.  Monitor transaction validation errors.

.. code-block:: bash

   nem2-cli monitor status

2. Monitor ``unconfirmed`` transactions to know which transactions have reached the network but are not included in a block yet.

.. code-block:: bash

   nem2-cli monitor unconfirmed

3. Monitor ``confirmed`` transactions to see which announced transactions are included in a block.

.. code-block:: bash

   nem2-cli monitor confirmed

*************************
Method #01: Using the SDK
*************************

1. Define the **TransferTransaction**, including Bob address as the recipient and attaching ``10 nem.xem``.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransaction.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransaction.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

As you may have noticed, transfer transactions require an array of mosaics as a parameter. This permits sending transfer transactions with multiple mosaics at the same time.

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

.. note:: Catapult works with absolute amounts. To get an absolute amount, multiply the number of assets you want to send by 10\ :sup:`divisibility`.  For example, if the mosaic has :doc:`divisibility <../mosaic/getting-mosaic-information>` 2, to send 10 units (relative) you should define 1000 (absolute) instead.

2. Sign the transaction with Alice's account.

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

3. Once signed, :doc:`announce the transaction <../../concepts/transaction>` to the network.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransaction.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/transfer/SendingATransferTransaction.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. Open the terminal where you are monitoring account transactions ``status``. It should be empty. If there is an error, you can check :ref:`the error code meaning here <status-errors>`.

A new transaction should have appeared in the terminal where you are monitoring ``unconfirmed``. At this point, the transaction has reached the network, but it is not clear if it will get included in a block.

If it is included in a block, the transaction gets processed, and the amount stated in the transaction gets transferred from the sender's account to the recipient's account.

*************************
Method #02: Using the CLI
*************************

.. viewsource:: ../../resources/examples/bash/transfer/SendingATransferTransaction.sh
    :language: bash
    :start-after: #!/bin/sh

