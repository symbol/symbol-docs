:orphan:

.. post:: 16 Jan, 2019
    :category: Transfer Transaction, Monitoring
    :excerpt: 1
    :nocomments:

###############################
Monitoring a transaction status
###############################

Make sure a transaction gets included on the blockchain after being announced.

**********
Background
**********

Catapult enables an **asynchronous transaction announcement**. After an application publishes a transaction, the API node will always accept it if it is well-formed.

At this time, the server does not ensure that the transaction is valid. For example, you might not have the number of asset units you want to need to send and still, get a positive response from the server. For this reason, the "OK" response does not guarantee getting the transaction included in a block. To make sure the transaction is added in a block, you must track the :doc:`transaction status <../../concepts/transaction>` using **Listeners**.

`Listeners <websockets>`_ enable receiving notifications possible when a change on the blockchain occurs. The notification is received in real-time without having to poll the API waiting for a reply.

In this guide, you are going to learn how to verify that your transaction has been **recorded permanently** before executing any other critical action.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`

*************************
Method #01: Using the SDK
*************************

1. Define the transaction you want to announce. In this case, we are going to send the message ``Test`` to ``TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP``.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Sign the transaction with your account.

.. note:: To make the transaction only valid for your network, include the first block generation hash. Open ``nodeUrl + '/block/1'`` in a new browser tab and copy the ``meta.generationHash`` value.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Open a new :ref:`Listener <websockets>`. The listener communicates with the API WebSocket, which forward you asynchronously the status of the transaction.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

4. Monitor if the WebSocket **connection is alive**. :doc:`Blocks <../../concepts/block>` are generated every ``15`` seconds in average, so a timeout can be raised if there is no response after 30 seconds approximately.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.js
        :language: javascript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

    .. viewsource:: ../../resources/examples/bash/blockchain/ListeningNewBlocks.sh
        :language: bash
        :start-after: #!/bin/sh

5. Monitor if there is some **validation error** with the transaction issued. When you receive a message from status WebSocket channel, it always means **the transaction did not meet the requirements**. You need to handle the error accordingly, by reviewing the :ref:`error status list <status-errors>`.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.ts
        :language: typescript
        :start-after:  /* start block 05 */
        :end-before: /* end block 05 */

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.js
        :language: javascript
        :start-after:  /* start block 05 */
        :end-before: /* end block 05 */

    .. viewsource:: ../../resources/examples/bash/monitor/MonitoringTransactionStatusError.sh
        :language: bash
        :start-after: #!/bin/sh

6. Monitor as well if the transaction **reaches the network**. When you receive a message from **unconfirmed WebSocket channel**, the transaction is valid and is waiting to be included in a block. This does not mean necessarily that the transaction will be included, as a second validation happens before being finally confirmed.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.ts
        :language: typescript
        :start-after:  /* start block 06 */
        :end-before: /* end block 06 */

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.js
        :language: javascript
        :start-after:  /* start block 06 */
        :end-before: /* end block 06 */

    .. viewsource:: ../../resources/examples/bash/monitor/MonitoringTransactionUnconfirmed.sh
        :language: bash
        :start-after: #!/bin/sh

7. Monitor when the transaction gets **included in a block**. When included, transaction can still be :doc:`rolled-back <../../concepts/transaction>` because of forks. You can decide for yourself that after e.g. 6 blocks the `transaction is secured <https://gist.github.com/aleixmorgadas/3d856d318e60f901be09dbd23467b374>`_.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.ts
        :language: typescript
        :start-after:  /* start block 07 */
        :end-before: /* end block 07 */

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.js
        :language: javascript
        :start-after:  /* start block 07 */
        :end-before: /* end block 07 */

    .. viewsource:: ../../resources/examples/bash/monitor/MonitoringTransactionConfirmed.sh
        :language: bash
        :start-after: #!/bin/sh

8.  Finally, announce the transaction to the network.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.ts
        :language: typescript
        :start-after:  /* start block 08 */
        :end-before: /* end block 08 */

    .. viewsource:: ../../resources/examples/typescript/monitor/MonitoringTransactionStatus.js
        :language: javascript
        :start-after:  /* start block 08 */
        :end-before: /* end block 08 */

    .. viewsource:: ../../resources/examples/bash/transfer/SendingATransferTransaction.sh
        :language: bash
        :start-after: #!/bin/sh

If you missed the WebSocket response, check the transaction status after by calling the `transaction status <https://nemtech.github.io/nem2-openapi/#operation/getTransactionStatus>`_ endpoint. The status of failed transactions is not persistent, meaning that eventually is pruned.

.. note:: If you are developing a small application, and monitoring asynchronous transactions adds too much overhead to your project, consider :doc:`turning asynchronous transactions announcement into synchronous <turning-the-asynchronous-transaction-announcement-into-synchronous>`.

.. _monitoring-transactions-client-side:

************************************************************
Troubleshooting: Monitoring transactions on the client side
************************************************************

Note that the NEM2-SDK for TypeScript base Listener is designed to work on Node.js backend environments. If you want to execute Listeners from the client-side (e.g., Angular, React, Vue.), pass the browser implementation of the WebSocket to the Listener.

.. code-block:: typescript

  const listener = new Listener('ws://api-01.us-east-1.nemtech.network:3000', WebSocket);
  listener.open().then(() => ...
