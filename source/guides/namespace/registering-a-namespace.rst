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

**********************
Getting into some code
**********************

1. Choose a name you like. One common option is to use your company's or own name. In this example, we will register a namespace called ``foo``.

2. Check if this namespace name is available.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/CheckingNamespaceExistence.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/namespace/CheckingNamespaceExistence.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/namespace/CheckingNamespaceExistence.sh
        :language: bash
        :start-after: #!/bin/sh

3. Is the namespace available? Try to register it before someone else does it! Announce a :ref:`register namespace transaction<register-namespace-transaction>` with the chosen name and renting duration expressed in blocks.

.. note:: A new block completes every ``15`` seconds on average. You will have to renew your namespace before it expires.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/RegisteringANamespace.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/namespace/RegisteringANamespace.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/namespace/RegisteringANamespace.sh
        :language: bash
        :start-after: #!/bin/sh

************
What's next?
************

When the transaction is confirmed, :doc:`register a subnamespace <registering-a-subnamespace>` following the next guide.
