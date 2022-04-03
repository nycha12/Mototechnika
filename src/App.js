import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/style.css";
import Autonaprawa from "./layouts/Autonaprawa";
import Blog from "./blog/Blog";

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/*" element={<Autonaprawa />} />
					<Route path="/blog" element={<Blog />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
