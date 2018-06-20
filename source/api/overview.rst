########
Overview
########

**Catapult REST API** combines HTTP and WebSockets to perform read and write actions in the NEM blockchain.

************************
Interacting with the API
************************

Catapult REST API uses port ``3000``. It accepts both HTTP ``GET``, ``PUT`` and ``POST`` requests.

Assuming that the :doc:`Catapult server<../../concepts/node>` Catapult server and :doc:`Catapult REST<../../concepts/node>` are :doc:`running locally<../guides/running-a-node>`, HTTP GET requests can be executed from a browser and have the form:

http://localhost:3000/<path-to-API-request> for example:

http://localhost:3000/account/7D08373CFFE4154E129E04F0827E5F3D6907587E348757B0F87D2F839BF88246/transactions

HTTP PUT and POST requests use JSON structures in the request body. Request return data (if any is returned) using JSON structures.

*****************
Reference & Tools
*****************

|catapult-rest-reference|

We recommend using one of the following tools to interact with Catapult REST API, especially for PUT and POST methods.

This kind of request usually cannot be executed from within the browser unless you use a plugin which enables you to do it.

Swagger UI
==========

Open `Swagger online editor <https://swagger.io/tools/swagger-editor/>`_ and import:

* |endpoints-swagger|

Insomnia
========

Download `Insomnia app <https://insomnia.rest/>`_ for your operative system and import:

* |endpoints-insomnia|


.. |endpoints-swagger| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/collections/" target="_blank">Catapult REST API Swagger</a>

.. |endpoints-insomnia| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/collections/" target="_blank">Catapult REST API Insomnia</a>

.. |catapult-rest-reference| raw:: html

   <a href="https://app.swaggerhub.com/apis/nemtech/catapult-rest-api/" target="_blank">Catapult REST API Reference</a>


HTTP Status Codes
=================

.. csv-table::
   :header: "Status code", "Description"

    200, Ok. The request has succeeded.
    202, Accepted. The request has been accepted for processing but the processing has not been completed.
    400, Bad request. Check your request syntax.
    404, Not found. The resource does not exist.
    409, Conflict. Check your arguments.
    500, Internal error. Unexpected condition.


HTTP Errors
===========

.. csv-table::
   :header: "Key", "Description"

    code,  Error identifier in camelCase.
    message, Error explained in human-readable format.

**Example**

.. code-block:: json

   {
     "code": "InvalidArgument",
     "message": "accountId has an invalid format"
   }

