.. post:: 25 Jan, 2021
    :category: Harvesting
    :tags: SDK
    :excerpt: 1
    :nocomments:

########################################################
Activating delegated harvesting using the Desktop Wallet
########################################################

Share your account's importance securely with a node and get rewarded.

************
Introduction
************

:ref:`Delegated harvesting <delegated-harvesting>` enables accounts to **receive rewards** from creating new blocks **without running a node**. At the same time, it allows nodes to benefit from an account's (possibly higher) :ref:`importance score <importance-calculation>`.

.. note:: Node owners have access to the node's configuration so it's more convenient for them to use :ref:`Remote harvesting <remote-harvesting>` instead.

As explained in the :doc:`manual version of this guide <activating-delegated-harvesting-manual>` there are a number of steps required to enable delegated harvesting, involving different accounts and several transactions. It is thus **much more convenient** to use |codename|'s :ref:`Desktop Wallet <wallet-desktop>` as shown in this guide.

The process requires little more than **selecting the desired node** and **sending a harvesting request**.

*************
Prerequisites
*************

Before you can activate delegated harvesting using the Desktop Wallet, you need the following items:

- An up-to-date **Desktop Wallet**. Download the latest version from `the releases page <https://github.com/nemgrouplimited/symbol-desktop-wallet/releases>`__.

- An **account** with at least **10,000** |networkcurrency| to be :ref:`eligible <account_eligibility>` and then some more to pay for transaction fees. This is the account that will receive the harvesting fees. Keep its secret key secret at all times!

*****
Guide
*****

1. **Select the Harvesting option in the menu on the left**. You should see the Harvesting screen:

   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-0.png
      :align: center
      :class: with-shadow
      :target: /_images/delegated-harvesting-wallet-0.png

   Note that the **Harvesting status** is **🔴 INACTIVE**.

2. **Click on the "Node Url" box** to see a list of nodes currently connected to the network:
   
   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-1.png
      :align: center
      :class: with-rounded-shadow
      :target: /_images/delegated-harvesting-wallet-1.png

   .. note::
      Only nodes which act **both** as :ref:`Peer <peer-node>` and :ref:`API <api-node>` nodes are shown on this list, but you can still request harvesting from pure Peer nodes by **manually writing their URL** in the box. In this case, though, you will also need to provide the node's **transport public key**.

      **This key must be provided by the node owner**. If you have instantiated the node using :doc:`Symbol Bootstrap <../network/running-a-symbol-node>`, you can find this key in the :ref:`addresses.yml <retrieving-node-account>` file.

      A node URL looks like:
      
      .. code-block:: none
      
         http://api-01.eu-west-1.testnet.symboldev.network:3000

3. **Select a node from the list and click on the "Link all keys" button** (You will probably need to scroll down past the "Keys Info" section).

   You will be asked to sign an :doc:`../../concepts/aggregate-transaction`:

   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-2.png
      :align: center
      :class: with-rounded-shadow
      :target: /_images/delegated-harvesting-wallet-2.png

   This aggregate transaction registers :ref:`3 different keys <keypair>` to your account which are needed for harvesting. 

4. **Enter your password and click "Confirm"**.

   The Desktop Wallet will then **sign the transaction** and **announce it to the network**. After a little while (shouldn't take longer than 30 seconds), the screen should update:

   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-3.png
      :align: center
      :class: with-shadow
      :target: /_images/delegated-harvesting-wallet-3.png

   You can see that the **Harvesting status** has changed to **🟡 KEYS LINKED** and the different keys appear in the form.

   All that is left now is to send a :ref:`PersistentDelegationRequest transaction <persistent-delegation-request-transaction>` which is the actual request to the node.

5. **Click on the "Activate" button**.

   Your password is needed again to encrypt the persistent delegation message sent to the node:

   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-4.png
      :align: center
      :class: with-rounded-shadow
      :target: /_images/delegated-harvesting-wallet-4.png

6. **Enter your password and click "Confirm"**.

   Your password is needed one last time to sign and announce the persistent delegation request (which is a special type of :doc:`transfer <../../concepts/transfer-transaction>` transaction):

   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-5.png
      :align: center
      :class: with-rounded-shadow
      :target: /_images/delegated-harvesting-wallet-5.png

7. **Enter your password and click "Confirm"** (again).

   Once you receive the confirmation message (shouldn't take longer than 30 seconds), the **Harvesting status** should change to **🟡 ACTIVATION IN PROGRESS**:

   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-6.png
      :align: center
      :class: with-rounded-shadow
      :target: /_images/delegated-harvesting-wallet-6.png

   At this point it is up to the node to accept the request and add your account as a harvester. When this happens, the **Harvesting status** will change to **🟢 ACTIVE**:

   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-7.png
      :align: center
      :class: with-rounded-shadow
      :target: /_images/delegated-harvesting-wallet-7.png

   Delegated harvesting is now enabled and you should start collecting fees, at a rate proportional to your node's :ref:`importance score <importance-calculation>` (See the **Final words** section below for some remarks).

.. note::

   When requesting delegation through a :ref:`PersistentDelegationRequest transaction <persistent-delegation-request-transaction>` instead of directly configuring the node, whether the node enables delegated harvesting depends entirely on the node and **not on the network**. It is entirely up to the node to comply with the request or even to lie about its state and provide a misleading **Harvesting status** indicator.

   Therefore, there is no **reliable** way to know if your account has become a harvester or not besides waiting to see if your account starts receiving harvesting fees.

   You can find more details about this process in the :doc:`manual version of this guide <activating-delegated-harvesting-manual>`.

***************
Troubleshooting
***************

The **Harvesting status** indicator can help you find out the state of your account's delegated harvesting:

.. csv-table::
   :header: "Status", "Meaning"
   :widths: 30, 70
   :delim: ;

   🔴 INACTIVE; Some keys are missing. Go to step 2.
   🟡 KEYS LINKED; Keys are present but the harvesting delegation request has not been sent. Go to step 5.
   🟡 IN PROGRESS; The harvesting delegation request has been sent but the node has not acknowledged it yet. It might take a few minutes, or it might never happen. There is not much you can do at this point, except trying a different node.
   🟢 ACTIVE; Harvesting is enabled. Harvested blocks and their fees should start arriving, depending on your account's importance.


***********
Final words
***********

- **Accounts with higher importance are selected more often to perform harvesting**. Even if you successfully register as a delegated harvester with a node, you will not harvest any block (nor receive any fees) unless your :ref:`importance score <importance-calculation>` is high enough.

- **Importance score calculation does not happen continuously**. By default, account importance scores are recalculated every 180 blocks (about every 90 minutes). See the ``importanceGrouping`` property in the :ref:`Configuring network properties <config-network-properties>` guide.

- Finally, as explained in the note above, **announcing a Harvesting Delegation request does not guarantee being added as a delegated harvester**. Nodes are free to comply with the request or even to lie about its status.
