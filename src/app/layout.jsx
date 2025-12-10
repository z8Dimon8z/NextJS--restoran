import Header from '@components/Header';
import { Inter } from 'next/font/google';
import Footer from '@components/Footer';
import { Toaster } from 'react-hot-toast';

import './../../public/styles/main.css';



const inter = Inter({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-inter',
});

export const metadata = {
	title: 'Next.js Portfolio',
	description: 'Dark, modern Next.js demo project',
	openGraph: {
		siteName: 'Tutorial',
		description: 'Some text...',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru" className={inter.variable}>
			<body>
				<Header />
				<main className="main">{children}</main>
				<Footer />
				<Toaster
					position="top-right"
					gutter={12}
					containerStyle={{ margin: '8px' }}
					toastOptions={{
						style: {
							fontSize: '14px',
							maxWidth: '350px',
							padding: '12px 16px',
							background:
								'linear-gradient(145deg, rgba(4, 28, 32, .8), rgba(3, 16, 18, .9))',
							color: '#1d9185ff',
						},
						success: {
							duration: 3000,
							style: {
								background: 'rgba(255, 255, 255, .03)',
								color: '#2fe39a',
							},
						},
						error: {
							duration: 5000,
							style: {
								background: 'rgba(0, 0, 0, .15)',
								color: 'rgba(166, 20, 20, 1)',
							},
						},
					}}
				/>
			</body>
		</html>
	);
}
