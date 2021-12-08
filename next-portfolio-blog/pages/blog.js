import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import PortableText from "react-portable-text"
import serializers  from '../utils/sanity';


// Used for links router.push
import { useRouter } from 'next/router'
import Footer from '../components/Footer';



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
      <section id="portfolio" className="flex flex-col min-h-screen ">
      <Navbar open={open} setOpen={setOpen} />
        <div className="bg-grey-50 flex-grow">
        <div className="container py-16 md:py-20">
          <h2 className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
            Welcome to the blog
          </h2>
          <h4 className="font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
            Check out these posts I wrote
          </h4>

          <div className="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-10 pt-12">
            {/* Posts */}
            {mappedPosts.map((post, index) => (
                <Link href={`/post/${post.slug.current}`} key={index}>
                  <div className="shadow cursor-pointer">
                <div
                  key={index}
                  style={{ backgroundImage: `url(${post.mainImage})` }}
                  className="bg-center bg-cover bg-no-repeat h-72 sm:h-84 lg:h-64 xl:h-72 relative group"
                >
                  <span className="bg-cover bg-no-repeat bg-center absolute inset-0 opacity-10 transition-opacity group-hover:opacity-50 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to"></span>
                  <span className="font-body font-bold text-sm md:text-base text-white border-2 border-white block px-6 py-2 uppercase rounded-full text-center absolute right-0 bottom-0 mr-4 mb-4">
                    Read More
                  </span>
                </div>
                <div className="bg-white py-6 xl:py-8 px-5">
                  <span className="font-body font-semibold text-lg text-black block">
                    {post.title}
                  </span>
                  <span className="font-body text-grey-20 pt-2 block">
                  <PortableText content={post.excerpt} serializers={serializers} projectId="ulqdo09f" dataset="production"  />

                  </span>
                </div>
              </div>
            </Link>
            ))}
           
          </div>
        </div>
      </div>

          <Footer />
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