import { ethers } from "hardhat";

const b_address = "0x17e46765bfcD411f13192AF6602EC7dCE95E1385";
const itemId = 0;
const deployer = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

export async function rateOwnerChange() {
  console.log(`contract at ${b_address}`);

  const _contract = await ethers.getContractAt("aval_20", b_address);

  const balanceBefore = await _contract.getBalance(deployer);

  console.log("Balance: before redeem " + balanceBefore);

  const transferTx = await _contract.redeemToken(itemId);

  const balanceAfter = await _contract.getBalance(deployer);

  console.log("Balance: after redeem " + balanceAfter);
}

rateOwnerChange()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
