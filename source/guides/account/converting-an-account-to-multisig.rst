:orphan:

#################################
Converting an account to multisig
#################################

The purpose of this guide is to create a 1-of-2 :doc:`multisig account<../../concepts/multisig-account>`, by adding two cosignatories.

**********
Background
**********

Alice and Bob live together and have separate :doc:`accounts <../../concepts/account>`. They also have a shared account so that if Bob is out shopping, he can buy groceries for both himself and Alice.

This shared account is in NEM translated as 1-of-2 multisig, meaning that one cosignatory needs to cosign the transaction to be included in a block.

.. figure:: ../../resources/images/guides-accounts-multisig-1-of-2.png
    :align: center
    :width: 350px

    1-of-2 multisig account example

Remember that a multisig account has cosignatories accounts, and it cannot start transactions itself. Only the cosignatories can initiate transactions.

*************
Prerequisites
*************

- Finish :doc:`creating and opening accounts guide <creating-and-opening-an-account>`
- Text editor or IDE
- NEM2-SDK or CLI
- Two accounts (public keys)
- One account with XEM

************************
Let’s get into some code
************************

The first step is to define who will be the cosignatories of the multisig account. Then, open the account that will be converted into multisig by providing its private key.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :language: typescript
        :lines:  31-39
    
    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ConvertingAnAccountToMultisig.java
        :language: java
        :lines: 39-49

    .. literalinclude:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :language: javascript
        :lines: 30-38

The next step is to convert the account into a multisig account by setting a :ref:`modify multisig account transaction <modify-multisig-account-transaction>`. As it is a 1-of-2 multisig account, set the minimum signatures to 1.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :language: typescript
        :lines: 42-55

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ConvertingAnAccountToMultisig.java
        :language: java
        :lines: 51-67

    .. literalinclude:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :language: javascript
        :lines: 41-54

Finally, multisig account signs and announces the transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ConvertingAnAccountToMultisig.ts
        :language: typescript
        :lines: 58-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ConvertingAnAccountToMultisig.java
        :language: java
        :lines: 68-70

    .. literalinclude:: ../../resources/examples/javascript/account/ConvertingAnAccountToMultisig.js
        :language: javascript
        :lines: 57-

.. _guide-get-multisig-account-info:

If everything goes well, Alice and Bob should be cosignatories of the multisig account.


.. note:: You could also get the list of the multisig accounts where Alice or Bob are cosignatories using ``getMultisigAccountInfo`` method.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/GettingMultisigAccountCosignatories.ts
        :language: typescript
        :lines: 20-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/GettingMultisigAccountInformation.java
        :language: java
        :lines: 18-27

    .. literalinclude:: ../../resources/examples/javascript/account/GettingMultisigAccountCosignatories.js
        :language: javascript
        :lines: 24-


************
What's next?
************
Try to modify the account, converting it into a 2-of-2 multisig following :doc:`modifying a multisig account <modifying-a-multisig-account>` guide.