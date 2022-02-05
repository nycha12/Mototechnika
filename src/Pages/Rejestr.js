import rejData from "../data/rejestr.json";

const Rejestr = () => {
	// const datastSort = rejData.sort((a, b) => {
	// 	let c = a.date;
	// 	let d = b.date;

	// 	c = c.split("").reverse().join("");
	// 	d = d.split("").reverse().join("");
	// 	console.log(c);
	// 	// c = c.replace("/", "").replace("/", "");
	// 	// d = d.replace("/", "").replace("/", "");

	// 	// console.log(c);
	// 	const tmpA = c.toLowerCase();
	// 	const tmpB = d.toLowerCase();

	// 	if (tmpA > tmpB) {
	// 		return 1;
	// 	} else if (tmpA < tmpB) {
	// 		return -1;
	// 	} else {
	// 		return 0;
	// 	}
	// });
	const datas = rejData.map((data) => (
		<tr key={data.name}>
			<td>{data.date}</td>
			<td>{data.name}</td>
			<td>{data.number}</td>
		</tr>
	));

	return (
		<section className="rejestr">
			<h1>Rejestr Zaświadczeń o odbytym szkoleniu</h1>
			<p>
				Rejestr wydanych zaświadczeń o odbytym szkoleniu w zakresie odzysku
				substancji kontrolowanych lub fluorowanych gazów cieplarnianych z
				systemów klimatyzacji w niektórych pojazdach silnikowych wg. ustawy z
				dn. 15.05.2015 r. o substancjach zubożających warstwę ozonową oraz o
				niektórych fluorowanych gazach cieplarnianych ( Dz. U. 2015, poz. 881),
				rozporządzenie (WE) nr 307/2008.
			</p>
			<table>
				<thead>
					<tr>
						<th>Data szkolenia</th>
						<th>Imię i nazwisko</th>
						<th>Numer zaświadczenia</th>
					</tr>
				</thead>
				<tbody>{datas}</tbody>
			</table>
		</section>
	);
};

export default Rejestr;
