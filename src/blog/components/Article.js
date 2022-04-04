import { Fragment } from "react";
import { useEffect, useState } from "react";
import React from "react";

import Articles from "../Articles";

const Article = (props) => {
	const { index, article } = props;
	const [articlesDiv, setArticlesDiv] = useState([]);
	const [hideArticle, setHideArticle] = useState(true);
	const [moviesList, setMoviesList] = useState([]);

	useEffect(() => {
		setArticlesDiv([...document.querySelectorAll(".articles__article")]);
		setMoviesList(article.movies);
	}, []);

	// const articlesReduce = () => {
	// 	const articlesDiv = [...document.querySelectorAll(".articles__article")];
	// 	console.log(articlesDiv);
	// 	articlesDiv.forEach((articleDiv, index) => {
	// 		if (articleDiv.offsetHeight > 600) {
	// 			articleDiv.style.height = "400px";
	// 			articleDiv.style.overflow = "hidden";
	// 		}
	// 	});
	// };
	const handleShowMore = (index) => {
		const article = articlesDiv[index];
		console.log(article, index, articlesDiv);
		article.classList.toggle("articles__article--hide");
		setHideArticle((prevState) => !prevState);
	};

	console.log(moviesList);
	const movies = moviesList.map((movie, index) => (
		<React.Fragment key={index}>
			<iframe
				src={movie}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</React.Fragment>
	));

	return (
		<>
			<div
				className="articles__article articles__article--hide"
				id={`articles__article${index}`}
			>
				<p className="articles__article-date">{article.date}</p>
				<h1 className="articles__article-title">{article.title}</h1>
				<p className="articles__article-description">{article.description}</p>

				<div className="articles__gallery">
					{article.images.map((image, index) => (
						<Fragment key={index}>
							<img
								className="articles__image"
								src={image}
								alt={`zdjęcie${index}`}
							/>
						</Fragment>
					))}
				</div>
				{moviesList.length > 0 ? (
					<div className="articles__movies">{movies}</div>
				) : (
					""
				)}
			</div>
			{hideArticle ? (
				<p
					className="articles__read-more"
					onClick={() => handleShowMore(index)}
				>
					Czytaj dalej...
				</p>
			) : (
				<p
					className="articles__read-more"
					onClick={() => handleShowMore(index)}
				>
					Ukryj
				</p>
			)}
			<hr />
		</>
	);
};

export default Article;
