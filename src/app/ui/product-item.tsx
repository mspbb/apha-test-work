'use client'

import Link from 'next/link';

type fruityvice = {
	'fruit': {
		'name': string;
		'id': number;
		'family': string,
		'order': string,
		'genus': string,
		'nutritions': {
			'calories': number,
			'fat': number,
			'sugar': number,
			'carbohydrates': number,
			'protein': number
		}
	}
};

export default function PorductItem({ fruit }: fruityvice) {
	function hundlerClick(e: any) {
		e.preventDefault();
		console.log('click');
	};

	return (
		<Link
			href={`/products/${fruit.id}/`}
			className='rounded-md border p-2 hover:bg-gray-100'
		>
			{fruit.name}
			<br />
			<button onClick={hundlerClick}>like</button>
			<br />
			<button onClick={hundlerClick}>remove</button>
		</Link>
	)
}