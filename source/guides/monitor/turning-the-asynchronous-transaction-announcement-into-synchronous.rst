:orphan:

.. post:: 18 Aug, 2018
    :category: Monitoring
    :excerpt: 1
    :nocomments:

##################################################################
Turning the asynchronous transaction announcement into synchronous
##################################################################

Handy snippet to announce a transaction and wait until this is confirmed.

**********
Background
**********

When announcing a transaction in NIS1, you had to wait to get the response from the node.
Catapult works differently: when a transaction is announced, the REST API server will always return an OK.
As a result, the developer does not have to wait until the server returns a response, being able to make more responsive apps.
However, now is the developer's responsibility to check the status of the transaction and ensure it is confirmed.

The negative aspect of announcing transactions asynchronously announcement is that it adds unnecessary complexity to small projects.
The NEM2-SDK ``TransactionService`` aims to solve this problem by providing a function that waits for the confirmation or rejection of the transaction.

*************
Prerequisites
*************

- Finish :doc:`sending mosaics and messages between two accounts guide <../transfer/sending-a-transfer-transaction>`
- Have one :ref:`account with network currency <setup-creating-a-test-account>`

*********************************
Sending a synchronous transaction
*********************************

Alice is developing an app to send 10 cat.currency to Bob and wants to know if the transaction has reached the network before sending Bob an email.

1. Create a new ``.ts`` file. Then, define and sign a :doc:`TransferTransaction <../../concepts/transfer-transaction>`.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/monitor/TurningTheAsynchronousTransactionAnnouncementIntoSynchronous.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/monitor/TurningTheAsynchronousTransactionAnnouncementIntoSynchronous.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Once signed, :doc:`announce the transaction <../../concepts/transaction>` using ``TransactionService.announce`` instead of ``TransactionHttp.announce``.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/monitor/TurningTheAsynchronousTransactionAnnouncementIntoSynchronous.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/monitor/TurningTheAsynchronousTransactionAnnouncementIntoSynchronous.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

.. note:: The function ``TransactionService.announce()`` will respond successfully when the transaction reached the network and had no validation errors. You might still need to :doc:`wait for several confirmations  <../../concepts/transaction>` before executing additional actions.

.. |docker| raw:: html

    <a href="https://docs.docker.com/install/" target="_blank">docker</a>

.. |docker-compose| raw:: html

    <a href="https://docs.docker.com/compose/install/" target="_blank">docker compose</a>

.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap/" target="_blank">Catapult Service Bootstrap</a>
