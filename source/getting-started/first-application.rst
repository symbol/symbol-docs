##############################
Writing your first application
##############################

This first guide will run you through some :doc:`NEM general concepts <../concepts/account>`. Once you find a new one, it is advisable to read more about it by clicking on the provided link.

Background
==========

:doc:`Mosaics <../concepts/mosaic>` can be used to represent any asset in the blockchain such as objects, tickets, coupons, stock share representation, and even your cryptocurrency.

After finishing this guide, you will create a mosaic and send your first :ref:`transfer transaction <transfer-transaction>` in less than 15 minutes.

At first glance, it may seem difficult to imagine that you can do all of this in such a short time. NEM tools make it possible by reducing blockchain development complexity, letting developers focus on their product.

*************
Prerequisites
*************

- Finish :doc:`getting started section <setup-workstation>`
- Text editor or IDE
- NEM2-SDK and CLI
- An account with XEM

************************
Let’s get into some code
************************

**Checking your balance**

Have you created an account and requested XEM? If it is not the case, go back to :doc:`getting started section <setup-workstation>`.

First of all, let's check if you have received XEM into your account.

.. code-block:: bash

    $> nem2-cli account info

After running the command, you should see on your screen a line similar to:

    New Account: SCVG35-ZSPMYP-L2POZQ-JGSVEG-RYOJ3V-BNIU3U-N2E6

    [...]

    Mosaics

    3628d0b327fb1dd8:       1000000

Our account owns 1.000.000 XEM. If your row after mosaics is empty, try to :doc:`ask for some XEM again <setup-workstation>`.

**Monitoring the blockchain**

Accounts change the blockchain state through transactions. Once an account announces a transaction, if properly formed, the server will return an OK response.

Receiving an OK response doesn't mean the transaction is valid, hence not included in a block. A good practice is to monitor transactions before being announced.

We suggest opening three new terminals. The first terminal :doc:`monitors announced transactions<../guides/transaction/debugging-transactions>` validation errors.

.. code-block:: bash

    $> nem2-cli monitor status

Monitoring ``unconfirmed`` shows you which transactions have reached the network, but not yet included in a block.

.. code-block:: bash

    $> nem2-cli monitor unconfirmed

Once a transaction is included, you will see it under the ``confirmed`` terminal.

.. code-block:: bash

    $> nem2-cli monitor confirmed


**Creating a namespace**

Before creating your mosaic, you need to register a namespace.

A :doc:`namespace <../concepts/namespace>` is an on-chain unique domain for your assets. The easiest way to appreciate it is the domain and file analogy on the internet. Imagine that a domain address has to be unique in a root (lowest level).

A mosaic is like a file hosted on a domain and represents an asset. Like a website and directory, a mosaic can have the same name as other files on other domains. However,  a namespace + mosaic is always unique, as the root namespace was unique even if the rest of it is not.

Register your namespace, choosing a name you like. One common option is to use your company's or own name.  In this example, we will register a namespace called ``foo``. Let's check if this name is available.

.. code-block:: bash

    $> nem2-cli namespace info --name foo

Is the namespace available? Try to register it before someone else does it!

To register it, specify the namespace name and its renting duration expressed in blocks.

.. note:: In Catapult, NEM blocks are complete every ``15`` seconds in average.

.. code-block:: bash
    
    $> nem2-cli transaction namespace --name foo --rootnamespace --duration 1000

Did you check what happened in terminals where you are monitoring your account transactions? The transaction first appeared under ``unconfirmed`` terminal and after a while got ``confirmed``.

**Creating a mosaic**

Choose the name for your mosaic. The name of the mosaic, up to a size limit of ``64`` characters, must be unique under the domain name.

Our mosaic will be called ``token``, and its parent namespace will be ``foo``, with a total supply of ``1.000.000``.

Reference this mosaic in future transactions as ``foo:token``.

.. code-block:: bash
    
    $> nem2-cli transaction mosaic --mosaicname token --namespacename foo --amount 1000000 --transferable --supplymutable --divisibility 0 --duration 1000

**Send your first transfer transaction**

Congratulations! You are the owner of the mosaic. Now send some ``foo:token`` to another account announcing a :ref:`transfer transaction <transfer-transaction>`, one of the most commonly used actions in NEM.

A transfer transaction is composed of three essential attributes:

* The recipient address.
* A message, that can be encrypted or not.
* An array of mosaics.

In this example, you are going to send ``10 foo:token`` to ``SC7A4H-7CYCSH-4CP4XI-ZS4G2G-CDZ7JP-PR5FRG-2VBU``. You can also include a message, for example ``my first transfer transaction!``. Feel free to change recipient address by creating a new account.

