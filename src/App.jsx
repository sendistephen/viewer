import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar, SidebarSm, Trending } from "./components";
import Home from "./components/Home";

function App() {
	return (
		<BrowserRouter>
			<div className="flex h-screen overflow-hidden">
				<Sidebar />
				<SidebarSm />
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
