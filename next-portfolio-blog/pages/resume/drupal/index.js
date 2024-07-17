import React from "react"

const DrupalResume = () => {
	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
				<iframe
					src="/Eric_Swanson_Drupal_Developer_Resume.pdf"
					className="w-full h-screen"
					title="Drupal Resume"
				/>
			</div>
		</div>
	)
}

export default DrupalResume
