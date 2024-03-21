import Image from "next/image"
import imageUrlBuilder from "@sanity/image-url"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from 'embla-carousel-autoplay'

function Clients({ clients }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

	const imgBuilder = imageUrlBuilder({
		projectId: "ulqdo09f",
		dataset: "production",
	})

	const urlFor = (source) =>
		imgBuilder.image(source).width(200).height(100).url() // Adjusted for smaller images

	return (
		<section className="dark:bg-gray-800 bg-gray-200 text-white py-28">
			<div className="container mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-24 text-primary py-12">
					My Latest Clients
				</h2>
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
