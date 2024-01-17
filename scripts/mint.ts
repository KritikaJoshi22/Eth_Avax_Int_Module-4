const hre = require("hardhat");
const ethers = require("ethers");
import { CONTRACT, RECIEVER, DEPLOYER } from "../helper";

const CONTRACT_ADDRESS = CONTRACT;
const recieverAddress = RECIEVER;
const amount = 500;
const deployer = DEPLOYER;

export async function mint() {
  const _contract = await hre.ethers.getContractAt("aval_20", CONTRACT_ADDRESS);

  const owner = await _contract.owner();

  console.log("Owner: " + owner);

  const mintTX = await _contract.mint(recieverAddress, amount, {
    from: deployer,
  });

  const mintTX2 = await _contract.mint(deployer, amount, {
    from: deployer,
  });

  console.log(`The Transaction Hash ${mintTX.hash}`);
  console.log(`Minted 500 tokens to Deployer Wallet address`);
  console.log(`Minted 500 tokens to Reciever wallet address`);
}

mint()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
