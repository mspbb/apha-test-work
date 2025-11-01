import { Metadata } from 'next';
import styles from '@/app/page.module.css'
import { fetchFruits } from '@/app/api/data';
import ProductList from '@/app/ui/product-list';

export const metadata: Metadata = {
	title: 'Products',
};

export default async function Page() {
	const fruits = await fetchFruits();

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<p className='mb-5'>Products Page</p>
				<ProductList />
			</main>
		</div>
	);
}