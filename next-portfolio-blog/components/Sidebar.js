import React, { useState } from "react"
import { useRouter } from 'next/router'
import { blogState } from '../atoms/blogAtom'
import { useRecoilState } from "recoil";



const Sidebar = ({ categories = [], allCategories = [] }) => {
  const [currentCategory, setCurrentCategory] = useRecoilState(blogState)
  const router = useRouter()

  return (
  <div>
  <nav className={'hidden sm:block pl-3 sticky top-18 text-right'}>
    <div className={'border-r'}>
      <ul className={'flex flex-col mr-3'}>
      <h1 onClick={() => {setCurrentCategory(''); router.push('/blog')}}
          className={`underline font-semibold text-xl py-4 cursor-pointer
              ${currentCategory == '' ? 'text-primary hover:text-primaryHover' : 'text-grey-10 hover:text-secondaryHover'}
              group`}>Post Categories</h1>
        {allCategories.map((element, index) => (
          <li
            key={index}
            className={
              `text-xl py-4 cursor-pointer
              ${categories.includes(element) || currentCategory == element ? 'text-primary hover:text-primaryHover' : 'text-grey-10 hover:text-secondary'}
              group`
            }
            onClick={() => {setCurrentCategory(element); router.push('/blog')}}
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
