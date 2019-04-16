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

    .. viewsource:: ../../resources/examples/typescript/namespace/GettingNamespaceInformation.ts
        :language: typescript
        :lines:  21-

    .. viewsource:: ../../resources/examples/javascript/namespace/GettingNamespaceInformation.js
        :language: javascript
        :lines: 24-

    .. viewsource:: ../../resources/examples/bash/namespace/GettingNamespaceInformation.sh
        :language: bash
        :start-after: #!/bin/sh

