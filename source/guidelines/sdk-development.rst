:orphan:

###############
SDK Development
###############

One of the key objectives we had when building the first group of  SDKs was to enable developers to change quickly between programming languages without having to adapt to a completely different design.
This document intends to guide developers to ship |codename|-based SDKs that share the same design to achieve interoperability.

*********
Rationale
*********

The |sdk| shares the same design/architecture between programming languages to accomplish the next properties:

* **Fast language adaptation**: For example, there is a |sdk| for Java, but you need to work on C++. As both SDKs share the same design, you could re-write the library faster, adapting the syntax to your language. The same principle also applies to code examples, projects, applications...
* **Cohesion/shared knowledge across developers**: Every developer should be able to change between projects that use |codename|. By sharing the same design, we also share the same best practices among projects.
* **Fast SDK updates**: Migrating any improvement from a |sdk| implementation to the rest is faster. Also, if any bug appears in one language, it is quicker to check and fix it.

************
Architecture
************

Characteristics
===============

- **Standardized Contracts**: Guaranteeing interoperability and harmonization of data models.
- **Loose Coupling**: Reducing the degree of component coupling fosters.
- **Abstraction**: Increasing the long-term consistency of interoperability and allowing underlying components to evolve independently.
- **Reusability**: Enabling high-level interoperability between modules and potential component consumers.
- **Stateless**: Increasing availability and scalability of components allowing them to interoperate more frequently and reliably.
- **Composability**: For components to be effectively composable, they must be interoperable.

Package Organization
====================

.. figure:: ../resources/images/diagrams/nem2-sdk-architecture.png
    :width: 400px
    :align: center

    Package organization diagram

**Infrastructure**

The HTTP requests are made following the Repository Pattern, and they return |codename| domain immutable models via the Observable Pattern.

**Models**

The |codename| domain models are immutable by definition, meaning that the developer cannot change their attributes. Instead, the developers have to create new Transactions and dispatch them to the blockchain via TransactionHTTP.

**Services**

Common operations that require multiple :doc:`REST API <../api>` requests are handled by services provided.

Reactive
========

|sdk| uses ReactiveX Library intensely.

* **Functional**: Developers can avoid complex stateful programs using clean input/output functions over observable streams.
* **Less is more**: ReactiveX's operators often reduce what was once an elaborate challenge into a few lines of code.
* **Async error handling**: Traditional try/catch is weak for error handling in asynchronous computations, but ReactiveX will offer developers the proper tools to handle errors.
* **Concurrency**: Observables and Schedulers in ReactiveX allow the programmer to abstract away low-level threading, synchronization, and concurrency issues.
* **Frontend**: Manipulation of UI events and API responses on the Web using RxJS.
* **Backend**: Embrace ReactiveX's asynchronicity, enabling concurrency and implementation independence.

.. note:: In case you are not familiar with ReactiveX and you still have to deliver something fast, you can convert an observable to Promise/Future by reviewing this |rp-promise-example|. However, **we encourage you to learn ReactiveX**.

* |rxjsinaction|
* |frp|
* |learnrxjs|
* |rp-wiki|
* |op-wiki|
* |reactivex|

.. |reactivex| raw:: html

    <a href="http://reactivex.io/" target="_black">ReactiveX</a>

.. |rxjsinaction| raw:: html

    <a href="https://www.manning.com/books/rxjs-in-action" target="_black">RxJS in Action</a>

.. |frp| raw:: html

    <a href="https://www.manning.com/books/functional-reactive-programming" target="_black">Functional Reactive Programming</a>

.. |rp-wiki| raw:: html

    <a href="https://en.wikipedia.org/wiki/Reactive_programming" target="_black">Reactive Programming</a>

.. |op-wiki| raw:: html

    <a href="https://en.wikipedia.org/wiki/Observer_pattern" target="_black">Observer Pattern</a>

.. |learnrxjs| raw:: html

    <a href="https://www.learnrxjs.io/" target="_black">Learn RxJS</a>

