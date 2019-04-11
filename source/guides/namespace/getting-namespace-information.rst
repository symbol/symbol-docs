:orphan:

.. post:: 08 Apr, 2019
    :category: Namespace
    :excerpt: 1
    :nocomments:

#################################
Getting the namespace information
#################################

Get the ownership and duration for a given :doc:`namespace <../../concepts/namespace>` identifier.

*************
Prerequisites
*************

- Finish :doc:`registering a namespace guide <registering-a-namespace>`

************************
Let’s get into some code
************************

Call ``getNamespace`` function, passing the namespace identifier you want to check as a parameter.

.. example-code::

    .. literalinclude:: ../../resources/examples/typescript/namespace/GettingNamespaceInformation.ts
        :caption: |getting-namespace-information-ts|
        :language: typescript
        :lines:  21-

    .. literalinclude:: ../../resources/examples/javascript/namespace/GettingNamespaceInformation.js
        :caption: |getting-namespace-information-js|
        :language: javascript
        :lines: 24-

    .. literalinclude:: ../../resources/examples/cli/namespace/GettingNamespaceInformation.sh
        :caption: |getting-namespace-information-cli|
        :language: bash
        :start-after: #!/bin/sh

.. |getting-namespace-information-ts| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/typescript/namespace/GettingNamespaceInformation.ts" target="_blank">View Code</a>

.. |getting-namespace-information-js| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/javascript/namespace/GettingNamespaceInformation.js" target="_blank">View Code</a>

.. |getting-namespace-information-cli| raw:: html

   <a href="https://github.com/nemtech/nem2-docs/blob/master/source/resources/examples/cli/namespace/GettingNamespaceInformation.sh" target="_blank">View Code</a>
