:orphan:

.. post:: 11 Oct, 2019
    :category: Harvesting
    :excerpt: 1
    :nocomments:

###############################
Activating delegated harvesting
###############################

Share your account's importance securely with a node.

**********
Background
**********

:ref:`Delegated harvesting <delegated-harvesting>` enables accounts to receive rewards from creating new blocks without running a node.
The following guide will show you how to **delegate your account importance** without compromising the account's funds.

In this process, you will **delegate your main account (M) importance** to a **proxy public key (R)**. Then,you will request a node to **add your remote account (R)** as a delegated harvester with the **announcer account (A)**.

.. mermaid:: ../../resources/diagrams/delegated-harvesting-activation.mmd
    :caption: Delegated harvesting activation diagram
    :alt: Delegated harvesting activation diagram
    :align: center

*************
Prerequisites
*************

- Finish :doc:`sending mosaics and messages between two accounts guide <../transfer/sending-a-transfer-transaction>`

Before you can activate delegated harvesting, you will need to have three accounts:

* A **main account (M)** with at least ``10,000`` |networkcurrency| units.
* An **announcer account (A)** with enough |networkcurrency|  units to announce a transaction.
* A brand new **remote account (R)** that did not send or receive any transactions.

- Follow this guide to :ref:`create new accounts <setup-creating-a-test-account>`.

*************************
Method #01: Using the SDK
*************************

1. Define your **main account (M)**, **announcer account(A)** and the **remote account (R)** using their private keys.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingPersistentRequest.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingPersistentRequest.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create an :ref:`AccountLinkTransaction <account-link-transaction>` to **delegate M's importance to R** using its public key.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingAccountLink.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingAccountLink.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Sign the AccountLinkTransaction with **M** and announce it to the network.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingAccountLink.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingAccountLink.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */


Once the transaction is confirmed, the next step is to **share R's private key with the node** you wish to connect for delegated harvesting.

4. Create a :ref:`PersistentDelegationRequestTransaction <transfer-transaction>`.
Add the **node's public key** as the transaction **recipient** and share the **R's private key** by creating a **special encrypted message** as follows:

.. note:: Get the node's public key by querying ``http://<node-url>:3000/node/info``.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingPersistentRequest.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingPersistentRequest.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

The **special encrypted message** ensures that **R's proxy private key** is securely shared, only readable by the node owner.
Moreover, the remote account does not possess any mosaics.
The valuable assets remain safely in the main account which the node owner remains without access.

5. Sign the special TransferTransaction with **A** and announce it to the network.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingPersistentRequest.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingPersistentRequest.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

.. note:: You could announce the transaction with M, but it is recommended to use a third account to keep the information about transfer of importance confidential.

If everything is successful, the node will receive an encrypted message using :ref:`WebSockets <websockets>`.
Once the node decrypts the private key of the potential delegated harvester, the node owner may **add R as a delegated harvester** if the following requirements are met:

- The node permits delegated harvesting.
- The node has harvesting slots available.
- The remote account has not sent or received transactions.

.. note:: Announcing a valid **PersistentDelegationRequestTransaction** does not guarantee being added as a delegated harvester. Currently, the only way to verify that an account has successfully activated delegated harvesting is to become the signer of a new block.
