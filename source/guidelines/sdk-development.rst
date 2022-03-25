###############
SDK Development
###############

One of the key objectives we had when building the first group of  SDKs was to enable developers to change quickly between programming languages without having to adapt to a completely different design.
This document intends to guide developers to ship |codename|-based SDKs that share the same design to achieve interoperability.

************
Architecture
************

Package Organization
====================

.. figure:: ../resources/images/diagrams/sdk-architecture.png
    :width: 450px
    :align: center

    Package organization diagram

**Infrastructure**

This package includes the generated API client and DTOs.
The HTTP requests are made following the Repository Pattern, and they return |codename| domain immutable models via the Observable Pattern.

**Models**

The |codename| domain models are immutable by definition, meaning that the developer cannot change their attributes.
Instead, the developers have to create new Transactions and dispatch them to the blockchain via TransactionHTTP.

**Services**

Common operations that require combining multiple :doc:`REST API <../api>` requests.

Characteristics
===============

- **Standardized Contracts**: Guaranteeing interoperability and harmonization of data models.
- **Loose Coupling**: Reducing the degree of component coupling fosters.
- **Abstraction**: Increasing the long-term consistency of interoperability and allowing underlying components to evolve independently.
- **Reusability**: Enabling high-level interoperability between modules and potential component consumers.
- **Stateless**: Increasing availability and scalability of components allowing them to interoperate more frequently and reliably.
- **Composability**: For components to be effectively composable, they must be interoperable.

Reactive
========

The |sdk| uses the `ReactiveX Library <http://reactivex.io/>`_ intensely.

The benefits of using a reactive approach are:

* **Functional**: Developers can avoid complex stateful programs using clean input/output functions over observable streams.
* **Less is more**: ReactiveX's operators often reduce what was once an elaborate challenge into a few lines of code.
* **Async error handling**: Traditional try/catch is weak for error handling in asynchronous computations, but ReactiveX will offer developers the proper tools to handle errors.
* **Concurrency**: Observables and Schedulers in ReactiveX allow the programmer to abstract away low-level threading, synchronization, and concurrency issues.
* **Frontend**: Manipulation of UI events and API responses on the Web using RxJS.
* **Backend**: Embrace ReactiveX's asynchronicity, enabling concurrency and implementation independence.

If you are new to Reactive Programming, we encourage you to start with the online guide `Learn RxJS <https://www.learnrxjs.io/>`_.

***************
Before starting
***************

1. Review the technical documentation to become familiar with the |codename| :doc:`built-in features<../concepts/account>`.
2. Setup the |codename| :doc:`local environment via docker <../guides/network/creating-a-private-test-net>`.
3. Check the :doc:`API reference <../api>` and play with offered set of endpoints.
4. Become familiar with the current :doc:`SDK via code examples <../concepts/account>` and :ref:`CLI <wallet-cli>` .
5. Join our |discord| to ask |codename| related questions.
6. Be sure no one is already working on the SDK you want to create. Check the :doc:`repository list <../sdk>` and comment on your intentions in ``#sig-api`` channel.
7. Claim the SDK `forking this repository <https://help.github.com/en/articles/creating-a-pull-request/>`_ and add a new entry to the :doc:`repository list <../sdk>`.

********************
Creating the project
********************

You can base your work on the `TypeScript SDK <https://github.com/symbol/symbol-sdk-typescript-javascript>`_.
The TypeScript version is the first SDK getting the latest updates.
Check regularly the `Changelog <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/CHANGELOG.md>`_ to be sure you didn't miss any code change update.

Create a new repository, preferably on GitHub, with:

1. The README with the instructions to install the SDK.
2. The `Code of Conduct <https://help.github.com/articles/adding-a-code-of-conduct-to-your-project/>`_.
3. The `Contributors guidelines <https://help.github.com/articles/setting-guidelines-for-repository-contributors/>`_ to help others know how they can help you.

*******
Testing
*******

A project with good test coverage it's more likely to be used and trusted by the developers!

We **strongly** suggest to do `Test-Driven Development <https://en.wikipedia.org/wiki/Test-driven_development>`_ or Unit-Testing (test last).
If you need inspiration, feel free to adapt directly the same tests we did.

