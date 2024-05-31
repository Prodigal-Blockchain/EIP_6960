const { Contract, ContractFactory, utils, BigNumber } = require("ethers");
require("dotenv").config;

const { ethers } = require("hardhat");

async function main() {
  const ownerPrivateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  console.log(ownerPrivateKey, provider);
  const owner = new ethers.Wallet(ownerPrivateKey, provider);

  //Deploy WETH contract
  const MappingToArrays = await ethers.getContractFactory("MappingToArrays");
  const mappingToArrays = await MappingToArrays.deploy();

  await mappingToArrays.deployed();
  console.log("MappingToArrays:", mappingToArrays.address);

  //Verify all Contracts

  await hre.run("verify:verify", {
    address: mappingToArrays.address,
    constructorArguments: [],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
