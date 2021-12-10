
import Navbar from '../components/Navbar'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'

// Used for links router.push
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import BlogCard from '../components/BlogCard'



export default function Blog({ posts, allCategories }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [currentCategory, setCurrentCategory] = useState('')
  const [mappedPosts, setMappedPosts] = useState([])

  useEffect(() => {

        // ImageBuilder function
        const imgBuilder = imageUrlBuilder({
          projectId: 'ulqdo09f',
          dataset: 'production'
      })

      // check each category of each post to see if it matches the current category, if so add it to the mappedPosts array
      setMappedPosts(
        posts.map(post => {
          if (!currentCategory == '') {
            if (post.categories.includes(currentCategory)) {
              return {
                ...post,
                mainImage: imgBuilder.image(post.mainImage).width(500).height(250)
              }
            } else return {}
          } else return {
            ...post,
            mainImage: imgBuilder.image(post.mainImage).width(500).height(250)
          }
        })
        )
  }, [currentCategory])

  return (
    <>
      <section id="portfolio" className="flex flex-col h-screen ">
      <Navbar open={open} setOpen={setOpen} />
        <div className="bg-grey-50 flex-grow">
        <div className="container py-16 md:py-20">
          <h2 className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
            Welcome to the blog
          </h2>
          <h4 className="font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
            Check out these posts I wrote
          </h4>

          <div className="flex flex-1 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
              {/* Posts */}
              
              {!Object.keys(mappedPosts).length == 0 ? (mappedPosts.map((post, index) => 
              Object.keys(post).length ? 
                  <BlogCard post={post} content={post?.excerpt} index={index} />
                :
                <div className={'w-100'}></div>
                  
              ))
              
                  :
                  (
                  <div className="">No Posts In This Category</div>
                    )
              }
            </div>

            <div className=''>
              <nav className={'hidden sm:block pl-3 sticky top-18 text-right'}>
                <div className={'border-r'}>
                  <ul className={'flex flex-col mr-3'}>
                  <h1 onClick={() => setCurrentCategory('')} 
                      className={`underline font-semibold text-xl py-4 cursor-pointer
                          ${currentCategory == '' ? 'text-primary hover:text-secondary' : 'text-grey-10 hover:text-secondary'}
                          group`}>Post Categories</h1>
                    {allCategories.map((element, index) => (
                      <li
                        key={index}
                        className={
                          `text-xl py-4 cursor-pointer
                          ${currentCategory == element ? 'text-primary hover:text-secondary' : 'text-grey-10 hover:text-secondary'}
                          group`
                        }
                        onClick={() => setCurrentCategory(element)}
                      >
                          {element}
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
              </div>

          </div>
        </div>
      </div>
          <Footer />
      </section>
    </>
  )
}


export const getServerSideProps = async () => {
  const query = encodeURIComponent(`*[ _type == "post" ]{..., 'categories': categories[]->title}`)
  const url = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query}`
  const result = await fetch(url).then(res => res.json())

  const query2 = encodeURIComponent(`*[ _type == "category" ]{title}`);
  const url2 = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query2}`;

  const result2 = await fetch(url2).then(res => res.json())
  const allCategories = result2.result.map(category => category.title)


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
        allCategories: allCategories
      }
    }
  }
}