// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./DaiToken.sol";
import "./DappToken.sol";

contract TokenFarm {
	string public name = "Dapp Token Farm";
	DappToken public dappToken;
	DaiToken public daiToken;
	address public owner; 

	address[] public stakers;
	mapping(address => uint) public stakingBalance;
	mapping(address => bool) public hasStaked;
	mapping(address => bool) public isStaking;

	constructor(DappToken _dappToken, DaiToken _daiToken) {
		dappToken = _dappToken;
		daiToken = _daiToken;
		owner = msg.sender;
	}

	modifier onlyOwner() {
		require(msg.sender == owner, "caller must be the owner");
		_;
	}

	function stakeTokens(uint _amount) public {
		require(_amount > 0, "amount can't be 0");
		daiToken.transferFrom(msg.sender, address(this), _amount);
		stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;

		if (!hasStaked[msg.sender]) {
			stakers.push(msg.sender);
		}

		hasStaked[msg.sender] = true;
		isStaking[msg.sender] = true;
	}

	function unstakeTokens() public {
		uint balance = stakingBalance[msg.sender];
		require(balance > 0);
		daiToken.transfer(msg.sender, balance);
		stakingBalance[msg.sender] = 0;
		isStaking[msg.sender] = false;
	}

	function issueTokens() public onlyOwner {
		for (uint i = 0; i<stakers.length; i++) {
			address recipient = stakers[i];
			uint balance = stakingBalance[recipient];
			if (balance > 0) {
				dappToken.transfer(recipient, balance);
			}
			
		}
	}

}