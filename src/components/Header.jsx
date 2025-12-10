import Navigation from '@components/Navigation';
const Header = () => {
	return (
	<header className="header">
		<a href="#" className="header-logo">
			nique.
		</a>

		<div className="header-content">
			<h1 className="header-title">
				The pure taste of
				<span>Thailand</span>
			</h1>
			<p>
				Изысканные блюда, приготовленные по традиционным рецептам в лучших кулинарных традициях Азии
			</p>
		</div>
        <Navigation />
	</header>
	);
}

export default Header;
