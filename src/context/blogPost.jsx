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
  
  
  
  
  const {featuredImage, title} = value 
  console.log('FEATURED IMAGE', featuredImage);

 const urlAutor = '/echipa/alexandru-marcu' 
 const pozaAutor = {
   altText: value.author?.node?.dateSuplimentareAutor?.authorpic?.altText,
   url: value.author?.node?.dateSuplimentareAutor?.authorpic?.mediaItemUrl,
 };
  const { descriereAutor, functie, instagram, tikTok, youtube } =
    value.author &&
    value.author.node &&
    value.author.node.dateSuplimentareAutor &&
    value.author.node.dateSuplimentareAutor.authorpic &&
    value.author.node.dateSuplimentareAutor.authorpic.altText;
  const author = value.author || undefined;
  return (
    <>
      <Navigation />
    <BlogPostContext.Provider value={value}>
      <div
        className={tw(
          'z-0 max-h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center',
          )}
          >
        {
          <Image
          alt={featuredImage.node.altText || 'Cover'}
          src={featuredImage.node.sourceUrl}
          layout="fill"
          objectFit="cover"
          className={tw('mix-blend-soft-light z-0')}
          />
          
          
        }
        <h1 className={tw('max-w-5xl')}>{title}</h1>
      </div>
      <>
        <div className={tw(' md:grid md:grid-cols-12 gap-3	')}>
          <aside className={tw('col-span-1')}>test </aside>
          <main className={tw('col-span-8')}>{children}</main>

          <aside className={tw('flex flex-col justify-center  items-center container md:col-span-3')}>
            <div className={tw('items-center  m-5')}>
              <Link href={urlAutor}>
                <a>
                  <Image width={300} height={300} src={pozaAutor.url} alt={pozaAutor.altText} />
                </a>
              </Link>
            </div>
            <div className={tw('text-center m-5')}>
              <h5>
                Articol revizuit de{' '}
                <Link href={urlAutor}>
                  <a>
                    <span>
                      {author?.node?.lastName} {author?.node?.firstName}
                    </span>
                  </a>
                </Link>{' '}
                <span className={tw('text-bold')}>{functie}</span>
              </h5>
            </div>
          </aside>
        </div>
      </>
    </BlogPostContext.Provider>
    <Footer />
        </>
  );
};

export const useBlogPostContext = () => {
  return useContext(BlogPostContext);
};
