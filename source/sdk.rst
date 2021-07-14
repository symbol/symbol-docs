####
SDK
####

The **Symbol SDK** is the primary software development tool to create |codename| components, such as additional tools, libraries, or applications.
It enables developers to focus on their product rather than on the specific API details due to its higher abstraction.

The |sdk| shares the same design between programming languages to accomplish the next properties:

* **Fast language adaptation**: For example, there is a |sdk| for Java, but you need to work on C++. As both SDKs share the same design, you could re-write the library faster, adapting the syntax to your language. The same principle also applies to code examples, projects, applications...
* **Cohesion/shared knowledge across developers**: Every developer should be able to change between projects that use |codename|. By sharing the same design, we also share the same best practices among projects.
* **Fast SDK updates**: Migrating any improvement from a |sdk| to the other is faster. Also, if any bug appears in one language, it is quicker to check and fix it.

.. toctree::
    :hidden:

    references/typescript-sdk
    references/java-sdk
    references/symbol-hd-wallets
    references/symbol-qr-library
    references/symbol-uri-scheme

*******************
Supported languages
*******************

.. csv-table::
    :header: "Language", "Repository", "Reference"
    :delim: ;

    TypeScript& JavaScript SDK; |tsjs-repo|; :doc:`Documentation <references/typescript-sdk>`
    Java SDK; |java-repo|; :doc:`Documentation <references/java-sdk>`

Learn how to use |codename|'s SDK following the :ref:`guided implementation examples <blog-categories>`.

If you want to create a new SDK, check the :doc:`development guidelines <guidelines/sdk-development>`.

.. |tsjs-repo| raw:: html

    <a href="https://github.com/symbol/symbol-sdk-typescript-javascript" target="_blank">Repository</a>

.. |java-repo| raw:: html

    <a href="https://github.com/symbol/symbol-sdk-java" target="_blank">Repository</a>

***************
Other libraries
***************

Symbol developers have created other libraries that improve and add new features on top of Symbol.

.. csv-table::
   :header: "Name", "Description"
   :delim: ;

    `apostille <https://github.com/luxtagofficial/Apostille-library>`_ ; Transferable, updatable, branded, and conjointly owned blockchain notarizations.
    `symbol-hd-wallets <https://github.com/symbol/symbol-hd-wallets/>`_; Hierarchical-deterministic wallets library for |codename|.
    `symbol-qr-library <https://github.com/symbol/symbol-qr-library/>`_; QR library for |codename|.
    `symbol-uri-scheme <https://github.com/symbol/symbol-uri-scheme/>`_; URI Scheme library for |codename|.
    `nem2-secret-sharing <https://github.com/CrackTheCode016/nem2-secret-sharing/>`_; Implementing Shamir's secret sharing on |codename|.

To make a library official, the library should be proposed through the |NIP| process.

The reason behind the |NIP| is to ensure that:

* The specification has been discussed and accepted.
* The new library is reviewed, tested and shared among |codename| developers.
* The library is compatible with third-party projects that uses the same specification.

.. |NIP| raw:: html

   <a href="https://github.com/symbol/NIP" target="_blank">NEM Improvement Proposal</a>