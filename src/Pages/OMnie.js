import about_me from "../data/o_mnie.json";
const Omnie = () => {
	return (
		<>
			{about_me.map((me) => (
				<div key={me.tittle} className="omnie">
					<h1>{me.tittle}</h1>
					<p>{me.description}</p>
				</div>
			))}
		</>
	);
};

export default Omnie;
