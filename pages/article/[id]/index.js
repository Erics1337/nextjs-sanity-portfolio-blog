import {useRouter} from 'next/router'
import Link from 'next/link'
import { server } from '../../../config'
import Meta from '../../../components/Meta'

// getStaticProps will fetch at build time (muchfaster, used for static website)
// getServerSideProps will fetch data at request
// getStaticPaths will dynamically generate paths with all of the data


export const article = ({ article }) => {
    // const router = useRouter()
    // const {id} = router.query
    return (
        <>
        <Meta title={article.title} description={article.excerpt}/>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href='/'>Go Back</Link>
        </>
    )
}


export const getStaticProps = async (context) => {  // context allows us to get the id of whatever is in the url
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()
return {
    props: {
        article,
    },
}
}

// Fetched at build time, faster, use in static website
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map((article) => article.id)
    
    // Get every id of every post from json placeholder
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    // Generate paths
    return {
        paths,
        // If we go into something that doesnt exist in the data, will return 404 page
        fallback: false
    }
}


// export const getStaticProps = async (context) => {  // context allows us to get the id of whatever is in the url
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
// return {
//     props: {
//         article,
//     },
// }
// }

// // Fetched at build time, faster, use in static website
// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const articles = await res.json()

//     const ids = articles.map((article) => article.id)
    
//     // Get every id of every post from json placeholder
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         // If we go into something that doesnt exist in the data, will return 404 page
//         fallback: false
//     }
// }

export default article

