:orphan:

###############################
Creating and opening an account
###############################

You are going to create a new :doc:`account <../../concepts/account>` and open it.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Text editor or IDE
- NEM2-SDK or CLI

************************
Let’s get into some code
************************

An account is a key pair (private and public key) associated to a mutable state stored on the NEM blockchain.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/CreatingAnAccount.ts
        :language: typescript
        :lines:  23-

    .. literalinclude:: ../../resources/examples/javascript/account/CreatingAnAccount.js
        :language: javascript
        :lines: 23-

    .. literalinclude:: ../../resources/examples/cli/account/CreatingAnAccount.sh
        :language: bash
        :start-after: #!/bin/sh

The **private key** uniquely identifies a NEM account, holds all its power.  It is a priority to make sure it is stored safely somewhere **offline** and do not share it with anyone.

The **public key** is cryptographically derived from the private key and safe to be shared. Although that, it is preferable to share the **address**, which contains further information such as network and validity check.

In case you already have a private key, not needing to generate a new account:

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/OpeningAnAccount.ts
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/CreatingAnAccount.java
        :language: java
        :lines: 31-34

    .. literalinclude:: ../../resources/examples/javascript/account/OpeningAnAccount.js
        :language: javascript
        :lines: 23-

**Using a Wallet**

If the programming language of the SDK you are using allows client-side development, you will be able to create a new account by creating a new wallet.

A wallet grants using an account for signing transactions, encrypting your credentials with a password.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/CreatingAnAccountWallet.ts
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/javascript/account/CreatingAnAccountWallet.js
        :language: javascript
        :lines: 24-

    .. literalinclude:: ../../resources/examples/cli/account/CreatingAnAccountWallet.sh
        :language: bash
        :start-after: #!/bin/sh

In case you already have a private key, not needing to generate a new account:

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/OpeningAnAccountWallet.ts
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/javascript/account/OpeningAnAccountWallet.js
        :language: javascript
        :lines: 24-
        
    .. literalinclude:: ../../resources/examples/cli/account/OpeningAnAccountWallet.sh
        :language: bash
        :start-after: #!/bin/sh