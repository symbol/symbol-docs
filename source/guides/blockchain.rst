#####################
Monitoring blockchain
#####################

.. _guide-debugging-transactions:

**********************
Debugging transactions
**********************

This tutorial will guide you in the creation of an application to monitor announced :doc:`transactions <../concepts/transaction>`.

Background
==========
If you are used to NIS1 API calls, you know that after announcing a transaction you received a success message or some error indicating the reason why the transaction has not been included in the block.

The new NIS2-API works differently, being *asynchronous*. When a user announces a transaction through the API, it always returns an OK.

To know the status of the transaction, which can be OK or Failure, you have to:

a) Check the status via API endpoint.
b) Listen to the different WebSocket channels.

.. note:: While developing, it is encouraged to open terminals with different listeners to monitor transactions you send using NEM2-CLI.

Prerequisites
=============

- Finish the :doc:`getting started section <../getting-started/setup-workstation>`
- Text editor or IDE
- NEM2-SDK or CLI

Let’s get into some code
=========================

Create a new listener to get notified every time a transaction related to your account reaches the network and gets confirmed.

.. example-code::

    .. literalinclude:: ../resources/examples/typescript/blockchain/DebuggingTransactionsConfirmed.ts
        :language: typescript
        :lines:  22

    .. literalinclude:: ../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/DebuggingTransactionsConfirmed.java
        :language: java
        :lines: 35

    .. literalinclude:: ../resources/examples/javascript/blockchain/DebuggingTransactionsConfirmed.js
        :language: javascript
        :lines: 23

Open the connection. You only need to open the connection once and then connect to all desired channels.

.. example-code::

    .. literalinclude:: ../resources/examples/typescript/blockchain/DebuggingTransactionsConfirmed.ts
        :language: typescript
        :lines:  24

    .. literalinclude:: ../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/DebuggingTransactionsConfirmed.java
        :language: java
        :lines: 39

    .. literalinclude:: ../resources/examples/javascript/blockchain/DebuggingTransactionsConfirmed.js
        :language: javascript
        :lines: 25

In this example, we will reach only transactions that get confirmed. You can also create other listeners to check unconfirmed, aggregate bounded or transactions that fail.

.. example-code::

    .. literalinclude:: ../resources/examples/typescript/blockchain/DebuggingTransactionsConfirmed.ts
        :language: typescript
        :lines:  24-33

    .. literalinclude:: ../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/DebuggingTransactionsConfirmed.java
        :language: java
        :lines: 37-43

    .. literalinclude:: ../resources/examples/javascript/blockchain/DebuggingTransactionsConfirmed.js
        :language: javascript
        :lines: 25-

    .. literalinclude:: ../resources/examples/cli/blockchain/DebuggingTransactionsConfirmed.sh
        :language: bash
        :start-after: #!/bin/sh

What's next?
============

Run your application and try to :ref:`send a transfer transaction <guide-sending-a-transfer-transaction>` to the selected account. If all goes well, you will see transaction information in your terminal.

.. _guide-listening-new-blocks:

********************
Listening new blocks
********************

Following this guide you will build a simple application to get notified when a new :doc:`block <../concepts/block>` is included in the network.

Prerequisites
=============

- Finish the :doc:`getting started section <../getting-started/setup-workstation>`
- Text editor or IDE
- NEM2-SDK or CLI

Let’s get into some code
=========================

.. example-code::

    .. literalinclude:: ../resources/examples/typescript/blockchain/ListeningNewBlocks.ts
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/ListeningNewBlocks.java
        :language: java
        :lines: 33-39

    .. literalinclude:: ../resources/examples/javascript/blockchain/ListeningNewBlocks.js
        :language: javascript
        :lines: 22-

    .. literalinclude:: ../resources/examples/cli/blockchain/ListeningNewBlocks.sh
        :language: bash
        :start-after: #!/bin/sh
        
.. _guide-getting-block-by-height:

***********************
Getting block by height
***********************

A simple program to get :doc:`block <../concepts/block>` information given a height.

Prerequisites
=============

- Finish the :doc:`getting started section <../getting-started/setup-workstation>`
- Text editor or IDE
- NEM2-SDK or CLI

Let’s get into some code
=========================

Do you have curiosity to see what happened in genesis block? Run the following code to find out what happened.

.. example-code::

    .. literalinclude:: ../resources/examples/typescript/blockchain/GettingBlockByHeight.ts
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/GettingBlockByHeight.java
        :language: java
        :lines: 34-41

    .. literalinclude:: ../resources/examples/javascript/blockchain/GettingBlockByHeight.js
        :language: javascript
        :lines: 23-

Here you have a snippet to check the number last block number.

.. example-code::

    .. literalinclude:: ../resources/examples/typescript/blockchain/GettingBlockchainHeight.ts
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../resources/examples/java/src/test/java/nem2/guides/examples/blockchain/GettingBlockchainHeight.java
        :language: java
        :lines: 33-37

    .. literalinclude:: ../resources/examples/javascript/blockchain/GettingBlockchainHeight.js
        :language: javascript
        :lines: 23-

    .. literalinclude:: ../resources/examples/cli/blockchain/GettingBlockchainHeight.sh
        :language: bash
        :start-after: #!/bin/sh
