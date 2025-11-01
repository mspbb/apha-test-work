'use client'

import { useAppDispatch } from '@/app/store/hooks';
import Link from 'next/link';
import { Tfruits } from '@/app/ui/product-list'
import { like } from '@/app/providers/likesSlice';
import { remove } from '@/app/providers/removeSlice';

export default function PorductItem(props: { fruit: Tfruits[0], liked: boolean }) {
	const { fruit, liked } = props;
	const dispatch = useAppDispatch();
	function hundlerClickLike(e: any) {
		dispatch(like(fruit.id));
		e.preventDefault();
	};

	function hundlerClickRemove(e: any) {
		dispatch(remove(fruit.id));
		e.preventDefault();
	};

	return (
		<Link
			href={`/products/${fruit.id}/`}
			className='rounded-md border p-2 hover:bg-gray-100'
		>
			<div>
				<p>{fruit.name}</p>
				<br />
				<button
					onClick={hundlerClickLike}
					className={`${liked ? 'bg-amber-200' : ''}`}
				>like</button>
				<br />
				<button onClick={hundlerClickRemove}>remove</button>
			</div>
		</Link>
	)
}