.. |rp-promise-example| raw:: html

    <a href="https://www.learnrxjs.io/operators/utility/topromise.html" target="_black">example</a>


***************
Before starting
***************

1. Review the technical documentation to become familiar with the |codename| :doc:`built-in features<../concepts/account>`.
2. Setup the |codename| `local environment via docker <https://github.com/tech-bureau/catapult-service-bootstrap>`_.
3. :doc:`Check the API reference <../api>` and play with the API endpoints.
4. Become familiar with the current :doc:`SDK via code examples <../concepts/account>` & :doc:`CLI <../cli>` .
5. `Join <https://join.slack.com/t/nem2/shared_invite/enQtMzY4MDc2NTg0ODgyLTFhZjgxM2NhYTQ1MTY1Mjk0ZDE2ZTJlYzUxYWYxYmJlYjAyY2EwNGM5NzgxMjM4MGEzMDc5ZDIwYTgzZjgyODM>`_ our Slack to ask |codename| related questions.
6. Be sure no one is already working on the SDK you want to create. Check the :doc:`repository list <../sdk>` and  comment your intentions in  nem2 slack ``#sig-api`` channel. If someone is already working on it, we suggest you collaborate with him/her.
7. Claim the SDK `forking this repository <https://help.github.com/en/articles/creating-a-pull-request/>`_ and add a new entry to the :doc:`repository list <../sdk>`.

***********
Development
***********

You can base your work in `TypeScript <https://github.com/nemtech/nem2-sdk-typescript-javascript>`_.
The TypeScript version is the first SDK getting the latest updates.

Regularly check the `Changelog <https://github.com/nemtech/nem2-sdk-typescript-javascript/blob/master/CHANGELOG.md>`_ to be sure you didn't miss any code change update.

Creating the project
====================

1. Add a README with the instructions to install the SDK.
2. Add a `Code of Conduct <https://help.github.com/articles/adding-a-code-of-conduct-to-your-project/>`_.
3. Add a `Contributors guidelines <https://help.github.com/articles/setting-guidelines-for-repository-contributors/>`_ to help others know how they can help you.
4. Setup the Continuous Integration system. We use `travis-ci <https://travis-ci.org/>`_, but feel free to use the one that suits you best.

A project with good test coverage it's more likely to be used and trusted by the developers!

We **strongly** suggest to do `Test-Driven Development <https://en.wikipedia.org/wiki/Test-driven_development>`_ or Unit-Testing (test last).
If you need inspiration, you can adapt the same `tests we did <https://github.com/nemtech/nem2-sdk-typescript-javascript/tree/master/test>`_.

API Wrapper
===========

The `OpenAPI Generator <https://openapi-generator.tech/>`_  handles the API generation.
It supports multiple languages, and hopefully, yours is on the list.

These are the steps we are following to generate the Typescript DTOs (data transfer objects):

1. Download the latest Open API definition.

.. code-block:: bash

    git clone https://github.com/nemtech/nem2-openapi.git
    cd nem2-openapi && mkdir sdks && cd sdks
    cp ../spec/openapi3.yaml .

- `Open API definition <https://github.com/nemtech/nem2-openapi/releases>`_

2. Copy the ``templates folder`` from ``{nem2-sdk-typescript-javascript}/infrastructure/`` into a new folder.

3. Download the OpenAPI generator and generate the DTOs.

.. code-block:: bash

    brew install openapi-generator
    openapi-generator generate -i ./openapi3.yml -g typescript-node -t templates/ -o ./nem2-ts-sdk/ && rm -R nem2-ts-sdk/test

- `Swagger Codegen instructions <https://github.com/swagger-api/swagger-codegen#development-in-docker>`_

4. As the TypeScript generator does not recognize ``enum`` type alias, we need to manually move enum classes into the ``enumsMap`` list.
You can jump this step if the code generator for your language supports them.

* Open the generated file ``./nem2-ts-sdk/model/models.ts`` in your favorite editor.
* Search for line contains ``let enumsMap: {[index: string]: any}``.
* Move all ``xxxTypeEnum`` entries from below ``typeMap`` into ``enumsMap``.

