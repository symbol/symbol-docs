:orphan:

.. post:: 04 Oct, 2019
    :category: Network
    :excerpt: 1
    :nocomments:

#######################
Running a test net node
#######################

This guide will walk you through the process of setting up your node to join |codename|’s **public test network**.

The test network mirrors the same technology and features of the future main public network.
You can use the test net to experiment with the offered |codename|'s transaction set in a live network without the loss of valuable assets.

.. note:: The network **might be offline or replaced without notice** because it is used extensively for testing purposes. To work in a private environment network, install :doc:`a local network for learning and development purposes <creating-a-private-test-net>`.

*********************
Hardware requirements
*********************

|codename| nodes have been tested on computers with the following **minimum requirements**.

* **CPU**: 2 cores or more
* **Memory**: 4GB or more
* **HD**: 20GB or more

.. note:: Although you might be able to run the software in less powerful instances, you might encounter some issues while installing or running the node.

************************
Environment requirements
************************

The setup scripts are available for Linux and Mac OS and automated using docker.
To run a test net node, you will need to have installed the following docker tools:

* `docker`_
* `docker-compose`_

.. note:: The release images target modern x86 architectures. It has been reported that errors are experienced on some older machines provided. If you run into any related issues, please report in the `slack group (#help) <https://join.slack.com/t/nem2/shared_invite/enQtMzY4MDc2NTg0ODgyLWZmZWRiMjViYTVhZjEzOTA0MzUyMTA1NTA5OWQ0MWUzNTA4NjM5OTJhOGViOTBhNjkxYWVhMWRiZDRkOTE0YmU>`_.

*****************
Port requirements
*****************

Make sure that the server's host is accessible from the internet and that the following ports are open and available:

* The port ``7900`` is used by catapult-server to communicate between nodes.
* The port ``3000`` is used by the REST Gateway to expose the endpoints to interact with the node.

************
Installation
************

The package ``symbol-testnet-bootstrap`` contains both assemblies ready to be installed.

1. Download the |latest-release| of the package, or clone the repository directly using Git.

.. code-block:: bash

    git clone https://github.com/nemgrouplimited/symbol-testnet-bootstrap.git

2. Choose the **assembly distribution** you want to install.

In short, if you want to be able to interact with your node, you need to run the :ref:`API assembly <api-node>`.
On the other hand, if you want a node dedicated exclusively confirm transactions, deploy the :ref:`Peer assembly <peer-node>`.

.. code-block:: bash

    cd symbol-testnet-bootstrap/api-harvest-assembly

or...

.. code-block:: bash

    cd symbol-testnet-bootstrap/peer-assembly

3. Run the node with **docker-compose**.

.. code-block:: bash

    sudo docker-compose up --build --detach

You should see docker downloading the container images for the first time. Then it should run the setup and finally startup the service.

To stop all the running services, run ``sudo docker-compose down`` in the same directory you executed the ``up`` command.

Peer assembly
=============

You can verify that the node is running by running with the command ``docker-compose ps peer-node`` in the same ``peer-assembly`` folder.
The command's output looks like:

.. code-block:: bash

     Name                       Command                    State   Ports
     ------------------------------------------------------------------------------------
     peerassembly_peer-node_1   bash -c /bin-mount/wait    Up      0.0.0.0:7900->7900/tcp

The node is running if the state for ``peerassembly_peer-node_1`` is set to "Up".

API harvest assembly
====================

The API harvest assembly will set up a dual-purpose :ref:`API <api-node>` and :ref:`Peer <peer-node>` node, as well as the :ref:`Rest gateway <rest-gateway>` that transactions can be submitted to and data read from.

API nodes take up more memory and storage than Peer nodes. If you have memory or storage constraints and you are running into issues, it is recommended you switch to running a Peer only node instead.

You can verify that the node is running by opening a new browser tab with the following URL: ``localhost:3000/chain/height``.

.. note:: The software should expose the port ``3000`` by default. If you cannot access the REST Gateway from outside, it might mean that the port is closed by default by your machine or hosting provider. If so, you will have to open it in order to access it from outside the machine.

***************************
Configuring node properties
***************************

After running the node for the first time, you can :ref:`change a set of properties <node-properties>` such as the public name or the :doc:`harvesting <../../concepts/harvesting>` configuration of the node.

To edit the node properties, follow the next steps:

1. If the node service is running, run ``sudo docker-compose down`` under the same directory you executed the ``up`` command.

2. Edit the properties file ``config-input.yaml`` with a text editor.

3. Save and apply the changes with the command ``sudo docker-compose up --build --detach``.

*********************************
Interacting with the test network
*********************************

To interact with your node, :ref:`create first an account <setup-creating-a-test-account>` and :ref:`acquire test <setup-getting-test-currency>` |networkcurrency|.

Then, read and write data from the network with the following tools:

* |blockchain-explorer|: Search for transactions, accounts, assets, and blocks in the test network.
* :ref:`Desktop Wallet <wallet-desktop>`: Cross-platform client for |codename|. Available for Mac, Linux, and Windows.
* :ref:`Command-Line Interface <wallet-cli>`: Execute the most commonly used actions from your terminal.
* |faucet-1|: Receive |networkcurrency| units to test |codename|'s services. If the default faucet is empty, try this other |faucet-2|.
* :doc:`Software Development Kits <../../sdk>`: Add |codename| to your project.

On this portal you can find information about |codename|'s features and :ref:`self-paced guides <blog-categories>` on how to use the **software development kits**.

.. _docker: https://docs.docker.com/install/

.. _docker-compose: https://docs.docker.com/compose/install/

.. |blockchain-explorer| raw:: html

   <a href="http://explorer-96x.symboldev.network/" target="_blank">Blockchain Explorer</a>

.. |faucet-1| raw:: html

   <a href="http://faucet-96x-01.symboldev.network/" target="_blank">Faucet</a>

.. |faucet-2| raw:: html

   <a href="http://faucet-96x-02.symboldev.network/" target="_blank">alternative faucet</a>

.. |latest-release| raw:: html

   <a href="https://github.com/nemgrouplimited/symbol-testnet-bootstrap/releases/" target="_blank">latest release</a>
