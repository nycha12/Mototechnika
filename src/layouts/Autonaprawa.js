import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";
import Pages from "./Pages";

import Footer from "./Footer";

import "../css/style.css";

const Autonaprawa = () => {
	return (
		<>
			<Navigation />
			<Header />
			<Pages />
			<Footer />
		</>
	);
};

export default Autonaprawa;
