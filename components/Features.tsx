import { featuresData } from '@/data'
import Feature from './Feature'

const Features = () => {
	return (
		<ul className='flex flex-col gap-8 lg:flex-row '>
			{featuresData.map((feature) => (
				<li key={feature.id}>
					<Feature {...feature} />
				</li>
			))}
		</ul>
	)
}
export default Features
