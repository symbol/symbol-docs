.. post:: 03 Aug, 2018
    :category: Account
    :tags: SDK, CLI
    :excerpt: 1
    :nocomments:

###############################
Getting the account information
###############################

Get the public key and balance of an account.

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.
- Create :ref:`an account <setup-creating-a-test-account>`.

*************************
Method #01: Using the SDK
*************************

Open a new file and call the ``getAccountInfo`` function from the ``AccountHttp`` repository.
Pass your account's address as a parameter.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/GettingAccountInformation.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/account/GettingAccountInformation.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/account/GettingAccountInformation.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

*************************
Method #02: Using the CLI
*************************

Open a terminal window and run the following command.

Replace ``TCHBDE-NCLKEB-ILBPWP-3JPB2X-NY64OE-7PYHHE-32I`` with the address you want to query.

.. viewsource:: ../../resources/examples/bash/account/GettingAccountInformation.sh
    :language: bash
    :start-after: #!/bin/sh
