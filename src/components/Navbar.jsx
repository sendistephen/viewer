import React from "react";

function Navbar() {
	return (
		<nav>
			<div className="hidden sm:flex sm:justify-between py-6 w-full">
				<div>
					<div className="pt-2 relative w-full">
						<label htmlFor="search" className="sr-only">
							Search
						</label>
						<input
							id="search"
							className="border text-sm pl-4 pr-8 py-2 rounded text-gray-400  w-[448px] placeholder:text-gray-300 outline-none bg-gray-50 focus:bg-transparent"
							type="text"
							placeholder="Search"
						/>
						<div className="flex absolute inset-y-5 right-0 px-3 pointer-events-none">
							<svg
								className="h-6 w-6"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg">
								<path
									className="text-gray-400"
									d="M7.667 13.667C3.9 13.667.833 10.6.833 6.833.833 3.067 3.9 0 7.667 0 11.433 0 14.5 3.067 14.5 6.833c0 3.767-3.067 6.834-6.833 6.834ZM7.667 1a5.84 5.84 0 0 0-5.834 5.833 5.84 5.84 0 0 0 5.834 5.834A5.84 5.84 0 0 0 13.5 6.833 5.84 5.84 0 0 0 7.667 1ZM14.667 14.333a.494.494 0 0 1-.354-.146l-1.333-1.334a.503.503 0 0 1 0-.706.503.503 0 0 1 .707 0l1.333 1.333a.503.503 0 0 1 0 .707c-.1.1-.227.146-.353.146Z"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className="flex items-center space-x-8">
					<button className="px-4 py-2 bg-purple-700 rounded-lg">
						<span></span>
						<span className="uppercase text-white font-bold">Add video</span>
					</button>
					<div className="p-2 bg-purple-50 rounded-lg cursor-pointer relative">
						<span className="absolute bg-orange-500 text-xs px-2 py-1  font-light rounded-full text-white -top-3 -right-3">
							5
						</span>
						<svg
							className="w-6 h-6"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="m20.19 14.06-1.13-1.88c-.25-.41-.47-1.2-.47-1.68V8.63c0-3.63-2.95-6.58-6.57-6.58C8.39 2.06 5.44 5 5.44 8.63v1.86c0 .48-.22 1.27-.46 1.68l-1.13 1.88c-.43.73-.53 1.56-.26 2.28.27.73.88 1.31 1.68 1.57 1.08.36 2.17.62 3.28.81.11.02.22.03.33.05l.44.06c.26.04.52.07.79.09a20.187 20.187 0 0 0 3.79 0c.23-.02.46-.04.68-.07.18-.02.36-.04.54-.07.11-.01.22-.03.33-.05 1.12-.18 2.23-.46 3.31-.82a2.65 2.65 0 0 0 1.64-1.58c.28-.75.2-1.57-.21-2.26ZM12.75 10a.76.76 0 1 1-1.52 0V6.9a.76.76 0 1 1 1.52 0V10Z"
								fill="currentColor"
							/>
							<path
								d="M14.83 20.01A3.014 3.014 0 0 1 12 22c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06l.49-.06Z"
								fill="#292D32"
							/>
						</svg>
					</div>
					<div className="flex items-center gap-2 cursor-pointer">
						<div>
							<img
								className="h-8 w-8 rounded-full object-cover"
								src="https://images.unsplash.com/photo-1630631729332-d564de91400f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
								alt="user1"
							/>
						</div>
						<span className="text-gray-500 text-sm">Jane Summer</span>
						<span>
							<svg
								className="w-[9px] h-[6px]"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M.747 0c.19 0 .38.07.53.22l3 3 3-3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.53 3.53c-.29.29-.77.29-1.06 0L.217 1.28a.755.755 0 0 1 0-1.06C.367.07.557 0 .747 0Z"
									fill="#2A0E42"
								/>
							</svg>
						</span>
					</div>
				</div>
			</div>
			{/* mobile screen */}
			<div className="sm:hidden py-6 flex justify-end items-center gap-4">
				<div>
					<svg
						className="h-6 w-6"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg">
						<path
							className="text-gray-400"
							d="M7.667 13.667C3.9 13.667.833 10.6.833 6.833.833 3.067 3.9 0 7.667 0 11.433 0 14.5 3.067 14.5 6.833c0 3.767-3.067 6.834-6.833 6.834ZM7.667 1a5.84 5.84 0 0 0-5.834 5.833 5.84 5.84 0 0 0 5.834 5.834A5.84 5.84 0 0 0 13.5 6.833 5.84 5.84 0 0 0 7.667 1ZM14.667 14.333a.494.494 0 0 1-.354-.146l-1.333-1.334a.503.503 0 0 1 0-.706.503.503 0 0 1 .707 0l1.333 1.333a.503.503 0 0 1 0 .707c-.1.1-.227.146-.353.146Z"
						/>
					</svg>
				</div>
				<div className="p-2 inline-block bg-purple-50 rounded-lg cursor-pointer relative">
					<span className="absolute bg-orange-500 text-xs px-2 py-1  font-light rounded-full text-white -top-3 -right-3">
						5
					</span>
					<svg
						className="w-6 h-6"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="m20.19 14.06-1.13-1.88c-.25-.41-.47-1.2-.47-1.68V8.63c0-3.63-2.95-6.58-6.57-6.58C8.39 2.06 5.44 5 5.44 8.63v1.86c0 .48-.22 1.27-.46 1.68l-1.13 1.88c-.43.73-.53 1.56-.26 2.28.27.73.88 1.31 1.68 1.57 1.08.36 2.17.62 3.28.81.11.02.22.03.33.05l.44.06c.26.04.52.07.79.09a20.187 20.187 0 0 0 3.79 0c.23-.02.46-.04.68-.07.18-.02.36-.04.54-.07.11-.01.22-.03.33-.05 1.12-.18 2.23-.46 3.31-.82a2.65 2.65 0 0 0 1.64-1.58c.28-.75.2-1.57-.21-2.26ZM12.75 10a.76.76 0 1 1-1.52 0V6.9a.76.76 0 1 1 1.52 0V10Z"
							fill="currentColor"
						/>
						<path
							d="M14.83 20.01A3.014 3.014 0 0 1 12 22c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06l.49-.06Z"
							fill="#292D32"
						/>
					</svg>
				</div>
				<div>
					<img
						className="h-8 w-8 rounded-full object-cover"
						src="https://images.unsplash.com/photo-1630631729332-d564de91400f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
						alt="user1"
					/>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
