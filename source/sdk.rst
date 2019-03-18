####
SDK
####

The NEM2 Software Development Kit is the primary software development tool to create NEM2 components, such as additional tools, libraries or applications. Almost all, if not all, components should use **NEM2-SDK** instead of raw API.

The new SDK enables developers to focus on their product rather than on the NEM2 Blockchain specific API details due to its higher abstraction.

The best way to learn to use the SDKs is through :ref:`guides <category-account>`.

**************
Supported SDKs
**************

.. csv-table::
    :header: "Language", "Repository", "Reference", "Target version"
    :delim: ;

    TypeScript & JS SDK; |tsjs-repo|; |tsjs-reference|; 0.3 (latest)

************
Ongoing work
************

.. note:: ⚠️ The following SDKs are not compatible with the latest version of catapult-server (0.3).

Read the open issues to know about the current status of each project.

.. csv-table::
    :header: "Language", "Repository", "Reference", "Target version"
    :delim: ;

    Java SDK; |java-repo|; |java-reference|;  0.1
    C# SDK ; |csharp-repo| ; ; 0.1
    Go SDK ; |go-repo| ;  ; 0.1
    Swift SDK ; |swift-repo| ;  ; 0.1
    C++ ;  ;  ;
    PHP SDK ;  ;  ;
    Ruby SDK ; ; ;
    Python SDK ; ; ;

If you want to create a new SDK, check the :doc:`SDK Development guidelines <guidelines/sdk-development>`.

.. |tsjs-repo| raw:: html

    <a href="https://github.com/nemtech/nem2-sdk-typescript-javascript" target="_blank">Repository</a>

.. |tsjs-reference| raw:: html

    <a href="https://nemtech.github.io/nem2-sdk-typescript-javascript/" target="_blank">Documentation</a>

.. |java-repo| raw:: html

    <a href="https://github.com/nemtech/nem2-sdk-java" target="_blank">Repository</a>

.. |java-reference| raw:: html

    <a href="https://nemtech.github.io/nem2-sdk-java/" target="_blank">Documentation</a>

.. |csharp-repo| raw:: html

    <a href="https://github.com/nemtech/nem2-sdk-csharp/" target="_blank">Repository</a>

.. |swift-repo| raw:: html

    <a href="https://github.com/proximax-storage/nem2-sdk-swift/" target="_blank">Repository</a>

.. |go-repo| raw:: html

    <a href="https://github.com/proximax-storage/nem2-sdk-go/" target="_blank">Repository</a>

.. |python-repo| raw:: html

    <a href="https://github.com/nemtech/nem2-sdk-python/" target="_blank">Repository</a>