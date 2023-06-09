import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'News Home Page',
	description:
		'Frontend Mentor Challenge | Solution by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} bg-offWhite px-4 py-7 md:px-40 md:py-24`}>
				<Header />
				{children}
			</body>
		</html>
	)
}
