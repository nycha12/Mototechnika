import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";
import Pages from "./layouts/Pages";

import Footer from "./layouts/Footer";

import "./css/style.css";

const App = () => {
	return (
		<>
			<Router>
				<Navigation />
				<Header />
				<Pages />
				<Footer />
			</Router>
		</>
	);
};

export default App;
