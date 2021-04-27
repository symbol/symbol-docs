.. post:: 27 Apr, 2021
    :tags: wallet
    :excerpt: 1
    :nocomments:

##############################################
Retrieving your XYMs from a post-launch Opt-in
##############################################

This guide explains how to enroll in the Opt-in process once |codename| has launched (this is, after March 12, 2021).

If you opted-in before the launch and you are looking to retrieve your new |codename| currency, read the :doc:`post-optin-xym-retrieval` guide instead.

************
Introduction
************

**NEM NIS1 is the original blockchain** offering from NEM, created by the community, and has been running since 2015.

**Symbol is the next-generation blockchain** from NEM, rewritten from scratch, and launched in March, 2021.

To quickstart |codename|'s adoption, an **opt-in** process was established which awarded **one XYM** in the new |codename| blockchain **for every XEM** (NIS1's native currency) held in the NIS1 blockchain.

The Opt-in Process
==================

On **March 12th, 2021** the **NIS1 Snapshot** took place: When the NIS1 blockchain reached block height 3'105'500 a picture was taken of all accounts and their assets.

Then, on **March 16th, 2021** the **Symbol blockchain was launched**.

After the launch, **all accounts that held at least 2 XEMs at the snapshot can still reclaim an equal amount of XYMs**, to be transferred to a |codename| account.

This process is called the **Opt-in**, and will be **open for 6 years after the launch**.

This guide explains how to participate in the Opt-in.

*****
Guide
*****

The Opt-in process is conducted entirely from within the **NEM Nano Wallet**, but first, you need to retrieve the **public key** of the |codename| account where you want to receive the XYMs:

1. **Download and install** the :doc:`Symbol Desktop Wallet <../../wallets>` for your platform, if you don't already have it.

   Please note that this is different from the NEM Nano Wallet used to interact with the NIS1 blockchain.

2. **Create the Symbol account** where you would like to receive the assets, if you don't already have one.

   Read the :doc:`../account/creating-an-account` guide to know how to do this.

3. **Find your account's public key** in the ``Accounts`` tab. You will need it later.

   .. image:: /resources/images/screenshots/post-launch-optin-1.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/post-launch-optin-1.png

   Use the **copy** button to the right of the key (do not try to select and copy the key's text directly as it is too long and it is truncated).

Now that you know where do you want your XYMs transferred, you can start the Opt-in process:

4. **Download and install** the `NEM Nano Wallet <https://nemplatform.com/wallets/#desktop>`__ for your platform, if you don't already have it.

   Make sure you have installed **at least version 3.0.0**, so the post-launch Opt-in module is present.

   .. image:: /resources/images/screenshots/post-launch-optin-2.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/post-launch-optin-2.png

5. **Log in to the account** containing XEMs at the snapshot.

   .. image:: /resources/images/screenshots/post-launch-optin-3.png
       :align: center
       :width: 50%
       :class: with-shadow
       :target: /_images/post-launch-optin-3.png

6. **Click on the Symbol Opt-In module** in the ``Services`` tab:

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
   - The Opt-in process involves registering a transaction on the NIS1 blockchain. This has a fee, shown on this summary screen.
   - Enter your Nano Wallet password to confirm the process.
   - Click on **SEND**.

If the Opt-in is successfull you will be taken to the initial Summary screen where you can see the status of the process:

.. image:: /resources/images/screenshots/post-launch-optin-9.png
    :align: center
    :width: 50%
    :class: with-shadow
    :target: /_images/post-launch-optin-9.png

Since it can take up to a week for the XYMs to be transferred, you can come back to this screen to check on the Opt-in status.

***************
Troubleshooting
***************

This is a short list of items to check should you encounter any problem when opting-in your accounts.

- Check that the **balance on your NIS1 account** was at least **2 XEM** at the time of the snapshot.

- Check that the NIS1 account has not already opted-in **pre-launch** (Following the :doc:`post-optin-xym-retrieval` guide).

- Check that the NIS1 account has not already opted-in **post-launch**.

- Check that the destination Symbol account is **not** a :ref:`remote-harvesting` account.

- If you opted-in using the **Symbol Mobile Wallet**, check that your account is not one of the 35 accounts affected by this `known Symbol Mobile Wallet issue <https://forum.nem.io/t/symbol-launch-opt-in-issue-affecting-35-accounts/29401>`__.

- The **NEM Helpdesk** can help you if everything else fails:

  - `NEM's Telegram Help Desk <https://t.me/nemhelpdesk>`__
  - `Open a support ticket <https://support.nemgroup.io/hc/en-us/requests/new>`__
