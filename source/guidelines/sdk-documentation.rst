:orphan:

#################
SDK Documentation
#################

SDKs need to be adopted by other developers. As a contributor, no one
knows better than you how a determined SDK works. Consider helping
others and spread the usage of the SDK by providing the following
documentation.

******
Readme
******

Write a README that contains at least the following sections:

* Requirements
* Installation
* Contributing
* License

***************************
Comments and reference docs
***************************

Document functions and classes with comments while you write your code.
A reference generator should be able to read this comments and generate HTML as an output.

Some examples of reference generators are `TypeDoc <https://typedoc.org/>`_ for Javascript,
whereas in Java we are using `Javadoc <https://www.oracle.com/technetwork/java/javase/javadoc-137458.html>`_. Research which is the reference
generator most convenient for your language.

******
Guides
******

The NEM Developer Center gathers a collection of :doc:`guides <../concepts/account>`. These guides show developers how to use NEM built-in features while following step-by-step use cases.

Each guide comes with at least one snippet. Snippets are executable pieces of code that solve the proposed use case.

Writing snippets helps you to compare how the SDK code looks like in contrast with others. Furthermore, you will be testing manually if the SDK behaves correctly.

1. `Fork <https://help.github.com/articles/fork-a-repo/#fork-an-example-repository>`_ and clone `nem2-docs repository <https://github.com/nemtech/nem2-docs>`__.

.. code-block:: bash

    git clone https://github.com/<YOUR_USERNAME>/nem2-docs.git

2. Create a new folder under ``source/resources/examples/`` named as the programming language of your SDK.

3. Adapt every `typescript snippet <https://github.com/nemtech/nem2-docs/tree/master/source/resources/examples/typescript>`__ using the new SDK.

4. Push the changes, and `create a pull request <https://services.github.com/on-demand/intro-to-github/es/crear-pull-request>`__.
