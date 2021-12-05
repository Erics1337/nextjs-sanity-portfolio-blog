import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import BlockContent from '@sanity/block-content-to-react';
import Navbar from '../../components/Navbar'
import router from 'next/router';
import Footer from '../../components/Footer';

export const Project = ({ title, body, image, link }) => {
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
        <div className="flex flex-col justify-middle h-screen">
            <div className='mx-auto'>
                <Navbar open={open} setOpen={setOpen} />
            <div className={'flex flex-col md:flex-row'}>
                {/* If image exists in state then display it */}
                <div className={'p-5 max-w-3xl leading-6 text-justify'}>
                <h1 className='p-5 text-3xl font-semibold text-center'>{title}</h1>
                    <BlockContent blocks={post.body} projectId="ulqdo09f" dataset="production" />
                </div>
                {imageUrl && <img className={'mx-auto pl-4 w-2/3 max-w-3xl cursor-pointer hover:shadow-lg justify-center'} src={imageUrl} onClick={() => router.push(`${link}`)}/>}
            </div>
        </div>
        <div className="m-auto"></div>
          <Footer />
        </div>
        )
}

export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug
    
    // If theres no project with slug name, this will 404
    if(!pageSlug) {
        return {
            notFound: true
        }
    }

    // Create groq query to find project with slug name.  Needs to be enconded for URI
    const query = encodeURIComponent(`*[ _type == "project" && slug.current == "${pageSlug}" ]`);
    const url = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json())
    const project = result.result[0]

    if(!project) {
        return {
            notFound: true
        }
    } else {
        return {
            props: {
                categories: project.categories,
                title: project.title,
                date: project.date,
                image: project.mainImage,
                // subhead: project.subhead,
                body: project.body,
                tech: project.tech,
                link: project.link,
            }
        }
    }


}

export default Project