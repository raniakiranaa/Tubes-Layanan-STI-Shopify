import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Nav from '@/components/navigation/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shopify',
  description: 'Distribution Management for Smart Commerce',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className='flex flex-col min-h-screen'>
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            		<Nav />
						<main className="relative overflow-hidden flex-1 min-h-screen bg-kGreen-100">
							{/* <ToastContainer /> */}
							{children}
						</main>
            		{/* <Footer /> */}
				</Providers>
			</body>
		</html>
	);
}
