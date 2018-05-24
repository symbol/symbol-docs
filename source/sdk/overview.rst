########
Overview
########

The NEM2 Software Development Kit (a.k.a. NEM2-SDK) is the primary software development tool to create NEM2 components, like more tools, libraries or applications. All, or almost all, components should use NEM2-SDK instead of raw API.

.. warning::  The SDKs methods could change until it reaches the stable version 1.0.0.

The new SDK enables the developers to focus on their product rather than the NEM2 Blockchain specific API details due to its higher abstraction.

NEM2-SDK share the same design/architecture between programming languages to accomplish the next properties:

* **Fast language adaptation**: There is a library for Java, but you needed it for C# for example, because both SDKs share the same design, you can re-write the library faster, just adapting the syntax to your language. Also applies to examples, projects, applications...

* **Cohesion/shared knowledge cross NEM developers**: Be able to change between projects that use NEM, sharing the same design accompanied by best practices.

* **Fast SDK updates**: Migrating one improvement from a NEM2-SDK implementation to the rest is faster.

* **Fewer bugs**: If some bug appears in one language, it is faster to check and fix it.

The best way to learn about the SDKs is through :doc:`guides <../guides/overview>`, we encourage you to check them.

*************************************
Backward compatibility with NIS1 SDKs
*************************************

.. note:: Final information regarding compatibility with NIS1 is not yet available.

Start planning the migration to NEM2-SDK to take advantage of new Catapult features and future releases.

Check :doc:`Preparing for NEM2-SDK 1.0.0 <release-notes/00-migration>` to see new features and changes that break backward compatibility with NEM-Library.


**********************
Languages & References
**********************

Typescript & JavaScript
=======================

- |tsjs-repo|
- |tsjs-reference|


JVM: Java & Kotlin
==================

- |javasdk-repo|
- |javasdk-reference|

C#
====

- |csharp-repo|


Planned languages to give support
=================================

- PHP
- Python
- Go
- Ruby

In case there is not SDK for your preferred language, check the support page. We are glad to help you getting involved in the SDK development for your preferred language.

.. |tsjs-repo| raw:: html

    <a href="https://github.com/nemtech/nem2-sdk-typescript-javascript" target="_blank">SDK Repository</a>

.. |tsjs-reference| raw:: html

    <a href="https://nemtech.github.io/nem2-sdk-typescript-javascript/" target="_blank">SDK Reference Documentation</a>

.. |javasdk-repo| raw:: html

    <a href="https://github.com/nemtech/nem2-sdk-java" target="_blank">SDK Repository</a>

.. |javasdk-reference| raw:: html

    <a href="https://nemtech.github.io/nem2-sdk-java/" target="_blank">SDK Reference Documentation</a>

.. |csharp-repo| raw:: html

    <a href="https://github.com/nemtech/nem2-sdk-csharp/" target="_blank">SDK Repository</a>



