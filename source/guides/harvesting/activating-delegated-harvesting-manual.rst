.. post:: 25 Jan, 2021
    :category: Harvesting
    :tags: SDK
    :excerpt: 1
    :nocomments:

########################################
Activating delegated harvesting manually
########################################

Share your account's importance securely with a node and get rewarded.

************
Introduction
************

:ref:`Delegated harvesting <delegated-harvesting>` enables accounts to **receive rewards** from creating new blocks **without running a node**. At the same time, it allows nodes to benefit from an account's (possibly higher) :ref:`importance score <importance-calculation>`.

.. note:: Node owners have access to the node's configuration so it's more convenient for them to use :ref:`Remote harvesting <remote-harvesting>` instead.

This guide explains how to **manually** activate delegated harvesting using the :doc:`SDK </sdk>` or the :doc:`CLI </cli>` interface and is therefore **intended for developers**. Users should use the :doc:`Desktop Wallet guide <activating-delegated-harvesting-wallet>` instead.

*******
Summary
*******

Required steps:

1. Delegate the **main account (M)** importance to a **remote account (R)** using an :ref:`accountkeylinktransaction`.

2. Link the main account **M** to a **VRF account (V)** for randomized block production and account selection using a :ref:`vrfkeylinktransaction`.

3. Link the main account **M** to a node in order to harvest through that node using a :ref:`nodekeylinktransaction`.

4. Request the node to add the remote account **R** as a harvester using a :ref:`persistentdelegationrequesttransaction`. Conversely, if the node configuration is accessible, the remote account's private key can be set in the node configuration.

Please note that it is entirely up to the node to comply with the request. Some nodes can be asked for their current list of delegated harvesters but this information is not always available (see :ref:`delegated-harvesting-verifying-activation` below).

*************
Prerequisites
*************

- Complete the :doc:`sending mosaics and messages between two accounts <../transfer/sending-a-transfer-transaction>` guide to have a basic understanding of transactions.

Before you can activate delegated harvesting, you need the following items:

- A **Main account (M)** with at least **10,000** |networkcurrency| to be :ref:`eligible <account_eligibility>` and then some more to pay for transaction fees. The account also has to have an :ref:`importance score <importance-calculation>` greater than zero (this score is calculated every 12h). This is the account that will receive the harvesting fees. Keep its private key secret at all times.

- A **Remote account (R)** that will act as a proxy between **M** and the node. This account **must have never sent or received any transaction**, and it cannot be involved in any transaction while it is a delegated account.

- A **VRF account (V)** that has never sent or received any transactions. It is a regular account used to add randomness to the account selection process.

- The **node's public TLS key**. This is the key the node uses to authenticate data for transport over `TLS <https://en.wikipedia.org/wiki/Transport_Layer_Security>`__ and is typically provided by the node owner.

Refer to the :doc:`Creating an account <../account/creating-an-account>` guide to know how to create new accounts if you need to.

.. note:: The following bash code snippets make use of :doc:`symbol-cli <../../cli>` and assume that the **main account (M)** is set as the **default** profile. Use the ``‑‑profile`` parameter if this is not the case.

*****
Guide
*****

1. Create an :ref:`accountkeylinktransaction` to **delegate M's importance to R**. Sign the transaction with **M** and announce it to the network.

   .. example-code::

      .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingAccountLink.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

      .. viewsource:: ../../resources/examples/bash/accountlink/ActivatingDelegatedHarvestingAccountLink.sh
       :language: bash
       :start-after: #!/bin/sh

2. Create a :ref:`vrfkeylinktransaction` to **link M to a VRF key**. Sign the transaction with  **M** and announce it to the network.

   .. example-code::

      .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingVrfKeyLink.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

      .. viewsource:: ../../resources/examples/bash/accountlink/ActivatingDelegatedHarvestingVrfKeyLink.sh
       :language: bash
       :start-after: #!/bin/sh

3. Create a :ref:`nodekeylinktransaction` to **link M to a node's TLS key**. Sign the NodeKeyLinkTransaction with **M** and announce it to the network.

   .. note::

      The node's public TLS key is typically provided by the node owner. However, **Dual** nodes (being both :ref:`Peer <peer-node>` and :ref:`API <api-node>` nodes) running a version of the :doc:`REST Gateway <../../api>` higher than **2.2.0** offer this information through the ``nodePublicKey`` field of the ``node/info`` `REST endpoint <https://symbol.github.io/symbol-openapi/v0.10.6/#operation/getNodeInfo>`_.

      Just point your browser to :term:`NODE_URL` ``/node/info``.

   .. example-code::

      .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingNodeKeyLink.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

      .. viewsource:: ../../resources/examples/bash/accountlink/ActivatingDelegatedHarvestingNodeKeyLink.sh
       :language: bash
       :start-after: #!/bin/sh

