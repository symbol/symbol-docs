.. post:: 18 Aug, 2018
    :category: Block
    :tags: SDK, CLI
    :excerpt: 1
    :nocomments:

#######################
Listening to new blocks
#######################

Get notified when a new block is included.

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.

****************************
Method #01: Using WebSockets
****************************

1. First, we need to create a bidirectional link between our client application and the REST Gateway.
To do so, open a new :ref:`WebSocket connection <websockets>` connection. Remember to use a suitable :term:`NODE_URL`.

.. code-block:: typescript

    import * as WebSocket from 'ws';

    const host = 'NODE_URL';
    const ws = new WebSocket('ws://' + host + '/ws');

    ws.on('open', () => {
        console.log('Connection opened');
    });

    ws.on('close', () => {
        console.log('Connection closed');
    });

    ws.on('message', (msg) => {
        const response = JSON.parse(msg);
        if ('uid' in response) {
            console.log('uid:', response);
        } else {
            console.log(response);
        }
    });

Once the connection is open, you will get a unique string identifier named ``uid``.
As we want to get notifications every time there is a new block harvested; the next step is to subscribe to the block channel.
Check :ref:`here <websockets>` the complete list of channels available.

2. Send the uid received during the connection phase, and the channel name formatted as follows.

.. code-block:: typescript

    ws.on('message', (msg) => {
        const response = JSON.parse(msg);
        if ('uid' in response) {
          const body = '{"uid":"' + response.uid +'", "subscribe":"block"}';
          console.log('uid:', response);
          ws.send(body);
        } else {
            console.log(response);
        }
    });

From that moment, every ``30`` seconds more or less, you will receive a new notification with the content of the new harvested blocks.

*************************
Method #02: Using the SDK
*************************

The |sdk| simplifies the process of handling WebSocket connections.

In the SDK, WebSockets are named **Listeners**.
As we have done with WebSockets, we need to open the connection first and subscribe to the desired channel, but this time without handling uids.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/blockchain/ListeningNewBlocks.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/blockchain/ListeningNewBlocks.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

Note that the |sdk| for TypeScript base Listener is designed to work on Node.js backend environments.
If you want to execute Listeners from the client-side (e.g., Angular, React, Vue.), pass the browser implementation of the WebSocket to the Listener.

.. code-block:: typescript

  const listener = new Listener('ws://ngl-dual-101.testnet.symboldev.network:3000', WebSocket);
  listener.open().then(() => ...

*************************
Method #03: Using the CLI
*************************

Open a terminal window and run the following command.

.. viewsource:: ../../resources/examples/bash/blockchain/ListeningNewBlocks.sh
    :language: bash
    :start-after: #!/bin/sh

