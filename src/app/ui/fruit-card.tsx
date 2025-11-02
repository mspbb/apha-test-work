import Link from 'next/link';

export default function FruitCard({ props }: any) {
	return (
		<div>
			<div>{props.name}</div>
			<div>{props.family}</div>
			<div className='mb-5'>{props.genus}</div>
			<Link
				href={'/products'}
				className='bg-amber-400 p-2 rounded-xl'
			>
				back
			</Link>
		</div>
	)
}