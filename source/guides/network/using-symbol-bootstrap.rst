.. post:: 25 Sep, 2020
    :category: Network
    :excerpt: 1
    :nocomments:

######################
Using Symbol Bootstrap
######################

.. sidebar:: Quick Installation

    On Linux systems using ``apt``:

    .. code-block:: bash

      sudo apt update
      sudo apt install nodejs npm \
          docker docker-compose
      node --version

    If the obtained node version is high enough (see :ref:`symbol-bootstrap-requirements`), then you can install Symbol Bootstrap:

    .. code-block:: bash

      npm install -g symbol-bootstrap

This guide explains the concepts behind |symbol-bootstrap|, a package which contains the necessary setup scripts to help developers quickly configure and run their own network or node in any of the **supported operating systems** (Windows, Linux and Mac).

After reading this you will be able to better understand the :doc:`creating-a-private-test-net` and :doc:`running-a-symbol-node` guides.

**This package replaces the previous tools** |catapult-service-bootstrap| and |symbol-testnet-bootstrap|.

.. _symbol-bootstrap-requirements:

************
Requirements
************

===========
Environment
===========

The setup scripts are automated using **docker**. To run a test net or node, you will need to have installed the following tools:

* `node.js`_ version 12 or higher (**It is recommended that you install node.js using** `nvm <https://github.com/nvm-sh/nvm>`__)
* `docker`_
* `docker-compose`_

=====
Ports
=====

Make sure that the client's host is accessible from the internet and that **the following ports are open and available**:

* Port ``7900`` is used by catapult-client to communicate between nodes.
* Port ``3000`` is used by the REST Gateway to expose the endpoints to interact with the node.
* Port ``7881`` is used by the :ref:`monitoring agent <reward-programs-controller>`. Only required when enrolled to some of the :doc:`../../concepts/reward-programs`, and can be customized.

************
Installation
************

|symbol-bootstrap| is provided as an installable tool, there is no need to clone a repository and build it. Just run this from a terminal or command prompt:

.. code-block:: bash

    npm install -g symbol-bootstrap

Notes:

- You can run the above command again to install a newer version of ``symbol-bootstrap`` every time one becomes available.

  Remember to stop ``symbol-bootstrap`` before upgrading and then start it again afterwards, as shown below.

- If you get permission errors read nodejs's guide to `Resolving EACCES permissions errors when installing packages globally <https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally>`__.

*************
Configuration
*************

.. _symbol-bootstrap-presets:

=======
Presets
=======

Node configuration is done through a **YAML configuration file** which specifies every possible network parameter. Since the complete file can be several hundred lines long, a number of **presets** are available to simplify its handling:

.. csv-table::
    :header: "Preset", "Description"
    :delim: ;
    :widths: 20, 80

    ``mainnet``; A **single node** that connects to the current public **main** network. Nemesis block is copied over. Requires an ``assembly``, as shown below (`configuration file <https://github.com/symbol/symbol-bootstrap/blob/main/presets/mainnet/network.yml>`__).
    ``bootstrap``; **Autonomous network** with 1 mongo database, 2 peers, 1 api and 1 rest gateway. Nemesis block is generated (`configuration file <https://github.com/symbol/symbol-bootstrap/blob/main/presets/bootstrap/network.yml>`__). This is the default preset.
    ``testnet``; A **single node** that connects to the current public **test** network. Nemesis block is copied over. Requires an ``assembly``, as shown below (`configuration file <https://github.com/symbol/symbol-bootstrap/blob/main/presets/testnet/network.yml>`__).

Presets can be further customized by specifying an **assembly** (or flavor) which provides additional parameters:

