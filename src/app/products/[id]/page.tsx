
import styles from '@/app/page.module.css';
import FruitCard from '@/app/ui/fruit-card';
import { fetchFruit, fetchFruits } from '@/app/api/data';

async function getProductIds(): Promise<string[]> {
	return await fetchFruits();
}

export async function generateStaticParams() {
	const productIds = await getProductIds();

	return productIds.map((obj) => {
		/* @ts-ignore */
		return { id: obj.id.toString() }
	});
}

export default async function Page(props: { params: Promise<{ id: string }> }) {
	const params = await props.params;
	const id = params.id;
	const fruit = await fetchFruit(Number(id));

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<FruitCard props={fruit} />
			</main>
		</div>
	)
}