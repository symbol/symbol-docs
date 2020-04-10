####
SDK
####

The **Symbol SDK** is the primary software development tool to create |codename| components, such as additional tools, libraries, or applications.

It enables developers to focus on their product rather than on the specific API details due to its higher abstraction.

Learn how to use |codename|'s SDK following the :ref:`guided implementation examples <blog-categories>`.

*******************
Supported languages
*******************

.. csv-table::
    :header: "Language", "Repository", "Reference"
    :delim: ;

    TypeScript& JavaScript SDK; |tsjs-repo|; :doc:`Documentation <references/typescript-sdk>`
    Java SDK; |java-repo|; :doc:`Documentation <references/java-sdk>`

************
Ongoing work
************

.. note:: The following SDKs are not compatible with the latest version of catapult-server.

.. Read the |protocol-compatibility-report| to know more about the status of each project.

.. csv-table::
    :header: "Language", "Repository", "Reference"
    :delim: ;

    Dart SDK ;  ;
    C# SDK ;  ;
    Go SDK ; ;
    Swift SDK ; ;
    C++ ;  ;
    PHP SDK ;  ;
    Ruby SDK ; ;
    Python SDK ; ;

If you want to create a new SDK, check the :doc:`development guidelines <guidelines/sdk-development>`.

.. |tsjs-repo| raw:: html

    <a href="https://github.com/nemtech/symbol-sdk-typescript-javascript" target="_blank">Repository</a>

.. |java-repo| raw:: html

    <a href="https://github.com/nemtech/symbol-sdk-java" target="_blank">Repository</a>

.. |protocol-compatibility-report| raw:: html

    <a href="https://github.com/nemtech/community/blob/master/projects-status.md" target="_blank">protocol compatibility report</a>

