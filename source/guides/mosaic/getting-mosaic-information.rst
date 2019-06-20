:orphan:

.. post:: 08 Apr, 2019
    :category: Mosaic
    :excerpt: 1
    :nocomments:

##############################
Getting the mosaic information
##############################

Get the ownership, divisibility, duration, and flags for a given :doc:`mosaic <../../concepts/mosaic>` identifier.

*************
Prerequisites
*************

- Finish :doc:`creating a mosaic guide <creating-a-mosaic>`

**********************
Getting into some code
**********************

Call ``getMosaic`` function, passing the mosaicId you want to check as a parameter.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/mosaic/GettingMosaicInformation.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/mosaic/GettingMosaicInformation.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/mosaic/GettingMosaicInformation.sh
        :language: bash
        :start-after: #!/bin/sh
