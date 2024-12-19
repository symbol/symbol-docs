##########
Harvesting
##########

The process of creating new :doc:`blocks <block>` is called harvesting.

In this process, the :doc:`account <account>` that harvests a block is called the **harvester** and is rewarded with any :doc:`transaction fees <fees>` produced and any :doc:`inflation <inflation>` tokens generated.

Each produced block stores in its :ref:`header <block-header>` the public key of the harvester account and the block's signature that it created.

.. _account_eligibility:

********************
Eligibility criteria
********************

The :ref:`importance score <importance-calculation>` determines the probability that an account is chosen to harvest the next block among all the accounts which have harvesting enabled.

|codename|'s public network defines that an account needs to hold at least **10,000** :ref:`harvesting mosaics <harvesting-mosaic>` to have an importance score greater than zero.
Eligible accounts can use their importance score to create new blocks either by :ref:`running a node <local-harvesting>` or enabling :ref:`delegated harvesting <delegated-harvesting>`.

Regardless of the method chosen, **any account willing to activate harvesting must first announce a valid** :ref:`vrfkeylinktransaction`. This key is required by |codename| to randomize harvester selection.

.. _harvesting-mosaic:

*****************
Harvesting mosaic
*****************

The |codename| platform supports :ref:`defining any mosaic <config-network-properties>` for harvesting purposes to fit different business needs.

For example, consortium networks can distribute harvesting mosaics between the companies that are running the infrastructure, while other participants need to pay fees in the form of :doc:`currency mosaic <fees>` to consume services.

By contrast, public networks might use the same mosaic for paying transaction fees and running the network.
|codename|'s public network uses |networkcurrency| as the harvesting mosaic, enabling any eligible participant to harvest new blocks.

.. _harvesting-rewards:

*******
Rewards
*******

Network operators can define a **network fee sink account** that will receive a percentage of the harvesting rewards (block :doc:`fees <fees>` and :doc:`inflation <inflation>`). In the case of the public main network, this fee is set to **5%** and is used to support the different :doc:`reward-programs`.

Additionally, each node can set a **beneficiary account** to share a percentage (up to 25%) of the harvesting rewards. The node operators can use this feature to create incentive structures for their node supporters.

The sharing ratios for the beneficiary and network sink accounts are :ref:`configurable per network <config-network-properties>`.

.. figure:: ../resources/images/diagrams/network-sink-beneficiary.png
    :align: center
    :width: 600px

    Rewards division when the network's sharing ratio for network sink is 20% and for beneficiary is 10%.

.. note:: The calculation of the beneficiary percentage will occur after the network sink calculation. When the node operator does not define a beneficiary or a Network Fee Sink, all the rewards go to the block signer.

.. _harvesting-types:

****************
Harvesting types
****************

There are different kinds of harvesting available, depending on whether or not the harvester account owns the node and the amount of desired security: :ref:`Local <local-harvesting>`, :ref:`Remote <remote-harvesting>` and :ref:`Delegated <delegated-harvesting>`.

.. _local-harvesting:

================
Local harvesting
================

This is the **simplest to set up**, and the **most insecure method**. It requires changing a node's configuration, so it is only available to node owners. It is enabled by filling-in the appropriate harvesting properties in the :ref:`node configuration <node-properties-harvesting-configuration>` file.

As it can be seen, the harvester account's **private key** is stored in the ``harvesterSigningPrivateKey`` property, since it is needed to sign off created blocks. This is a **security concern** since this account contains funds and the configuration file might be accessed by uninvited actors if the node is compromised. Funded accounts' **private keys should always be stored offline**.

Therefore, **this method is strongly discouraged**. :ref:`Remote <remote-harvesting>` or :ref:`delegated <delegated-harvesting>` harvesting are recommended instead.

.. _remote-harvesting:

=================
Remote harvesting
=================

Node owners can use a **remote account** to **act as proxy** and sign off the newly created blocks, while harvesting fees are still collected by their main account. **The remote account has no funds**, so the fact that its private key is exposed in a configuration file on the node is not a concern. The :ref:`importance score <importance-calculation>` is still based on the main account.

In this setup the main account is still called the **Harvester**, for simplicity, whereas the remote account is called a **Proxy**.

Remote harvesting is enabled just like :ref:`local harvesting <local-harvesting>` but using the remote account's private key in the ``harvesterSigningPrivateKey`` property and announcing an :ref:`accountkeylinktransaction` that links the remote and main accounts.

This is the **recommended method** for node owners. See the :doc:`Harvesting guides <../guides/harvesting/index>` for step-by-step instructions on how to activate remote harvesting.

.. _delegated-harvesting:

====================
Delegated harvesting
====================

:ref:`Eligible accounts <account_eligibility>` **not owning a node** can still benefit from harvesting by **requesting a node to harvest for them**. The account's :ref:`importance score <importance-calculation>` is used and any collected fees are divided among the account and the node's beneficiary (as explained in the :ref:`Rewards <harvesting-rewards>` section). **It is a advantageous agreement to both the account and the node.**

It is then said that the account **delegates harvesting** to the node, but the account is still considered the harvester.

Delegated harvesting is enabled similarly to :ref:`remote harvesting <remote-harvesting>` but, since the account has no access to the node's configuration, it announces a :ref:`PersistentDelegationRequest transaction <persistentdelegationrequesttransaction>` instead (This can be done effortlessly from the :ref:`Wallet <wallet-desktop>`). Upon receiving the request, **the node may or may not grant it**, depending on its configuration and the rest of requests received.

As with :ref:`remote harvesting <remote-harvesting>` a proxy remote account is used so the main account's private key is never put at risk.

See the :doc:`Harvesting guides <../guides/harvesting/index>` for step-by-step instructions on how to activate delegated harvesting and check if the delegation request has been granted.

.. _persistentdelegationrequesttransaction:

Persistent Delegation Request Transaction
-----------------------------------------

This is actually a :ref:`transfertransaction` sent to the node owner's account with a special 132-byte **message**, formatted as a 264-characters hexadecimal string:

.. csv-table::
    :header:  "Bytes", "Hex digits", "Description"
    :widths: 10 10 80
    :delim: ;

    8; 16; Header: ``FE2A8061577301E2``
    32; 64; Ephemeral keypair public key.
    ;;**Below is encoded with the ephemeral key:**
    16; 32; AES GCM tag.
    12; 24; AES GCM initialization vector.
    32; 64; remoteLinkedPrivateKey
    32; 64; vrfPrivateKey

********************
Related transactions
********************

.. csv-table::
    :header:  "Id",  "Type", "Description"
    :widths: 15 41 44
    :delim: ;

    0x4243; :ref:`vrfkeylinktransaction`; Link an account with a VRF public key. Required for all harvesting eligible accounts.
    0x414C; :ref:`accountkeylinktransaction`; Delegate the account importance to a proxy account. Required for all accounts willing to activate remote or delegated harvesting.
    0x424C; :ref:`nodekeylinktransaction`; Link an account with a public key used by TLS to create sessions. Required for all accounts willing to activate delegated harvesting.
    0x4154; :ref:`PersistentDelegationRequestTransaction <persistentdelegationrequesttransaction>`; Request a node to add an account as a harvester. This is actually a :ref:`TransferTransaction <transfertransaction>` with a special message type.

**************
Related guides
**************

.. postlist::
    :category: Harvesting
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:
