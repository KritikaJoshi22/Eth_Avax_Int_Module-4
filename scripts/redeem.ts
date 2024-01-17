import { ethers } from "hardhat";
import { CONTRACT, DEPLOYER } from "../helper";

const b_address = CONTRACT;
const itemId = 0;
const deployer = DEPLOYER;

export async function rateOwnerChange() {
  console.log(`contract at ${b_address}`);

  const _contract = await ethers.getContractAt("aval_20", b_address);

  const balanceBefore = await _contract.getBalance(deployer);

  console.log("Balance: before redeem " + balanceBefore);

  const transferTx = await _contract.redeemToken(itemId, { from: deployer });

  const balanceAfter = await _contract.getBalance(deployer);

  console.log("Balance: after redeem " + balanceAfter);
}

rateOwnerChange()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
