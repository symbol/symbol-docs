.. post:: 13 Feb, 2020
    :category: Network
    :excerpt: 1
    :nocomments:

#########################
How to connect to MongoDB
#########################

Learn how to access your API node MongoDB instance.

The :doc:`REST Gateway <../../api>` offers a broad range of endpoints so that you don't have to connect to MongoDB.
Still, if you are developing new plugins for Symbol, or analyzing extensive blockchain data, you might want to consider connecting to MongoDB directly.

By the end of this guide, you will be connected to your API node database instance and doing some basic queries.

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.
- Have an :doc:`API or Dual node running <running-a-test-net-node>`.

.. _install-robo3t:

***************
Install Robo 3T
***************

For this tutorial, we are going to use |Robo3T| (formerly RoboMongo), a cross-platform MongoDB management tool, to interact with the database.

1. Download Robo 3T `here <https://robomongo.org/download>`_.
2. Open the installer and follow the installation instructions.

In case of doubt, follow the `official installation docs <https://studio3t.com/knowledge-base/articles/installation/>`_.

***********************
Create a new connection
***********************

1. Open a new terminal on the computer you are running the node. Then, get the **container's identifier** running MongoDB with ``docker ps``.

.. code-block:: bash

    docker ps | grep mongo

    ea62f033d2a6    mongo    "docker-entrypoint.s…"    9 minutes ago    27017/tcp    api-assembly_db_1

2. Once you have the ID, get the **container's IP** with the command ``docker inspect <ID>``.

.. code-block:: bash

    docker inspect ea62f033d2a6 | grep "IPAddress"

    "SecondaryIPAddresses": null,
    "IPAddress": "",
            "IPAddress": "172.20.0.7",

3. Launch Robo 3T and click on the **"Create"** link to add a new connection.

.. figure:: ../../resources/images/screenshots/robo3t-open.png
    :align: center
    :width: 700px

4. Enter the following details under the **"Connection"** tab:

.. figure:: ../../resources/images/screenshots/robo3t-connection.png
    :align: center
    :width: 700px

* **Type**: Direct Connection
* **Name**: my-node
* **Address**: 172.20.0.7 (retrieved from the second step)
* **Port**: 27017

5. If the node is running locally, click **"Connect"** and move to the next section :ref:`Querying MongoDB <querying-mongodb>`.

6. Otherwise, if you are running the node in a **virtual private server** (VPS), create a tunnel first between your computer and the server.

Go to the **SSH tab** and add the server's details:

.. figure:: ../../resources/images/screenshots/robo3t-tunnel.png
    :align: center
    :width: 700px

Replace the **SSH Address**, **username**, and **authentication** method.

7. After you click "Connect", you should see the MongoDB collections under the database named **"catapult"**.

.. _querying-mongodb:

****************
Querying MongoDB
****************

.. note:: Only use this method to read from the database. Do not alter any document directly on MongoDB.

1. On the left sidebar, open the collection you want to query.

.. figure:: ../../resources/images/screenshots/robo3t-collection.png
    :align: center
    :width: 700px

2. In most cases, you may want to filter a set of entries by one of its attributes.
To filter, for example, a given transaction type, write a query with the following format on Robo 3T shell:

.. code-block:: bash

    db.getCollection('transactions').find( { "transaction.type": 16724})

For other advanced queries, check the `Robo3T <https://studio3t.com/knowledge-base/articles/query-mongodb/>`_ docs.

3. Click on the **"Play"** button to execute the query.

.. figure:: ../../resources/images/screenshots/robo3t-query.png
    :align: center
    :width: 700px

.. |Robo3T| raw:: html

   <a href="https://robomongo.org">Robo 3T</a>
