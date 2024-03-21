import Image from "next/image"
import imageUrlBuilder from "@sanity/image-url"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

function Clients({ clients }) {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

	const imgBuilder = imageUrlBuilder({
		projectId: "ulqdo09f",
		dataset: "production",
	})

	const urlFor = (source) =>
		imgBuilder.image(source).width(200).height(100).url() // Adjusted for smaller images

	return (
		<section className="dark:bg-gray-800 bg-gray-200 py-28">
			<div className="container mx-auto">
				<div className="mb-24 py-12">
					<h2 className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-5xl uppercase text-center py-6">
						My Latest Clients
					</h2>
					<h3 className="font-header font-medium text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
						I have worked with many clients across various industries helping
						them achieve their goals
					</h3>
				</div>
				<div ref={emblaRef} className="overflow-hidden embla">
					<div className="flex -ml-4 embla__container">
						{Array.isArray(clients) &&
							clients.map((client) => (
								<div key={client._id} className="flex-none ml-4 embla__slide">
									<Image
										src={urlFor(client.image)}
										alt={client.image.alt || "Client Image"}
										width={200} // Adjusted for smaller display
										height={100} // Adjusted for smaller display
										layout="intrinsic"
										className="rounded-lg" // Adds rounded corners
									/>
								</div>
							))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Clients
