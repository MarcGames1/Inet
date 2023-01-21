
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


const Page = dynamic(() => import('@/components/page'));
const ErrorPage = dynamic(() => import('@/components/ErrorPage'));



const BlogPage = (props) => {
 
const { content, title, author, featuredImage, blocks } = props;



  if (!content || !blocks || !featuredImage || !title || !author) {
    return <ErrorPage />;
  }
  console.log(blocks)
 
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
          {blocks ? <BlockRenderer blocks={blocks} /> : <>test</>}
          {/* <BlockRenderer blocks={blocks} /> */}
          {/* <div dangerouslySetInnerHTML={{__html: props.content}}></div> */}
          {/* <pre>{JSON.stringify(props.blocks, null, 3)}</pre> */}
        </>
      </PostWrapper>
      </Page>
    
  );
};





export default BlogPage;




export async function getStaticProps(context) {
  const currentUri = context.params.blog_uri;
  console.log("POSTDATABYURI- >>>>    ",PostDataByUri(currentUri));

  const { data } = await client.query({
    query: gql(PostDataByUri(currentUri)),
  });

  let blocks, author, title, content, featuredImage;
  if (data && data.postBy ) {
  
    blocks = cleanAndTransformBlocks(data.postBy.blocksJSON);
    
    
    author = data.postBy.author || '';
    title = data.postBy.title || '';
    content = data.postBy.content || '';
    featuredImage = data.postBy.featuredImage || '';
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
  
  console.log(paths, 'Get Static paths');
  return {
    paths,
    fallback: true,
  };
}