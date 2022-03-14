import './Footer.css';
import React from 'react';
import {Link} from "react-router-dom"
import FingerIcon from '@mui/icons-material/Fingerprint';
import './Button.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
	return(
		<>
			<div className="footer">
				<div className="footer__left">
					<Link to="/" className="footer__logo">
						<FingerIcon className="footer__icon"/>
					</Link>
				</div>

				<div className="footer__right">
							<Link to="/" className="footer__links">
								<TwitterIcon className="footer__icon" />
							</Link>
							<Link to="/" className="footer__links">
								<InstagramIcon className="footer__icon" />
							</Link>
							<Link to="/" className="footer__links">
								<FacebookIcon className="footer__icon" />
							</Link>
				</div>
			</div>
		</>
		)
}

export default Footer;