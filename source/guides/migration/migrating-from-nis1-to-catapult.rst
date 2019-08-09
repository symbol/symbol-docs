.. post:: 17 Jul, 2019
    :category: Migration
    :excerpt: 1
    :nocomments:

###############################
Migrating from NIS1 to Catapult
###############################

With Catapult, most of the previously available NIS1 features have evolved. This document will help you **upgrade your application** previous NIS1 features, to the newly available Catapult technology.

.. note:: This guide is a live document. The information could change as Catapult development advances.

************
Test network
************

The package |catapult-service-bootstrap| brings a set of scripts to deploy a complete Catapult test network for development and learning purposes.

* Guide: :doc:`Running a local network with Catapult Service Bootstrap <../../getting-started/setup-workstation>`

.. note:: ⚠️Catapult software and the service bootstrap scripts are still |under-development|. Do not power any network in production using these packages.

**************************
Legacy API incompatibility
**************************

Legacy API calls that used to work for NIS1 network nodes are **not compatible** with Catapult. With Catapult, API requests mostly happen with REST API nodes, usually on port **3000**.

* Protocol: :doc:`Catapult's Architecture <../../concepts/node>`

* Reference: :doc:`Catapult REST <../../api>`

* Reference: `REST API contract </endpoints.html>`_

There are several **Software Development Kits** that have been - and some that are - under development for Catapult distributed ledgers consumer applications.
As of now, the :doc:`planned SDKs <../../sdk>` to be supported are written in: Typescript / Javascript / NodeJS, Java, C#, Go, Python and Swift.

As a starting point, we suggest reviewing the |ts-js-sdk| as it is the most used SDK and leads in |ts-js-sdk-docs|.
The architecture of the TS SDK is inspired in |nem-library| from NIS1.

*******************
Accounts management
*******************

Management of :doc:`account <../../concepts/account>` with Catapult has not changed much compared to the previous NIS1 public network accounts. A few notable changes have happened as to public verifiability of accounts and field names returned in the REST endpoints.

* Guide: :doc:`Creating and opening an account  <../account/creating-and-opening-an-account>`
* Guide: :doc:`Getting the account information <../account/getting-account-information>`

*******************
Legacy transactions
*******************

NIS1 transactions **serialization format is not compatible** with Catapult. Yet, most of the transaction types have only evolved and none have been removed. This implies a possible upgrade to Catapult transactions that involve fewer changes.

The first notable change about transactions is that the status response is received through :ref:`WebSocket channels <websockets>`. In NIS1, the client received the response of the API call right after announcing a transaction. Catapult receives the response of the call **asynchronously**, eliminating blocking calls.

* Protocol: :doc:`Transaction life-cycle <../../concepts/transaction>`
* Protocol: |catapult-schemas|
* Guide: :doc:`Monitoring a transaction status <../transaction/monitoring-a-transaction-status>`

Additionally, there is only one TransferTransaction version remaining in which mosaics are always pushed in the mosaics array, when available. This is different from NIS1 transfer transactions which, in their first version, attached XEM without using the mosaics array.

****************
Transaction fees
****************

The fee that needs to be paid for a transaction now depends on the transaction size and node owners can specify a positive (or zero) fee multiplier. The **effective fee** paid for a transaction can be calculated reading the **fee multiplier** from the block in which the transaction got confirmed and multiplying it by the **size of the transaction**.

Transactions fees are specified with the ``maxFee``  field. This field represents the maximum fee allowed to be paid for this transaction to confirm.

* Protocol: :ref:`Transaction fees <fees>`

********************
Mosaics & namespaces
********************

Notable changes have happened at protocol level with regards to :doc:`mosaics <../../concepts/mosaic>` management as they are now **independent** of :doc:`namespaces <../../concepts/namespace>`.
In fact, in NIS1, it happened that namespaces would expire altogether with assets linked to them.

With Catapult, mosaics are configured to have their own ``duration`` instead, as well as being assigned a unique ``nonce`` value.

Lastly, **levies are not available on Catapult**, those must be reproduced with aggregate transactions instead.

* Guide: :doc:`Creating a mosaic  <../mosaic/creating-a-mosaic>`
* Guide: :doc:`Registering a namespace  <../namespace/registering-a-namespace>`
* Guide: :doc:`Creating a subnamespace  <../namespace/registering-a-subnamespace>`

