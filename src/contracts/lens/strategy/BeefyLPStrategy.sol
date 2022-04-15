//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import {IVault} from "@beefy/contracts/BIFI/interfaces/beefy/IVault.sol";

import {IStrategy} from "../../interfaces/lens/strategy/IStrategy.sol";

import {SupportsToken} from "../../utils/SupportsToken.sol";

// This strategy will take two tokens and will deposit them into the correct LP pair for the given pool.
// It will then take the LP token and deposit it into a Beefy vault.

contract BeefyLPStrategy is IStrategy, SupportsToken {

}
