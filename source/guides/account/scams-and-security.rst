.. post:: 24 Feb, 2022
    :category: Account
    :tags: wallet
    :excerpt: 1
    :nocomments:

######################
Common Hacks and Scams
######################

It should come as no surprise that cryptocurrency users are targeted by a wide variety of scammers, hackers, and thieves. While some attempts may come in familiar forms such as impersonation or misinformation, the digital nature of cryptocurrencies opens the door to a number of novel approaches. This page is intended to help you ensure the security of your assets by explaining a number of common scams and security considerations. This list is by no means comprehensive, and you are strongly encouraged to research the topic further for the sake of your wallet's security.

***********
Key Points
***********

- **Be extremely cautious signing transactions when activating delegated harvesting**. A Sweeping scam has actively targeted users in the process of activating delegated harvesting, so make sure to carefully review any transactions you are prompted to sign and diligently check for any included asset transfers to unfamiliar addresses. Never sign a transaction that you do not completely understand.
- **Never share your private key or mnemonic phrase** (also known as your secret recovery phrase or seed phrase) with anyone, and never enter them on any website or potentially malicious wallet. Anyone with your private key or mnemonic phrase has full and unrestrained access to the contents of your wallet.  
- **The Symbol Syndicate will never directly message you for customer support** and will never ask for your private key or mnemonic phrase. 
- **Blockchain transactions are irreversible**; it is not feasible to undo a transaction or retrieve your funds once they are sent to a malicious address. 
- **Ensure any backups of your private keys or mnemonic phrases are stored safely and offline** in order to ensure that no one is able to access them and compromise your accounts.

*******************************************
Sweeping with Aggregate Bonded Transactions
*******************************************

What is an Aggregate transaction?
========================================

Aggregate transactions can include a variety of elements such as multiple signers, messages, and transfers. New Symbol users may not be familiar with the complex nature of Aggregate Bonded transactions, and must take great care to fully understand the full scope of any transactions they are asked to sign. For more information see :doc:`Aggregate Transaction <../../concepts/aggregate-transaction>`

What is sweeping?
=================

Sweeping involves a malicious script that monitors certain types of transactions, then initiates a malicious Aggregate Bonded transaction disguised to appear related to the targeted transaction (i.e. by including a relevant message), but which also include a transfer of XYM or other mosaics to the bad actor's wallet. Signing these transactions can completely empty a user's wallet, so please make sure you carefully review before signing any transactions that you did not initiate.

It may not be immediately apparent that you've been hacked. The sweeper's goal is that you assume that the transaction you signed was part of a process you were completing, and you may also assume that your balance has been reduced by a stuck transaction, pending activation of delegated harvesting, or that your balance was transferred to a delegated harvesting address linked to your account.

What could a sweeping attack look like?
========================================

- You begin Delegated Harvesting activation by propagating the 'Link all keys' transaction to the network.
- The bad actor's script detects this transaction and sends you an Aggregate Bonded transaction. This transaction might include a message related to harvesting such as "Delegated-№234567" as well as a transfer of XYM to an address controlled by the bad actor. 
- Your wallet sees the Aggregate Bonded transaction included in a subsequent block and prompts you with the option to review and sign it.
- You choose to sign the transaction, and your XYM balance is reduced by the transaction amount (typically all or nearly all of your XYM).

Every Symbol wallet is different; some may not permit users to sign aggregate transactions, others may hide aggregate transactions originating from addresses outside a predefined whitelist (i.e. their contacts), and others may prompt users for their signature without revealing the full contents of what they are signing. Reviewing aggregate transactions using the `Symbol Explorer <https://testnet.symbol.fyi/nodes>`__ before signing them can provide additional security and peace of mind. Below is an example of a malicious aggregate transaction that contains a message to a trusted address in the first transaction and an asset transfer to the scammer's address in the second transaction.

.. figure:: ../../resources/images/screenshots/Aggregate-transaction.png
   :align: center
   :width: 75%
   :class: with-shadow
   :target: /_images/Aggregate-transaction.png

********
Spoofing 
********

What is spoofing?
==================

Spoofing involves hiding or disguising identity to enable malicious activity, literally spoofing the identity of the malicious party to make it believable and appear trustworthy. 

What could a spoofing attack look like?
========================================

A spoofing hack will target private key or mnemonic phrase (also known as your secret recovery phrase or seed phrase), as this can be used to restore your wallet and will provide a hacker with access to your private keys and the wallet's contents. Symbol wallets are a non-custodial, meaning you are responsible for keeping your private keys and mnemonic phrase secure.

A spoofing attack might go something like this:

- You ask a question on Twitter or in the XYMCity Discord server.
- A malicious account identifies you as a target due to your request for support and sends you a DM. The account will be configured to resemble an official support resource and could include a relevant logo, a convincing username, and a professional sounding dialogue. 
- The bad actor will rely on your belief that they are an official support resource, and try to convince you to provide your private key or mnemonic phrase key to resolve your problem. This could also involve directing you to a website that requests these details. 
- If successful, the bad actor can gain full access to your address and transfer your assets to an address of their choosing.

This scenario is just an example, and similar events could play out across any social media platform, messaging service, forum, or otherwise on which you share information publicly. 

How can I protect myself from spoofing attacks?
================================================

The Symbol Syndicate will never directly message you for customer support, and will never ask for your private key or mnemonic phrase. Anyone asking you for contact information, your secret recovery phrase or details of your support issue outside of the Discord helpdesk channel is a potential scammer and should be ignored and/or reported.
Be vigilant. If it looks like it might be a scam, it probably is. Always be observant and keep a lookout for suspicious, telltale signs. These could include:

- Requesting personal information, including anything from your name, the value of your wallet's holdings, or even your private key, which you should never, ever give to anyone. 
- Unofficial-looking Twitter handles using underscores, doubled-up letters, and numbers to mimic official accounts. 
- Official-looking Discord 'about me' details or handles (i.e. SUPPORT_TEAM).
- Providing links to websites purported to 'validate your wallet' or assist with troubleshooting (excepting known-good sources such as the official Symbol documentation or articles written by Syndicate members).
- Requests to reach out for support, get in touch, or send a DM. 

Most importantly, **never share your private keys and mnemonic phrase** regardless of how convincing a person/entity may be.


*****************
Clipboard hacking
*****************

What is clipboard hacking?
===========================

Symbol addresses are not easily memorized nor typed manually, so many users leverage their device's clipboard to copy and paste a recipient's Symbol address. Clipboard hacking involves malware that intercepts the contents of your clipboard and replaces an address you've copied with an address belonging to the hacker.  When you go to send a transaction and paste the address from your clipboard, the hacker's address is pasted instead of the one you initially copied. 

How can I protect myself?
===========================

The only way reliable way to be safe is to triple-check addresses before you confirm any transaction. A robust and up-to-date anti-malware software is strongly recommended, as it should identify most potential clipboard hacking malware programs, notify you, and quarantine them before they can affect your crypto activity. 


******************
Compromised Backup
******************

Keep in mind that any copies of your private keys or mnemonic phrase can also grant someone access to your accounts. Ensure that these cannot be accessed by a hack, theft, or compromised cloud storage account.
