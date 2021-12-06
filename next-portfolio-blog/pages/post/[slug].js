import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import PortableText from "react-portable-text"

import Navbar from '../../components/Navbar'
// import serializers from '../../utils/sanity'
import Footer from '../../components/Footer';

const serializers = {
    h2: (props) => <h2 className={'font-semibold text-2xl mt-5 py-4'} {...props} />,
    li: ({ children }) => <li className="list-disc">{children}</li>,
    normal: ({ children }) => <p className="my-4">{children}</p>
}


export const Post = ({ title, body, image }) => {
    const [open, setOpen] = useState(false)
    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        // ImageBuilder function
        const imgBuilder = imageUrlBuilder({
            projectId: 'ulqdo09f',
            dataset: 'production'
        })

        // Set image in state using the imageBuilder that Sanity.io has given us
        setImageUrl(imgBuilder.image(image))
    }, [image]) // Dependency array
    

    return (
        <div>
            <section id="blogPost" className="flex flex-col min-h-screen ">
                <Navbar open={open} setOpen={setOpen} />
                <div className="bg-grey-50 flex-grow">
            <div className={'container'}>
                {/* If image exists in state then display it */}
                <h1 className={'text-center py-5 font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl'}>{title}</h1>
                {imageUrl && <img className={'w-50 py-5'} src={imageUrl} />}
                <div className={'flex justify-center py-5'}>
                    {/* <BlockContent blocks={body} projectId="ulqdo09f" dataset="production" imageOptions={{w: 400, h: 240, fit: 'max'}}/> */}
                    <PortableText
                    className={'justify-content-center'}
                    imageOptions={{w: 400, h: 240, fit: 'max'}}
                        projectId="ulqdo09f" dataset="production"
                        content={body}
                        // Optionally override marks, decorators, blocks, etc. in a flat
                        // structure without doing any gymnastics
                        serializers={serializers}
                    />
                </div>
            </div>
            </div>
            <Footer />
            </section>
        </div>
        )
}

export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug
    
    // If theres no post with slug name, this will 404
    if(!pageSlug) {
        return {
            notFound: true
        }
    }

    // Create groq query to find post with slug name.  Needs to be enconded for URI
    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
    const url = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json())
    const post = result.result[0]

    if(!post) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                body: post.body,
                title: post.title,
                image: post.mainImage,
            }
        }
    }


}

export default Post