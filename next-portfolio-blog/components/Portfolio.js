import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Projects({ projects }) {
    const router = useRouter()

  // mapped array of projects that weve created and set inside of state
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
    <section id="portfolio">
      <div className={styles.main}>
        <h1>My Projects</h1>
        <h3>Recent Projects:</h3>

        <div className={styles.feed}>
          {mappedProjects.length ? 
            mappedProjects.map((project, index) => (<div key={index} className={styles.post} onClick={() => router.push(`/project/${project.slug.current}`)}>
              <h3>{project.title}</h3>
              <img className={styles.mainImage} src={project.mainImage} />
            </div>))
          : <>No Projects Yet</>}
        </div>
      </div>
    </section>
  )
}

export default Projects

// export const getServerSideProps = async pageContext => {
//   const query = encodeURIComponent(`*[ _type == "project" ]`)
//   const url = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query}`
//   const result = await fetch(url).then(res => res.json())

//     // If no project projects
//   if (!result.result || !result.result.length) {
//     return {
//       props: {
//         projects: [],
//       }
//     }
//   } else {
//     return {
//       props: {
//         projects: result.result,
//       }
//     }
//   }

// }