:orphan:

.. post:: 16 Aug, 2018
    :category: Multisig Account
    :excerpt: 1
    :nocomments:


#################################
Converting an account to multisig
#################################

Create a 1-of-2 :doc:`multisig account<../../concepts/multisig-account>`, by adding two cosignatories.

**********
Background
**********

Alice and Bob live together and have separate :doc:`accounts <../../concepts/account>`. They also have a shared account used to buy groceries. If Bob is out shopping, he can buy groceries for both himself and Alice.

This shared account appears in NEM as 1-of-2 multisig, meaning that one cosignatory needs to cosign the transaction to be included in a block.

.. figure:: ../../resources//images/examples/multisig-1-of-2.png
    :align: center
    :width: 350px

    1-of-2 multisig account example

Remember that a multisig account has cosignatories accounts, and it cannot start transactions itself. Only the cosignatories can initiate transactions.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`
- Create :doc:`two accounts <creating-and-opening-an-account>`

************************
Let’s get into some code
************************

1. Define who will be the cosignatories of the multisig account: Alice and Bob addresses. Then, open the account that will be converted into multisig by providing its private key.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :caption: |converting-an-account-to-multisig-ts|
        :language: typescript
        :lines:  31-39
    
    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ConvertingAnAccountToMultisig.java
        :caption: |converting-an-account-to-multisig-java|
        :language: java
        :lines: 39-49

    .. literalinclude:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :caption: |converting-an-account-to-multisig-js|
        :language: javascript
        :lines: 30-38

2. Define a :ref:`modify multisig account transaction <modify-multisig-account-transaction>`  to convert the account into a multisig account. As they need a 1-of-2 multisig account, set the minimum signatures required to 1.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :caption: |converting-an-account-to-multisig-ts|
        :language: typescript
        :lines: 42-55

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ConvertingAnAccountToMultisig.java
        :caption: |converting-an-account-to-multisig-java|
        :language: java
        :lines: 51-67

    .. literalinclude:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :caption: |converting-an-account-to-multisig-js|
        :language: javascript
        :lines: 41-54

3. Sign and announce the transaction with the candidate multisig account private key.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :caption: |converting-an-account-to-multisig-ts|
        :language: typescript
        :lines: 58-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ConvertingAnAccountToMultisig.java
        :caption: |converting-an-account-to-multisig-java|
        :language: java
        :lines: 68-70

    .. literalinclude:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :caption: |converting-an-account-to-multisig-js|
        :language: javascript
        :lines: 57-

.. _guide-get-multisig-account-info:

If everything goes well, Alice and Bob should be cosignatories of the multisig account.

.. note:: You could also get the list of the multisig accounts where Alice or Bob are cosignatories using ``getMultisigAccountInfo`` function.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/GettingMultisigAccountCosignatories.ts
        :caption: |getting-multisig-account-cosignatories-ts|
        :language: typescript
        :lines: 20-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/GettingMultisigAccountInformation.java
        :caption: |getting-multisig-account-cosignatories-java|
        :language: java
        :lines: 18-27

    .. literalinclude:: ../../resources/examples/javascript/account/GettingMultisigAccountCosignatories.js
        :caption: |getting-multisig-account-cosignatories-js|
        :language: javascript
        :lines: 24-


************
What's next?
************

Alice an Bob wants to send transactions from the multisig only when both agree. Modify the multisig account you just created, converting it into a 2-of-2 multisig following :doc:`modifying a multisig account <modifying-a-multisig-account>` guide.

.. |converting-an-account-to-multisig-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts" target="_blank">View Code</a>

.. |converting-an-account-to-multisig-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/account/ConvertingAnAccountToMultisig.java" target="_blank">View Code</a>

.. |converting-an-account-to-multisig-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/account/ConvertingAnAccountToMultisig.js" target="_blank">View Code</a>

.. |getting-multisig-account-cosignatories-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/GettingMultisigAccountCosignatories.ts" target="_blank">View Code</a>

.. |getting-multisig-account-cosignatories-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/account/GettingMultisigAccountInformation.java" target="_blank">View Code</a>

.. |getting-multisig-account-cosignatories-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/account/GettingMultisigAccountCosignatories.js" target="_blank">View Code</a>
