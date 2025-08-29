import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import React from 'react';

import axios from 'axios';

// import pizzas from './assets/pizaa.json';

function App() {
	const [pizzas, setPizzas] = React.useState([]);

	React.useState(() => {
		try {
			(async () => {
				const { data } = await axios.get('https://68aab907909a5835049cd78c.mockapi.io/pizzas');
				setPizzas(data);
			})();
		} catch (error) {
			alert('Виникла помилка під час завантаження данних!');
			console.error(error);
		}
	}, []);

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Все пиццы</h2>
					<div className='content__items'>
						{pizzas.map(pizza => (
							<PizzaBlock key={pizza.id} {...pizza} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
