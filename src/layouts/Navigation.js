import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navigation = () => {
	const [showNav, setShowNav] = useState(" ");

	const navData = [
		{
			home: "/",
			name: "Strona główna",
		},
		{
			home: "omnie",
			name: "O mnie",
		},
		{
			home: "rejestr",
			name: "Rejestr zaświadczeń",
		},
		{
			home: "youtube",
			name: "YouTube",
		},
		{
			home: "kontakt",
			name: "Kontakt",
		},
	];

	const Link = (props) => {
		return (
			<li>
				<NavLink to={props.home}>{props.name}</NavLink>
			</li>
		);
	};
	const navs = navData.map((nav) => (
		<Link key={nav.home} home={nav.home} name={nav.name} />
	));

	const handleShowNav = () => {
		if (showNav === "active") setShowNav(" ");
		else setShowNav("active");
	};

	return (
		<>
			<div className="navigation">
				<nav className="mainNav">
					<img src={logo} alt="Logo" />
					<span className="burgerActive" onClick={handleShowNav}>
						<FontAwesomeIcon icon={faBars} />
					</span>
					<ul className={showNav} onClick={handleShowNav}>
						{navs}
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Navigation;
