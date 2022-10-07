import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar, SidebarSm, Trending } from "./components";
import Home from "./components/Home";

function App() {
	return (
		<BrowserRouter>
			<div className="flex h-screen overflow-hidden">
				<div>
					<Sidebar />
					<SidebarSm />
				</div>
				<div className="flex-1 flex-col w-full max-w-[1340px] mx-auto sm:px-16 px-6 overflow-y-scroll">
					<Navbar />
					<div>
						<Routes>
							{/*------ Content Area ------*/}
							<Route path="/" element={<Home />} />
							<Route path="/trending" element={<Trending />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
