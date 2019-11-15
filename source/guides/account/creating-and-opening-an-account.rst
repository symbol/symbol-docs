:orphan:

.. post:: 18 Aug, 2018
    :category: Account
    :excerpt: 1
    :nocomments:

###################
Creating an account
###################

Set up a new NEM account.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`

**********************
Getting into some code
**********************

New account
===========

Run the following code snippet to create an :doc:`account <../../concepts/account>`.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/CreatingAnAccount.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/account/CreatingAnAccount.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/CreatingAnAccount.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/account/CreatingAnAccount.sh
        :language: bash
        :start-after: #!/bin/sh

Account from private key
========================

If you already have a private key, you can load it in an ``Account`` object.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/OpeningAnAccount.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/account/OpeningAnAccount.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/OpeningAnAccount.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

New wallet
==========

A **wallet** enables you to store your account to sign transactions, **encrypting your private key** with a password. Run the following code snippet to create a new wallet.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/CreatingAnAccountWallet.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/account/CreatingAnAccountWallet.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/account/CreatingAnAccountWallet.sh
        :language: bash
        :start-after: #!/bin/sh

Wallet from private key
=======================

Do you have a private key? You can open a wallet importing it.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/OpeningAnAccountWallet.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/account/OpeningAnAccountWallet.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/account/OpeningAnAccountWallet.sh
        :language: bash
        :start-after: #!/bin/sh
