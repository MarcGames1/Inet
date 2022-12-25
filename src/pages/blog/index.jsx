import React, { ComponentType, Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { tw } from 'twind';
import { NextSeo } from 'next-seo';

import { AllPostsUri, AllPostsUrls, PostsQuery } from '../../utils/WPQuerys';

import client from '../../utils/client';

import Link from 'next/link';
import Image from 'next/image';
import { handleError } from '@apollo/client/link/http/parseAndCheckHttpResponse';

const Page = dynamic(() => import('@/components/page'));
const Button = dynamic(() => import('@/components/button'));

const GET_POSTS = gql(PostsQuery(1));

const Blog = ({ posts, pageCount, currentPage }) => {


  
  return (
    <Page>
      <section className={tw('')}>
        <aside>aside</aside>
        <main>
          <h1 className={tw('text-center m-3')}>Blog SEO Marweb</h1>
          <div className={tw('grid-cols-1 lg:grid-cols-3 gap-4	grid  items-strech')}>
            {posts.map((post) => (
              <div className={tw('max-h-min grid-rows-6 grid')}>
                <div className={tw('justify-self-start row-span-2 p-3 self-start')}>
                  <Image
                    layout="intrinsic"
                    width={1200}
                    height={600}
                    objectFit="cover"
                    src={post.node?.featuredImage?.node?.sourceUrl}
                    alt={post.node.title || post.node?.featuredImage?.node?.alt}
                  />
                </div>
                <h2
                  className={tw(
                    'row-span-1 self-start	justify-self-center	 antialiased text-center  text-lg text-gray-900 font-semibold',
                  )}
                >
                  {post.node.title}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.node.excerpt || '<p class="text-center">Citeste mai multe aici</p>',
                  }}
                  className={tw('row-span-2 m-2')}
                ></div>
                <div className={tw('m-1 self-end span-1 justify-self-center')}>
                  {' '}
                  <Button>citeste mai mult</Button>
                </div>
              </div>
            ))}
          </div>
        </main>

        <div className={tw('flex gap-3 flex-row  border-4 ')}>
          {currentPage > 1 && <Button>Prev</Button>}
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
            <Button>{page}</Button>
          ))}
          {currentPage < pageCount && <Button>Next</Button>}
        </div>
      </section>
    </Page>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GET_POSTS,
  });


  const pageCount = Math.ceil(data.posts.edges.length / 10);

  return {
    props: {
      posts: data.posts.edges,
      pageCount
    },
  };
};

export default Blog;
