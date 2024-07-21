import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
	return (
		<header className="navbar navbar-desctop light hidden-xs hidden-sm">
			<div>
				<Link to="/" className="brand js-target-scroll">
					Selena
				</Link>
				<nav className="nav-desctop">
					<ul className="ahmet">
						<li className="menu-item-has-children">
							<Link to="/contact">Contact</Link>
							<Link to="/">Anasayfa</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
