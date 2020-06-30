############
REST Gateway
############

|catapult-rest| combines HTTP and WebSockets to perform read and write actions on the blockchain.

.. _http-requests:

*************
Http requests
*************

The REST Gateway uses the port ``3000`` and accepts both HTTP **GET**, **PUT** and **POST** requests.

Assuming that Catapult REST is running locally, HTTP GET requests can be executed from a browser and have the form:

    http://localhost:3000/<path-to-API-request>

Conversely, HTTP PUT and POST requests have the same structure but use JSON structures in the request body.
This kind of request cannot usually be executed from within the browser unless you use a plugin which enables you to do it.

You can refer to the next documentation to get the list of available endpoints.

.. ghreference:: nemtech/symbol-openapi
    :folder:

.. _websockets:

**********
Pagination
**********

All **GET** requests through the Symbol API are paginated by default, but a user can customize the query parameters for their convenience.

Each collection has a different set of available parameters.
The following table displays the general parameters available:

.. csv-table::
    :header: "Query Parameter", "Type", "Description", "Default"
    :delim: ;

    pageSize; integer ``[0..100]``; Selects the number of entries to return.; ``10``
    pageNumber; integer ``>=1``; Filters by page number; ``1``
    offset; string; Identifies the entry at which to start pagination. If the ordering parameter is set to -id, the elements returned precede the identifier. Otherwise, newer elements with respect to the id are returned.
    order; string (Order); Sorts the responses in ascending or descending order based on the collection property set on the parameter ``orderBy``. If the requests does not specify ``orderBy``, REST returns the collection ordered by id.; "desc"
    orderBy; string; Chooses to sort by height or id. Parameter specific to pagination for block related queries.

Multiple query parameters can be combined in the same call.
For example, ``localhost:3000/blocks?pageSize=100&id=EE94FD819A1B30D6C5D1C03`` will return 60 block entries per page starting with block id ``EE94FD819A1B30D6C5D1C03``.

Responses will also include metainfo about the pagination.

More information about query routes and their parameters can be found `here <https://nemtech.github.io/symbol-openapi/v0.9.2/>`_.

**********
WebSockets
**********

To get **live updates** when an event occurs on the blockchain, Catapult REST publishes WebSockets.
Client applications can open a WebSocket connection and get a unique identifier.
With this identifier, applications qualify to subscribe to the available channels instead of constantly polling the API for updates.
When an event occurs in a channel, the REST Gateway sends a notification to every subscribed client in real-time.

WebSocket URIs share the same host and port as the HTTP requests URIs, but use the ``ws://`` protocol:

	ws://localhost:3000/ws

* Guide: :doc:`Subscribing to WebSockets channels <guides/blockchain/listening-new-blocks>`

Channels
========

**block**

The block channel notifies for every subscribed client every time there is a new harvested block.
The messages returned contain information about the blocks.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "block"
    }

*Response format*

* `BlockInfoDTO <https://github.com/nemtech/symbol-openapi/blob/master/spec/core/block/schemas/BlockInfoDTO.yml>`_

**confirmedAdded/{address}**

The confirmedAdded channel notifies when a transaction related to an address is included in a block.
The messages returned contain information about the confirmed transactions.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "confirmedAdded/{address}"
    }

*Response format*

* `TransactionInfoDTO <https://github.com/nemtech/symbol-openapi/blob/master/spec/core/transaction/schemas/TransactionInfoDTO.yml>`_

**unconfirmedAdded/{address}**

The unconfirmedAdded channel notifies when a transaction related to an address gets the unconfirmed state, waiting to be included in a block.
The messages returned contain information about unconfirmed transactions.

Possible scenarios when this channel notifies are: the transaction is announced to the network via ``PUT /transaction`` HTTP endpoint or an AggregateBondedTransaction has all required cosigners and change its state from partial to unconfirmed.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "unconfirmedAdded/{address}"
    }

*Response format*

* `TransactionInfoDTO <https://github.com/nemtech/symbol-openapi/blob/master/spec/core/transaction/schemas/TransactionInfoDTO.yml>`_

**unconfirmedRemoved/{address}**

The unconfirmedRemoved channel notifies when a transaction related to an address had the unconfirmed state, but not anymore.
The messages returned contain the transactions hashes.

Possible scenarios when this channel notifies are: the transaction now is confirmed, or the deadline has been reached, and it was not included in a block.

*Request body*

.. code-block:: json

    {
        "uid":"{uid}",
        "subscribe":"unconfirmedRemoved/{address}"
    }

*Response format*

* Hash

**partialAdded/{address}**

The partialAdded channel notifies when an AggregateBondedTransaction related to an address reaches the partial state, waiting to have all required cosigners.
The messages returned contain information about the transactions.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "partialAdded/{address}"
    }

*Response format*

* `TransactionInfoDTO <https://github.com/nemtech/symbol-openapi/blob/master/spec/core/transaction/schemas/TransactionInfoDTO.yml>`_

**partialRemoved/{address}**

The partialRemoved channel notifies when a transaction related to an address had the partial state, but is not anymore.
The messages returned contain the transactions hashes.

Possible scenarios when this channel notifies are: the transaction now is unconfirmed, or the deadline has been reached, and it was not included in a block.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "partialRemoved/{address}"
    }

*Response format*

* Hash

**cosignature/{address}**

The cosignature channel notifies when a cosignature signed transaction related to an address is added to an AggregateBondedTransaction with the partial state.
The messages returned contain the cosignature signed transaction.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "cosignature/{address}"
    }

*Response format*

* `CosignatureDTO <https://github.com/nemtech/symbol-openapi/blob/master/spec/plugins/aggregate/schemas/CosignatureDTO.yml>`_

**status/{address}**

The status channel notifies when a transaction related to an address rises an error.
The messages returned contain the error messages and the transaction hashes.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "status/{address}"
    }

*Response format*

* `TransactionStatusDTO <https://github.com/nemtech/symbol-openapi/blob/master/spec/core/transaction/schemas/TransactionStatusDTO.yml>`_

.. |yarn| raw:: html

    <a href="https://yarnpkg.com/lang/en/" target="_blank">yarn</a>

.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap" target="_blank">Catapult Service Bootstrap</a>

.. |catapult-server| raw:: html

   <a href="https://github.com/nemtech/catapult-server" target="_blank">catapult-server</a>

.. |catapult-rest| raw:: html

   <a href="https://github.com/nemtech/catapult-rest" target="_blank">Catapult REST</a>
