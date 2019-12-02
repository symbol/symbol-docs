:orphan:

.. post:: 16 Aug, 2018
    :category: Namespace
    :excerpt: 1
    :nocomments:

########################
Registering a namespace
########################

Create a unique place for your assets.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with cat.currency <setup-creating-a-test-account>`

*************************
Method #01: Using the SDK
*************************

1. Choose a **unique name** for your namespace. One common option is to use your company's or own name.

2. In this example, we are going to register a namespace named ``foo``. Check if your namespace name is **available**.

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

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/RegisteringANamespace.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/namespace/RegisteringANamespace.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

.. note:: To keep the ownership of your namespace, you will have to :doc:`extend its duration before it expires <extending-a-namespace-registration-period>`.

*************************
Method #02: Using the CLI
*************************

.. viewsource:: ../../resources/examples/bash/namespace/RegisteringANamespace.sh
    :language: bash
    :start-after: #!/bin/sh

************
What's next?
************

When the transaction is confirmed, :doc:`register a subnamespace <registering-a-subnamespace>` following the next guide.
