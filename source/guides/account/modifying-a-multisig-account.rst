:orphan:

.. post:: 17 Aug, 2018
    :category: multisig-account
    :excerpt: 1
    :nocomments:

############################
Modifying a multisig account
############################

Modify an existing :doc:`multisig account<../../concepts/multisig-account>`.

First, you are going to turn a 1-of-2 multisig account into a 2-of-2. Then, you will add a new cosignatory, becoming a 2-of-3. After removing a cosignatory, you will know how to perform all sort of modifications to multisig accounts.

*************
Prerequisites
*************

- Finish :doc:`converting an account to multisig guide <converting-an-account-to-multisig>`
- Text editor or IDE
- NEM2-SDK or CLI
- One multisig account

************************
Let’s get into some code
************************

.. _guide-modify-a-multisig-account-min-approval:

**Editing minApproval**

Alice and Bob are cosignatories of the 1-of-2 multisig account. At least one of their account's signatures is required to authorize multisig transactions. In other words, the ``minApproval`` parameter of the multisig is currently set to ``1``.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountIncreaseMinApproval.ts
        :caption: |modifying-a-multisig-account-increase-min-approval-ts|
        :language: typescript
        :lines:  30-36

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountIncreaseMinApproval.java
        :caption: |modifying-a-multisig-account-increase-min-approval-java|
        :language: java
        :lines: 42-46

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountIncreaseMinApproval.js
        :caption: |modifying-a-multisig-account-increase-min-approval-js|
        :language: javascript
        :lines: 30-36


Multisig accounts are editable at the blockchain level. In this case, we want to make both cosignatories required, shifting to a  2-of-2 multisig instead. We could achieve it by increasing ``minApproval`` parameter in one unit.

.. figure:: ../../resources/images/examples/multisig-2-of-2.png
        :align: center
        :width: 350px

        2-of-2 multisig account example


One of the accounts, for example Alice's, announces a :ref:`modify multisig account transaction <modify-multisig-account-transaction>` wrapped in an :ref:`aggregate transaction <aggregate-transaction>`, increasing ``minApprovalDelta``.

1. Create a modify multisig account transaction, increasing minAprovalDelta in one unit.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountIncreaseMinApproval.ts
        :caption: |modifying-a-multisig-account-increase-min-approval-ts|
        :language: typescript
        :lines:  39-44

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountIncreaseMinApproval.java
        :caption: |modifying-a-multisig-account-increase-min-approval-java|
        :language: java
        :lines: 47-54

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountIncreaseMinApproval.js
        :caption: |modifying-a-multisig-account-increase-min-approval-js|
        :language: javascript
        :lines: 39-44

2. Wrap the modify multisig account transaction under an aggregate transaction, attaching multisig public key as the signer.

An aggregate transaction is *complete* if, before announcing it to the network, all required cosignatories have signed it. If valid, it will be included in a block.

As only one cosignature is required (1-of-2), Alice can sign the transaction and announce it to the network.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountIncreaseMinApproval.ts
        :caption: |modifying-a-multisig-account-increase-min-approval-ts|
        :language: typescript
        :lines:  47-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountIncreaseMinApproval.java
        :caption: |modifying-a-multisig-account-increase-min-approval-java|
        :language: java
        :lines: 56-66

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountIncreaseMinApproval.js
        :caption: |modifying-a-multisig-account-increase-min-approval-js|
        :language: javascript
        :lines: 47-

Once confirmed, the minApproval value of the multisig will be set to 2, having our 2-of-2 multisig.

.. note:: If you want to decrease the minApproval parameter, going back to a 1-of-2 multisig, set minApprovalDelta with a negative value. In this case ``-1``.

.. _guide-modify-a-multisig-account-add-new-cosignatory:

**Adding a new cosignatory**

Suddenly, Alice and Bob want to add Carol as a cosignatory of the multisig account to achieve 2-of-3 cosignatures required.

.. figure:: ../../resources/images/examples/multisig-2-of-3.png
        :align: center
        :width: 350px

        2-of-3 multisig account example

Alice creates a :ref:`modify multisig account transaction <modify-multisig-account-transaction>` adding in a ``MultisigCosignatoryModification`` Carol as a cosignatory. The multisig account will become a 2-of-3, as she is not increasing the minApprovalDelta.

1. Create a multisig cosignatory modification:

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountAddCosignatory.ts
        :caption: |modifying-a-multisig-account-add-cosignatory-ts|
        :language: typescript
        :lines:  37-50

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountAddCosignatory.java
        :caption: |modifying-a-multisig-account-add-cosignatory-java|
        :language: java
        :lines: 42-54

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountAddCosignatory.js
        :caption: |modifying-a-multisig-account-add-cosignatory-js|
        :language: javascript
        :lines:  39-52

