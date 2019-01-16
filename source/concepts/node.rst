####
Node
####

The NEM blockchain platform is built from a network of nodes. These nodes provide a powerful, stable, and secure platform where Smart Assets transactions are conducted, searched, and immutably logged to the blockchain ledger.

.. figure:: ../resources/images/diagrams/four-layer-architecture.png
    :width: 650px
    :align: center

    Catapult’s Performance Advantage: A Four-Layered Architecture

The four-layered architecture allows developers to update any of these tiers without disrupting the others, which improves security.

**********************
Catapult P2P Component
**********************

**Repository:** |catapult-server|

The P2P nodes form the backbone of the blockchain. The role of the node is to :ref:`verify transactions <transaction-validation>` and :doc:`blocks<block>`, run the consensus algorithm, create new blocks, and propagate the changes through the network.

The API nodes push new transactions to P2P nodes. If the transaction received is invalid, the P2P nodes discard it.

After processing a block:

1. The block binary is saved on disk as a flat file.
2. The updated chain state is saved in memory or RocksDB (configurable).

RocksDB
=======

|rocksdb| stores the chain state. The data structures cached are serialized and stored as value to a corresponding key. In other words, supports different “columns” (key/value pair “tables”).

For example, a column maps the public keys to addresses. Another one, the account state entries as the value to corresponding address keys.

Storing the state in memory is faster than using RocksDB. However, storing state information in RocksDB demands less memory the network nodes. This is primarily desirable in networks with a large number of accounts.

**********************
Catapult API Component
**********************

**Repository:** |catapult-rest|

The primary responsibility of Catapult API is to store the data in readable form.  Each API instance maintains a MongoDB, and optionally a RocksDB to save the state.

The layer :ref:`validates the transactions <transaction-validation>` received from the REST component. Additionally, the API throws the errors back via ZMQ in binary.

The Catapult API component is also responsible for collecting cosignatures. :doc:`Aggregated bonded transactions <aggregate-transaction>` are pushed to P2P nodes once they are complete.

API components can connect to multiple P2P nodes, but at least must connect to one.

MongoDB
=======

|mongodb| stores blocks, transactions and chain state for high query performance.

The API updates the MongoDB when:

- A new block / a bunch of blocks finished processing.
- New unconfirmed transactions finished processing.

.. note:: MongoDB should not be accessed externally.

ZMQ
====

|zmq| is an asynchronous messaging library, which enables real-time subscriptions. It transports notifications from the API server to the ZMQ endpoint, where the Catapult REST component listens.  It is an alternative to REST WebSockets, aimed to be used when performance is critical.

***********************
Catapult REST Component
***********************

**Repository:** |catapult-rest|

Catapult REST handles **JSON API** client requests. This component reads from MongoDB, formats the response, and returns it to the client. Each Catapult REST connects to one Catapult API instance.

Catapult REST sends new transactions to the Catapult API using sockets. The component announces events as well to the client via WebSockets.

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


******
Guides
******

* |running-catapult-locally|

Deploy a Catapult node for learning and development purposes.

.. |running-catapult-locally| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap/" target="_blank"><b>Running Catapult locally</b></a>
