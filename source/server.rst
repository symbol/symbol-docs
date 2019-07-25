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

**Catapult server** can be used to configure three different types of :doc:`nodes <concepts/node>`:

* **Peer node**: The peer node verifies or discards the transactions once the API pushes them into the P2P network. It runs the consensus algorithm, creates new blocks, and propagates the changes through the network.

* **API node**: The primary responsibility of the API node is to properly store data in the MongoDB database once transactions are validated. They also identify and store partial aggregate bonded transactions.

* **Dual node**: The dual node combines a peer and API nodes into a single server instance.

You can create a new catapult-server image following the building |instructions|, but we recommend deploying your own network for development or learning purposes with |catapult-service-bootstrap|.

Troubleshooting
===============

This section highlights common errors or difficulties one may encounter whilst setting a Catapult node.

**Mosaic outflows**

This error usually looks like:

.. code-block:: console

    14:19:34.719477 0x000000010dfbf5c0: <error> (local::HostUtils.h@43) Throwing exception: harvesting outflows (0) do not add up to power ten multiple of expected importance (15000000)

.. code-block:: console

    14:19:34.719477 0x000000010dfbf5c0: <error> (local::HostUtils.h@43) Throwing exception: harvesting outflows (15000000) do not add up to power ten multiple of expected importance (17000000)

**What does it mean?**

This error can happen in the event of the following situations:

a) The supply of the ``cat.harvest`` mosaic the nemesis block does not match the supply inside of the :properties:`config-network.properties <config-network.properties>` file.

b) The mosaicId inside of the :properties:`config-network.properties <config-network.properties>` does not match the one generated inside of the nemesis block.

**How to fix it?**

For the first scenario, change the ``totalChainImportance`` in your resources :properties:`config-network.properties <config-network.properties>` to match the supply set in the nemesis block.

For the second scenario, you will have to find the correct mosaic identifier that the nemgen tool creates. You can run :ref:`nemgen <catapult-server-tools>`, and output the result to to a txt file. Then, search for the ``cat.<harvest | currency>`` identifier.

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
