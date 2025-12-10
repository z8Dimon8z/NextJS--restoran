"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ className = '', href, children }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link className={`${className} ${isActive ? 'active' : ''}`} href={href}>
			{children}
		</Link>
	);
};

export default NavLink;
