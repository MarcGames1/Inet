
import React, { ComponentType, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { NextSeo } from 'next-seo';


import { PostWrapper } from "../../context/postContext"

import client from '../../utils/client';
import { AllPostsUri, AllPostsUrls, PostsQuery, PostDataByUri } from '../../utils/WPQuerys';


const Page = dynamic(() => import('@/components/page'));



const BlogPage = ({ featuredImage, author, blocks }) => {
  console.log('BlogPage p=> ', blocks);
  return (
    <PostWrapper value={{ featuredImage: featuredImage }}>
      <pre>{JSON.stringify(blocks)}</pre>
    </PostWrapper>
  );
};





export default BlogPage;




export async function getStaticProps(context) {
  const currentUri = context.params.blog_uri;
console.log(PostDataByUri(currentUri))
  console.log(context.params)
  const { data } = await client.query({
    query: gql(PostDataByUri(currentUri)),
  });
console.log(data)
  return {
    props: {
      featuredImage: data.nodeByUri?.featuredImage?.node?.sourceUrl || null,
      // author: data.nodeByUri.author,
      blocks: data.nodeByUri.blocksJSON,
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