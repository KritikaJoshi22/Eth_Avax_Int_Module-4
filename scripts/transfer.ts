const hre = require("hardhat");
const ethers = require("ethers");
import { CONTRACT, RECIEVER, DEPLOYER } from "../helper";

const CONTRACT_ADDRESS = CONTRACT; // Replace with actual contract address
const receiverAddress = RECIEVER; // Replace with actual receiver address
const amount = 10; // Replace with actual amount
const sender = DEPLOYER; // Replace with actual sender address

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
