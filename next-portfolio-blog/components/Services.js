import ServiceBlock from './ServiceBlock'

function Services() {
	return (
		<section
			id='services'
			className='dark:bg-secondary-dark-bg bg-gray-100'>
			<div className='py-16 md:py-20 mx-auto container'>
				<h2 className='font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center'>
					Here's what I'm good at
				</h2>
				<h3 className='font-header font-medium text-xl sm:text-2xl lg:text-3xl pt-6 text-center'>
					These are the services I offer
				</h3>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-10 md:pt-12'>
					<ServiceBlock
						image='/img/icon-development-white.svg'
						hoverImage='/img/icon-development-black.svg'
						title='Web Development'
						body='Professional website and web application production'
					/>
					<ServiceBlock
						image='/img/icon-content-white.svg'
						hoverImage='/img/icon-content-black.svg'
						title='Technical Writing'
						body='Super awesome documentation'
					/>
					<ServiceBlock
						image='/img/icon-mobile-white.svg'
						hoverImage='/img/icon-mobile-black.svg'
						title='Mobile Development'
						body='Android and iOS applications using React Native'
					/>
					<ServiceBlock
						image='/img/icon-graphics-white.svg'
						hoverImage='/img/icon-graphics-black.svg'
						title='Web Design'
						body='From wireframes to fully responsive web applications'
					/>
					<ServiceBlock
						image='/img/icon-email-white.svg'
						hoverImage='/img/icon-email-black.svg'
						title='Back-end API Development'
						body='From simple REST APIs to complex microservices'
					/>
					<ServiceBlock
						image='/img/icon-design-white.svg'
						hoverImage='/img/icon-design-black.svg'
						title='Custom Branding'
						body='From logo design to custom branding'
					/>
				</div>
			</div>
		</section>
	)
}

export default Services
