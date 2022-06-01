const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
    const SupplyChainContract = await ethers.getContractFactory("SupplyChain_Contract");
    const deployedSupplyChainContract = await SupplyChainContract.deploy();
    await deployedSupplyChainContract.deployed();
    console.log("SupplyChain Contract Address:", deployedSupplyChainContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });