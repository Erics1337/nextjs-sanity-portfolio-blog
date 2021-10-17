import Head from 'next/head'
import Image from 'next/image'
import Projects from '../components/projects'
import Toolbar from '../components/toolbar'
import styles from '../styles/Home.module.css'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home({ projects }) {
  const router = useRouter()


  return (
    <div>
      <Toolbar />
      <Projects projects={projects}/>
    </div>
  )
}


export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent(`*[ _type == "project" ]`)
  const url = `https://ulqdo09f.api.sanity.io/v1/data/query/production?query=${query}`
  const result = await fetch(url).then(res => res.json())

  if (!result.result || !result.result.length) {
    return {
      props: {
        projects: [],
      }
    }
  } else {
    return {
      props: {
        projects: result.result,
      }
    }
  }

}