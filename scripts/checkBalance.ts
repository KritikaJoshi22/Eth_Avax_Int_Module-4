import { ethers } from "hardhat";
import { CONTRACT, DEPLOYER, RECIEVER } from "../helper";

const b_address = CONTRACT;
const deployer = DEPLOYER;

// 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

export async function rateOwnerChange() {
  console.log(`Rate at ${b_address}`);

  const _contract = await ethers.getContractAt("aval_20", b_address);

  const transferTx = await _contract.getBalance(RECIEVER);

  const transferTx2 = await _contract.getBalance(deployer);

  const items = await _contract.getItems();

  console.log(`The Balance of reciever: ${transferTx}`);

  console.log(`The Balance of deployer: ${transferTx2}`);

  for (let i = 0; i < items.length; i++) {
    console.log(`Item ${i}: ${items[i]}`);
  }
}

rateOwnerChange()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
