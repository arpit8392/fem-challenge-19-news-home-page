'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
	{ name: 'Home', href: '#' },
	{ name: 'New', href: '#' },
	{ name: 'Popular', href: '#' },
	{ name: 'Trending', href: '#' },
	{ name: 'Categories', href: '#' },
]

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	return (
		<header>
			<nav className='flex items-center justify-between' aria-label='Global'>
				<Link href='#' className='-m-1.5 p-1.5'>
					<span className='sr-only'>W. Logo</span>
					<Image
						className='hidden lg:block'
						src='/assets/images/logo.svg'
						alt='W. Logo on Desktop'
						width={64}
						height={40}
					/>
					<Image
						className='block lg:hidden'
						src='/assets/images/logo.svg'
						alt='W. Logo on Mobile'
						width={45}
						height={28}
					/>
				</Link>
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon className='h-6 w-6' aria-hidden='true' />
					</button>
				</div>
				<div className='hidden lg:flex lg:gap-x-12'>
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className=' text-gunmetal hover:text-lightVermillion'>
							{item.name}
						</Link>
					))}
				</div>
			</nav>
			<Dialog
				as='div'
				className='lg:hidden '
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className='fixed inset-0 z-10 bg-veryDarkBlue opacity-50 mix-blend-multiply' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-2/3 max-w-xs overflow-hidden bg-offWhite p-6'>
					<div className='flex justify-end pb-20 pt-6'>
						<button
							type='button'
							className='text-gray-700'
							onClick={() => setMobileMenuOpen(false)}>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon className='h-8 w-8' aria-hidden='true' />
						</button>
					</div>
					<div>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='flex flex-col gap-y-6'>
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className='block text-lg text-veryDarkBlue hover:text-lightVermillion'>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}
export default Header
