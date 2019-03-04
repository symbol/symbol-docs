####
SDK
####

The NEM2 Software Development Kit is the primary software development tool to create NEM2 components, such as additional tools, libraries or applications. Almost all, if not all, components should use **NEM2-SDK** instead of raw API.

The new SDK enables developers to focus on their product rather than on the NEM2 Blockchain specific API details due to its higher abstraction.

The best way to learn to use the SDKs is through :ref:`guides <category-account>`.

*************
Official SDKs
*************

.. note:: ⚠ The latest release introduces breaking changes. Until the SDKs are not aligned, we recommend using :doc:`catapult-service-bootstrap 0.1.0 <../getting-started/setup-workstation>`.

.. csv-table::
    :header: "Language", "Repository", "Reference", "Active Developers"
    :delim: ;

    TypeScript & JS SDK ; |tsjs-repo|; |tsjs-reference|;  NEM Foundation
    Java SDK ; |java-repo|; |java-reference|;  NEM Foundation


**************
Community SDKs
**************

.. csv-table::
    :header: "Language", "Repository", "Reference", "Active Developers"
    :delim: ;

    C# SDK ; |csharp-repo| ;  ; `@kodty <https://github.com/kodty>`_
    Go SDK ; |go-repo| ;  ; `@proximax-storage <https://github.com/proximax-storage>`_
    Swift SDK ; |swift-repo| ;  ; `@proximax-storage <https://github.com/proximax-storage>`_
    C++ ;  ;  ;
    PHP SDK ;  ;  ;
    Ruby SDK ; ; ;
    Python SDK ; ; ;

If you want to collaborate in the SDK creation, check the :doc:`SDK Development guidelines <guidelines/sdk-development>`. Then, add the repository under “Community SDKs”. You can click  the “Edit on Github” button at the top-right part of the screen.

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