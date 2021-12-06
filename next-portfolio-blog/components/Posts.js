import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react';
import BlockContent from "@sanity/block-content-to-react"
import Link from 'next/link';


function Posts({ posts }) {
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
                mainImage: imgBuilder.image(post.mainImage).width(500).height(250)
              }
            })
          )
        } else {
          setMappedPosts([])
        }
      }, [posts])
      
  return (
    <section id="posts">
      <div className="bg-grey-50" id="blog">
        <div className="container py-16 md:py-20">
        <Link href={'/blog'} >
          <h2 className="font-header cursor-pointer hover:text-secondary font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
            Check out these posts I wrote
          </h2>
        </Link>
          <h4 className="font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
            I like to share the knowledge I learn!
          </h4>
          <div className="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-10 pt-12">

            {/* Posts */}
            {mappedPosts.map((post, index) => (
                <Link href={`/post/${post.slug.current}`} >
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
                  {/* <span className="font-body text-grey-20 pt-2 block">
                  <BlockContent blocks={post.body} projectId="ulqdo09f" dataset="production" />

                  </span> */}
                </div>
              </div>
            </Link>
            ))}
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Posts
