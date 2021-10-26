import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Toolbar from '../components/Toolbar'
import Hero from '../components/Hero'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import WhoAmI from '../components/WhoAmI';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Clients from '../components/Clients';
import Experience from '../components/Experience';
import Statistics from '../components/Statistics';
import Blog from '../components/Blog';
import Footer from '../components/Footer';


export default function Home({ posts }) {

  const [open, setOpen] = useState(false);
  
  const router = useRouter()

  // mapped array of posts that weve created and set inside of state
  const [mappedPosts, setMappedPosts] = useState([])

  useEffect(() => {
    // If no posts set it to empty array
    if (posts.length) {
        // ImageBuilder function
        const imgBuilder = imageUrlBuilder({
          projectId: 'ulqdo09f',
          dataset: 'production'
      })

      setMappedPosts(
        posts.map(post => {
          return {
            ...post,
            // All images will be same width and height
            mainImage: imgBuilder.image(post.mainImage).width(500).height(250)
          }
        })
      )
    } else {
      setMappedPosts([])
    }
  }, [posts])

  console.log(posts)
  return (
    <div>
      <Toolbar open={open} setOpen={setOpen}/>
      <Hero />
      <WhoAmI />
      <Services />
      <Portfolio />
      <Clients />
      <Experience />
      <Statistics />
      <Blog />
      <Footer />
    </div>
  )
}


export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent(`*[ _type == "project" ]`)
  const url = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query}`
  const result = await fetch(url).then(res => res.json())

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }

}