import homedata from "../data/home.json";

const Article = (props) => {
	return (
		<>
			<section className="art">
				<div className="foto"> zdjecie</div>
				<div className="art">
					<h2>{props.data.tittle}</h2>
					<p>{props.data.description}</p>
				</div>
			</section>
		</>
	);
};

const Home = () => {
	const data = homedata.map((art) => <Article key={art.id} data={art} />);

	return (
		<div id="home">
			<h1>Usługi</h1>
			{data}
		</div>
	);
};

export default Home;
