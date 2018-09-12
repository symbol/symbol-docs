:orphan:

.. post:: 18 Aug, 2018
    :category: account
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

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/GettingTheAmountOfXEMSentToAnAccount.ts
        :language: typescript
        :lines:  22-

    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/GettingTheAmountOfXEMSentToAnAccount.java
        :language: java
        :lines: 40-66

The amount of XEM sent is displayed in your terminal.

************
What’s next?
************

Repeat the example by changing NEM filter for another :doc:`mosaic <../../concepts/mosaic>` .