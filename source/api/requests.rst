#########
Overview
#########

**Catapult REST API** combines HTTP and WebSockets to perform read and write actions in the NEM blockchain.

********
Requests
********

Catapult REST uses port ``3000``. It accepts both HTTP **GET**, **PUT** and **POST** requests.

Assuming that Catapult REST is running locally, HTTP GET requests can be executed from a browser and have the form:

http://localhost:3000/<path-to-API-request>

HTTP PUT and POST requests use JSON structures in the request body. Request returns data (if any is returned) using JSON structures. This kind of request cannot usually be executed from within the browser unless you use a :doc:`plugin <tools>` which enables you to do it.

***********
Http errors
***********

.. csv-table::
  :header: "Status code", "Description"
  :delim: ;

  200; Ok. The request has succeeded.
  202; Accepted. The request has been accepted for processing but the processing has not been completed.
  400; Bad request. Check your request syntax.
  404; Not found. The resource does not exist.
  409; Conflict. Check your arguments.
  500; Internal error. Unexpected condition.

***********
Http status
***********

.. csv-table::
  :header: "Key", "Description"
  :delim: ;

  code; Error identifier in camelCase.
  message; Error explained in human-readable format.

**Example**

.. code-block:: json

  {
    "code": "InvalidArgument",
    "message": "accountId has an invalid format"
  }

************************
uint64: lower and higher
************************

Javascript operate on 32 bit values. To enable representation up to 64 bits, the API returns numbers encoded in two parts: ``lower`` and ``higher``.

Check `how to compact lower and higher into a compact number <https://github.com/nemtech/nem2-library-js/blob/f171afb516a282f698081aea407339cfcd21cd63/src/coders/uint64.js#L37>`_.

Continue: :doc:`Tools <tools>`.
