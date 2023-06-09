import Link from 'next/link'

const Headlines = () => {
	return (
		<div className='flex flex-col gap-y-4 py-4 lg:grid lg:grid-cols-2 lg:gap-7 lg:pt-7'>
			<h1 className='text-4xl font-extrabold text-veryDarkBlue lg:text-6xl'>
				The Bright Future of Web 3.0?
			</h1>
			<div className='flex flex-col justify-between gap-y-6 lg:gap-y-0'>
				<p className='leading-7 text-gunmetal lg:max-w-sm'>
					We dive into the next evolution of the web that claims to put the
					power of the platforms back into the hands of the people. But is it
					really fulfilling its promise?
				</p>
				<Link
					href='#'
					className='max-w-fit bg-lightVermillion px-8 py-3 text-sm font-bold uppercase tracking-[4px] text-offWhite text-white hover:bg-veryDarkBlue'>
					Read More
				</Link>
			</div>
		</div>
	)
}
export default Headlines
