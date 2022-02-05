import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Kontakt from "../Pages/Kontakt";
import AboutMe from "../Pages/AboutMe";
import Rejestr from "../Pages/Rejestr";
import Mototechnika from "../Pages/Mototechnika";
import Youtube from "../Pages/Youtube";
const Pages = () => {
	return (
		<>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/kontakt" element={<Kontakt />} />
					<Route path="/omnie" element={<AboutMe />} />
					<Route path="/mototechnika" element={<Mototechnika />} />
					<Route path="/rejestr" element={<Rejestr />} />
					<Route path="/youtube" element={<Youtube />} />
				</Routes>
			</main>
		</>
	);
};

export default Pages;
