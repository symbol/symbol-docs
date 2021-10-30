.. post:: 30 Oct, 2019
    :category: Network
    :excerpt: 1
    :nocomments:

##################
Network properties
##################

There is a large number of network-related settings that can be customized in |codename|.

The easiest way to change them is by using |symbol-bootstrap|'s custom presets (read :doc:`Using Symbol Bootstrap<using-symbol-bootstrap>`): Put the settings in a YAML file and pass it to ``symbol-bootstrap config`` using the ``-c`` parameter.

These settings can also be directly provided to |catapult-client| through ``.properties`` files. The header of each of the tables below indicates which file contains that table's properties.

.. note:: For **node**-related properties, read the :doc:`Configuring node properties <configuring-node-properties>` guide.

.. _config-network-properties:

*********************
Network configuration
*********************

.. raw:: html
    :file: ../../_static/config-network.properties.html

***********************
Inflation configuration
***********************

.. raw:: html
    :file: ../../_static/config-inflation.properties.html

.. |catapult-client| raw:: html

   <a href="https://github.com/symbol/catapult-client" target="_blank">catapult-client</a>
