:orphan:

########
Overview
########

.. figure:: https://gist.githubusercontent.com/jorisadri/7061090eb3cbf724c80e4f49e03e1b94/raw/69b1b9f80594feb9a415aac8de62c769295c397b/transferTransaction.png
    :align: center

Create blockchain applications without coding using **NEM2 Prototyping Tool**.

Drag & drop NEM nodes and link them with other services in new and interesting ways for prototyping or learning purposes.

********
Node-RED
********

|NEM2-Prototyping-Tool| is a collection of **Node-RED** nodes.

|Node-RED| is a visual programming tool to wire together hardware devices, APIs and online services.

It provides a browser-based editor to wire nodes. The combination of nodes is named flows, which you can execute in a single click.

The flows created in Node-RED are stored using JSON, being exportable to share with others.

************
Installation
************

Install Node-RED:

.. code-block:: bash

    $> sudo npm install --global --unsafe-perm node-red

Install NEM2 Prototyping Tool:

.. code-block:: bash

    $> sudo npm install --global node-red-contrib-nem2

Run Node-RED:

.. code-block:: bash

    $> node-red

.. |Node-RED| raw:: html

    <a href="https://nodered.org/" target="_blank">Node-RED</a>

.. |NEM2-Prototyping-Tool| raw:: html

    <a href="https://github.com/nemtech/nem2-prototyping-tool" target="_blank">NEM2 Prototyping Tool</a>