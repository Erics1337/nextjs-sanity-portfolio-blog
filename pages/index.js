import Image from 'next/image'
import ArticleList from '../components/ArticleList'
import { server } from '../config'


// We fetch dummy articles from api and return as props to this page, then pass into this component as props

export default function Home({articles}) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}


// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }


// 3 separate methods to fetch data
// getStaticProps will fetch at build time
// getServerSideProps will fetch data on every request (little slower)
// getStaticPaths dynamically generate paths based on data we are fetching