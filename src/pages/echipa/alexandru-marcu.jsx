import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { tw } from 'twind'
import { NextSeo } from 'next-seo'
import client from '../../utils/client'
import { cleanAndTransformBlocks } from '../../utils/cleanAndTransformBlocks';
import AuthorAndSmLarge from '../../components/WP/AuthorAndSmLarge'
import { SocialIcon } from 'react-social-icons';


import Page from '@/components/page'

import { AuthorPageQ } from '../../utils/WPQuerys'
import { gql } from '@apollo/client'
import  BlockRenderer  from '../../components/BlockRenderer/BlockRenderer';


const Membru = ({
  firstName,
  lastName,
  email,
  functie,
  pozaProfil,
  tikTok,
  facebook,
  youtube,
  instagram,
  linkedin,
  descriereAutor,
}) => {
  const router = useRouter();
  
console.log(pozaProfil)

  return (
    <>
      <Page>
        <NextSeo
          canonical={`${process.env.DOMAIN}${router.pathname}`}
          title={`${lastName} ${firstName} ${functie} MarWeb`}
          description={`'Afla mai multe despre '${lastName} ${firstName} ${functie}`}
        />

        <section className={tw('min-h-screen block')}>
          <AuthorAndSmLarge pozaProfil={pozaProfil} firstName={firstName} lastName={lastName} />

          <div className={tw('flex  justify-center m-3 gap-3 w-full')}>
            <SocialIcon url={facebook} />
            <SocialIcon url={instagram} />
            <SocialIcon url={linkedin} />
            <SocialIcon url={youtube} />
            <SocialIcon url={tikTok} />
          </div>
          <div className={tw(`w-1/3 m-auto`)}>
            <div className={tw('leading-9')} dangerouslySetInnerHTML={{ __html: descriereAutor }}></div>
          </div>
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
    const {
      firstName,
      lastName,
      email,
     
     
      
    } = data.nodeByUri;
    const {
      descriereAutor,
      functie,
      pozaProfil,
      tikTok,
      facebook,
      youtube,
      instagram,
      linkedin,
    } = data.nodeByUri.otherAuthorData;

    return {
      props: {
        firstName,
        lastName,
        email,
        functie,
        pozaProfil,
        tikTok,
        facebook,
        youtube,
        instagram,
        linkedin,
        descriereAutor,
      },
    };
}


