#######
Account
#######

.. warning:: The configuration presented is NOT intended to be used on the public network. These are the parameters used for the Catapult Testnet version (MIJIN_TEST).

An account is a key pair (private and public key) associated to a mutable state stored on the NEM blockchain.

The state of the account is modified when the network accepts :doc:`transactions <transaction>` involving it.

******
Fields
******

An account has the following properties:

    **Private Key**

    The private key is a random 256-bit integer, which uniquely identifies a NEM account.

    The probability to randomly generate a secret key that is linked to an account already existing is 10^77. Collision probability is, cryptographically speaking, negligible.

    .. note:: Your private key holds all the power of your account. It is a priority to make sure it is backed up safely somewhere **offline**.

    **Public key**

    To derive the public key from the private key, NEM is using the ``Ed25519 elliptic curve`` with the ``SHA3`` hashing algorithm.

    It appears that in general, to break an n bit elliptic curve public key, the effort is 2^(n/2), or about 3.4*10^38, basic operations.

    The public key of an account is stored on the blockchain with the first transaction issued. An account which has not issued any transaction has its public key field empty.

    **Address**

    A NEM address is a base-32 :sup:`3` encoded triplet consisting of:

        * Network byte
        * 160-bit hash of the account’s public key
        * 4 byte checksum

    The checksum allows for quick recognition of mistyped addresses. It is possible to send XEM to any valid address even if the address has not previously participated in any transaction. If nobody owns the private key of the account to which the XEM is sent, the XEM is likely lost forever.

    The following steps are performed to convert a public key to an address:

    1. Perform 256-bit Sha3 on the public key
    2. Perform 160-bit Ripemd of hash resulting from step 1.
    3. Prepend version byte to Ripemd hash (either 0x68 or 0x98)
    4. Perform 256-bit Sha3 on the result, take the first four bytes as a checksum
    5. Concatenate output of step 3 and the checksum from step 4
    6. Encode result using base32

    From the explanation above, you can create an account without ever interacting the with blockchain.

    Does it mean that all possible accounts are pre-defined on the blockchain? No. It means that only accounts that have had a transaction involving the account are tracked on the blockchain.