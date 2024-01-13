import { ethers } from "hardhat";

const b_address = "0x17e46765bfcD411f13192AF6602EC7dCE95E1385";
const itemName = "Shoes";
const itemPrice = 30;
const deployer = "0x4fE333470b78C5896178780aa9483bc8F6085418";

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
