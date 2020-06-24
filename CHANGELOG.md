# Changelog

All notable changes to this project will be documented in this file.

The changelog format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## 0.21.4 - 16-May-2020

Code-name: Pentesting part 3 (RC7)

## Added

- How-to guides for desktop wallet
- Port requirements to "Running a test net node" guide
- API reference versioning support
- Optimal max_fee calculation docs
- 0.9.5 transaction types (Vrf, Node, Voting)
- What is Symbol section
- Troubleshooting notes in getting started section
- Glossary.

## Updated

- SDK code examples
- Refactor multisig guides, making possible to solve them with the desktop wallet
- Moved libraries under SDK.
- Diagrams adapted with new style
- Transaction schemas split from concepts
- 0.9.5 configuration and latest testnet links

## 0.21.3 - 7-Abr-2020

Code-name: Fushicho 5

## Added
- Extending Symbol concept
- Wallet installation notes
- Import TypeScript SDK reference versions automatically
- Import CLI commands reference versions automatically
- Publish docs when pushing to master
- Updated cross chain swap concept with maxRollBackBlocks

## Updated

- Added more details on guides prerequisites

## 0.21.2 - 06-Mar-2020

Code-name: Fushicho 5

## Added

- How to connect to MongoDB guide
- Data validation (merkle trees) concept
- CI for translations
- Mosaic snippets for JavaSDK
- Import Java Reference versions automatically

### Changed

- NEM Developer Center rebranded to Symbol Developers
- Server installation docs
- Enhanced mosaic creation guides
- SDK development guidelines up to date
- Key pair generation and address Format (NIP10)
- CLI and SDK code examples to be Fushicho 5 compatible

## 0.20.4 - 09-Feb-2020

Code-name: Fushicho 4

## Added

- First batch of code examples for Java SDK

### Changed

- Testnet docs adapted to V3
- Delegated harvesting guide adds the announcer account
- Code examples compatible with F4
-  Signature schemas (cryptography) clarified

### Fixed

- Bug in aggregate announcement (ts code examples)

## 0.20.2 - 12-Jan-2020

Code-name: Fushicho 2 & 3

### Added

- WebSockets docs
- Testnet guides
- Dynamic substitutions for code and currency names
- symbol-cli latest commands
- Whitepaper link

### Changed

- Fushicho2 schemas
- Update setup-workstation.rst
- Standardize ts / js examples
- Guides now have multiple ways to be solved (e.g. Wallet, CLI, SDK)

### Fixed

- Rental fee calculation

## 0.18.9 - 14-Nov-2019

Code-name: Fushicho 1

### Added

- Mosaic restriction guides
- Metadata guides
- Rental fees concept 
- Delegated harvesting guide 
- symbol-cli@0.13.4 new commands
- Configuring a network / node guides
- Deploy a private testnet guide 

### Changed

- Guidelines revision
- Fushicho API status errors 
- Fushicho new serialization

### Removed

- Courses section


## 0.18.6 - 01-Oct-2019

Code-name: Elephant 3

### Added

- Elephant 3 API status errors  
- Dynamic rental fees concept
- Persistent delegated harvesting concept 
- Mosaic Restriction guides  
- symbol-cli@0.13.1 new commands 

### Changed

