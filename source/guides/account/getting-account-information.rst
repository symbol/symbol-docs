:orphan:

.. post:: 18 Aug, 2018
    :category: account
    :excerpt: 1
    :nocomments:
    
###########################
Getting account information
###########################

Get the public key, height, balance and importance of an :doc:`account <../../concepts/account>`.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Text editor or IDE
- NEM2-SDK or CLI

************************
Let’s get into some code
************************

Call ``accountHttp.getAccountInfo``, passing the address and network as a parameter.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/GettingAccountInformation.ts
        :caption: |getting-account-information-ts|
        :language: typescript
        :lines:  21-
    
    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/GettingAccountInformation.java
        :caption: |getting-account-information-java|
        :language: java
        :lines: 33-40

    .. literalinclude:: ../../resources/examples/javascript/account/GettingAccountInformation.js
        :caption: |getting-account-information-js|
        :language: javascript
        :lines: 24-

    .. literalinclude:: ../../resources/examples/cli/account/GettingAccountInformation.sh
        :caption: |getting-account-information-cli|
        :language: bash
        :start-after: #!/bin/sh
    
Can you determine the account's public key?

    publicKey: 'F33152059827EAA4D7D67C6E27A59851AF09FBD0926C35150FA44D2A9A5E4CAA',

Which block was the first one where account address and public key appeared?

    publicKeyHeight: UInt64 { lower: 401575, higher: 0 },
    addressHeight: UInt64 { lower: 288598, higher: 0 },

Does the account have an importance?

    importance: UInt64 { lower: 1100282, higher: 0 },

**Checking account's balance**

Check account's balance using ``mosaicService``. The balance is the amount of the different mosaics stored on the account.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/CheckingBalanceOfAnAccount.ts
        :caption: |checking-balance-account-ts|
        :language: typescript
        :lines:  22-

    .. literalinclude:: ../../resources/examples/javascript/account/CheckingBalanceOfAnAccount.js
        :caption: |checking-balance-account-js|
        :language: javascript
        :lines: 29-

    .. literalinclude:: ../../resources/examples/cli/account/CheckingBalanceOfAnAccount.sh
        :caption: |checking-balance-account-cli|
        :language: bash
        :start-after: #!/bin/sh

************
What’s next?
************

Retrieve the balance by only filtering XEM amount.

.. |getting-account-information-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/GettingAccountInformation.ts" target="_blank">View Code</a>

.. |getting-account-information-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/account/GettingAccountInformation.java" target="_blank">View Code</a>

.. |getting-account-information-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/account/GettingAccountInformation.js" target="_blank">View Code</a>

.. |getting-account-information-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/account/GettingAccountInformation.sh" target="_blank">View Code</a>

.. |checking-balance-account-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/CheckingBalanceOfAnAccount.ts" target="_blank">View Code</a>

.. |checking-balance-account-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/account/CheckingBalanceOfAnAccount.js" target="_blank">View Code</a>

.. |checking-balance-account-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/account/CheckingBalanceOfAnAccount.sh" target="_blank">View Code</a>
