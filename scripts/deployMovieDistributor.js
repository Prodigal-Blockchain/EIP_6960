const { Contract, ContractFactory, utils, BigNumber } = require("ethers");
require("dotenv").config;

const { ethers } = require("hardhat");

async function main() {
  const ownerPrivateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  console.log(ownerPrivateKey, provider);
  const owner = new ethers.Wallet(ownerPrivateKey, provider);
  const mappingToArrayAddress = "Mapping_Address";
  //Deploy WETH contract
  const MovieFundDistributor = await ethers.getContractFactory(
    "MovieFundDistributor"
  );
  const movieFundDistributor = await MovieFundDistributor.deploy(
    mappingToArrayAddress
  );

  await movieFundDistributor.deployed();
  console.log("MovieFundDistributor:", movieFundDistributor.address);

  //Verify all Contracts

  await hre.run("verify:verify", {
    address: movieFundDistributor.address,
    constructorArguments: [mappingToArrayAddress],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
