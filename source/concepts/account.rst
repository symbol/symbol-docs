#######
Account
#######

An account is a :ref:`key pair <keypair>` (private and public key) associated with a mutable state stored on the blockchain.
In other words, you have a **deposit box**, which only you can modify with your private key.

Think of an account as **container for assets**.
It can be used to hold XYM or other mosaics, whether they are tokens or specialized assets.

Moreover, |codename| accounts can also represent **non-fungible assets** that must be unique and updatable: a package to be shipped, a house deed or a document to be notarized.

**********
Properties
**********

Accounts have the following properties:

Private key
===========

A private key is a key to an account.
Anyone with access to the private key ultimately has control over the account.

.. note:: The private key must be kept secret. Make sure your private key is backed up safely somewhere offline.

Public key
==========

The public key can be used to verify signatures of the account.
The public key is stored on the blockchain with the first issued transaction.
An account which has not issued any transaction has its public key field empty.

Address
=======

Each account has a unique :ref:`address <address>` derived from the public key.
Normally, the address is shared instead of the public key because it is shorter and gathers information about the network.

Hierarchical Deterministic Wallets
===========

Symbol supports a multi-account hierarchy enabling the generation of multiple public keys without revealing the private key.

The deterministic keys from which the accounts will be derived from are serialized into human-readable words in Mnemonic codes.

Only the **hardened child key derivation** scheme of derivation will be available on Symbol. Hardened child keys are derived in the following manner:

.. math::

    Hardened child key = hash(parent private key + index)


Balance
=======

The amount of different :doc:`mosaics <mosaic>` units the account owns.

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
