:orphan:

.. post:: 16 Aug, 2018
    :category: Namespace
    :tags: SDK, CLI
    :excerpt: 1
    :nocomments:

########################
Registering a namespace
########################

Create a unique place for your assets.

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.
- Create a new :ref:`account <setup-creating-a-test-account>`.
- Load the account with enough |networkcurrency| to pay for transaction fees.

************************************
Method #01: Using the Desktop Wallet
************************************
1. Click on “**Namespace**” on the left-side menu.

.. figure:: ../../resources/images/screenshots/desktop-register-namespace-1.gif
    :align: center
    :width: 800px

2. Click on the “**Create new namespaces**” tab.

.. figure:: ../../resources/images/screenshots/desktop-register-namespace-2.gif
    :align: center
    :width: 800px

3. Enter information for your new namespace. Click “**Send**”. Verify the information on the popup and enter your wallet password. Click “**Confirm**”.

Note: The name must be unique in the network, and may have a maximum length of 64 characters, and the allowed characters are a, b, c, …, z, 0, 1, 2, …, 9, _ , -.

.. figure:: ../../resources/images/screenshots/desktop-register-namespace-3.gif
    :align: center
    :width: 800px

4. You can check that the namespace has been created by going back to the “Owned namespaces” tab. If you don’t see your namespace, try clicking on the update icon.

.. figure:: ../../resources/images/screenshots/desktop-register-namespace-4.gif
    :align: center
    :width: 800px

*************************
Method #02: Using the SDK
*************************

1. Choose a **unique name** for your namespace. One common option is to use your company's or own name.

2. In this example, we are going to register a namespace named ``foo``. Check if your namespace name is **available**.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/GettingNamespaceInformation.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/namespace/GettingNamespaceInformation.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/namespace/GettingNamespaceInformation.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/namespace/GettingNamespaceInformation.sh
        :language: bash
        :start-after: #!/bin/sh

3. Is the namespace available? Try to register it before someone else does it! Announce a :ref:`NamespaceRegistrationTransaction<namespace-registration-transaction>` with the chosen name and renting duration expressed in blocks.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/RegisteringANamespace.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/namespace/RegisteringANamespace.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

.. note:: To keep the ownership of your namespace, you will have to :doc:`extend its duration before it expires <extending-a-namespace-registration-period>`.

*************************
Method #03: Using the CLI
*************************

.. viewsource:: ../../resources/examples/bash/namespace/RegisteringANamespace.sh
    :language: bash
    :start-after: #!/bin/sh

************
What's next?
************

When the transaction is confirmed, :doc:`register a subnamespace <registering-a-subnamespace>` following the next guide.
