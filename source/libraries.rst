#########
Libraries
#########

Developers could opt to create libraries to add more features into |codename|.
However, to become an accepted library, it should be proposed as a |NIP|.

The reason behind the |NIP| is to ensure that the new library is reviewed, tested and shared among |codename| developers.

* Accepted specification
* At least one implementation that successfully passes the code review.
* Compatible with third-party projects that implement/uses the same NIP Library.

************
Ongoing work
************

.. csv-table::
   :header: "Name", "Description"
   :delim: ;

    `Apostille library <https://github.com/luxtagofficial/Apostille-library>`_ ; Transferable, updatable, branded, and conjointly owned blockchain notarizations.
    `symbol-hd-wallets <https://github.com/nemfoundation/symbol-hd-wallets/>`_; Experimental library to handle hyper deterministic wallets for |codename|.
    `nem2-nonfungible-asset <https://github.com/nemfoundation/nem2-nonfungible-asset/>`_; Experimental library to handle non-fungible assets for |codename|.
    `nem2-secret-sharing <https://github.com/CrackTheCode016/nem2-secret-sharing/>`_; Implementing Shamir's secret sharing on |codename|.
    `symbol-qr-library <https://github.com/nemfoundation/symbol-qr-library/>`_; Experimental library to generate QR specification for |codename|.
    `nem2-uri-scheme <https://github.com/nemfoundation/nem2-uri-scheme/>`_; Experimental library to handle uri scheme for |codename|.

Do you need to create a NIP to create a library? No, you don’t. In fact, we suggest not submitting a NIP until you build a library that improves |codename| and the different projects that use it. Since the library can be changed multiple times, developers should spend more time experimenting and learning, creating a specification later on.

Add a new library to this page by clicking the *"Edit on Github"* button at the top-right part of the screen.

.. |NIP| raw:: html

   <a href="https://github.com/nemtech/NIP" target="_blank">NEM Improvement Proposal</a>
