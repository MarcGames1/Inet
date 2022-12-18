import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { tw } from 'twind'
import { NextSeo } from 'next-seo'
import client from '../../utils/client'
import { cleanAndTransformBlocks } from '../../utils/cleanAndTransformBlocks';




import Page from '@/components/page'

import { AuthorPageQ } from '../../utils/WPQuerys'
import { gql } from '@apollo/client'
import  BlockRenderer  from '../../components/BlockRenderer/BlockRenderer';


const Membru = ({ blocks, author, featuredImage, other }) => {
  console.log(other)
  return (
    <>
    <Page>

      <section className={tw('min-h-screen block')}>
        <div className={tw('container relative h-3/6	')}>
          <div className={tw('w-full h-[300px] p-3 m-3 relative block')}>
            <Image src={featuredImage.node.sourceUrl} objectFit="contain" layout="fill" />
            
          </div>
          <h1 className={tw('text-center text-large')}>
            {author.node.lastName} {author.node.firstName}
            <span className={tw('block text-indigo-300')}>{author.node.description}</span>
          </h1>
        </div>
        <BlockRenderer blocks={blocks} />;
      </section>
    </Page>
    </>
  );
};

export default Membru




export async function getStaticProps() {
    

    const { data } = await client.query({
      query: gql`
      ${AuthorPageQ}
      `
    });

    console.log(data)
    const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);

    return {
      props: {
        featuredImage: data.nodeByUri.featuredImage,
        author:data.nodeByUri.author,
       other:data,
        blocks,
      },
    };
}


