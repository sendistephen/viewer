import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, SidebarLg, SmallSidebar, Trending } from "./components";
import Home from "./components/Home";

function App() {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<BrowserRouter>
			<div className="flex h-screen overflow-hidden">
				<SidebarLg />
				<SmallSidebar />
				<Navbar />
				<Routes>
					{/*------ Content Area ------*/}

					<Route path="/" element={<Home />} />
					<Route path="/trending" element={<Trending />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
