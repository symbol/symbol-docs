.. post:: 30 Oct, 2019
    :category: Network, Harvesting
    :excerpt: 1
    :nocomments:

###############
Node properties
###############

There is a large number of node-related settings that can be customized in |codename|.

The easiest way to change them is by using |symbol-bootstrap|'s custom presets (read :doc:`Using Symbol Bootstrap<using-symbol-bootstrap>`): Put the settings in a YAML file and pass it to ``symbol-bootstrap config`` using the ``-c`` parameter. For example:

.. code-block:: yaml

    friendlyName: my-uber-node
    dataDirectory: ./data

These settings can also be directly provided to |catapult-client| through ``.properties`` files. The header of each of the tables below indicates which file contains that table's properties.

.. note:: For **network**-related properties, read the :doc:`Configuring network properties <configuring-network-properties>` guide.

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

.. _node-properties-harvesting-configuration:

************************
Harvesting Configuration
************************

.. raw:: html
    :file: ../../_static/config-harvesting.properties.html

.. |catapult-client| raw:: html

   <a href="https://github.com/symbol/catapult-client" target="_blank">catapult-client</a>
