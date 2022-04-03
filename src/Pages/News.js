import React from "react";

import { useState } from "react";

import ShowMovies from "../Components/ShowMovies";

import news from "../data/news";
const NewArticle = ({ newArticle }) => {
	const [showPicture, setShowPicture] = useState(false);
	const handleShowPicture = (e) => {
		e.target.classList.toggle("article__picture--active-picture");
		setShowPicture((prevstate) => !prevstate);
	};
	return (
		<div className="article">
			<h2 className="article__date">{newArticle.date}</h2>
			<h1 className="article__title">{newArticle.title}</h1>
			<p className="article__description">{newArticle.description}</p>
			<ul className="article__faults-list">
				{newArticle.faults.map((fault, index) => (
					<React.Fragment key={index}>
						<li className="article__fault">{fault}</li>
					</React.Fragment>
				))}
			</ul>
			<p className="article__description">{newArticle.diagnostic}</p>
			<div className="article__pictures">
				{newArticle.pictures.map((picture, index) => (
					<React.Fragment key={index}>
						<img
							onClick={(e) => handleShowPicture(e)}
							src={picture.address}
							alt={picture.name}
							className="article__picture"
						/>
					</React.Fragment>
				))}
			</div>
			<ShowMovies movies={newArticle.movies} />
		</div>
	);
};

const News = () => {
	const article = news.map((newsArticle) => (
		<NewArticle key={newsArticle.date} newArticle={newsArticle} />
	));
	return <div className="news">{article}</div>;
};

export default News;
