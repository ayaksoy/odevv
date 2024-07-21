import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Main />
								<Content />
							</>
						}
					/>
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