.. example-code::

    .. code-block:: typescript

        import {
            Account, Address, Deadline, UInt64, NetworkType, PlainMessage, TransferTransaction, Mosaic, MosaicId,
            TransactionHttp
        } from 'nem2-sdk';

        const transferTransaction = TransferTransaction.create(
            Deadline.create(),
            Address.createFromRawAddress('SC7A4H-7CYCSH-4CP4XI-ZS4G2G-CDZ7JP-PR5FRG-2VBU'),
            [new Mosaic(new MosaicId('foo:token'), UInt64.fromUint(10))],
            PlainMessage.create('my first transfer transaction!'),
            NetworkType.MIJIN_TEST
        );

    .. code-block:: java

        import io.nem.sdk.model.account.Address;
        import io.nem.sdk.model.blockchain.NetworkType;
        import io.nem.sdk.model.mosaic.Mosaic;
        import io.nem.sdk.model.mosaic.MosaicId;
        import io.nem.sdk.model.transaction.Deadline;
        import io.nem.sdk.model.transaction.PlainMessage;
        import io.nem.sdk.model.transaction.TransferTransaction;

        import java.math.BigInteger;
        import java.util.Arrays;

        import static java.time.temporal.ChronoUnit.HOURS;

        final TransferTransaction transferTransaction = TransferTransaction.create(
            Deadline.create(2, HOURS),
            Address.createFromRawAddress("SC7A4H-7CYCSH-4CP4XI-ZS4G2G-CDZ7JP-PR5FRG-2VBU"),
            Arrays.asList(new Mosaic(new MosaicId("foo:token"), BigInteger.valueOf(10))),
            PlainMessage.create("my first transfer transaction!"),
            NetworkType.MIJIN_TEST
        );

    .. code-block:: javascript

        const nem2Sdk = require("nem2-sdk");

        const Address = nem2Sdk.Address,
            Deadline = nem2Sdk.Deadline,
            Account = nem2Sdk.Account,
            UInt64 = nem2Sdk.UInt64,
            NetworkType = nem2Sdk.NetworkType,
            PlainMessage = nem2Sdk.PlainMessage,
            TransferTransaction = nem2Sdk.TransferTransaction,
            Mosaic = nem2Sdk.Mosaic,
            MosaicId = nem2Sdk.MosaicId,
            TransactionHttp = nem2Sdk.TransactionHttp;

        const transferTransaction = TransferTransaction.create(
            Deadline.create(),
            Address.createFromRawAddress('SC7A4H-7CYCSH-4CP4XI-ZS4G2G-CDZ7JP-PR5FRG-2VBU'),
            [new Mosaic(new MosaicId('foo:token'), UInt64.fromUint(10))],
            PlainMessage.create('my first transfer transaction!'),
            NetworkType.MIJIN_TEST
        );

Although the transaction is created, it has not been announced to the network yet. Sign the transaction with your account first, so the network can verify the authenticity of the transaction.

.. example-code::

    .. code-block:: typescript

        const privateKey = process.env.PRIVATE_KEY;

        const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

        const signedTransaction = account.sign(transferTransaction);

    .. code-block:: java

        final String privateKey = "";

        final Account account = Account.createFromPrivateKey(privateKey,NetworkType.MIJIN_TEST);

        final SignedTransaction signedTransaction = account.sign(transferTransaction);

    .. code-block:: javascript

        const privateKey = process.env.PRIVATE_KEY;

        const account = Account.createFromPrivateKey(privateKey, NetworkType.MIJIN_TEST);

        const signedTransaction = account.sign(transferTransaction);

Once signed, announce it to the network.

.. example-code::

    .. code-block:: typescript

        const transactionHttp = new TransactionHttp('http://localhost:3000');

        transactionHttp.announce(signedTransaction).subscribe(
            x => console.log(x),
            err => console.log(err)
        );

    .. code-block:: java

        final TransactionHttp transactionHttp = new TransactionHttp("http://localhost:3000");

        transactionHttp.announceTransaction(signedTransaction).toFuture().get();

    .. code-block:: javascript

        const transactionHttp = new TransactionHttp('http://localhost:3000');

        transactionHttp.announce(signedTransaction).subscribe(
            x => console.log(x),
            err => console.log(err)
        );

    .. code-block:: bash

        $> nem2-cli transaction transfer --recipient SD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54 --mosaics foo:token::10 --message my_first_transfer_transaction


************
What's next?
************

Continue reviewing :doc:`general concepts <../concepts/account>` or practicing with more step by step :doc:`guides <../guides/overview>`.