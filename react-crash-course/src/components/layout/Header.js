import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div>
			<header className="header-style">
				<h1>ToDo List</h1>
				<Link to="/">Home</Link> | <Link to="/about">About</Link>
			</header>
		</div>
	);
}
