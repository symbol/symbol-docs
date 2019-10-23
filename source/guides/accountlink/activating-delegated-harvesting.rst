:orphan:

.. post:: 11 Oct, 2019
    :category: Account, Harvesting
    :excerpt: 1
    :nocomments:

###############################
Activating delegated harvesting
###############################

Share your account's importance securely with a node.

**********
Background
**********

:ref:`Delegated harvesting  <delegated-harvesting>` enables accounts to receive rewards from creating new blocks without running a node.

Follow this guide to **delegate securely your account importance** without compromising the account's funds.

*************
Prerequisites
*************

- Finish :doc:`sending mosaics and messages between two accounts guide <../transfer/sending-a-transfer-transaction>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`
- Have one account with more than ``500`` cat.harvest.

**********************
Getting into some code
**********************

Before you can activate delegated harvesting, make sure your main account has at least ``500 cat.harvest`` units. Then, you will have to **delegate your main account importance** to a **proxy public key** (remote account) before being able to **request the node to be added as a delegated harvester**.

.. mermaid:: ../../resources/diagrams/delegated-harvesting-activation.mmd
    :caption: Delegated harvesting activation diagram
    :alt: Delegated harvesting activation diagram
    :align: center

1. Define your **main account** and the **remote account** using their private keys. The proxy private key (remote account) must belong to a **brand new** account that did not send or received any transaction previously.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvesting.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Create an :ref:`AccountLinkTransaction <account-link-transaction>` to delegate the main account importance to the remote account using its public key.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvesting.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

The next step is to **share the remote account private key with the node** you wish delegating harvesting.

3. Create a :ref:`PersistentDelegationRequestTransaction <transfer-transaction>`. Add the **node's public key** as the transaction **recipient** and the **remote account private key** creating an **special encrypted message** as follows:

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvesting.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

.. note:: Get the node's public key quering ``http://<node-url>:3000/node/info``.

The **proxy private key** is securely shared **encrypted**, being only readable by the node owner. Moreover, the remote account does not own any mosaics, so the node owner can't disrupt the security of the main account.

4. Announce both transactions together with an :ref:`AggregateCompleteTransaction <aggregate-complete>`, signing it with your **main account**.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvesting.ts
        :language: typescript
        :start-after:  /* start block 04 */
        :end-before: /* end block 04 */

The node receives an encrypted message using :ref:`WebSockets <websockets>`. Once the node decrypts the private key of the potential delegated harvester, the node owner may **add the remote account as a delegated harvester** if the following requirements are met:

- The node permits delegated harvesting.
- The node has enough harvesting slots available.
- The remote account shared is eligible.

.. note:: Announcing a valid **PersistentDelegationRequestTransaction** does not guarantee being added as a delegated harvester. Currently, the only way to verify that an account has successfully activated delegated harvesting is to become the signer of a new block.
