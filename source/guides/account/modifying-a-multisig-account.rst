:orphan:

############################
Modifying a multisig account
############################

After reviewing this guide, you will learn how to modify an existing :doc:`multisig account<../../concepts/multisig-account>`.

Specifically, you are going to convert a 1-of-2 into a 2-of-2 multisig account.

.. figure:: ../../resources/images/guides-accounts-multisig-2-of-2.png
    :align: center
    :width: 350px

    2-of-2 multisig account example

Then, you will add a new cosignatory, becoming a 2-of-3.

.. figure:: ../../resources/images/guides-accounts-multisig-2-of-3.png
    :align: center
    :width: 350px

    2-of-3 multisig account example

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

Alice and Bob are cosignatories of the 1-of-2 multisig account.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountIncreaseMinApproval.ts
        :language: typescript
        :lines:  30-36

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountIncreaseMinApproval.java
        :language: java
        :lines: 42-46

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountIncreaseMinApproval.js
        :language: javascript
        :lines: 30-36


One of them, announces a :ref:`modify multisig account transaction <modify-multisig-account-transaction>` wrapped in an :ref:`aggregate transaction <aggregate-transaction>`.

1) Create a modify multisig account transaction,  increasing ``minAprovalDelta`` in one unit.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountIncreaseMinApproval.ts
        :language: typescript
        :lines:  39-44

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountIncreaseMinApproval.java
        :language: java
        :lines: 47-54

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountIncreaseMinApproval.js
        :language: javascript
        :lines: 39-44

2) Wrap the modify multisig account transaction under an aggregate transaction, attaching multisig public key as the signer.

An aggregate transaction is *complete* if before announcing it to the network, all required cosignatories have signed it. If valid, it will be included in a block.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountIncreaseMinApproval.ts
        :language: typescript
        :lines:  47-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountIncreaseMinApproval.java
        :language: java
        :lines: 56-66

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountIncreaseMinApproval.js
        :language: javascript
        :lines: 47-

Announce the aggregate transaction.

**Adding a new cosignatory**

Suddenly, Alice and Bob want to add Carol as a cosignatory of the multisig account.

Alice creates a :ref:`modify multisig account transaction <modify-multisig-account-transaction>` adding in a ``MultisigCosignatoryModification`` Carol as a cosignatory.

1) Create a multisig cosignatory modification:

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :lines:  36-49

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountAddCosignatory.java
        :language: java
        :lines: 42-54

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountAddCosignatory.js
        :language: javascript
        :lines:  36-49

2) Create a modify multisig account transaction:

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :lines:  52-57

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountAddCosignatory.java
        :language: java
        :lines: 56-62

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountAddCosignatory.js
        :language: javascript
        :lines:  52-57

3) Create an aggregate bonded transaction:

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :lines:  60-63

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountAddCosignatory.java
        :language: java
        :lines: 64-70

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountAddCosignatory.js
        :language: javascript
        :lines:  60-63

Before sending an aggregate bonded transaction, Alice needs to lock at least ``10`` XEM. This mechanism is required to prevent network spamming and ensure that transactions are cosigned. Once Bob cosigns the transaction, the amount of XEM becomes available again on Alice's account.

After lock funds transaction has been confirmed, Alice announces the aggregate transaction.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountAddCosignatory.ts
        :language: typescript
        :lines:  68-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountAddCosignatory.java
        :language: java
        :lines: 72-93

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountAddCosignatory.js
        :language: javascript
        :lines: 68-

************
What’s next?
************

Bob didn't cosign the transaction yet. Follow :doc:`signing announced aggregate bonded transactions guide<../transaction/signing-announced-aggregate-bonded-transactions>`.

Once you have finished this guide, try to delete a cosignatory from the multisig. Notice that multisig accounts can be converted again to regular accounts by removing all cosignatories, just make sure you own the multisig private key!

The following shows how to remove a cosignatory of a 2-of-3 multisig account with minimum removal set to 1.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/ModifyingAMultisigAccountRemoveCosignatory.ts
        :language: typescript
        :lines:  31-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/ModifyingAMultisigAccountRemoveCosignatory.java
        :language: java
        :lines: 39-71

    .. literalinclude:: ../../resources/examples/javascript/account/ModifyingAMultisigAccountRemoveCosignatory.js
        :language: javascript
        :lines: 31-