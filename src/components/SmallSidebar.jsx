import React from "react";
import { Link } from "react-router-dom";

const SmallSidebar = () => {
	return (
		<div>
			<div className="sm:hidden h-screen w-[72px] bg-white border-r-2 border-gray-100 box-shadow overflow-y-scroll scrollbar-hide">
				<nav className="my-16">
					<div>
						<Link
							to="/"
							className="px-6 py-4 flex space-x-8 bg-purple-100 cursor-pointer hover:bg-zinc-100">
							<span>
								<svg
									className="text-purple-700 h-6 w-6"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="m20.04 6.82-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13L3.78 6.83c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62V10.6c0-1.35-.87-3.01-1.97-3.78ZM12.75 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3Z"
										fill="currentColor"
									/>
								</svg>
							</span>
							<span className="text-purple-700 font-bold">Home</span>
						</Link>
						<Link
							to="/browse"
							className="px-6 py-4 flex space-x-8 cursor-pointer hover:bg-zinc-100 ">
							<span>
								<svg
									className="text-zinc-700 h-6 w-6"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M20.98 3.02a3.43 3.43 0 0 0-3.29-.91l-9.8 2.45a4.56 4.56 0 0 0-3.33 3.33L2.11 17.7c-.3 1.19.04 2.42.91 3.29.66.65 1.53 1.01 2.43 1.01.28 0 .57-.03.85-.11l9.81-2.45a4.56 4.56 0 0 0 3.33-3.33l2.45-9.81c.3-1.19-.04-2.42-.91-3.28ZM12 15.88c-2.14 0-3.88-1.74-3.88-3.88 0-2.14 1.74-3.88 3.88-3.88 2.14 0 3.88 1.74 3.88 3.88 0 2.14-1.74 3.88-3.88 3.88Z"
										fill="currentColor"
									/>
								</svg>
							</span>
							<span className="text-zinc-700 text-sm tracking-wide font-normal">
								Browse
							</span>
						</Link>
						<Link
							to="/trending"
							className="px-6 py-4 flex space-x-8 cursor-pointer hover:bg-zinc-100 ">
							<span>
								<svg
									className="h-6 w-6 text-zinc-700"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm.69 9.53c0 .39-.31.7-.7.7-.39 0-.7-.31-.7-.7v-.18l-2.72 2.72c-.15.15-.35.22-.56.2a.665.665 0 0 1-.51-.31l-1.02-1.52-2.38 2.38c-.14.14-.31.2-.49.2s-.36-.07-.49-.2a.706.706 0 0 1 0-.99l2.98-2.98c.15-.15.35-.22.56-.2.21.02.4.13.51.31l1.02 1.52 2.11-2.11h-.18c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h1.86c.09 0 .18.02.27.05.17.07.31.21.38.38.04.09.05.18.05.27v1.86h.01Z"
										fill="currentColor"
									/>
								</svg>
							</span>
							<span className="text-zinc-700 text-sm tracking-wide font-normal">
								Trending
							</span>
						</Link>
						<a
							href="!#"
							className="px-6 py-4 flex space-x-8 cursor-pointer hover:bg-zinc-100">
							<span>
								<svg
									className="h-6 w-6 text-zinc-700"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M21.98 15.65A4.46 4.46 0 0 0 18.5 14c-1.06 0-2.04.37-2.81.99A4.448 4.448 0 0 0 14 18.5a4.5 4.5 0 0 0 1.66 3.48h.01c.77.64 1.76 1.02 2.83 1.02 1.14 0 2.17-.42 2.96-1.12A4.5 4.5 0 0 0 23 18.5c0-1.08-.38-2.08-1.02-2.85Zm-1.22 2.29-2.4 2.22c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-1.11-1.11a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.6.6 1.87-1.73c.3-.28.78-.26 1.06.04.29.31.27.78-.04 1.06ZM14.73 5.86V2.5c0-.28-.22-.5-.5-.5H9.77c-.28 0-.5.22-.5.5v3.36c0 .28.22.5.5.5h4.46c.28 0 .5-.22.5-.5ZM7.25 2.02C4.69 2.18 2.94 3.5 2.29 5.7c-.1.33.14.66.48.66h4.5c.28 0 .5-.22.5-.5V2.52a.5.5 0 0 0-.52-.5ZM16.75 2.01c2.56.16 4.31 1.48 4.96 3.68.1.33-.14.66-.48.66h-4.5c-.28 0-.5-.22-.5-.5V2.51a.5.5 0 0 1 .52-.5Z"
										fill="currentColor"
									/>
									<path
										d="M22 8.36v4.38c0 .37-.39.61-.72.44a6.013 6.013 0 0 0-7.08 1.13 5.94 5.94 0 0 0-1.7 4.19c0 .81.32 1.85.72 2.72.16.35-.08.78-.47.78H7.81C4.6 22 2 19.4 2 16.19V8.36c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5Z"
										fill="currentColor"
									/>
								</svg>
							</span>
							<span className="text-zinc-700 text-sm tracking-wide font-normal">
								Following
							</span>
						</a>
					</div>
					<div className="mt-8">
						<Link
							to="/"
							className="px-6 py-4 flex space-x-8 cursor-pointer hover:bg-zinc-100">
							<span>
								<svg
									className="h-6 w-6 text-zinc-700"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M21.98 15.65A4.46 4.46 0 0 0 18.5 14c-1.06 0-2.04.37-2.81.99A4.448 4.448 0 0 0 14 18.5c0 1.41.64 2.66 1.65 3.48.77.64 1.77 1.02 2.85 1.02 1.14 0 2.17-.43 2.97-1.12A4.52 4.52 0 0 0 23 18.5c0-1.08-.38-2.08-1.02-2.85Zm-2.45 3.13c0 .26-.14.51-.36.64l-1.41.84c-.12.07-.25.11-.39.11-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l1.04-.62V17.1c0-.41.34-.75.75-.75s.75.34.75.75v1.68ZM14.73 5.86V2.5c0-.28-.22-.5-.5-.5H9.77c-.28 0-.5.22-.5.5v3.36c0 .28.22.5.5.5h4.46c.28 0 .5-.22.5-.5ZM7.25 2.02C4.69 2.18 2.94 3.5 2.29 5.7c-.1.33.14.66.48.66h4.5c.28 0 .5-.22.5-.5V2.52a.5.5 0 0 0-.52-.5ZM16.75 2.01c2.56.16 4.31 1.48 4.96 3.68.1.33-.14.66-.48.66h-4.5c-.28 0-.5-.22-.5-.5V2.51a.5.5 0 0 1 .52-.5Z"
										fill="currentColor"
									/>
									<path
										d="M22 8.36v4.38c0 .37-.39.61-.72.44a6.013 6.013 0 0 0-7.08 1.13 5.94 5.94 0 0 0-1.7 4.19c0 .81.32 1.85.72 2.72.16.35-.08.78-.47.78H7.81C4.6 22 2 19.4 2 16.19V8.36c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5Z"
										fill="currentColor"
									/>
								</svg>
							</span>
							<span className="text-zinc-700">Recent</span>
						</Link>
						<Link
							to="/browse"
							className="px-6 py-4 flex space-x-8 cursor-pointer hover:bg-zinc-100 ">
							<span>
								<svg
									className="h-6 w-6 text-zinc-700"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M20.68 13.91v-.01c-.88-.93-2.11-1.5-3.48-1.5-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2.88.98 2.15 1.6 3.57 1.6 2.65 0 4.8-2.15 4.8-4.8 0-1.27-.5-2.43-1.32-3.29Zm-1.69 4.1h-1.04v1.09c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.09h-1.04c-.42 0-.75-.33-.75-.75 0-.41.32-.74.74-.75h1.05v-1c0-.02 0-.04.01-.06.02-.38.35-.69.74-.69.4 0 .73.32.75.72v1.03h1.04c.42 0 .75.34.75.75 0 .42-.33.75-.75.75Z"
										fill="#292D32"
									/>
									<path
										d="M22 8.73c0 1.19-.19 2.29-.52 3.31-.06.21-.31.27-.49.14a6.346 6.346 0 0 0-3.79-1.24c-3.47 0-6.3 2.83-6.3 6.3 0 1.08.28 2.14.81 3.08.16.28-.03.64-.33.53-2.41-.82-7.28-3.81-8.86-8.81C2.19 11.02 2 9.92 2 8.73c0-3.09 2.49-5.59 5.56-5.59 1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59Z"
										fill="#292D32"
									/>
								</svg>
							</span>
							<span className="text-zinc-700 text-sm tracking-wide font-normal">
								Favourites
							</span>
						</Link>
						<Link
							to="/saved"
							className="px-6 py-4 flex space-x-8 cursor-pointer hover:bg-zinc-100 ">
							<span>
								<svg
									className="h-6 w-6 text-zinc-700"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M14.73 5.86V2.5c0-.28-.22-.5-.5-.5H9.77c-.28 0-.5.22-.5.5v3.36c0 .28.22.5.5.5h4.46c.28 0 .5-.22.5-.5ZM7.25 2.02C4.69 2.18 2.94 3.5 2.29 5.7c-.1.33.14.66.48.66h4.5c.28 0 .5-.22.5-.5V2.52a.5.5 0 0 0-.52-.5ZM16.75 2.01c2.56.16 4.31 1.48 4.96 3.68.1.33-.14.66-.48.66h-4.5c-.28 0-.5-.22-.5-.5V2.51a.5.5 0 0 1 .52-.5ZM22 15.7c0-.01-.01-.02-.02-.03-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.22.37.5.71.82.99.02.01.03.02.04.03.05.05.1.09.16.14h.01c.01.01.02.02.03.02.75.63 1.72 1 2.79 1 1.64 0 3.07-.88 3.85-2.18.23-.39.41-.82.52-1.27.09-.34.13-.69.13-1.05 0-1.06-.37-2.04-1-2.8Zm-1.82 3.53h-.93v.97c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.97h-.93c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.93v-.89c0-.41.34-.75.75-.75s.75.34.75.75v.89h.93a.749.749 0 1 1 0 1.5Z"
										fill="#292D32"
									/>
									<path
										d="M22 8.36v4.38c0 .37-.39.61-.72.44a6.013 6.013 0 0 0-7.08 1.13 5.94 5.94 0 0 0-1.7 4.19c0 .81.32 1.85.72 2.72.16.35-.08.78-.47.78H7.81C4.6 22 2 19.4 2 16.19V8.36c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5Z"
										fill="#292D32"
									/>
								</svg>
							</span>
							<span className="text-zinc-700 text-sm tracking-wide font-normal">
								Saved
							</span>
						</Link>
						<Link
							to="/my-videos"
							className="px-6 py-4 flex space-x-8 cursor-pointer hover:bg-zinc-100">
							<span>
								<svg
									className="h-6 w-6 text-zinc-700"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M21.15 6.17c-.41-.22-1.27-.45-2.44.37l-1.47 1.04c-.11-3.11-1.46-4.33-4.74-4.33h-6C3.08 3.25 1.75 4.58 1.75 8v8c0 2.3 1.25 4.75 4.75 4.75h6c3.28 0 4.63-1.22 4.74-4.33l1.47 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.11.85-.21.41-.21 1.1-.78 1.1-2.21V8.38c0-1.43-.69-2-1.1-2.21ZM11 11.38c-1.03 0-1.88-.84-1.88-1.88S9.97 7.62 11 7.62c1.03 0 1.88.84 1.88 1.88s-.85 1.88-1.88 1.88Z"
										fill="currentColor"
									/>
								</svg>
							</span>
							<span className="text-zinc-700 text-sm tracking-wide font-normal">
								Your videos
							</span>
						</Link>
					</div>
					<div className="mt-8">
						<Link
							to="/"
							className="px-6 py-4 flex space-x-8 cursor-pointer hover:bg-zinc-100">
							<img
								className="h-6 w-6 rounded-full object-cover"
								src="https://images.unsplash.com/photo-1630208232589-e42b29428b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
								alt="user1"
							/>
						</Link>
						<Link
							to="/browse"
							className="px-6 py-4 flex space-x-8 cursor-pointer hover:bg-zinc-100 ">
							<img
								className="h-6 w-6 rounded-full object-cover"
								src="https://images.unsplash.com/photo-1633068587634-4280dabf12ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
								alt=""
							/>
						</Link>
						<Link
							to="/saved"
							className="px-6 py-4 flex space-x-8 cursor-pointer hover:bg-zinc-100 ">
							<img
								className="h-6 w-6 rounded-full object-cover"
								src="https://images.unsplash.com/photo-1640590648703-71be813c879d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
								alt=""
							/>
						</Link>
						<Link
							to="/my-videos"
							className="px-6 py-4 flex space-x-8 cursor-pointer hover:bg-zinc-100 ">
							<span>
								<img
									className="h-6 w-6 rounded-full object-cover"
									src="https://images.unsplash.com/photo-1630631729332-d564de91400f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
									alt="user1"
								/>
							</span>
						</Link>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default SmallSidebar;
