import styles from "./page.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home page',
};

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.intro}>
					Home page
				</div>
			</main>
		</div>
	);
}
