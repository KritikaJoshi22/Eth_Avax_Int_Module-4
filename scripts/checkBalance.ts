import { ethers } from "hardhat";

const b_address = "0x17e46765bfcD411f13192AF6602EC7dCE95E1385";
const deployer = "0x4fE333470b78C5896178780aa9483bc8F6085418";

// 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

export async function rateOwnerChange() {
  console.log(`Rate at ${b_address}`);

  const _contract = await ethers.getContractAt("aval_20", b_address);

  const transferTx = await _contract.getBalance(deployer);

  const items = await _contract.getItems();

  console.log(`The Balance: ${transferTx}`);

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
