############
Cryptography
############

|codename| uses `elliptic curve cryptography <https://en.wikipedia.org/wiki/Elliptic-curve_cryptography>`__ to verify data integrity and to authenticate a signer's identity.

.. _keypair:

********
Key pair
********

Elliptic curve cryptography is based on **key pairs**: a private and a matching public key. In particular, |codename| uses the `Twisted Edwards curve <https://en.wikipedia.org/wiki/Twisted_Edwards_curve>`__ with the digital signature algorithm named `Ed25519 <https://ed25519.cr.yp.to>`__ and hashing algorithm **SHA-512**:

* **Private key**: A random 256-bit (32 byte) integer used to sign :ref:`entities <verifiable-entity>` known by the owner.

* **Public key**: A 256-bit (32 bytes) integer derived from the private key. It serves as the public identifier of the key pair and can be disseminated widely. It is used to prove that an entity was signed with the paired private key.

The public key can be derived from the private key, but **not the other way around**.

|codename| keys
===============

Key pairs are used in |codename| in different places, for **different purposes**. This is a summary of the keys used:

* **Main**: This key pair manages a **regular** :doc:`account`, containing assets like mosaics or namespaces.
* **Remote**: This key pair manages the **remote account** used in :ref:`remote-harvesting`.
* **VRF**: Required :ref:`for harvesting <account_eligibility>`.
* **Voting**: Required for nodes participating in the :ref:`finalization` process.
* **Transport**: This key pair is used by nodes for secure transport over `TLS <https://en.wikipedia.org/wiki/Transport_Layer_Security>`__.

.. note::

   As a rule of thumb, the **private key** in any key pair should be kept secret at all times. However, **how bad is it to have a private key stolen?**

   .. csv-table::
      :header: "Key", "Severity", "Impact"
      :widths: 20,20,60
      :delim: ;

      **Main**; 🔴 HIGH; Funds could be transferred to another account.
      **Remote**; 🟠 MED; Harmless to the account or the node. Easily reverted by linking another remote account. An attacker grabbing a large number of remote keys could gain a lot of harvesting power, influencing which blocks are added to the blockchain.
      **VRF**; 🟡 LOW; Harmless without the key used for harvesting.
      **Voting**; 🟠 MED; Harmless to the account or the node. Easily reverted by linking another voting account. An attacker grabbing more than 50% of the network's voting keys could influence block finalization.
      **Transport**; 🟡 LOW; An attacker could steal harvesting delegations away from the node, but harmless otherwise.

*********
Signature
*********

**All transactions are signed** using a private key, producing 512-bit (64 byte) **signatures**.

As part of the regular workflow of the protocol, signatures are **validated** using the matching public key. This ensures the authenticity of the signer of an entity.

.. _address:

*******
Address
*******

|codename| public keys can be shared in a **shorter form** as 39-character addresses.

First, a 24-byte triplet is built, consisting of:

* A network-id byte.
* A 160-bit (20 byte) hash of the account's public key.
* A 3-byte checksum, to allow the quick recognition of mistyped addresses.

Then, the whole string is `Base32-encoded <https://en.wikipedia.org/wiki/Base32>`__ to produce the 39-character address.

It is possible to create an address without interacting with the blockchain. In fact, the blockchain only tracks addresses and public keys when they first appear in a transaction.

.. _hdwallets-and-mnemonics:

************************
HD-Wallets and Mnemonics
************************

**Hierarchical Deterministic Wallets** (HD-Wallets for short) can **derive a series of accounts** from a single seed account. This allows handling a group of accounts using a single :ref:`key pair <keypair>`, greatly simplifying their management:

- Only one key to protect.
- Multiple accounts can be stored in a single QR code or **mnemonic phrase**.

A **Mnemonic Phrase** is human-friendly representation for a private key, composed of **24 random English words**. Mnemonic phrases are sometimes used instead of private keys as they are **easier for humans to remember and write down**.

However, they are **equivalent to private keys** so it is critical that they are kept secret at all times. Even more so in the |codename| :ref:`wallet-desktop`, where **the mnemonic phrase encodes the seed account's key**.

See the `NIP-6 <https://github.com/nemtech/NIP/blob/main/NIPs/nip-0006.md>`_ document for technical details on |codename|'s mechanism to create HD Wallets.

Continue: :doc:`Block <block>`.
