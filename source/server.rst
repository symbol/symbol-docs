######
Server
######

|codename|-based networks rely on nodes to provide a trustless, high-performance, and secure blockchain platform.

These nodes are deployed using |catapult-server| software, a C++ rewrite of the previous Java-written NEM distributed ledger that has been running since 2015.

Learn more about the protocol by reading the |whitepaper| and this :doc:`documentation <concepts/account>`.

************
Installation
************

**Catapult server** can be used to configure three different types of :doc:`nodes <concepts/node>`:

* **Peer node**: The peer node verifies or discards the transactions once the API pushes them into the P2P network. It runs the consensus algorithm, creates new blocks, and propagates the changes through the network.
* **API node**: The primary responsibility of the API node is to properly store data in the MongoDB database once transactions are validated.
* **Dual node**: The dual node combines a peer and API nodes into a single server instance.

To compile symbol-server source code, follow the |instructions|. However, if you want to run your a network for development or learning purposes with |catapult-service-bootstrap|.

.. _catapult-server-tools:

*****
Tools
*****

Catapult server comes with tools to check the health of the network, generate nemesis blocks, create keypairs, recover the server in the event of an abrupt exit, and more.

You can find them inside of ``catapult-server/build/bin``.

catapult.tools.address
======================

Generates keypairs and addresses.

Options

.. code-block:: console

  -h [ --help ]     print help message
  -l [ --loggingConfigurationPath ] arg
                    the path to the logging configuration file
  -g [ --generate ] arg (=10)
                    number of random keys to generate
  -p [ --public ] arg
                    show address associated with public key
  -s [ --secret ] arg
                    show address and public key associated with private key
  -n [ --network ] arg (=public)
                    network, possible values: mijin, mijin-test, public (default), public-test
  -e [ --useHighEntropySource ]
                    true if a high entropy source should be used for randomness

Command

.. code-block:: console

   ./catapult.tools.address -g  10 -n mijin-test

If you want the save the output, add an output stream at the end:

.. code-block:: console

   ./catapult.tools.address -g  10 -n mijin-test > myKeys.txt.

catapult.tools.nemgen
=====================

Creates a nemesis block out of a `mijin-test.properties  <https://github.com/nemtech/catapult-server/blob/master/tools/nemgen/resources/mijin-test.properties>`_ file. The output generated is used to start a new chain.

Options

.. code-block:: console

    -h [ --help ]     print help message
    -l [ --loggingConfigurationPath ] arg
                    the path to the logging configuration file
    -r [ --resources ] arg (=..)
                    the path to the resources directory
    -p [ --nemesisProperties ] arg
                    the path to the nemesis properties file
    -s [ --summary ] arg
                    the path to summary output file (default: <bindir>/summary.txt)
    -n [ --no-summary ]
                    don't generate summary file
    -t [ --useTemporaryCacheDatabase ]
                    true if a temporary cache database should be created and destroyed

Command

.. code-block:: console

   ./catapult.tools.nemgen -p <nemesis_block_properties_path> -r <resources_path>

catapult.tools.benchmark
========================

Executes CPU-based performance tests of catapult functions, such as hashing or encryption.

Options

.. code-block:: console

  -h [ --help ]     print help message
  -l [ --loggingConfigurationPath ] arg
                    the path to the logging configuration file
  -t [ --num threads ] arg (=0)
                    the number of threads
  -p [ --num partitions ] arg (=0)
                    the number of partitions
  -o [ --ops / partition ] arg (=1000)
                    the number of operations per partition
  -s [ --data size ] arg (=148)
                    the size of the data to generate

Command

.. code-block:: console

   ./catapult.tools.benchmark

catapult.tools.network
======================

Outputs node info, partner node connectivity info, and a partner node table for known peers within :properties:`peers-p2p.json <peers-p2p.json>` and :properties:`peers-api.json <peers-api.json>`.

Options

.. code-block:: console

  -h [ --help ]     print help message
  -l [ --loggingConfigurationPath ] arg
                    the path to the logging configuration file
  -r [ --resources ] arg (=..)
                    the path to the resources directory

Command

.. code-block:: console

   ./catapult.tools.network -r <resources_path>

catapult.tools.statusgen
========================

Generates the list of status errors that the server might return after receiving a transaction.

Options

.. code-block:: console

  -h [ --help ]     print help message
  -l [ --loggingConfigurationPath ] arg
                    the path to the logging configuration file

Command

.. code-block:: console

   ./catapult.tools.statusgen

catapult.tools.health
=====================

Checks the health and displays statistics (like the unconfirmed transaction cache) for the nodes found inside of :properties:`peers-p2p.json <peers-p2p.json>` and :properties:`peers-api.json <peers-api.json>`.

Options

.. code-block:: console

  -h [ --help ]     print help message
  -l [ --loggingConfigurationPath ] arg
                    the path to the logging configuration file
  -r [ --resources ] arg (=..)
                    the path to the resources directory

.. code-block:: console

   ./catapult.tools.health -r <resources_path>

.. |catapult-server| raw:: html

   <a href="https://github.com/nemtech/catapult-server" target="_blank">catapult-server</a>

.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap" target="_blank">Catapult Service Bootstrap</a>

.. |instructions| raw:: html

   <a href="https://github.com/nemtech/catapult-server/blob/master/BUILDING.md" target="_blank">instructions for Ubuntu</a>

.. |whitepaper| raw:: html

   <a href="https://nemtech.github.io/catapult-whitepaper/main.pdf" target="_blank">Whitepaper</a>
