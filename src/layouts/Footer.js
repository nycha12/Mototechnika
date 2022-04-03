import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookSquare,
	faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
	<FontAwesomeIcon icon={faHome} />;

	return (
		<>
			<footer>
				<div>
					<h2>Social Media</h2>
					<span>
						<a
							rel="noopener noreferrer"
							href="https://www.facebook.com/FUH-Grzegorz-G%C3%B3ral-638228983036158"
							target="_blank"
						>
							<FontAwesomeIcon icon={faFacebookSquare} />
						</a>
					</span>
					<span>
						<a
							rel="noopener noreferrer"
							href="https://www.youtube.com/c/Mototechnika-przemysl"
							target="_blank"
						>
							<FontAwesomeIcon icon={faYoutubeSquare} />
						</a>
					</span>
					<span>
						<a
							rel="noopener noreferrer"
							href="mailto:mototechnika@autonaprawa-przemysl.pl"
							target="_blank"
						>
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					</span>
				</div>
				{/* <div className="contact">
					<Contact />
				</div> */}
				<p>
					Całość prezentowanej strony internetowej stanowi własność Grzegorza
					Góral i jest utworem w rozumieniu ustawy z dnia 4 lutego 1994 r. o
					prawie autorskim i prawach pokrewnych (Dz. U. Nr 90, poz. 631). Żadna
					jej część nie może być rozpowszechniana lub kopiowana w jakikolwiek
					sposób (elektroniczny, mechaniczny lub inny) bez pisemnej zgody
					właściciela
				</p>
				<div>
					<Link to="/blog">
						<img className="footer-logo" src="/img/vstrom.png" alt="logo" />
					</Link>
				</div>
			</footer>
		</>
	);
};

export default Footer;
