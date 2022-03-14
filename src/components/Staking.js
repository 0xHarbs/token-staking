import React, {Component} from "react"
import './Button.css'
import './Staking.css'
import BalanceIcon from '@mui/icons-material/AccountBalanceWallet';
import StarsIcon from '@mui/icons-material/Stars';

class Staking extends Component{
	constructor(props) {
		super(props)

		this.state = {
			stakeAmount: "",
		}
	}

	render() {
	return(
		<div className="staking">
		<div className="staking__title">
			<h1>Get started in seconds</h1>
			<p>Select an amount of DAI and start staking today.</p>
		</div>
			<div className="staking__row">
				<div className="stake__col">
					<div className="staking__textWrapper">
						<div className="icon__wrapper">
							<BalanceIcon />
							<div className="col__stats">
								<p>Staking Balance</p>
								<h2>{(this.props.stakingBalance)/(10**18)}<span> mDAI</span></h2>
							</div>
						</div>
						<div className="icon__wrapper">
						<StarsIcon />
							<div className="col__stats">
								<p>Reward Balance</p>
								<h2>{(this.props.dappTokenBalance)/(10**18)}<span> DaPP</span></h2>
							</div>
						</div>
					</div>
				</div>
				<div className="stake__col">
					<div className="staking__textWrapper">
					<form>
						<div className="staking__inputHeader">
							<div className="staking__colInfo">
								<h4>Stake Tokens</h4>
							</div>
							<div className="staking__colInfo">
								<p>Dai Balance: {(this.props.daiTokenBalance)/(10**18)}</p>
							</div>
						</div>
						<div className="staking__inputBox">
							<input
							className="staking__input"
							type="number"
							placeholder="0"
							value={this.state.stakeAmount}
							onChange={(e) => this.setState({ stakeAmount: e.target.value })}
							/>
						</div>
						<div className="staking__submit">
							<button
							className="stake__button"
							type="submit"
							onClick={(event) => {
								event.preventDefault()
								console.log(this.state.stakeAmount*(10**18))
								let amount = (this.state.stakeAmount*(10**18)).toString()
								this.props.stakeTokens(amount)
							}}>
							Stake
							</button>
							<button
							className="unstake__button"
							type="submit"
							onClick={(event) => {
								event.preventDefault()
								this.props.unstakeTokens()
							}}>
							Unstake All
							</button>
						</div>
					</form>
					</div>
				</div>
			</div>
		</div>
		);
}}

export default Staking;