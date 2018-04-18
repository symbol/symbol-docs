##############################
Writing your first application
##############################

This first guide will run you through some :doc:`NEM general concepts <../concepts/account>`. Once you find a new one, it is advisable to read more about it by clicking on the provided link.

After finishing this guide, you will have created your cryptocurrency and made a first :ref:`transaction <transfer-transaction>` in less than 15 minutes.

At first glance, it may seem difficult to imagine that you can do all of this in such a short time. It is possible because NEM tools reduce as much as possible blockchain development complexity, letting developers focus on their product.

*************
Prerequisites
*************

- 15 minutes to spare
- Finished :doc:`getting started section <setup-workstation>`
- Text editor or IDE
- NEM2-SDK and CLI
- An account with XEM

************************
Let’s get into some code
************************

**Checking your balance**

Have you registered an account and requested XEM? If it is not the case, go back to :doc:`getting started section <setup-workstation>`.

First of all, let's check if you have received XEM into your account.

.. code-block:: bash

    $> nem2-cli account info

After running the command, you should see on your screen something similar to:

    New Account: SCVG35-ZSPMYP-L2POZQ-JGSVEG-RYOJ3V-BNIU3U-N2E6

    [...]

    Mosaics

    3628d0b327fb1dd8:       1000000

Our account owns 1.000.000 XEM. If your row after mosaics is empty, try to :doc:`ask for some XEM again <setup-workstation>`.

**Monitoring the blockchain**

It is advisable to see what happens when sending and receiving transactions to the blockchain.

We suggest opening three new terminals, and type the following commands:

The first terminal :ref:`monitors account transactions<guide-debugging-transactions>` validation errors.

.. code-block:: bash

    $> nem2-cli monitor status

Monitoring ``unconfirmed`` shows you in real-time which transactions have reached the network, but are not valid yet.

.. code-block:: bash

    $> nem2-cli monitor unconfirmed

See when a transaction involving the provided address gets ``confirmed``.

.. code-block:: bash

    $> nem2-cli monitor confirmed

**Creating a namespace**

Before creating your cryptocurrency, you need to register a namespace. A :doc:`namespace <../concepts/namespace>` is an on-chain unique domain for your assets.

Register your namespace, choosing a name you like. One common option is to choose your company's or own name.

This name should be available, as it is unique. In this example, we will register a namespace called ``foo``. Let's check if this name is available.

.. code-block:: bash

    $> nem2-cli namespace info --name foo

Is the namespace available? Try to register it before someone else does it!

To register a new namespace, you should specify a namespace name and its renting duration.

.. code-block:: bash
    
    $> nem2-cli transaction namespace --name foo --rootnamespace --duration 1000

Did you check what happened in terminals where you are monitoring your account transactions? The transaction first appeared in ``unconfirmedTransaction`` and when confirmed in ``confirmedTransaction``.

**Creating a mosaic**

A  :doc:`mosaic <../concepts/mosaic>` allows to create configurable smart assets in the blockchain. In that case, it will represent your cryptocurrency.

Mosaics can be used to create cryptocurrencies but also to represent any asset in the blockchain such as objects, tickets, coupons and even stock share representation. Possibilities are endless!

The first step is to choose a name for your mosaic. The name of the mosaic, up to a size limit of ``64`` characters, must be unique under the domain name.

Our mosaic will be called ``token``, and its parent namespace will be ``foo``, with a total supply of ``1.000.000``.

.. code-block:: bash
    
    $> nem2-cli transaction mosaic --mosaicname token --namespacename foo --amount 1000000 --transferable --supplymutable --divisibility 0 --duration 1000

**Send your first transfer transaction**

Let's send some of the mosaics you have created to another account by sending a :ref:`transfer transaction <transfer-transaction>`, one of the most commonly used actions in NEM.

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

        final TransactionHttp transactionHttp = new TransactionHttp('http://localhost:3000');

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

That's it! Easy right? Now you have finished this guide, continue reviewing :doc:`general concepts <../concepts/account>` or practicing with more step by step :doc:`guides <../guides/overview>`.