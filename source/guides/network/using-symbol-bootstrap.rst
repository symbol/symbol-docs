.. post:: 25 Sep, 2020
    :category: Network
    :excerpt: 1
    :nocomments:

    How to use this handy node deployment tool.

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

This guide explains the concepts behind |symbol-bootstrap|, a program that allows quickly configuring and running |codename| nodes on multiple operating systems (Windows, Linux and Mac).

It can also deploy several nodes at once to quickly create a test network.

After reading this you will be able to better understand the :doc:`running-a-symbol-node` and :doc:`creating-a-private-test-net` guides.

**This program replaces the previous tools** ``catapult-service-bootstrap`` **and** ``symbol-testnet-bootstrap``.

.. _symbol-bootstrap-requirements:

************
Requirements
************

===========
Environment
===========

The setup scripts are automated using **Docker**. To run a node or test network, you will need to have installed the following tools:

* `node.js <https://nodejs.org/en/download>`__ version 12 or higher (**It is recommended that you install node.js using** `nvm <https://github.com/nvm-sh/nvm>`__)
* `docker <https://docs.docker.com/install/>`__
* `docker-compose <https://docs.docker.com/compose/install/>`__

=====
Ports
=====

Make sure that the client's host is accessible from the internet and that **the following ports are open and available**:

* Port ``7900`` is used by catapult-client to communicate between nodes.
* Port ``3000`` is used by the REST Gateway to expose the endpoints to interact with the node.
* Port ``3001`` is used by the REST Gateway in HTTPS mode.

************
Installation
************

|symbol-bootstrap| is provided as an installable tool, there is no need to clone a repository and build it. Just run this from a terminal or command prompt:

.. code-block:: bash

    npm install -g symbol-bootstrap

.. topic:: Notes:

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

Node configuration is done through a **YAML configuration file** which specifies every possible network parameter. Since the complete file can be several hundred lines long, a number of **presets** are available to simplify its handling. Specify the preset with the ``‑‑preset`` or ``‑p`` parameters.

.. csv-table::
    :header: "Preset", "Description"
    :delim: ;
    :widths: 20, 80

    ``mainnet``; A **single node** that connects to the current public **main** network. Nemesis block is copied over. Requires an ``assembly``, as shown below (`configuration file <https://github.com/fboucquez/symbol-bootstrap/blob/main/presets/mainnet/network.yml>`__).
    ``bootstrap``; **Autonomous network** with 1 mongo database, 2 peers, 1 api and 1 rest gateway. Nemesis block is generated (`configuration file <https://github.com/fboucquez/symbol-bootstrap/blob/main/presets/bootstrap/network.yml>`__). This is the default preset.
    ``testnet``; A **single node** that connects to the current public **test** network. Nemesis block is copied over. Requires an ``assembly``, as shown below (`configuration file <https://github.com/fboucquez/symbol-bootstrap/blob/main/presets/testnet/network.yml>`__).

Presets can be further customized by indicating an **assembly** (or flavor) which provides additional parameters. Specify the assembly with the ``‑‑assembly`` or ``‑a`` parameters.

.. csv-table::
    :header: "Preset", "Available assemblies", "Description"
    :delim: ;
    :widths: 20, 20, 60

    ``mainnet``; ``peer``; The node is a :ref:`peer-node` (`configuration file <https://github.com/fboucquez/symbol-bootstrap/blob/main/presets/assemblies/assembly-peer.yml>`__).
    ``mainnet``; ``api``; The node is an :ref:`api-node` (`configuration file <https://github.com/fboucquez/symbol-bootstrap/blob/main/presets/assemblies/assembly-api.yml>`__).
    ``mainnet``; ``dual``; The node is both a :ref:`peer-node` and an :ref:`api-node` (`configuration file <https://github.com/fboucquez/symbol-bootstrap/blob/main/presets/assemblies/assembly-dual.yml>`__).
    ``testnet``; ``peer``; The node is a :ref:`peer-node` (`configuration file <https://github.com/fboucquez/symbol-bootstrap/blob/main/presets/assemblies/assembly-peer.yml>`__).
    ``testnet``; ``api``; The node runs is an :ref:`api-node` (`configuration file <https://github.com/fboucquez/symbol-bootstrap/blob/main/presets/assemblies/assembly-api.yml>`__).
    ``testnet``; ``dual``; The node is both a :ref:`peer-node` and an :ref:`api-node` (`configuration file <https://github.com/fboucquez/symbol-bootstrap/blob/main/presets/assemblies/assembly-dual.yml>`__).

==============
Custom presets
==============

Furthermore, if additional configuration is required, a **custom preset file** can be provided. Any value in this file overrides the default values set by the preset or the assembly so it can be combined on top of them. All properties in the :doc:`configuring-network-properties` or :doc:`configuring-node-properties` guides can be set through this file, for example.

Specify a custom preset file with the ``‑‑customPreset`` or ``‑c`` parameters.

.. note::

   If you ever change your custom preset file once your node is already running you will need to upgrade the node as explained in the :ref:`update-bootstrap-nodes` guide.

**********************
The ``config`` command
**********************

