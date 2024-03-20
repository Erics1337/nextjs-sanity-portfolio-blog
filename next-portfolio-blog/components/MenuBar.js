import React from "react"

const MenuBar = ({ selectedCategory, setSelectedCategory }) => {
	const categories = [
		"All",
		"Enterprise",
		"Small Business",
		"Academic",
		"Web App",
		"Mobile App",
	]

	return (
		<div className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 p-2 sm:p-4 bg-gray-200 dark:bg-gray-800 rounded-md">
			{categories.map((category) => (
				<button
					key={category}
					onClick={() => setSelectedCategory(category)}
					className={`
                        px-2 sm:px-4 py-1 sm:py-2 rounded-md font-medium text-sm sm:text-base
                        text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                        focus:ring-blue-400 dark:focus:ring-blue-300
                        ${
													selectedCategory === category
														? "bg-blue-400 dark:bg-blue-600 text-white"
														: ""
												} 
                    `}
				>
					{category}
				</button>
			))}
		</div>
	)
}

export default MenuBar
