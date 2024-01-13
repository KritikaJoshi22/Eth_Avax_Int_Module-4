const hre = require("hardhat");
const ethers = require("ethers");

const CONTRACT_ADDRESS = "0x17e46765bfcD411f13192AF6602EC7dCE95E1385";
const recieverAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const amount = 35;
const deployer = "0x4fE333470b78C5896178780aa9483bc8F6085418";

export async function mint() {
  const _contract = await hre.ethers.getContractAt("aval_20", CONTRACT_ADDRESS);

  const owner = await _contract.owner();

  console.log("Owner: " + owner);

  const mintTX = await _contract.mint(recieverAddress, amount, {
    from: deployer,
  });

  console.log(`The Transaction Hash ${mintTX.hash}`);
}

mint()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
