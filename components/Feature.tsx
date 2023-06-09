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

			<article className='flex flex-col gap-y-3'>
				<div className='text-3xl font-bold text-silver'>{`0${id}`}</div>
				<div className='flex flex-col gap-y-2'>
					<p className='text-lg font-extrabold text-veryDarkBlue'>{headline}</p>
					<p className='max-w-xs text-gunmetal'>{summary}</p>
				</div>
			</article>
		</div>
	)
}
export default Feature
