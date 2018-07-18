:orphan:

######################
Debugging Transactions
######################

This tutorial will guide you in the creation of an application to monitor announced :doc:`transactions <../../concepts/transaction>`.

**********
Background
**********

If you are used to NIS1 API calls, after announcing a transaction you will receive a success message or some error indicating the reason why the transaction has not been included in the block.

The new Catapult REST API works differently, being *asynchronous*. When a user announces a transaction through the API, it always returns an OK.

To know the status of the transaction, which can be OK or :ref:`Failure<status-error>`, you have to:

a) Check the status via API endpoint.
b) Listen to the different :doc:`WebSocket<../../concepts/listener>` channels.

.. note:: While developing, it is encouraged to open terminals with different listeners to monitor the transactions you send using NEM2-CLI.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Text editor or IDE
- NEM2-SDK or CLI

************************
Let’s get into some code
************************

Create a new listener to get notified every time a transaction related to your account reaches the network and gets confirmed.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/DebuggingTransactionsConfirmed.ts
        :language: typescript
        :lines:  21

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/DebuggingTransactionsConfirmed.java
        :language: java
        :lines: 35

    .. literalinclude:: ../../resources/examples/javascript/transaction/DebuggingTransactionsConfirmed.js
        :language: javascript
        :lines: 23

Open the connection. You only need to open the connection once. Then listen to all desired channels.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/DebuggingTransactionsConfirmed.ts
        :language: typescript
        :lines:  23

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/DebuggingTransactionsConfirmed.java
        :language: java
        :lines: 39

    .. literalinclude:: ../../resources/examples/javascript/transaction/DebuggingTransactionsConfirmed.js
        :language: javascript
        :lines: 25

In this example, we will reach only transactions that get confirmed. You can also create `other listeners <https://nemtech.github.io/nem2-sdk-typescript-javascript/classes/_infrastructure_listener_.listener.html#aggregatebondedadded>`_ to check unconfirmed, aggregate bounded or transactions that fail.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/DebuggingTransactionsConfirmed.ts
        :language: typescript
        :lines:  23-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/transaction/DebuggingTransactionsConfirmed.java
        :language: java
        :lines: 37-43

    .. literalinclude:: ../../resources/examples/javascript/transaction/DebuggingTransactionsConfirmed.js
        :language: javascript
        :lines: 24-

    .. literalinclude:: ../../resources/examples/cli/transaction/DebuggingTransactionsConfirmed.sh
        :language: bash
        :start-after: #!/bin/sh

************
What's next?
************

Run your application and try to :doc:`send a transfer transaction <../transaction/sending-a-transfer-transaction>` to the selected account. If all goes well, you will see the transaction information in your terminal.