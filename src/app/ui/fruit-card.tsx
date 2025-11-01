import Link from 'next/link';

export default function FruitCard({ props }: any) {
	return (
		<div>
			<div>{props.name}</div>
			<div>{props.family}</div>
			<div>{props.genus}</div>
			<Link
				href={'/products'}
			>
				back
			</Link>
		</div>
	)
}