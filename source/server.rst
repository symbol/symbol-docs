######
Server
######

As a blockchain platform, NEM relies on a decentralized network of nodes to provide a powerful, stable, and secure platform for Smart Asset transactions.

These nodes are deployed using catapult-server software, carefully written in C++ to be NEM’s next core engine.

**Repository:** |catapult-server|

*************
Configuration
*************

Catapult sports a :doc:`4-layer architecture <concepts/node>` design for added security, allowing developers to update any level without disrupting the others.  Catapult-server provides increased flexibility for the node owners. The same software can be used to configure two different types of nodes:

* **Peer node** (P2P Component): The peer node verifies or discards the transactions once the API pushes them into the P2P network. It runs the consensus algorithm, creates new blocks, and propagates the changes through the network.

* **API node** (API Component): The primary responsibility of the API node is to properly store data in the MongoDB database once transactions are validated.

************
Installation
************

[installation-instructions]

********************
Package Organization
********************

[package-organization]

***********************
Configurable Parameters
***********************

[list of configurable parameters]


.. |catapult-server| raw:: html

   <a href="https://github.com/nemtech/catapult-server" target="_blank">Catapult Server</a>
