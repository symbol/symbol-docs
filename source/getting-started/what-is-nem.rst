############
What is NEM?
############

.. note:: This documentation introduces NEM's next core engine, code-named **Catapult** or **NEM2**.

**********************
The Smart Asset System
**********************

|nem| is a developer-friendly blockchain platform for businesses. It offers flexible and customizable solutions through simple, yet powerful, built-in features.

Developers are able to integrate blockchain technology into their projects or create powerful dApps using NEM’s REST API. This allows creating a variety of architectural solutions with lightweight code in any language.

.. figure:: ../resources/images/examples/smart-assets-system.png
    :align: center
    :width: 600px

    The Smart Asset System

*****************
What is Catapult?
*****************

|Catapult| is NEM's next core engine. It is written in C++ and follows a :doc:`4-layered architecture <../concepts/node>`, aiming to make NEM more scalable. It builds upon the achievements of its previous iteration, adding the newest innovations in blockchain technology.

Catapult introduce new exclusive features:

*   :doc:`Aggregate Transactions <../concepts/aggregate-transaction>`
*   :doc:`Cross-Chain Swaps <../concepts/cross-chain-swaps>`
*   :doc:`Multi-level Multisig Accounts <../concepts/multisig-account>`
*   :doc:`Account Restriction <../concepts/account-restriction>`
*   :doc:`Mosaic Restriction <../concepts/mosaic-restriction>`

Catapult will be a momentous step for NEM to be the widely utilized enterprise product it was envisioned to be. After three years of development, the long-awaited update is expected to officially launch `in 2020 <https://forum.nem.io/t/migration-committee-community-update-4/23847/3>`_.

************************
Architecting on Catapult
************************

Catapult :doc:`nodes <../concepts/node>` provide a powerful, stable and secure platform where smart asset transactions are conducted, searched, and immutably logged to the blockchain ledger.

All the features are available through the API interface on each node in the network itself. This means that the blockchain can be used to create a variety of architecture solutions with lightweight :doc:`code in any language <../sdk>`.

.. figure:: ../resources/images/examples/architecting-nem-solutions.png
    :align: center
    :width: 600px

**Mobile app direct access**

A lightweight app directly interfaces to blockchain features.

**Client/server model**

A gateway server manages blockchain usage for a client app or web service.

**Legacy system integration**

A gateway server links existing business contract logic, systems, or databases to the blockchain ledger.

******************
Public and Private
******************

.. figure:: ../resources/images/examples/public-private-blockchain.png
    :align: center
    :width: 600px

Catapult provides both a decentralized, open and self-sustaining **public blockchain** that can be used by anyone – as well as a **permissioned/private blockchain solution** that can be provisioned specifically for your use on your servers when speed and privacy are the priority.

Continue: :doc:`Setting up your workstation <setup-workstation>`.

.. |nem| raw:: html

    <a href="https://nem.io/" target="_blank">NEM</a>

.. |catapult| raw:: html

    <a href="https://mijin.io/en/product/#mijin2" target="_blank">Catapult</a>

