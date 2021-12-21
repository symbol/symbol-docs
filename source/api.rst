############
REST Gateway
############

|catapult-rest| combines HTTP and WebSockets to perform read and write actions on the blockchain.

.. _http-requests:

*************
Http requests
*************

The REST Gateway uses port **3000** for HTTP and port **3001** for HTTPS, and it accepts **GET**, **PUT** and **POST** requests.

Assuming that Catapult REST is running locally, HTTP GET requests can be executed from a browser and have the format:

    ``http://localhost:3000/<path-to-API-request>``

PUT and POST requests have the same query format but use JSON structures in the request body.
This kind of request cannot usually be executed from within the browser unless you use an extension.

Endpoints
=========

Refer to the next documentation to get the list of available endpoints.

.. ghreference:: symbol/symbol-openapi
    :folder:

To check the compatibility between the API specification and the REST Gateway implementation, see :doc:`Product Compatibility Matrix <../compatibility>`.

Response codes
==============

Symbol uses conventional HTTP response codes to indicate the success or failure of an API request.

* Codes in the ``2xx`` range indicate success.
* Codes in the ``4xx`` range indicate an error occurred with the information provided by the user.
* Codes in the ``5xx`` range indicate an error with the node.

.. csv-table:: HTTP Status Code Summary
    :header: "Error Code", "Response", "Description"
    :widths: 15 35 50
    :delim: ;

    ``200``; OK; Everything worked as expected.
    ``202``; Accepted; The request has been accepted, but the processing has not been completed.
    ``400``; InvalidContent;  The provided argument was not an acceptable input.
    ``404``; ResourceNotFound; The requested resource does not exist.
    ``409``; InvalidArgument; The required arguments were missing or unacceptable for the request.
    ``500``; InternalServiceError; An error occurred within the REST Gateway.
    ``503``; ServiceUnavailable; Either API node or database service is unavailable or unreachable from the REST Gateway. Check the ``/node/health`` endpoint.

Pagination
==========

When a query returns more than one result, the REST Gateway paginates the responses by default.
The query parameters can be customized to advance through the pages and filter the returned content.

Each pageable endpoint defines its own set of filters.
However, the following table shows the query params present in every searchable endpoint:

.. csv-table::
    :header: "Query Parameter", "Type", "Description", "Default"
    :widths: 18 25 45 12
    :delim: ;

    ``pageSize``; integer ``[10..100]``; Selects the number of entries to return. Example: ``http://localhost:3000/blocks?pageSize=100`` returns 100 entries per ``page``; ``10``
    ``pageNumber``; integer ``>=1``; Filters by page number. Example: ``http://localhost:3000/blocks?page=2`` returns page 2; ``1``
    ``offset``; string (id); Identifies the entry at which to start pagination. Example: ``http://localhost:3000/blocks?id=EE94FD819A1B30D6C5D1C03``.;
    ``order``; string ``{asc, desc}``; Sorts the responses in ascending or descending order based on the collection property set on the parameter ``orderBy``. If the request does not specify ``orderBy``, REST returns the collection ordered by id. Example: ``http://localhost:3000/blocks?order=asc`` returns the block entries in ascending order.; ``desc``
    ``orderBy``; string; Chooses the parameter to sort by. By default, all the collections are sortable by id, but the collection could define additional properties.

Multiple query parameters can be combined in the same call.
For example, ``http://localhost:3000/blocks?pageSize=100&id=EE94FD819A1B30D6C5D1C03`` will return 100 block entries per page starting with block id ``EE94FD819A1B30D6C5D1C03``.

The responses also include meta-information about the pagination total number of entries, current page number, and the total number of pages.
Here is an example response meta-information of the pagination:

.. code-block:: json

  {
    "data": [
      {}
    ],
    "pagination": {
      "pageNumber": 0,
      "pageSize": 0,
      "totalEntries": 0,
      "totalPages": 0
    }
  }

.. _websockets:

**********
WebSockets
**********

To get **live updates** when an event occurs on the blockchain, Catapult REST publishes WebSockets.
Client applications can open a WebSocket connection and get a unique identifier.
With this identifier, applications qualify to subscribe to the available channels instead of constantly polling the API for updates.
When an event occurs in a channel, the REST Gateway sends a notification to every subscribed client in real-time.

WebSocket URIs share the same host and port as the HTTP requests URIs, but use the ``ws://`` protocol:

	``ws://localhost:3000/ws``

* Guide: :doc:`Subscribing to WebSockets channels <guides/blockchain/listening-new-blocks>`

Response format
===============

All channels share the same response format, which is:

.. code-block:: json

    {
        "topic": "{subscribed-channel}",
        "data": {}
    }

