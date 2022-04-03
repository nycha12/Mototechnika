const ShowMovies = ({ movies }) => {
	return (
		<div className="movies">
			{movies.map((movie) => (
				<div key={movie.id} className="movie">
					<iframe
						src={movie.address}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			))}
		</div>
	);
};

export default ShowMovies;