* Example of ``travis.yml`` `configuration file <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/.travis.yml>`_
* Example of `unit tests  <https://github.com/symbol/symbol-sdk-typescript-javascript/tree/main/test>`_.
* Example of `end to end tests  <https://github.com/symbol/symbol-sdk-typescript-javascript/tree/main/e2e>`_.

Once you have written some tests, setup a Continuous Integration (CI) system to run the test suite and code linter automatically.
We use `travis-ci <https://travis-ci.org/>`_, but feel free to use the one that suits you best.

Also, we strive to keep our codebases with a unit test coverage of 80% or higher.
We use `coveralls <https://coveralls.io/>`_ to monitor test coverage.

**************
Infrastructure
**************

The `OpenAPI Generator <https://openapi-generator.tech/>`_  handles the API and DTOs generation.
It supports multiple languages, and hopefully, yours is `on the list <https://openapi-generator.tech/docs/generators/>`_.

These are the steps we followed to generate the Typescript DTOs (data transfer objects):

1. Download the `latest Symbol OpenAPI spec <https://github.com/symbol/symbol-openapi/releases>`_ from GitHub releases.

2. Install the OpenApi generator CLI.

   .. code-block:: bash

      npm install @openapitools/openapi-generator-cli@cli-4.1.0 -g

3. Generate the DTOs for the programming language selected.

   .. code-block:: bash

      openapi-generator generate -i ./openapi3.yml -g typescript-node -o ./symbol-ts-sdk/ && rm -R symbol-ts-sdk/test

4. The generated lib is normally published into a central repository (e.g. maven, npm). The SDKs depend on those libraries like any other third party dependency. To automate the deployment of the packages, including the generator for the selected programming language in the `symbol-openapi-generator <https://github.com/symbol/symbol-openapi-generator>`_ project.

5. Drop the generated client classes and implement them using the `Repository pattern <https://martinfowler.com/eaaCatalog/repository.html>`_ returning `Observables <https://en.wikipedia.org/wiki/Observer_pattern>`_ of `ReactiveX <http://reactivex.io/>`_.

   .. note:: The SDK for TypeScript currently chooses the ``typescript-node`` template from the OpenAPI Generator, but there are also other templates available to fit for other purposes. The SDK has interfaced out all the Http Repositories so that different implementations can be applied.

   Example of repositories and implementations:

   * `CreateTransactionsFromDTO <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/infrastructure/transaction/CreateTransactionFromDTO.ts>`_
   * `BlockchainRepository <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/infrastructure/BlockRepository.ts>`_
   * `BlockchainHttp <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/infrastructure/BlockHttp.ts>`_

   See the complete list of `repositories and implementations <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/infrastructure>`_.

6. The **repositories return models instead of DTOs**. You will need to code the models before finishing the API wrapper.

******
Models
******

By default, models are immutable and aim to hide the complexity, like type conversion or relationship between objects.

Example of models implementation:

* `Account <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/model/account/Account.ts>`_
* `NamespaceId <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/model/namespace/NamespaceId.ts>`_
* `NodeInfo <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/model/node/NodeInfo.ts>`_

See the complete list of `models <https://github.com/symbol/symbol-sdk-typescript-javascript/tree/main/src/model>`_.

You will find in the implementations different invariants to ensure the object is well constructed and a nicer API is published.

Particular decisions we considered:

* UInt64 support: While `Java supports big numbers <https://docs.oracle.com/javase/7/docs/api/java/math/BigInteger.html>`_, for example, JavaScript doesn't. The JavaScript SDK has a custom class to handle the `uint64 types <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/model/UInt64.ts>`_. If your language supports ``uint64``, use that implementation instead.
* API conversions: Sometimes, the data returned by API is compressed. You might need to convert those types for the user.
* `Namespace <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/model/namespace/NamespaceId.ts>`_ id: At creation time you add the string name, but when you receive the Namespace from the network, it comes in formatted as ``uint64`` id. A specific endpoint returns the Namespace ``string`` name.

Transaction Serialization
=========================

The `catbuffer-schemas library <https://github.com/symbol/symbol/tree/dev/catbuffer/schemas>`_ defines the protocol to serialize and deserialize |codename| entities.

