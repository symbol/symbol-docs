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

Endpoints
=========

Refer to the next documentation to get the list of available endpoints.

.. ghreference:: nemtech/symbol-openapi
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
    :delim: ;

    200; OK; Everything worked as expected.
    202; Accepted; The request has been accepted, but the processing has not been completed.
    400; InvalidContent;  The provided argument was not of an acceptable type of input.
    404; ResourceNotFound; The requested resource does not exist.
    409; InvalidArgument; The required arguments were missing or unacceptable for the request.
    500; InternalServiceError; An error occurred within the REST Gateway.
    503; ServiceUnavailable; Either API node or database service is unavailable or unreachable from the REST Gateway.

Pagination
==========

When a query returns more than one result, the REST Gateway paginates the responses by default.
The query parameters can be customized to advance through the pages and filter the contents returned.

Each pageable endpoint defines its own set of filters.
However, the following table shows the query params present in every searchable endpoint:

.. csv-table::
    :header: "Query Parameter", "Type", "Description", "Default"
    :delim: ;

    pageSize; integer ``[10..100]``; Selects the number of entries to return. Example: ``http://localhost:3000/blocks?pageSize=100`` returns 100 entries per page; ``10``
    pageNumber; integer ``>=1``; Filters by page number. Example: ``http://localhost:3000/blocks?page=2`` returns page 2; ``1``
    offset; string; Identifies the entry at which to start pagination. Example: ``http://localhost:3000/blocks?id=EE94FD819A1B30D6C5D1C03``.;
    order; string; Sorts the responses in ascending or descending order based on the collection property set on the parameter ``orderBy``. If the requests does not specify ``orderBy``, REST returns the collection ordered by id. Example: ``http://localhost:3000/blocks?order=asc`` returns the block entries in ascending order.; "desc"
    orderBy; string; Chooses the parameter to sort by. By default, all the collections are sortable by id, but the collection could define additional properties.

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

* `BlockInfoDTO <https://github.com/nemtech/symbol-openapi/blob/main/spec/core/block/schemas/BlockInfoDTO.yml>`_

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

* `TransactionInfoDTO <https://github.com/nemtech/symbol-openapi/blob/main/spec/core/transaction/schemas/TransactionInfoDTO.yml>`_

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

* `TransactionInfoDTO <https://github.com/nemtech/symbol-openapi/blob/main/spec/core/transaction/schemas/TransactionInfoDTO.yml>`_

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

* `TransactionInfoDTO <https://github.com/nemtech/symbol-openapi/blob/main/spec/core/transaction/schemas/TransactionInfoDTO.yml>`_

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

* `CosignatureDTO <https://github.com/nemtech/symbol-openapi/blob/main/spec/plugins/aggregate/schemas/CosignatureDTO.yml>`_

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

* `TransactionStatusDTO <https://github.com/nemtech/symbol-openapi/blob/main/spec/core/transaction/schemas/TransactionStatusDTO.yml>`_

.. |yarn| raw:: html

    <a href="https://yarnpkg.com/lang/en/" target="_blank">yarn</a>

.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap" target="_blank">Catapult Service Bootstrap</a>

.. |catapult-server| raw:: html

   <a href="https://github.com/nemtech/catapult-server" target="_blank">catapult-server</a>

.. |catapult-rest| raw:: html

   <a href="https://github.com/nemtech/catapult-rest" target="_blank">Catapult REST</a>
