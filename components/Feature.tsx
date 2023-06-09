import Image from 'next/image'

type Props = {
	id: number
	image: string
	headline: string
	summary: string
}
const Feature = ({ id, image, headline, summary }: Props) => {
	return (
		<div className='flex flex-row gap-x-6'>
			<Image
				src={`/assets/images/${image}`}
				alt='Illustration Image'
				width={100}
				height={129}
			/>

			<div className='flex flex-col gap-y-3'>
				<div className='text-3xl font-bold text-silver'>{`0${id}`}</div>
				<div className='flex flex-col gap-y-2'>
					<h3 className='text-lg font-extrabold text-veryDarkBlue'>
						{headline}
					</h3>
					<p className='max-w-xs text-gunmetal'>{summary}</p>
				</div>
			</div>
		</div>
	)
}
export default Feature
