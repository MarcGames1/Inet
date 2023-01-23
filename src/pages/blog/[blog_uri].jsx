
import React, { ComponentType, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { NextSeo } from 'next-seo';
import { cleanAndTransformBlocks } from '../../utils/cleanAndTransformBlocks';

// import { PostWrapper } from "../../context/postContext"

import client from '../../utils/client';
import { AllPostsUri, AllPostsUrls, PostsQuery, PostDataByUri } from '../../utils/WPQuerys';
import BlockRenderer from '../../components/BlockRenderer/BlockRenderer';
import { PostWrapper } from '../../context/blogPost';


const Page = dynamic(() => import('../../components/page'));
const ErrorPage = dynamic(() => import('../../components/ErrorPage'));



const BlogPage = (props) => {
 
const { content, title, author, featuredImage, blocks, seo } = props;

console.log(seo)

  if (!content || !blocks || !featuredImage || !title || !author) {
    return <ErrorPage />;
  }
  
 
  return (
    <Page>

      <PostWrapper
        value={{
          title,
          featuredImage,
          author,
        }}
        >
        <>
        <NextSeo title={seo?.title}  description={seo?.description}/>
          {blocks ? <BlockRenderer blocks={blocks} /> : <>Loading...</>}
        
        </>
      </PostWrapper>
      </Page>
    
  );
};





export default BlogPage;




export async function getStaticProps(context) {
  const currentUri = context.params.blog_uri;
  

  const { data } = await client.query({
    query: gql(PostDataByUri(currentUri)),
  });

  let blocks, author, title, content, featuredImage, seo;
  if (data && data.postBy ) {
  
    blocks = cleanAndTransformBlocks(data.postBy.blocksJSON);
    
    
    author = data.postBy.author || '';
    title = data.postBy.title || '';
    content = data.postBy.content || '';
    featuredImage = data.postBy.featuredImage || '';
    seo = data.postBy.seo || '';
  }

   if (!data || !data.postBy) {
     return {
       props: {},
     };
   }


  return {
    props: {
      blocks,
      content,
      title ,
      author,
      featuredImage,
      seo,
    },
  };
}




export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql(AllPostsUri()),
  });

  const posts = data.posts.edges;
  const paths = posts.map((post) => ({
    params: { blog_uri: post.node.uri },
  }));
  
  
  return {
    paths,
    fallback: true,
  };
}