Namespaces can still refer to mosaics byways of :ref:`AliasTransactions <mosaic-alias-transaction>`. A namespace owner can attach either of an account or a mosaic id to one of its' namespaces. The namespace information endpoint will return the linked object in the alias field.

Also, root namespaces have a ``duration`` field that is **expressed in a count of blocks** which means yearly renewal is not mandatory anymore.

* Guide: :doc:`Linking a namespace to a mosaic <../namespace/link-a-namespace-to-a-mosaic>`
* Guide: :doc:`Linking a namespace to an address <../namespace/link-a-namespace-to-an-address>`

In order to facilitate the transfer of mosaics, a mosaic owner should register a namespace and alias the mosaic with that namespace. End-users can **send transactions using the alias** to refer to the mosaic.

* Guide: :ref:`Sending a TransferTransaction with an aliased mosaic <sending-a-transfer-transaction-with-an-aliased-mosaic>`
* Guide: :ref:`Sending a TransferTransaction to an aliased address <sending-a-transfer-transaction-to-an-aliased-address>`

When a transaction includes an alias, a so-called **resolution** reflects the resolved value of that alias in the block.
To get the real identifier behind an aliased address or mosaic, the client application needs to fetch the related :doc:`resolution receipt <../../concepts/receipt>` linked to the block where the transaction gets included.

* Guide: :doc:`Getting the asset identifier behind a namespace with receipts <../blockchain/getting-the-mosaic-identifier-behind-a-namespace-with-receipts>`

*************************
Multisignature management
*************************

With multisignature accounts managed on-chain, the NEM multisignature implementation is different from many other - so-called client-side - multisignature implementations.

1.  An account must be converted to a :doc:`multisignature account <../../concepts/multisig-account>`.

Different to NIS1, the account modification entries now hold fields for ``minimum approval`` and ``minimum removal``:

**Minimum removal**: Defines how many cosignatories are required to broadcast transactions removing cosignatories from the multisignature account.

**Minimum approval**: Defines how many cosignatories are required for any other type of transaction.

Additionally, cosignatories that are added to multisignature accounts now have to confirm the modification by sending a **cosignature** (opt-in process). In order to facilitate this process, transactions with type :ref:`MultisigAccountModificationTransaction <multisig-account-modification-transaction>` must be wrapped in an :ref:`AggregateTransaction <aggregate-transaction>`.

* Guide: :doc:`Converting an account to multisignature <../account/converting-an-account-to-multisig>`

2. Multi-Signature transactions work with :doc:`aggregate transactions <../../concepts/aggregate-transaction>`.

The new AggregateTransaction permits to wrap multiple transactions together involving different participants. If all the participants cosign the aggregate, the inner transactions are included atomically in the block. Otherwise, none of the transactions will get confirmed.

To send a multisig transaction as in NIS1, the initiator of the transaction has to add it **as an inner transaction of the aggregate**. Then, the minimum number of cosignatories defined in the multisignature will have to cosign the aggregate to allow announcing transactions from the shared account.

* Guide: :doc:`Sending a multisignature transaction <../transaction/sending-a-multisig-transaction>`

**********
Need help?
**********

While migrating from NIS1 to Catapult, you might still have some unanswered questions.
In the :doc:`NEM Developer Center <../../getting-started/setup-workstation>`, you can find more new features described along with step-by-step integration guides.

You can also ask integration related questions on |stack-overflow|, or reach our community of developers joining the official |slack|.


.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap" target="_blank">catapult-service-bootstrap</a>

.. |ts-js-sdk| raw:: html

   <a href="https://github.com/nemtech/nem2-sdk-typescript-javascript" target="_blank">TS/JS SDK</a>

.. |ts-js-sdk-docs| raw:: html

   <a href="https://nemtech.github.io/nem2-sdk-typescript-javascript/" target="_blank">documentation</a>

.. |nem-library| raw:: html

   <a href="https://nemproject.github.io/nem-library-docs/" target="_blank">NEM Library</a>

.. |catapult-schemas| raw:: html

   <a href="https://github.com/nemtech/catbuffer/tree/master/schemas/" target="_blank">Serialization schemas</a>

.. |stack-overflow| raw:: html

   <a href="https://stackoverflow.com/tags/nem/" target="_blank">StackOverflow</a>

.. |slack| raw:: html

   <a href="http://slack.nemtech.io/" target="_blank">Slack</a>

.. |under-development| raw:: html

   <a href="https://github.com/nemtech/catapult-server/milestones/" target="_blank">under development</a>


