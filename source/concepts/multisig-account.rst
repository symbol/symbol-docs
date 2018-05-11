################
Multisig Account
################

.. warning:: The configuration presented is NOT intended to be used on the public network. These are the parameters used for the Catapult Testnet version (MIJIN_TEST).

Editable on-chain contracts, the most powerful way to secure funds and enable joint accounts.

A NEM :doc:`account <account>` can be :ref:`converted to multisig <guide-converting-an-account-to-multisig>`. From that moment on, the account cannot announce transactions by itself, requiring other accounts to announce transactions for them.  These other accounts are the multisig ``cosignatories``.

Besides, it is not always necessary to force all cosignatories to cosign the transaction. NEM allows to set up the minimum number of cosignatories agreement. These properties can be edited afterwards to suit almost any needs.

Some important considerations to keep in mind:

* Once you convert an account to a multisig, you can no longer initiate transactions from that account. Only the cosignatories can initiate transactions for the account.

* NEM's current implementation of multisig is *"M-of-N"*, meaning M can be any number equal to or less than N, i.e., 1-of-4, 2-of-2, 4-of-9, 9-of-10 and so on.

* Multisig accounts can have up to ``10`` cosignatories.

* An account can be cosigner of up to ``5`` multisig accounts.

* The number of minimum cosignatures to approve transactions and remove cosignatories is editable.

.. warning:: Multisig accounts are a powerful tool, but please use this tool with caution.  If cosignatories keys get lost, and minimum approval is not reached, this would result in the permanent loss of access to the funds held by the multisig account. Choose wisely ``minimum removal`` parameter to avoid this situation.

******
Fields
******
A multisig account has the following properties:

    **Minimum Approval**

    The number of signatures needed to approve a transaction.

    **Minimum Removal**

    The number of signatures needed to remove a cosignatory.

    **Cosignatories**

    List of :doc:`accounts <account>` enabled to announce and cosign transactions for its approval.


There is a broad range of useful applications for multisig accounts. Let's take a look at some of the common use cases.

1. Alice and Bob live together, they have separate accounts, but they also need a shared account so that if Bob is out shopping, he can buy groceries for both him and Alice.

.. figure:: ../resources/images/concepts-multisig-figure-1.png
    :align: center
    :width: 300px

    M-of-N multisig account example

2. Several families are members of the local philatelist society and use a shared account to buy stamps. To ensure that all agree on which old stamps they should buy and for the right price, they use a multisig account such that all members of the society need to approve a transaction before it can be sent and included in the blockchain as a valid transaction.

.. figure:: ../resources/images/concepts-multisig-figure-2.png
    :align: center
    :width: 350px

    N-of-N multisig account example

3. Security is another critical aspect of multisig accounts. Alice wants to make sure his funds are not compromised in any way. Therefore he sets up a multisig account with his funds and attaches two accounts (signer accounts) to control his multisig account as a form of 2-factor authentication. Both of his signer accounts need to approve the transaction, and his signer accounts are located on different computer platforms with different passwords. This means that even if an evil hacker or virus should compromise one of his accounts, his funds are still kept secure.

.. figure:: ../resources/images/concepts-multisig-figure-3.png
    :align: center
    :width: 300px

    Multi-factor authorization using multisig accounts

4. Multisig accounts can be used to represent the ownership of assets. A company could create a 1-of-1 multisig account for each of their products, adding themselves as the cosignatory. When the company sells the product to Alice, she becomes the owner, being the company removed in the same transaction.

.. figure:: ../resources/images/concepts-multisig-figure-4.png
    :align: center
    :width: 300px

    Transferring an account

************************************
Multi-Level Multisig Accounts (MLMA)
************************************

Multisig accounts can have as a cosigner another multisig, up to ``3`` levels. Multi-level multisig accounts add “AND/OR” logic to multi-signature transactions.

MLMA allow a huge variety of business logic:

1. In this example, a manufacturer is shipping a product such as a pharmaceutical. The product receives its quality approval :doc:`mosaic <mosaic>` only when its blockchain record shows it has a production date, safety inspection, and was shipped at the correct temperature. Sensors in the shipping container report temperature data every 5 minutes and consolidate it into a daily report.

.. figure:: ../resources/images/concepts-mlma-figure-1.png
    :align: center
    :width: 750px

    Manufacturing and Supply Chains


2. This example shows how a high-security account can be made easier to use. Transactions are only approved from a hardware wallet OR your phone AND a fraud detection AI. MLMA allows a variety of security configurations at the protocol level to keep businesses and their customers hack-free.

.. figure:: ../resources/images/concepts-mlma-figure-2.png
    :align: center
    :width: 550px

    Fraud Detection

3. You can set up your account so it can be recovered only with the approval of signatures from specified accounts, such as your friends and family. Combine the branches any way you like.

.. figure:: ../resources/images/concepts-mlma-figure-3.png
    :align: center
    :width: 750px

    Account Recovery