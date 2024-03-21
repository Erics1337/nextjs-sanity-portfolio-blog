import imageUrlBuilder from "@sanity/image-url"
import { useState, useEffect } from "react"
import PortableText from "react-portable-text"
import Navbar from "../../components/Navbar"
import router from "next/router"
import Footer from "../../components/Footer"
import Head from "next/head"
import serializers from "../../utils/sanity"
import BaseBlockContent from "@sanity/block-content-to-react"

export const Project = ({
	title,
	body,
	image,
	images,
	link,
	slug,
	date,
	tech,
	tech2,
	categoryNames,
}) => {
	const [open, setOpen] = useState(false)
	const [imageUrl, setImageUrl] = useState("")

	useEffect(() => {
		// ImageBuilder function
		const imgBuilder = imageUrlBuilder({
			projectId: "ulqdo09f",
			dataset: "production",
		})

		// Set image in state using the imageBuilder that Sanity.io has given us
		setImageUrl(imgBuilder.image(image))
	}, [image]) // Dependency array

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	})

	return (
		<>
			<Head>
				<title>{title} - Software Development Project</title>
				<meta name="description" content={`${title}`} />
				<meta property="og:title" content={`${title}`} />
				<meta property="og:description" content={`Learn more about ${title}`} />
				<meta property="og:url" content={`https://erics.design/${slug}`} />
				<meta property="og:type" content="website" />
				<link rel="icon" href="/icons/favicon.ico" />
			</Head>
			<div className="flex flex-col justify-middle min-h-screen">
				<Navbar open={open} setOpen={setOpen} />

				<div className="dark:bg-secondary-dark-bg dark:text-gray-100 bg-gray-50 text-gray-700 flex-grow">
					<div className="container mx-auto px-4 py-8">
						<div className="flex justify-between items-center mb-8">
							<div className="flex items-center">
								<button
									onClick={() => router.back()}
									className="flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-100"
								>
									<svg
										className="fill-current mr-2"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path d="M0 0h24v24H0z" fill="none" />
										<path d="M14.71 6.71a.996.996 0 00-1.41 0L8.71 11.3a.996.996 0 000 1.41l4.59 4.59a.996.996 0 101.41-1.41L11.83 12l2.88-2.88a.996.996 0 000-1.41z" />
									</svg>
									Back to Portfolio
								</button>
							</div>
							<h1 className="text-3xl font-semibold flex-grow text-center">
								{title}
							</h1>
							<div className="w-24 invisible">
								<svg className="fill-current opacity-0" width="24" height="24">
									<path d="M14.71 6.71a.996.996 0 00-1.41 0L8.71 11.3a.996.996 0 000 1.41l4.59 4.59a.996.996 0 101.41-1.41L11.83 12l2.88-2.88a.996.996 0 000-1.41z" />
								</svg>
							</div>
						</div>

						<p className="text-sm text-center mt-2">
							Completed {formattedDate}
						</p>

						<div
							className="relative cursor-pointer bg-center bg-cover h-96 mt-8 mb-8"
							onClick={() => router.push(`${link}`)}
							style={{ backgroundImage: `url(${imageUrl})` }}
						>
							<div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-center text-6xl text-white font-semibold">
								View Project
							</div>
						</div>

						{/* Adjusted Grid Layout for Content */}
						<div className="flex flex-col lg:flex-row gap-4">
							{/* Combined Technologies Used and Categories */}
							<div className="flex flex-row flex-wrap lg:flex-col lg:w-1/4">
								<div className="p-5 w-1/2 lg:w-full">
									<h2 className="text-xl font-semibold mb-4">
										Technologies Used
									</h2>
									<div style={{ maxWidth: "60px" }}>
										<BaseBlockContent
											projectId="ulqdo09f"
											dataset="production"
											blocks={tech}
											serializers={serializers}
										/>
										<BaseBlockContent
											projectId="ulqdo09f"
											dataset="production"
											blocks={tech2}
											serializers={serializers}
										/>
									</div>
								</div>
								<div className="w-1/2 lg:w-full">
									<h2 className="text-xl font-semibold my-4 pt-5">Category</h2>
									<div>
										{categoryNames.map(function (category) {
											return (
												<span
													key={category._id}
													className="inline-block py-1 px-2 mr-2 mt-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
												>
													{category}
												</span>
											)
										})}
									</div>
								</div>
							</div>

							<div className="lg:w-1/2 p-5">
								<h2 className="text-xl font-semibold mb-4">
									Project Description
								</h2>
								<PortableText
									serializers={serializers}
									content={body}
									projectId="ulqdo09f"
									dataset="production"
								/>
							</div>

							{/* Additional Images */}
							<div className="lg:w-1/4 flex flex-col space-y-4 p-5">
								{images && (
									<PortableText
										className=""
										content={images}
										projectId="ulqdo09f"
										dataset="production"
									/>
								)}
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

	// If there's no project with slug name, this will 404
	if (!pageSlug) {
		return {
			notFound: true,
		}
	}

	// Create groq query to find project with slug name. Needs to be encoded for URI
	const query = encodeURIComponent(
		`*[ _type == "project" && slug.current == "${pageSlug}"]{
            ...,
            "categoryNames": categories[]->{
              title
            }
        }`
	)
	const url = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query}`

	const result = await fetch(url).then((res) => res.json())
	const project = result.result[0]

	if (!project) {
		return {
			notFound: true,
		}
	} else {
		// Transform categoryNames to an array of strings (category titles)
		const categoryNames = project.categoryNames
			? project.categoryNames
					.map((cat) => cat.title)
					.filter((title) => title !== undefined)
			: []

		return {
			props: {
				// Replace categories with categoryNames to align with your intent
				categoryNames, // Use this instead of categories: project.categories,
				title: project.title,
				date: project.date,
				image: project.mainImage,
				images: project.images ?? null,
				body: project.body,
				tech: project.tech,
				tech2: project.tech2 ?? null,
				link: project.link,
				slug: pageSlug,
			},
		}
	}
}

export default Project
