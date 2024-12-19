.. post:: 08 Apr, 2021
    :tags: wallet
    :excerpt: 1
    :nocomments:

############################################
Retrieving your XYM from a pre-launch opt-in
############################################

This guide explains how to access the **XYM** (|codename|'s native currency) you were awarded if you enrolled in the opt-in process **BEFORE** |codename| launched (March 12, 2021).

If you missed that, you can still opt-in by following the :doc:`post-launch-optin-xym-retrieval` guide.

************
Introduction
************

**NEM NIS1 is the original blockchain** offering from NEM, created by the community, and has been running since 2015.

**Symbol is the next-generation blockchain** from NEM, rewritten from scratch, and launched in March, 2021.

To quickstart |codename|'s adoption, an **opt-in** process was established which awarded **one XYM** in the new |codename| blockchain **for every XEM** (NIS1's native currency) held in the NIS1 blockchain.

The pre-launch opt-in Process
=============================

.. image:: /resources/images/screenshots/retrieving-optin-xym-0.png
    :align: right
    :width: 50%
    :class: with-shadow
    :target: /_images/retrieving-optin-xym-0.png

- First off, XEM holders wishing to participate in the opt-in process had to **enroll** using any of the NEM Wallets. For example, using the Desktop `NEM Wallet <https://nemplatform.com/wallets/#desktop>`__.

.. image:: /resources/images/screenshots/retrieving-optin-xym-1.png
    :align: right
    :width: 50%
    :class: with-shadow
    :target: /_images/retrieving-optin-xym-1.png

- In return, the user received a **Symbol Mnemonic**, a 24-word phrase which encoded a Symbol account for the future Symbol blockchain.

  Here is an example produced by the **NEM Wallet** containing the Symbol Mnemonic.

- Then, on **March 12th, 2021** the **NIS1 Snapshot** took place: When the NIS1 blockchain reached block height 3'105'500 a picture was taken of all accounts and their assets.

- Finally, on **March 16th, 2021** the **Symbol blockchain was launched** and all opted-in accounts were automatically created:

  **For every opted-in NIS1 account that held at least 100 XEM at the snapshot, a Symbol account was created holding that same amount of XYM.**

This guide explains how to access this new Symbol account and its assets.

.. note:: If you did not opt-in before the new Symbol blockchain launched, you can still opt-in **post-launch** by following the :doc:`post-launch-optin-xym-retrieval` guide.

*****
Guide
*****

1. **Download and install** the :doc:`Symbol Desktop Wallet <../../wallets>` for your platform.

   Please note that this is different from the NEM Wallet used to interact with the NIS1 blockchain.

2. Open the Wallet and click on ``Create a new profile?``:

   .. image:: /resources/images/screenshots/retrieving-optin-xym-2.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/retrieving-optin-xym-2.png

3. Click on ``Import mnemonic``:

   .. image:: /resources/images/screenshots/retrieving-optin-xym-3.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/retrieving-optin-xym-3.png

4. Fill in some profile data. A profile can contain several Symbol accounts and it helps keeping them organized.

   .. image:: /resources/images/screenshots/retrieving-optin-xym-4.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/retrieving-optin-xym-4.png

   - Give your profile a **name**, for your personal use.
   - Select the ``Mainnet`` **Network type**.
   - Enter a **password** to protect your profile and confirm it.
   - Enter a **hint** to help you remember your password, should you forget it.
   - Click on ``Next``.

5. Write every word in the **Symbol Mnemonic** that you obtained when you **opted-in** (See the previous section):

   .. image:: /resources/images/screenshots/retrieving-optin-xym-5.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/retrieving-optin-xym-5.png

   - Click on ``Next``.

6. On the **Selected Accounts** screen, you will be presented with the list of accounts that can be derived from the mnemonic, including the one that you opted-in and its balance.

   .. image:: /resources/images/screenshots/retrieving-optin-xym-6.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/retrieving-optin-xym-6.png

   - Select your opted-in account.
   - Select at least another (non-opted-in) account.
   - Click on ``Next``.

7. Accept the **Terms and Conditions** and click on ``Finish``:

   .. image:: /resources/images/screenshots/retrieving-optin-xym-7.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/retrieving-optin-xym-7.png

8. The Wallet's main screen will appear and your opted-in balance will be shown:

   .. image:: /resources/images/screenshots/retrieving-optin-xym-8.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/retrieving-optin-xym-8.png

**Your imported accounts are now ready to use**. In the ``Accounts`` tab you can see all of them and give them more meaningful names if you want.

Take a look at the rest of the :doc:`guides <../index>` to learn what you can do with these accounts. For example, :doc:`../transfer/sending-a-transfer-transaction`.

.. topic:: Before you go

   It is **recommended** that you **move** your funds from the opted-in account to the other one you imported in step 6 above (called a **Seed** account, because it was obtained from a seed Symbol mnemonic).

   Accounts opted-in from the **NEM Wallet** are special and **cannot be derived from the mnemonic**. Therefore, in the future, if you used a Wallet **other than the Symbol Desktop Wallet** to recover your account from the mnemonic, it **might not recover your opted-in account**.

   It will recover all other seed accounts, though, and hence the recommendation to move your funds and use only seed accounts.

***************
Troubleshooting
***************

This is a short list of items to check should you encounter any problem when recovering your opted-in accounts.

- Check that the **balance on your NIS1 account** was at least **100 XEM** at the time of the snapshot.

- Check that you are using the **correct Symbol mnemonic**. Did you do several attempts at opting-in and obtained different mnemonics?

- Check that your NIS1 account was successfully opted-in by looking up its address in the `opt-in Report <http://report.experimental.symboldev.network/ok1.html>`__.

  If your account is not on the list, check the other tabs to find the reason.

- The **NEM Helpdesk** can help you if everything else fails:

  - `NEM's Telegram Help Desk <https://t.me/nemhelpdesk>`__
  - Send an email to support@nem.group
