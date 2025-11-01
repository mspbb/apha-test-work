
import styles from '@/app/page.module.css';
import FruitCard from '@/app/ui/fruit-card';
import { fetchFruit } from '@/app/api/data';

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