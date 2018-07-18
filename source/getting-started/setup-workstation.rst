###########################
Setting up your workstation
###########################

This guide will walk you through a step-by-step installation of the required tools to start developing on NEM Catapult.

**********************************
Running Catapult Service Bootstrap
**********************************

.. figure:: ../resources/images/four-layer-architecture.png
    :width: 650px
    :align: center

**Catapult Server nodes** (layer 1) build the peer-to-peer blockchain network. **Catapult Rest nodes** (layer 2) provide the API gateway that the applications may use to access the blockchain and its features.

You are going to run a private chain for learning purposes using Catapult Service Bootstrap in less than 5 minutes. This service runs Catapult server instances and Catapult REST nodes locally.

Make sure you have `docker`_ and `docker-compose`_ installed before running the following commands:

.. code-block:: bash

    $> git clone https://github.com/tech-bureau/catapult-service-bootstrap
    $> cd catapult-service-bootstrap
    $> docker-compose up

After the image has been downloaded and the service is running, check if you can get the first block information:

.. code-block:: bash

    $> curl localhost:3000/block/1

***********************
Creating a test account
***********************

An account is a key pair (private and public key) associated to a mutable state stored in the NEM blockchain. Simply put, you have a deposit box on the blockchain, which only you can modify with your key pair. As the name suggests, the private key has to be kept secret at all times. Anyone with access to the private key, ultimately has control over the account.

The **public key** is cryptographically derived from the private key. It would take millions of years to do the reverse process and therefore, the public key is safe to be shared.

Finally, the account address is generated with the public key, following the NEM blockchain protocol. It is better to share this address than just the public key, as it contains more information, such as a validity check or which network it uses (public, testnet or private).

:doc:`NEM2-CLI <../cli/overview>` conveniently allows you to perform the most commonly used commands from your terminal i.e. using it to interact with the blockchain, setting up an account, sending funds, etc.

Install NEM2-CLI using ``npm``.

.. code-block:: bash

    $> npm i -g nem2-cli

Create an account with the command line tool.

.. code-block:: bash

    $> nem2-cli account generate --network MIJIN_TEST --save --url http://localhost:3000

The ``network flag`` is set to MIJIN_TEST. Test network is an alternative NEM blockchain used for development and testing purposes.

Use ``save flag`` to store the account on your computer. NEM2-CLI uses stored account to sign the transactions that you start.

You should be able to see the following lines in your terminal, containing the account credentials:

    New Account:    SCVG35-ZSPMYP-L2POZQ-JGSVEG-RYOJ3V-BNIU3U-N2E6

    Public Key:     33E0...6ED

    Private Key:    0168...595

******************************
What is XEM and how to get it?
******************************

The underlying cryptocurrency of the NEM network is called **XEM**. Every action on the NEM blockchain costs XEM, in order to provide an incentive for those who validate and secure the network.

Let’s use an account which already has XEM. We will need it to register the namespace and mosaic.

Open a terminal, and go to the directory where you have download Catapult Bootstrap Service.

.. code-block:: bash

    $> cd  build/generated-addresses/
    $> cat addresses.yaml

Under the section ``nemesis_addresses``, you will find the key pairs which contain XEM.

Load the first account as a profile in NEM2-CLI. This account identifies the company.

.. code-block:: bash

    $> nem2-cli profile create

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): MIJIN_TEST
    Introduce your private key: 41************************************************************FF
    Introduce NEM 2 Node URL. (Example: http://localhost:3000): http://localhost:3000
    Insert profile name (blank means default and it could overwrite the previous profile):

.. _setup-development-environment:

**************************************
Setting up the development environment
**************************************

By then, you should have loaded an account with some XEM. Then, it is time to choose a programming language. Pick the one you feel most comfortable with, or just follow project requirements.

After that, create a folder for your new project and run the instructions for the selected language.

TypeScript/JavaScript
=====================

Create a ``package.json`` file and check the npm repository for the latest updates. The minimum required Node.js version is 8.9.X.

.. code-block:: bash

    $> npm install nem2-sdk rxjs --save

:doc:`nem2-sdk <../sdk/overview>` is build with TypeScript language.

It is recommended to use **TypeScript instead of JavaScript** when building applications for NEM blockchain.

.. code-block:: bash

    $> npm install -g typescript

Make sure you have at least version 2.5.X installed.

Use `ts-node`_ to execute TypeScript files with node.

.. code-block:: bash

    $> npm install -g ts-node

If you want to use javascript directly, you can execute node to run js files.

.. _mijin: http://mijin.io/en/catapult

.. _ts-node: https://www.npmjs.com/package/ts-node

Java
====

Open a new Java `gradle`_ project. The minimum `JDK`_ version is JDK 8.

Use your favourite IDE or create a project from the command line.

.. code-block:: bash

    gradle init --type java-application

Edit ``build.gradle`` to use Maven central repository.

.. code-block:: java

    repositories {
        mavenCentral()
    }

Add nem2-sdk as a dependency.

.. code-block:: java

    dependencies {
        compile "io.nem:sdk:0.8.10"
    }

Execute ``gradle build`` and ``gradle run`` to run your program.

Continue: :doc:`Writing your first application <first-application>`.

.. _gradle: https://gradle.org/install/

.. _JDK: http://www.oracle.com/technetwork/es/java/javase/downloads/index.html

.. _docker: http://www.oracle.com/technetwork/es/java/javase/downloads/index.html

.. _docker-compose: https://docs.docker.com/compose/install/