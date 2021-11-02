import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'

// Used for links router.push
import { useRouter } from 'next/router'

export default function Blog({ posts }) {
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
    <>
      <Navbar />
      <section id="blog" className={styles.main}>
        <h1>Welcome To My Blog</h1>
        <h3>Recent Posts:</h3>

        <div className={styles.feed}>
          {mappedPosts.length ? 
            mappedPosts.map((post, index) => (<div key={index} className={styles.post} onClick={() => router.push(`/post/${post.slug.current}`)}>
              <h3>{post.title}</h3>
              <img className={styles.mainImage} src={post.mainImage} />
            </div>))
          : <>No Posts Yet</>}
        </div>
      </section>
    </>
  )
}


export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent(`*[ _type == "post" ]`)
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