####
Node
####

The NEM blockchain platform is built from a network of nodes, all running NEM’s core node server software. In summary, these nodes provide a powerful, easy-to-use, stable, and secure platform where Smart Assets transactions are conducted, searched, and immutably logged to the blockchain ledger.

.. figure:: ../resources/images/four-layer-architecture.png
    :width: 650px
    :align: center

    Catapult’s Performance Advantage: A Four-Layered Architecture


The four-layered architecture allows developers to update any of these tiers without disrupting the others, improving security.

NEM nodes are represented in the two first layers:

Layer 01 - The blockchain network
=================================
Each NEM node works with other nodes to build the peer-to-peer blockchain network. In sum, this network creates and supports the blockchain itself.

The NEM node software verifies transactions, maintains a database, synchronizes with other nodes, and maintains stability and trustworthiness to create a network that is fast, secure, and scalable.

Layer 02 - API Gateway Server
=============================

Each node provides the :doc:`API <../api/overview>` gateway that applications may use to access the blockchain and its features.

Your application does not need to run any complex node software; all usage functionality is available through the API interface on each node in the network itself.

.. note:: How to run a node and minimum requirements not yet available.