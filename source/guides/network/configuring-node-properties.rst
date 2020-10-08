:orphan:

.. post:: 30 Oct, 2019
    :category: Network, Harvesting
    :excerpt: 1
    :nocomments:

###########################
Configuring node properties
###########################

|symbol-bootstrap| (read the :doc:`Using Symbol Bootstrap<using-symbol-bootstrap>` guide if you don't know what it is) accepts custom presets to customize the nodes to your needs.

The tables below list all the node-related properties that can be set. Put them in a YAML file and pass it to ``symbol-bootstrap config`` using the ``-c`` parameter.

For example:

.. code-block:: yaml

    friendlyName: my-uber-node
    dataDirectory: ./data

For network-related properties, read the :doc:`Configuring network properties <configuring-network-properties>` guide.

.. _node-properties:

******************
User configuration
******************

.. raw:: html
    :file: ../../_static/config-user.properties.html

******************
Node configuration
******************

.. raw:: html
    :file: ../../_static/config-node.properties.html

************************
Harvesting Configuration
************************

.. raw:: html
    :file: ../../_static/config-harvesting.properties.html

.. |symbol-bootstrap| raw:: html

   <a href="https://github.com/nemtech/symbol-bootstrap" target="_blank">Symbol Bootstrap</a>
