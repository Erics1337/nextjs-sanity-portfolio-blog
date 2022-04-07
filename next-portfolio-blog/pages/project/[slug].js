import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import PortableText from 'react-portable-text'
import Navbar from '../../components/Navbar'
import router from 'next/router'
import Footer from '../../components/Footer'
import Head from 'next/head'

export const Project = ({ title, body, image, images, link, slug }) => {
	const [open, setOpen] = useState(false)
	const [imageUrl, setImageUrl] = useState('')

	useEffect(() => {
		// ImageBuilder function
		const imgBuilder = imageUrlBuilder({
			projectId: 'ulqdo09f',
			dataset: 'production',
		})

		// Set image in state using the imageBuilder that Sanity.io has given us
		setImageUrl(imgBuilder.image(image))
	}, [image]) // Dependency array

	return (
		<>
			<Head>
				<title>{title} - Software Development Project</title>
				<meta name='description' content={`${title}`} />
				<meta property='og:title' content={`${title}`} />
				<meta
					property='og:description'
					content={`Learn more about ${title}`}
				/>
				<meta
					property='og:url'
					content={`https://erics.design/${slug}`}
				/>
				<meta property='og:type' content='website' />
				<link rel='icon' href='/icons/favicon.ico' />
			</Head>
			<div className='flex flex-col justify-middle h-screen'>
				<Navbar open={open} setOpen={setOpen} />
				<div className='bg-grey-50 flex-grow'>
					<div
						className={'container grid lg:grid-cols-2 grid-cols-1'}>
						<div>
							{/* If image exists in state then display it */}
							{/* {imageUrl && <img className={'mx-auto pl-4 pt-5 w-2/3 max-w-3xl cursor-pointer hover:shadow-lg justify-center'} src={imageUrl} onClick={() => router.push(`${link}`)}/>} */}
							<div
								className='pl-4 mt-5 h-100 max-w-3xl relative cursor-pointer p-3'
								onClick={() => router.push(`${link}`)}>
								<div
									className='absolute inset-0 bg-cover bg-center z-0'
									style={{
										backgroundImage: `url(${imageUrl})`,
									}}
								/>
								<div className='p-2 opacity-0 hover:bg-primary hover:bg-opacity-80 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold'>
									View project
								</div>
							</div>

							{images && (
								<PortableText
									className='py-3'
									content={images}
									projectId='ulqdo09f'
									dataset='production'
								/>
							)}
						</div>
						<div>
							<div className={'p-5'}>
								<h1 className='p-5 text-3xl font-semibold text-center'>
									{title}
								</h1>
								<PortableText
									content={body}
									projectId='ulqdo09f'
									dataset='production'
								/>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export const getServerSideProps = async (pageContext) => {
	const pageSlug = pageContext.query.slug

	// If theres no project with slug name, this will 404
	if (!pageSlug) {
		return {
			notFound: true,
		}
	}

	// Create groq query to find project with slug name.  Needs to be enconded for URI
	const query = encodeURIComponent(
		`*[ _type == "project" && slug.current == "${pageSlug}" ]`
	)
	const url = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query}`

	const result = await fetch(url).then((res) => res.json())
	const project = result.result[0]

	if (!project) {
		return {
			notFound: true,
		}
	} else {
		return {
			props: {
				categories: project.categories,
				title: project.title,
				date: project.date,
				image: project.mainImage,
				images: project.images ?? null,
				// subhead: project.subhead,
				body: project.body,
				tech: project.tech,
				link: project.link,
				slug: pageSlug,
			},
		}
	}
}

export default Project
