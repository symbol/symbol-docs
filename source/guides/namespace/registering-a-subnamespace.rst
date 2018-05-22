:orphan:

##########################
Registering a subnamespace
##########################

Register a :doc:`subnamespace <../../concepts/namespace>` following this guide.

**********
Background
**********

Having a root namespace registered, you can create up to ``3`` levels of subnamespaces.

Subnamespaces do not have a renting duration by its own. They have the same one as their parent namespace.

It is possible to create multiple subnamespaces with the same name in different namespaces (example: ``foo.bar`` and ``foo2.bar``).

*************
Prerequisites
*************

- Finish :doc:`registering a namespace guide <registering-a-namespace>`
- NEM2-SDK or CLI
- A text editor or IDE
- An account with XEM and at least one namespace

*************************
Let’s get into some code
*************************

The first step is to choose a name for your subnamespace.

In this example, we will register a namespace called ``bar`` under ``foo`` namespace.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/namespace/RegisteringASubnamespace.ts
        :language: typescript
        :lines:  24-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/namespace/RegisteringASubnamespace.java
        :language: java
        :lines: 39-61

    .. literalinclude:: ../../resources/examples/javascript/namespace/RegisteringASubnamespace.js
        :language: javascript
        :lines: 26-

    .. literalinclude:: ../../resources/examples/cli/namespace/RegisteringASubnamespace.sh
        :language: bash
        :start-after: #!/bin/sh