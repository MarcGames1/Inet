import { gql } from '@apollo/client';

import React from 'react';
import { tw } from 'twind';
import Page from '@/components/page';
import { NextSeo } from 'next-seo';

import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { typography, colors } from '@/../js/utils';
import Button from '@/components/button';
import { cleanAndTransformBlocks } from '@/utils/cleanAndTransformBlocks';
import client from '@/utils/client';

const Api = process.env.NEXT_PUBLIC_API;
const Blog = (props) => {
  console.log(props)
  return (<>blog</>
    // <>
    //   {Array.isArray(articles) ? (
    //     <>
    //       <Page>
    //         <section>
    //           <SectionHeader titlu={'BLOG IwebAgency'} />
    //           <div className={tw('container m-10')}>
    //             <div className={tw('grid gap-10 grid-cols-3')}>
    //               {articles.map((article, idx) => {
    //                 return (
    //                   <article
    //                     className={tw('bg-indigo-50 flex justify-evenly items-center	flex-col gap-4 p-5')}
    //                     key={idx}
    //                   >
    //                     <Link href={`/blog/${article.slug}`}>
    //                       <a>
    //                         <div className={tw('flex flex-col items-center justify-items-around')}>
    //                           <Image
    //                             src={path.join(Api, ...article.image)}
    //                             width={150}
    //                             height={150}
    //                             alt={article.title}
    //                             layout="intrinsic"
    //                             loading="lazy"
    //                           />
    //                         </div>
    //                       </a>
    //                     </Link>
    //                     <h3 className={typography.heading.default}>{article.title}</h3>
    //                     <p>{article?.excerpt}</p>
    //                     <ul>
    //                       {article.categories.map((cat) => {
    //                         return (
    //                           <li className={tw('text-gray-400')} key={cat._id}>
    //                             # {cat.name}
    //                           </li>
    //                         );
    //                       })}
    //                     </ul>
    //                     <span className={tw('text-gray-400')}>
    //                       articol revizuit de{' '}
    //                       <Link href={`/echipa/${article.author.slug}`}>
    //                         <a>
    //                           {article.author.nume} {article.author.prenume}
    //                         </a>
    //                       </Link>
    //                     </span>
    //                     <Link href={`/blog/${article.slug}`}>
    //                       <a>
    //                         <Button primary>Citeste mai mult</Button>
    //                       </a>
    //                     </Link>
    //                   </article>
    //                 );
    //               })}
    //             </div>
    //           </div>
    //         </section>
    //       </Page>
    //       <pre>{JSON.stringify(articles, null, 4)}</pre>{' '}
    //     </>
    //   ) : null}
    // </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query PageQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocksJSON
            title
          }
        }
      }
    `,
  });

  // console.log(data.acfOptionsMainMenu.mainMenu.menuItems.menuItems);
  // const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
  return {
    props: {
      blocks: data
    },
  };
};
