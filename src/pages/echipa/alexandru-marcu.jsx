import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { tw } from 'twind'
import { NextSeo } from 'next-seo'
import client from '../../utils/client'
import { cleanAndTransformBlocks } from '../../utils/cleanAndTransformBlocks';
import AuthorAndSmLarge from '../../components/WP/AuthorAndSmLarge'



import Page from '@/components/page'

import { AuthorPageQ } from '../../utils/WPQuerys'
import { gql } from '@apollo/client'
import  BlockRenderer  from '../../components/BlockRenderer/BlockRenderer';


const Membru = ({ blocks, author, featuredImage, other }) => {
  const router = useRouter();
  console.log(other)
  return (
    <>
      <Page>
        <NextSeo
          canonical={`${process.env.DOMAIN}${router.pathname}`}
          title="Alexandru - Fondatorul Agentiei Marweb.ro"
        />

        <section className={tw('min-h-screen block')}>
          <AuthorAndSmLarge featuredImage={featuredImage} author={author} />
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
        featuredImage: data.nodeByUri.featuredImage || null,
        author:data.nodeByUri.author,
       other:data,
        blocks,
      },
    };
}


