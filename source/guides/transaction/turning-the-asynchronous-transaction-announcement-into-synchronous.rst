:orphan:

.. post:: 18 Aug, 2018
    :category: monitoring
    :excerpt: 1
    :nocomments:

##################################################################
Turning the asynchronous transaction announcement into synchronous
##################################################################

Turn asynchronous transaction announcement into synchronous with |nem2-camel|.

**********
Background
**********

Alice is developing an app to send 10 nem:xem to Bob. She wants to know if the transaction has reached the network before sending Bob an email.

When announcing a transaction in NIS1, you had to wait to get the response from the node. Catapult works differently. When a transaction is announced, the REST API server will always return an OK.

As a result, the developer does not have to wait until the server returns a response, being able to make more responsive apps.  However, it is developer's responsibility to check the transactions status and ensure it is confirmed.

On the other hand, keeping track of transactions status adds unnecessary complexity to small projects. It also increases the difficulty when migrating from NIS1.

nem2-camel aims to solve these problems by providing a server that listens to the Catapult REST calls and acts as a proxy. When it detects a transaction announcement, it waits for the confirmation via :doc:`WebSockets<../../api/websockets>` and returns the message to the HTTP call.

.. note:: The function ``TransactionHttp.announceSync`` allows announcing transactions synchronously when using  nem2-camel as a proxy.  nem2-camel will respond successfully when the transaction has reached the network and had no validation errors.  You might still need to :doc:`wait for several confirmations  <../../concepts/transaction>` before executing additional actions.

.. figure:: ../../resources/images/diagrams/nem2-camel-proxy.png
    :align: center

    nem2-camel

*************
Prerequisites
*************

- Finish :doc:`sending a transfer transaction guide <sending-a-transfer-transaction>`
- A text editor or IDE
- An account with XEM

************************
Let’s get into some code
************************

**Running Catapult Service in local**

nem2-camel acts like a proxy between the application and the REST API.

For development and learning purposes, you can run the :doc:`Catapult Server and Catapult REST <../../concepts/node>` using the |catapult-service-bootstrap|.

1. Make sure you have |docker| and |docker-compose| installed before running the following instructions:

.. code-block:: bash

    $> git clone git@github.com:tech-bureau/catapult-service-bootstrap.git
    $> cd catapult-service-bootstrap
    $> docker-compose up

2. If everything goes well, after the image has been downloaded and the service is running, check if you can get the first block information:

.. code-block:: bash

    $> curl localhost:3000/block/1

**Getting Alice and Bob addresses**

Once the Catapult Service is running, it will generate a set of :doc:`accounts <../../concepts/account>` containing XEM.

1. Find the key pairs which contain XEM under the section ``nemesis_addresses``.

.. code-block:: bash

    $> cd  build/generated-addresses/
    $> cat raw-addresses.yaml

 2. Take the first key pair as Alice's account, and copy the private key. 
 
 2. Take the second key pair as Bob's account, and copy the address. 

**Installing nem2-camel**

.. note:: nem2-camel requires at least Java version 8.

1. Download the latest |nem2-camel-jar| package release, and run:

.. code-block:: bash

    $> java -jar nem2-camel.jar --url http://localhost:3000

2. After the service is up, use ``0.0.0.0:9000`` as the new proxy url.

**Sending the transfer transaction**

1. Alice creates a :doc:`Transfer Transaction <../../concepts/transfer-transaction>`, sending ``10 XEM`` to Bob and signs it with her account.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/TurningTheAsynchronousTransactionAnnouncementIntoSynchronous.ts
        :caption: |turning-the-asynchronous-transaction-announcement-into-synchronous-ts|
        :language: typescript
        :lines:  32-44

2. Once signed, Alice can :doc:`announce the transaction <../../concepts/transaction>` to the network. Use ``TransactionHttp.announceSync`` instead of ``TransactionHttp.announce`` to wait until it reaches the network and returns back the Transaction object. After that, Alice can send an email to Bob.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/transaction/TurningTheAsynchronousTransactionAnnouncementIntoSynchronous.ts
        :caption: |turning-the-asynchronous-transaction-announcement-into-synchronous-ts|
        :language: typescript
        :lines:  47-

If the transaction is valid, nem2-camel returns a ``Transaction`` object. It is important to highlight that this transaction has an ``unconfirmed`` status. Alice, or you, might still need to :doc:`wait  for several confirmations <../../concepts/transaction>` before executing additional actions.

In case the Catapult REST server throws an error, the subscribe method will invoke the ``error function`` returning a ``TransactionStatus`` object.


.. |nem2-camel| raw:: html

   <a href="https://github.com/nemtech/nem2-camel" target="_blank">nem2-camel</a>

.. |nem2-camel-jar| raw:: html

   <a href="https://github.com/nemtech/nem2-camel/releases" target="_blank">nem2-camel jar</a>

.. |docker| raw:: html

    <a href="https://docs.docker.com/install/" target="_blank">docker</a>

.. |docker-compose| raw:: html

    <a href="https://docs.docker.com/compose/install/" target="_blank">docker compose</a>

.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap/" target="_blank">Catapult Service Bootstrap</a>

.. |turning-the-asynchronous-transaction-announcement-into-synchronous-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/transaction/TurningTheAsynchronousTransactionAnnouncementIntoSynchronous.ts" target="_blank">View Code</a>
