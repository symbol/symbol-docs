.. post:: 16 Aug, 2018
    :excerpt: 1
    :nocomments:

###########################
Setting up your workstation
###########################

This first guide will walk you through a step-by-step installation of the required tools to start developing on Catapult.

We will be using the **test network**, which uses the same technology and features of the future main public network. You can use the testnet to experiment with the offered Catapult's transaction set in a live network without the loss of valuable assets.

.. _setup-creating-a-test-account:

*******************
Creating an account
*******************

An :doc:`account <../concepts/account>` is a deposit box where you can hold :doc:`mosaics <../concepts/mosaic>` (tokens) and interact with them by :doc:`announcing transactions <../concepts/transaction>`.

1. Install NEM2-CLI.

.. code-block:: bash

    npm install --global nem2-cli@0.13.4

.. note:: Use NEM2-CLI only for testing and development purposes, as the private keys stored are not encrypted.

2. Generate a new account and save it as a **profile**.

.. code-block:: bash

    nem2-cli account generate

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): TEST_NET
    Do you want to save the account? [y/n]: y
    Introduce NEM 2 Node URL. (Example: http://localhost:3000): http://api-01.us-east-1.nemtech.network:3000
    Insert the profile name: testnet
    Do you want to set the account as the default profile? [y/n]: y

.. note:: If the test network node is not working, you can use another node url from |network-list|. You can also **run your own testnet node** following :doc:`this guide <../guides/network/running-a-test-net-node>`.

3. You should see the account credentials in your terminal.

.. code-block:: bash

    Profile stored correctly
    ┌─────────────┬──────────────────────────────────────────────────────────────────┐
    │ Property    │ Value                                                            │
    ├─────────────┼──────────────────────────────────────────────────────────────────┤
    │ Address     │ TCVQ2R-XKJQKH-4RJZWG-DARWJ6-V4J4W7-F4DGH6-ZFAB                   │
    ├─────────────┼──────────────────────────────────────────────────────────────────┤
    │ Public Key  │ 203...C0A                                                        │
    ├─────────────┼──────────────────────────────────────────────────────────────────┤
    │ Private Key │ AAA...AAA                                                        │
    └─────────────┴──────────────────────────────────────────────────────────────────┘

.. _setup-getting-test-currency:

*********************
Getting test currency
*********************

To announce a transaction, the sender should pay a :doc:`fee <../concepts/fees>` to provide an incentive to those who validate and secure the network and run the infrastructure. This cost is paid in ``cat.currency`` mosaics, the default network token.

Now that you have created your first account, try to request ``cat.currency`` units from the **testnet faucet**. Navigate |faucet|, indicate the amount of cat.currency you want to receive and the address, and click "CLAIM!".

.. figure:: ../resources/images/screenshots/faucet.png
    :align: center

After the transaction gets confirmed, check if the account has received ``cat.currency`` using the command-line tool.

.. code-block:: bash

    nem2-cli account info  --profile testnet

    Balance Information
    ┌──────────────────┬─────────────────┬─────────────────┬───────────────────┐
    │ Mosaic Id        │ Relative Amount │ Absolute Amount │ Expiration Height │
    ├──────────────────┼─────────────────┼─────────────────┼───────────────────┤
    │ 46BE9BC0626F9B1A │ 1000.0          │ 1000000000      | Never             │
    └──────────────────┴─────────────────┴─────────────────┴───────────────────┘

.. note:: The faucet has a limited amount of ``cat.currency`` and must be replenished before it dries. If you don’t need your test cat.currency units anymore, please send them back to the account ``TAQ4FD-H2UHU5-TZ2VIW-Z6VWSN-MFWR7C-353F73-EUMY``.

.. _setup-development-environment:

******************
Creating a project
******************

Now that you have your account filled with cat.currency units, it is the time to choose a **programming language**. Pick the one you feel most comfortable with, or follow your project requirements.

Then, **create a folder for your new project** and run the instructions for the selected language. If none of the languages fits your project, you can always query the blockchain directly using the :doc:`REST gateway <../api>`.

.. tabs::

    .. tab:: TypeScript

        1. Create a ``package.json`` file. The minimum required Node.js version is 8.9.X.

        .. code-block:: bash

            npm init

        2. Install nem2-sdk and rxjs library.

        .. code-block:: bash

            npm install nem2-sdk@0.15.0 rxjs

        3. We recommend to use **TypeScript instead of JavaScript** when building applications for Catapult.

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

            npm install nem2-sdk@0.15.0 rxjs

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

Continue: :doc:`Writing your first application <first-application>`.

.. _ts-node: https://www.npmjs.com/package/ts-node

.. _gradle: https://gradle.org/install/

.. _JDK: https://www.oracle.com/technetwork/es/java/javase/downloads/index.html

.. |different-ways-to-install-a-nuget-package| raw:: html

   <a href="https://docs.microsoft.com/en-us/nuget/consume-packages/ways-to-install-a-package" target="_blank">different ways to install a NuGet Package</a>

.. |network-list| raw:: html

   <a href="http://explorer.nemtech.network/nodes" target="_blank">this list</a>

.. |faucet| raw:: html

   <a href="http://faucet.nemtech.network/" target="_blank">here</a>
