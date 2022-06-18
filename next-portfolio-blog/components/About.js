import LetsConnect from './LetsConnect'
import Link from 'next/link'
import Spline from './Spline'

function About() {
	return (
		<section id='about'>
			<div className='container py-16 md:py-20 flex flex-col lg:flex-row items-center mx-auto'>
				<div className='w-full sm:w-3/4 lg:w-3/5 text-center lg:text-left'>
					<h2 className='font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase'>
						Who am I?
					</h2>
					<h4 className='font-header font-medium text-xl sm:text-2xl lg:text-3xl pt-6'>
						I'm Eric Swanson, a Full-Stack Web Developer, Software
						Engineer, Designer, and Content Creator
					</h4>
					<p className='dark:text-gray-300 text-gray-20 pt-6 leading-relaxed'>
						I love to create. I am passionate about what I do, and
						the projects I work on. My greatest joy is helping
						others achieve their goals using my skills and
						experience. Check out my work, and if you like what I
						do, let's connect and make something amazing together.
					</p>
					<LetsConnect />
				</div>

				{/* Skills */}
				<div className='w-full sm:w-3/4 lg:w-2/5 lg:pl-12'>
					<iframe
						src='https://my.spline.design/untitled-8c6348222e8768b117c6ca6d49fd71f0/'
						frameBorder='0'
						width='100%'
						height='100%'></iframe>
				</div>
			</div>
		</section>
	)
}

export default About
