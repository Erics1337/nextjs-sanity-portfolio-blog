import Head from "next/head"
import imageUrlBuilder from "@sanity/image-url"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProjectCard from "../components/cards/ProjectCard"
import MenuBar from "../components/MenuBar"

export default function Portfolio({ projects }) {
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const [mappedProjects, setMappedProjects] = useState([])
	const [filteredProjects, setFilteredProjects] = useState([])
	const [selectedCategory, setSelectedCategory] = useState("All")

	useEffect(() => {
		// If no projects set it to empty array
		if (projects.length) {
			// ImageBuilder function
			const imgBuilder = imageUrlBuilder({
				projectId: "ulqdo09f",
				dataset: "production",
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
						// Ensure categoryNames is an array (or default to empty array if not present)
						categoryNames: project.categoryNames || [],
					}
				})
			)
		} else {
			setMappedProjects([])
		}
	}, [projects])

	// Filtering functionality
	useEffect(() => {
		if (selectedCategory === "All") {
			setFilteredProjects(mappedProjects)
		} else {
			// Adjust the filtering to check if project's categoryNames includes selectedCategory
			const filtered = mappedProjects.filter((project) =>
				project.categoryNames.includes(selectedCategory)
			)
			setFilteredProjects(filtered)
		}
	}, [selectedCategory, mappedProjects])

	return (
		<>
			<Head>
				<title>Eric Swanson Software & Web Developer Portfolio Projects</title>
				<meta
					name="description"
					content="Personal website for my career related endeavors, with topics including computer science,
          web development, software development, professional portfolio, web development projects, experience, career timeline"
				/>
				<link rel="icon" href="/icons/favicon.ico" />
				<meta
					property="og:title"
					content="Eric Swanson Software Development Portfolio"
				/>
				<meta
					property="og:description"
					content="Professional web development portfolio, projects, designs, programming skills"
				/>
				<meta property="og:url" content="https://ericsdevportfolio.com" />
				<meta property="og:type" content="website"></meta>
			</Head>
			<section
				id="portfolio"
				className="dark:bg-secondary-dark-bg dark:text-gray-100 text-gray-700 bg-gray-100 flex flex-col min-h-screen"
			>
				<Navbar open={open} setOpen={setOpen} />
				<div className="flex flex-col justify-between flex-grow">
					<div className="container mb-5 pb-5">
						{/* <div className={'bg-gray-50'}> */}
						<div className="py-10">
							<h2 className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
								Welcome to my Portfolio
							</h2>
							<h4 className="font-header font-medium text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
								Check out some of my projects below
							</h4>
						</div>
						<MenuBar
							selectedCategory={selectedCategory}
							setSelectedCategory={setSelectedCategory}
						/>

						<div className="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-12">
							{filteredProjects.length ? ( // Use filteredProjects here
								filteredProjects.map((project, index) => (
									<ProjectCard project={project} key={index} />
								))
							) : (
								<div>No Projects Yet</div>
							)}
						</div>
					</div>
					{/* <div className='h-500'></div> */}
					<Footer />
				</div>
			</section>
		</>
	)
}

export const getServerSideProps = async (pageContext) => {
	const query = encodeURIComponent(`
	  *[_type == "project"]{
		...,
		"categoryNames": categories[]->{
		  title
		}
	  }
	`)

	const url = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query}`
	const result = await fetch(url).then((res) => res.json())

	if (!result.result || !result.result.length) {
		return {
			props: {
				projects: [],
			},
		}
	} else {
		const projects = result.result.map((project) => ({
			...project,
			// Ensure categoryNames is an array of strings or an empty array if no names are found
			categoryNames: project.categoryNames
				? project.categoryNames
						.map((cat) => cat.title)
						.filter((title) => title !== undefined)
				: [],
		}))

		return {
			props: {
				projects,
			},
		}
	}
}
