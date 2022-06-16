import React from 'react'
import Image from 'next/image'
import LetsConnect from './LetsConnect'

function Hero() {
	return (
		<section>
			<div
				className='bg-center bg-cover bg-no-repeat relative py-8'
				style={{ backgroundImage: 'url(/img/bg-hero2.jpg)' }}>
				<div className='hero-image'>
					<div className='container relative pt-20 sm:pt-56 lg:pt-64 pb-12 sm:pb-48 lg:pb-48 mx-auto'>
						<div className='flex flex-col lg:flex-row justify-center items-center'>
							<div className='rounded-full border-8 border-primary shadow-xl'>
								<img
									src='/profilePic.jpg'
									className='rounded-full'
									alt='author'
									height={200}
									width={200}
								/>
							</div>
							<div className='lg:pl-8 pt-8 sm:pt-10 lg:pt-0'>
								<h1 className='font-header text-4xl sm:text-5xl md:text-6xl text-center sm:text-left'>
									Hello, I'm{' '}
									<span className='text-primary'>
										Eric Swanson!
									</span>
								</h1>

								<LetsConnect />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
