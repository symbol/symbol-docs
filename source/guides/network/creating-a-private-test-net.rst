:orphan:

.. post:: 03 Oct, 2019
    :category: Network
    :excerpt: 1
    :nocomments:

########################################
Creating private test networks and nodes
########################################

This guide will walk you through the process of setting up your own private network or node using |codename|.

To run the network, we are going to use the package |symbol-bootstrap| which contains the necessary setup scripts to help developers quickly configure and run their own network or node.

.. note:: This replaces the previous tools |catapult-service-bootstrap| and |symbol-testnet-bootstrap|.

************
Requirements
************

========
Hardware
========

|symbol-bootstrap| has been tested on computers with the following **minimum requirements**.

* **CPU**: 2 cores.
* **Memory**: 4GB.
* **HD**: 20GB.

.. note:: In less powerful instances you might encounter issues installing or running the node.

===========
Environment
===========

The setup scripts are automated using **docker**. To run a test net node, you will need to have installed the following docker tools:

* `npm`_ version 10 or higher.
* `docker`_
* `docker-compose`_

=====
Ports
=====

Make sure that the server's host is accessible from the internet and that **the following ports are open and available**:

* Port ``7900`` is used by catapult-server to communicate between nodes.
* Port ``3000`` is used by the REST Gateway to expose the endpoints to interact with the node.

************
Installation
************

|symbol-bootstrap| is provided as an installable tool, there is no need to clone a repository and build it. Just do:

.. code-block:: bash

    npm install -g symbol-bootstrap

*************
Configuration
*************

=======
Presets
=======

Node configuration is done through a **YAML configuration file** which specifies every possible network parameter. Since the complete file can be several hundred lines long, a number of **presets** are available to simplify its handling:

.. csv-table::
    :header: "Preset", "Description"
    :delim: ;
    :widths: 15, 85

    ``bootstrap``; Full network with 1 mongo database, 2 peers, 1 api and 1 rest gateway. Nemesis block is generated (`configuration file <https://github.com/nemtech/symbol-bootstrap/blob/main/presets/bootstrap/network.yml>`_).
    ``light``; It's a lighter version of ``bootstrap`` with 1 mongo database, 1 dual peer and 1 rest gateway. Great for faster light e2e automatic testing. Nemesis block is generated (`configuration file <https://github.com/nemtech/symbol-bootstrap/blob/main/presets/light/network.yml>`_).
    ``testnet``; A single node that connects to the current public testnet. Nemesis block is copied over. Requires an ``assembly``, as shown below (`configuration file <https://github.com/nemtech/symbol-bootstrap/blob/main/presets/testnet/network.yml>`_).

Some presets, like ``testnet`` can be further customized by specifying an **assembly** (or flavor) which provides additional parameters.

The assemblies available for the ``testnet`` preset specify the kind of node to instantiate:

.. csv-table::
    :header: "Assembly", "Description"
    :delim: ;
    :widths: 15, 85

    ``peer``; The node is a harvester (`configuration file <https://github.com/nemtech/symbol-bootstrap/blob/main/presets/testnet/assembly-peer.yml>`_).
    ``api``; The node runs its own mongo database and rest gateway (`configuration file <https://github.com/nemtech/symbol-bootstrap/blob/main/presets/testnet/assembly-api.yml>`_).
    ``dual``; The node is a harvester and runs its own mongo database and rest gateway (`configuration file <https://github.com/nemtech/symbol-bootstrap/blob/main/presets/testnet/assembly-dual.yml>`_).

Finally, if additional configuration is required, a **custom YAML file** can be provided. Any value in this file overrides the default values set by the preset or the assembly so it can be combined on top of them. Take a look at the :doc:`Configuring network properties <configuring-network-properties>` guide to know which parameters are available.

========================
The ``bootstrap`` preset
========================

As shown above, this preset instantiates a network with multiple nodes so it's worth describing its architecture in more detail:

.. figure:: ../../resources/images/diagrams/four-layer-architecture.png
    :width: 500px
    :align: center

    Bootstrap network architecture

The nodes labelled "Internal" are the ones created by |symbol-bootstrap|, and are accessible through the REST API.

* **peer-node (1 and 2)**: Peer nodes verify transactions once the API pushes them into the P2P network. They run the consensus algorithm, create new blocks, and propagate the changes through the network.
* **api-node**: The API node stores data in the MongoDB database once transactions are validated. They also identify and store partial aggregate bonded transactions.
* **rest-gateway**: Combines HTTP and WebSockets to perform read and write actions on the blockchain.