Example:

.. code-block:: typescript

    let enumsMap: {[index: string]: any} = {
        "AccountPropertyTypeEnum": AccountPropertyTypeEnum,
        "AliasTypeEnum": AliasTypeEnum,
        "MosaicPropertyIdEnum": MosaicPropertyIdEnum,
        "MultisigModificationTypeEnum": MultisigModificationTypeEnum,
        "NamespaceTypeEnum": NamespaceTypeEnum,
        "ReceiptTypeEnum": ReceiptTypeEnum,
        "RolesTypeEnum": RolesTypeEnum,
    }

    let typeMap: {[index: string]: any} = {
        "AccountDTO": AccountDTO,
        "AccountIds": AccountIds,
        "AccountInfoDTO": AccountInfoDTO,
        "AccountMetaDTO": AccountMetaDTO,
        "AccountNamesDTO": AccountNamesDTO,
        "AccountPropertiesDTO": AccountPropertiesDTO,
        "AccountPropertiesInfoDTO": AccountPropertiesInfoDTO,
        "AccountPropertyDTO": AccountPropertyDTO,
        "AliasDTO": AliasDTO,
        "AnnounceTransactionInfoDTO": AnnounceTransactionInfoDTO,
        "BlockDTO": BlockDTO,
        "BlockInfoDTO": BlockInfoDTO,
        "BlockMetaDTO": BlockMetaDTO,
        "BlockchainScoreDTO": BlockchainScoreDTO,
        "CommunicationTimestamps": CommunicationTimestamps,
        "Cosignature": Cosignature,
        "HeightInfoDTO": HeightInfoDTO,
        "MerklePathItem": MerklePathItem,
        "MerkleProofInfo": MerkleProofInfo,
        "MerkleProofInfoDTO": MerkleProofInfoDTO,
        "MosaicDTO": MosaicDTO,
        "MosaicDefinitionDTO": MosaicDefinitionDTO,
        "MosaicIds": MosaicIds,
        "MosaicInfoDTO": MosaicInfoDTO,
        "MosaicMetaDTO": MosaicMetaDTO,
        "MosaicNamesDTO": MosaicNamesDTO,
        "MosaicPropertyDTO": MosaicPropertyDTO,
        "MultisigAccountGraphInfoDTO": MultisigAccountGraphInfoDTO,
        "MultisigAccountInfoDTO": MultisigAccountInfoDTO,
        "MultisigDTO": MultisigDTO,
        "NamespaceDTO": NamespaceDTO,
        "NamespaceIds": NamespaceIds,
        "NamespaceInfoDTO": NamespaceInfoDTO,
        "NamespaceMetaDTO": NamespaceMetaDTO,
        "NamespaceNameDTO": NamespaceNameDTO,
        "NetworkTypeDTO": NetworkTypeDTO,
        "NodeInfoDTO": NodeInfoDTO,
        "NodeTimeDTO": NodeTimeDTO,
        "ResolutionEntryDTO": ResolutionEntryDTO,
        "ResolutionStatementDTO": ResolutionStatementDTO,
        "ServerDTO": ServerDTO,
        "ServerInfoDTO": ServerInfoDTO,
        "SourceDTO": SourceDTO,
        "StatementsDTO": StatementsDTO,
        "StorageInfoDTO": StorageInfoDTO,
        "TransactionHashes": TransactionHashes,
        "TransactionIds": TransactionIds,
        "TransactionInfoDTO": TransactionInfoDTO,
        "TransactionMetaDTO": TransactionMetaDTO,
        "TransactionPayload": TransactionPayload,
        "TransactionStatementDTO": TransactionStatementDTO,
        "TransactionStatusDTO": TransactionStatusDTO,
    }

5. Copy the generated files into the `nem2-sdk infrastructure folder <https://github.com/nemtech/nem2-sdk-typescript-javascript/tree/master/src/infrastructure>`_.

