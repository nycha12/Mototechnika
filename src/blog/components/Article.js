import Articles from "../Articles";

const Article = ({ article }) => {
	return (
		<div className="articles__article">
			<p className="articles__article-date">{article.date}</p>
			<h1 className="articles__article-title">{article.title}</h1>
			<p className="articles__article-description">{article.description}</p>
			<div className="articles__gallery">
				{article.images.map((image, index) => (
					<img
						className="articles__image"
						src={image}
						alt={`zdjęcie${index}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Article;