2. Create a modify multisig account transaction:

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountAddCosignatory.ts
        :caption: |modifying-a-multisig-account-add-cosignatory-ts|
        :language: typescript
        :lines:  53-58

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountAddCosignatory.java
        :caption: |modifying-a-multisig-account-add-cosignatory-java|
        :language: java
        :lines: 56-62

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountAddCosignatory.js
        :caption: |modifying-a-multisig-account-add-cosignatory-js|
        :language: javascript
        :lines:  55-60

3. Create an aggregate bonded transaction. The transaction is *aggregate bonded* because more than one cosignature is required:

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountAddCosignatory.ts
        :caption: |modifying-a-multisig-account-add-cosignatory-ts|
        :language: typescript
        :lines:  61-66

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountAddCosignatory.java
        :caption: |modifying-a-multisig-account-add-cosignatory-java|
        :language: java
        :lines: 64-70

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountAddCosignatory.js
        :caption: |modifying-a-multisig-account-add-cosignatory-js|
        :language: javascript
        :lines:  63-68

4. Before sending an aggregate bonded transaction, Alice needs to lock at least ``10`` XEM. This mechanism is required to prevent network spamming and ensure that transactions are cosigned. After hash lock transaction has been confirmed, Alice announces the aggregate transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountAddCosignatory.ts
        :caption: |modifying-a-multisig-account-add-cosignatory-ts|
        :language: typescript
        :lines:  69-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountAddCosignatory.java
        :caption: |modifying-a-multisig-account-add-cosignatory-java|
        :language: java
        :lines: 72-93

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountAddCosignatory.js
        :caption: |modifying-a-multisig-account-add-cosignatory-js|
        :language: javascript
        :lines: 71-

.. note:: The :ref:`listener implementation changes <monitoring-transactions-client-side>` when used on the client side (e.g., Angular, React, Vue).

Once Bob :doc:`cosigns the transaction<../transaction/signing-announced-aggregate-bonded-transactions>`, the amount of XEM locked becomes available again on Alice's account and Carol is added to the multisig.

.. _guide-modify-a-multisig-account-removing-a-cosignatory:

**Removing a cosignatory**

Once you have finished this guide,  delete a cosignatory from the multisig. Multisig accounts can be converted again into regular accounts by removing all cosignatories. Make sure you own the multisig private key!

The following code shows how to remove a cosignatory of a 2-of-3 multisig account with ``minRemoval`` set to 1. The multisig modification transaction is wrapped in an aggregate complete, as only one person is required to delete others from the multisig.

.. note:: The minRemoval parameter indicates the number of required signatures to delete someone from the multisig. You can increase or decrease it the same way you :ref:`modify minApproval parameter<guide-modify-a-multisig-account-min-approval>`.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountRemoveCosignatory.ts
        :caption: |modifying-a-multisig-account-remove-cosignatory-ts|
        :language: typescript
        :lines:  31-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountRemoveCosignatory.java
        :caption: |modifying-a-multisig-account-remove-cosignatory-java|
        :language: java
        :lines: 39-71

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountRemoveCosignatory.js
        :caption: |modifying-a-multisig-account-remove-cosignatory-js|
        :language: javascript
        :lines: 31-

************
What’s next?
************

Learn more about :doc:`multi-level multisig accounts <creating-a-multi-level-multisig-account>`.

.. |modifying-a-multisig-account-increase-min-approval-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/ModifyingAMultisigAccountIncreaseMinApproval.ts" target="_blank">View Code</a>

.. |modifying-a-multisig-account-increase-min-approval-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountIncreaseMinApproval.java" target="_blank">View Code</a>

.. |modifying-a-multisig-account-increase-min-approval-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/account/ModifyingAMultisigAccountIncreaseMinApproval.js" target="_blank">View Code</a>

.. |modifying-a-multisig-account-add-cosignatory-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/ModifyingAMultisigAccountAddCosignatory.ts" target="_blank">View Code</a>

.. |modifying-a-multisig-account-add-cosignatory-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountAddCosignatory.java" target="_blank">View Code</a>

.. |modifying-a-multisig-account-add-cosignatory-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/account/ModifyingAMultisigAccountAddCosignatory.js" target="_blank">View Code</a>

.. |modifying-a-multisig-account-remove-cosignatory-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/ModifyingAMultisigAccountRemoveCosignatory.ts" target="_blank">View Code</a>

.. |modifying-a-multisig-account-remove-cosignatory-java| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountRemoveCosignatory.java" target="_blank">View Code</a>

.. |modifying-a-multisig-account-remove-cosignatory-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/account/ModifyingAMultisigAccountRemoveCosignatory.js" target="_blank">View Code</a>
