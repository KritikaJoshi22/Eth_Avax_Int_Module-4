const hre = require("hardhat");
const ethers = require("ethers");

const CONTRACT_ADDRESS = "0x17e46765bfcD411f13192AF6602EC7dCE95E1385"; // Replace with actual contract address
const receiverAddress = "0x0a960Fa6158f4d7aDfA2A3dA5408aB6efd4A5C5A"; // Replace with actual receiver address
const amount = 10; // Replace with actual amount
const sender = "0x4fE333470b78C5896178780aa9483bc8F6085418"; // Replace with actual sender address

export async function transfer() {
  try {
    const _contract = await hre.ethers.getContractAt(
      "aval_20",
      CONTRACT_ADDRESS
    );

    const balanceBefore = await _contract.getBalance(sender);
    console.log("Balance: before transfer " + balanceBefore);

    const transferTX = await _contract.transfer(receiverAddress, amount, {
      from: sender,
    });
    console.log(`The Transaction Hash ${transferTX}`);

    const balanceAfter = await _contract.getBalance(sender);
    console.log("Balance: after transfer " + balanceAfter);
  } catch (error) {
    console.error("Error during transfer:", error);
    process.exit(1);
  }
}

transfer()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Unhandled promise rejection:", error);
    process.exit(1);
  });
