:orphan:

.. post:: 03 Oct, 2019
    :category: Network
    :excerpt: 1
    :nocomments:

###########################
Creating a private test net
###########################

This guide will walk you through the process of **setting up your own private network** using Catapult's technology.

To run the network, we are going to use the package |catapult-service-bootstrap|. This software suite contains the necessary setup scripts to help developers to quickly build their own network.

.. note:: NEM's next core engine, code-named **Catapult**, is `under development <https://github.com/nemtech/catapult-server/milestones>`_. This bootstrap setup is for learning and development purposes and it should not power any production Catapult instances.

Catapult Service Bootstrap deploys a private network with the following high-level architecture:

.. figure:: ../../resources/images/diagrams/four-layer-architecture.png
    :width: 500px
    :align: center

    Bootstrap network architecture

* **peer-node (1 and 2)**: Peer nodes verify transactions once the API pushes them into the P2P network. They run the consensus algorithm, create new blocks, and propagate the changes through the network.

* **api-node**: The API node stores data in the MongoDB database once transactions are validated. They also identify and store partial aggregate bonded transactions.

* **rest-gateway**: Combines HTTP and WebSockets to perform read and write actions in the NEM blockchain.

*********************
Hardware requirements
*********************

catapult-service-bootstrap has been tested on computers with the following **minimum requirements**.

* **CPU**: 2 cores or more
* **Memory**: 4GB or more
* **HD**: 20GB or more

.. note:: Although you might be able to run the software in less powerful instances, you might encounter some issues while installing or running the node.

************************
Environment requirements
************************

* **OS**: Linux or Mac
* `docker`_ 19.03 installed
* `docker-compose`_ 1.22 installed

************
Installation
************

1. Use this link to **download the latest release** of the package, or clone the repository directly using Git.

.. code-block:: bash

    git clone https://github.com/tech-bureau/catapult-service-bootstrap.git

2. Open the ``catapult-service-bootstrap`` folder.

.. code-block:: bash

    cd catapult-service-bootstrap

3. (Optional) Customize the network's :doc:`configurable parameters <configuring-network-properties>` before launching it.

4. Run the network.

.. code-block:: bash

    ./cmds/start-all

.. note:: To run the docker containers in the background of your terminal, you can run the service in detached mode using the option ``--detach`` or ``-d``.

5. Verify that the node is running by opening a new browser tab with the following URL: ``localhost:3000/chain/height``.

To stop the process, press ``Ctrl+C``.

********
Commands
********

.. csv-table::
    :header: "Command", "Description"
    :delim: ;

    ./cmds/clean-data; Delete all of the blockchain and cache data, keeping the configuration and generated keys.
    ./cmds/clean-all; Clean the data and additionally will remove the generated keys and the configuration generated from these keys.
    ./cmds/run-api-recovery; Run the API recovery service.
    ./cmds/setup-network; Create the nemesis block and generate all the config files if they do not already exist on disk.
    ./cmds/start-all; Create config and nemesis if it doesn't exist and starts up all services.
    ./cmds/start-api-db; Start the MongoDB instance and configure schema/indexes if needed.
    ./cmds/start-api-node; Start the API node.
    ./cmds/start-catapult-api; Start the API node and REST gateway services.
    ./cmds/start-catapult-api-broker;  Start just the API broker service.
    ./cmds/start-catapult-peers; Start peer0 and peer1 services only.
    ./cmds/stop-all; Stop all the services.
    ./cmds/stop-api-db; Stop the MongoDB service.
    ./cmds/stop-api-node; Stop the API node.
    ./cmds/stop-catapult-api; Stop the API node and REST gateway services.
    ./cmds/stop-catapult-api-broker;   Stop just the API broker service.
    ./cmds/stop-catapult-peers; Stop peer0 and peer1 services.
    ./cmds/stop-catapult-api-broker ;  Stop just the API broker service.

*************************
Getting test cat.currency
*************************

An :doc:`account <../../concepts/account>` is a deposit box where you can hold :doc:`mosaics <../../concepts/mosaic>` (tokens) and interact with them announcing transactions. To announce a transaction, the sender should pay a :doc:`fee <../../concepts/fees>` to provide an incentive to those who validate and secure the network and run the infrastructure. This cost is paid in ``cat.currency`` mosaics, the default network token.

After running the ``catapult-service-bootstrap`` tool for the first time, the available currency supply is distributed between a generated set of accounts. To keep one of these accounts quickly retrievable, we are going to store one of them using a command-line tool to conveniently perform the most commonly used actions i.e. interact with the blockchain, setting up an account, sending funds, etc.

1. Install :doc:`NEM2-CLI <../../cli>`.

.. code-block:: bash

    npm install --global nem2-cli@0.13.4

2. Open a new terminal window. Then, go to the directory where the bootstrap tool has generated the addresses.

.. code-block:: bash

    cd  build/generated-addresses/

3. Display the content of the ``addresses.yaml`` file.

.. code-block:: bash

    cat addresses.yaml

4. Under the section ``nemesis_addresses``, you will find the key pairs which contain ``cat.currency``. Copy the private key of the first account.

5. Type the command ``nem2-cli profile create`` using the key obtained in the previous step.

.. code-block:: bash

    nem2-cli profile create

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): MIJIN_TEST
    Introduce your private key: 123***456
    Introduce NEM 2 Node URL. (Example: http://localhost:3000): http://localhost:3000
    Insert profile name (blank means default and it could overwrite the previous profile):

.. note:: Use NEM2-CLI only for testing and development purposes, as the private keys stored are not encrypted.

You should see the account credentials in your terminal.

.. code-block:: bash

    Profile stored correctly
    ┌─────────────┬──────────────────────────────────────────────────────────────────┐
    │ Property    │ Value                                                            │
    ├─────────────┼──────────────────────────────────────────────────────────────────┤
    │ Address     │ SCVG35-ZSPMYP-L2POZQ-JGSVEG-RYOJ3V-BNIU3U-N2E6                   │
    ├─────────────┼──────────────────────────────────────────────────────────────────┤
    │ Public Key  │ 654...321                                                        │
    ├─────────────┼──────────────────────────────────────────────────────────────────┤
    │ Private Key │ 123...456                                                        │
    └─────────────┴──────────────────────────────────────────────────────────────────┘

As the name suggests, the **private key has to be kept secret at all times**. Anyone with access to the private key ultimately has control over the account. On the other hand, you can share securely the public and address of your account with other participants of the network to receive transactions from them.

Now that you have your node running an account with some cat.currency, we recommend you to surf the **NEM Development Center**. In this portal, you can find everything you need to know about :doc:`Catapult's features <../../getting-started/what-is-nem>` and :ref:`self-paced guides <blog-categories>` on how to use the **software development kits**.

.. _docker: https://docs.docker.com/install/

.. _docker-compose: https://docs.docker.com/compose/install/

.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap" target="_blank">Catapult Service Bootstrap</a>
