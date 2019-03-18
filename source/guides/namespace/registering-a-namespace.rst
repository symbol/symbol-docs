:orphan:

.. post:: 16 Aug, 2018
    :category: Namespace
    :excerpt: 1
    :nocomments:

########################
Registering a namespace
########################

Register your own :doc:`namespace <../../concepts/namespace>`.

**********
Background
**********

Namespaces allow you to create an on-chain **unique place** for your business and your assets on the NEM blockchain.

A namespace starts with a name that you choose, similar to an internet domain name. If one :doc:`account <../../concepts/account>` creates a namespace, that will appear as unique in the network.

An account can link a registered name (namespace or subnamespace) with an :doc:`account <../../concepts/account>` or a :doc:`mosaic <../../concepts/mosaic>` identifier.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

************************
Let’s get into some code
************************

1. Choose a name you like. One common option is to use your company's or own name. In this example, we will register a namespace called ``foo``.

2. Check if this namespace name is available.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/namespace/CheckingNamespaceExistence.ts
        :caption: |checking-namespace-existence-ts|
        :language: typescript
        :lines:  22-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/namespace/CheckingNamespaceExistence.java
        :caption: |checking-namespace-existence-java|
        :language: java
        :lines: 34-40

    .. literalinclude:: ../../resources/examples/javascript/namespace/CheckingNamespaceExistence.js
        :caption: |checking-namespace-existence-js|
        :language: javascript
        :lines: 23-

    .. literalinclude:: ../../resources/examples/cli/namespace/CheckingNamespaceExistence.sh
        :caption: |checking-namespace-existence-cli|
        :language: bash
        :start-after: #!/bin/sh

3. Is the namespace available? Try to register it before someone else does it! Announce a :ref:`register namespace transaction<register-namespace-transaction>` with the chosen name and renting duration expressed in blocks.

.. note:: A new block completes every ``15`` seconds on average. You will have to renew your namespace before it expires.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/namespace/RegisteringANamespace.ts
        :caption: |registering-a-namespace-ts|
        :language: typescript
        :lines:  20-
    
    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/namespace/RegisteringANamespace.java
        :caption: |registering-a-namespace-java|
        :language: java
        :lines: 40-59

    .. literalinclude:: ../../resources/examples/javascript/namespace/RegisteringANamespace.js
        :caption: |registering-a-namespace-js|
        :language: javascript
        :lines: 27-

    .. literalinclude:: ../../resources/examples/cli/namespace/RegisteringANamespace.sh
        :caption: |registering-a-namespace-cli|
        :language: bash
        :start-after: #!/bin/sh

************
What's next?
************

When the transaction is confirmed, :doc:`register a subnamespace <registering-a-subnamespace>` following the next guide.

.. |checking-namespace-existence-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/namespace/CheckingNamespaceExistence.ts" target="_blank">View Code</a>

.. |checking-namespace-existence-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/namespace/CheckingNamespaceExistence.java" target="_blank">View Code</a>

.. |checking-namespace-existence-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/namespace/CheckingNamespaceExistence.js" target="_blank">View Code</a>

.. |checking-namespace-existence-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/namespace/CheckingNamespaceExistence.sh" target="_blank">View Code</a>

.. |registering-a-namespace-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/namespace/RegisteringANamespace.ts" target="_blank">View Code</a>

.. |registering-a-namespace-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/namespace/RegisteringANamespace.java" target="_blank">View Code</a>

.. |registering-a-namespace-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/namespace/RegisteringANamespace.js" target="_blank">View Code</a>

.. |registering-a-namespace-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/namespace/RegisteringANamespace.sh" target="_blank">View Code</a>