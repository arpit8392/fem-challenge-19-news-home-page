import { featuresData } from '@/data'
import Feature from './Feature'

const Features = () => {
	return (
		<section className='flex flex-col gap-8 lg:flex-row '>
			{featuresData.map((feature) => (
				<Feature key={feature.id} {...feature} />
			))}
		</section>
	)
}
export default Features
