:orphan:

.. post:: 16 Aug, 2018
    :category: Namespace
    :excerpt: 1
    :nocomments:

########################
Registering a namespace
########################

Create a unique place for your assets.

**********
Background
**********

:doc:`Namespaces <../../concepts/namespace>` allow you to create an on-chain **unique place** for your business and your assets on the NEM blockchain.

A namespace starts with a name you choose, similar to an internet domain name. If one :doc:`account <../../concepts/account>` creates a namespace, this will appear as unique in the network.

An account can use the registered namespaces to alias :doc:`addresses <../../concepts/account>` or :doc:`mosaics <../../concepts/mosaic>` identifiers.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

**********************
Getting into some code
**********************

1. Choose a **unique name** for your namespace. One common option is to use your company's or own name.
For this example, we are going to register a namespace named ``foo``.

2. Check if your namespace name is **available**.

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

3. Is the namespace available? Try to register it before someone else does it! Announce a :ref:`NamespaceRegistrationTransaction<namespace-registration-transaction>` with the chosen name and renting duration expressed in blocks.

.. note:: A new block completes every ``15`` seconds on average. Also, the maximum duration you can register a namespace for is ``a year``.

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

To keep the ownership of your namespace, you will have to :doc:`extend its duration before it expires <extending-a-namespace-registration-period>`.

************
What's next?
************

When the transaction is confirmed, :doc:`register a subnamespace <registering-a-subnamespace>` following the next guide.
