import LetsConnect from './LetsConnect'
import Link from 'next/link'

function About() {
	return (
		<section id='about'>
			<div className='flex xl:container'>
				<div className='md:w-2/3 w-full ml-auto h-128 lg:z-20'>
					<iframe
						src='https://my.spline.design/macbookprocopy-07a81e4c79231f1cf6790c7a854d05ad/'
						frameBorder='0'
						width='100%'
						height='100%'></iframe>
				</div>
				<div className='absolute container py-16 md:py-20 flex flex-col lg:flex-row items-center mx-auto lg:pr-10'>
					<div className='w-full md:w-3/5 text-center lg:text-left  p-5 bg-gray-300/75 dark:bg-secondary-dark-bg/75 rounded-md lg:bg-transparent'>
						<h2 className='font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase'>
							Who am I?
						</h2>
						<h4 className='font-header font-medium text-xl sm:text-2xl lg:text-3xl pt-6'>
							I'm Eric Swanson, a Full-Stack Web Developer,
							Software Engineer, Designer, and Content Creator
						</h4>
						<p className='dark:text-gray-300 text-gray-800 pt-6 leading-relaxed'>
							I love to create. I am passionate about what I do,
							and the projects I work on. My greatest joy is
							helping others achieve their goals using my skills
							and experience. Check out my work, and if you like
							what I do, let's connect and make something amazing
							together.
						</p>
						<LetsConnect />
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
