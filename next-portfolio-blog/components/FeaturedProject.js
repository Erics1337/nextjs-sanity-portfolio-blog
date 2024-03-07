import imageUrlBuilder from "@sanity/image-url"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

function FeaturedProject() {
	return (
		<section id="projects" className="dark:bg-main-dark-bg">
			<div className="container mx-auto px-4 md:px-0 my-10">
				{" "}
				{/* Added container margins for overall spacing */}
				<Link href="/portfolio">
					<h2 className="font-header text-4xl font-semibold tracking-tight text-center text-primary hover:text-primaryHover sm:text-5xl lg:text-6xl uppercase">
						Featured Project
					</h2>
				</Link>
				<h3 className="font-header text-xl font-medium text-center text-gray-900 mt-8 sm:mt-10 md:text-2xl lg:text-3xl">
					Social Brain Contacts Contact Manager
				</h3>
				<div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:gap-10 mb-10">
					<div className="relative rounded-lg overflow-hidden h-128">
						{" "}
						{/* Enhanced image container */}
						<Image
							src="/angled-floating-iphone-x-mockup-against-a-transparent-backdrop-a13833.png"
							alt="Social Brain Contacts App Screenshot"
							layout="fill"
						/>
					</div>

					<div className="p-6 rounded-lg  bg-white">
						{" "}
						{/* Enhanced text container */}
						<p className="text-lg font-medium mb-4">
							'Social Brain Contacts' is a React Native Expo app that utilizes
							research in social brain theory to provide tools to users to group
							their phone contacts into bins. This app aims to help users manage
							and understand their social relationships better.
						</p>
						<p className="text-lg font-small mb-4">
							This app was solely developed by myself with inspiration from my passion to revolutionize the way we connect online.
							It is relied on by 20+ people and has been downloaded over 200 times. It is a great example of my expertise in my skillset and my ability to
							bring products to reality from the ground up.
						</p>
						<Link href="https://www.socialbraincontacts.com/">
							<button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm">
								Visit the product landing page
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FeaturedProject
