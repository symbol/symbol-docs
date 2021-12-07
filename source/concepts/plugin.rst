######
Plugin
######

|codename| comes with improved extensibility through its **plugin-based architecture**.

A **plugin** is a self-contained group of functions that can be added to the |codename|'s protocol to extend its capabilities.
The plugin approach allows developers to introduce different ways to alter the chain's state via transactions without modifying the core engine or disrupting other features.

Every base :doc:`transaction type <transaction>` available in |codename| is defined as a separate plugin.
This separation makes it possible to only load a minimum subset of features to fit the network requirements.

************
Architecture
************

The simplest form of a |codename| plugin is a file written in C++ that registers a ``PluginManager`` and exposes a single entry point.
The file has to match the following format so that :doc:`catapult-client <../server>` can dynamically link the plugin.

.. code-block:: c++

    #pragma once
    #include "catapult/plugins.h"

    namespace catapult { namespace plugins { class PluginManager; } }

    namespace catapult { namespace plugins {

        /// Registers transfer support with \a manager.
        PLUGIN_API
        void RegisterTransferSubsystem(PluginManager& manager);
    }}

All the plugin related files are stored in the same folder under the ``plugins`` directory to keep the code organized.
The folder also includes the file ``CMakeLists.txt``, which instructs the compiler on how to build the plugin.

.. code-block:: cmake

    cmake_minimum_required(VERSION 3.14)

    set(PLUGIN_BASE_NAME catapult.plugins.mosaic)

    catapult_tx_plugin_src(${PLUGIN_BASE_NAME})

The plugin may define the following submodules internally to keep the code organized:

.. csv-table::
    :header: "Submodule", "Description"
    :delim: ;
    :widths: 20 80

    ``cache``; Cache types and rules for serializing and deserializing model types to and from binary.
    ``config``;  Configurable parameters defined as a set of key-value pairs. The value of each parameter is defined in the network configuration file ``config-network.properties``.
    ``model``; Transaction types and the mapping of those types to parsing rules. Specifically, the plugin defines rules for translating a transaction into component notifications that are used in further processing.
    ``observers``; Observers process the notifications produced by block and transaction processing. The registered observers can subscribe to general or plugin-defined notifications and update blockchain state based on their values. Observers don't require any validation logic because they are only called after all applicable validators succeed.
    ``plugins``;  Instructions for the core engine to load the plugin. This submodule contains the ``PluginManager`` file.
    ``validators``; Stateless and stateful validators process the notifications produced by block and transaction processing. The registered validators can subscribe to general or plugin-defined notifications and reject disallowed values or state changes.

********
Security
********

The code defined in a plugin runs forever unless the network is stopped or all network nodes decide to use a new configuration that disables the plugin.
If a subset of nodes does not adopt the configuration changes, the chain will split in two.

Before writing custom logic, developers should try to solve the use case by using the set of :doc:`transactions provided  <transaction>` in |codename| by default.
Note that |codename| base plugins have been audited. The platform is running an extensive test-net period before the public launch, and its code has been open-source since April 2018.

If you decide to create a new plugin, it is recommended to test the code extensively, bring external auditors, and run a testnet period before launching the network in production to minimize vulnerabilities in the custom code.
