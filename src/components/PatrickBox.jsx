export const PatrickBox = ({img}) => {
	return (
		<>
			<div className='p-10 rounded-xl bg-verydarkBlackishblue md:col-span-2'>
				{/* Box Header */}
				<div className='flex space-x-4'>
					<img src={img} alt='jonathan' className='w-10 h-10 rounded-full ring-2 ring-purple-300' />
					<div className='text-sm'>
						<h4 className='opacity-90'>Patrick Abrams</h4>
						<p className='opacity-50'>Verified Graduate</p>
					</div>
				</div>
				{/* Large text */}
				<p className='mt-6 text-xl'>
					Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning
					from their experiences was easy.
				</p>
				{/* Small text */}
				<p className='mt-6 opacity-50'>
					“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the
					confidence necessary to be able to go out in the world and present myself as a capable junior developer. The
					standard is above the rest. You will get the personal attention you need from an incredible community of smart
					and amazing people. ”
				</p>
			</div>
		</>
	);
};
