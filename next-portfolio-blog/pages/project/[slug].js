import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import BlockContent from '@sanity/block-content-to-react';
import styles from '../../styles/Post.module.css'
import Navbar from '../../components/Navbar'
import router from 'next/router';

export const Project = ({ title, body, image, link }) => {
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
            <Navbar />
            <div className={styles.main}>
                <h1 className='p-5 text-3xl font-semibold text-center'>{title}</h1>
                {/* If image exists in state then display it */}
                {imageUrl && <img className={styles.mainImage} src={imageUrl} onClick={() => router.push(`${link}`)}/>}
                <div className={styles.body}>
                    <BlockContent blocks={body} />
                </div>
            </div>
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
                body: project.body,
                title: project.title,
                image: project.mainImage,
                link: project.link,
            }
        }
    }


}

export default Project