############
Cryptography
############

NEM is using cryptography based on **Elliptic Curve Cryptography**. The choice of the underlying curve is important to guarantee security and speed.

.. _keypair:

**********************
Private and public key
**********************

The **private key** is a random 256-bit integer. The **public key** is cryptographically derived from the private key. NEM is using the ``Ed25519 elliptic curve`` with the ``sha3`` hashing algorithm.

.. _address:

*******
Address
*******

A NEM address is a base-32 :sup:`3` encoded triplet consisting of:

* Network byte
* 160-bit hash of the account's public key
* 4 byte checksum, to allow quick recognition of mistyped addresses.

The following steps are performed to convert a public key to an address:

1. Perform 256-bit sha3 on the public key.
2. Perform 160-bit Ripemd of hash resulting from step 1.
3. Prepend version byte to Ripemd hash (either 0x68 or 0x98).
4. Perform 256-bit sha3 on the result, take the first four bytes as a checksum.
5. Concatenate output of step 3 and the checksum from step 4.
6. Encode result using base32.

From the explanation above, you can create an address without interacting with the blockchain. The blockchain only tracks addresses involved in at least one transaction.
