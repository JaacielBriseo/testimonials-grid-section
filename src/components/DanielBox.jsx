export const DanielBox = ({logo, img}) => {
	return (
		<>
			{/* Box 1 */}
			<div className='relative p-10 rounded-xl bg-moderateViolet md:col-span-2'>
				{/* Quotes images */}
				<img
					src={logo}
					alt='patternQuote'
					className='absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150'
				/>
				{/* Box Header */}
				<div className='flex z-10 space-x-4'>
					<img src={img} alt='danielImg' className='w-10 h-10 rounded-full ring-2 ring-purple-300' />
					<div className='text-sm'>
						<h4 className='opacity-90'>Daniel Clifford</h4>
						<p className='opacity-50'>Verified Graduate</p>
					</div>
				</div>
				{/* Large text */}
				<p className='relative z-10 mt-6 text-xl'>
					I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I
					joined. I honestly feel I got every penny’s worth.
				</p>
				{/* Small text */}
				<p className='mt-6 opacity-50'>
					“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have
					heard some people who had an amazing experience here. I signed up for the free intro course and found it
					incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my
					life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR
					startup. ”
				</p>
			</div>
		</>
	);
};
