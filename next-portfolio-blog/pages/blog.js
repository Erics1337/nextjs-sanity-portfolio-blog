import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'

// Used for links router.push
import { useRouter } from 'next/router'

export default function Blog({ posts }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

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

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <section id="blog" className={'text-center'}>
        <h1>Welcome To My Blog</h1>
        <h3>Recent Posts:</h3>

        <div className={'flex flex-col items-center'}>
          {mappedPosts.length ? 
            mappedPosts.map((post, index) => (<div key={index} className={'m-4 w-50 h-40 cursor-pointer text-center max-w-2/3'} onClick={() => router.push(`/post/${post.slug.current}`)}>
              <h3>{post.title}</h3>
              <img className={'w-75 hover:w-100 transition delay-75 rounded max-w-1/3 shadow-md'} src={post.mainImage} />
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