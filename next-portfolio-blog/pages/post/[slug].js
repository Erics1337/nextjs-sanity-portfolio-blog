import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import PortableText from 'react-portable-text'
import Image from 'next/image'
import moment from 'moment'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import serializers from '../../utils/sanity'
import Head from 'next/head'

export const Post = ({
	title,
	body,
	image,
	publishedAt,
	name,
	categories,
	allCategories,
	slug,
}) => {
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
		<div>
			<Head>
				<title>{title} - Development Blog Post</title>
				<meta name='description' content={`${title}`} />
				<meta property='og:title' content={`${title}`} />
				<meta
					property='og:description'
					content={`Learn more about ${title}`}
				/>
				<meta
					property='og:url'
					content={`https://ericsdevportfolio.com/${slug}`}
				/>
				<meta property='og:type' content='website' />
				<link rel='icon' href='/icons/favicon.ico' />
			</Head>
			<section id='blogPost' className='flex flex-col h-screen '>
				<Navbar open={open} setOpen={setOpen} />
				<div className='dark:bg-secondary-dark-bg dark:text-gray-100 text-gray-700 bg-gray-50 flex-grow'>
					<div className={'container'}>
						{/* If image exists in state then display it */}
						{imageUrl && (
							<img
								className={'w-50 py-5 mx-auto'}
								src={imageUrl}
							/>
						)}
						<div className='grid grid-cols-5 gap-3'>
							<div
								className={
									'md:col-span-4 col-span-5 justify-center p-5 my-5'
								}>
								<h1
									className={
										'text-center py-5 font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl'
									}>
									{title}
								</h1>
								<p
									className={
										'text-primary text-xs italic py-2'
									}>
									{moment(publishedAt)
										.startOf('day')
										.fromNow()}
								</p>
								<PortableText
									className={'justify-center'}
									imageOptions={{
										w: 400,
										h: 240,
										fit: 'max',
									}}
									projectId='ulqdo09f'
									dataset='production'
									content={body}
									// Optionally override marks, decorators, blocks, etc. in a flat
									// structure without doing any gymnastics
									serializers={serializers}
								/>
							</div>
							<Sidebar
								categories={categories}
								allCategories={allCategories}
							/>
						</div>
					</div>
				</div>
				<Footer />
			</section>
		</div>
	)
}

export const getServerSideProps = async (pageContext) => {
	const pageSlug = pageContext.query.slug

	// If theres no post with slug name, this will 404
	if (!pageSlug) {
		return {
			notFound: true,
		}
	}

	// Create groq query to find post with slug name.  Needs to be enconded for URI
	const query1 =
		encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]
        {title, slug, body, excerpt, publishedAt, "name": author->name, mainImage{asset->{_id,url},alt}, "categories": categories[]->title}`)
	const url1 = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query1}`

	const result1 = await fetch(url1).then((res) => res.json())
	const post = result1.result[0]

	const query2 = encodeURIComponent(`*[ _type == "category" ]{title}`)
	const url2 = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query2}`

	const result = await fetch(url2).then((res) => res.json())
	const allCategories = result.result.map((category) => category.title)

	if (!post) {
		return {
			notFound: true,
		}
	} else {
		return {
			props: {
				body: post.body,
				title: post.title,
				image: post.image,
				publishedAt: post.publishedAt,
				name: post.name,
				categories: post.categories,
				image: post.mainImage,
				allCategories: allCategories,
				slug: pageSlug,
			},
		}
	}
}

export default Post
