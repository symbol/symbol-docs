.. post:: 25 Sep, 2020
    :category: Network
    :excerpt: 1
    :nocomments:

######################
Using Symbol Bootstrap
######################

.. sidebar:: Quick Installation

    On systems using ``apt``:

    .. code-block:: bash

      sudo apt update
      sudo apt install nodejs npm \
          docker docker-compose
      npm install -g symbol-bootstrap

This guide explains the concepts behind |symbol-bootstrap|, a package which contains the necessary setup scripts to help developers quickly configure and run their own network or node.

After reading this you will be able to better understand the :doc:`Creating private test networks <creating-a-private-test-net>` and :doc:`Running a test net node <running-a-test-net-node>` guides.

**This package replaces the previous tools** |catapult-service-bootstrap| and |symbol-testnet-bootstrap|.

************
Requirements
************

===========
Environment
===========

The setup scripts are automated using **docker**. To run a test net or node, you will need to have installed the following tools:

* `nodejs`_ version 10 or higher
* `docker`_
* `docker-compose`_

=====
Ports
=====

Make sure that the server's host is accessible from the internet and that **the following ports are open and available**:

* Port ``7900`` is used by catapult-server to communicate between nodes.
* Port ``3000`` is used by the REST Gateway to expose the endpoints to interact with the node.

************
Installation
************

|symbol-bootstrap| is provided as an installable tool, there is no need to clone a repository and build it. Just do:

.. code-block:: bash

    npm install -g symbol-bootstrap

*************
Configuration
*************

=======
Presets
=======

Node configuration is done through a **YAML configuration file** which specifies every possible network parameter. Since the complete file can be several hundred lines long, a number of **presets** are available to simplify its handling:

.. csv-table::
    :header: "Preset", "Description"
    :delim: ;
    :widths: 20, 80

    ``bootstrap``; **Autonomous network** with 1 mongo database, 2 peers, 1 api and 1 rest gateway. Nemesis block is generated (`configuration file <https://github.com/nemtech/symbol-bootstrap/blob/main/presets/bootstrap/network.yml>`__). This is the default preset.
    ``testnet``; A **single node** that connects to the current public testnet. Nemesis block is copied over. Requires an ``assembly``, as shown below (`configuration file <https://github.com/nemtech/symbol-bootstrap/blob/main/presets/testnet/network.yml>`__).

Presets can be further customized by specifying an **assembly** (or flavor) which provides additional parameters:

.. csv-table::
    :header: "Preset", "Available assemblies", "Description"
    :delim: ;
    :widths: 20, 20, 60

    ``bootstrap``; ``light``; It's a **lighter version** of ``bootstrap`` with 1 mongo database, 1 dual peer and 1 rest gateway. Great for faster light e2e automatic testing. Nemesis block is generated (`configuration file <https://github.com/nemtech/symbol-bootstrap/blob/main/presets/bootstrap/assembly-light.yml>`__).    
    ``testnet``; ``peer``; The node is a harvester (`configuration file <https://github.com/nemtech/symbol-bootstrap/blob/main/presets/testnet/assembly-peer.yml>`__).
    ``testnet``; ``api``; The node runs its own mongo database and rest gateway (`configuration file <https://github.com/nemtech/symbol-bootstrap/blob/main/presets/testnet/assembly-api.yml>`__).
    ``testnet``; ``dual``; The node is a harvester and runs its own mongo database and rest gateway (`configuration file <https://github.com/nemtech/symbol-bootstrap/blob/main/presets/testnet/assembly-dual.yml>`__).

Finally, if additional configuration is required, a **custom YAML file** can be provided. Any value in this file overrides the default values set by the preset or the assembly so it can be combined on top of them. Take a look at the :doc:`Configuring network properties <configuring-network-properties>` guide to know which parameters are available.

===============================
Creating the configuration file
===============================

Before building the network the full configuration file has to be created by using the `symbol-bootstrap config <https://github.com/nemtech/symbol-bootstrap/blob/main/docs/config.md>`_ command and providing the desired preset and assembly:

.. code-block:: bash

    symbol-bootstrap config -p <preset> -a <assembly> -c <custom_parameters_file.yml>

Some examples:

.. code-block:: bash

    symbol-bootstrap config -p bootstrap
    symbol-bootstrap config -p testnet -a peer
    symbol-bootstrap config -p testnet -a dual
    symbol-bootstrap config -p testnet -a dual -c custom_parameters.yml

This will create a folder called ``target`` by default (It can be changed with the ``-t`` option). Inside there's a folder called ``config`` containing, among other things, the generated complete configuration file (``target/config/preset.yml``) ready to be used to build the network.

.. note:: If you get the error ``Permission denied while trying to connect to the Docker daemon socket`` it means that your user does not belong to the ``docker`` group. Add it with:

  .. code-block:: bash
  
    sudo addgroup $USER docker


******************************
Building the network and nodes
******************************

This command prepares the necessary Docker files based on the provided configuration:

.. code-block:: bash

    symbol-bootstrap compose

It only needs to be run once.

*******************
Running the network
*******************

Finally, execute this command to start the necessary Docker instances and boot your network:

.. code-block:: bash

    symbol-bootstrap run

Stop the process by pressing ``Ctrl+C``.

.. note:: To run the docker containers in the background of your terminal, you can run the service in detached mode using the option ``--detach`` or ``-d``.

.. _symbol-bootstrap-all-in-one:

********************************
The all-in-one ``start`` command
********************************

The above three commands (``config``, ``compose`` and ``run``) can be merged into one:

.. code-block:: bash

    symbol-bootstrap start -p <preset> -a <assembly>

That's right, a test network or node can be instantiated and booted with a single command!

**********
Next steps
**********

Proceed to the following guides to put what you have learned into practice!

- :doc:`Creating private test networks <creating-a-private-test-net>`: How to set up your own private network and access its nodes.
- :doc:`Running a test net node <running-a-test-net-node>`: How to set up your own node and join |codename|'s test network.

Read the `complete list <https://github.com/nemtech/symbol-bootstrap/blob/main/README.md#commands>`_ of ``symbol-bootstrap`` commands.

.. _nodejs: https://nodejs.org/en/download/

.. _docker: https://docs.docker.com/install/

.. _docker-compose: https://docs.docker.com/compose/install/

.. |symbol-bootstrap| raw:: html

   <a href="https://github.com/nemtech/symbol-bootstrap" target="_blank">Symbol Bootstrap</a>

.. |catapult-service-bootstrap| raw:: html

    <a href="https://github.com/nemtech/catapult-service-bootstrap" target="_blank">Catapult Service Bootstrap</a>

.. |symbol-testnet-bootstrap| raw:: html

    <a href="https://github.com/nemtech/symbol-testnet-bootstrap" target="_blank">Symbol Testnet Bootstrap</a>


