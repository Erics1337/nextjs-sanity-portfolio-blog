import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import BlockContent from '@sanity/block-content-to-react';
import Navbar from '../../components/Navbar'

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
                <Navbar open={open} setOpen={setOpen} />
            <div className={'text-center mx-auto'}>
                <h1>{title}</h1>
                {/* If image exists in state then display it */}
                {imageUrl && <img className={'w-50'} src={imageUrl} />}
                <div className={'pt-4 pb-4 font-semibold leading-3'}>
                    <BlockContent blocks={body} />
                </div>
            </div>
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