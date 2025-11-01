import { Metadata } from 'next';
import styles from '@/app/page.module.css'

export const metadata: Metadata = {
	title: 'Create product',
};

export default function Page() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<p>Create product</p>
			</main>
		</div>
	);
}