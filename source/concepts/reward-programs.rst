###############
Reward Programs
###############

:doc:`Nodes <node>` **are the backbone of any blockchain**, since they are the ones creating and storing the blocks, among other things. It is therefore **critical** that as many nodes as possible are active in the network at all times.

Beyond the direct **block rewards** (:doc:`fees` and :doc:`inflation`) that nodes obtain for producing blocks, |codename| **provides a series of special Reward Programs** aimed at further encouraging users to create and maintain nodes.

Each of these programs rewards **a different aspect of the network**:

- :ref:`supernode-program`: For powerful, high-availability and high-throughput nodes.
- :ref:`voting-node-program`: For nodes supporting Finalization, |codename|'s fork resolution mechanism.

In most cases, node owners wishing to benefit from these programs must explicitly **enroll** to them. The descriptions below contain **guides** explaining how to enroll to each program.

.. warning:: None of the reward programs has launched yet. The information shown below is subject to change until the programs officially start.

.. _supernode-program:

*****************
Supernode Program
*****************

This program aims at ensuring that a sufficiently large number of **powerful nodes** will always be available to guarantee the smooth functioning of the network.

Requirements
============

Supernodes are regular nodes meeting the following additional hardware and operational requirements:

.. csv-table::
    :header: "Parameter", "Requirement"
    :delim: ;
    :widths: 30 70

    **Node type**; Must be a Dual node (Both a :ref:`Peer <peer-node>` and an :ref:`API <api-node>` node).
    **Bandwidth**; **5'000 kbit/s** or higher, calculated by downloading 2MB files from 3 other random nodes on the network.
    **Chain Height**; Chain must be synchronized no more than **4 blocks** behind the reference height.
    **Chain Part**; Upload **50 random blocks hashes** of the chain accurately. These are compared to the reference chain hashes for accuracy.
    **Computing Power**; Hash at least **2'000 iterations per second**. Node is requested to calculate 10'000 iterations of a 32 byte seed. Speed and accuracy are measured.
    **Bonded Deposit**; At least **1, 2 or 3 million** |networkcurrency| must be stacked on the node. The amount will decide the reward tier (see below).
    **Version**; |codename| must be **up to date**. Nodes should be updated within **10 days** of each new |codename| release.
    **Ping**; **200ms response or less**. Node is requested to ping 20 other random nodes on the network and at least one ping time must pass the test (each node will be pinged 5 times and response times averaged).
    **Responsiveness**; **1 second**. 10 blockchain height requests will be made and at least 9 must answer in less than 1 second.

.. _reward-programs-controller:

To ensure all of the above, a **lightweight monitoring agent** is installed on the node which reports to a controller on the network. The controller performs all the above checks **a few times per day** on each registered supernode and makes daily payments.

Rewards
=======

.. sidebar:: Total daily rewards

    .. csv-table::
        :delim: ;
        :widths: 30 70
        :class: right-align

        Year 1; 15'000 |networkcurrency|
        Year 2; 15'000 |networkcurrency|
        Year 3; 15'000 |networkcurrency|
        Year 4; 14'000 |networkcurrency|
        Year 5; 10'000 |networkcurrency|
        Year 6;  5'000 |networkcurrency|

This program will last for **6 years** after the launch date of |codename|, with decreasing rewards each year.

Supernodes are divided in **3 tiers** according to their staked |networkcurrency|: More than 1 million, more than 2 million and more than 3 million.

The available **Total daily rewards** are split among all program participants according to their tier in the following fashion:

- Each tier 1 nodes gets 17.33% of the **Total daily reward** divided by the total number of participating nodes.

- Each tier 2 nodes gets 46.67% of the **Total daily reward** divided by the total number of participating nodes.

- Tier 3 nodes get the remainder, uniformly distributed among them.

See the complete `Terms & Conditions <https://drive.google.com/file/d/1Q51SJNxeKVFWXQOogRSUrcn8e1Le-k2-/view?usp=sharing>`__.

.. note::

    :doc:`Follow this guide to enroll to the Supernode program <../guides/network/supernode-enrollment>`.

.. _voting-node-program:

*******************
Voting Node Program
*******************

|codename| provides **fast response times** even when **network disconnections** isolate some of the nodes. When connectivity is restored any **conflicts** which might have arisen (network forks) are resolved by the :ref:`finalization` process. This process requires some nodes to periodically **vote** on which branches are valid according to their records. Blocks deemed invalid are then :ref:`rolled back <rollbacks>`.

This program aims at ensuring that enough **voting nodes** are always present in the network so fork resolution is conducted reliably.

Requirements
============

Voting nodes are regular nodes meeting the following additional requirements:

.. csv-table::
    :header: "Parameter", "Requirement"
    :delim: ;
    :widths: 30 70

    **Bonded Deposit**; At least **3 million** |networkcurrency| must be stacked on the node.
    **Voting keys**; The node must signal its interest in becoming a voting node by registering its :ref:`Voting Key <voting-key-link-transaction>`.

Although not mandatory, it is **recommended** that voting nodes meet the same hardware requirements as :ref:`supernodes <supernode-program>`. In fact, it is expected that participants of the Voting Node Program will also enroll to the Supernode program.

Rewards
=======

**5% of all block harvesting rewards** is set aside for voting nodes. After each :ref:`finalization round <finalization>` these rewards are **evenly distributed** among all nodes that participated in that round (and paid on a daily basis). There is **no explicit enrollment required** for this program.

.. note::

    If you created your node using Symbol Bootstrap, :ref:`follow this guide to enable voting <bootstrap-enable-voting>`.

    Otherwise, :ref:`follow this guide to enable voting manually <manual-enable-voting>`.

See the complete `Terms & Conditions <https://drive.google.com/file/d/1Q-Ph2KGKN3Vr6GVampFvlfitZHirhthA/view?usp=sharing>`__.
