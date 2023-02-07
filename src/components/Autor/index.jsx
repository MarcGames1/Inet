import React from 'react'
import { tw } from 'twind';
import Link from 'next/link';
import Image from "next/image";
import { SocialIcon } from 'react-social-icons';

const AutorWidget = ( {author} ) => {
 const urlAutor = '/echipa/alexandru-marcu/'; 
const pozaAutor = {
  alt: author?.node?.otherAuthorData?.pozaProfil?.altText,
  url: author?.node?.otherAuthorData?.pozaProfil?.link,
};
const functie = author?.node?.otherAuthorData?.functie

  return (
    <div className={tw('')}>
       <div className={tw('items-center flex justify-center m-5')}>
         <Link href={urlAutor}>

           <Image width={300} height={300} src={pozaAutor?.url} alt={pozaAutor?.altText} />

         </Link>
       </div>
       <div className={tw('text-center m-5')}>
         <h5>
           Articol revizuit de{' '}
           <Link href={urlAutor}>

             <span>
               {author?.node?.lastName} {author?.node?.firstName}
             </span>

           </Link>{' '}
           <span className={tw('text-center text-bold')}>{functie}</span>
         </h5>
         <div className={tw('flex  justify-center m-3 gap-3 w-full')}>
           <SocialIcon url={author?.node?.otherAuthorData?.facebook} />
           <SocialIcon url={author?.node?.otherAuthorData?.instagram} />
           <SocialIcon url={author?.node?.otherAuthorData?.linkedin} />
           <SocialIcon url={author?.node?.otherAuthorData?.youtube} />
           <SocialIcon url={author?.node?.otherAuthorData?.tikTok} />
         </div>
       </div>
    </div>
  );
};

export default AutorWidget;