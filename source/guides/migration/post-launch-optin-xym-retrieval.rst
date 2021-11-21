.. post:: 27 Apr, 2021
    :tags: wallet
    :excerpt: 1
    :nocomments:

#############################################
Retrieving your XYM from a post-launch opt-in
#############################################

This guide explains how to enroll in the opt-in process once |codename| has launched (this is, after March 12, 2021).

If you opted-in before the launch and you are looking to retrieve your new |codename| currency, read the :doc:`post-optin-xym-retrieval` guide instead.

************
Introduction
************

**NEM NIS1 is the original blockchain** offering from NEM, created by the community, and has been running since 2015.

**Symbol is the next-generation blockchain** from NEM, rewritten from scratch, and launched in March, 2021.

To quickstart |codename|'s adoption, an **opt-in** process was established which awarded **one XYM** in the new |codename| blockchain **for every XEM** (NIS1's native currency) held in the NIS1 blockchain.

The opt-in Process
==================

On **March 12th, 2021** the **NIS1 Snapshot** took place: When the NIS1 blockchain reached block height 3'105'500 a picture was taken of all accounts and their assets.

Then, on **March 16th, 2021** the **Symbol blockchain was launched**.

After the launch, **all accounts that held at least 2 XEM at the snapshot can still reclaim an equal amount of XYM**, to be transferred to a |codename| account.

This process is called the **opt-in**, and will be **open for some amount of time after the launch**. The exact length of this window is yet to be defined.

This guide explains how to participate in the opt-in.

*****
Guide
*****

.. sidebar:: Multisignature accounts

   If the account you want to opt-in is a multisig account make sure you read the :ref:`Notes on multisig accounts <post-launch-optin-multisig>`.

The opt-in process is conducted entirely from within the `NEM Wallet <https://nemplatform.com/wallets/#desktop>`__, but first, you need to retrieve the **public key** of the |codename| account where you want to receive the XYM:

1. **Download and install** the :doc:`Symbol Desktop Wallet <../../wallets>` for your platform, if you don't already have it.

   Please note that this is different from the NEM Wallet used to interact with the NIS1 blockchain.

2. **Create the Symbol account** where you would like to receive the assets, if you don't already have one.

   Read the :doc:`../account/creating-an-account` guide to know how to do this.

