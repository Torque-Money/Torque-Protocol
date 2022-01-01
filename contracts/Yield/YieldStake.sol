//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./YieldUnstake.sol";

abstract contract YieldStake is YieldUnstake {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    // Stake tokens for a yield
    function stake(IERC20 token_, uint256 amount_) external {
        uint256 currentStaked = staked(token_, _msgSender());

        uint256 owed = _owedBalance(token_, _msgSender());
        uint256 yield = _yield(token_, initialStakeBlock(token_, _msgSender()), currentStaked);
        _setOwedBalance(token_, owed.add(yield), _msgSender()); 
        _setInitialStakeBlock(token_, block.number, _msgSender());

        token_.safeTransferFrom(_msgSender(), address(this), amount_);
        _setStaked(token_, currentStaked.add(yield), _msgSender());

        emit Stake(_msgSender(), token_, amount_);
    }

    event Stake(address indexed account, IERC20 token, uint256 amount);
}