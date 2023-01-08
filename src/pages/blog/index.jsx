import React, { ComponentType, Suspense, useEffect, useState, useContext } from 'react';
import dynamic from 'next/dynamic';
import {  gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { tw } from 'twind';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { AllPostsUri, AllPostsUrls, PostsQuery } from '../../utils/WPQuerys';

import client from '../../utils/client';

import Link from 'next/link';
import Image from 'next/image';


const Page = dynamic(() => import('@/components/page'));
const Button = dynamic(() => import('@/components/button'));

const GET_POSTS = gql(PostsQuery(1));




const Blog = ({ posts, pageCount }) => {
  
  const router = useRouter()
  const { page } = router.query;
  const currentPageRender = page ? parseInt(page, 10) : 1;
  const [currentPage, setCurrentPage] = useState(page ? parseInt(page, 10) : 1);
  const [currentPosts, setCurrentPosts] = useState((posts && posts.slice(0, 10)) || []);
  
  const query_posts = async (page) =>{
    try {
      const { data } = await client.query({
       query: gql(PostsQuery(page)),
     });

     setCurrentPosts(data.posts.edges)
      
    } catch (error) {
      console.log(error)
    }
  }
console.log("CURRENT POSTS => ",currentPosts)
console.log(currentPosts)

console.log(currentPage)
     useEffect(() => {
       query_posts(currentPage)
     }, [currentPage]);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      const start = (currentPage - 2) * 10;
      const end = start + 10;
      setCurrentPage(currentPage - 1);
      setCurrentPosts(posts.slice(start, end));
      router.push({
        pathname: '/blog',
        query: { page: currentPage - 1 },
      });
    }
  };


  const handleNumClick = (page) => 
    {
      setCurrentPage(page);
      router.push({
        pathname: '/blog',
        query: { page },
      });
    
  };

  const handleNextClick = () => {
    if (currentPage < pageCount) {
      const start = currentPage * 10;
      const end = start + 10;
      setCurrentPage(currentPage + 1);
      setCurrentPosts(posts.slice(start, end));
      router.push({
        pathname: '/blog',
        query: { page: currentPage + 1 },
      });
    }
  };
  return (
    <>
      <Head>
        {currentPage < pageCount ? (
          <link rel="next" href={`http://localhost:3000/blog?page=${currentPage + 1}`} />
        ) : null}
        {currentPage > 1 ? <link rel="prev" href={`http://localhost:3000/blog?page=${currentPage - 1}`} /> : null}
      </Head>
      <NextSeo canonical="http://localhost:3000/blog" robotsProps={'index, follow'} />
      <Page>
        <section className={tw('')}>
          {/* <aside>aside</aside> */}
          <main>
            <h1 className={tw('text-center m-3')}>Blog SEO Marweb {page}</h1>
            <div className={tw('grid-cols-1 lg:grid-cols-3 gap-4	grid  items-strech')}>
              {currentPosts?.map((post) => (
                <div className={tw('max-h-min grid-rows-6 grid')}>
                  <div className={tw('justify-self-start row-span-2 p-3 self-start')}>
                    <Link href={`/blog${post.node.uri}`}>
                      <a>
                        <Image
                          layout="intrinsic"
                          width={1200}
                          height={600}
                          objectFit="cover"
                          src={post.node?.featuredImage?.node?.sourceUrl}
                          alt={post.node.title || post.node?.featuredImage?.node?.alt}
                        />
                      </a>
                    </Link>
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
                    <Link href={`/blog${post.node.uri}`}>
                      <Button>citeste mai mult</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </main>

          <div className={tw('flex gap-3 flex-row  border-4 ')}>
            {currentPage > 1 && <Button onClick={handlePrevClick}>Prev</Button>}
            {Array.from({ length: pageCount }, (_, i) => i + 1)
              .slice(0, 2)
              .concat(pageCount > 4 ? ['...', pageCount - 1, pageCount] : [])
              .map((page) => (
                <Button
                  onClick={() => {
                    handleNumClick(page);
                  }}
                >
                  {page}
                </Button>
              ))}
            {currentPage < pageCount && <Button onClick={handleNextClick}>Next</Button>}
          </div>
        </section>
      </Page>
    </>
  );
};
export default Blog;

export const getStaticProps = async (context) => {
  const { data } = await client.query({
    query: GET_POSTS,
  });

  const pageCount = Math.ceil(Number(data.posts.pageInfo.offsetPagination.total) / 10);

  console.log(pageCount);

  return {
    props: {
      posts: data.posts.edges,
      pageCount,
    },
  };
};





