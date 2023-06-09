import Image from 'next/image'

const HeroImage = () => {
	return (
		<div>
			<Image
				src={'/assets/images/image-web-3-mobile.jpg'}
				alt=''
				width={343}
				height={300}
				className='block w-full lg:hidden'
			/>
			<Image
				src={'/assets/images/image-web-3-desktop.jpg'}
				alt=''
				width={730}
				height={300}
				className='hidden w-full lg:block'
			/>
		</div>
	)
}
export default HeroImage
