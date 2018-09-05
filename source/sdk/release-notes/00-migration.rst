:orphan:

Preparing for NEM2-SDK 1.0.0
============================

We are pleased to present NEM-2SDK 0.9.1. These release notes include NEM2-SDK new features and breaking changes over its predecessor NEM-Library.

.. warning::  The SDKs methods could change until it reaches the stable version 1.0.0. For now, Catapult is only available in a test net environment. Consider it before applying changes and uploading your software to production.

**********************
Install latest version
**********************

Select your :doc:`programming language <../overview>` and :ref:`install the latest version <setup-development-environment>`. Make sure to uninstall previous versions of NEM2-SDK or NEM Library.

************
What is new?
************

NEM2-SDK shares the same design/architecture between programming languages. That means fast language adaptation, cohesion and shared knowledge between NEM developers, most rapid SDK updates and fewer bugs.

NEM-SDK does not add features that are not 100% related to :doc:`Catapult REST API<../../api>`. Instead, it permits to be extended by the use of new standalone :doc:`libraries <../../libraries/overview>`.

The new SDK implements the new features available in Catapult.

Repositories
============

**BlockChainHttp**


* Added getBlocksByHeightWithLimit method.
* Added getBlockTransactions method.
* Added getDiagnosticStorage method.


**AccountHttp**

* Added getAccountsInfo to get multiple accounts information at once.


**MosaicHttp**

* Added getMosaics to get multiple mosaics information at once.
* Added getMosaicsName to get multiple mosaic names.


**NamespaceHttp**

* Added getNamespacesFromAccount to get account owned namespaces information.
* Added getNamespacesFromAccounts to get multiple accounts owned namespaces information at once.
* Added getNamespacesName to get multiple mosaics name.


**TransactionHttp**

* Added getTransactions to get multiple transactions at once.
* Added getTransactionStatus to get transaction status.
* Added getTransactionsStatuses to get multiple transactions status.
* Added  announceAggregateBonded to announce aggregate bonded transactions.
* Added announceAggregateBondedCosignature to announce AggregateCosignatureTransaction.

Listeners
=========


* Added new listeners.

Models
======

**Account**

* Added access private key of the account.
* Added generate a new account.
* Added signCosignatureTransaction.
* Added signTransactionWithCosignatories.


**Address**


* Added static constructor createFromPublicKey.


**BlockchainStorageInfo**

* New model.


**BlockchainScore**

* New model.


**MosaicName**

* New model.


**NamespaceId**

* New model.


**NamespaceName**

* New model.


**Public Account**

* Added equals method.


**Transaction**

* Added is unconfirmed method.
* Added is confirmed method.
* Added is partial method.
* Added is unannounced method.


**AggregateTransaction**

* New Model.


**LockFundsTransaction**

* New model.


**SecretLockTransaction**

* New Model.


**SecretProofTransaction**

* New model


**MultisigAccountInfo**

* New model.


**MultisigAccountGraphInfo**

* New Model.


**XEM**

* Added two static constructors, createRelative and createAbsolute.

****************
Breaking changes
****************

NEM Library inspires NEM2-SDK architecture.  However, several architectural improvements have been made.

If you were using NEM-Library for NIS 1, consider reviewing the following breaking changes when considering upgrading to NEM2-SDK.

General
=======

**Package name**

Import nem2-sdk rather than nem-library.

.. code-block:: typescript

    import { ... } from 'nem2-sdk';



**Removed network bootstrapping**

When using NEM Library, the network was selected when initiating a project.

In this new version, bootstrapping the network is not needed anymore.

NEM2-SDK allows you create transactions for different networks in the same project by providing the network when creating transactions.

Repositories
============

**AccountHttp**

* Changed getFromAddress and getFromPublicKey to getAccountInfo.
* Moved getNamespaceOwnedByAddress to NamespaceHttp.
* Moved getMosaicCreatedByAddress and getMosaicOwnedByAddress to MosaicHttp.


**BlockChainHttp**

* Merged BlockHttp and ChainHttp into BlockChainHttp repository.


**MosaicHttp**

* Changed getMosaicDefinition to getMosaic.
* Changed getAllMosaicsGivenNamespace to getMosaicsFromNamespace.


**NamespaceHttp**

* Removed getRootNamespaces.


**TransactionHttp**

* Changed getByHash to getTransaction.
* Changed announceTransaction to announce.


**Listener**

* Changed returned types.
* Grouped all listeners: AccountListener, ConfirmedTransactionListener, UnconfirmedTransactionListener and BlockchainListener into Listener class.

Models
======

**Account**

* Changed signTransactions -> sign.
* Changed createWithPrivateKey -> createFromPrivateKey, now we need to introduce networkType of the account.


**Account Info**

* Changed balance -> mosaics, being mosaic an array of mosaics with the amount holded of each mosaic.
* Removed multisig account information from account info, now available with MultisigAccountGraphInfo, MultisigAccountInfo due to introduction of multilevel multisignature accounts.


**Address**

* Changed constructor to be createFromRawAddress.
* Changed network method name to property networkType.


**Public Account**

* Changed constructor name createWithPublicKey to createFromPublicKey.
* Changed public account will always have public key, removed nem-library hasPublicKey method.


**Block**

* Changed name from Block to BlockInfo
* Added current hash information.
* Removed transactions not returned within blockInfo, must be queried using BlockHttp getBlockTransactions method.


**Mosaic**

* Changed quantity name to amount.
* Changed mosaicId name to id.
* Changed types.


**MosaicId**

* Changed properties from namespaceId (string) and name (string) to Id.
* Changed constructor.


**MosaicDefinition**

* Changed name from MosaicDefinition to MosaicInfo.


**Namespace**

* Changed name from Namespace to NamespaceInfo.


**TimeWindow**

* Changed model to Deadline.


**Transaction**

* Changed property names and types.


**TransactionInfo**

* Changed property names and types.


**SignedTransaction**

* Changed property names and types.


**TransferTransaction**

* Unified create and createWithMosaics constructors to create.
* Create constructor needs network type as a property.
* Unified xem and mosaics properties to mosaics array.
* Changed other property names and types.


**ProvisionNamespaceTransaction**

* Changed name from ProvisionNamespaceTransaction to RegisterNamespaceTransaction.
* Changed createRoot constructor name to createRootNamespace.
* Changed createSub constructor name to createSubNamespace.
* Changed other property names and types.


**MosaicDefinitionCreationTransaction**

* Changed name from MosaicDefinitionCreationTransaction to MosaicDefinitionCreationTransaction.
* Changed other property names and types.


**MosaicSupplyChangeTransaction**

* Changed other property names and types.


**ModifyMultisigAccountTransaction**

* Changed MultisigAggregateModificationTransaction name to ModifyMultisigAccountTransaction
* Added minRemovalDelta.
* Changed other property names and types.

*****************
Under development
*****************

Some features are not yet implemented in this version of the SDK.

* Encrypt and decrypt messages.

* Mosaic Levies.

* Connection pool.

* Harvesting.

* Pageables.

* NodeHttp.