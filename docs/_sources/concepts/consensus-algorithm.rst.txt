#########
Consensus
#########

The consensus algorithm is the dynamic method through which nodes in a blockchain system **reach an agreement** and **make decisions**.

|codename| utilizes an innovative mechanism called the **Proof-of-Stake Plus** (PoS+), a modified version of the popular **Proof-of-Stake** (|pos|) consensus.

In a basic **PoS** consensus algorithm, the formation of a new block in the blockchain is stochastically assigned to a node based on a combination of factors **related exclusively to the node owner's wealth**.

The **PoS+** mechanism considers the account's stakes too, but it also promotes the ecosystem's health by rewarding participants **based on their activity**.

.. _importance-calculation:

*******
Factors
*******

The algorithm considers the following factors when calculating an account's **importance**, the measure that will ultimately be used to choose the next harvesting node:

* **Stake**: The total amount of :ref:`harvesting mosaic <harvesting-mosaic>` held, since owners with larger balances have the incentive to see the ecosystem flourish. Only accounts holding more than 10'000 harvesting mosaics (**high-value accounts**) are :ref:`eligible <account_eligibility>` for harvesting.
* **Transactions**: The total amount of :doc:`fees <fees>` paid by an account. This encourages being an active account in the network.
* **Nodes**: The number of times an account has been the :ref:`beneficiary <harvesting-rewards>` of the fees collected by a node. Thus the network incentivizes accounts which run nodes.

Periodically, an **importance score** based on these three factors is calculated for all high-value accounts. The importance score determines an account's probability to :doc:`harvest <harvesting>` the next block.

**************
Partial scores
**************

The network calculates first the following **partial scores** for all high-value accounts at the end of each importance period (720 blocks, roughly 6 hours. See ``importanceGrouping`` in :ref:`config-network-properties`):

* **Stake Score** (:math:`S`): Account's balance divided by the balance of all high value accounts, at the end of the period.
* **Transaction Score** (:math:`T`): Total amount of fees paid by the account divided by the total amount of fees paid by all high value accounts during the period.
* **Node Score** (:math:`N`): Number of times the account has been the :ref:`beneficiary <harvesting-rewards>` of a node fee divided by the number of times all high value accounts have been the beneficiary of a node fee, during the period.
* **Activity Score** (:math:`A`): Average of the :math:`T` and :math:`N` scores weighted **80%** and **20%** respectively, divided by the account's balance. Dividing by the account's balance gives some boost to small accounts, because their importance score will depend more on their activity and less on their stake.

  An absolute activity score (:math:`A'`) is calculated first:

  .. math::

     A' = \frac{10000}{Balance}(0.8T+0.2N)

  And the actual activity score (:math:`A`) is calculated by dividing :math:`A'` by the sum of the absolute activity scores of all high value accounts.

The importance score is then calculated based on the above partial scores.

****************
Importance score
****************

The importance score :math:`I` is calculated as the average of the :math:`S` and :math:`A` scores, weighted by an activity factor :math:`\gamma`:

.. math::

    I = \gamma A + (1-\gamma)S

In the |codename| network :math:`\gamma` is 0.05 (**5%**)

Finally, among all accounts :ref:`eligible for harvesting <account_eligibility>`, the probability that a particular one is chosen is proportional to its **effective importance score**, which is defined as **the smaller of the previous two importance scores** :math:`I`.

.. note::

   Since scores are calculated every 720 blocks (roughly 6 hours) and the smaller of the previous **two scores** is used when calculating harvesting probabilities, when you first fund an account it will require **12 hours** to have a probability greater than zero.

*************
Customization
*************

Private networks can **customize the consensus algorithm** by changing the following configuration properties. See :ref:`config-network-properties`.

.. csv-table::
    :header: "Property", "Default", "Description"
    :delim: ;
    :widths: 40 15 45

    ``importanceGrouping``; 720 blocks; How often importance is calculated.
    ``minHarvesterBalance``; 10000; Minimum balance required to be eligible for harvesting.
    ``importanceActivityPercentage``; 0.05; Contribution of the activity score (:math:`\gamma`). When it is 0, PoS+ consensus behaves like conventional PoS.

.. |pos| raw:: html

    <a href="https://en.wikipedia.org/wiki/Proof_of_stake" target="_blank">PoS</a>
