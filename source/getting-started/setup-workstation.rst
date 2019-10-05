.. post:: 16 Aug, 2018
    :excerpt: 1
    :nocomments:

###########################
Setting up your workstation
###########################

This first guide will walk you through a step-by-step installation of the required tools to start developing on NEM.

We'll be using the **test network**, which allows you to experiment with the offered Catapult's transaction set without having to worry about losing valuable assets by mistake, as the currency used in this network does not have a real value.

.. note:: To run your own **private test network**, follow :doc:`this other guide <../guides/network/creating-a-private-test-net>`.

.. _setup-creating-a-test-account:

*******************
Creating an account
*******************

An account is basically a **deposit box** where we can hold our mosaics (tokens) and interact with them.

1. Install :doc:`NEM2-CLI <../cli>`—a **command-line tool**—to create an :doc:`account <../concepts/account>`.

.. code-block:: bash

    npm install --global nem2-cli@0.13.1

You will need to have installed |node-lts|.

2. Create and save a new account as a **profile**.

.. code-block:: bash

    nem2-cli account generate

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): MIJIN_TEST
    Introduce your private key: 123*******************************************45
    Introduce NEM 2 Node URL. (Example: http://localhost:3000): http://localhost:3000
    Insert profile name (blank means default and it could overwrite the previous profile):

.. note:: If the test network node goes it is not working, you can use another node url from this list. You can also **run your own testnet node** following :doc:`this guide <../guides/network/running-a-test-net-node>`.

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

As the name suggests, the **private key has to be kept secret at all times**. Anyone with access to the private key ultimately has control over the account. On the other hand, you can share securely the public and address of your account with other participants of the network to receive transactions from them.

.. _setup-getting-test-currency:

*********************
Getting test currency
*********************

Now that you have created an account, request ``cat.currency`` units to the **testnet faucet**. You will need to have currency to interact with the blockchain because every action costs a fee in order to provide an incentive for those who validate and secure the network.

1. Copy the account's address you got in the previous step and paste it in the faucet.

2. Then, click the button “CLAIM!”.

3. After the transaction gets confirmed, check if you have received cat.currency using the command-line tool.

.. code-block:: bash

    nem2-cli account info  --profile testnet

    Balance Information
    ┌──────────────────┬─────────────────┬─────────────────┬───────────────────┐
    │ Mosaic Id        │ Relative Amount │ Absolute Amount │ Expiration Height │
    ├──────────────────┼─────────────────┼─────────────────┼───────────────────┤
    │ 0DC67FBE1CAD29E3 │ 299,966,666.6   │ 299966666600000 │ Never             │
    └──────────────────┴─────────────────┴─────────────────┴───────────────────┘

.. note:: The faucet has a limited amount of cat.currency and has to be replenished before it dries. If you don’t need your test cat.currency units anymore, please send them back to the account <NNNN>.

.. _setup-development-environment:

******************
Creating a project
******************

Now that you have your account filled with cat.currency units, it is the time to choose a **programming language**. Pick the one you feel most comfortable with, or follow your project requirements.

**Create a folder for your new project**. Then, run the instructions for the selected language. If none of the language fits your project, you can always query the blockchain directly using the `REST gateway </endpoints.html>`_.

.. tabs::

    .. tab:: TypeScript

        1. Create a ``package.json`` file. The minimum required Node.js version is 8.9.X.

        .. code-block:: bash

            npm init

        2. Install nem2-sdk and rxjs library.

        .. code-block:: bash

            npm install nem2-sdk@0.13.3 rxjs

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

            npm install nem2-sdk@0.13.3 rxjs
..
    .. tab:: Java

        1. Open a new Java `gradle`_ project. The minimum `JDK`_ version is JDK 8. Use your favourite IDE or create a project from the command line.

        .. code-block:: bash

            gradle init --type java-application

        2. Edit ``build.gradle`` to use Maven central repository.

        .. code-block:: java

            repositories {
                mavenCentral()
            }

        3. Add nem2-sdk and reactive library as a dependency.

        .. code-block:: java

            dependencies {
                compile "io.nem:sdk:0.9.1"
                compile "io.reactivex.rxjava2:rxjava:2.1.7"
            }

        4. Execute ``gradle build`` and ``gradle run`` to run your program.
    .. tab:: C#

        1. Create a new project using a C# IDE. If it is Visual Studio, use the Package Manager Console to install the nem2-sdk.

        2. Open the ``Tools > NuGet Package Manager > Package Manager Console`` menu command.

        3. Enter nem2-sdk and reactive library packages names in the terminal.

        .. code-block:: bash

            Install-Package nem2-sdk
            Install-Package System.Reactive

        Are you using another IDE? In that case check |different-ways-to-install-a-nuget-package|.

Continue: :doc:`Writing your first application <first-application>`.

.. _mijin: https://mijin.io/en/product/#mijin2

.. _ts-node: https://www.npmjs.com/package/ts-node

.. _gradle: https://gradle.org/install/

.. _JDK: https://www.oracle.com/technetwork/es/java/javase/downloads/index.html


.. |different-ways-to-install-a-nuget-package| raw:: html

   <a href="https://docs.microsoft.com/en-us/nuget/consume-packages/ways-to-install-a-package" target="_blank">different ways to install a NuGet Package</a>

.. |node-lts| raw:: html

   <a href="https://nodejs.org/en/" target="_blank">Node LTS</a>
