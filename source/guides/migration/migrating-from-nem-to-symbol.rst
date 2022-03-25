.. post:: 17 Jul, 2019
    :category: Migration
    :excerpt: 1
    :nocomments:

#############################
Migrating from NIS1 to Symbol
#############################

With |codename|, most of the previously available NIS1 features have evolved.
This document will help you **upgrade your application**'s previous NIS1 features to the newly available |codename| technology.

.. note:: You can move your NIS1 assets to a Symbol account by **Opting-in**. For more information, see :doc:`Retrieving your XYM from a post-launch opt-in
 <post-launch-optin-xym-retrieval>`.

.. csv-table:: Feature comparison between NIS1 and Symbol
   :header: "NEM NIS1", "Symbol"
   :delim: ;

   **Built-in features**;
   Mosaics; Mosaics
   Namespaces; Namespaces
   Delegated Harvesting; Delegated Harvesting
   Multisig Accounts; Multi-level Multisig Accounts
   Mosaic Restrictions; Advanced Mosaic Restrictions
   — ; Account Restrictions
   — ; Metadata Controls
   — ; Aggregated Transactions
   — ; Inflation
   — ; Cross-Chain Swaps
   — ; Plug-Ins
   **Protocol**;
   Coded in Java; Coded in C++
   POI (Proof of Importance); POS+ (Proof of Stake Plus)
   Keccak-SHA3-512; SHA-512
   Fixed Fees; Dynamic Fees
   — ; Receipts
   — ; Merkle Proofs

************
Test network
************

Right now, there are two options to start testing Symbol which do not involve spending funds.

* **Public test network** The public test network uses the same technology and features of the main public network. You can use the testnet to experiment with the offered transaction set in a live network without the loss of valuable assets. To start using the test net, follow :doc:`this guide <../../getting-started/setup-workstation>`.

* **Private test network**: To run a private test network, use the package |symbol-bootstrap|. This tool contains the necessary setup scripts to build a network for development and learning purposes with just one command.

**************************
Legacy API incompatibility
**************************

Legacy API calls that used to work for NIS1 network nodes are **not compatible** with |codename|.
Now, API requests mostly happen with REST API nodes usually on port **3000**.

There are several **Software Development Kits** that have been—and some that are—under development for |codename| distributed ledgers consumer applications.
As of now, the :doc:`planned SDKs <../../sdk>` to be supported are written in: Typescript / Javascript / NodeJS, Java, C#, Go, Python and Swift.

As a starting point, we suggest reviewing the |ts-js-sdk| as it is the most used SDK and leads in |ts-js-sdk-docs|.
The architecture of the TS SDK is inspired by |nem-library| from NIS1.

**See also**:

* Protocol: :doc:`Nodes Architecture <../../concepts/node>`

* Reference: :doc:`REST Gateway <../../api>`

* Reference: `REST API contract <https://symbol.github.io/symbol-openapi/v0.11.3/>`_

*******************
Accounts management
*******************

Both platforms use the digital signature algorithm named Ed25519, but with different hashing algorithms.
While NIS1 uses **Keccak-SHA3-512**, |codename| changed to **SHA-512** to support TLS.

The change in the hashing algorithm used leads to have, for the same private key in NIS1 and |codename|, different public keys, and addresses.

**See also**:

* Guide: :doc:`Creating and opening an account  <../account/creating-an-account>`
* Guide: :doc:`Getting the account information <../account/getting-account-information>`

*******************
Legacy transactions
*******************

NIS1 transactions **serialization format is not compatible** with |codename|.
Yet, most of the transaction types have only evolved and none have been removed. This implies a possible upgrade to |codename| transactions that involve fewer changes.

The first notable change about transactions is that the status response is received through :ref:`WebSocket channels <websockets>`.
In NIS1, the client received the response of the API call right after announcing a transaction.
|codename| receives the response of the call **asynchronously**, eliminating blocking calls.

Additionally, |codename| only has one version of :doc:`TransferTransaction <../../concepts/transfer-transaction>`.
The native currency is now pushed as a regular :doc:`mosaic <../../concepts/mosaic>` in the mosaics array of the transaction.

**See also**:

* Protocol: :doc:`Transaction life-cycle <../../concepts/transaction>`
* Protocol: |catapult-schemas|

****************
Transaction fees
****************

|codename| transaction fees are dynamic and decided by the network participants.
Each transaction **effective fee** is calculated by multiplying a **fee multiplier** by the **transaction size**.
The fee multiplier is attached in the block where the transaction gets confirmed, and it is defined by the node owner harvesting the block.

During the transaction definition, the sender limits the maximum fee authorized to include the transaction in a block.

**See also**:

* Protocol: :doc:`Transaction fees <../../concepts/fees>`

