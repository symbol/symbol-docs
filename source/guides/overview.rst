########
Overview
########

Guides show you how to use NEM built-in features. Every guide comes with the code implementation ready to use.

* :doc:`Interacting with accounts <account>`
* :doc:`Monitoring blockchain <blockchain>`
* :doc:`Registering namespaces <namespace>`
* :doc:`Interacting with mosaics <mosaic>`
* :doc:`Sending transactions <transaction>`
* :doc:`Running a node <running-a-node>`

Access to more self-paced training reviewing :doc:`workshops <workshops>`.

*********************
How to run an example
*********************

Download the |guide-repository|. They are divided by programming language and topic.

Cli
====

1. Go to ``cli`` folder, and give executing permission to an example.

.. code:: bash

        $> chmod +x <file-name>.sh

2. Find and run an example.

.. code:: bash

        $> ./<file-name>.sh

TypeScript
==========

1. Go to ``typescript`` folder and then install the required packages.

.. code:: bash

        $> npm install

2. Use `ts-node`_ to execute TypeScript files with node.

Install the tool first if you have not it installed yet.

.. code:: bash

        $> npm install -g ts-node

3. Find and run an example.

.. code:: bash

        $> ts-node <file-name>.ts

If some code contains dynamic variables, for example, a public key (without quotes), run:

.. code:: bash

        $> PUBLIC_KEY='<your_public_key_here>' ts-node <file-name>.ts

JavaScript
==========

1. Go to ``javascript`` folder and then install the required packages.

.. code:: bash

        $> npm install

2. Find and run an example.

.. code:: bash

        $> node <file-name>.js

If some code contains dynamic variables, for example, a public key (without quotes), run:

.. code:: bash

        $> PUBLIC_KEY='<your_public_key_here>' node <file-name>.js

.. _ts-node: https://www.npmjs.com/package/ts-node

Java
====

1. Open ``java`` folder with your favourite IDE.

2. Find the example and run it as a JUnit Test.

.. |guide-repository| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/" target="_blank">snippets</a>

.. |workshops| raw:: html

   <a href="https://github.com/nemtech/nem2-workshops/" target="_blank">NEM workshops used at events</a>