- Diagrams are now written using [mermaid.js](http://mermaidjs.github.io)

### Fixed

- Searchbar enabled in mobile devices

### Changed

- Catbuffer protocol docs to match E3 release #237 
- Guides code to match E3 changes #213 
- Guides code are now organized as plugins

## 0.18.5 - 29-Aug-2019

Code-name: Elephant 1 & 2

### Added

- Consensus algorithm concept 
- Metadata concept 
- Mosaic Restrictions concept 
- Encrypted message concept 
- Outgoing account restriction concept
- Getting the mosaic identifier behind a namespace guide 
- Sending an encrypted message guide
- Migrating from NIS1 to Catapult guide
- symbol-cli 0.13 new commands
- Network generation hash concept

### Changed

- Filters are now named account restrictions
- Node concept with broker documentation
- Cryptography section comes with code examples
- Open API spec is now in a separate repository symbol-openapi
- symbol-sdk Java reference is now in a separate repository

### Removed

- Prototyping tool reference

### 0.17.6 - 9-Jun-2019

Code-name: Dragon

### Added

- Block score and difficulty concepts 
- Link a namespace with a mosaic/address guides (alias)
- Harvesting beneficiary concept
- Inflation concept.
- How to create a non-expirable mosaic guide 
- New README
- Signing a transactions complete definition  guide
- Announce transactions using the API guide
- Difference between absolute/relative
- Cost by default of services
-  Cross-chain swap diagram described 
- Algolia search box
- Account filters guide
- catapult.broker concept
- Style guide

### Changed

-  Account link description enhanced
-  Landing page redesign and enhanced navigation #91
- Multisig account opt-in for cosignatories 
-  Code snippets are easier to reference using [sphinxcontrib-viewsource](https://github.com/dgarcia360/sphinxcontrib-viewsource) directive
-  Atomic cross-chain swap guide to be Sha-256 compatible
- Swagger2 to OAS3 
- Catbuffer serialization for aggregate transactions
- Translating the documentation guide explains how to use Transifex
-  HashLockTransactions can lock NetworkCurrencyMosaic
- Catbuffer guides merged into SDK guidelines
- Secret lock specific for a public key
- Guides compatible with symbol-sdk 0.12

### Fixed

- Mosaic serialization schemas
- Mosaic max duration
- Receipts ids
- Responsive navigation for API reference
- General proofreading

### Removed

- Serialization section from API docs
- Java SDK code examples
- Outdated training materials
- Hide zh_CN temporally due to unresolved compilation errors
- References to levy #152 

## 0.16.2 - 22-Feb-2019

Code-name: cow

### Added

- Alias Transaction concept
- Harvesting concept
- Receipt concept
- Fees concept
- Latest API status errors and endpoints
- Sphinx tabs to select programming language in the Getting Started section
- Guides index page

### Changed

- Mosaic and namespaces split
- Cross-chain Swaps base algorithm
- Multisig account and multi-level multisig account sections are now merged

### Removed
- SDK releases notes
 
## 0.15 - 31-Jan-2019

Code-name: bison

### Added

- Account filters concepts
- Schemas for each transaction
- Monitoring a transaction guide
- API reference with latest endpoints
- state root hash description
- nemtech/community linked
- Bison API status errors

### Changed

- Node concept expanded
- Transaction life-cycle expanded

### Fixed

- Responsive layout

### Removed
- Debugging a transaction guide


## 0.14 - 5-Dec-2018

### Added

- catbuffer documentation

### Changed

- First application use case
- Getting started flow
-  Guides included in built-in features
- Secret lock transaction expanded

### Fixed

- API status errors

## 0.13.1 -  27-Nov-2018

### Added

- i18n, the docs are now translatable into different languages
- Japanese translation, thanks to @44uk
- Prototyping tool examples, thanks to @jorisadri 
- How to configure a serverConfig node in NEM Prototyping tool, thanks to @Boohi 
- How to work with listeners on client side guide (Angular, React...)
- How to translate the docs guide
- Mosaic properties concept

### Changed

- API reference migrated to Redoc 2.0
- Transactions concept expanded
- Publishing an SDK as official guide
- Block header concept expanded
- Aggregate Transactions guide expanded

### Fixed
- Images folder structure and image quality
- Sidebar layout.

## 0.11.5 - 5-Oct-2018

### Added

- New homepage
- New references page
- C# installation instructions
- Guides as blog posts (ablog system)
- View Code button in guides
- Development guidelines
- Community repositories
- CI system (travis)
- Responsive layout

### Changed

-  Setup your workstation guide flow

### Fixed

- Edit multisignature account guide 
- Cosign an ABT guide 
- Cross-chain swaps guide

## 0.10.5 - 23-Jul-2018

### Added

-  New template
- What is NEM section
- Running Catapult in local guide
- Node concept
- symbol-camel guide
- Prototyping Tool Reference
- ``transaction cosign`` command reference
-  rxjs6 support to typescript code examples
- API status error codes meaning
- Standard guides format

### Changed

- Each guide has its own file
- NIS2-API is now Catapult REST
- Writing your first application guide flow

### Fixed 

- Cross Chain Transactions guide
- Atomic cross-chain swap between NEM public and private chain guide

## 0.9.0 - 3-Apr-2018

### Added

- Draft docs.
