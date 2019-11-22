.. post:: 16 Aug, 2018
    :category: SDK
    :excerpt: 1
    :nocomments:

###########################
Setting up your workstation
###########################

This first guide will walk you through a step-by-step installation of the required tools to start developing on Catapult.

.. _setup-catapult-service-bootstrap:

**********************************
Running Catapult Service Bootstrap
**********************************

To run the network, we are going to use the package |catapult-service-bootstrap|. This software suite contains the necessary setup scripts to quickly build your own test network.

.. note:: Catapult's next core engine, code-named **Catapult**, is `under development <https://github.com/nemtech/catapult-server/milestones>`_. This bootstrap setup is for learning and development purposes, and it should not power any production Catapult instances.

Environment requirements
========================

* **OS**: Linux or Mac
* `docker`_ 19.03 installed
* `docker-compose`_ 1.22 installed

Installation
============

1. Use this link to **download the latest release** of the package, or clone the repository directly using Git.

.. code-block:: bash

    git clone https://github.com/tech-bureau/catapult-service-bootstrap.git --branch 0.9.0.1

2. Open the ``catapult-service-bootstrap`` folder.

.. code-block:: bash

    cd catapult-service-bootstrap

3. Run the network.

.. code-block:: bash

    ./cmds/start-all

.. note:: To run the docker containers in the background of your terminal, you can run the service in detached mode using the option ``--detach`` or ``-d``.

Verify that the node is running by opening a new browser tab with the following URL: ``localhost:3000/chain/height``.

To stop the process, press ``Ctrl+C``.

.. _setup-getting-a-test-account:

**********************
Getting a test account
**********************

An :doc:`account <../concepts/account>` is a deposit box where you can hold :doc:`mosaics <../concepts/mosaic>` (tokens) and interact with them by :doc:`announcing transactions <../concepts/transaction>`.

After running the ``catapult-service-bootstrap`` tool for the first time, the available currency supply is distributed between a generated set of accounts. To keep one of these accounts quickly retrievable, we are going to store one of them using a command-line tool to conveniently perform the most commonly used actions i.e. interact with the blockchain, setting up an account, sending funds, etc.

1. Install :doc:`NEM2-CLI <../cli>`.

.. code-block:: bash

    npm install --global nem2-cli@0.14.0

2. Open a new terminal window. Then, go to the directory where the bootstrap tool has generated the addresses.

.. code-block:: bash

    cd  build/generated-addresses/

3. Display the content of the ``addresses.yaml`` file.

.. code-block:: bash

    cat addresses.yaml

4. Under the section ``nemesis_addresses``, you will find the key pairs which contain ``cat.currency``. Copy the private key of the first account.

5. Type the command ``nem2-cli profile create`` using the key obtained in the previous step.

.. code-block:: bash

    nem2-cli profile create

    Introduce network type (MIJIN_TEST, MIJIN, MAIN_NET, TEST_NET): MIJIN_TEST
    Introduce your private key: 123***456
    Introduce NEM2 Node URL. (Example: http://localhost:3000): http://localhost:3000
    Insert profile name (blank means default and it could overwrite the previous profile):

.. note:: Use NEM2-CLI only for testing and development purposes, as the private keys stored are not encrypted.

You should see the account credentials in your terminal.

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

.. _docker: https://docs.docker.com/install/

.. _docker-compose: https://docs.docker.com/compose/install/

.. _mijin: https://mijin.io/en/product/#mijin2

.. _ts-node: https://www.npmjs.com/package/ts-node

.. _gradle: https://gradle.org/install/

.. _JDK: https://www.oracle.com/technetwork/es/java/javase/downloads/index.html

.. |catapult-service-bootstrap| raw:: html

   <a href="https://github.com/tech-bureau/catapult-service-bootstrap" target="_blank">Catapult Service Bootstrap</a>

.. |different-ways-to-install-a-nuget-package| raw:: html

   <a href="https://docs.microsoft.com/en-us/nuget/consume-packages/ways-to-install-a-package" target="_blank">different ways to install a NuGet Package</a>
