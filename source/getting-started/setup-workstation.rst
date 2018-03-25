###########################
Setting up your workstation
###########################

This guide will walk you through the installation step-by-step, by showing you how to use the tools to start developing with NEM Catapult.

*********************
Create a test account
*********************

An account is a key pair (private and public key) associated to a mutable state stored on the NEM blockchain. Simply put, you have a deposit box on the blockchain, which only you can modify with your key pair. As the name suggests, the private key has to be kept secret at all times. Anyone with access to the private key, ultimately has control over the account.

The **public key** is cryptographically derived from the private key. It would take millions of years to do the reverse process and therefore, the public key is safe to be shared.

Finally, the account address is generated with the public key, following the NEM Blockchain protocol. It is better to share this address than just the public key, as it contains more information, such as a validity check and which network it uses (public, private or testnet).

:doc:`NEM2-CLI <../cli/overview>` conveniently allows you to perform the most commonly used commands from your terminal i.e. using it to interact with the blockchain, setting up an account and sending funds, etc.

Install NEM2-CLI using ``npm``.

.. code-block:: bash

    $> npm i -g nem2-cli

Create an account with the command line tool.

.. code-block:: bash

    $> nem2-cli account generate --network MIJIN_TEST --save --url http://localhost:3000/

The ``network flag`` is set to MIJIN_TEST. Test network is an alternative NEM blockchain used for development and testing purposes.

Use ``save flag`` to store the account in your computer. NEM2-CLI uses stored account to sign transactions you start.

You should be able to see the following lines in your terminal, containing the account credentials:

    New Account:    SCVG35-ZSPMYP-L2POZQ-JGSVEG-RYOJ3V-BNIU3U-N2E6

    Public Key:     33E0...6ED

    Private Key:    0168...595

******************************
What is XEM and how to get it?
******************************

The underlying cryptocurrency of the NEM network is called **XEM**. Every action on the NEM blockchain costs XEM, in order to provide an incentive for those who validate and secure the network.

Once you have created an account, ask for some XEM from our faucet, by simply sharing your address.

XEM will appear in your account’s balance after the transaction is confirmed by the network.

.. note:: There is a bot listening to requests. It might be occasionally offline. Please contact support if the problem persists.

.. _setup-development-environment:

**********************************
Set up the development environment
**********************************

By that time, you should have created an account and have received some XEM. Then it is time to choose a programming language. Pick the one you feel most comfortable with, or just follow project requirements.

Afterwards, create a folder for your new project and run the instructions for the selected language.

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

