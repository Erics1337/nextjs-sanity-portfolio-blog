import Navbar from '../components/Navbar'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'

// Used for links router.push
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import BlogCard from '../components/BlogCard'
import { blogState } from '../atoms/blogAtom'
import Head from 'next/head'

export default function Blog({ posts, allCategories }) {
	const [open, setOpen] = useState(false)
	const [currentCategory, setCurrentCategory] = useRecoilState(blogState)
	const [mappedPosts, setMappedPosts] = useState([])

	useEffect(() => {
		// ImageBuilder function
		const imgBuilder = imageUrlBuilder({
			projectId: 'ulqdo09f',
			dataset: 'production',
		})

		// check each category of each post to see if it matches the current category, if so add it to the mappedPosts array
		setMappedPosts(
			posts.map((post) => {
				if (!currentCategory == '') {
					if (post.categories.includes(currentCategory)) {
						return {
							...post,
							mainImage: imgBuilder
								.image(post.mainImage)
								.width(500)
								.height(250),
						}
					} else return {}
				} else
					return {
						...post,
						mainImage: imgBuilder
							.image(post.mainImage)
							.width(500)
							.height(250),
					}
			})
		)
	}, [currentCategory])

	return (
		<>
			<Head>
				<title>Eric Swanson Software & Web Developer Blog</title>
				<meta
					name='description'
					content='Personal website for my career related endeavors, with topics including computer science,
          web development, software development, professional portfolio, web development projects, experience, career timeline'
				/>
				<link rel='icon' href='/icons/favicon.ico' />
				<meta
					property='og:title'
					content='Eric Swanson Software Development Personal Website Blog'
				/>
				<meta
					property='og:description'
					content='Professional web developer portfolio, projects, designs, programming skills'
				/>
				<meta property='og:url' content='https://erics.design' />
				<meta property='og:type' content='website'></meta>
			</Head>
			<section
				id='portfolio'
				className='dark:bg-secondary-dark-bg dark:text-gray-100 text-gray-700 bg-gray-100'>
				<Navbar open={open} setOpen={setOpen} />
				<div className='flex flex-col h-screen justify-between'>
					<div className='container mb-5 pb-5 py-16 md:py-20'>
						<h2 className='font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center'>
							Welcome to the blog
						</h2>
						<h4 className='font-header font-medium text-xl sm:text-2xl lg:text-3xl pt-6 text-center'>
							Check out these posts I wrote
						</h4>

						<div className='flex flex-1 justify-space-between pt-10'>
							<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2'>
								{/* Posts */}

								{!Object.keys(mappedPosts).length == 0 ? (
									mappedPosts.map((post, index) =>
										Object.keys(post).length ? (
											<BlogCard
												post={post}
												content={post?.excerpt}
												index={index}
											/>
										) : (
											<div className={'w-100'}></div>
										)
									)
								) : (
									<div className=''>
										No Posts In This Category
									</div>
								)}
							</div>

							<Sidebar allCategories={allCategories} />
						</div>
					</div>

					<div className='h-500'></div>
					<Footer />
				</div>
			</section>
		</>
	)
}

export const getServerSideProps = async () => {
	const query = encodeURIComponent(
		`*[ _type == "post" ]{..., 'categories': categories[]->title}`
	)
	const url = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query}`
	const result = await fetch(url).then((res) => res.json())

	const query2 = encodeURIComponent(`*[ _type == "category" ]{title}`)
	const url2 = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query2}`

	const result2 = await fetch(url2).then((res) => res.json())
	const allCategories = result2.result.map((category) => category.title)

	if (!result.result || !result.result.length) {
		return {
			props: {
				posts: [],
			},
		}
	} else {
		return {
			props: {
				posts: result.result,
				allCategories: allCategories,
			},
		}
	}
}
