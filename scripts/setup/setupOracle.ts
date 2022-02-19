import {HardhatRuntimeEnvironment} from "hardhat/types";
import {chooseConfig, ConfigType} from "../utils/utilConfig";

export default async function main(configType: ConfigType, hre: HardhatRuntimeEnvironment) {
    const config = chooseConfig(configType);

    let oracle;
    if (configType === "main") oracle = await hre.ethers.getContractAt("Oracle", config.oracleAddress);
    else oracle = await hre.ethers.getContractAt("OracleTest", config.oracleAddress);

    const oracleApproved = config.approved.filter((approved) => approved.oracle).map((approved) => approved.address);
    const priceFeeds = config.approved.filter((approved) => approved.oracle).map((approved) => approved.priceFeed);
    const correctDecimals = config.approved.filter((approved) => approved.oracle).map((approved) => approved.decimals);
    const oracleSupported = Array(oracleApproved.length).fill(true);
    await (await oracle.setPriceFeed(oracleApproved, priceFeeds, correctDecimals, oracleSupported)).wait();

    console.log("Setup: Oracle");
}
