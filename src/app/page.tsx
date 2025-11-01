import styles from "./page.module.css";
import { Metadata } from 'next';
import Counter from '@/app/ui/counter'
import { makeServerStore } from '@/app/store/server-store'

export const metadata: Metadata = {
	title: 'Home page',
};

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.intro}>
					Home page
					{/* <Counter /> */}
				</div>
			</main>
		</div>
	);
}
