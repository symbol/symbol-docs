.. post:: 05 Mar, 2021
    :category: Network
    :excerpt: 1
    :nocomments:

##############################
Running a Symbol node manually
##############################

This guide walks you through the process of setting up a node to join |codename|'s network **without** using Symbol Bootstrap.

|symbol-bootstrap| is a very handy tool that allows the **quick deployment** of |codename| nodes. However, it relies on `Docker <http://docker.com>`__ technology which might not be available (or allowed) in all scenarios. This guide takes the longer route and explains how to setup a |codename| node **manually**. If you would like to use Symbol Bootstrap use :doc:`this guide <running-a-symbol-node>` instead.

The next sections explain first how to build a :ref:`peer-node` and then expand it to convert it into an :ref:`api-node`.

.. note:: The following instructions have only been verified to work on Linux.

*****************
Build a Peer node
*****************

Build the server
================

Follow the `Catapult server <https://github.com/nemtech/catapult-server>`__ instructions to **build** its binaries, either `manually <https://github.com/nemtech/catapult-server/blob/main/docs/BUILD-manual.md>`__ or using `Conan <https://github.com/nemtech/catapult-server/blob/main/docs/BUILD-conan.md>`__.

Run the server
==============

**Download** the network configuration file from **A LOCATION YET TO BE DETERMINED**.

Follow Catapult server's `instructions to run a node <https://github.com/nemtech/catapult-server/blob/main/docs/RUNPEERLIN.md>`__ using the downloaded network configuration.

*****************
Build an API node
*****************

Once you have the Catapult Server running, you can add **extra services** to turn it into an API node:

.. figure:: ../../resources/images/diagrams/rest-detail.png
    :align: center

As shown in the diagram above, besides the **Catapult Server** you will also need:

- A **Database** holding the REST data.
- A **Catapult Broker** serializing accesses to the database.
- A **REST gateway** accepting client requests and turning them into server commands or database queries.

The following sections explain how to install each service. You will need all of them.

Move to the ``_build`` folder created while building the server and create any additional folders requested in the next steps inside ``_build``.

Run the database
=====================

1. **Install** `MongoDB <http://mongodb.com>`__ (at least version 4.4).

   It is recommended to follow the `program's own installation instructions <https://docs.mongodb.com/manual/administration/install-community/>`__, and NOT install from your distro's packages.

2. Create a directory to store the data files and **run the database**:

   .. code-block:: bash

      mkdir dbfiles
      mongod --dbpath=dbfiles --wiredTigerCacheSizeGb 2 --bind_ip 127.0.0.1

   Keep ``mongod`` running for as long as your node runs.

3. **Build indices** to optimize database accesses.

   The ``catapult-server`` repository you cloned to build the server in the first step contains `a folder with mongo scripts <https://github.com/nemtech/catapult-server/blob/main/scripts/mongo>`__. Run this one:

   .. code-block:: bash

      mongo 127.0.0.1/catapult < ../../scripts/mongo/mongoDbPrepare.js

   Without this step database performance will be unacceptably slow.

Run the broker
===================

4. **Edit** ``resources/config-database.properties`` and point ``databaseUri`` to ``127.0.0.1:27017``:

   .. code-block:: ini

      [database]
  
      databaseUri = mongodb://127.0.0.1:27017
      databaseName = catapult

5. **Run the broker**:

   Move into the ``bin`` directory and run:

   .. code-block:: bash

      ./catapult.broker ..

   Keep the broker running for as long as your node runs.

Build and run the REST gateway
==============================

6. **Clone** the ``catapult-rest`` repository and **install its dependencies**:

   .. code-block:: bash

      git clone https://github.com/nemtech/catapult-rest.git
      cd catapult-rest
      npm install -g yarn
      ./yarn-setup.sh

7. **Build** the REST gateway:

   .. code-block:: bash

      cd rest
      yarn build

7. **Configure** the REST gateway:

   All configuration is stored in the ``resources/rest.json`` file.
   
   **Edit this file** to make sure that the following properties point to the right files:

   .. csv-table::
      :header: "Property", "File", "Default location"
      :widths: 35,35,30
      :delim: ;

      ``tlsClientCertificatePath``; ``node.crt.pem``; ``_build/certificate/``
      ``tlsClientKeyPath``; ``node.key.pem``; ``_build/certificate/``
      ``tlsCaCertificatePath``; ``ca.cert.pem``; ``_build/certificate/``
      ``networkPropertyFilePath``; ``config-network.properties``; ``_build/resources/``
      ``nodePropertyFilePath``; ``config-node.properties``; ``_build/resources/``

   For example:

   .. code-block:: json

      {
         "host": "127.0.0.1",
         "port": 7900,
         "timeout": 1000,
         "tlsClientCertificatePath": "~/catapult-server/_build/certificate/node.crt.pem",
         "tlsClientKeyPath": "~/catapult-server/_build/certificate/node.key.pem",
         "tlsCaCertificatePath": "~/catapult-server/_build/certificate/ca.cert.pem",
         "networkPropertyFilePath": "~/catapult-server/_build/resources/config-network.properties",
         "nodePropertyFilePath": "~/catapult-server/_build/resources/config-node.properties"
      }

8. **Run the REST gateway**:

   .. code-block:: bash

      node _build/index.js resources/rest.json

   Keep the REST gateway running for as long as your node runs.

Verification
============

If the REST gateway is working correctly, you can now make queries at port 3000. If the Catapult Server, Broker and MongoDB are working correctly, the values returned by REST will be correctly synchronized with the rest of the blockchain.

Point a browser to the following URLs and check that the returned values are similar to the expected ones:

* `http://localhost:3000/node/info <http://localhost:3000/node/info>`__

  .. code-block:: json

     {
        "status":{
           "apiNode":"up",
           "db":"up"
        }
     }

* `http://localhost:3000/chain/info <http://localhost:3000/chain/info>`__: Node's connection to the network.

  .. code-block:: json

     {
        "scoreHigh": "0",
        "scoreLow": "11485261672816562840",
        "height": "161138",
        "latestFinalizedBlock": {
           "finalizationEpoch": 224,
           "finalizationPoint": 44,
           "height": "160560",
           "hash": "52D3B01920C695B9194FABD869804E4D2A18D9B5509E47B2C70B0E6C3E275E33"
        }
     }

  The ``height`` field should match the actual height of the blockchain, but, upon first starting the node, it might take a while to synchronize.
