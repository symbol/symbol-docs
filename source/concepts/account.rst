#######
Account
#######

An account is a :ref:`key pair <keypair>` (private and public key) associated with a mutable state stored on the blockchain.

In other words, an account is a **deposit box**, which can be used to hold XYM, other mosaics, and specialized assets. However, the assets held in the box can only be moved with the associated private key.

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

**********
HD Wallets
**********

An HD Wallet, or Hierarchical Deterministic Wallet, enables the generation of multiple accounts from a single binary seed.
The seed is encoded as a mnemonic passphrase - a group of 24 human-readable words - using elliptic curve mathematics.

|codename| supports multi-account hierarchy on the client-side.
The `NIP-6 <https://github.com/nemtech/NIP/blob/main/NIPs/nip-0006.md>`_ defines the protocol to create HD Wallets on |codename|.

To generate new HD Wallets, use the library `symbol-hd-wallets <https://github.com/nemtech/symbol-hd-wallets>`_.

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
