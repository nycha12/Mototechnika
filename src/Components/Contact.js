import contacts from "../data/contacts.json";

const Contact = () => {
	return contacts.map((contact) => (
		<div key={contact.name}>
			<p>{contact.name} </p>
			<p>{contact.adress.street}</p>
			<p>
				{contact.adress.postCode}
				{contact.adress.city}
			</p>
			<p>
				nr tel.<a href={`tel:${contact.phone}`}>{contact.phone}</a>
			</p>
		</div>
	));
};

export default Contact;
