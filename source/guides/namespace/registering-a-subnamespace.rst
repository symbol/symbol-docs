:orphan:

.. post:: 18 Aug, 2018
    :category: namespace
    :excerpt: 1
    :nocomments:

##########################
Registering a subnamespace
##########################

Register a :doc:`subnamespace <../../concepts/namespace>` following this guide.

**********
Background
**********

Once you have a registered root namespace, you can create up to ``3`` levels of subnamespaces.

Subnamespaces do not have a renting duration on its own. They have the same one as their parent namespace.

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

In this example, we have registered a subnamespace called ``bar`` under ``foo`` namespace.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/namespace/RegisteringASubnamespace.ts
        :caption: |registering-a-subnamespace-ts|
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/namespace/RegisteringASubnamespace.java
        :caption: |registering-a-subnamespace-java|
        :language: java
        :lines: 39-61

    .. literalinclude:: ../../resources/examples/javascript/namespace/RegisteringASubnamespace.js
        :caption: |registering-a-subnamespace-js|
        :language: javascript
        :lines: 26-

    .. literalinclude:: ../../resources/examples/cli/namespace/RegisteringASubnamespace.sh
        :caption: |registering-a-subnamespace-cli|
        :language: bash
        :start-after: #!/bin/sh

.. |registering-a-subnamespace-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/namespace/RegisteringASubnamespace.ts" target="_blank">View Code</a>

.. |registering-a-subnamespace-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/namespace/RegisteringASubnamespace.java" target="_blank">View Code</a>

.. |registering-a-subnamespace-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/namespace/RegisteringASubnamespace.js" target="_blank">View Code</a>

.. |registering-a-subnamespace-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/namespace/RegisteringASubnamespace.sh" target="_blank">View Code</a>