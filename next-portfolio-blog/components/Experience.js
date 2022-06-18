import Timeline from './Timeline'

function Experience() {
	return (
		<section
			id='experience'
			className='dark:bg-secondary-dark-bg bg-gray-100'>
			<div className='container py-16 md:py-20'>
				<h2 className='font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center'>
					My work and education experience
				</h2>
				<h3 className='font-header font-medium text-xl sm:text-2xl lg:text-3xl pt-6 text-center'>
					Here's a timeline of my career
				</h3>
				{/* <h3 className="font-header font-medium text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
          Here's what I did before freelancing
        </h3> */}

				<div className='w-full lg:w-2/3 mx-auto flex flex-col mt-12 relative'>
					<span className='absolute inset-y-0 left-2/5 ml-10 w-0.5 bg-gray-40 dark:bg-gray-10 hidden md:block'></span>

					<Timeline
						image='/purchaseCollege.png'
						dates='2010 - 2014'
						title='SUNY Purchase College'
						description='Bachelor of Arts (BA), Liberal Studies w/ focus in Media and Communications and a Minor in Media, Society, and the Arts'
					/>

					<Timeline
						image='/western.png'
						dates='2017 - 2020'
						title='Western Colorado University'
						description='Bachelor of Science (BS), Computer Science'
					/>
					<Timeline
						image='/tinyFeet.png'
						dates='2020 - 2021'
						title='Tiny Feet Toolkit'
						description='Lead engineer on a team with a Masters of Environmental Management student and a group of engineers from the Colorado School of Mines where we developed a web application that helped communities build a climate action plan.'
					/>
					<Timeline
						image='/beiLogo.png'
						dates='2021 - 2022'
						title='Business Enterprise Institute'
						description='Full Stack Developer. Designed and developed the homepage of the company website.
                Collaborated with the client success and marketing teams to build custom tools to aid in client success. Monitored security, tested performance, and oversaw the development of new features in various internal applications.'
					/>
				</div>
			</div>
		</section>
	)
}

export default Experience
