import Image from 'next/image'

function ServiceBlock({ image, hoverImage, title, body, link }) {
	return (
		<div className='shadow px-8 py-12 hover:bg-primary group rounded bg-white dark:bg-main-dark-bg'>
			<div className='text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto'>
				<div className='dark:hidden'>
					<div className='hidden group-hover:block h-full w-full'>
						<Image
							src={image}
							alt='development icon'
							height={100}
							width={100}
						/>
					</div>
					<div className='block group-hover:hidden'>
						<Image
							src={hoverImage}
							alt='development icon'
							height={100}
							width={100}
						/>
					</div>
				</div>
				<div className='dark:block hidden'>
					<div className='hidden group-hover:block h-full w-full'>
						<Image
							src={hoverImage}
							alt='development icon'
							height={100}
							width={100}
						/>
					</div>
					<div className='block group-hover:hidden'>
						<Image
							src={image}
							alt='development icon'
							height={100}
							width={100}
						/>
					</div>
				</div>
			</div>
			<div className='text-center'>
				<h3 className='font-semibold  text-lg lg:text-xl text-primary uppercase pt-8 group-hover:text-yellow'>
					{title}
				</h3>
				<p className='text-sm md:text-base text-gray pt-4 group-hover:text-white'>
					{body}
				</p>
			</div>
		</div>
	)
}

export default ServiceBlock
