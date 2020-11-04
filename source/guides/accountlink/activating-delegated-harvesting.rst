:orphan:

.. post:: 11 Oct, 2019
    :category: Harvesting
    :tags: SDK
    :excerpt: 1
    :nocomments:

###############################
Activating delegated harvesting
###############################

Share your account's importance securely with a node.

.. note:: Updated on 3rd November.

********
Use case
********

:ref:`Delegated harvesting <delegated-harvesting>` enables accounts to receive rewards from creating new blocks without running a node.
The following guide will show you how to delegate your account importance without compromising the account's funds.

In this process, you will 
- Delegate your **main account (M)** importance to a **remote acount (R)**.  
- Link your main account **(M)** to a **VRF account (V)** for randomized block production and leader/participant selection.  
- Link your main account **(M)** to a node in order to harvest through that node.   
- Request the node to add your remote account **(R)** as a delegated harvester with the **announcer account (A)**.  

*************
Prerequisites
*************

- Complete :doc:`sending mosaics and messages between two accounts guide <../transfer/sending-a-transfer-transaction>`

Before you can activate delegated harvesting, you need to have four accounts:

* **Main account (M)** with at least ``10,000`` XYM to be eligible and some extra XYM to pay for transaction fees.
* **Remote account (R)** that did not send or receive any transactions.
* **VRF account (V)** that did not send or receive any transactions.
* **Announcer account (A)** with enough XYM to pay for transaction fees.

If you are planning to use Symbol-CLI, you may refer to :ref:`here <creating-an-account>` for profile and account generation. 

*******
Methods
*******

1. Create an :ref:`AccountKeyLinkTransaction <account-key-link-transaction>` to **delegate M's importance to R**. Sign the AccountKeyLinkTransaction with **M** and announce it to the network. Keep the private key of **R** for PersistentDelegationRequestTransaction.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingAccountLink.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

   .. viewsource:: ../../resources/examples/bash/accountlink/ActivatingDelegatedHarvestingAccountLink.sh
       :language: bash
       :start-after: #!/bin/sh

.. note:: If you are using CLI, it is important to follow the profile name you given to the main/remote/vrf accounts. E.g. If you name your main account as "mainAccount", your parameter for --profile shall be "mainAccount" instead of "main"

2. Create a :ref:`VrfKeyLinkTransaction <vrf-key-link>` to **link M to a vrf key**. Sign the VrfKeyLinkTransaction with  **M** and announce it to the network. Keep the private key of **V** for PersistentDelegationRequestTransaction.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingVrfKeyLink.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */
        
   .. viewsource:: ../../resources/examples/bash/accountlink/ActivatingDelegatedHarvestingVrfKeyLink.sh
       :language: bash
       :start-after: #!/bin/sh

3. Create a :ref:`NodeKeyLinkTransaction <node-key-link>` to **link M to a node**. Sign the NodeKeyLinkTransaction with **M** and announce it to the network.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingNodeKeyLink.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */
        
   .. viewsource:: ../../resources/examples/bash/accountlink/ActivatingDelegatedHarvestingNodeKeyLink.sh
       :language: bash
       :start-after: #!/bin/sh

4. Once the transactions are confirmed, the next step is to **share R's private key with the node** through a PersistentDelegationRequestTransaction. As the private key will be shared in an **encrypted message**, only the node will be able to see it. Moreover, **R** does not possess any mosaic.  
The harvested XYM will be sent to **M** as it has established link with the node through NodeKeyLinkTransaction.  

Sign the special TransferTransaction with **A** and announce it to the network.

.. note:: Get the node's public key by querying ``http://<node-url>:3000/node/info``.

.. example-code::

   .. viewsource:: ../../resources/examples/typescript/accountlink/ActivatingDelegatedHarvestingPersistentRequest.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

   .. viewsource:: ../../resources/examples/bash/accountlink/ActivatingDelegatedHarvestingPersistentRequest.sh
       :language: bash
       :start-after: #!/bin/sh
       
.. note:: You could announce the transaction with **M**, but it is recommended to use a third party account **(A)** to keep the information about transfer of importance confidential.

If everything is successful, the node will receive an encrypted message through :ref:`WebSockets <websockets>`.
Once the node decrypts the private key of the potential delegated harvester, the node owner may **add R as a delegated harvester** if the following requirements are met:

- The node permits delegated harvesting.
- The node has harvesting slots available.
- The remote account has not sent or received transactions.

.. note:: Announcing a valid **PersistentDelegationRequestTransaction** does not guarantee being added as a delegated harvester. Currently, the only way to verify that an account has successfully activated delegated harvesting is to become the signer of a new block.

.. note:: You may also announce all the above transactions in an aggregate transaction.
