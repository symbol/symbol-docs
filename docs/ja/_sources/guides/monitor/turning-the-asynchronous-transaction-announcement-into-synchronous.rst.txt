.. post:: 18 Aug, 2018
    :category: Monitoring
    :tags: SDK
    :excerpt: 1
    :nocomments:

##################################################################
Turning the asynchronous transaction announcement into synchronous
##################################################################

Handy snippet to announce a transaction and wait until this is confirmed.

********
Use case
********

When announcing a transaction in NIS1, you had to wait to get the response from the node.
|codename| works differently: when a transaction is announced, the REST API server will always return an OK.
As a result, the developer does not have to wait until the server returns a response, being able to make more responsive apps.
However, now is the developer's responsibility to check the status of the transaction and ensure it is confirmed.

The negative aspect of announcing transactions asynchronously is that it adds unnecessary complexity to small projects.
The |sdk| ``TransactionService`` aims to solve this problem by providing a function that waits for the confirmation or rejection of the transaction.

*************
Prerequisites
*************

- Complete :doc:`sending mosaics and messages between two accounts <../transfer/sending-a-transfer-transaction>` guide.
- Create a new :ref:`account <setup-creating-a-test-account>`.
- Load the account with enough |networkcurrency| to pay for transaction fees.

*********************************
Sending a synchronous transaction
*********************************

Alice is developing an app to send 10 |privatenetworkcurrency| to Bob and wants to know if the transaction has reached the network before sending Bob an email.

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

.. note:: The function ``TransactionService.announce()`` will respond successfully if the transaction reaches the network and does not have validation errors. You might still need to :doc:`wait for several confirmations  <../../concepts/transaction>` before executing additional actions.
