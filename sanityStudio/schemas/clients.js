export default {
	name: "clients", // Unique name for the schema
	title: "Clients", // Human-readable title
	type: "document", // Type of document
	fields: [
		{
			name: "image", // Field name
			title: "Image", // Human-readable field title
			type: "image", // Field type
			options: {
				hotspot: true, // Enables hotspot for better image cropping
			},
			fields: [
				{
					name: "caption", // Optional: add a caption field to the image
					type: "string",
					title: "Caption",
					options: {
						isHighlighted: true, // Highlights this field in the Sanity Studio UI
					},
				},
				{
					name: "alt", // Optional: add an alt text field for accessibility
					type: "string",
					title: "Alternative Text",
					description: "Important for SEO and accessibility.",
					validation: (Rule) => Rule.required(), // Makes this field required
				},
			],
		},
	],
}
