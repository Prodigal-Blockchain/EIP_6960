# DLT (Dual Layer Token) Standard 🛠️

## About DLT 🚀

DLT, or Dual Layer Token, is a unique token standard that combines the best features of existing standards while adding a novel layered structure, making it ideal for managing diverse asset types and their attributes.

The DLT structure comprises:

- `mainId`: Represents the primary asset type.
- `subId`: Represents the unique attributes or variations of the asset.

## DLT vs. Existing Standards 🥊

While existing token standards (ERC20, ERC721, ERC1155) have their merits, they each have limitations when dealing with diverse asset types and attributes within the same contract.

DLT overcomes these limitations by providing a more flexible, efficient, and scalable solution for managing various assets. 🏗️

Benefits of DLT include:

- Simplified Asset Management 📦
- Optimized Gas Costs ⛽
- Inherent Scalability 📈
- Enhanced Interoperability 🧩
- Fostering Innovation 💡

## Interface Overview 📖

The DLT Interface consists of several key events and functions that facilitate the handling and management of tokens.

Key events include:

- `Transfer`: Emitted when a token is transferred.
- `TransferBatch`: Emitted for batch transfers.
- `Approval`: Emitted when an owner approves a spender to manage a token.
- `DLTApprovalForAll`: Emitted when a spender enables or disables an operator to manage all of its assets.
- `URI`: Emitted when the URI of a mainId is changed.

Key functions include:

- `setApprovalForAll`: Approve or remove an operator for the caller.
- `safeTransferFrom`: Moves tokens using the allowance mechanism.
- `approve`: Sets the allowance of a spender over the caller's tokens.
- `subBalanceOf`: Returns the amount of tokens owned by an account.
- `balanceOfBatch`: Returns the balances of multiple accounts.
- `allowance`: Returns the remaining number of tokens that a spender can spend on behalf of an owner.
- `isApprovedForAll`: Checks if an operator is allowed to manage all of the assets of an owner.

## Key Functions 📚

The DLT interface provides a set of functions to interact with and manage the tokens. Here's a brief overview:

- `setApprovalForAll(operator, approved)`: Allows the approval or removal of `operator` as an operator for the caller. Operators can call `transferFrom` or `safeTransferFrom` for any token owned by the caller.
- `safeTransferFrom(sender, recipient, mainId, subId, amount, data)`: Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance.
- `approve(spender, mainId, subId, amount)`: Sets `amount` as the allowance of `spender` over the caller's tokens.
- `subBalanceOf(account, mainId, subId)`: Returns the amount of tokens owned by `account
- `balanceOfBatch(accounts, mainIds, subIds)`: Returns the balances of multiple `accounts` for each pair of `mainIds` and `subIds`.
- `allowance(owner, spender, mainId, subId)`: Returns the remaining number of tokens that `spender` can spend on behalf of `owner` for a specific `mainId` and `subId`.
- `isApprovedForAll(owner, operator)`: Checks if `operator` is allowed to manage all of the assets of `owner`.

## DLT Examples 🌟

1. Real Estate Platform with Fractional Ownership:

   DLT can represent unique houses (mainId) and fractional ownership (subId) efficiently within the same contract, allowing for a more versatile real estate platform.

2. Invoice Factoring for SMEs:

   DLT can represent unique invoices (mainId) and individual invoice components or fractional ownership (subId) efficiently within the same contract, allowing for a more versatile invoice factoring platform for SMEs.

## SubId Types 📏

DLT can manage different types of digital assets (mainIds) and their attributes or variations (subIds) with associated quantities in various applications. SubIds can be used in two ways:

1. Shared SubIds:

   All mainIds share the same set of subIds.

   Example: Smartphone Models and Storage Capacities

   MainIds (Models):

   - iPhone
   - Samsung
   - Google Pixel

   SubIds (Storage Capacities):

   - A: 64GB
   - B: 128GB
   - C: 256GB

   Here, all smartphone models (mainIds) have the same storage capacities (subIds A, B, C).

2. Mixed SubIds:

   MainIds have unique sets of subIds.

   Example: Courses and Instructors with Class Quotas

   MainIds (Courses):

   - Math
   - Science
   - History

   SubIds (Instructors and Class Quotas):

   - A: Alice (20 students)
   - B: Bob (15 students)
   - C: Carol (30 students)
   - D: Dave (25 students)

   Here, each course (mainId) has a different set of instructors (subIds) with specific class quotas.

## Conclusion 🔚

DLT is a versatile and efficient token standard that simplifies asset management, optimizes gas costs, and promotes scalability, interoperability, and innovation across various industries and use cases.

By implementing the DLT standard in your projects, you can unlock the potential of blockchain technology for managing diverse assets and their unique attributes or variations. 🚀

# Movie Fund Distributor-ERC6960

The Movie Fund Distributor is a Solidity smart contract designed to manage funds and operations within a movie production house using ERC6960-Dual Layer Token.It provides functionalities for adding movies, departments, and employees, as well as distributing funds and paying employee salaries. The ERC6960 Dual Layer Token combines the functionalities of ERC-20, ERC-721, and ERC-1155, adding a classification layer that uses mainId as the main asset type identifier and subId as the unique attributes or variations of the main asset.

## Key Features

- **Adding Movies**: Producers can add new movies to the production house, specifying the movie name and associated image.
- **Adding Departments**: Producers can add departments to each movie, defining the department name and image.
- **Adding Employees**: Department managers can add employees to their departments, specifying the employee's address and salary.
- **Distributing Funds**: Producers can distribute funds to movies and departments within the production house.
- **Paying Salaries**: Department managers can pay salaries to employees in their departments using allocated funds.

## Usage

1. **Deploy the Contract**: Deploy the MovieFundDistributor contract on the Ethereum blockchain.
2. **Add Movies**: Producers can add movies to the production house using the addMovie function, providing the movie name and image.
3. **Add Departments**: For each movie, producers can add departments using the addDepartment function, specifying the department name and image.
4. **Add Employees**: Department managers can add employees to their departments using the addEmployee function, providing the employee's address and salary.
5. **Distribute Funds**: Producers can distribute funds to movies and departments using the appropriate functions.
6. **Pay Salaries**: Department managers can pay employee salaries using allocated funds by calling the addEmployeesalary function.

## Installation

To install and use the SwifyDex staker contract in your project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/Prodigal-Blockchain/EIP_6960.git
   cd EIP_6960
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Compile the contracts using Hardhat:
   ```sh
   npx hardhat compile
   ```

## Environment Setup

1. Create a `.env` file in the root directory and update it with your environment variables. For example:

   ```ini
   RPC_URL=<Replace with valide alchemy/infura url>
   PRIVATE_KEY=<Replace with your wallet private key>
   ETHERSCAN_API=<Replace with valid etherscan api key>
   ```

## Deployment

To deploy the contracts, use the following command:
Replace

1. Deploy Unsupported protocol contract

```bash
   npx hardhat run scripts/deployMappingToArrays.js --network NETWORK
```

2. To deploy Universal router contract, replace mappingToArrayAddress address, use following command:

```bash
   npx hardhat run scripts/deployMoviedistributor.js --network NETWORK
```

Replace `NETWORK` with the network you have configured in your Hardhat configuration file (e.g., `sepolia`).