In combination with the catbuffer generators project, developers can generate builder classes for a given set of programming languages.
For example, the |sdk| uses the generated code to operate with the entities in binary form.

.. note:: If there is no generator for the programming language selected, you will need to develop it first. You can base your work on the `generator <https://github.com/symbol/symbol/tree/dev/sdk/javascript/generator>`_ for TypeScript.

If there is a generator, follow the next steps to generate the builders for all the existent entities:

1. Clone the catbuffer-generators repository recursively.

   .. code-block:: bash

      git clone --recursive git@github.com:symbol/catbuffer-generators.git

2. Install the package requirements.

   .. code-block:: bash

      pip install -r requirements.txt

3. Clone the catbuffer-schemas repository inside the ``catbuffer-generators`` folder.

4. Generate code for all the schemas running the following command under the ``catbuffer-generators`` directory, replacing ``cpp_builder`` for the targeted programming language.

   .. code-block:: bash

      python scripts/generate_all.sh cpp_builder

   The previous command creates a new file for every schema under the ``catbuffer/_generated/cpp_builder`` folder.

5. Publish the generated code into a central repository (e.g. Maven, NPM) and make the SDK dependant on this library. For every transaction type, use the generated builders to serialize and deserialize transactions.

Here you can find some examples of how we used transactions builders:

* `AccountAddressRestrictionTransaction <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/model/transaction/AccountAddressRestrictionTransaction.ts>`_
* `TransferTransaction <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/model/transaction/TransferTransaction.ts>`_
* `AggregateTransaction <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/model/transaction/AggregateTransaction.ts>`_

See the complete list of `transactions <https://github.com/symbol/symbol-sdk-typescript-javascript/tree/main/src/model/transaction>`_.

KeyPair and Cryptographic functions
===================================

.. note:: This section is incomplete.

Cryptographic functions are required to sign transactions.
All the crypto-related functions can be found under the `core/crypto <https://github.com/symbol/symbol-sdk-typescript-javascript/tree/main/src/core/crypto>`_ module.

SDKs use standard ``tweetnacl`` (ed2559) for key pair generation, address derivation (from public key) and signings:

* Keypairs are based on tweetnacl 64 bytes secretKey (public + private) using SHA-512.
* Signatures use tweetnacl detached mode and also get generated using SHA-512.

Finally, pay special attention to the `test vectors <https://github.com/symbol/test-vectors>`_.
The best way to make sure your implementation is correct is to use the test vectors files as inputs and expected outputs.

Examples of vector tests:

* `KeyPairVectorTester <https://github.com/symbol/symbol-sdk-java/blob/main/sdk-core/src/test/java/io/nem/symbol/core/crypto/KeyPairVectorTester.java>`_
* `DsaSignerVectorTester <https://github.com/symbol/symbol-sdk-java/blob/main/sdk-core/src/test/java/io/nem/symbol/core/crypto/DsaSignerVectorTester.java>`_
* `KeyPair <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/test/core/crypto/keyPair.spec.ts#L88>`_

********
Services
********

Services combine multiple :doc:`REST API <../api>` requests and provide developers with handy methods that cannot be retrieved directly from the API.

Services are considered "nice to have" features, and these usually are not required to consider the SDK complete. We recommend starting coding services only if you have a fully operational and well-tested SDK first.

Examples of services:

* `AggregateTransactionService <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/service/AggregateTransactionService.ts>`_: Helps application developers to announce aggregate transactions without having to develop the logic to wait for the hash lock confirmation.
* `MetadataTransactionService <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/service/MetadataTransactionService.ts>`_: Creates metadata transactions without having to pass the previous value.
* `BlockService <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/src/service/BlockService.ts>`_: Provides with methods to verify that the data returned by a given node is valid.

See the complete list of `services <https://github.com/symbol/symbol-sdk-typescript-javascript/tree/main/src/service>`_.

*******************
Documenting the SDK
*******************

The SDKs need to be adopted by other developers.
As the main developer, no one knows better than you how the SDK works.
Consider helping others and spread the usage of the SDK by providing :doc:`the following documentation <sdk-documentation>`.

Recommended Licenses
====================

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
