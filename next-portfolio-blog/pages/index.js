import Head from "next/head"
import Image from "next/image"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Portfolio from "../components/Projects"
import Clients from "../components/Clients"
import Experience from "../components/Experience"
import Statistics from "../components/Statistics"
import Posts from "../components/Posts"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import FeaturedProject from "../components/FeaturedProject"

export default function Home({ projects, posts }) {
	const [open, setOpen] = useState(false)
	const [showButton, setShowButton] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300) {
				setShowButton(true)
			} else {
				setShowButton(false)
			}
		})
	}, [])

	const scrollToTop = () => {
		window.scrollTo(0, 0)
	}

	return (
		<div className="dark:bg-main-dark-bg dark:text-gray-100 text-gray-700 bg-white">
			{showButton && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-20 right-20 z-20 bg-transparent hover:bg-primary text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
				>
					&#8679;
				</button>
			)}
			<Head>
				<title>Eric Swanson Software & Web Developer Blog Portfolio </title>
				<meta
					name="description"
					content="Personal website for my career related endeavors, with topics including computer science,
          web development, software development, professional portfolio, web development projects, experience, career timeline"
				/>
				<link rel="icon" href="/icons/favicon.ico" />
				<meta
					property="og:title"
					content="Eric Swanson Software Development Personal Website and Portfolio"
				/>
				<meta
					property="og:description"
					content="Professional web developer portfolio, projects, designs, programming skills"
				/>
				<meta property="og:url" content="https://erics.design" />
				<meta property="og:type" content="website"></meta>
			</Head>
			<Navbar open={open} setOpen={setOpen} />
			<Hero />
			<About />
			<FeaturedProject />
			<Services />
			<Portfolio projects={projects} />
			{/* <Clients /> */}
			<Experience />
			<Statistics />
			<Posts posts={posts} />
			<Contact />
			<Footer />
		</div>
	)
}

export const getServerSideProps = async () => {
	const query1 = encodeURIComponent(
		`*[ _type == "project" ] | order(_createdAt asc) [0...4]`
	)
	const url1 = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query1}`
	const projects = await fetch(url1).then((res) => res.json())

	const query2 = encodeURIComponent(
		`*[ _type == "post" ] | order(_createdAt asc) [0...3]`
	)
	const url2 = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query2}`
	const posts = await fetch(url2).then((res) => res.json())

	if (
		!projects.result ||
		!projects.result.length ||
		!posts.result ||
		!posts.result.length
	) {
		return {
			props: {
				projects: [],
				posts: [],
			},
		}
	} else {
		return {
			props: {
				projects: projects.result,
				posts: posts.result,
			},
		}
	}
}
