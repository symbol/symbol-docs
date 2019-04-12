:orphan:

.. post:: 18 Aug, 2018
    :category: Multisig Account
    :excerpt: 1
    :nocomments:

#######################################
Creating a multi-level multisig account
#######################################

Create a :doc:`multi-level multisig account <../../concepts/multisig-account>`.

Following this guide you will learn to create the following 3-level multisig account.

.. figure:: ../../resources/images/examples/mlma-complex-1.png
    :align: center
    :width: 750px

    Three-level multisig account example

**********
Background
**********

:doc:`Multisig accounts <../../concepts/multisig-account>` can have as cosignatories other multisig accounts. Multi-level multisig accounts add “AND/OR” logic to multi-signature transactions.

*************
Prerequisites
*************

- Finish :doc:`converting an account to multisig guide <converting-an-account-to-multisig>`
- Know how to :doc:`create accounts <creating-and-opening-an-account>`

************************
Let’s get into some code
************************

1. Create the multisig account #2.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/CreatingAMultilevelMultisigAccount.ts
        :caption:  |creating-a-mlma-ts|
        :language: typescript
        :lines:  31-61

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/CreatingAMultilevelMultisigAccount.java
        :caption:  |creating-a-mlma-java|
        :language: java
        :lines: 39-75

    .. literalinclude:: ../../resources/examples/javascript/account/CreatingAMultilevelMultisigAccount.js
        :caption:  |creating-a-mlma-js|
        :language: javascript
        :lines: 31-61

2. Create the multisig account #3.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/CreatingAMultilevelMultisigAccount.ts
        :caption:  |creating-a-mlma-ts|
        :language: typescript
        :lines:  64-99

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/CreatingAMultilevelMultisigAccount.java
        :caption:  |creating-a-mlma-java|
        :language: java
        :lines: 77-117

    .. literalinclude:: ../../resources/examples/javascript/account/CreatingAMultilevelMultisigAccount.js
        :caption:  |creating-a-mlma-js|
        :language: javascript
        :lines: 64-99

3. Create the multisig account #1.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/CreatingAMultilevelMultisigAccount.ts
        :caption:  |creating-a-mlma-ts|
        :language: typescript
        :lines: 102-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/CreatingAMultilevelMultisigAccount.java
        :caption:  |creating-a-mlma-java|
        :language: java
        :lines: 119-149

    .. literalinclude:: ../../resources/examples/javascript/account/CreatingAMultilevelMultisigAccount.js
        :caption:  |creating-a-mlma-js|
        :language: javascript
        :lines: 102-

************
What's next?
************

If the account #5 initiates an aggregate bonded transaction involving the account #1, which accounts should cosign the transaction?

.. figure:: ../../resources/images/examples/mlma-complex-2.png
    :align: center
    :width: 750px

    Sending an aggregate bonded transaction from a MLMA

.. |creating-a-mlma-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/CreatingAMultilevelMultisigAccount.ts" target="_blank">View Code</a>

.. |creating-a-mlma-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/account/CreatingAMultilevelMultisigAccount.java" target="_blank">View Code</a>

.. |creating-a-mlma-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/account/CreatingAMultilevelMultisigAccount.js" target="_blank">View Code</a>
