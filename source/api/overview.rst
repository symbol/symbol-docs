#########
Overview
#########

NIS2-API is a REST API that combines HTTP and WebSockets to perform read and write actions in the NEM blockchain through :doc:`NEM Infrastructure Server<../concepts/node>`.

*************************
Interacting with the API
*************************

NIS uses port ``3000`` to communicate with its clients. It accepts both HTTP ``GET``, ``PUT`` and ``POST`` requests.

Assuming that the NIS is running locally, HTTP GET requests can be executed from a browser and have the form:

http://localhost:3000/<path-to-API-request> for example:

http://localhost:3000/account/7D08373CFFE4154E129E04F0827E5F3D6907587E348757B0F87D2F839BF88246/transactions

HTTP PUT and POST requests use JSON structures in the request body to supply data to NIS.

Both request types return data (if any is returned) using JSON structures.

Tools
=====
We recommend using one of the following tools to interact with NIS2-API, especially for PUT and POST methods.

This kind of request usually cannot be executed from within the browser unless you use a plugin which enables you to do it.

Swagger UI
----------

Open `Swagger online editor <https://swagger.io/swagger-editor/>`_ and import:

* |endpoints-swagger|

Insomnia
--------

Download `Insomnia app <https://insomnia.rest/>`_ for your operative system and import:

* |endpoints-insomnia|


.. |endpoints-swagger| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/collections/" target="_blank">NIS-2-API-Endpoints Swagger</a>

.. |endpoints-insomnia| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/collections/" target="_blank">NIS-2-API-Endpoints Insomnia</a>


