#######
Account
#######

An account is a :ref:`key pair <keypair>` (private and public key) associated with a mutable state stored on the blockchain.
In other words, you have a **deposit box**, which only you can modify with your private key.

Think of an account as **container for assets**.
It can be used to hold XYM or other mosaics, whether they are tokens or specialized assets.

Moreover, |codename| accounts can also represent **non-fungible assets** that must be unique and updatable: a package to be shipped, a house deed, or a document to be notarized.

**********
Properties
**********

Accounts have the following properties.

Private key
===========

A private key is a secret number that allows an account to announce transactions.
Anyone with access to the private key ultimately has control over the account and its assets.

.. note:: The private key must be kept secret. Make sure your private key is backed up safely somewhere offline.

Public key
==========

The public key is used to verify the account's signatures.
It is stored on the blockchain with the first-issued transaction.
An account which has not issued any transaction has its public key field empty.

Address
=======

Each account has a unique :ref:`address <address>` derived from the public key.
Normally, the address is shared instead of the public key because it is shorter and gathers information about the network.

Balance
=======

The balance is the amount of different :doc:`mosaics <mosaic>` units owned by the account.

Importance
==========

The :ref:`importance score <importance-calculation>` determines the probability of an account to harvest the next block in case the account has :doc:`harvesting <harvesting>` turned on and all other accounts are harvesting too.

****************
Multisig Account
****************

Accounts become truly smart when configured with special rules—directly on the blockchain—that define how they relate and control each other, as well as how their contents can be updated and transferred.

One crucial type of rule is :doc:`multisig <multisig-account>` control that allows ownership of account-based assets to be shared in a variety of ways between multiple parties.

************
Restrictions
************

Accounts may configure a set of smart rules to block announcing or receiving transactions given a series of :doc:`restrictions <account-restriction>`.

**********************************
Hierarchical Deterministic Wallets
**********************************

Symbol supports a multi-account hierarchy, enabling the generation of multiple accounts from a single binary seed. The seed is encoded as a mnemonic passphrase - a group of 24 human-readable words - using elliptic curve mathematics.

As the child accounts share a common seed, the owner of the HD wallet can backup the accounts derived by securely storing a single mnemonic passphrase. Additionally, the multi-account hierarchy supports several chains of keypairs (multiple trees), giving the owner selective use and sharing of accounts.

Symbol uses the **hardened child key derivation scheme**, which means that child private keys are derived from parent private keys. The `NIP-6 <https://github.com/nemtech/NIP/blob/master/NIPs/nip-0006.md>`_ defines the complete specification on how HD wallets are defined on Symbol.

To generate new HD Wallets, you can use the library `symbol-hd-wallets <https://github.com/nemfoundation/symbol-hd-wallets>`_, available for TypeScript and JavaScript.

******
Guides
******

.. postlist::
    :category: Account
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

Continue: :doc:`Mosaics <mosaic>`.
