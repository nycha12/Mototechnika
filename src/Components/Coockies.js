const Cookies = ({ handleAcceptCookies }) => {
	return (
		<div className="cookies">
			<p>
				{`Na mojej stronie wykorzystywane są pliki cookie.
                Przeglądając zawartość zgadzasz się na ich używanie.`}
			</p>
			<button onClick={handleAcceptCookies}>Rozumiem</button>
		</div>
	);
};

export default Cookies;
