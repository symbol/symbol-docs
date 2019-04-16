:orphan:

.. post:: 18 Aug, 2018
    :category: Account
    :excerpt: 1
    :nocomments:

###############################
Getting the account information
###############################

Get the public key and balance of an :doc:`account <../../concepts/account>`.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Have one :ref:`account with cat.currency <setup-getting-a-test-account>`

************************
Let’s get into some code
************************

1. Call ``getAccountInfo`` function, passing your account's address as a parameter.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/GettingAccountInformation.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/GettingAccountInformation.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/account/GettingAccountInformation.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/account/GettingAccountInformation.sh
        :language: bash
        :start-after: #!/bin/sh

Can you determine the account's public key? The **public key** identifies your account publicly in the network. Your  **address** is derived from it, which contains further information such as network and validity check.

If you don't have a public key assigned, that means that your account has not announced or received any transaction yet. The ``addressHeight`` and ``publicKeyHeight`` specify the block where your address and public key first appeared.

The ``importance`` field represents the numerical relation between the number of harvesting mosaics the account owns and the total mosaic supply. The greater the importance, the more chances to :doc:`harvest <../../concepts/harvesting>` new blocks.

The balance is the amount of the different :doc:`mosaics <../../concepts/mosaic>` owned by the account.

2.  How many different mosaics does your account hold? Call ``mosaicsAmountViewFromAddress`` function, passing your account's address as a parameter.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/CheckingBalanceOfAnAccount.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/javascript/account/CheckingBalanceOfAnAccount.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/bash/account/CheckingBalanceOfAnAccount.sh
        :language: bash
        :start-after: #!/bin/sh
