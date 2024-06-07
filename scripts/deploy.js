const { Contract, ContractFactory, utils, BigNumber } = require("ethers");
require("dotenv").config;

const { ethers } = require("hardhat");

async function main() {
  const ownerPrivateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
  console.log(ownerPrivateKey, provider);
  const owner = new ethers.Wallet(ownerPrivateKey, provider);
  //Deploy MappingToArrays contract
  const MappingToArrays = await ethers.getContractFactory("MappingToArrays");
  const MappingToArraysArtifact = await MappingToArrays.deploy();
  await MappingToArraysArtifact.waitForDeployment();
  console.log("MappingToArrays:", MappingToArraysArtifact.target);
  //Deploy MetaDataDescriptor contract

  const MetaDataDescriptor = await ethers.getContractFactory(
    "MetaDataDescriptor"
  );
  const MetaDataDescriptorArtifact = await MetaDataDescriptor.deploy();
  await MetaDataDescriptorArtifact.waitForDeployment();
  console.log("MetaDataDescriptor:", MetaDataDescriptorArtifact.target);

  //Deploy MovieFundDistributor contract
  const MovieFundDistributor = await ethers.getContractFactory(
    "MovieFundDistributor",
    {
      libraries: {
        MetaDataDescriptor: MetaDataDescriptorArtifact.target,
      },
    }
  );
  const MovieFundDistributorArtifact = await MovieFundDistributor.deploy(
    MappingToArraysArtifact.target
  );
  await MovieFundDistributorArtifact.waitForDeployment();
  console.log("MovieFundDistributor:", MovieFundDistributorArtifact.target);

  await hre.run("verify:verify", {
    address: MappingToArraysArtifact.target,
    constructorArguments: [],
  });
  await hre.run("verify:verify", {
    address: MetaDataDescriptorArtifact.target,
    constructorArguments: [],
  });
  await hre.run("verify:verify", {
    address: MovieFundDistributorArtifact.target,
    constructorArguments: [MappingToArraysArtifact.target],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
