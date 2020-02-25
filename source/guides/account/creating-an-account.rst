:orphan:

.. post:: 18 Aug, 2018
    :category: Account
    :excerpt: 1
    :nocomments:

###################
Creating an account
###################

How to create a new |codename| account.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`

*************************
Method #01: Using the SDK
*************************

Open a new file and run the following code snippet to create an account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/CreatingAnAccount.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/account/CreatingAnAccount.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/account/CreatingAnAccount.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

If you already have a private key, you can use it to define a new ``Account`` object.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/OpeningAnAccount.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/account/OpeningAnAccount.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/account/OpeningAnAccount.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

*************************
Method #02: Using the CLI
*************************

.. viewsource:: ../../resources/examples/bash/account/CreatingAnAccount.sh
    :language: bash
    :start-after: #!/bin/sh
