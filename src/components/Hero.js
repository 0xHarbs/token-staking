import React from "react"
import './Button.css'
import './Hero.css'
import EmailIcon from '@mui/icons-material/Email';

function Hero({image, topLine, description, headline, isFirstImg , lightText, lightBg, lightTextDesc, newsletter, showButton}) {

	return(
		<div className={!lightBg && 'hero__darkBg'}>
			<div className="hero__section">
				<div className="hero__row"
				style={{ flexDirection: isFirstImg ? 'row' : 'row__reverse' }}
				>
					<div className="col">
						<div className="hero__topLine">{topLine}
						</div>
						<h1 className={!lightText && 'hero__heading dark'}>{headline}</h1>
						<p className={lightTextDesc ? 'hero__subtitle' : 'hero__subtitle dark'} >{description}</p>
						{showButton && 
							<>
								<div className="newsletter__input">
									<div className="newsletter__container">
										<EmailIcon className="icon"/>
										<input type="email" placeholder="Email"></input>
										<button className="newsletter__button" type="submit">Subscribe</button>
									</div>
								</div>
							</>
						}
					</div>
					<div className="col">
						<img className="hero__img" src={image} alt="" />
					</div>
				</div>
			</div>
		</div>
		)
}

export default Hero;