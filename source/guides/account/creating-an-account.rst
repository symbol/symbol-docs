.. post:: 02 Aug, 2018
    :category: Account
    :tags: wallet, SDK, CLI
    :excerpt: 1
    :nocomments:

###################
Creating an account
###################

Create a new |codename| account to start sending and receiving transactions.

*************
Prerequisites
*************

- Complete the :doc:`getting started section <../../getting-started/setup-workstation>`.

************************************
Method #01: Using the Desktop Wallet
************************************

1. Open up the :ref:`Symbol Desktop Wallet <wallet-desktop>` application and click on ``Create a new profile?``.

   .. figure:: ../../resources/images/screenshots/desktop-create-account-0.png
      :align: center
      :width: 100%
      :class: with-shadow
      :target: /_images/desktop-create-account-0.png

2. Click on ``Create Mnemonic``.

   .. figure:: ../../resources/images/screenshots/desktop-create-account-1.png
      :align: center
      :width: 100%
      :class: with-shadow
      :target: /_images/desktop-create-account-1.png

3. Fill in some profile data. A profile can contain several Symbol accounts and it helps keeping them organized.

   .. figure:: ../../resources/images/screenshots/desktop-create-account-2.png
      :align: center
      :width: 100%
      :class: with-shadow
      :target: /_images/desktop-create-account-2.png

   - Give your profile a **name**, for your personal use.
   - Select the ``Mainnet`` **Network type**.
   - Enter a **password** to protect your profile and confirm it.
   - Enter a **hint** to help you remember your password, should you forget it.
   - Click on ``Next``.

4. On the next page, the Desktop Wallet uses the movement of your mouse to generate a random mnemonic phrase for your wallet.

   .. figure:: ../../resources/images/screenshots/desktop-create-account-3.png
      :align: center
      :width: 100%
      :class: with-shadow
      :target: /_images/desktop-create-account-3.png

   Move your mouse around the screen until the progress bar reaches 100% and the application automatically moves you to the next page.

5. Click ``Display mnemonic words`` to view your private mnemonic phrase.

   .. figure:: ../../resources/images/screenshots/desktop-create-account-4.png
      :align: center
      :width: 100%
      :class: with-shadow
      :target: /_images/desktop-create-account-4.png

6. Click on the copy button.

   .. figure:: ../../resources/images/screenshots/desktop-create-account-5.png
      :align: center
      :width: 100%
      :class: with-shadow
      :target: /_images/desktop-create-account-5.png

   Backup this information securely offline and do not share it with anyone, as it stores the key to recover your assets. Click ``Next``.

7. Verify that you have backed up your mnemonic phrase correctly. Click each word in the phrase in the correct order. Click ``Next`` when done.

   .. figure:: ../../resources/images/screenshots/desktop-create-account-6.png
      :align: center
      :width: 100%
      :class: with-shadow
      :target: /_images/desktop-create-account-6.png

8. Read the safety tips on the next page.

   .. figure:: ../../resources/images/screenshots/desktop-create-account-7.png
      :align: center
      :width: 100%
      :class: with-shadow
      :target: /_images/desktop-create-account-7.png

   Accept the **Terms and Conditions** and click on ``Finish``:

8. The Wallet's main screen will appear. Congratulations! Your account is ready to use.

   .. figure:: ../../resources/images/screenshots/desktop-create-account-8.png
      :align: center
      :width: 100%
      :class: with-shadow
      :target: /_images/desktop-create-account-8.png

*************************
Method #02: Using the SDK
*************************

Open a new file and run the following code snippet.
Edit ``NetworkType.TEST_NET`` to select the correct network type for your desired purpose.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/CreatingAnAccount.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/account/CreatingAnAccount.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/account/CreatingAnAccount.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

If you already have a private key, you can use it to define a new ``Account`` object.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/account/OpeningAnAccount.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/account/OpeningAnAccount.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/java/src/test/java/symbol/guides/examples/account/OpeningAnAccount.java
        :language: java
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

*************************
Method #03: Using the CLI
*************************

Open a terminal window and run the following command.

.. viewsource:: ../../resources/examples/bash/account/CreatingAnAccount.sh
    :language: bash
    :start-after: #!/bin/sh