===============================
Creating the configuration file
===============================

Before building the network the full configuration file has to be created by using the `symbol-bootstrap config <https://github.com/nemtech/symbol-bootstrap/blob/main/docs/config.md>`_ command and providing the desired preset and assembly:

.. code-block:: bash

    symbol-bootstrap config -p <preset> -a <assembly> -c <custom_parameters_file.yml>

Some examples:

.. code-block:: bash

    symbol-bootstrap config -p bootstrap
    symbol-bootstrap config -p testnet -a peer
    symbol-bootstrap config -p testnet -a dual
    symbol-bootstrap config -p testnet -a dual -c custom_parameters.yml

This will create a folder called ``target`` by default (It can be changed with the ``-t`` option). Inside there's a folder called ``config`` containing, among other things, the generated complete configuration file (``target/config/preset.yml``) ready to be used to build the network.

********************
Building the network
********************

This command prepares the necessary Docker files based on the provided configuration:

.. code-block:: bash

    symbol-bootstrap compose

It only needs to be run once.

****************
Running the node
****************

Finally, execute this command to start the necessary Docker instances and boot your network:

.. code-block:: bash

    symbol-bootstrap run

Stop the process by pressing ``Ctrl+C``.

.. note:: To run the docker containers in the background of your terminal, you can run the service in detached mode using the option ``--detach`` or ``-d``.

**********************
The all-in-one command
**********************

The above three commands (``config``, ``compose`` and ``run``) can be merged into one:

.. code-block:: bash

    symbol-bootstrap start -p <preset> -a <assembly>

That's right, a test network or node can be instantiated and booted with a single command!

*********************************************
Check that the REST gateway is up and running
*********************************************

If the selected configuration includes an API node, you can verify that the node is running by opening a new browser tab and going to: ``localhost:3000/chain/height``.

****************************
Retrieving the node accounts
****************************

Depending of the selected configuration, one or more nodes with corresponding accounts have been created. To interact with any of these accounts (to transfer mosaics **to** it, for example) you need its address or its public key. To fully control an account (to transfer mosaics **from** it, for example) you need its private key.

All this information can be retrieved from a file in the ``config`` folder:

``target/config/generated-addresses/addresses.yml``

As an example:

.. code-block:: yaml

    networkType: 152
    nemesisGenerationHashSeed: 7BFC536990108CA923B2715DE6B8E47E6BB56C945293BF4FC22C5AF895F61E62
    nodes:
        -
            signing:
                # Keys for the account of the peer-node-0
                privateKey: 6D0C9F945FA2AED90CF072A8BB2898C40A9D3C53B1E8E8541D3206673EF7D3DC
                publicKey: C2BD21E4F9261247A4CBE75DA8683978E0F1FFF34AAB17BEBC21E7B9E0E17A9F
                address: TAMEGYVY6GVGXCLBIEH72XU4D2OSTH2MIOOY4QQ
            vrf:
                privateKey: 8F02E4D7A9C3DD946561AF1D19A746443C46A0C4888EA61AAF01A2455043EB3E
                publicKey: D67601AC6767F8A3C97FFDB0D9D737A943FFFA6E69C2C6527B0ED32A4E41B443
                address: TCR6ZWX3UP3TKJK3BSE6ARJ4WAF3KHFFUWJ7EWI
            ssl:
                privateKey: 76e9f535f1bd15d629e5dc621c9a56e7dcb52c72de74ffed44eb8f7ae8295cbc
                publicKey: 3d68cdaa4e48a14bd875d4ca18e044522be5f602e8c4f37c1c65eafdfaa19110
            type: peer-node
            name: peer-node-0
            friendlyName: peer-node-0

**********
Next steps
**********

You now have a test network running and access to each node's account. We recommend you continue reading the rest of :ref:`the guides <blog-categories>` to keep learning more |codename|'s features!

.. _npm: https://www.npmjs.com/get-npm

.. _docker: https://docs.docker.com/install/

.. _docker-compose: https://docs.docker.com/compose/install/

.. |symbol-bootstrap| raw:: html

   <a href="https://github.com/nemtech/symbol-bootstrap" target="_blank">Symbol Bootstrap</a>

.. |catapult-service-bootstrap| raw:: html

    <a href="https://github.com/nemtech/catapult-service-bootstrap" target="_blank">Catapult Service Bootstrap</a>

.. |symbol-testnet-bootstrap| raw:: html

    <a href="https://github.com/nemtech/symbol-testnet-bootstrap" target="_blank">Symbol Testnet Bootstrap</a>
