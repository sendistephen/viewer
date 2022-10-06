import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { home } from "./assets";
import { Navbar, SidebarLg, Trending } from "./components";
import Home from "./components/Home";

function App() {
	return (
		<BrowserRouter>
			<div className="flex h-screen overflow-hidden">
				<SidebarLg />
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
