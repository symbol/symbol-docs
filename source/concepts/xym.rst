###
XYM
###

**XYM** is the native currency of the |codename| blockchain (not to be confused with NEM's currency, **XEM**).

As is common practice in blockchain, XYM is used to pay for transaction fees which revert to node owners, incentivizing network growth.

At the same time, since |codename|'s :doc:`Consensus algorithm <consensus-algorithm>` is based on Proof-of-Stake, XYM plays an essential role in securing the platform.

XYM is just one of the :doc:`mosaics <mosaic>` supported by the |codename| blockchain. Its identifier is ``symbol.xym``.

Tokenomics
**********

.. list-table::
   :widths: 25 75

   * - **Maximum Supply**
     - 8,999,999,999 XYM
   * - **Initial Supply**
     - 7,842,928,625 XYM

       Allocated to accounts based on their **XEM** holdings during |codename|'s launch (See :doc:`the opt-in guides <../guides/migration/post-launch-optin-xym-retrieval>`).
   * - **Inflation**
     - 1,157,071,374 XYM

       Reserved for inflationary :ref:`harvesting-rewards`, halved every 4 years (like Bitcoin but with a more gradual decline, dropping every quarter).
   * - **Team reserves**
     - The core team holds 22% of **Initial or Maximum supply ???** to fund the further development of the network.
   * - **Rewards**
     - :ref:`Delegated harvesters <delegated-harvesting>` earn rewards just by holding XYM.

       Harvesters can earn greater rewards by running :doc:`nodes <node>`.
