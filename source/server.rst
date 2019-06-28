######
Server
######

As a blockchain platform, NEM relies on a decentralized network of nodes to provide a powerful, stable, and secure platform for Smart Asset transactions.

These nodes are deployed using |catapult-server| software, a C++ rewrite of the previous Java-written NEM distributed ledger that has been running for more than 4 years.

Through its multi-tier architecture, it is possible to isolate the peer-to-peer network and implement better API integration flows with the proposed REST API layer.

Also, Catapult offers private networks the ability to add their own transaction types by developing **plugins** for the catapult-server nodes.

**********
Node types
**********

Catapult-server provides increased flexibility for the node owners. The same software can be used to configure three different types of :doc:`nodes <concepts/node>`:

* **Peer node**: The peer node verifies or discards the transactions once the API pushes them into the P2P network. It runs the consensus algorithm, creates new blocks, and propagates the changes through the network.

* **API node**: The primary responsibility of the API node is to properly store data in the MongoDB database once transactions are validated. They also identify and store partial aggregate bonded transactions.

* **Dual node**: The dual node combines a peer and API nodes into a single server instance.

********************
Package organization
********************

**Repository**: |catapult-server|

.. csv-table::
   :header: "Folder name", "Description"
   :delim: ;

   /extensions; Modules that add features to the bare catapult-server. They range from extensions that are critical like consensus and networking to optional extensions like ZMQ messaging and other API conveniences.
   /external; Implementations of the hashing algorithms used.
   /plugins;  Modules that introduce new and different ways to alter the chain's state via transactions.
   /resources; Node and network configurable properties.
   /scripts; Utility scripts for developers.
   /sdk; Reusable code used by tests and tools.
   /seed; Nemesis blocks used in tests.
   /src; Catapult's core engine.
   /tests; Collection of tests.
   /tools; Tools to deploy and monitor networks and nodes.

************
Installation
************

Test catapult-server software deploying your own network for development or learning purposes with |catapult-service-bootstrap|.

You can create a new catapult-server image following the building |instructions|.

******
Guides
******

* |running-catapult-locally|

Deploy a Catapult full node for learning and development purposes.

.. |running-catapult-locally| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap/" target="_blank"><b>Running Catapult locally</b></a>

* **Deploying a test net node** (:doc:`upcoming <guidelines/suggesting-changes>`)

* **Configuring a private network** (:doc:`upcoming <guidelines/suggesting-changes>`)

* **Creating a custom plugin** (:doc:`upcoming <guidelines/suggesting-changes>`)

.. |catapult-server| raw:: html

   <a href="https://github.com/nemtech/catapult-server" target="_blank">catapult-server</a>

.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap" target="_blank">Catapult Service Bootstrap</a>

.. |instructions| raw:: html

   <a href="https://github.com/nemtech/catapult-server/blob/master/BUILDING.md" target="_blank">instructions for Ubuntu</a>
