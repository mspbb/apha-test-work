'use client'

import PorductItem from '@/app/ui/product-item';
import { useAppSelector } from '@/app/store/hooks';
import { useState } from 'react';

export type Tfruits = {
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
}[]

export default function ProductList({ fruits }: { fruits: Tfruits }) {
	const likesArray = useAppSelector((state) => state.likes.items);
	const removedArray = useAppSelector((state) => state.removed.items);
	const [showLikedFruits, setShowLikedFruits] = useState(false);
	const filtredFruits = fruits.filter(item => {
		if (!removedArray.includes(item.id)) {
			return item;
		}
	});

	return (
		<div className='flex-col flex gap-5 w-[200px]'>
			<button
				className={`${showLikedFruits ? 'bg-amber-400' : 'bg-amber-100'}` + ' rounded-xl'}
				onClick={() => {
					setShowLikedFruits(!showLikedFruits);
				}}
			>
				show liked fruits
			</button>
			{
				filtredFruits?.map((fruit: Tfruits[0]) => {
					let liked = false;

					if (likesArray.includes(fruit.id)) {
						liked = true;
					}
					if (!showLikedFruits) {
						return (
							<PorductItem fruit={fruit} key={fruit.id} liked={liked} />
						)
					} else if (likesArray.includes(fruit.id)) {
						return (
							<PorductItem fruit={fruit} key={fruit.id} liked={liked} />
						)
					}
				})
			}
		</div>
	);
}