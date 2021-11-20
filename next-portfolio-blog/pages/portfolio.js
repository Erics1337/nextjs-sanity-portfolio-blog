import Head from "next/head"
import Image from "next/image"
import imageUrlBuilder from "@sanity/image-url"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BlockContent from "@sanity/block-content-to-react"


export default function Portfolio({ projects }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  // mapped array of projects that weve created and set inside of state
  const [mappedProjects, setMappedProjects] = useState([])

  useEffect(() => {
    // If no projects set it to empty array
    if (projects.length) {
      // ImageBuilder function
      const imgBuilder = imageUrlBuilder({
        projectId: "ulqdo09f",
        dataset: "production",
      })

      setMappedProjects(
        projects.map((project) => {
          return {
            ...project,
            // All images will be same width and height
            mainImage: imgBuilder
              .image(project.mainImage)
              .width(500)
              .height(250),
          }
        })
      )
    } else {
      setMappedProjects([])
    }
  }, [projects])

  return (
    <>
      <section id="portfolio">
      <div className="flex flex-col justify-between h-screen">
      <Navbar open={open} setOpen={setOpen} />

        <div className={"text-center mb-5"}>
          <h1 className="font-bold text-3xl text-primary py-5">My Portfolio</h1>
          <h3 className="py-2 text-secondary">Check Out My Recent Projects</h3>
        </div>

          <div className={"flex-none md:flex justify-center mb-auto"}>
            {mappedProjects.length ? (
              mappedProjects.map((project, index) => (
                <div key={index} className={"m-2 text-center group"}>
                  <h1 className='font-semibold text-primary'>{project.title}</h1>
                  <img
                    className={
                      "m-2 cursor-pointer hover:shadow-lg transition ease-in duration-75 rounded mx-auto"
                    }
                    src={project.mainImage}
                    onClick={() =>
                      router.push(`/project/${project.slug.current}`)
                    }
                  />
                  <div className='hidden group-hover:block'>
                    <h3>Tech Used: </h3>
                    <BlockContent className='inline-flex font-semibold space-x-2' blocks={project.tech} projectId="ulqdo09f" dataset="production" />
                  </div>
                </div>
              ))
            ) : (
              <div>No Projects Yet</div>
            )}
          </div>
          <div className="h-500"></div>
          <Footer />
        </div>
      </section>
    </>
  )
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent(`*[ _type == "project" ]`)
  const url = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query}`
  const result = await fetch(url).then((res) => res.json())

  // If no project projects
  if (!result.result || !result.result.length) {
    return {
      props: {
        projects: [],
      },
    }
  } else {
    return {
      props: {
        projects: result.result,
      },
    }
  }
}
