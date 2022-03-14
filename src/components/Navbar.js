import './Navbar.css';
import React from 'react';
import {Link} from "react-router-dom"
import FingerIcon from '@mui/icons-material/Fingerprint';
import './Button.css'


function Navbar() {
	return(
		<>
			<div className="navbar">
				<div className="navbar__left">
					<Link to="/" className="navbar__logo">
						<FingerIcon className="navbar__icon"/>
					</Link>
				</div>

				<div className="navbar__right">
							<Link to="/" className="nav__links">
								<button className="btn__primary">Stake</button>
							</Link>
				</div>
			</div>
		</>
		)
}

export default Navbar;