4. Once the transactions are confirmed, the next step is to **share R's private key with the node**. This can be done in one of two ways depending on whether you are the node owner and have access to the node's configuration or not.

   If you are the **node owner**, you simply need to set the remote account's private signing key in the ``harvesterSigningPrivateKey`` field in the :ref:`node-properties-harvesting-configuration`.

   **Otherwise**, a :ref:`persistentdelegationrequesttransaction` must be used. As the private key will be shared in an **encrypted message**, only the node will be able to see it. Moreover, **R** does not own any mosaic.

   The harvesting fees will be sent to **M** as it has established a link with the node through the :ref:`nodekeylinktransaction`.

   Sign the :ref:`persistentdelegationrequesttransaction` with **M** and announce it to the network.

   .. example-code::

      .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingPersistentRequest.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

      .. viewsource:: ../../resources/examples/bash/accountlink/ActivatingDelegatedHarvestingPersistentRequest.sh
       :language: bash
       :start-after: #!/bin/sh

.. note:: All the above transactions can be announced together in a single :ref:`aggregate-transaction`.

If everything is successful, the node will receive the encrypted message through :ref:`WebSockets <websockets>`. Once the node decrypts the private key of the potential delegated harvester, the node owner may **add R as a delegated harvester** if the following requirements are met:

- The node permits delegated harvesting.
- The node has harvesting slots available (See next section).
- The remote account has never sent or received transactions before.

As the remote private key is **saved on disk** by the node, even if the node disconnects temporarily the persistent delegated harvesters will be reestablished once the node reconnects to the network.

Additionally, the use of an encrypted message creates a **backup** of the information for the nodes. If the disk containing the delegated keys becomes corrupted or destroyed, the node owner can still retrieve the data by querying the blockchain.

.. _delegated-harvesting-verifying-activation:

********************
Verifying activation
********************

When requesting delegation through a :ref:`persistentdelegationrequesttransaction` instead of directly configuring the node, whether the node enables delegated harvesting depends entirely on the node and **not on the network**. It is entirely up to the node to comply with the request or even to lie about its state.

Therefore, there is no **reliable** way to know if your account has become a harvester or not (besides waiting to see if any blocks appear on the blockchain signed by your remote account and your main account starts collecting harvesting fees).

That said, nodes configured to act as **Dual** nodes (being both :ref:`Peer <peer-node>` and :ref:`API <api-node>` nodes) can be queried for their current list of delegated harvesters. To reiterate, this information comes from the node and is not backed up by the blockchain, so take it with a grain of salt.

You can retrieve this list using the ``getUnlockedAccount`` `API endpoint <https://symbol.github.io/symbol-openapi/v0.10.6/#operation/getUnlockedAccount>`_ (point your browser to :term:`NODE_URL` ``/node/unlockedaccount``) or the `Typescript SDK <https://symbol.github.io/symbol-sdk-typescript-javascript/0.22.2/classes/_src_infrastructure_nodehttp_.nodehttp.html#getunlockedaccount>`_ for example). It contains the public keys of all registered delegated harvesters in the node, so your **remote account (R)** public key should appear here.

By default a node can have up to 5 delegated harvesters (harvesting slots) and excess requests can be priorized as the node sees fit. This can be configured on the node through the ``maxUnlockedAccounts`` and ``delegatePrioritizationPolicy`` :ref:`node-properties-harvesting-configuration`.

***********
Final words
***********

- **Accounts with higher importance are selected more often to perform harvesting**. Even if you successfully register as a delegated harvester with a node, you will not harvest any block (nor receive any fees) unless your :ref:`importance score <importance-calculation>` is high enough.

- **Importance score calculation does not happen continuously**. By default, account importance scores are recalculated every 1440 blocks (about every 12 hours). See the ``importanceGrouping`` property in the :ref:`Configuring network properties <config-network-properties>` guide.

- Finally, as explained in :ref:`delegated-harvesting-verifying-activation` above, **announcing a Harvesting Delegation request does not guarantee being added as a delegated harvester**. Nodes are free to comply with the request or even to lie about its status.
