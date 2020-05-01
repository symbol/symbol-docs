:orphan:

.. post:: 17 Aug, 2018
    :category: Multisig Account
    :tags: SDK
    :excerpt: 1
    :nocomments:

#########################################
Removing a signer from a multisig account
#########################################

This guide will show you how to remove a cosignatory from a multisig account.

.. _guide-modify-a-multisig-account-removing-a-cosignatory:

*************
Prerequisites
*************

- Complete :doc:`converting an account to multisig <creating-a-multisig-account>` guide.

*************************
Method #01: Using the SDK
*************************

The following code shows how to remove a cosignatory from a **2-of-3** multisig account with ``minRemoval`` set to 1.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountRemoveCosignatory.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/multisig/ModifyingAMultisigAccountRemoveCosignatory.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

.. note:: The **minRemoval parameter** indicates the number of required signatures to delete an account from the multisig. This value can be increased or decreased in the same way as the :doc:`minApproval parameter <modifying-a-multisig-account-min-approval>` is modified.

This time, the MultisigModificationTransaction is wrapped in an **AggregateCompleteTransaction** because just one account is required to delete others from the multisig.

.. note:: If more than one cosignature is required to announce the transaction (e.g., ``minRemoval`` is set to 2), the transaction must be defined as aggregate **bonded**, and all other required multisig participants should cosign it in order to be confirmed. Follow the :doc:`next guide <../aggregate/sending-a-multisig-transaction>` to announce aggregate bonded transactions involving a multisig account.

Follow :doc:`the next guide <creating-a-multilevel-multisig-account>` to create a multi-level multisig account.
