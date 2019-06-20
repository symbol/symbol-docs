:orphan:

.. post:: 18 Aug, 2018
    :category: Account
    :excerpt: 1
    :nocomments:

###############################
Creating and opening an account
###############################

Create a new :doc:`account <../../concepts/account>` and open it.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`

**********************
Getting into some code
**********************

An account is a key pair (private and public key) associated with a mutable state stored in the NEM blockchain.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/CreatingAnAccount.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/account/CreatingAnAccount.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/account/CreatingAnAccount.sh
        :language: bash
        :start-after: #!/bin/sh

The **private key** uniquely identifies a NEM account and holds all of its power. It is a priority to make sure it is stored safely somewhere **offline** and not to share it with anyone.

The **public key** is cryptographically derived from the private key and safe to be shared. In spite of that, it is preferable to share the **address**, which contains further information such as network and validity check.

If you already have a private key, it is not necessary to generate a new account:

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/OpeningAnAccount.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/account/OpeningAnAccount.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

**Using a Wallet**

If the programming language of the SDK you are using allows client-side development, you can create a  wallet.

A wallet enables you to store your account to sign transactions, encrypting your private key with a password.

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

Do you have a private key? You can create and open a wallet importing your private key.

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
