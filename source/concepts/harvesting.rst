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
Eligible accounts can use their importance score to create new blocks either by :ref:`running a node <local-harvesting>` or :ref:`delegating harvesting <delegated-harvesting>` to another node.

Regardless of the method chosen, **any account willing to activate harvesting must first announce a valid** :ref:`VrfKeyTransaction <vrf-key-link-transaction>`.
The VRF transaction links the harvester account with a second key pair to randomize block production and leader selection.

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

Network operators can define a **network fee sink account** that will receive a percentage of the harvesting rewards (block :doc:`fees <fees>` and :doc:`inflation <inflation>`). In the case of the public network, this fee could be used to create supernode programs, reward accounts that participate in the finalization process or advance the network development. By default, the public test network sets this percentage to **5%**.

Additionally, each node can set a **beneficiary account** to share a percentage (up to 25%) of the harvesting rewards. The node operators can use this feature to create incentive structures for their node supporters.

The sharing ratios for the beneficiary and network sink accounts are :ref:`configurable per network <config-network-properties>`. 

.. figure:: ../resources/images/diagrams/network-sink-beneficiary.png
    :align: center
    :width: 600px

    Rewards division when the network's sharing ratio for network sink is 20% and for beneficiary is 10%.

.. note:: The calculation of the beneficiary percentage will occur after the network sink calculation. When the node operator does not define a beneficiary or a Network Fee Sink, all the rewards go to the block signer.

.. _local-harvesting:

****************
Local harvesting
****************

Any :ref:`eligible account <account_eligibility>` can harvest new blocks by running a node.
To harvest locally, a node must provide the following properties in the :properties:`config-harvesting.properties <config-node-properties>` file:

.. raw:: html
    :file: ../_static/config-harvesting.properties.html

As it can be seen, the harvester account's **private key** must be stored in the node configuration, since it will be used to sign off created blocks. This is a **security concern** since this account contains funds (at the very least, the collected :ref:`harvesting fees <harvesting-rewards>`), and funded accounts' private keys are typically stored offline.

To avoid storing private keys on a node which is available online and therefore susceptible to attack, use :ref:`delegated harvesting <delegated-harvesting>`.

.. _delegated-harvesting:

********************
Delegated harvesting
********************

Delegated harvesting allows using the :ref:`importance score <importance-calculation>` of an account to create new blocks and receive rewards without having to run a node locally or exposing the account's private key.

An :ref:`eligible account <account_eligibility>` can delegate its importance score to a **remote account** which acts as a proxy. The remote account signs off created blocks, sharing its **private key** with the a node, but **harvesting fees are sent to the original account**.

With delegated harvesting, an account without a node can still collect harvesting fees, and a node with a low importance score can still be selected as a harvester, thanks to the delegated importance from the first account. **It is a beneficial agreement to both parties.**

Security-wise, sharing a proxy private key involves **minimal risk** since:

* The remote account has **no funds**.

* The remote account **can't transfer the delegated importance score** to a third account.

Keep in mind that remote harvesters may not receive the entire reward if:

*  The :ref:`network fee <harvesting-rewards>` is greater than 0.

*  The selected node has defined a :ref:`beneficiary account <harvesting-rewards>`.

.. note:: See the :doc:`Activating Delegated Harvesting <../guides/accountlink/activating-delegated-harvesting>` guide for step-by-step instructions on how to activate this feature.

**********
Comparison
**********

.. csv-table::
    :header: "", "Local harvesting", "Delegated harvesting"
    :delim: ;
    :widths: 15, 43, 42

    **Setup** ; Install a `catapult-server <https://github.com/nemtech/catapult-server>`_ node.; :doc:`Activate remote harvesting <../guides/accountlink/activating-delegated-harvesting>`.
    **Cost** ; Node maintenance (electricity, VPN, ...) + :ref:`VrfKeyLinkTransaction <vrf-key-link-transaction>` announcement fees.; Announcement fees for **4** transactions.
    **Security**; The node stores the main account's private key.;  The node stores a proxy account's private key.
    **Reward**; Total reward. The node owner can share part of it with a beneficiary account.; Total reward minus any beneficiary share set on the node.

********************
Related transactions
********************

.. csv-table::
    :header:  "Id",  "Type", "Description"
    :widths: 15 41 44
    :delim: ;

    0x4243; :ref:`VrfKeyLinkTransaction <vrf-key-link-transaction>`; Link an account with a VRF public key. Required for all harvesting eligible accounts.
    0x414C; :ref:`AccountKeyLinkTransaction <account-key-link-transaction>`; Delegate the account importance to a proxy account. Required for all accounts willing to activate delegated harvesting.
    0x424C; :ref:`NodeKeyLinkTransaction <node-key-link-transaction>`; Link an account with a public key used by TLS to create sessions. Required for all accounts willing to activate delegated harvesting.
    ; :ref:`PersistentDelegationRequestTransaction <persistent-delegation-request-transaction>`; Request a node to add an account as a delegated harvester.

******
Guides
******

.. postlist::
    :category: Harvesting
    :date: %A, %B %d, %Y
    :format: {title}
    :list-style: circle
    :excerpts:
    :sort:

Continue: :doc:`Inflation <inflation>`.
