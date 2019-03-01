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

************************
Let’s get into some code
************************

An account is a key pair (private and public key) associated with a mutable state stored in the NEM blockchain.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/CreatingAnAccount.ts
        :caption: |creating-an-account-ts|
        :language: typescript
        :lines:  23-

    .. literalinclude:: ../../resources/examples/javascript/account/CreatingAnAccount.js
        :caption: |creating-an-account-js|
        :language: javascript
        :lines: 23-

    .. literalinclude:: ../../resources/examples/cli/account/CreatingAnAccount.sh
        :caption: |creating-an-account-cli|
        :language: bash
        :start-after: #!/bin/sh

The **private key** uniquely identifies a NEM account and holds all of its power. It is a priority to make sure it is stored safely somewhere **offline** and not to share it with anyone.

The **public key** is cryptographically derived from the private key and safe to be shared. In spite of that, it is preferable to share the **address**, which contains further information such as network and validity check.

If you already have a private key, it is not necessary to generate a new account:

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/OpeningAnAccount.ts
        :caption: |opening-an-account-ts|
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/CreatingAnAccount.java
        :caption: |opening-an-account-java|
        :language: java
        :lines: 31-34

    .. literalinclude:: ../../resources/examples/javascript/account/OpeningAnAccount.js
        :caption: |opening-an-account-js|
        :language: javascript
        :lines: 23-

**Using a Wallet**

If the programming language of the SDK you are using allows client-side development, you can create a  wallet.

A wallet enables you to store your account to sign transactions, encrypting your private key with a password.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/CreatingAnAccountWallet.ts
        :caption: |creating-a-wallet-ts|
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/javascript/account/CreatingAnAccountWallet.js
        :caption: |creating-a-wallet-js|
        :language: javascript
        :lines: 24-

    .. literalinclude:: ../../resources/examples/cli/account/CreatingAnAccountWallet.sh
        :caption: |creating-a-wallet-cli|
        :language: bash
        :start-after: #!/bin/sh

Do you have a private key? You can create and open a wallet importing your private key.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/OpeningAnAccountWallet.ts
        :caption: |opening-a-wallet-ts|
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/javascript/account/OpeningAnAccountWallet.js
        :caption: |opening-a-wallet-js|
        :language: javascript
        :lines: 24-
        
    .. literalinclude:: ../../resources/examples/cli/account/OpeningAnAccountWallet.sh
        :caption: |opening-a-wallet-cli|
        :language: bash
        :start-after: #!/bin/sh

.. |creating-an-account-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/CreatingAnAccount.ts" target="_blank">View Code</a>

.. |creating-an-account-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/account/CreatingAnAccount.js" target="_blank">View Code</a>

.. |creating-an-account-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/account/CreatingAnAccount.sh" target="_blank">View Code</a>

.. |opening-an-account-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/OpeningAnAccount.ts" target="_blank">View Code</a>

.. |opening-an-account-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/account/CreatingAnAccount.java" target="_blank">View Code</a>

.. |opening-an-account-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/account/OpeningAnAccount.js" target="_blank">View Code</a>

.. |creating-a-wallet-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/CreatingAnAccountWallet.ts" target="_blank">View Code</a>

.. |creating-a-wallet-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/account/CreatingAnAccountWallet.js" target="_blank">View Code</a>

.. |creating-a-wallet-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/account/CreatingAnAccountWallet.sh" target="_blank">View Code</a>

.. |opening-a-wallet-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/OpeningAnAccountWallet.ts" target="_blank">View Code</a>

.. |opening-a-wallet-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/account/OpeningAnAccountWallet.js" target="_blank">View Code</a>

.. |opening-a-wallet-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/account/OpeningAnAccountWallet.sh" target="_blank">View Code</a>
