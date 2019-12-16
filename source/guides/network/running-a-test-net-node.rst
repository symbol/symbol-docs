:orphan:

.. post:: 04 Oct, 2019
    :category: Network, Node
    :excerpt: 1
    :nocomments:

#######################
Running a test net node
#######################

This guide will walk you through the process of **setting up your node** to join Catapult’s public **test network**.

The test network mirrors the same **technology** and **features** of the future main public network. As the currency in this network does not have any real value, it allows you to experiment with the offered Catapult’s transaction set without the loss of valuable assets.

.. note:: The network **might be offline or replaced without notice** because it is used extensively for testing purposes. To work in a private test network, install :doc:`a local environment for learning and development purposes <creating-a-private-test-net>`.

*********************
Hardware requirements
*********************

Catapult nodes have been tested on computers with the following **minimum requirements**.

* **CPU**: 2 cores or more
* **Memory**: 4GB or more
* **HD**: 20GB or more

.. note:: Although you might be able to run the software in less powerful instances, you might encounter some issues while installing or running the node.

************************
Environment requirements
************************

* **OS**: Linux or Mac
* Internet connectivity
* `docker`_ 19.03 installed
* `docker-compose`_ 1.22 installed

************
Installation
************

A catapult node can be composed of a different set of components depending on your needs. Catapult test net nodes are currently distributed in two forms:

* **Peer assembly**: The peer assembly verifies or discards the transactions, runs the consensus algorithm, creates new blocks, and propagates the changes through the network.

* **API assembly**: The API node does the same as the peer nodes, plus stores data in the readable form once transactions are validated. Furthermore, the API assembly is capable of processing partial aggregate bonded transactions.  The API node installation comes with a REST gateway to perform read and write actions.

The package  ``catapult-testnet-bootstrap`` contains both assemblies ready to be installed.

1. Download the |latest-release|, or clone the repository directly using Git.

.. code-block:: bash

    git clone https://github.com/nemfoundation/catapult-testnet-bootstrap.git

2. Choose the **assembly distribution** you want to install.

In short, if you want to be able to interact with your node, you need to run the API assembly.  On the other hand, if you want a node dedicated exclusively confirm transactions, deploy the Peer assembly.

.. code-block:: bash

    cd api-harvest-assembly

Or

.. code-block:: bash

    cd peer-assembly

3. Run the node with **docker-compose**.

.. code-block:: bash

    sudo docker-compose up --build --detach

.. note:: To stop all the running services, run ``sudo docker-compose down`` under the same directory you executed the ``up`` command.

If you have installed the ``api-assembly`` distribution, verify that the node is running by opening a new browser tab with the following URL: ``localhost:3000/chain/height``.

4. After running the node for the first time, you can :doc:`change a set of properties <configuring-node-properties>` such as the node's public key or the :doc:`harvesting configuration <../../concepts/harvesting>`.

*********************************
Interacting with the test network
*********************************

To interact with your node, :ref:`create first an account <setup-creating-a-test-account>` and :ref:`acquire test nem.xem <setup-getting-test-currency>`.

Explorer
========

* |blockchain-explorer|: Search for transactions, accounts, assets, and blocks in the test network.

Clients
=======

* |desktop-wallet|: Cross-platform client for Catapult. Available for Mac, Linux, and Windows.
* :doc:`Command-Line Interface <../../cli>`: Execute the most commonly used actions from your terminal.

Faucet
======

* |faucet|: Receive nem.xem units to test Catapult's services.

SDKs
====

* :doc:`Software Development Kits<../../sdk>`: Integrate your app with NEM blockchain.

In this portal, you can find everything you need to know about Catapult's features and :ref:`self-paced guides <blog-categories>` on how to use the **software development kits**.

.. _docker: https://docs.docker.com/install/

.. _docker-compose: https://docs.docker.com/compose/install/

.. |desktop-wallet| raw:: html

   <a href="https://github.com/nemfoundation/nem2-desktop-wallet/releases" target="_blank">Desktop Wallet</a>

.. |blockchain-explorer| raw:: html

   <a href="http://explorer.nemtech.network/" target="_blank">Blockchain Explorer</a>

.. |faucet| raw:: html

   <a href="http://faucet-01.nemtech.network/" target="_blank">Faucet</a>

.. |latest-release| raw:: html

   <a href="https://github.com/nemfoundation/catapult-testnet-bootstrap/releases/" target="_blank">Faucet</a>

