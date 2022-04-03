import dataArticles from "./data/articles.json";
import Article from "./components/Article";
const Articles = () => {
	const articles = dataArticles.map((article, index) => (
		<Article key={index} article={article} />
	));

	return <div className="articles">{articles}</div>;
};

export default Articles;
