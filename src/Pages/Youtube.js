import youtube from "../data/youtube.json";
import ShowMovies from "../Components/ShowMovies";

const Youtube = () => {
	return (
		<>
			{youtube.map((youtube) => (
				<div key={youtube.title} className="youtube">
					<h1>{youtube.title}</h1>
					<p>
						{youtube.description}{" "}
						<a href={youtube.address} target="_blank" rel="noreferrer">
							Mototechnika
						</a>
					</p>
				</div>
			))}
			<ShowMovies />
		</>
	);
};

export default Youtube;
