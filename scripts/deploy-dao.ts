import { getContractAddress } from "ethers/lib/utils";
import hre from "hardhat";
import config from "../config.json";
import fs from "fs";

async function main() {
    await hre.run("compile");

    // Calculate the addresses of the contracts
    const signer = hre.ethers.provider.getSigner();
    const signerAddress = await signer.getAddress();
    const transactionCount = await signer.getTransactionCount();

    const timelockAddress = getContractAddress({
        from: signerAddress,
        nonce: transactionCount + 3,
    });

    // Deploy the yield approval
    const yieldApprovedConfig = {
        pool: config.poolAddress,
    };
    const YieldApproved = await hre.ethers.getContractFactory("YieldApproved");
    const yieldApproved = await YieldApproved.deploy(...Object.values(yieldApprovedConfig));
    await yieldApproved.deployed();

    console.log(`Deployed yield approved to ${yieldApproved.address}`);

    // Deploy the token
    const tokenConfig = {
        tokenAmount: (1e18).toString(),
        yieldSlashRate: 10000,
        yieldReward: (2e18).toString(),
        yieldApproval: yieldApproved.address,
    };
    const Token = await hre.ethers.getContractFactory("Token");
    const token = await Token.deploy(...Object.values(tokenConfig));
    await token.deployed();

    console.log(`Deployed token to ${token.address}`);

    // Deploy the governor
    const governorConfig = {
        token: token.address,
        timelock: timelockAddress,
        quorumFraction: 2,
        votingDelay: 0,
        votingPeriod: 1,
        proposalThreshold: 0,
    };
    const Governor = await hre.ethers.getContractFactory("DAO");
    const governor = await Governor.deploy(...Object.values(governorConfig));
    await governor.deployed();

    console.log(`Deployed governor to ${governor.address}`);

    // Deploy the timelock
    const timelockConfig = {
        minDelay: 2,
        proposers: [governor.address],
        executors: [governor.address],
    };
    const Timelock = await hre.ethers.getContractFactory("TimelockController");
    const timelock = await Timelock.deploy(...Object.values(timelockConfig));
    await timelock.deployed();

    console.log(`Deployed timelock to ${timelock.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
