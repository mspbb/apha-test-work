
export default function FruitCard({ props }: any) {
	console.log(props);
	return (
		<div>
			<div>{props.name}</div>
			<div>{props.family}</div>
			<div>{props.genus}</div>
		</div>
	)
}