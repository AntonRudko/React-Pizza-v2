import React from 'react';

function Categories() {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	const onCLickCatrgory = num => {
		setActiveIndex(num);
	};

	return (
		<div className='categories'>
			<ul>
				{categories.map((val, index) => (
					<li
						onClick={() => {
							onCLickCatrgory(index);
						}}
						key={index}
						className={activeIndex === index ? ' active' : ''}>
						{val}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
