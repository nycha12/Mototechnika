import React, { useState } from "react";
const Form = () => {
	const [send, setSend] = React.useState(false);
	const [tittle, setTittle] = React.useState("");
	const [text, setText] = React.useState("");
	const [email, setEmail] = React.useState("");
	const handleChange = (e) => {
		if (e.target.name === "tittle") {
			setTittle(e.target.value);
		} else if (e.target.name === "textarea") {
			setText(e.target.value);
		} else if (e.target.id === "mail") {
			setEmail(e.target.value);
		}
	};
	const handleConfirm = (e) => {
		e.preventDefault();

		console.log(`po kliknieciu ${send}`);
		if (tittle.length > 4 && text.length > 10 && email.indexOf("@") !== -1) {
			console.log(` w warunku ${send}`);

			setTittle("");
			setText("");
			setEmail("");
			setSend(false);
		} else {
			setSend(true);
		}
	};
	return (
		<form noValidate onSubmit={handleConfirm}>
			<label>
				<input
					value={tittle}
					onChange={handleChange}
					type="text"
					name="tittle"
					placeholder="Temat"
				></input>
			</label>

			<label>
				<textarea
					value={text}
					onChange={handleChange}
					name="textarea"
					placeholder="Treść wiadomości"
				></textarea>
			</label>
			<label>
				<input
					onChange={handleChange}
					value={email}
					id="mail"
					type="text"
					placeholder="Twój e-mail"
				></input>
				<button>Wyślij</button>
				{send && <p>Wypełnij poprawnie wszystkie pola</p>}
			</label>
		</form>
	);
};

export default Form;
