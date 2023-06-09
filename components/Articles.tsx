import Article from './Article'
import { articleData } from '@/data'

const Articles = () => {
	return (
		<div className='flex flex-col justify-center bg-veryDarkBlue px-5 py-6 text-white lg:px-6'>
			<h2 className='text-3xl font-bold text-softOrange lg:text-4xl'>New</h2>
			<div className='flex flex-col gap-y-8 divide-y divide-gunmetal'>
				{articleData.map(({ id, title, summary }) => (
					<Article key={id} title={title} summary={summary} />
				))}
			</div>
		</div>
	)
}
export default Articles
