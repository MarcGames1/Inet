
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


const Page = dynamic(() => import('@/components/page'));



const BlogPage = ({ content, blocks, featuredImage }) => {
 
  return (
    <>
      {blocks ? <BlockRenderer blocks={blocks} /> : <>test</>}
      {/* <BlockRenderer blocks={blocks} /> */}
      {/* <div dangerouslySetInnerHTML={{__html: props.content}}></div> */}
      {/* <pre>{JSON.stringify(props.blocks, null, 3)}</pre> */}
    </>
  );
};





export default BlogPage;




export async function ServerSideProps(context) {
  const currentUri = context.params.blog_uri;
console.log(PostDataByUri(currentUri))
  
  const { data } = await client.query({
    query: gql(PostDataByUri(currentUri)),
  });

const blocks = cleanAndTransformBlocks(data.postBy.blocksJSON);
const content = data.postBy.content
return {
  props: {
      blocks,
      content,
      featuredImage:
        (data &&
          data.postBy &&
          data.postBy.featuredImage &&
          data.postBy.featuredImage.node &&
          data.postBy.featuredImage.node.sourceUrl) ||
        null,
    },
  };
}





// export async function getStaticPaths() {
//   const { data } = await client.query({
//     query: gql(AllPostsUri()),
//   });

//   const posts = data.posts.edges;

//   const paths = posts.map((post) => ({
//     params: { blog_uri: post.node.uri },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }