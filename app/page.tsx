import Articles from '@/components/Articles'
import Features from '@/components/Features'
import Headlines from '@/components/Headlines'
import HeroImage from '@/components/HeroImage'

export default function Home() {
	return (
		<main className='grid grid-cols-1 gap-16 pb-16 pt-8 lg:grid-cols-3 lg:gap-7 lg:pb-20 lg:pt-14'>
			<div className='flex flex-col gap-y-6 lg:col-span-2 lg:gap-y-0'>
				<HeroImage />
				<Headlines />
			</div>
			<Articles />
			<div className='lg:col-span-3 lg:pt-10'>
				<Features />
			</div>
		</main>
	)
}
