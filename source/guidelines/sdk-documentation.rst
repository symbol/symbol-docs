#################
SDK Documentation
#################

The SDKs need to be adopted by other developers, and as a contributor, no one knows better than you how a determined SDK works.
Help others and spread the usage of the SDK writing documentation.

******
Readme
******

Make sure that the README has the following sections.

* Requirements
* Installation
* Contributing
* License

**Template**: `README <https://github.com/symbol/symbol-sdk-typescript-javascript/blob/main/README.md>`_

***************************
Comments and reference docs
***************************

Document functions and classes with comments while you write your code.
A reference generator should be able to read these comments and generate HTML as an output.

Some examples of reference generators are `TypeDoc <https://typedoc.org/>`_ for Javascript,
whereas in Java, we are using `Javadoc <https://www.oracle.com/java/technologies/javase/javadoc-tool.html>`_.

We recommend you to research and determine which is the reference generator most convenient for the selected programming language.

******
Guides
******

The |sitename| gathers a collection of :ref:`guides <blog-categories>`.
These guides show developers how to use |codename| built-in features while following step-by-step use cases.
Each guide comes with at least one snippet, which is an executable piece of code that solves the proposed use case.

Writing snippets helps you to compare how the SDK code looks like in contrast with others.
Furthermore, you will be testing manually if the SDK behaves correctly.

1. `Fork <https://help.github.com/articles/fork-a-repo>`_ and clone `symbl-docs repository <https://github.com/symbol/symbol-docs>`__.

   .. code-block:: bash

      git clone https://github.com/<YOUR_USERNAME>/symbol-docs.git

2. Create a new folder under ``source/resources/examples/`` named as the programming language of your SDK.

3. Adapt every `TypeScript snippet <https://github.com/symbol/symbol-docs/tree/main/source/resources/examples/typescript>`__ using the new SDK.

4. Push the changes and `create a pull request <https://services.github.com/on-demand/intro-to-github/es/crear-pull-request>`__.
