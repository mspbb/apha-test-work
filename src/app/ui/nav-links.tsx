'use client';

import {
	DocumentPlusIcon,
	DocumentIcon,
	HomeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from '@/app/page.module.css'

const links = [
	{
		name: 'Home',
		href: '/',
		icon: HomeIcon
	},
	{
		name: 'Product',
		href: '/products',
		icon: DocumentIcon,
	},
	{
		name: 'Create',
		href: '/create-product',
		icon: DocumentPlusIcon,
	}
];

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<div className='bg-[#fafafa]'>
			<nav className={`${styles.nav}` + " flex max-w-[800px] w-full"}>
				{links.map((link) => {
					const LinkIcon = link.icon;
					return (
						<Link
							key={link.name}
							href={link.href}
							className={clsx(
								'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
								{
									'bg-sky-100 text-blue-600': pathname === link.href,
								},
							)}
						>
							<LinkIcon className="w-6" />
							<p className="hidden md:block">{link.name}</p>
						</Link>
					);
				})}
			</nav>
		</div>
	);
}
