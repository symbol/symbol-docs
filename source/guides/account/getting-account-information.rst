:orphan:

.. post:: 18 Aug, 2018
    :category: account
    :excerpt: 1
    :nocomments:
    
###########################
Getting account information
###########################

Get the public key and balance of an :doc:`account <../../concepts/account>`.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Text editor or IDE
- NEM2-SDK or CLI

************************
Let’s get into some code
************************

The **public key** identifies your account publicly in the network. Your  **address** is derived from it, which contains further information such as network and validity check.

Get more information about your account passing the address and network as a parameter.

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
    
Can you determine the account's public key? Which was the first block where this account appeared?

**Checking account's balance**

The balance is the amount of the different **mosaics** owned by the account. How many different :doc:`mosaics <../../concepts/mosaic>` does your account own?

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

Retrieve the balance by only `filtering the nem:xem <https://www.learnrxjs.io/operators/filtering/filter.html>`_ amount.

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
