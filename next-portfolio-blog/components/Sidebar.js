import React, { useState } from "react";


const Sidebar = ({ categories = [], allCategories = [] }) => {
// This will highlight the categories of the current post
  const [currentCategory, setCurrentCategory] = useState(categories)

  return (
  <div>
    <nav className={'hidden sm:block pl-3 sticky top-18 text-right'}>
      <div className={'border-r'}>
        <ul className={'flex flex-col mr-3'}>
        <h1 className={'underline font-semibold'}>Post Categories</h1>
          {allCategories.map((element, index) => (
            <li
              key={index}
              className={
                `text-gray-400 hover:text-gray-800 text-xl py-4 cursor-pointer
                ${categories.includes(element) || currentCategory == element && 'text-primary hover:text-secondary'}
                group`
              }
              onClick={() => setCurrentCategory(element)}
            >
                {element}
            </li>
          ))}
        </ul>
      </div>
    </nav>
    </div>
  )
}


export default Sidebar
