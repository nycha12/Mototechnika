// import Form from "../Components/Form";
import Contact from "../Components/Contact";

const Kontakt = () => {
	return (
		<div className="kontakt">
			<h1>kontakt</h1>
			<section>
				<iframe
					title="mapa"
					samesite="lax"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.871284214378!2d22.75764895155186!3d49.769678143961066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b7f40b5c78f3f%3A0x7ba2d84adb0a6695!2sMechanik%20Grzegorz%20G%C3%B3ral!5e0!3m2!1spl!2spl!4v1643798132272!5m2!1spl!2spl"
					allowFullScreen=""
					loading="lazy"
				></iframe>

				<div>
					<Contact />
					{/* <Form /> */}
				</div>
			</section>
		</div>
	);
};

export default Kontakt;
