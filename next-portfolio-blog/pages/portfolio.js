import Head from "next/head"
import Image from "next/image"
import imageUrlBuilder from "@sanity/image-url"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PortableText from "react-portable-text"


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
      <Navbar open={open} setOpen={setOpen} />
      <div className="flex flex-col justify-between h-screen bg-grey-50">
    {/* <div className={'bg-grey-50'}> */}
    <div className='py-10'>
      <h2 className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
            Welcome to my Portfolio
          </h2>
          <h4 className="font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
            Check out some of my projects below
          </h4>
        </div>

          <div className={"flex-none md:flex justify-center mb-auto"}>
            {mappedProjects.length ? (
              mappedProjects.map((project, index) => (
                <div key={index} className={"m-2 text-center group"}>
                  <h1 className='text-1xl sm:text-2xl lg:text-3xl text-primary'>{project.title}</h1>
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
                    <PortableText className='inline-flex font-semibold space-x-2' content={project.tech} projectId="ulqdo09f" dataset="production" />
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
