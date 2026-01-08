import { ethers } from "hardhat"; 
async function main() { 
const Greeter = await ethers.getContractFactory("Greeter"); 
const contract = await Greeter.deploy(); 
await contract.waitForDeployment(); 
console.log(`contract deployed to : ${contract.target}`); 
} 
main().catch((error) => { 
console.error(error); 
process.exitCode = 1; 
}); 