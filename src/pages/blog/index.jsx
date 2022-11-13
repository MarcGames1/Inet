
import React from 'react'
import { tw } from 'twind'
import Page from '@/components/page'
import { NextSeo } from 'next-seo'
import axios from 'axios'

const Blog = ({articles}) => {
  
  return (
    <><pre>{JSON.stringify(articles, null, 4)}</pre></>
 
    

    )
    
}

export default Blog



export async function getServerSideProps(context) {
  
  const res = await fetch('http://89.37.212.226:8000/api/posts');
 const data = await res.json()

    return {
    props: {articles: data}, // will be passed to the page component as props
  };
}