Before building the node or network a full configuration file has to be created by using the `symbol-bootstrap config <https://github.com/fboucquez/symbol-bootstrap/blob/main/docs/config.md>`_ command:

.. code-block:: bash

    symbol-bootstrap config -p <preset> -a <assembly> -c <custom_parameters_file.yml>

For example:

.. code-block:: bash

    symbol-bootstrap config -p bootstrap
    symbol-bootstrap config -p mainnet -a peer
    symbol-bootstrap config -p mainnet -a dual
    symbol-bootstrap config -p mainnet -a dual -c custom_parameters.yml

This will create a folder, called ``target`` by default (it can be changed with the ``‑‑target`` or ``‑t`` parameters), containing among other things the generated complete configuration file (``target/preset.yml``) ready to be used to build the node or network.

.. note:: On Linux, if you get the error ``Permission denied while trying to connect to the Docker daemon socket`` it means that your user does not belong to the ``docker`` group. Add it with:

  .. code-block:: bash

    sudo addgroup $USER docker

***********************
The ``compose`` command
***********************

This command prepares the necessary Docker files based on the provided configuration:

.. code-block:: bash

    symbol-bootstrap compose

Just like the config step, this only needs to be run once.

*******************
The ``run`` command
*******************

Finally, execute this command to start the necessary Docker instances and boot your node or network:

.. code-block:: bash

    symbol-bootstrap run

Stop the process by pressing ``Ctrl+C``.

.. note::

    To run the Docker containers in the background of your terminal, you can run the service in detached mode using the ``‑‑detached`` or ``‑d`` parameters.

    You then have to stop them with ``symbol-bootstrap stop``.

.. _symbol-bootstrap-all-in-one:

********************************
The all-in-one ``start`` command
********************************

The above three commands (``config``, ``compose`` and ``run``) can be merged into one:

.. code-block:: bash

    symbol-bootstrap start -p <preset> -a <assembly> -c <custom_parameters_file.yml>

That's right, a |codename| node (or test network with many nodes) can be instantiated and booted with a single command!

Steps that only need to be done once (``config`` and ``compose``) will not be repeated, so you can use this command every time.

**********************
Providing HTTPS access
**********************

:ref:`API nodes <api-node>` created using the ``api`` or ``dual`` assemblies accept HTTP commands through port 3000. HTTPS access can also be enabled, as described in the next two sections.

.. note:: The certificates used below will **only** be used for HTTPS communication with the REST API, **not** as :ref:`node certificates <manual-node-certificates>` for inter-node communication.

========================
Use your own certificate
========================

If you already have an SSL for your host you can pass it onto Symbol Bootstrap inside a custom preset file.

In order for the custom preset file to be self-contained, though, your certificate's **Key** and **Crt** files must be converted to a `Base64 <https://en.wikipedia.org/wiki/Base64>`__ string and copied into the preset file:

.. code-block:: bash

   cat restSsl.key | base64 -w 0
   cat restSsl.crt | base64 -w 0

Copy the output of these commands into the preset file, in a section like this:

.. code-block:: yaml

   nodes:
   - friendlyName: My Awesome Node # Use anything you want here
     host: awesomenode.mycompany.net # Use your node's host name
   gateways:
   - restProtocol: HTTPS
     openPort: 3001
     restSSLCertificateBase64: >-
       LS0tLS1CRUdJTiBDRVJUSUZ...Base64...==
     restSSLKeyBase64: >-
       LS0tLS1CRUdJTiBSU0EgUFJ...Base64...=

The provided certificate needs to be valid for the hostname ``awesomenode.mycompany.net``. The domain needs to resolve the IP address of your node.

When the certificates eventually expire you need to update the custom preset file and then upgrade the node as explained in the :ref:`update-bootstrap-nodes` guide.

This option only leaves HTTPS port 3001 open, not HTTP 3000. **Remember to open port 3001 in your firewall or security group**. Port 3000 can be closed as it is not used anymore.

===================================
Automatic Let's Encrypt certificate
===================================

Bootstrap can also take care of obtaining the necessary SSL certificates through the public and free `Let's Encrypt <https://letsencrypt.org/>`__ service.

To enable it, just opt-in by adding an ``httpsProxies`` section to your custom preset file:

.. code-block:: yaml

   nodes:
       - friendlyName: My Awesome Node # Use anything you want here
         host: awesomenode.mycompany.net # Use your node's host name
   httpsProxies:
       - excludeDockerService: false

You need to own the domain ``awesomenode.mycompany.net`` and it needs to resolve the IP address of your node. The Let’s Encrypt service will handle the certificate creation and renewals for you.

**Remember to open ports 3001 and 80 in your firewall or security group**. Port 3000 may or may not be closed. `Port 80 is needed by Let's Encrypt <https://letsencrypt.org/docs/challenge-types/#http-01-challenge>`__.

.. note::

   This option has been heavily inspired by `this great blog <https://nemlog.nem.social/blog/58808>`__. Symbol Bootstrap simply bundles this solution, streamlining the process.

**********
Next steps
**********

- Read the `complete list <https://github.com/fboucquez/symbol-bootstrap#user-content-command-topics>`_ of ``symbol-bootstrap`` commands.

- Go ahead and create a node following the :doc:`running-a-symbol-node` guide.

