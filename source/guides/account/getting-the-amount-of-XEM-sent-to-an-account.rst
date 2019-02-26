:orphan:

.. post:: 18 Aug, 2018
    :category: Account
    :excerpt: 1
    :nocomments:
    
############################################
Getting the amount of XEM sent to an account
############################################

Check the amount of XEM you have sent to any account.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Text editor or IDE
- NEM2-SDK or CLI

************************
Let’s get into some code
************************

The underlying cryptocurrency of the NEM public network is called **XEM**. Every action on the NEM blockchain costs XEM, in order to provide an incentive for those who validate and secure the network.

In this example, we are going to check how many native currency mosaic units holds an account.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/GettingTheAmountOfXEMSentToAnAccount.ts
        :caption: |getting-amount-of-xem-sent-to-an-account-ts|
        :language: typescript
        :lines:  30-

If you want to check another :doc:`mosaic <../../concepts/mosaic>` different than the native currency, change ``mosaicId`` and ``divisibility`` for the target mosaic properties.

.. code-block:: typescript

    const mosaicId = new MosaicId([3562970624, 976072438]);
    const divisibility = 6;

.. |getting-amount-of-xem-sent-to-an-account-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/account/GettingTheAmountOfXEMSentToAnAccount.ts" target="_blank">View Code</a>