* ``topic`` contains the name of the subscribed channel, so the same websocket can be used to monitor multiple channels (``topic`` matches the ``subscribe`` field provided in the request body when subscribing).
* ``data`` is a channel-specific object. Each channel listed below describes the data object it returns.

Channels
========

**block**

The ``block`` channel notifies subscribed clients every time a new block is harvested.
Each returned message contains information about a harvested block.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "block"
    }

*Response data*

* `BlockInfoDTO <https://github.com/symbol/symbol-openapi/blob/main/spec/core/block/schemas/BlockInfoDTO.yml>`_

**finalizedBlock**

The ``finalizedBlock`` channel notifies subscribed clients every time a set of blocks is :ref:`finalized <finalization>`.
Each returned message contains information about the **highest block** in the finalization round. All blocks with a smaller height are assumed finalized.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "finalizedBlock"
    }

*Response data*

* `FinalizedBlockDTO <https://github.com/symbol/symbol-openapi/blob/main/spec/core/chain/schemas/FinalizedBlockDTO.yml>`_

**confirmedAdded/{address}**

The ``confirmedAdded`` channel notifies subscribed clients when a transaction related to the given address is included in a block.
Each returned message contains information about a confirmed transaction.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "confirmedAdded/{address}"
    }

*Response data*

* `TransactionInfoDTO <https://github.com/symbol/symbol-openapi/blob/main/spec/core/transaction/schemas/TransactionInfoDTO.yml>`_

**unconfirmedAdded/{address}**

The ``unconfirmedAdded`` channel notifies subscribed clients when a transaction related to the given address enters the unconfirmed state, waiting to be included in a block.
Each returned message contains information about an unconfirmed transaction.

Possible scenarios when this message is received are: the transaction is announced to the network via the ``PUT /transaction`` HTTP endpoint or an :ref:`AggregateBondedTransaction <aggregate-bonded>` has all required cosigners and changes its state from partial to unconfirmed.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "unconfirmedAdded/{address}"
    }

*Response data*

* `TransactionInfoDTO <https://github.com/symbol/symbol-openapi/blob/main/spec/core/transaction/schemas/TransactionInfoDTO.yml>`_

**unconfirmedRemoved/{address}**

The ``unconfirmedRemoved`` channel notifies subscribed clients when a transaction related to the given address exits the unconfirmed state.
Each returned message contains a no-longer-unconfirmed transaction hash.

Possible scenarios when this message is received are: the transaction is now confirmed, or the deadline was reached and the transaction was not included in a block.

*Request body*

.. code-block:: json

    {
        "uid":"{uid}",
        "subscribe":"unconfirmedRemoved/{address}"
    }

*Response data*

* Hash

**partialAdded/{address}**

The ``partialAdded`` channel notifies subscribed clients when an :ref:`AggregateBondedTransaction <aggregate-bonded>` related to the given address enters the partial state, waiting for all required cosignatures to complete.
Each returned message contains information about an added partial transaction.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "partialAdded/{address}"
    }

*Response data*

* `TransactionInfoDTO <https://github.com/symbol/symbol-openapi/blob/main/spec/core/transaction/schemas/TransactionInfoDTO.yml>`_

**partialRemoved/{address}**

The ``partialRemoved`` channel notifies subscribed clients when a transaction related to the given address exits the partial state.
Each returned message contains a removed partial transaction hash.

Possible scenarios when this message is emitted are: all required cosignatures were received and the transaction is now unconfirmed, or the deadline was reached and the transaction was not included in a block.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "partialRemoved/{address}"
    }

*Response data*

* Hash

**cosignature/{address}**

The ``cosignature`` channel notifies subscribed clients when a cosignature-signed transaction related to the given address is added to an :ref:`AggregateBondedTransaction <aggregate-bonded>` in the partial state.
Each returned message contains a cosignature-signed transaction.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "cosignature/{address}"
    }

*Response data*

* `CosignatureDTO <https://github.com/symbol/symbol-openapi/blob/main/spec/plugins/aggregate/schemas/CosignatureDTO.yml>`_

**status/{address}**

The ``status`` channel notifies subscribed clients when a transaction related to the given address signals an error.
Each returned message contains an error message and a transaction hash.

*Request body*

.. code-block:: json

    {
        "uid": "{uid}",
        "subscribe": "status/{address}"
    }

*Response data*

* `TransactionStatusDTO <https://github.com/symbol/symbol-openapi/blob/main/spec/core/transaction/schemas/TransactionStatusDTO.yml>`_

.. |yarn| raw:: html

    <a href="https://yarnpkg.com/lang/en/" target="_blank">yarn</a>

.. |catapult-rest| raw:: html

   <a href="https://github.com/symbol/catapult-rest" target="_blank">Catapult REST</a>
