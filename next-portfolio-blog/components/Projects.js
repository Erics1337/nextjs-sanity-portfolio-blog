import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"

function Portfolio({ projects }) {
    const router = useRouter()

    const [mappedProjects, setMappedProjects] = useState([])

    useEffect(() => {
        // If no projects set it to empty array
        if (projects.length) {
            // ImageBuilder function
            const imgBuilder = imageUrlBuilder({
              projectId: 'ulqdo09f',
              dataset: 'production'
          })
    
          setMappedProjects(
            projects.map(project => {
              return {
                ...project,
                // All images will be same width and height
                mainImage: imgBuilder.image(project.mainImage).width(500).height(250)
              }
            })
          )
        } else {
          setMappedProjects([])
        }
      }, [projects])

  return (
    <section id="projects">
      <div className="container py-16 md:py-20">
        <h2 className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
          Check out my Portfolio
        </h2>
        <h3 className="font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
          Here are some examples of what I have created
        </h3>

        <div className="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-12">

        {/* Projects */}
        {mappedProjects.map(
            (project, index) => (
            <div key={index} className='transition-all transform hover:scale-105' 
            onClick={() => router.push(`/project/${project.slug.current}`)}>
              <div class="w-full h-80 relative cursor-pointer" onClick={() => router.push(`/project/${project.slug.current}`)}>
                <div className='absolute inset-0 bg-cover bg-center z-0' 
                    style={{backgroundImage: `url(${project.mainImage})`}}
                    />
                <div className="p-2 opacity-0 hover:bg-primary hover:bg-opacity-80 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
                    {project.title}
                </div>
                </div>
            </div>
            ))}
         
        </div>
      </div>
    </section>
  )
}

export default Portfolio