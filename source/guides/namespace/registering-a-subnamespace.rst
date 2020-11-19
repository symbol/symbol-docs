.. post:: 18 Aug, 2018
    :category: Namespace
    :tags: wallet, SDK, CLI
    :excerpt: 1
    :nocomments:

#######################
Creating a subnamespace
#######################

Once you have a registered root :doc:`namespace <../../concepts/namespace>`, you can create up to ``3`` levels of subnamespaces to organize your assets.

*************
Prerequisites
*************

- Complete :doc:`registering a namespace <registering-a-namespace>` guide.
- Register a :doc:`namespace <../../concepts/namespace>` with an account.

************************************
Method #01: Using the Desktop Wallet
************************************

1. Click on "**Namespace**" on the left-side menu. Go to the "**Create subnamespaces**" tab.

.. figure:: ../../resources/images/screenshots/desktop-register-subnamespace-1.gif
    :align: center
    :width: 800px

2. Enter information for your subnamespace. Click "**Send**". Verify the information on the popup and enter your wallet password. Click "**Confirm**".

.. figure:: ../../resources/images/screenshots/desktop-register-subnamespace-2.gif
    :align: center
    :width: 800px

3. You can check that the sub namespace has been created by going back to the "**Owned namespaces**" tab. If the subnamespace does not show, try clicking on the update icon.

.. figure:: ../../resources/images/screenshots/desktop-register-subnamespace-3.gif
    :align: center
    :width: 800px

When the subnamespace is created, link the subnamespace with a :doc:`mosaic <../namespace/link-a-namespace-to-a-mosaic>` or :doc:`address <../namespace/link-a-namespace-to-an-address>`.

*************************
Method #02: Using the SDK
*************************

The next code snippet creates a subnamespace called ``bar`` under the namespace ``foo``.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/namespace/RegisteringASubnamespace.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/namespace/RegisteringASubnamespace.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

*************************
Method #03: Using the CLI
*************************

To create a subnamespace, open a terminal window and run the following command.
Replace ``foo`` with the root namespace name and ``bar`` with the new subnamespace to be created.

.. viewsource:: ../../resources/examples/bash/namespace/RegisteringASubnamespace.sh
    :language: bash
    :start-after: #!/bin/sh
