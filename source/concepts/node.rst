####
Node
####

The NEM blockchain platform is built from a network of nodes. These nodes provide a powerful, stable, and secure platform where Smart Assets transactions are conducted, searched, and immutably logged to the blockchain ledger.

.. figure:: ../resources/images/diagrams/four-layer-architecture.png
    :width: 650px
    :align: center

    Catapult’s Performance Advantage: A Four-Layered Architecture

The four-layered architecture allows developers to update any of these tiers without disrupting the others, which improves security.

*************
P2P Component
*************

**Repository:** |catapult-server|

The P2P nodes form the backbone of the blockchain, making the network robust since it cannot be shut down by eliminating a single entity. The role of the node is to :ref:`verify transactions <transaction-validation>` and :doc:`blocks<block>`, run the consensus algorithm, create new blocks, and propagate the changes through the network.

The API push new transactions to the P2P network, where they are :doc:`included in a block <harvesting>` or discarded. After the block is processed:

- The binary of the block is saved on disk as a flat file.
- The updated chain state is saved in memory or RocksDB (configurable).

Node reputation
===============

Public networks enable anyone to run a node. Some of these nodes could share invalid information or try to disturb the network.

To reduce communication attempts, the nodes keep track of the results of preceding communications.

When a node connects to a remote peer, it first increments the trust towards the remote peer. Otherwise, the node increments the failure counter. Likewise, the node updates the trust counters accordingly after processing the data requested.

From these interactions, the node assigns a weight between 500 and 10000 to every peer reached.

The probability of selecting a remote node depends linearly on its weight. Every four rounds of node selections, the criteria changes to prevent |sybil|. The node selects a peer with high importance instead.

RocksDB
=======

|rocksdb| stores the chain state. The data structures cached are serialized and stored as value to a corresponding key. For example, a column maps the public keys to addresses. Another one, the account state entries as the value to corresponding address keys.

Storing the state in memory is usually faster than using RocksDB. However, storing state information in RocksDB demands less memory of the network nodes.

.. note:: Persisting the state is convenient in networks with a large number of accounts.

*************
API Component
*************

**Repository:** |catapult-server|

P2P nodes can be configured to have an API layer. The primary responsibility of the API is to store the data in a readable form in MongoDB.

The API :ref:`validates transactions <transaction-validation>` received from the REST component. Additionally, it throws the errors back via ZMQ in binary.

This component is also responsible for collecting the cosignatures of :doc:`aggregated bonded transactions <aggregate-transaction>`, that are only pushed to P2P nodes once they are complete.

MongoDB
=======

|mongodb| stores blocks, transactions and chain state for high query performance.

The API updates the MongoDB when:

- A new block / a bunch of blocks finished processing.
- New unconfirmed transactions completed processing.

.. note:: MongoDB should not be accessed externally.

ZMQ
====

|zmq| is an asynchronous messaging library, which enables real-time subscriptions. It transports notifications from the API server to the ZMQ endpoint, where the Catapult REST component listens. It is an alternative to REST WebSockets, aimed to be used when performance is critical.

**************
REST Component
**************

**Repository:** |catapult-rest|

The REST component handles **JSON API** client requests. This reads from MongoDB, formats the response, and returns it to the client. This component is responsible as well to return events to the client using :ref:`WebSockets <websockets>`.

Each REST component connects to one API instance, sending new transactions using sockets.

.. |catapult-server| raw:: html

   <a href="https://github.com/nemtech/catapult-server" target="_blank">Catapult Server</a>

.. |catapult-rest| raw:: html

    <a href="https://github.com/nemtech/catapult-rest" target="_blank">Catapult REST</a>

.. |rocksdb| raw:: html

  <a href=" https://en.wikipedia.org/wiki/RocksDB" target="_blank">RocksDB</a>

.. |mongodb| raw:: html

  <a href="https://es.wikipedia.org/wiki/MongoDB" target="_blank">MongoDB</a>

.. |zmq| raw:: html

  <a href=" https://en.wikipedia.org/wiki/ZeroMQ" target="_blank">ZeroMQ</a>

.. |sybil| raw:: html

  <a href=" https://en.wikipedia.org/wiki/Sybil_attack" target="_blank">Sybil attacks</a>

******
Guides
******

* |running-catapult-locally|

Deploy a Catapult full node for learning and development purposes.

.. |running-catapult-locally| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap/" target="_blank"><b>Running Catapult locally</b></a>
