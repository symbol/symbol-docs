:orphan:

.. post:: 16 Jan, 2019
    :category: monitoring, transfer-transaction
    :excerpt: 1
    :author: jorisadri
    :nocomments:

###############################
Monitoring a transaction status
###############################

Make sure a :doc:`transaction <../../concepts/transaction>` gets included in the blockchain after being announced.

**********
Background
**********

After calling an API method that changes the database state, you usually will receive a response if the change has been applied or failed due to some constraint. The application spends precious time waiting for the response, in the meanwhile other actions can be processed.

When working with blockchain technology, it is interesting to "fire" the transaction, let the node process it, and receive a notification if it succeeded or failed. Differently, from a traditional database, the average confirmation time of modification is higher, passing from milliseconds to seconds - or minutes in the worst case.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Text editor or IDE
- NEM2-SDK or CLI

************************
Let’s get into some code
************************

Catapult enables asynchronous transaction announcement. After you publish a transaction, the API node will always accept it if it is well-formed.

At this time, the server does not ensure that the transaction is valid - for example, you don't have the amount of asset units you want to send-, hence is not sure it will be added in a block.

To make sure the transaction is added in a block, you must track the :doc:`transaction status <../../concepts/transaction>` using :doc:`Listeners <../../api/websockets>`.

:doc:`Listeners <../../api/websockets>` enable receiving notifications possible when a change in the blockchain occurs. The notification is received in real time without having to poll the API waiting for a reply.

1. Define the transaction you want to announce. In this case, we are going to send the message ``Test`` to ``SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54``.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/MonitoringTransactionStatus.ts
        :caption: |monitoring-transactions-status-ts|
        :language: typescript
        :lines:  32-38

2. Sign the transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/MonitoringTransactionStatus.ts
        :caption: |monitoring-transactions-status-ts|
        :language: typescript
        :lines:  41-43


3. Open a new :doc:`Listeners <../../api/websockets>`. This communicates with the API WebSocket, who will communicate you asynchronously the status of the transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/MonitoringTransactionStatus.ts
        :caption: |monitoring-transactions-status-ts|
        :language: typescript
        :lines:  46-52

4. Start monitoring if the WebSocket connection is alive. :doc:`Blocks <../../concepts/block>` are generated every ``15`` seconds in average, so a timeout can be raised if there is no response after 30 seconds approximately.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/MonitoringTransactionStatus.ts
        :caption: |monitoring-transactions-status-ts|
        :language: typescript
        :lines:  54-63

    .. literalinclude:: ../../resources/examples/cli/blockchain/ListeningNewBlocks.sh
        :caption: |listening-new-blocks-cli|
        :language: bash
        :start-after: #!/bin/sh

5. Monitor if there is some validation error with the transaction issued. When you receive a message from status WebSocket channel, it always means the transaction did not meet the requirements. You need to handle the error accordingly, by reviewing the :doc:`error status list <../../api/status-errors>`.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/MonitoringTransactionStatus.ts
        :caption: |monitoring-transactions-status-ts|
        :language: typescript
        :lines:  65-73

    .. literalinclude:: ../../resources/examples/cli/transaction/MonitoringTransactionStatusError.sh
        :caption: |monitoring-transaction-status-error-cli|
        :language: bash
        :start-after: #!/bin/sh

6. Monitor as well if the transaction reaches the network. When you receive a message from unconfirmed WebSocket channel, the transaction is valid and is waiting to be included in a block. This does not mean necessarily that the transaction will be included, as a second validation happens before being finally confirmed.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/MonitoringTransactionStatus.ts
        :caption: |monitoring-transactions-status-ts|
        :language: typescript
        :lines:  75-80

    .. literalinclude:: ../../resources/examples/cli/transaction/MonitoringTransactionUnconfirmed.sh
        :caption: |monitoring-transaction-unconfirmed-cli|
        :language: bash
        :start-after: #!/bin/sh

7. Monitor when the transaction gets included in a block. When included, transaction can still be :doc:`rolled-back <../../concepts/transaction>` because of forks. You can decide for yourself that after e.g. 6 blocks the `transaction is secured <https://gist.github.com/aleixmorgadas/3d856d318e60f901be09dbd23467b374>`_.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/MonitoringTransactionStatus.ts
        :caption: |monitoring-transactions-status-ts|
        :language: typescript
        :lines:  82-99

    .. literalinclude:: ../../resources/examples/cli/transaction/MonitoringTransactionConfirmed.sh
        :caption: |monitoring-transaction-confirmed-cli|
        :language: bash
        :start-after: #!/bin/sh

8.  Finally, announce the transaction to the network.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/MonitoringTransactionStatus.ts
        :caption: |monitoring-transactions-status-ts|
        :language: typescript
        :lines: 101-

    .. literalinclude:: ../../resources/examples/cli/transaction/SendingATransferTransaction.sh
        :caption: |sending-a-transfer-transaction-cli|
        :language: bash
        :start-after: #!/bin/sh

If you missed the WebSocket response, check the transaction status after by calling the `transaction status <https://nemtech.github.io/api/endpoints.html#operation/getTransactionStatus>`_ endpoint. The status of failed transactions is not persistent, meaning that eventually is pruned.

.. note:: If you are developing a small application, and monitoring asynchronous transactions adds too much overhead to your project, consider :doc:`turning asynchronous transactions announcement into synchronous <turning-the-asynchronous-transaction-announcement-into-synchronous>`.

.. _monitoring-transactions-client-side:

************************************************************
Troubleshooting: Monitoring transactions on the client side
************************************************************

The nem2-sdk for typescript base Listener was designed to work on Node.js backend environments.

To make the code work in the client side (e.g., Angular, React, Vue.), pass the browser implementation of the WebSocket to the Listener.

.. code-block:: typescript

  const listener = new Listener('ws://localhost:3000', WebSocket);
  listener.open().then(() => ...

************
What's next?
************

Run your application and try to :doc:`send a transfer transaction <../transaction/sending-a-transfer-transaction>` to the selected account. If all goes well, you will see the transaction information in your terminal.

.. |monitoring-transactions-status-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/MonitoringTransactionStatus.ts" target="_blank">View Code</a>

.. |listening-new-blocks-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/blockchain/ListeningNewBlocks.sh" target="_blank">View Code</a>

.. |monitoring-transaction-status-error-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/transaction/MonitoringTransactionStatusError.sh" target="_blank">View Code</a>

.. |monitoring-transaction-unconfirmed-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/transaction/MonitoringTransactionUnconfirmed.sh" target="_blank">View Code</a>

.. |monitoring-transaction-confirmed-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/transaction/MonitoringTransactionConfirmed.sh" target="_blank">View Code</a>

.. |sending-a-transfer-transaction-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/transaction/SendingATransferTransaction.sh" target="_blank">View Code</a>