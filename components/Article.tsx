import Link from 'next/link'

type Props = {
	title: string
	summary: string
}
const Article = ({ title, summary }: Props) => {
	return (
		<div className='flex flex-col gap-y-2'>
			<Link
				href={'#'}
				className='pt-9 text-xl font-extrabold text-offWhite hover:text-softOrange'>
				{title}
			</Link>
			<p className='text-silver'>{summary}</p>
		</div>
	)
}
export default Article
