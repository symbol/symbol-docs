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

************************
Let’s get into some code
************************

Call ``getMosaic`` function, passing the mosaicId you want to check as a parameter.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/mosaic/GettingMosaicInformation.ts
        :caption: |getting-mosaic-information-ts|
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/javascript/mosaic/GettingMosaicInformation.js
        :caption: |getting-mosaic-information-js|
        :language: javascript
        :lines: 24-

    .. literalinclude:: ../../resources/examples/cli/mosaic/GettingMosaicInformation.sh
        :caption: |getting-mosaic-information-cli|
        :language: bash
        :start-after: #!/bin/sh

.. |getting-mosaic-information-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/mosaic/GettingMosaicInformation.ts" target="_blank">View Code</a>

.. |getting-mosaic-information-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/mosaic/GettingMosaicInformation.js" target="_blank">View Code</a>

.. |getting-mosaic-information-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/mosaic/GettingMosaicInformation.sh" target="_blank">View Code</a>

