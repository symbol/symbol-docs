######
Server
######

As a blockchain platform, NEM relies on a decentralized network of nodes to provide a powerful, stable, and secure platform for Smart Asset transactions.

These nodes are deployed using |catapult-server| software, a C++ rewrite of the previous Java-written NEM distributed ledger that has been running for more than 4 years.

Through its multi-tier architecture, it is possible to isolate the peer-to-peer network and implement better API integration flows with the proposed REST API layer.

Also, Catapult offers private networks the ability to add their own transaction types by developing **plugins** for the catapult-server nodes.

************
Installation
************

Catapult-server provides increased flexibility for the node owners. The same software can be used to configure two different types of :doc:`nodes <concepts/node>`:

* **Peer node** (P2P Component): The peer node verifies or discards the transactions once the API pushes them into the P2P network. It runs the consensus algorithm, creates new blocks, and propagates the changes through the network.

* **API node** (API Component): The primary responsibility of the API node is to properly store data in the MongoDB database once transactions are validated.

You can test catapult-server software deploying your own network for development or learning purposes with |catapult-service-bootstrap|.

To build and run catapult-server only, follow the |instructions|.

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
