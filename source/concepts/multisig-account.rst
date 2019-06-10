################
Multisig Account
################

Editable on-chain contracts, the most powerful way to secure funds and enable joint accounts.

*************
Cosignatories
*************

A NEM :doc:`account <account>` can be :doc:`converted to multisig <../guides/account/converting-an-account-to-multisig>`. The cosignatories - other accounts - of the multisig will become the account managers.

From that moment on,  the multisig account cannot announce transactions by itself. One of the cosignatory has to propose the transaction involving the multisig, wrapping it in an :doc:`aggregate transaction <aggregate-transaction>`. To record the transaction in the block, the other cosignatories will have to agree.

****************************
Minimum approval and removal
****************************

It is not always necessary to force all cosignatories to cosign transactions associated with the multisig account. NEM allows to set up the minimum number of cosignatory agreements. These properties can be :ref:`edited <guide-modify-a-multisig-account-min-approval>` afterward to suit almost all needs.

NEM's current implementation of multisig is *"M-of-N"*. This means that M can be any number equal to or less than N, i.e., 1-of-4, 2-of-2, 4-of-9, 9-of-10 and so on.

Similarly, cosignatories can :ref:`invite other accounts to take part in the multisig <guide-modify-a-multisig-account-add-new-cosignatory>`, or  :ref:`propose to remove others <guide-modify-a-multisig-account-removing-a-cosignatory>` when the defined conditions are fulfilled.

.. note:: Multisig accounts are a powerful tool, but please use this tool with caution.  If the cosignatories keys get lost and minimum approval is not reached, it would result in the permanent loss of access to the funds held by the multisig account. Choose wisely ``minimum removal`` parameter to avoid this situation.

***********
Constraints
***********

Some important considerations to keep in mind:

* Multisig accounts can have up to ``10`` cosignatories.

* An account can be cosigner of up to ``5`` multisig accounts.

* Multisig accounts can have as a cosigner another multisig, up to ``3`` levels. Multi-level multisig accounts add “AND/OR” logic to multi-signature transactions.

* :ref:`Multisig modification transactions <modify-multisig-account-transaction>` must be wrapped in an :doc:`aggregate transaction <aggregate-transaction>`. New cosignatories added to the multisig must opt-in by cosigning the aggregate.

********
Examples
********

There is a broad range of useful applications for multisig accounts. Let's take a look at some of the most common use cases.

Shared accounts
===============

Several families are members of the local philatelist society and use a shared account to buy stamps.

To ensure that all agree on which old stamps they should buy and on the right price, they use a multisig account. This way, all members of the society need to approve the transaction before it is included in the blockchain.

.. figure:: ../resources/images/examples/multisig-2-of-3.png
    :align: center
    :width: 350px

    M-of-N multisig account

Multi-factor authorization
==========================

Alice wants to make sure her funds are not compromised in any way. Therefore she sets up a multisig account with her funds and attaches two accounts (signer accounts) to control her multisig account as a form of 2-factor authentication.

Both of her signer accounts need to approve the transaction, and her signer accounts are located on different computer platforms with different passwords. This means that even if an evil hacker or virus should compromise one of her accounts, the funds are still kept secure.

.. figure:: ../resources/images/examples/multisig-multifactor-auth.png
    :align: center
    :width: 300px

    Multi-factor authorization using multisig accounts

Assets ownership
================

Multisig accounts can be used to represent the ownership of assets.


A company could create a 1-of-1 multisig account for each of their products, adding themselves as the cosignatory. When the company sells the product to Alice, she becomes the owner through the action of being added as the cosigner, and the company is removed in the same transaction.

.. figure:: ../resources/images/examples/multisig-asset-ownership.png
    :align: center
    :width: 300px

    Transferring an account

Manufacturing and supply chains
===============================

In this example, a manufacturer is shipping a pharmaceutical product.

The product receives its quality approval :doc:`mosaic <mosaic>` only when its blockchain record shows it has a production date, safety inspection, and was shipped at the correct temperature.

Sensors in the shipping container report temperature data every 5 minutes and consolidate it into a daily report.

.. figure:: ../resources/images/examples/mlma-supply-chain.png
    :align: center
    :width: 750px

    Manufacturing and Supply Chains

Fraud Detection
===============

This example shows how a high-security account can be made easier to use.

Transactions are only approved from a hardware wallet OR your phone AND a fraud detection AI. MLMA allows a variety of security configurations at the protocol level to keep businesses and their customers hack-free.

.. figure:: ../resources/images/examples/mlma-fraud-detection.png
    :align: center
    :width: 550px

    Fraud Detection

******
Guides
******

.. postlist::
    :category: Multisig Account
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

*******
Schemas
*******

.. note:: Configuration parameters are `editable <https://github.com/nemtech/catapult-server/blob/master/resources/config-network.properties>`_ . Public network configuration may differ.

.. _modify-multisig-account-transaction:

ModifyMultisigTransaction
=========================

Announce a modify multisig account transaction to:

a) Transform an account to multisig account.
b) Change the configurable properties of a multisig account.
c) Add or delete cosignatories from a multisig account.

**Version**: 0x03

**Entity type**: 0x4155

**Inlines**:

* :ref:`Transaction <transaction>` or :ref:`EmbeddedTransaction <embedded-transaction>`

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    minRemovalDelta; int8; The number of signatures needed to remove a cosignatory. If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories.
    minApprovalDelta; int8; The number of signatures needed to approve a transaction. If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories.
    modificationsCount; uint8; The number of modifications.
    modification; array(:ref:`CosignatoryModification <cosignatory-modification>`, modificationsCount); The array of cosignatory :doc:`accounts <account>` to add or delete.

.. _cosignatory-modification:

CosignatoryModification
=======================

.. csv-table::
    :header: "Property", "Type", "Description"
    :delim: ;

    modificationType; :ref:`CosignatoryModificationType <cosignatory-modification-type>`; The cosignatory modification type.
    cosignatoryPublicKey; 32 bytes (binary); The public key of the cosignatory.

.. _cosignatory-modification-type:

CosignatoryModificationType
===========================

Enumeration: uint8

.. csv-table::
    :header: "Id", "Description"
    :delim: ;

    0; Add cosignatory.
    1; Remove cosignatory.
