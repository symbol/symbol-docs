######################
Registering namespaces
######################

.. _guide-registering-a-namespace:

***********************
Registering a namespace
***********************

The purpose of this guide is to register your own :doc:`namespace <../concepts/namespace>`.

Background
==========

A namespace is an on-chain unique domain for your assets.

The easiest way to appreciate it is the domain and file analogy on the internet. Imagine that a domain address has to be unique in a root (lowest level).

If one :doc:`account <account>` creates a namespace, that namespace will appear unique in the NEM ecosystem. For example, if one were to create a namespace called ``foo``, a second person cannot create the same namespace.

Prerequisites
=============

- Finish the :doc:`getting started section <../getting-started/setup-workstation>`
- NEM2-SDK or CLI
- A text editor or IDE
- An account with XEM

Let’s get into some code
=========================

The first step is to choose a name for your namespace.  A root namespace may have a length of ``N`` characters.

One common option is to choose your company's name. This name should be available, as is unique. In this example, we will register a namespace called ``foo``. Let's check if this name is available.

.. example-code::

    .. literalinclude:: ../resources/examples/typescript/namespace/CheckingNamespaceExistence.ts
        :language: typescript
        :lines:  22-

    .. literalinclude:: ../resources/examples/java/src/test/java/nem2/guides/examples/namespace/CheckingNamespaceExistence.java
        :language: java
        :lines: 34-40

    .. literalinclude:: ../resources/examples/javascript/namespace/CheckingNamespaceExistence.js
        :language: javascript
        :lines: 23-

    .. literalinclude:: ../resources/examples/cli/namespace/CheckingNamespaceExistence.sh
        :language: bash
        :start-after: #!/bin/sh

Is the namespace available? Try to register it before someone else does it!

To register a new namespace, announce a :ref:`register namespace transaction<register-namespace-transaction>` with the chosen name and renting duration expressed in blocks.

.. example-code::

    .. literalinclude:: ../resources/examples/typescript/namespace/RegisteringANamespace.ts
        :language: typescript
        :lines:  20-
    
    .. literalinclude:: ../resources/examples/java/src/test/java/nem2/guides/examples/namespace/RegisteringANamespace.java
        :language: java
        :lines: 40-59

    .. literalinclude:: ../resources/examples/javascript/namespace/RegisteringANamespace.js
        :language: javascript
        :lines: 27-

    .. literalinclude:: ../resources/examples/cli/namespace/RegisteringANamespace.sh
        :language: bash
        :start-after: #!/bin/sh

What's next?
============
Now that you have registered your namespace, you can start :ref:`creating mosaics <guide-creating-a-mosaic>`.

Also, when the transaction is confirmed, you will be able to  :ref:`register a subnamespace <guide-registering-a-subnamespace>` by following next guide.

.. _guide-registering-a-subnamespace:

**************************
Registering a subnamespace
**************************

After creating a namespace, this tutorial will help you to register a :doc:`subnamespace <../concepts/namespace>`.

Background
==========
Having a root namespace registered we can create up to 3 levels of subnamespaces.

Subnamespaces do not have a renting duration by its own. They have the same one as their parent namespace.

It is possible to create multiple subnamespaces with the same name in different namespaces (example: ``foo.bar`` and ``foo2.bar``).

Prerequisites
=============

- Finish :ref:`registering a namespace guide <guide-registering-a-namespace>`
- NEM2-SDK or CLI
- A text editor or IDE
- An account with XEM and at least one namespace

Let’s get into some code
=========================
The first step is to choose a name for your subnamespace.

In this example, we will register a namespace called ``bar`` under ``foo`` namespace. Subnamespaces may have a length of ``64`` characters maximum.

.. example-code::

    .. literalinclude:: ../resources/examples/typescript/namespace/RegisteringASubnamespace.ts
        :language: typescript
        :lines:  24-
    
    .. literalinclude:: ../resources/examples/java/src/test/java/nem2/guides/examples/namespace/RegisteringASubnamespace.java
        :language: java
        :lines: 39-61

    .. literalinclude:: ../resources/examples/javascript/namespace/RegisteringASubnamespace.js
        :language: javascript
        :lines: 26-

    .. literalinclude:: ../resources/examples/cli/namespace/RegisteringASubnamespace.sh
        :language: bash
        :start-after: #!/bin/sh