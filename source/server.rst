######
Server
######

|codename|-based networks rely on nodes to provide a trustless, high-performance, and secure blockchain platform.

These nodes are deployed using |catapult-server| software, a C++ rewrite of the previous Java-written NEM distributed ledger that has been running since 2015.

Learn more about the protocol by reading the |whitepaper| and this :doc:`documentation <concepts/node>`.

******************
Building the image
******************

To compile catapult-server source code, follow the building |instructions|.

***********************
Running catapult-server
***********************

catapult-server executable can be used either to run different types of nodes or to launch new networks.
This section contains the instructions on how to run the catapult-server for various purposes.

Test network node
=================

Developers can deploy test net nodes to experiment with the offered transaction set in a live network without the loss of valuable assets.

To run a test net node, follow :doc:`this guide <guides/network/running-a-test-net-node>`.

Main network node
=================

At the time of writing, the main public network has not been launched.
Follow the latest updates about the public launch on the |forum|.

Private test network
====================

With |codename|, businesses can launch and extend private networks by developing :doc:`custom plugins <concepts/plugin>` and extensions at the protocol level.
The package |catapult-service-bootstrap| contains the necessary setup scripts to deploy a network for testing and development purposes with just one command.

To run a private test net, follow :doc:`this guide <guides/network/creating-a-private-test-net>`.

Private network
===============

Instructions on how to launch a secure and production-ready private chain will be released here.

.. |catapult-server| raw:: html

   <a href="https://github.com/nemtech/catapult-server" target="_blank">catapult-server</a>

.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/nemtech/catapult-service-bootstrap" target="_blank">Service Bootstrap</a>

.. |instructions| raw:: html

   <a href="https://github.com/nemtech/catapult-server/blob/main/docs/README.md" target="_blank">instructions</a>

.. |whitepaper| raw:: html

   <a href="https://docs.symbolplatform.com/catapult-whitepaper/main.pdf" target="_blank">Whitepaper</a>

.. |forum| raw:: html

   <a href="https://forum.nem.io/c/announcement" target="_blank">Forum</a>

