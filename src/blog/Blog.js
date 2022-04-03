import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Articles from "./Articles";
const Blog = () => {
	document.querySelector("html").style.backgroundImage = "none";
	document.body.style.backgroundColor = "#292929";

	return (
		<div className="blog">
			<Header />
			<div className="blog__wrap">
				<Menu />
				<Articles />
			</div>
			<Footer />
		</div>
	);
};

export default Blog;
