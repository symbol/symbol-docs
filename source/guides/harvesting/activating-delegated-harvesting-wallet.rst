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

   Note that the **Harvesting status** is **INACTIVE**.

2. **Click on the Node Url box** to see a list of nodes currently connected to the network:
   
   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-1.png
      :align: center
      :class: with-rounded-shadow
      :target: /_images/delegated-harvesting-wallet-1.png

   .. note::
      Only nodes which act **both** as :ref:`Peer <peer-node>` and :ref:`API <api-node>` nodes are shown on this list, but you can still request harvesting from pure Peer nodes by **manually writing their URL** in the box. In this case, though, you will also need to provide the node's **transport public key**.

      **This key must be provided by the node owner**. If you have instantiated the node using :doc:`Symbol Bootstrap <../network/running-a-test-net-node>`, you can find this key in the :ref:`addresses.yml <retrieving-node-account>` file.

      A node URL looks like:
      
      .. code-block:: none
      
         http://api-01.eu-west-1.testnet.symboldev.network:3000

3. **Select a node from the list and click on the Start button**. You will be asked to sign two transactions (in a single dialog box). The first one is an **aggregate transaction**:

   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-2.png
      :align: center
      :class: with-rounded-shadow
      :target: /_images/delegated-harvesting-wallet-2.png

   This aggregate transaction registers 3 different keys to your account which are needed for harvesting. The second transaction:

   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-3.png
      :align: center
      :class: with-rounded-shadow
      :target: /_images/delegated-harvesting-wallet-3.png

   Is a :ref:`PersistentDelegationRequest transaction <persistent-delegation-request-transaction>` which is the actual request to the node.

4. **Enter your password and click Confirm**.

   The Desktop Wallet will then **sign both transactions** and **announce the first one**:

   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-4.png
      :align: center
      :class: with-rounded-shadow
      :target: /_images/delegated-harvesting-wallet-4.png

   (The second transaction cannot be announced until the first one is **confirmed**).

5. **Wait until the first transaction is confirmed** (shouldn't take more than 30 seconds):

   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-5.png
      :align: center
      :class: with-rounded-shadow
      :target: /_images/delegated-harvesting-wallet-5.png

   Once you receive the confirmation message, the Harvesting status should change to **KEYS LINKED**:

   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-6.png
      :align: center
      :class: with-rounded-shadow
      :target: /_images/delegated-harvesting-wallet-6.png

   You are now ready to **send the second transaction**. Keep in mind that the transactions have a **deadline** so you must send them before it expires (typically **before 2 hours** after signing them).

6. **Click the Activate button** to send the second transaction and wait for its confirmation (again, it shouldn't take more than 30 seconds).

   Once confirmed, the harvesting status should change to **ACTIVE**:

   .. image:: /resources/images/screenshots/delegated-harvesting-wallet-7.png
      :align: center
      :class: with-rounded-shadow
      :target: /_images/delegated-harvesting-wallet-7.png

   At this point delegated harvesting is enabled.

.. note::

   When requesting delegation through a :ref:`PersistentDelegationRequest transaction <persistent-delegation-request-transaction>` instead of directly configuring the node, whether the node enables delegated harvesting depends entirely on the node and **not on the network**. It is entirely up to the node to comply with the request or even to lie about its state and provide a misleading **Harvesting status** indicator.

   Therefore, there is no **reliable** way to know if your account has become a harvester or not besides waiting to see if your account starts receiving harvesting fees.

   You can find more details about this process in the :doc:`manual version of this guide <activating-delegated-harvesting-manual>`.

***********
Final words
***********

- **Accounts with higher importance are selected more often to perform harvesting**. Even if you successfully register as a delegated harvester with a node, you will not harvest any block (nor receive any fees) unless your :ref:`importance score <importance-calculation>` is high enough.

- **Importance score calculation does not happen continuously**. By default, account importance scores are recalculated every 180 blocks (about every 90 minutes). See the ``importanceGrouping`` property in the :ref:`Configuring network properties <config-network-properties>` guide.

- Finally, as explained in the note above, **announcing a Harvesting Delegation request does not guarantee being added as a delegated harvester**. Nodes are free to comply with the request or even to lie about its status.
