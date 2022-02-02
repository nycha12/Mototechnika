import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Kontakt from "../Pages/Kontakt";
import Omnie from "../Pages/OMnie";
import Rejestr from "../Pages/Rejestr";
import Mototechnika from "../Pages/Mototechnika";
const Pages = () => {
	return (
		<>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/kontakt" element={<Kontakt />} />
					<Route path="/omnie" element={<Omnie />} />
					<Route path="/mototechnika" element={<Mototechnika />} />
					<Route path="/rejestr" element={<Rejestr />} />
				</Routes>
			</main>
		</>
	);
};

export default Pages;
