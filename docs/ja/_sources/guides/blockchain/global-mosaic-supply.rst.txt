.. post:: 27 May, 2021
    :category: Blockchain
    :tags: REST
    :excerpt: 1
    :nocomments:

###################################
Retrieving the global mosaic supply
###################################

Different values regarding the total supply of |networkcurrency| are available in real-time, through REST endpoints on any |codename| API node. Click on each endpoint below for an example.

The return value of the following endpoints is always a decimal number in **plaintext**, using a period ``.`` as the decimal separator.

**************
Maximum supply
**************

The maximum amount of |networkcurrency| that will ever exist in the network:

.. topic:: Endpoint

   ``/network/currency/supply/max``

In |codename|'s MAINNET this value is always ``8999999999``.

************
Total supply
************

The total amount of |networkcurrency| that exist right now.

Inflation, through block rewards, slowly increases this number until it reaches the maximum supply.

.. topic:: Endpoint

   ``/network/currency/supply/total``

For example: ``7881002838.303334``.

******************
Circulating supply
******************

The amount of |networkcurrency| currently in the market and in the general public's hands.

This is the total supply minus the funds locked for opt-in payouts, reward programs, etc.

.. topic:: Endpoint

   ``/network/currency/supply/circulating``

For example: ``5404143654.714409``.