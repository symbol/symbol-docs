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

Check the languages supported :doc:`here <languages>`.

.. note:: The best way to learn about the SDKs is through :doc:`guides <../guides/overview>`, we encourage you to check them.

*************************************
Backward compatibility with NIS1 SDKs
*************************************

.. warning:: Final information regarding compatibility with NIS1 is not yet available.

Start planning the migration to NEM2-SDK to take advantage of new Catapult features and future releases.

Check :doc:`Preparing for NEM2-SDK 1.0.0 <release-notes/00-migration>` to see new features and changes that break backward compatibility with NEM-Library.