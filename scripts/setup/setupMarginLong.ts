import {HardhatRuntimeEnvironment} from "hardhat/types";
import {chooseConfig, ConfigType} from "../utils/utilConfig";

export default async function main(configType: ConfigType, hre: HardhatRuntimeEnvironment) {
    const config = chooseConfig(configType);

    const marginLong = await hre.ethers.getContractAt("MarginLong", config.marginLongAddress);

    const marginApprovedCollateral = config.approved.filter((approved) => approved.marginLongCollateral).map((approved) => approved.address);
    await (await marginLong.addCollateralToken(marginApprovedCollateral)).wait();
    const marginSupportedCollateral = Array(marginApprovedCollateral.length).fill(true);
    await (await marginLong.setApprovedCollateralToken(marginApprovedCollateral, marginSupportedCollateral)).wait();

    const marginApprovedBorrow = config.approved.filter((approved) => approved.marginLongBorrow).map((approved) => approved.address);
    await (await marginLong.addBorrowedToken(marginApprovedBorrow)).wait();
    const marginSupportedBorrow = Array(marginApprovedBorrow.length).fill(true);
    await (await marginLong.setApprovedBorrowedToken(marginApprovedBorrow, marginSupportedBorrow)).wait();

    console.log("Setup: Margin long");
}
