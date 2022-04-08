import Head from 'next/head'
import Image from 'next/image'
import BaseBlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import serializers from '../utils/sanity'

export default function Portfolio({ projects }) {
	const router = useRouter()
	const [open, setOpen] = useState(false)

	// mapped array of projects that weve created and set inside of state
	const [mappedProjects, setMappedProjects] = useState([])

	useEffect(() => {
		// If no projects set it to empty array
		if (projects.length) {
			// ImageBuilder function
			const imgBuilder = imageUrlBuilder({
				projectId: 'ulqdo09f',
				dataset: 'production',
			})

			setMappedProjects(
				projects.map((project) => {
					return {
						...project,
						// All images will be same width and height
						mainImage: imgBuilder
							.image(project.mainImage)
							.width(500)
							.height(250),
					}
				})
			)
		} else {
			setMappedProjects([])
		}
	}, [projects])

	return (
		<>
			<Head>
				<title>
					Eric Swanson Software & Web Developer Portfolio Projects
				</title>
				<meta
					name='description'
					content='Personal website for my career related endeavors, with topics including computer science,
          web development, software development, professional portfolio, web development projects, experience, career timeline'
				/>
				<link rel='icon' href='/icons/favicon.ico' />
				<meta
					property='og:title'
					content='Eric Swanson Software Development Portfolio'
				/>
				<meta
					property='og:description'
					content='Professional web development portfolio, projects, designs, programming skills'
				/>
				<meta property='og:url' content='https://erics.design' />
				<meta property='og:type' content='website'></meta>
			</Head>
			<section id='portfolio'>
				<Navbar open={open} setOpen={setOpen} />
				<div className='flex flex-col justify-between h-screen bg-grey-50 '>
					<div className='container mb-5'>
						{/* <div className={'bg-grey-50'}> */}
						<div className='py-10'>
							<h2 className='font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center'>
								Welcome to my Portfolio
							</h2>
							<h4 className='font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6 text-center'>
								Check out some of my projects below
							</h4>
						</div>

						<div className='w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-12'>
							{mappedProjects.length ? (
								mappedProjects.map((project, index) => (
									<div
										key={index}
										className='transition-all transform hover:scale-105'
										onClick={() =>
											router.push(
												`/project/${project.slug.current}`
											)
										}>
										<div
											className='w-full h-100 max-h-100 relative cursor-pointer'
											onClick={() =>
												router.push(
													`/project/${project.slug.current}`
												)
											}>
											<div
												className='absolute inset-0 bg-cover bg-center z-0'
												style={{
													backgroundImage: `url(${project.mainImage})`,
												}}
											/>
											<div className='p-2 opacity-0 hover:bg-primary hover:bg-opacity-80 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-around items-center text-white font-semibold'>
												<h1 className='pr-5 text-4xl'>
													{project.title}
												</h1>
												<div className='border-l pl-5 flex'>
													{/* Tech Used:{' '} */}
													<BaseBlockContent
														projectId='ulqdo09f'
														dataset='production'
														blocks={project.tech}
														serializers={
															serializers
														}
													/>
												</div>
											</div>
										</div>
									</div>
								))
							) : (
								<div>No Projects Yet</div>
							)}
						</div>
					</div>
					<div className='h-500'></div>
					<Footer />
				</div>
			</section>
		</>
	)
}

export const getServerSideProps = async (pageContext) => {
	const query = encodeURIComponent(`*[ _type == "project" ]`)
	const url = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query}`
	const result = await fetch(url).then((res) => res.json())

	// If no project projects
	if (!result.result || !result.result.length) {
		return {
			props: {
				projects: [],
			},
		}
	} else {
		return {
			props: {
				projects: result.result,
			},
		}
	}
}
