'use client'

import styles from '@/app/page.module.css'
import { useAppSelector } from '@/app/store/hooks';

export default function Page() {
	const addFruit: { name: string, family: string } = useAppSelector((state) => state.addFruit.item);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<p>Product created</p>
				<p>{addFruit?.name}</p>
				<p>{addFruit?.family}</p>
			</main>
		</div>
	)
}