*******
Mosaics
*******

Notable changes have happened at protocol level with regards to :doc:`mosaics <../../concepts/mosaic>` management as they are now **independent** of :doc:`namespaces <../../concepts/namespace>`.

In fact, NIS1 namespaces expire altogether with assets linked to them.
|codename| mosaics are configured to have their own ``duration``, as well as being assigned a unique ``nonce`` value.

Lastly, levies are not available on |codename|.

**See also**:

* Guide: :doc:`Creating a mosaic  <../mosaic/creating-a-mosaic>`

**********
Namespaces
**********

Namespaces can still refer to mosaics using :ref:`mosaicaliastransaction`.
A namespace owner can attach either of an account or a mosaic id to one of its namespaces.
The namespace information endpoint will return the linked object in the alias field.

Also, |codename| root namespaces have a ``duration`` field that is **expressed in a count of blocks** which means yearly renewal is not mandatory anymore.

In order to facilitate the transfer of mosaics, a mosaic creator should register a namespace and alias the mosaic with that namespace.
End-users can **send transactions using the alias** to refer to the mosaic.

When a transaction includes an alias, a **resolution** reflects the resolved value of that alias in the block.
To get the real identifier behind an aliased address or mosaic, the client application needs to fetch the related :doc:`resolution receipt <../../concepts/receipt>` linked to the block where the transaction gets included.

**See also**:

* Guide: :doc:`Registering a namespace  <../namespace/registering-a-namespace>`
* Guide: :doc:`Creating a subnamespace  <../namespace/registering-a-subnamespace>`
* Guide: :doc:`Linking a namespace to a mosaic <../namespace/link-a-namespace-to-a-mosaic>`
* Guide: :doc:`Linking a namespace to an address <../namespace/link-a-namespace-to-an-address>`
* Guide: :ref:`Sending a TransferTransaction with an aliased mosaic <sending-a-transfer-transaction-with-an-aliased-mosaic>`
* Guide: :ref:`Sending a TransferTransaction to an aliased address <sending-a-transfer-transaction-to-an-aliased-address>`
* Guide: :doc:`Getting the asset identifier behind a namespace with receipts <../blockchain/getting-the-mosaic-identifier-behind-a-namespace-with-receipts>`

*************************
Multisignature management
*************************

With multisignature accounts managed on-chain, |codename|'s multisignature implementation is different from many other—so-called client-side—multisignature implementations.

1. Creating a :doc:`multisignature account <../../concepts/multisig-account>`.

Different to NIS1, the account modification entries now hold fields for ``minimum approval`` and ``minimum removal``:

* **Minimum removal**: Defines how many cosignatories are required to broadcast transactions removing cosignatories from the multisignature account.

* **Minimum approval**: Defines how many cosignatories are required for any other type of transaction.

Additionally, cosignatories that are added to multisignature accounts now have to confirm the modification by sending a **cosignature** (opt-in process).
In order to facilitate this process, transactions with type :ref:`multisigaccountmodificationtransaction` must be wrapped in an :ref:`aggregate-transaction`.

2. Multi-Signature transactions work with :doc:`aggregate transactions <../../concepts/aggregate-transaction>`.

The new AggregateTransaction permits to wrap multiple transactions together involving different participants.
If all the participants cosign the aggregate, the inner transactions are included atomically in the block.
Otherwise, none of the transactions will get confirmed.

To send a multisig transaction as in NIS1, the initiator of the transaction has to add it **as an inner transaction of the aggregate**.
Then, the minimum number of cosignatories defined in the multisignature will have to cosign the aggregate to allow announcing transactions from the shared account.

**See also**:

* Guide: :doc:`Creating a multisig account <../multisig/creating-a-multisig-account>`
* Guide: :doc:`Sending a multisignature transaction <../aggregate/sending-a-multisig-transaction>`

.. |ts-js-sdk| raw:: html

   <a href="https://github.com/symbol/symbol-sdk-typescript-javascript" target="_blank">TS/JS SDK</a>

.. |ts-js-sdk-docs| raw:: html

   <a href="https://symbol.github.io/symbol-sdk-typescript-javascript/" target="_blank">documentation</a>

.. |nem-library| raw:: html

   <a href="https://nemproject.github.io/nem-library-docs/" target="_blank">NEM Library</a>

.. |catapult-schemas| raw:: html

   <a href="https://github.com/symbol/symbol/tree/main/catbuffer/schemas/symbol/" target="_blank">Serialization schemas</a>

.. |stack-overflow| raw:: html

   <a href="https://stackoverflow.com/tags/nem/" target="_blank">StackOverflow</a>

.. |under-development| raw:: html

   <a href="https://github.com/symbol/catapult-client/milestones/" target="_blank">under development</a>
