import about_me from "../data/aboutme.json";
const AboutMe = () => {
	return (
		<>
			{about_me.map((me) => (
				<div key={me.tittle} className="photo">
					<h1>{me.tittle}</h1>
					<p>{me.description}</p>
				</div>
			))}
		</>
	);
};

export default AboutMe;
