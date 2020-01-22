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

Follow this guide to **delegate your account importance** without compromising the account's funds.
Before you can activate delegated harvesting, make sure your main account has at least ``10,000`` |networkcurrency| units.
Then, you will have to **delegate your main account importance** to a **proxy public key** (remote account) before **requesting a node to add you as a delegated harvester**.

.. mermaid:: ../../resources/diagrams/delegated-harvesting-activation.mmd
    :caption: Delegated harvesting activation diagram
    :alt: Delegated harvesting activation diagram
    :align: center

*************
Prerequisites
*************

- Finish :doc:`sending mosaics and messages between two accounts guide <../transfer/sending-a-transfer-transaction>`
- Have one :ref:`account with more than 10,000 <setup-creating-a-test-account>` |networkcurrency| units

*************************
Method #01: Using the SDK
*************************

1. Define your **main account** and the **remote account** using their private keys.
The proxy private key (remote account) must belong to a **brand new** account that did not send or received any transaction previously.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvesting.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvesting.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create an :ref:`AccountLinkTransaction <account-link-transaction>` to delegate the main account's importance to the remote account using its public key.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvesting.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvesting.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

The next step is to **share the remote account private key with the node** you wish to connect for delegated harvesting.

3. Create a :ref:`PersistentDelegationRequestTransaction <transfer-transaction>`.
Add the **node's public key** as the transaction **recipient** and share the **remote account private key** by creating a **special encrypted message** as follows:

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvesting.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvesting.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

.. note:: Get the node's public key by querying ``http://<node-url>:3000/node/info``.

The **special encrypted message** ensures that the **proxy private key** is securely shared, only readable by the node owner.
Moreover, the remote account does not possess any mosaics.
The valuable assets remain safely in the main account where the node owner cannot disrupt security.

4. Announce both transactions together with an :ref:`AggregateCompleteTransaction <aggregate-complete>`, signing it with your **main account**.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvesting.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvesting.js
        :language: javascript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

The node receives an encrypted message using :ref:`WebSockets <websockets>`.
Once the node decrypts the private key of the potential delegated harvester, the node owner may **add the remote account as a delegated harvester** if the following requirements are met:

- The node permits delegated harvesting.
- The node has harvesting slots available.
- The remote account has not sent or received transactions.

.. note:: Announcing a valid **PersistentDelegationRequestTransaction** does not guarantee being added as a delegated harvester. Currently, the only way to verify that an account has successfully activated delegated harvesting is to become the signer of a new block.
