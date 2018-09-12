:orphan:

.. post:: 16 Aug, 2018
    :category: namespace
    :excerpt: 1
    :nocomments:

########################
Registering a namespace
########################

Rregister your own :doc:`namespace <../../concepts/namespace>`.

**********
Background
**********

A :doc:`namespace <../../concepts/namespace>` is an on-chain unique domain for your assets. The easiest way to understand it is by means of the domain-file analogy on the internet.

A mosaic is like a file hosted on a domain and represents an asset. Like a website and directory, a mosaic can have the same name as other files on other domains. However,  a namespace + mosaic is always unique.

If an :doc:`account <../../concepts/account>` creates a namespace, that namespace will appear as unique in the NEM ecosystem. For example, if one were to create a namespace called ``foo``, a second person cannot create the same namespace.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- NEM2-SDK or CLI
- A text editor or IDE
- An account with XEM

************************
Let’s get into some code
************************

Register your namespace by choosing a name you like. One common option is to use your company's or own name.  In this example, we will register a namespace called ``foo``. 

1. Check if this nampespace name is available.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/namespace/CheckingNamespaceExistence.ts
        :language: typescript
        :lines:  22-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/namespace/CheckingNamespaceExistence.java
        :language: java
        :lines: 34-40

    .. literalinclude:: ../../resources/examples/javascript/namespace/CheckingNamespaceExistence.js
        :language: javascript
        :lines: 23-

    .. literalinclude:: ../../resources/examples/cli/namespace/CheckingNamespaceExistence.sh
        :language: bash
        :start-after: #!/bin/sh

2. Is the namespace available? Try to register it before someone else does it! Announce a :ref:`register namespace transaction<register-namespace-transaction>` with the chosen name and renting duration expressed in blocks.

.. note:: In Catapult, NEM blocks are complete every ``15`` seconds in average.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/namespace/RegisteringANamespace.ts
        :language: typescript
        :lines:  20-
    
    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/namespace/RegisteringANamespace.java
        :language: java
        :lines: 40-59

    .. literalinclude:: ../../resources/examples/javascript/namespace/RegisteringANamespace.js
        :language: javascript
        :lines: 27-

    .. literalinclude:: ../../resources/examples/cli/namespace/RegisteringANamespace.sh
        :language: bash
        :start-after: #!/bin/sh

************
What's next?
************

Now that you have registered your namespace, check how you can :doc:`create mosaics <../mosaic/creating-a-mosaic>`.

When the transaction is confirmed, you can :doc:`register a subnamespace <registering-a-subnamespace>` following the next guide.
