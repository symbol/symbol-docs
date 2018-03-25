####
Node
####

Nodes are the entities that exchange data in a P2P network. They form the core to ensure and keep the network plus the block chain validated all the time.

A node is essentially a **NEM Infrastructure Server** (short: ``NIS``) instance running on a computer. To be able to communicate with the network, a node needs to be booted.

Through node requests, it is possible to discover other nodes in the network, learn about other nodes experiences and get information about their current chain height.

************
Architecture
************

Catapult is fast because it’s built with a four-layered architecture. This keeps each layer free from getting slowed down by the others, so API calls and data queries can respond quickly even with high traffic. It also allows developers to update any of these tiers without disrupting the others, improving security.

.. figure:: ../resources/images/four-layer-architecture.png
    :width: 650px
    :align: center

    Catapult’s Performance Advantage: A Four-Layered Architecture

Consider a node as the aggregation of the core blockchain server for P2P, database and API server, corresponding to the first and second layers.

.. note:: How to run a node and minimum requirements not yet available.