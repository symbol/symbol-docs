:orphan:

###########################
Getting account information
###########################

Getting the public key, height, balance and importance of an :doc:`account <../../concepts/account>`.

*************
Prerequisites
*************

- Finish the :doc:`getting started section <../../getting-started/setup-workstation>`
- Text editor or IDE
- NEM2-SDK or CLI

************************
Let’s get into some code
************************

By calling ``accountHttp.getAccountInfo`` you can get account information just passing address and network as a parameter.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/GettingAccountInformation.ts
        :language: typescript
        :lines:  21-
    
    .. literalinclude:: ../../resources/examples/java/src/test/java/nem2/guides/examples/account/GettingAccountInformation.java
        :language: java
        :lines: 33-40

    .. literalinclude:: ../../resources/examples/javascript/account/GettingAccountInformation.js
        :language: javascript
        :lines: 24-

    .. literalinclude:: ../../resources/examples/cli/account/GettingAccountInformation.sh
        :language: bash
        :start-after: #!/bin/sh
    
Can you spot account's public key?

    publicKey: 'F33152059827EAA4D7D67C6E27A59851AF09FBD0926C35150FA44D2A9A5E4CAA',

Which block was the first one where account address and public key appeared?

    publicKeyHeight: UInt64 { lower: 401575, higher: 0 },
    addressHeight: UInt64 { lower: 288598, higher: 0 },

Does the account have an importance?

    importance: UInt64 { lower: 1100282, higher: 0 },

**Checking account's balance**

Check account's balance using ``mosaicService``. The balance is the amount of the different mosaics stored on the account.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/account/CheckingBalanceOfAnAccount.ts
        :language: typescript
        :lines:  22-

    .. literalinclude:: ../../resources/examples/javascript/account/CheckingBalanceOfAnAccount.js
        :language: javascript
        :lines: 29-

    .. literalinclude:: ../../resources/examples/cli/account/CheckingBalanceOfAnAccount.sh
        :language: bash
        :start-after: #!/bin/sh

************
What’s next?
************

Try to retrieve the balance by only filtering XEM amount.
