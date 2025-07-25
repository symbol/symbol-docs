#########
Inflation
#########

|codename| engine supports increasing the native currency supply as time passes.
The creation of an **inflationary mosaic** empowers consortium and private networks to apply new token economic models that suit their needs.

************
Distribution
************

Networks with inflation configured can increase the currency mosaic per block.
In this case, the block reward includes the mosaics created due to inflation. The :doc:`harvester <harvesting>` collects the newly created mosaics, sharing them with the beneficiary when set.

The block creating currency mosaics record an :doc:`inflation receipt <receipt>`, listing the amount of mosaics created.

*************
Configuration
*************

The :properties:`starting-at-height-1 <config-inflation.properties>` property defines the amount of currency mosaics created per block.
Besides, the incrementing ratio can vary depending on the block height.
The last height determines the amount of inflation per block that will be created from then on.

.. code-block:: bash

    starting-at-height-1 = 500
    starting-at-height-100 = 400
    starting-at-height-1250 = 0

The previous configuration example inflates 500 currency mosaics per block from height 1 until the next ``starting-at-height-entry``.
Between the blocks 100 and 1250, the currency mosaic supply increases by 400 units per block.
Starting at height 1250, new blocks will not trigger the creation of mosaics.

The `network configuration <https://github.com/symbol/symbol/blob/main/client/catapult/resources/config-network.properties>`_ also describes the initial and **maximum supply** of the native currency mosaic. The maximum supply takes into account the inflation generated per-block.

.. code-block:: bash

    initialCurrencyAtomicUnits = 8'999'999'998'000'000
    maxMosaicAtomicUnits = 9'000'000'000'000'000

