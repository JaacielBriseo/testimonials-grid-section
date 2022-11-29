import { patternQuote, danielImg, jonathanImg, kiraImg, patrickImg, jeanetteImg } from './assets';
import { DanielBox, JeanetteBox, JonathanBox, KiraBoxMD, KiraBoxSM, PatrickBox } from './components';
export const Testimonials = () => {
	return (
		<>
			<div className='container mx-auto max-w-7xl p-2 md:p-10'>
				<div className='grid gap-6 grid-cols-1 text-white md:grid-cols-4 md:grid-rows-2'>
					<DanielBox logo={patternQuote} img={danielImg} />
					<JonathanBox img={jonathanImg} />
					<KiraBoxMD img={kiraImg} />
					<JeanetteBox img={jeanetteImg} />
					<PatrickBox img={patrickImg} />
					<KiraBoxSM img={kiraImg} />
				</div>
			</div>
		</>
	);
};
