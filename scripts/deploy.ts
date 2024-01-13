import { ethers } from "hardhat";

async function main() {
  const aval_20 = await ethers.deployContract("aval_20", [
    "Degen",
    "DGN",
    "0x4fE333470b78C5896178780aa9483bc8F6085418",
  ]);

  await aval_20.waitForDeployment();

  console.log(`ERC20 deployed to ${aval_20.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
