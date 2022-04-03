import React, { useState } from "react";

import movies from "../data/movies.json";
import youtube from "../data/youtube.json";
import ShowMovies from "../Components/ShowMovies";
import { useEffect } from "react";

const Youtube = () => {
	const [active, setActive] = useState(" ");
	const updateScroll = () => {
		const scrollPosition = window.scrollY;
		if (scrollPosition > 250 && active !== "active") {
			setActive("active");
			document.querySelector(".movie:nth-child(2)").classList.add("active");
			document.querySelector(".movie").classList.add("active");
		} else if (scrollPosition <= 250 && active === "active") {
			document.querySelector(".movie:nth-child(2)").classList.remove("active");
			document.querySelector(".movie").classList.remove("active");
			setActive(" ");
		}
		if (scrollPosition > 550) {
			document.querySelector(".movie:nth-child(3)").classList.add("active");
			document.querySelector(".movie:nth-child(4)").classList.add("active");
		} else if (scrollPosition <= 550 && active === "active") {
			document.querySelector(".movie:nth-child(3)").classList.remove("active");
			document.querySelector(".movie:nth-child(4)").classList.remove("active");
		}
		if (scrollPosition > 950) {
			document.querySelector(".movie:nth-child(5)").classList.add("active");
		} else if (scrollPosition <= 950 && active === "active") {
			document.querySelector(".movie:nth-child(5)").classList.remove("active");
		}
	};
	useEffect(() => {
		document.addEventListener("scroll", updateScroll);
		return () => document.removeEventListener("scroll", updateScroll);
	});

	return (
		<>
			{youtube.map((youtube) => (
				<div key={youtube.title} className="youtube ">
					<h1>{youtube.title}</h1>
					<p>
						{youtube.description}{" "}
						<a href={youtube.address} target="_blank" rel="noreferrer">
							Mototechnika
						</a>
					</p>
				</div>
			))}
			<ShowMovies movies={movies} />
		</>
	);
};

export default Youtube;
