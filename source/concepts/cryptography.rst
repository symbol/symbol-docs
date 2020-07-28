############
Cryptography
############

|codename| uses **elliptic curve cryptography** to verify the data integrity and to authenticate the signer's identity.

.. _keypair:

********
Key pair
********

Elliptic curve cryptography is an approach to public key cryptography.
The cryptographic system uses **pairs of keys**:

* **Private key**: A random 256-bit integer used to sign :ref:`entities <verifiable-entity>` known by the owner.

* **Public key**: The public identifier of the key pair, which can be disseminated widely. It is used to prove that the entity was signed with the paired private key.

The public key is cryptographically derived from the private key.
In particular, |codename| uses the |edwards| with the digital signature algorithm named |Ed25519| and hashing algorithm **SHA-512**.

You can find the |implementation-derivation| under the ``crypto`` module of :doc:`catapult-server <../server>`.

*********
Signature
*********

With a private key, the algorithm can sign messages producing 64-byte signatures.
A signature is used to validate that a given key pair signed an entity just having the public key.

You can find the implementation to |implementation-signature| and |implementation-verification| under the ``crypto`` module of :doc:`catapult-server <../server>`.

.. _address:

*******
Address
*******

Public keys can be shared in a shorter form as addresses.
A |codename| address is a **Base32 encoded triplet** consisting of:

* The network byte.
* The 160-bit hash of the account's public key.
* The 3 byte checksum, to allow the quick recognition of mistyped addresses.

The following steps are performed to |implementation-public-key-address|:

.. code-block:: cpp

	Address PublicKeyToAddress(const Key& publicKey, NetworkIdentifier networkIdentifier) {
		// step 1: sha3 hash of the public key
		Hash256 publicKeyHash;
		crypto::Sha3_256(publicKey, publicKeyHash);

		// step 2: ripemd160 hash of (1)
		Address decoded;
		crypto::Ripemd160(publicKeyHash, reinterpret_cast<Hash160&>(decoded[1]));

		// step 3: add network identifier byte in front of (2)
		decoded[0] = utils::to_underlying_type(networkIdentifier);

		// step 4: concatenate (3) and the checksum of (3)
		Hash256 step3Hash;
		crypto::Sha3_256(RawBuffer{ decoded.data(), Hash160::Size + 1 }, step3Hash);
		std::copy(step3Hash.cbegin(), step3Hash.cbegin() + Checksum_Size, decoded.begin() + Hash160::Size + 1);

		return decoded;
	}

As you can see, it is possible to create an address without interacting with the blockchain.
In fact, the blockchain only tracks addresses and public keys when they first appear in one transaction.

.. |edwards| raw:: html

   <a href="https://en.wikipedia.org/wiki/Twisted_Edwards_curve" target="_blank">Twisted Edwards curve</a>

.. |Ed25519| raw:: html

   <a href="https://ed25519.cr.yp.to/" target="_blank">Ed25519</a>

.. |implementation-derivation| raw:: html

   <a href="https://github.com/nemtech/catapult-server/blob/main/src/catapult/crypto/KeyGenerator.cpp#L40-L42" target="_blank">implementation</a>

.. |implementation-signature| raw:: html

   <a href="https://github.com/nemtech/catapult-server/blob/main/src/catapult/crypto/Signer.cpp#L116-L170" target="_blank">sign entities</a>

.. |implementation-verification| raw:: html

   <a href="https://github.com/nemtech/catapult-server/blob/main/src/catapult/crypto/Signer.cpp#L180-L220" target="_blank">verify them</a>

.. |implementation-public-key-address| raw:: html

   <a href="https://github.com/nemtech/catapult-server/blob/main/src/catapult/model/Address.cpp#L63-L81" target="_blank">convert a public key to an address</a>

Continue: :doc:`Block <block>`.
