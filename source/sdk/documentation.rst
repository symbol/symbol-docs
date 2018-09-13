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

Check if your repository has a complete README. Consider adapting the
:download:`here <../resources/templates/README_SDK.md>` template used by some SDKs.

Required sections:

-  Requirements
-  Installation
-  Contributing
-  License

*********
Reference
*********

Document functions and classes with comments while you write your code.
A reference generator should be able to read this comments and generate
HTML as an output.

Some examples of reference generators are [tsdoc][tsdoc] for Javascript,
whereas in Java we are using Javadoc. Research which is the reference
generator most convenient for your language.

If the SDK you are contributing is inspired in nem2-sdk-java or
nem2-sdk-javascript-typescript, consider reusing the same comments

******
Guides
******

The NEM Developer Center gathers a collection of
:doc:`guides <../guides/overview>`. They show
developers how to use NEM built-in features while following step-by-step use cases.

Each guide comes with at least one snippet. Snippets are executable
pieces of code that solve the proposed use case.

Writing snippets helps you to compare how the SDK code looks like in
contrast with others. Furthermore, you will be testing manually if the
SDK behaves correctly.

1. `Fork <https://help.github.com/articles/fork-a-repo/#fork-an-example-repository>`__
   and clone `nem2-docs
   repository <https://github.com/nemtech/nem2-docs>`__.

.. code-block:: bash

    $> git clone https://github.com/<YOUR_USERNAME>/nem2-docs.git

2. Create a new folder under ``source/resources/examples/`` called .

3. Code each example. Take `typescript
   snippets <https://github.com/nemtech/nem2-docs/tree/master/source/resources/examples/typescript>`__
   as a reference.

4. Push the changes, and `create a pull
   request <https://services.github.com/on-demand/intro-to-github/es/crear-pull-request>`__.