.. csv-table::
    :header: "Preset", "Available assemblies", "Description"
    :delim: ;
    :widths: 20, 20, 60

    ``mainnet``; ``peer``; The node is a harvester (`configuration file <https://github.com/symbol/symbol-bootstrap/blob/main/presets/mainnet/assembly-peer.yml>`__).
    ``mainnet``; ``api``; The node runs its own mongo database and rest gateway (`configuration file <https://github.com/symbol/symbol-bootstrap/blob/main/presets/mainnet/assembly-api.yml>`__).
    ``mainnet``; ``dual``; The node is a harvester and runs its own mongo database and rest gateway (`configuration file <https://github.com/symbol/symbol-bootstrap/blob/main/presets/mainnet/assembly-dual.yml>`__).
    ``bootstrap``; ``light``; It's a **lighter version** of ``bootstrap`` with 1 mongo database, 1 dual peer and 1 rest gateway. Great for faster light e2e automatic testing. Nemesis block is generated (`configuration file <https://github.com/symbol/symbol-bootstrap/blob/main/presets/bootstrap/assembly-light.yml>`__).
    ``bootstrap``; ``full``; It's the default ``bootstrap`` preset plus 1 wallet, 1 explorer and 1 faucet. Great for demonstration purposes. Nemesis block is generated (`configuration file <https://github.com/symbol/symbol-bootstrap/blob/main/presets/bootstrap/assembly-full.yml>`__).
    ``testnet``; ``peer``; The node is a harvester (`configuration file <https://github.com/symbol/symbol-bootstrap/blob/main/presets/testnet/assembly-peer.yml>`__).
    ``testnet``; ``api``; The node runs its own mongo database and rest gateway (`configuration file <https://github.com/symbol/symbol-bootstrap/blob/main/presets/testnet/assembly-api.yml>`__).
    ``testnet``; ``dual``; The node is a harvester and runs its own mongo database and rest gateway (`configuration file <https://github.com/symbol/symbol-bootstrap/blob/main/presets/testnet/assembly-dual.yml>`__).

Finally, if additional configuration is required, a **custom YAML file** can be provided. Any value in this file overrides the default values set by the preset or the assembly so it can be combined on top of them. Take a look at the :doc:`Configuring network properties <configuring-network-properties>` guide to know which parameters are available.

===============================
Creating the configuration file
===============================

Before building the network the full configuration file has to be created by using the `symbol-bootstrap config <https://github.com/symbol/symbol-bootstrap/blob/main/docs/config.md>`_ command and providing the desired preset and assembly:

.. code-block:: bash

    symbol-bootstrap config -p <preset> -a <assembly> -c <custom_parameters_file.yml>

Some examples:

.. code-block:: bash

    symbol-bootstrap config -p bootstrap
    symbol-bootstrap config -p testnet -a peer
    symbol-bootstrap config -p testnet -a dual
    symbol-bootstrap config -p testnet -a dual -c custom_parameters.yml

This will create a folder, called ``target`` by default (It can be changed with the ``-t`` option), containing among other things the generated complete configuration file (``target/preset.yml``) ready to be used to build the network.

.. note:: On Linux, if you get the error ``Permission denied while trying to connect to the Docker daemon socket`` it means that your user does not belong to the ``docker`` group. Add it with:

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

.. note::

    To run the docker containers in the background of your terminal, you can run the service in detached mode using the option ``--detach`` or ``-d``.

    You then have to stop them with ``symbol-bootstrap stop``.

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

- :doc:`creating-a-private-test-net`: How to set up your own private network and access its nodes.
- :doc:`running-a-symbol-node`: How to set up your own node and join |codename|'s network.

Read the `complete list <https://github.com/symbol/symbol-bootstrap/blob/main/README.md#user-content-commands>`_ of ``symbol-bootstrap`` commands.

.. _node.js: https://nodejs.org/en/download/

.. _docker: https://docs.docker.com/install/

.. _docker-compose: https://docs.docker.com/compose/install/

.. |catapult-service-bootstrap| raw:: html

    <a href="https://github.com/symbol/catapult-service-bootstrap" target="_blank">Catapult Service Bootstrap</a>

.. |symbol-testnet-bootstrap| raw:: html

    <a href="https://github.com/symbol/symbol-testnet-bootstrap" target="_blank">Symbol Testnet Bootstrap</a>
