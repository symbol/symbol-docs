.. post:: 11 Oct, 2019
    :category: Harvesting
    :tags: SDK
    :excerpt: 1
    :nocomments:

###############################
Activating delegated harvesting
###############################

Share your account's importance securely with a node.

************
Introduction
************

:ref:`Delegated harvesting <delegated-harvesting>` enables accounts to receive rewards from creating new blocks without running a node. At the same time, it allows nodes to benefit from an account's (possibly higher) :ref:`importance score <importance-calculation>`. The account's **private key** is never shared with the node so this method is inherently safer than :ref:`local harvesting <local-harvesting>` since all nodes must be publicly accessible.

Summary of the required steps:

1. Delegate the **main account (M)** importance to a **remote account (R)** using a :ref:`AccountKeyLinkTransaction <account-key-link-transaction>`.

2. Link the main account **M** to a **VRF account (V)** for randomized block production and account selection using a :ref:`VrfKeyLinkTransaction <vrf-key-link-transaction>`.

3. Link the main account **M** to a node in order to harvest through that node using a :ref:`NodeKeyLinkTransaction <node-key-link-transaction>`.

4. Request the node to add the remote account **R** as a delegated harvester using a :ref:`PersistentDelegationRequestTransaction <persistent-delegation-request-transaction>`.

Please note that it is entirely up to the node to comply with the request. Moreover, **by design** there is no mechanism to check if the request has been accepted or not, since there is no way to provide such mechanism in a trustless environment.

*************
Prerequisites
*************

- Complete the :doc:`sending mosaics and messages between two accounts <../transfer/sending-a-transfer-transaction>` guide to have a basic understanding of transactions.

Before you can activate delegated harvesting, you need the following accounts:

- A **Main account (M)** with at least **10,000** |networkcurrency| to be :ref:`eligible <account_eligibility>` and then some more to pay for transaction fees. This is the account that will receive the harvesting fees. Keep its secret key secret at all times.

- A **Remote account (R)** that will act as a proxy between **M** and the node. This account **must have never sent or received any transaction**, and it cannot be involved in any transaction while it is a delegated account.

- A **VRF account (V)** that has never sent or received any transactions. It is a regular account used to add randomness to the account selection process.

Optionally:

- An **Announcer account (A)** with enough |networkcurrency| to pay for transaction fees. By announcing the final harvesting delegation request through this account instead of **M**, even the fact that **M** is involved in delegated harvesting is hidden from the network. Use this account for added privacy.

Refer to the :doc:`Creating an account <../account/creating-an-account>` guide to know how to create new accounts if you need to.

.. note:: The bash code snippets make use of :doc:`symbol-cli <../../cli>` and assume that the **main account (M)** is set as the **default** profile. Use the ``‑‑profile`` parameter if this is not the case.

*****
Guide
*****

1. Create an :ref:`AccountKeyLinkTransaction <account-key-link-transaction>` to **delegate M's importance to R**. Sign the transaction with **M** and announce it to the network.

   .. example-code::

      .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingAccountLink.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

      .. viewsource:: ../../resources/examples/bash/accountlink/ActivatingDelegatedHarvestingAccountLink.sh
       :language: bash
       :start-after: #!/bin/sh

2. Create a :ref:`VrfKeyLinkTransaction <vrf-key-link>` to **link M to a VRF key**. Sign the transaction with  **M** and announce it to the network.

   .. example-code::

      .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingVrfKeyLink.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

      .. viewsource:: ../../resources/examples/bash/accountlink/ActivatingDelegatedHarvestingVrfKeyLink.sh
       :language: bash
       :start-after: #!/bin/sh

3. Create a :ref:`NodeKeyLinkTransaction <node-key-link>` to **link M to a node**. Sign the NodeKeyLinkTransaction with **M** and announce it to the network.

   Find the node's public key by querying ``http://<node-url>:3000/node/info`` with a browser, for example.

   .. example-code::

      .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingNodeKeyLink.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

      .. viewsource:: ../../resources/examples/bash/accountlink/ActivatingDelegatedHarvestingNodeKeyLink.sh
       :language: bash
       :start-after: #!/bin/sh

4. Once the transactions are confirmed, the next step is to **share R's private key with the node** through a :ref:`PersistentDelegationRequestTransaction <persistent-delegation-request-transaction>`. As the private key will be shared in an **encrypted message**, only the node will be able to see it. Moreover, **R** does not possess any mosaic.

   The harvested |networkcurrency| will be sent to **M** as it has established a link with the node through the :ref:`NodeKeyLinkTransaction <node-key-link-transaction>`.

   Sign the :ref:`PersistentDelegationRequestTransaction <persistent-delegation-request-transaction>` with **M** (or **A** for added privacy, as stated in the Prerequisites) and announce it to the network.

   .. example-code::

      .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingPersistentRequest.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

      .. viewsource:: ../../resources/examples/bash/accountlink/ActivatingDelegatedHarvestingPersistentRequest.sh
       :language: bash
       :start-after: #!/bin/sh

.. note:: All the above transactions can be announced together in a single :ref:`Aggregate Transaction <aggregate-transaction>`.

If everything is successful, the node will receive the encrypted message through :ref:`WebSockets <websockets>`. Once the node decrypts the private key of the potential delegated harvester, the node owner may **add R as a delegated harvester** if the following requirements are met:

- The node permits delegated harvesting.
- The node has harvesting slots available.
- The remote account has never sent or received transactions before.

.. note:: As explained in the introduction, announcing a valid :ref:`PersistentDelegationRequestTransaction <persistent-delegation-request-transaction>` does not guarantee being added as a delegated harvester. Currently, the only way to verify that an account has successfully activated delegated harvesting is to become the signer of a new block.

As the remote private key is **saved on disk** by the node, even if the node disconnects temporarily the persistent delegated harvesters will be reestablished once the node reconnects to the network.

Additionally, the use of an encrypted message creates a **backup** of the information for the nodes. If the disk containing the delegated keys becomes corrupted or destroyed, the node owner can still retrieve the data by querying the blockchain.
