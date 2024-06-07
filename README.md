# Project Overview

This repository contains automated end-to-end tests for the login, catalog, product page and checkout functionality of the Swag Labs application using Cypress. The tests aims to cover positive and negative scenarios and edge cases as well. 

### Current Supported Features
- Login
- Product Listing Page
- Product Detail Page
- Checkout

#### This automation tests were developed using:
* Cypress package version: 13.8.1
* Cypress binary version: 13.8.1
* Electron version: 27.1.3
* Bundled Node version: 18.17.1
* Visual Studio Code: Version: 1.78.1

# Table of Contents
## Prerequisites

 - Node.js (>=12.x)
 - npm (>=6.x) or yarn (>=1.x)
 
## Installation
1- Clone the repository:

```http
  git clone https://github.com/ruthrecalde-ad/qa_finaltask.git
  cd qa_finaltask
```
2- Install the dependencies:

```http
  npm install
```
or

```http
  yarn install
```
3- To open Cypress GUI, run the following command:

```http
  npx cypress open
```
## Project Structure
The xx classes in cypress/page-objects/xxx.js encapsulates the elements and actions related to that page. This follows the Page Object Model (POM) design pattern, making the tests more maintainable and readable.
| Parameter                        | Description                                                                                                             |
| :------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| `cypress/integration/xxx.spec.js`| Contains the test suites for the homepage, login, catalog, product page and checkout which includes multiple test cases.|
| `cypress/page-objects/xxx.js`    | Contains the test class with methods for interacting with the xxx page elements and performing various actions.         |
| `cypress.json`                   | Cypress configuration file.                                                                                             |
| `package.json`                   | Project metadata and dependencies.                                                                                      |

## Troubleshooting
If you see a "Module not found" error, try deleting the `node_modules` folder and running `npm install` again.

## Contribution and Contact
Feel free to open issues or submit pull requests if you have any suggestions or improvements. For support, please email ruth.recalde@applydigital.com.
