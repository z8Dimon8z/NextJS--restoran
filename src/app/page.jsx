
import { BreakFast } from "@/data/MenuData";
import { MenuStarters } from "@/data/MenuData";
import { Dinner } from "@/data/MenuData";
import { Drinks } from "@/data/MenuData";
import MenuCard from '../components/MenuCard/MenuCard';



export const metadata = {
	title: 'Next JS tutorial',
	description: 'Learning Next JS',
	keywords: 'business, next js, react',
};

export default function Home() {
	return (
		<div className="container">
			<nav className="main-nav">
				<a className="main-nav-link" href="#starters">Стартеры</a>
				<a className="main-nav-link" href="#breakfast">Завтраки</a>
				<a className="main-nav-link" href="#dinner">Основные блюда</a>
				<a className="main-nav-link" href="#drinks">Напитки</a>
			</nav>

			<div className="sections-wrapper">


				<section className="section" id="starters">
					<h2 className="section-title">Стартеры</h2>
					<ul className="section-list">

						{MenuStarters.map((item) => (
							<MenuCard key={item.id} {...item} />
						))}

					</ul>
				</section>



				<section className="section" id="breakfast">
					<h2 className="section-title">Завтраки</h2>
					<ul className="section-list">


						{BreakFast.map((item) => (
							<MenuCard key={item.id} {...item} />
						))}
					</ul>
				</section>



				<section className="section" id="dinner">
					<h2 className="section-title">Основные блюда</h2>
					<ul className="section-list">

						{Dinner.map((item) => (
							<MenuCard key={item.id} {...item} />
						))}
					</ul>
				</section>



				<section className="section" id="drinks">
					<h2 className="section-title">Напитки</h2>
					<ul className="section-list">

						{Drinks.map((item) => (
							<MenuCard key={item.id} {...item} />
						))}
					</ul>
				</section>


			</div>
		</div>
	);
}
