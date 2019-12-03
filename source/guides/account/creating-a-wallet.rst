:orphan:

.. post:: 17 Aug, 2018
    :category: Account
    :excerpt: 1
    :nocomments:

#################
Creating a wallet
#################

How to set up a new wallet.

**********
Background
**********

A **wallet** enables you to store your account to sign transactions, **encrypting your private key** with a password.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`

*************************
Method #01: Using the SDK
*************************

If the programming language of the SDK you are using allows **client-side** development, you will be able to create a wallet.

Open a new file and run the following code snippet to create a new wallet.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/CreatingAnAccountWallet.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/account/CreatingAnAccountWallet.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/account/CreatingAnAccountWallet.sh
        :language: bash
        :start-after: #!/bin/sh

If you already have a private key, you can use it to define a new ``SimpleWallet`` object.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/OpeningAnAccountWallet.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/account/OpeningAnAccountWallet.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

*************************
Method #02: Using the CLI
*************************

In NEM2-CLI, wallets are named **profiles**.

.. note:: Use NEM2-CLI only for testing and development purposes, as the private keys stored are not encrypted.

Create a new wallet with the following command:

.. viewsource:: ../../resources/examples/bash/account/CreatingAnAccountWallet.sh
    :language: bash
    :start-after: #!/bin/sh

If you already have a private key, you can store it as a profile.

.. viewsource:: ../../resources/examples/bash/account/OpeningAnAccountWallet.sh
    :language: bash
    :start-after: #!/bin/sh

