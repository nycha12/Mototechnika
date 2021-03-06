import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import News from "../Pages/News";
import Kontakt from "../Pages/Kontakt";
import AboutMe from "../Pages/AboutMe";
import Rejestr from "../Pages/Rejestr";
import Mototechnika from "../Pages/Mototechnika";
import Youtube from "../Pages/Youtube";
import Cookies from "../Components/Coockies";
const Pages = () => {
	const [acceptCookies, setAcceptCookies] = useState(true);
	const handleAcceptCookies = () => {
		setAcceptCookies(false);
	};

	return (
		<>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aktualnosci" element={<News />} />
					<Route path="/kontakt" element={<Kontakt />} />
					<Route path="/omnie" element={<AboutMe />} />
					<Route path="/mototechnika" element={<Mototechnika />} />
					<Route path="/rejestr" element={<Rejestr />} />
					<Route path="/youtube" element={<Youtube />} />
				</Routes>
				{acceptCookies && <Cookies handleAcceptCookies={handleAcceptCookies} />}
			</main>
		</>
	);
};

export default Pages;
