.. post:: 16 Aug, 2018
    :excerpt: 1
    :nocomments:

###########################
Setting up your workstation
###########################

This first guide will walk you through a step-by-step installation of the required tools to start developing on NEM.

We will be using the test network, which uses the same technology and features of the future main public network. As the currency in the test network does not have any real value, it allows you to experiment with the offered Catapult's transaction set without the loss of valuable assets.

.. note:: To run your own **private test network**, follow :doc:`this other guide <../guides/network/creating-a-private-test-net>`.

.. _setup-creating-a-test-account:

*******************
Creating an account
*******************

An :doc:`account <../concepts/account>` is a **deposit box** where you can hold :doc:`mosaics <../concepts/mosaic>` (tokens) and interact with them by :doc:`announcing transactions <../concepts/transaction>`.

We are going to create a new account with NEM2-CLI, a command-line tool to perform the most commonly used actions i.e. interacting with the blockchain, setting up an account, sending funds, etc.

1. Install :doc:`NEM2-CLI <../cli>`.

.. code-block:: bash

    npm install --global nem2-cli@0.13.4

2. Generate a new account and save it as a **profile**.

.. code-block:: bash

    nem2-cli account generate

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): MIJIN_TEST
    Introduce your private key: 123*******************************************45
    Introduce NEM 2 Node URL. (Example: http://localhost:3000): http://localhost:3000
    Insert profile name (blank means default and it could overwrite the previous profile):

.. note:: If the test network node is not working, you can use another node url from this list. You can also **run your own testnet node** following :doc:`this guide <../guides/network/running-a-test-net-node>`.

3. You should see the account credentials in your terminal.

.. code-block:: bash

    Profile stored correctly
    ┌─────────────┬──────────────────────────────────────────────────────────────────┐
    │ Property    │ Value                                                            │
    ├─────────────┼──────────────────────────────────────────────────────────────────┤
    │ Address     │ SCVG35-ZSPMYP-L2POZQ-JGSVEG-RYOJ3V-BNIU3U-N2E6                   │
    ├─────────────┼──────────────────────────────────────────────────────────────────┤
    │ Public Key  │ 654***321                                                        │
    ├─────────────┼──────────────────────────────────────────────────────────────────┤
    │ Private Key │ 123***456                                                        │
    └─────────────┴──────────────────────────────────────────────────────────────────┘

.. note:: Use NEM2-CLI only for testing and development purposes, as the private keys stored are not encrypted.

As the name suggests, the **private key has to be kept secret at all times**. Anyone with access to the private key ultimately has control over the account. On the other hand, you can share securely the public and address of your account with other participants of the network to receive transactions from them.

.. _setup-getting-test-currency:

*********************
Getting test currency
*********************

When announcing a transaction, accounts have to pay an :ref:`associated cost <fees>` to provide an incentive to those who validate and secure the network and run the infrastructure. This cost is paid in ``cat.currency`` mosaics, the default network token.

Now that you have created your first account account, try to request ``cat.currency`` units to the **testnet faucet**.

1. Copy the account's address you got in the previous step and paste it in the faucet.

2. Click the button “CLAIM!”.

3. After the transaction gets confirmed, check if you have received ``cat.currency`` using the command-line tool.

.. code-block:: bash

    nem2-cli account info  --profile testnet

    Balance Information
    ┌──────────────────┬─────────────────┬─────────────────┬───────────────────┐
    │ Mosaic Id        │ Relative Amount │ Absolute Amount │ Expiration Height │
    ├──────────────────┼─────────────────┼─────────────────┼───────────────────┤
    │ 0DC67FBE1CAD29E3 │ 299,966,666.6   │ 299966666600000 │ Never             │
    └──────────────────┴─────────────────┴─────────────────┴───────────────────┘

.. note:: The faucet has a limited amount of ``cat.currency`` and has to be replenished before it dries. If you don’t need your test cat.currency units anymore, please send them back to the account ``SBSXJR-XCHIFQ-IA4RK2-DKOYXL-43IXPQ-WSC5FE-S3XB``.

.. _setup-development-environment:

******************
Creating a project
******************

Now that you have your account filled with cat.currency units, it is the time to choose a **programming language**. Pick the one you feel most comfortable with, or follow your project requirements.

Then, **create a folder for your new project** and run the instructions for the selected language. If none of the languages fits your project, you can always query the blockchain directly using the `REST gateway </endpoints.html>`_.

.. tabs::

    .. tab:: TypeScript

        1. Create a ``package.json`` file. The minimum required Node.js version is 8.9.X.

        .. code-block:: bash

            npm init

        2. Install nem2-sdk and rxjs library.

        .. code-block:: bash

            npm install nem2-sdk@0.14.4 rxjs

        3. We recommend to use **TypeScript instead of JavaScript** when building applications for NEM blockchain.

        Make sure you have at least version 2.5.X installed.

        .. code-block:: bash

            sudo npm install --global typescript
            typescript --version

        4. Use `ts-node`_ to execute TypeScript files with node.

        .. code-block:: bash

            sudo npm install --global ts-node

    .. tab:: JavaScript

        1. Create a ``package.json`` file. The minimum required Node.js version is 8.9.X.

        .. code-block:: bash

            npm init

        2. Install nem2-sdk and rxjs library.

        .. code-block:: bash

            npm install nem2-sdk@0.14.4 rxjs

    .. tab:: Java

        1. Open a new Java `gradle`_ project. The minimum `JDK`_ version is JDK 8. Use your favourite IDE or create a project from the command line.

        .. code-block:: bash

            gradle init --type java-application

        2. Edit ``build.gradle`` to use Maven central repository.

        .. code-block:: java

            repositories {
                mavenCentral()
            }

        3. Add nem2-sdk as a dependency.

        .. code-block:: java

            dependencies {
                compile "compile 'io.nem:sdk-vertx-client:0.14.2"
            }

        4. Execute ``gradle build`` and ``gradle run`` to run your program.

..
    .. tab:: C#

        1. Create a new project using a C# IDE. If it is Visual Studio, use the Package Manager Console to install the nem2-sdk.

        2. Open the ``Tools > NuGet Package Manager > Package Manager Console`` menu command.

        3. Enter nem2-sdk and reactive library packages names in the terminal.

        .. code-block:: bash

            Install-Package nem2-sdk
            Install-Package System.Reactive

        Are you using another IDE? In that case check |different-ways-to-install-a-nuget-package|.

Continue: :doc:`Writing your first application <first-application>`.

.. _ts-node: https://www.npmjs.com/package/ts-node

.. _gradle: https://gradle.org/install/

.. _JDK: https://www.oracle.com/technetwork/es/java/javase/downloads/index.html

.. |different-ways-to-install-a-nuget-package| raw:: html

   <a href="https://docs.microsoft.com/en-us/nuget/consume-packages/ways-to-install-a-package" target="_blank">different ways to install a NuGet Package</a>
