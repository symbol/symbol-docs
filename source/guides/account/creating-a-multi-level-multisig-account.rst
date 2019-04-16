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

:doc:`Multisig accounts <../../concepts/multisig-account>` can have as cosignatories other multisig accounts and add “AND/OR” logic to multi-signature transactions.


*************
Prerequisites
*************

- Finish :doc:`converting an account to multisig guide <converting-an-account-to-multisig>`
- Know how to :doc:`create accounts <creating-and-opening-an-account>`

************************
Let’s get into some code
************************

1. Define the multisig account #2.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/CreatingAMultilevelMultisigAccount.ts
        :caption:  |creating-a-mlma-ts|
        :language: typescript
        :lines:  38-60

    .. literalinclude:: ../../resources/examples/javascript/account/CreatingAMultilevelMultisigAccount.js
        :caption:  |creating-a-mlma-js|
        :language: javascript
        :lines: 38-60

2. Define the multisig account #3.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/CreatingAMultilevelMultisigAccount.ts
        :caption:  |creating-a-mlma-ts|
        :language: typescript
        :lines:  63-92

    .. literalinclude:: ../../resources/examples/javascript/account/CreatingAMultilevelMultisigAccount.js
        :caption:  |creating-a-mlma-js|
        :language: javascript
        :lines: 63-92

3. Define the multisig account #1.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/CreatingAMultilevelMultisigAccount.ts
        :caption:  |creating-a-mlma-ts|
        :language: typescript
        :lines: 95-115

    .. literalinclude:: ../../resources/examples/javascript/account/CreatingAMultilevelMultisigAccount.js
        :caption:  |creating-a-mlma-js|
        :language: javascript
        :lines: 95-115

4. Announce the transactions together using an :ref:`aggregate bonded transaction <aggregate-transaction>`. Make sure that the account #1 owns at least ``10`` cat.currency.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/CreatingAMultilevelMultisigAccount.ts
        :caption:  |creating-a-mlma-ts|
        :language: typescript
        :lines: 118-

    .. literalinclude:: ../../resources/examples/javascript/account/CreatingAMultilevelMultisigAccount.js
        :caption:  |creating-a-mlma-js|
        :language: javascript
        :lines: 118-

5. The cosignatories must opt-in to become cosignatories. :doc:`Cosign the announced aggregate transaction <../transaction/signing-announced-aggregate-bonded-transactions>` with the accounts #5, #6, #7, #8, and #4.


.. code-block:: bash

    $> nem2-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile <account>

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
