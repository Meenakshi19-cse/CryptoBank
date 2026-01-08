# A Decentralized Bank Management System

CryptoBank is a decentralized banking DApp built using Solidity, Hardhat, TypeScript, HTML, and CSS.
It allows users to deposit, withdraw, and check ETH balance using a smart contract and MetaMask.

CryptoBank/
│
├── artifacts/                
├── cache/                     
│
├── contracts/
│   └── Bank.sol              
│
├── ignition/
│   ├── deployments/           
│   └── modules/
│       └── Bank.ts            
│
├── node_modules/              
│
├── test/                     
├── typechain-types/           
│
├── .gitignore                 
├── hardhat.config.ts          
│
├── index.html                 
├── styles.css                 
│
├── package.json               
├── package-lock.json          
├── tsconfig.json             

-> Technologies Used

Solidity – Smart contract development

Hardhat – Ethereum development environment

TypeScript – Deployment scripts and config

HTML & CSS – Frontend UI

Web3.js – Blockchain interaction

MetaMask – Wallet integration

-> Features

Connect wallet using MetaMask

Deposit ETH into smart contract

Withdraw ETH securely

Check on-chain balance

Transaction record management (UI level)

-> Smart Contract

File: contracts/Bank.sol

Functions:

deposit() – Deposit ETH

withdraw(uint256 amount) – Withdraw ETH

getBalance() – View balance

-> How to Run Locally

1. Install dependencies
npm install

2️. Compile contracts
npx hardhat compile

3️. Run local blockchain
npx hardhat node

4.Compile the contract 
npx hardhat compile --network localhost

5. Deploy contract
npx hardhat ignition deploy ignition/modules/Bank.ts --network localhost

6. Open frontend

Open index.html in a browser and connect MetaMask
(Set MetaMask network to Localhost 8545)

-> Screenshots

<img width="1201" height="811" alt="Pg1" src="https://github.com/user-attachments/assets/7a5806c7-2958-4a86-9393-c481407f6ab8" />
<img width="1225" height="873" alt="Pg2" src="https://github.com/user-attachments/assets/77d23327-e6b9-4b7b-838e-67f43e15adbc" />
<img width="523" height="807" alt="pg3" src="https://github.com/user-attachments/assets/ee33d811-603e-4c0f-9d30-66d9e2ba06aa" />
<img width="1233" height="712" alt="pg4" src="https://github.com/user-attachments/assets/21fedf8e-fe50-4587-a1a4-69c918e77ae7" />
<img width="1227" height="630" alt="pg5" src="https://github.com/user-attachments/assets/88af4b45-8fbe-4bcf-a58c-af29415716b4" />
<img width="1202" height="755" alt="Pg6" src="https://github.com/user-attachments/assets/3af07cc1-3f8b-4745-b537-d4a14cb730d2" />
<img width="1195" height="801" alt="pg7" src="https://github.com/user-attachments/assets/67d3daed-e558-49bb-bf65-36342d053548" />
<img width="1043" height="271" alt="pg8" src="https://github.com/user-attachments/assets/7badd8cd-541f-446a-ad64-9ebd7d1b5b5c" />

Example:

images/
 ├── home.png
 ├── deposit.png
 ├── withdraw.png
 └── balance.png

-> Security Notes

Never expose private keys or mnemonic phrases

Do not upload .env files to GitHub

Use test networks for deployment

-> Project Status

✔ Smart contract completed

✔ Frontend UI completed

✔ GitHub repository ready

👩‍💻 Author

Meenakshi H
Blockchain & Web Development Enthusiast
