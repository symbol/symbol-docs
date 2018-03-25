################
Multisig Account
################

.. warning:: The configuration presented is NOT intended to be used on the public network. These are the parameters used for the Catapult Testnet version (MIJIN_TEST).

A NEM :doc:`account <account>` can be converted to multisig account at the blockchain level, assigning rights of a certain account to other accounts.

This unlocks various advantages and interesting possibilities for the user. For example, enables several people to administrate the activity of an account, control assets such as XEM from one account, other mosaics, or create additional  :doc:`transactions <transaction>` such as creating a new token.

******
Fields
******
A multisig account has the following properties:

    **Minimum Approval**

    The number of signatures needed to approve a transaction.

    **Minimum Removal**

    The number of signatures needed to remove a cosignatory.

    **Modifications**

    List of cosigner accounts involved in the multisignature account.

.. warning:: Multisig accounts are a powerful tool, but please use this tool with caution.  If cosignatories keys get lost, and minimum approval is not reached, this would currently result in the permanent loss of access to the funds held by the multisig account.

Multisig accounts permissions can be edited to suit almost any needs. Despite that, you should consider the following:

* Once you convert an account to a multisig account, you can no longer initiate transactions from that account. All transactions from the multisig account must be initiated by one of the cosignatories.

* NEM's current implementation of multisig is *"M-of-N"*, meaning M can be any number equal to or less than N, i.e., 1-of-4, 2-of-2, 4-of-9, 11-of-12 and so on.

* You can create multisig accounts with up to ``10`` cosignatories.

* You can choose the number of minimum cosignatories to approve transactions and remove cosignatories.

There is a broad range of useful applications for multisig accounts. Let's take a look at some of the common use cases.

1. Alice and Bob live together, they have separate accounts, but they also need a shared account so that if Bob is out shopping, he can buy groceries for both him and Alice.

.. figure:: ../resources/images/concepts-multisig-figure-1.png
    :align: center

    M-of-N multisig account example

2. Several families are members of the local philatelist society and use a shared account to buy stamps. To ensure that all agree on which old stamps they should buy and for the right price, they use a multisig account such that all members of the society need to approve a transaction before it can be sent and included in the blockchain as a valid transaction.

.. figure:: ../resources/images/concepts-multisig-figure-2.png
    :align: center

    N-of-N multisig account example

3. Security is another critical aspect of multisig accounts. John wants to make sure his funds are not compromised in any way. Therefore he sets up a multisig account with his funds and attaches two accounts (signer accounts) to control his multisig account as a form of 2-factor authentication. Both of his signer accounts need to approve the transaction, and his signer accounts are located on different computer platforms with different passwords. This means that even if an evil hacker or virus should compromise one of his accounts, his funds are still kept secure.

.. figure:: ../resources/images/concepts-multisig-figure-3.png
    :align: center

    Multi-factor authorization using multisig accounts

To convert a normal account to a multisig account or edit an existent one, announce a :doc:`modify multisig account transaction <transaction>`.

************************************
Multi-Level Multisig Accounts (MLMA)
************************************

A Multi-Level Multisig Account is a multisig that has a cosigner that is another multisig. MLMA accounts add “AND/OR” logic to multi-signature transactions.

Consider the following constraints:

* The maximum number of levels is ``3``.
* The maximum of no-multisig cosigners (leaf) is ``5``.

Let's see a three-level multisig account example.

.. figure:: ../resources/images/concepts-multisig-multilevel-1.png
    :align: center

    Three-level multisig account example

Who should cosign the transaction if *Account #5* initiates an aggregate bonded transaction? Notice that multisig accounts are not capable of cosigning transactions, being responsible for doing so no-multisig cosigners.

.. figure:: ../resources/images/concepts-multisig-multilevel-2.png
    :align: center

    Sending an aggregate bonded transaction from an MLMA
