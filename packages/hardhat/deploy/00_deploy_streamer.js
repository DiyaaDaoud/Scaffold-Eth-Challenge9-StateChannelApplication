// deploy/00_deploy_streamer.js

const { ethers } = require("hardhat");
const { verify } = require("../utils/verify");
module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();
  await deploy("Streamer", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    log: true,
  });

  const streamer = await ethers.getContract("Streamer", deployer);

  // console.log("\n 🤹  Sending ownership to frontend address...\n");
  // // Checkpoint 2: change address to your frontend address vvvv
  // const ownerTx = await streamer.transferOwnership(
  //   "0x012ed3d36047eE3576DA7C8c90CEAC099526EFa6",
  //   { gasLimit: 500000 }
  // );

  // console.log("\n       confirming...\n");
  // const ownershipResult = await ownerTx.wait(1);
  // if (ownershipResult) {
  //   console.log("       ✅ ownership transferred successfully!\n");
  // }

  try {
    if (chainId !== "31337") {
      await verify(streamer.address, []);
      console.log("VERIFIIIEEEEDD!!");
    }
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(error);
    }
  }
};

module.exports.tags = ["Streamer"];
