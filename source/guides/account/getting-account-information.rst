:orphan:

.. post:: 18 Aug, 2018
    :category: Account
    :excerpt: 1
    :nocomments:

###############################
Getting the account information
###############################

Get the public key and balance of an account.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with network currency <setup-creating-a-test-account>`

*************************
Method #01: Using the SDK
*************************

1. Open a new file and call ``getAccountInfo`` function, passing your account's address as a parameter.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/GettingAccountInformation.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/account/GettingAccountInformation.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/GettingAccountInformation.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

*************************
Method #02: Using the CLI
*************************

.. viewsource:: ../../resources/examples/bash/account/GettingAccountInformation.sh
    :language: bash
    :start-after: #!/bin/sh
