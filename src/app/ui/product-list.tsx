import { fetchFruits } from '@/app/api/data';
import PorductItem from '@/app/ui/product-item';

type fruityvice = {
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
};

export default async function ProductList() {
	const fruits = await fetchFruits();

	return (
		<div className='flex-col flex gap-5'>
			{
				fruits?.map((fruit: fruityvice) => {
					return (
						<PorductItem fruit={fruit} key={fruit.id}/>
					)
				})
			}
		</div>
	);
}