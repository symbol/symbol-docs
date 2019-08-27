############
Cryptography
############

.. _keypair:

********
Key pair
********

The key pair pair consists of a private key and a public key:

* **Private key**: A random 256-bit integer used to sign :ref:`entities <verifiable-entity>`.

* **Public key**: The public identifier of the key pair. Proves that the entity was signed with the paired private key.

The public key is cryptographically derived from the private key. Catapult uses the |edwards| with the digital signature algorithm called |Ed25519|.

You can find the |implementation| under the ``crypto`` module of catapult-server.

.. _address:

*******
Address
*******

A NEM address is a **base-32 encoded triplet** consisting of:

* The network byte.
* The 160-bit hash of the account's public key.
* The 4 byte checksum, to allow quick recognition of mistyped addresses.

The following steps are performed to `convert a public key <https://github.com/nemtech/catapult-server/blob/master/src/catapult/model/Address.cpp#L50>`_ to an address:

.. code-block:: cpp

	Address PublicKeyToAddress(const Key& publicKey, NetworkIdentifier networkIdentifier) {
		// step 1: sha3 hash of the public key
		Hash256 publicKeyHash;
		CatapultHash(publicKey, publicKeyHash);

		// step 2: ripemd160 hash of (1)
		Address decoded;
		crypto::Ripemd160(publicKeyHash, reinterpret_cast<Hash160&>(decoded[1]));

		// step 3: add network identifier byte in front of (2)
		decoded[0] = utils::to_underlying_type(networkIdentifier);

		// step 4: concatenate (3) and the checksum of (3)
		Hash256 step3Hash;
		CatapultHash(RawBuffer{ decoded.data(), Hash160_Size + 1 }, step3Hash);
		std::copy(step3Hash.cbegin(), step3Hash.cbegin() + Checksum_Size, decoded.begin() + Hash160_Size + 1);

		return decoded;
	}

1. SHA3-256 of the public key.
2. ripemd160 hash of (1).
3. add the network identifier byte in front of (2).
4. concatenate (3) and the checksum of (3).

As you can see, you can create an address without interacting with the blockchain. The blockchain only tracks addresses involved in at least one transaction.

.. |edwards| raw:: html

   <a href="https://en.wikipedia.org/wiki/Twisted_Edwards_curve/" target="_blank">Twisted Edwards curve</a>

.. |Ed25519| raw:: html

   <a href="https://ed25519.cr.yp.to/" target="_blank">Ed25519</a>

.. |implementation| raw:: html

   <a href="https://github.com/nemtech/catapult-server/blob/master/src/catapult/crypto/KeyGenerator.cpp#L31" target="_blank">implementation</a>
