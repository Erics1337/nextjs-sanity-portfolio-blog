import '../styles/globals.css'
import Layout from '../components/Layout'

// Wraps around all of page components
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
