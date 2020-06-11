########
Overview
########

Connect and combine Symbol's built-in features to architect your blockchain solution.
Use our ready-made plugin configurations for your most common business needs, or configure the plugin primitives plugin to customize the capabilities of your network without sacrificing performance.

*****************
Transfer of value
*****************

* **Transfer Transaction**: The most basic transaction used to send mosaics and messages between two accounts. Read :doc:`more <transfer-transaction>`.
* **Aggregate Transaction**: A type of transaction that merges multiple transactions into one by generating a one-time disposable smart contract. Read :doc:`more <aggregate-transaction>`.
* **Cross-Chain Swap**: A built-in feature of Symbol which enables the trading of tokens across different blockchains without using an intermediary party (e.g. an exchange service). Read :doc:`more <cross-chain-swaps>`.

*******************
Accounts management
*******************

* **Account**: An account is a container for assets, which can only be modified with its private key. Read :doc:`more <account>`.
* **Multisig Account**: Accounts that require additional signatures (from cosignatories) to initiate actions/transfers. Read :doc:`more <multisig-account>`.
* **Restrictions**:  A configurable set of smart rules to block announcing or receiving transactions for a specific account. Read :doc:`more <account-restriction>`.

***************
Assets issuance
***************

* **Mosaics**: Digital tokens on the Symbol blockchain used to represent fixed assets - set of multiple identical things that do not change. Read :doc:`more <mosaic>`.
* **Restrictions**:  A feature that allows mosaic creators to control which accounts can transact with the asset. It only affects mosaics with the restrictable property enabled explicitly at the moment of creation. Read :doc:`more <mosaic-restriction>`.
* **Namespaces**: Unique domain spaces on the Symbol blockchain, which can be linked to Symbol accounts or mosaics. Functions similarly to internet domains. Read :doc:`more <namespace>`.
* **Metadata**:  Additional information that can be attached to accounts or mosaics. Read :doc:`more <metadata>`.

******************
Network management
******************

* **Harvesting**: The process of creating new blocks on the Symbol blockchain. Read :doc:`more <harvesting>`.
* **Delegated Harvesting**:  A method of harvesting that allows users to receive rewards without having to run a node locally by delegating their importance scores to a brand new proxy account. Read :ref:`more <delegated-harvesting>`.
* **Inflation**: Assets created on the Symbol blockchain can set an inflation configuration to increase the supply per block. Read :doc:`more <inflation>`.
* **Extending Symbol**: The plugin approach allows developers to introduce different ways to alter the chain's state via transactions without modifying the core engine or disrupting other features. Read :doc:`more <plugin>`.
