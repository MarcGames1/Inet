import { createContext, useContext } from 'react';
import dynamic from 'next/dynamic';
import { tw } from 'twind';

import Image from 'next/image';
import Head from 'next/head';
import Navigation from '@/components/navigation';

import Footer from '@/components/footer';
import Link from 'next/link';

const Page = dynamic(() => import('@/components/page'));
const BlogPostContext = createContext();

export const PostWrapper = ({ value, children }) => {
  console.log('Vluw', value.author?.node?.dateSuplimentareAutor);



 const urlAutor = '/echipa/alexandru-marcu' 
 const pozaAutor = {
   altText: value.author?.node?.dateSuplimentareAutor?.authorpic?.altText,
   url: value.author?.node?.dateSuplimentareAutor?.authorpic?.mediaItemUrl,
 };
  const { descriereAutor, functie, instagram, tikTok, youtube } = value.author?.node?.dateSuplimentareAutor;
  const author = value.author || undefined;
  return (
    <BlogPostContext.Provider value={value}>
      <Navigation />
      <>
        <div className={tw('grid grid-cols-12 gap3	')}>
          <aside className={tw('col-span-2')}>test </aside>
          <main className={tw('col-span-8')}>{children}</main>

          <aside className={tw('container col-span-2')}>
            <div className={tw('m-5')}>
              <Link href={urlAutor}>
              <a>
              <Image width={300} height={300} src={pozaAutor.url} />
              </a>
              </Link>

            </div>
            <div className={tw('text-center m-5')}>
              <h5>
                Articol revizuit de{' '}
                <Link href={urlAutor}><a>
                <span>
                  {author?.node?.lastName} {author?.node?.firstName}
                </span>
                  </a></Link>
                {" "}<span className={tw('text-bold')}>{functie}</span>
              </h5>
            </div>
          </aside>
        </div>
      </>
    </BlogPostContext.Provider>
  );
};

export const useBlogPostContext = () => {
  return useContext(BlogPostContext);
};
