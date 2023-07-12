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
						image='/spruce_logo.png'
						url='https://www.sprucetech.com'
						dates='2023'
						title='Spruce Technologies'
						description='As a Full Stack Engineer at Spruce Technologies, I served as the administrator for the Delaware River 
						and Bay Authority website. I also contributed to the development of additional functionalities for CalTrans
						RebuildingCA project using Node.js. My responsibilities included designing and implementing web interfaces, 
						implementing new functionality and integrations, and ensuring website performance and stability.'
					/>
					<Timeline
						image='/ktz_logo_square.webp'
						url='https://www.kitzuma.com'
						dates='2022'
						title='Kitzuma Cycling Logistics'
						description='Full Stack Engineer. Contributed to the development of company tools used to manage shipping logistics.
						Operationalized scripts for 
						various internal processes that allow admin to interface with the data model behind the proprietary TMS software 
						built on top of the Salesforce platform. Redesigned company marketing website from the legacy codebase and integrated it with a headless CMS. 
						Improved various internal processes and made additions to data model.'
					/>
					<Timeline
						image='/beiLogo.png'
						url='https://www.exitplanning.com'
						dates='2021 - 2022'
						title='Business Enterprise Institute'
						description='Full Stack Developer. Designed and developed the homepage of the company website.
                Collaborated with the client success and marketing teams to build custom tools to aid in client success. Monitored security, tested performance, and oversaw the development of new features in various internal applications.'
					/>
					<Timeline
						image='/tinyFeet.png'
						url='https://www.mines.edu/capstoneseniordesign/project/tiny-feet-cap-toolkit'
						dates='2020 - 2021'
						title='Tiny Feet Toolkit'
						description='As the lead engineer, I steered a multifaceted team to create a web application aimed at facilitating community-led climate action plans. 
						My key contributions included the creation of a Google Maps API-based feature and a tailored recommendation tool powered by a custom REST API, alongside optimizing the application database'
					/>
					<Timeline
						image='/western.png'
						url='https://www.western.edu'
						dates='2017 - 2020'
						title='Western Colorado University'
						description='Bachelor of Science (BS), Computer Science'
					/>
					<Timeline
						image='/purchaseCollege.png'
						url='https://www.purchase.edu'
						dates='2010 - 2014'
						title='SUNY Purchase College'
						description='Bachelor of Arts (BA), Liberal Studies w/ focus in Media and Communications and a Minor in Media, Society, and the Arts'
					/>
				</div>
			</div>
		</section>
	)
}

export default Experience
