#########################
Running Catapult in local
#########################

**Original repository:** |repository|

A set of bootstrap and setup scripts to help developers get going quickly with their own working Catapult Service.  The goal is to make it as easy and quick as possible so as a developer you only have to run this setup and within a minute or so you will have a running server ready to start receiving transactions so you can focus on your development work and not setup or configuring servers.

.. warning:: This bootstrap setup is for learning and development purposes, it should not power any production Catapult instances.

We use docker images as our default packaging and distribution mechanism.  These bootstrap scripts will prepare some files on disk and then leverage docker-compose to startup and run the needed set of containers so the server can function correctly.

***********************
Evironment Dependencies
***********************

The only dependency that is required is git so you can clone this repository, and docker/docker-compose.  If you do not have the docker tools installed alredy you can get the installation details from the docker community website:

* |docker-install|
* |docker-compose|

***********************************
Installation & Startup Instructions
***********************************

.. code-block:: bash

    git clone git@github.com:tech-bureau/catapult-service-bootstrap.git
    cd catapult-service-bootstrap
    docker-compose up

If you followed the docker installation instructions correctly, or already had docker/docker-compose installed, you should see docker doing its job downloading the container images for the first time, then going through running the bootstrap setup.  Should things succeed it should start the Catapult Server right up and you should see the live logs start scrolling by in the foreground like so:

.. code-block:: bash

    api-node-0_1              | 2018-05-18 18:52:11.888098 0x00007f24efa20700: <debug> (src::NetworkHeightService.cpp@45) network chain height increased from 120 to 121
    peer-node-1_1             | 2018-05-18 18:52:12.068932 0x00007fe59221c700: <debug> (src::NetworkHeightService.cpp@45) network chain height increased from 120 to 121
    peer-node-0_1             | 2018-05-18 18:52:12.477647 0x00007f35d4de4700: <debug> (src::NetworkHeightService.cpp@45) network chain height increased from 120 to 121


You can verify things are running by doing a quick curl request to get block information: `curl localhost:3000/block/1`

To stop the server simply press ``Ctrl+c`` to kill/stop the foreground docker process.

**********
Keys Setup
**********

The bootstrap scripts take care of initial key generation and configuration.  After running for the first time you will have a set of public/private key pairs saved to a couple of files.  You can get the details of the key(s) that are being used in your test setup by going to the follwoing directory:

.. code-block:: bash

    ubuntu@catapult:~/catapult$ cd  build/generated-addresses/
    ubuntu@catapult:~/catapult/build/generated-addresses$ ls
    addresses.yaml  raw-addresses.txt  README.md

The file ``raw-addresses.txt`` is a set of addresses that have been generated fresh as part of the docker-compose run using the Catapult address utility tool.

The file ``addresses.yaml`` are keys from the ``raw-addresses.txt`` file but formatted in yaml form and assigned to different roles, such as for the Catapult nodes, the harvestor key(s), etc. This yaml file is used as an input for the Catapult config files generated during the initial run.

.. note:: the keys under the yaml key 'nemesis_addresses', which are the keys that are assigned assigned test xem funds as part of the nemesis block generation.

********************************
Starting as a Background Process
********************************

With the initial setup steps above you installed and started your Catapult Server in the foreground, for ongoing development where you just want the server to be running its nice to have it running in the background.  You can do so by navigating back to your `catapult-server-bootstrap` directory and running `docker-compose up -d`

For more detailed usage of the ``docker-compose up`` command you can check out dockers community docs:

* |docker-compose-up|

******************************
Resetting your Catapult Server
******************************

You can start/stop your Catapult Service as you need.  Each time you start it back up it will continue running from where it left off.

If your service is in a bad state, or you just want to restart from fresh again you can do so easily with this bootstrap tool resetting things up for you.  To reset from scratch:

1. Stop the running Catapult Service if its running (use Ctrl+C if running in the foreground, or navigate to the repo directory and run `docker-compose down` if running in the background)

2. Run one of the provided clean up scripts:

- Executing ``./clean-data`` will keep the configuration and generated keys in place, but delete all of the blockchain and cache data. When restarted, Catapult will start fresh

- Executing ``./clean-all`` will both clean the data and additionally will remove the generated keys and the configuration generated from these keys. After running this script, new keys found in directory build/generated-addresses/ will have to be used in any app or script you are developing from.

************
Known Issues
************

The Catapult cache and query engine is powered by mongodb. There are some known issues with the latest storage engine in some docker environments.  We have provided a backup docker compose file to use if you run into mongo `wiredtiger` errors on start.  You can use the backup file by running:

.. code-block:: bash

    docker-compose up -f docker-compose-mmapv1.yml


.. |repository| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap/" target="_blank">tech-bureau/catapult-service-bootstrap</a>

.. |docker-install| raw:: html

   <a href="https://docs.docker.com/compose/reference/up/" target="_blank">Docker Install Overview Page</a>


.. |docker-compose| raw:: html

   <a href="https://docs.docker.com/compose/install/#install-compose" target="_blank">Docker Compose Overview Page</a>

.. |docker-compose-up| raw:: html

   <a href="https://docs.docker.com/compose/install/#install-compose" target="_blank">Docker Compose Up Command Overview</a>
