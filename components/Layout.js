import React from 'react'
import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Meta from './Meta'


// We want this to wrap around our page component, so we pass it in as a prop as a child
const Layout = ({children}) => {
    return (
        // Need to return one single parent element so you can wrap divs you want to be separate in an empty angle bracket
        <>
        <Meta />
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout