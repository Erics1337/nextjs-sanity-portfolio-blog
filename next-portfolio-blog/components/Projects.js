import imageUrlBuilder from "@sanity/image-url"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"
import ProjectCard from "./cards/ProjectCard"

function Portfolio({ projects }) {
	const router = useRouter()

	const [mappedProjects, setMappedProjects] = useState([])

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
					}
				})
			)
		} else {
			setMappedProjects([])
		}
	}, [projects])

	return (
		<section id="projects" className={"dark:bg-main-dark-bg"}>
			<div className="container py-16 md:py-20">
				<h2 className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
					Check out my Portfolio
				</h2>
				<h3 className="font-header font-medium text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
					Here are some examples of what I have created
				</h3>

				<div className="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-12">
					{/* Projects */}
					{mappedProjects.map((project, index) => (
						<ProjectCard project={project} key={index} />
					))}
				</div>
				<div className="flex justify-center pt-12">
					<Link href="/portfolio">
						<a className="inline-block bg-primary text-white font-medium text-lg py-2 px-4 rounded-lg hover:bg-primaryHover transition-all duration-300 mx-auto text-center dark:bg-primary-dark dark:hover:bg-secondary-dark">
							See more projects...
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Portfolio
