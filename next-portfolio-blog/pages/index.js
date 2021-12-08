import Head from "next/head"
import Image from "next/image"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Portfolio from "../components/Projects"
import Clients from "../components/Clients"
import Experience from "../components/Experience"
import Statistics from "../components/Statistics"
import Posts from "../components/Posts"
import Footer from "../components/Footer"
import Contact from "../components/Contact"

export default function Home({ projects, posts }) {
  const [open, setOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      {showButton && (

        <button onClick={scrollToTop}
        className="fixed bottom-20 right-20 z-20 bg-transparent hover:bg-primary text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  &#8679;

      </button>
      )}
      <Navbar open={open} setOpen={setOpen} />
      <Hero />
      <About />
      <Services />
      <Portfolio projects={projects} />
      {/* <Clients /> */}
      <Experience />
      <Statistics />
      <Posts posts={posts} />
      <Contact />
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query1 = encodeURIComponent(`*[ _type == "project" ] | order(_createdAt asc) [0...4]`)
  const url1 = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query1}`
  const projects = await fetch(url1).then((res) => res.json())

  const query2 = encodeURIComponent(
    `*[ _type == "post" ] | order(_createdAt asc) [0...3]`
  )
  const url2 = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query2}`
  const posts = await fetch(url2).then((res) => res.json())

  if (
    !projects.result ||
    !projects.result.length ||
    !posts.result ||
    !posts.result.length
  ) {
    return {
      props: {
        projects: [],
        posts: [],
      },
    }
  } else {
    return {
      props: {
        projects: projects.result,
        posts: posts.result,
      },
    }
  }
}