3. **Find your account's public key** in the ``Accounts`` tab. You will need it later.

   .. image:: /resources/images/screenshots/post-launch-optin-1.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/post-launch-optin-1.png

   Use the **copy** button to the right of the key (do not try to select and copy the key's text directly as it is too long and it is truncated).

Now that you know where do you want your XYM transferred, you can start the opt-in process:

4. **Download and install** the `NEM Wallet <https://nemplatform.com/wallets/#desktop>`__ for your platform, if you don't already have it.

   Make sure you have installed **at least version 2.6.0**, so the post-launch opt-in module is present.

   .. image:: /resources/images/screenshots/post-launch-optin-2.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/post-launch-optin-2.png

5. **Log in to the account** containing XEM at the snapshot.

   .. image:: /resources/images/screenshots/post-launch-optin-3.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/post-launch-optin-3.png

.. topic:: Importing from another wallet

   If your NIS1 account is held in a wallet other than the NEM Wallet, you will need to **import** it into the NEM Wallet.

   First, you need to **retrieve the account's private key** from the wallet. The procedure depends on the wallet but here are instructions for a few popular ones:
   `Atomic Wallet <https://support.atomicwallet.io/article/19-how-to-view-your-private-keys-backup-phrase>`__,
   `Exodus <https://support.exodus.com/article/86-how-can-i-view-my-private-keys>`__,
   `Coinomi <https://coinomi.freshdesk.com/support/solutions/articles/29000009717-what-is-the-recovery-tool-and-how-do-i-export-my-private-keys->`__,
   `Magnum <https://davecube-com.medium.com/how-to-extract-the-private-key-from-your-magnum-wallet-95453dccacd4>`__.

   Then, you need to **import the private key into the NEM Wallet**:

   - Click on ``SIGN UP`` in top right corner.
   - Click on the ``Private key wallet`` button and then on ``Ready``.
   - Choose the ``Mainnet`` network and click on ``Next``.
   - Give your new wallet a **name** and a **password** to protect it.
   - Enter the account's **private key** that you retrieved from your other wallet. Your NEM address will be presented.
   - Read carefully the **security notices** and finish the import process.
   - Back to the LOGIN screen, select the new wallet, enter its password and click on ``Sign In``.

.. topic:: Importing from a wallet (.wlt) file

   If you keep your NIS1 account in a .wlt file you will need to **import** it into the NEM Wallet too:

   - In the LOGIN screen, click on the ``Import Wallet`` yellow button.
   - **Select the wallet file** (the one with .wlt extension) and finish the import process.
   - Back to the LOGIN screen, select the new wallet, enter its password and click on ``Sign In``.

6. Once you are logged in to your NIS1 account, **click on the Symbol opt-in module** in the ``Services`` tab:

   .. image:: /resources/images/screenshots/post-launch-optin-4.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/post-launch-optin-4.png

7. **Click on the READY** button:

   .. image:: /resources/images/screenshots/post-launch-optin-5.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/post-launch-optin-5.png

7. **Select the account you want to opt-in**. If you only have one account in the wallet, there will only be one option.

   .. image:: /resources/images/screenshots/post-launch-optin-6.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/post-launch-optin-6.png

   The screen shows a summary of the process and highlights any problems, if there are any.

   Remember that the **Amount to claim** is the amount present in the account **at the snapshot**.

   If everything is right, click on **START OPT-IN**.

8. **Enter your Symbol account's public key**. This is the public key your copied in Step 3 above.

   .. image:: /resources/images/screenshots/post-launch-optin-7.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/post-launch-optin-7.png

   Once you enter a valid public key, more details will appear. Check that the **Symbol account's address** corresponds to the desired account and click on **NEXT**.

9. **Final verification and acceptance**.

   .. image:: /resources/images/screenshots/post-launch-optin-8.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/post-launch-optin-8.png

   - Do one last check of the destination |codename| account and balance.
   - Accept the ``terms and conditions`` and the ``privacy policy``.
   - The opt-in process involves registering a transaction on the NIS1 blockchain. This has a fee, shown on this summary screen.
   - Enter your NEM Wallet password to confirm the process.
   - Click on **SEND**.

If the opt-in is successfull you will be taken to the initial Summary screen where you can see the status of the process:

.. image:: /resources/images/screenshots/post-launch-optin-9.png
    :align: center
    :width: 50%
    :class: with-shadow
    :target: /_images/post-launch-optin-9.png

Since it can take more than a week for the XYM to be transferred, you can come back to this screen to check on the opt-in status.

.. _post-launch-optin-multisig:

.. topic:: Notes on multisig accounts

   When opting-in :doc:`multi-signature accounts (multisig) <../../concepts/multisig-account>` a few points need to be taken into account:

   - The multisig account **cannot opt-in for itself**, it needs to be opted-in by ALL of its cosigners:

     - The opt-in process **must be initiated by one of the cosigners**, selecting the multisig account as the account to opt-in, and entering the Symbol account's public key.
     - The rest of the cosigners **must opt-in the multisig account too**, but they won't be required to enter the Symbol account.

     For clarity, the wallet shows which cosigners have already opted-in the multisig account and which ones are missing:

     .. image:: /resources/images/screenshots/post-launch-optin-10.png
         :align: center
         :width: 50%
         :class: with-shadow
         :target: /_images/post-launch-optin-10.png

   - The Symbol account that will receive the opted-in XYM **must be a multisig account** too, with the **same amount of cosigners**.

***************
Troubleshooting
***************

This is a short list of items to check should you encounter any problem when opting-in your accounts.

- Check that the **balance on your NIS1 account** was at least **2 XEM** at the time of the snapshot.

- Check that the NIS1 account has not already opted-in **pre-launch** (Following the :doc:`post-optin-xym-retrieval` guide).

- Check that the NIS1 account has not already opted-in **post-launch**.

- Check that the destination Symbol account is **not** a :ref:`remote-harvesting` account.

- The **NEM Helpdesk** can help you if everything else fails:

  - `NEM's Telegram Help Desk <https://t.me/nemhelpdesk>`__
  - Send an email to support@nem.group
