:orphan:

.. post:: 16 Aug, 2018
    :category: Multisig Account
    :excerpt: 1
    :nocomments:


#################################
Converting an account to multisig
#################################

Create a 1-of-2 :doc:`multisig account<../../concepts/multisig-account>`.

**********
Background
**********

Alice and Bob live together and have separate :doc:`accounts <../../concepts/account>`. They also have a shared account used to buy groceries. If Bob is out shopping, he can buy groceries for both himself and Alice.

This shared account appears in NEM as 1-of-2 multisig, meaning that one cosignatory needs to cosign the transaction to be included in a block.

.. figure:: ../../resources//images/examples/multisig-1-of-2.png
    :align: center
    :width: 350px

    1-of-2 multisig account example

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
        :lines:  39-49

    .. literalinclude:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :caption: |converting-an-account-to-multisig-js|
        :language: javascript
        :lines: 39-49

2. Create a :ref:`modify multisig account transaction <modify-multisig-account-transaction>`  to convert the account into a multisig account. As they need a 1-of-2 multisig account, set the minimum signatures required to 1.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :caption: |converting-an-account-to-multisig-ts|
        :language: typescript
        :lines: 52-65

    .. literalinclude:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :caption: |converting-an-account-to-multisig-js|
        :language: javascript
        :lines: 52-65

3. Create an :ref:`aggregate bonded transaction <aggregate-transaction>`, wrapping the modify multisig account transaction. This is necessary since Alice and Bob must opt-in to become cosignatories of the new multisig account.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :caption: |converting-an-account-to-multisig-ts|
        :language: typescript
        :lines: 68-71

    .. literalinclude:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :caption: |converting-an-account-to-multisig-js|
        :language: javascript
        :lines: 68-71

4. Sign the aggregate transaction using the private key of the multisig account.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :caption: |converting-an-account-to-multisig-ts|
        :language: typescript
        :lines: 73-74

    .. literalinclude:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :caption: |converting-an-account-to-multisig-js|
        :language: javascript
        :lines: 73-74

5. Before sending an aggregate bonded transaction, the future multisig account needs to :ref:`lock <hash-lock-transaction>` at least ``10`` cat.currency. This transaction is required to prevent network spamming and ensure that the inner transactions are cosigned. After the hash lock transaction has been confirmed, announce the aggregate transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :caption: |converting-an-account-to-multisig-ts|
        :language: typescript
        :lines: 77-

    .. literalinclude:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :caption: |converting-an-account-to-multisig-js|
        :language: javascript
        :lines: 77-


6. :doc:`Cosign the aggregate transaction <../transaction/signing-announced-aggregate-bonded-transactions>` with Alice's account.

.. code-block:: bash

    $> nem2-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile alice

7. :doc:`Cosign the aggregate transaction <../transaction/signing-announced-aggregate-bonded-transactions>` with Bob's account.

.. code-block:: bash

    $> nem2-cli transaction cosign --hash A6A374E66B32A3D5133018EFA9CD6E3169C8EEA339F7CCBE29C47D07086E068C --profile bob

.. _guide-get-multisig-account-info:

8. If everything goes well, the account is now multisig, being Alice and Bob cosignatories. You can get the list of the multisig accounts where Alice or Bob are cosignatories using ``getMultisigAccountInfo`` function.

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