6. Drop the generated client classes and implement them using the `Repository pattern <https://martinfowler.com/eaaCatalog/repository.html>`_ returning `Observables <https://en.wikipedia.org/wiki/Observer_pattern>`_ of `ReactiveX <http://reactivex.io/>`_.

Example of a Repository and HTTP implementation:

* `BlockchainRepository <https://github.com/nemtech/nem2-sdk-typescript-javascript/blob/master/src/infrastructure/BlockRepository.ts>`_
* `BlockchainHttp <https://github.com/nemtech/nem2-sdk-typescript-javascript/blob/master/src/infrastructure/BlockHttp.ts>`_

7. The **repositories return models instead of DTOs**.
You will need to code the models before finishing the API wrapper.

Models
======

The `models <https://github.com/nemtech/nem2-sdk-java/tree/master/sdk-core/src/main/java/io/nem/sdk/model>`_ are by default immutable and aim to hide the complexity, like type conversion or relationship between objects.

You will find in the different implementations different invariants to ensure the object is well constructed and a nicer API is published.

Particular decisions to consider:

* UInt64 support: While `Java supports big numbers <https://docs.oracle.com/javase/7/docs/api/java/math/BigInteger.html>`_, for example, JavaScript doesn't. The JavaScript SDK has a custom class to handle the `uint64 types <https://github.com/nemtech/nem2-sdk-typescript-javascript/blob/master/src/model/UInt64.ts>`_. If your language supports ``uint64``, use that implementation instead.
*  API conversions: Sometimes, the data returned by API is compressed. You might need to convert those types for the user.
* `Namespace <https://github.com/nemtech/nem2-sdk-typescript-javascript/blob/master/src/model/namespace/NamespaceId.ts>`_ id: At creation time you add the string name, but when you receive the Namespace from the network, it comes in formatted as ``uint64`` id. A specific endpoint returns the Namespace ``string`` name.

Transaction Serialization
=========================

The `catbuffer library <https://github.com/nemtech/catbuffer>`_ defines the protocol to serialize and deserialize |codename| entities.

In combination with the catbuffer-generators project, developers can generate builder classes for a given set of programming languages.
For example, the |sdk| uses the generated code to operate with the entities in binary form before announcing them to the network.

KeyPair and Cryptographic functions
===================================

.. note:: This section is incomplete.

Implementing cryptographic functions is required to sign transactions.

Example: `core/crypto <https://github.com/nemtech/nem2-sdk-java/tree/master/sdk-core/src/main/java/io/nem/core/crypto>`_

********************
Documenting your SDK
********************

The SDKs need to be adopted by other developers.
As a contributor, no one knows better than you how a determined SDK works.
Consider helping others and spread the usage of the SDK by providing :doc:`the following documentation <sdk-documentation>`.

******************************
Publishing the SDK as official
******************************

To make an SDK officially supported, submit it as a `NIP <https://github.com/nemtech/NIP/blob/master/NIPs/nip-0001.md>`_.
The reason behind the |codename| Improvement Proposal is to ensure that the new libraries are reviewed, tested, and shared among |codename| developers.

********************
Recommended Licenses
********************

*  MIT: `Expat/MIT/X11 license <https://opensource.org/licenses/MIT>`_
*  Apache-2.0: `Apache License, version
   2.0 <http://www.apache.org/licenses/LICENSE-2.0>`_
*  BSD-2-Clause: `OSI-approved BSD 2-clause
   license <https://opensource.org/licenses/BSD-2-Clause>`_
*  BSD-3-Clause: `OSI-approved BSD 3-clause
   license <https://opensource.org/licenses/BSD-3-Clause>`_
*  CC0-1.0: `Creative Commons CC0 1.0
   Universal <https://creativecommons.org/publicdomain/zero/1.0/>`_
*  GNU-All-Permissive: `GNU All-Permissive
   License <http://www.gnu.org/prep/maintain/html_node/License-Notices-for-Other-Files.html>`_
*  LGPL-2.1+: `GNU Lesser General Public License (LGPL), version 2.1 or
   newer <http://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html>`_
