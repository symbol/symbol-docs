.. post:: 16 Aug, 2018
    :category: Network
    :excerpt: 1
    :nocomments:

###########################
Setting up your workstation
###########################

This first guide will walk you through a step-by-step installation of the required tools to start developing on NEM.

.. note:: ⚠️ NEM's next core engine, code-named **Catapult**, is `under development <https://github.com/nemtech/catapult-server/milestones>`_. This bootstrap setup is for learning and development purposes, and it **should not power any production Catapult instances**.

.. _setup-catapult-service-bootstrap:

**********************************
Running Catapult Service Bootstrap
**********************************

You are going to run a private chain for learning purposes using |catapult-service-bootstrap|. This service runs Catapult server instances and Catapult REST nodes locally.

1. Make sure you have `docker`_ and `docker-compose`_ installed before running the following commands:

.. code-block:: bash

    git clone https://github.com/tech-bureau/catapult-service-bootstrap.git
    cd catapult-service-bootstrap
    ./cmds/start-all -d

.. note:: Is catapult service bootstrap not working? Check |catapult-service-bootstrap-known-issues|.

2. Check if you can get the first block information:

.. code-block:: bash

    curl localhost:3000/block/1

.. _setup-getting-a-test-account:

**********************
Getting a test account
**********************

An account is a key pair (private and public key) associated to a mutable state stored in the NEM blockchain. In other words, you have a deposit box on the blockchain, which only you can modify with your key pair. As the name suggests, the private key has to be kept secret at all times. Anyone with access to the private key, ultimately has control over the account.

The **public key** is cryptographically derived from the private key. It would take millions of years to do the reverse process and therefore, the public key is safe to be shared.

Finally, the account address is generated with the public key, following the NEM blockchain protocol. Share this address instead of the public key, as it contains more information, such as a validity check or which network it uses (public, testnet or private).

:doc:`NEM2-CLI <../cli>` conveniently allows you to perform the most commonly used commands from your terminal i.e. using it to interact with the blockchain, setting up an account, sending funds, etc.

1. Install NEM2-CLI using ``npm``.

.. code-block:: bash

    sudo npm install --global nem2-cli

2. Open a terminal, and go to the directory where you have download Catapult Bootstrap Service.

.. code-block:: bash

    cd  build/generated-addresses/
    cat addresses.yaml

3. Under the section ``nemesis_addresses``, you will find the key pairs which contain ``cat.currency``. Every action on the blockchain costs cat.currency units, in order to provide an incentive for those who validate and secure the network.

4. Load the first account as a profile in NEM2-CLI.

.. code-block:: bash

    nem2-cli profile create

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): MIJIN_TEST
    Introduce your private key: 41************************************************************FF
    Introduce NEM 2 Node URL. (Example: http://localhost:3000): http://localhost:3000
    Insert profile name (blank means default and it could overwrite the previous profile):

You should see the following lines in your terminal, containing the account credentials:

.. code-block:: bash

    New Account:    SCVG35-ZSPMYP-L2POZQ-JGSVEG-RYOJ3V-BNIU3U-N2E6

    Public Key:     33E0...6ED

    Private Key:    41....FF

.. _setup-development-environment:

**************************************
Setting up the development environment
**************************************

It is time to choose a programming language. Pick the one you feel most comfortable with, or follow your project requirements.

Create a folder for your new project and run the instructions for the selected language.

.. tabs::

    .. tab:: TypeScript

        1. Create a ``package.json`` file. The minimum required Node.js version is 8.9.X.

        .. code-block:: bash

            npm init

        2. Install nem2-sdk and rxjs library.

        .. code-block:: bash

            npm install nem2-sdk rxjs

        3. nem2-sdk is built with TypeScript language. It is recommended to use **TypeScript instead of JavaScript** when building applications for NEM blockchain.

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

            npm install nem2-sdk rxjs
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


.. _docker: https://docs.docker.com/install/

.. _docker-compose: https://docs.docker.com/compose/install/

.. _mijin: https://mijin.io/en/product/#mijin2

.. _ts-node: https://www.npmjs.com/package/ts-node

.. _gradle: https://gradle.org/install/

.. _JDK: https://www.oracle.com/technetwork/es/java/javase/downloads/index.html

.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap" target="_blank">Catapult Service Bootstrap</a>

.. |catapult-service-bootstrap-known-issues| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap#known-issues" target="_blank">these troubleshooting tips</a>

.. |different-ways-to-install-a-nuget-package| raw:: html

   <a href="https://docs.microsoft.com/en-us/nuget/consume-packages/ways-to-install-a-package" target="_blank">different ways to install a NuGet Package</a>
