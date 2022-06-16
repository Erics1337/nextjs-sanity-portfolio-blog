import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import PortableText from 'react-portable-text'
import Link from 'next/link'
import BlogCard from '../components/BlogCard'

function Posts({ posts = {} }) {
	const [mappedPosts, setMappedPosts] = useState([])

	useEffect(() => {
		// If no posts set it to empty array
		if (posts.length) {
			// ImageBuilder function
			const imgBuilder = imageUrlBuilder({
				projectId: 'ulqdo09f',
				dataset: 'production',
			})

			setMappedPosts(
				posts.map((post) => {
					return {
						...post,
						mainImage: imgBuilder
							.image(post.mainImage)
							.width(500)
							.height(250),
					}
				})
			)
		} else {
			setMappedPosts([])
		}
	}, [posts])

	return (
		<section id='posts' className='dark:bg-secondary-dark-bg'>
			<div className='container py-16 md:py-20'>
				<Link href={'/blog'}>
					<h2 className='font-header cursor-pointer hover:text-secondary font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center'>
						Check out these posts I wrote
					</h2>
				</Link>
				<h4 className='font-header font-medium text-xl sm:text-2xl lg:text-3xl pt-6 text-center'>
					I like to share the knowledge I learn!
				</h4>
				<div className='w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-10 pt-12'>
					{/* Posts */}
					{mappedPosts.map((post, index) => (
						<BlogCard
							post={post}
							// content={post?.excerpt}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Posts
