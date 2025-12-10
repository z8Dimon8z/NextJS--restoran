import NavLink from "./NavLink";

const Navigation = () => {
	return (
		
			<nav className="header-nav nav">
				<NavLink href="/" className="nav-link">
					Меню
				</NavLink>
				<NavLink href="/about" className="nav-link">
					О ресторане
				</NavLink>
				<NavLink href="/portfolio" className="nav-link">
					Блог
				</NavLink>
				<NavLink href="/contacts" className="nav-link">
					Забронировать стол
				</NavLink>
			</nav>
	);
};

export default Navigation;
