#######
Account
#######

An account is a **key pair** (private and public key) associated to a mutable state stored on the NEM blockchain. In other words, you have a deposit box in the blockchain, which only you can modify with your key pair. As the name suggests, the private key has to be kept secret at all times. Anyone with access to the private key, ultimately has control over the account.

Think about NEM accounts as a **container for assets** in the blockchain. An account could represent a deposit of tokens, like most blockchains. However, it could also represent a **single object** that must be unique and updatable: a package to be shipped, a deed to a house, or a document to be notarized.

****************
Multisig Account
****************

Accounts become truly smart when configured with special rules – directly on the NEM blockchain – that define how they relate and control each other, as well as how their contents can be updated and transferred. One crucial type of rule is :doc:`multisig <multisig-account>` control that allows ownership of account based assets to be shared in a variety of ways between multiple parties.

**********
Properties
**********

An account has the following properties:

  **Private Key**

  A :ref:`private key <keypair>` is a key to an account. Anyone having the private key to an account can initiate any account related action.

  .. note:: The private key must be kept secret at all costs. Make sure your private key is backed up safely somewhere offline.

  **Public key**

  The :ref:`public key <keypair>` can be used to verify signatures of the account. The public key is stored in the blockchain with the first issued transaction. An account which has not issued any transaction has its public key field empty.

  **Address**

  Each account has a unique :ref:`address <address>`. You will normally share the derived address instead, as it is shorter and gathers more information.

  **Mosaics**

  Amount of different :doc:`mosaics <mosaic>` the account owns.