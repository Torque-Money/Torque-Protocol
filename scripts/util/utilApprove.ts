import ERC20Abi from "@openzeppelin/contracts/build/contracts/ERC20.json";
import {chooseConfig, ConfigType} from "./utilConfig";
import {HardhatRuntimeEnvironment} from "hardhat/types";
import {ERC20} from "../../typechain-types";

export default async function main(configType: ConfigType, hre: HardhatRuntimeEnvironment) {
    const config = chooseConfig(configType);

    const signer = hre.ethers.provider.getSigner();
    const signerAddress = await signer.getAddress();

    for (const approved of config.approved) {
        const token = new hre.ethers.Contract(approved.address, ERC20Abi.abi, signer) as ERC20;
        const tokenBalance = await token.balanceOf(signerAddress);

        await token.approve(config.leveragePoolAddress, tokenBalance);
        await token.approve(config.marginLongAddress, tokenBalance);

        console.log(`Approve: Approved contracts to spend ${tokenBalance.toString()} tokens with address ${approved.address}`);
    }
}
