import { ethers } from "hardhat";
import { CONTRACT, DEPLOYER } from "../helper";

const b_address = CONTRACT;
const itemName = "hat";
const itemPrice = 30;
const deployer = DEPLOYER;

export async function rateOwnerChange() {
  console.log(`Aval_20 at ${b_address}`);

  const _contract = await ethers.getContractAt("aval_20", b_address);

  const transferTx = await _contract.addItems(itemName, itemPrice, {
    from: deployer,
  });

  console.log(`Your transaction hash is: ${transferTx.hash}`);
}

rateOwnerChange()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
