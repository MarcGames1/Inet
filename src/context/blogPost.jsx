import { createContext, useContext, useState, useEffect } from 'react';
import { tw } from 'twind';
import Image from "next/image";
import AutorWidget from '../components/Autor';


const BlogPostContext = createContext();

export const PostWrapper = ({ value, children }) => {
  
 const [author, setAutor] = useState(value?.author)
  

 useEffect(() => {
   setAutor(value.author);
 }, []);
  console.log(value)
  const {featuredImage, title} = value 
 

  
  return (
    <>
      <BlogPostContext.Provider value={value}>
        <div
          className={tw('bg-purple-900 z-1 max-h-screen text-white  min-h-[200px] flex  justify-center items-center')}
        >
          <Image
            alt={featuredImage.node.altText || 'Cover'}
            src={featuredImage.node.sourceUrl}
            width={featuredImage.node.width || 500}
            height={featuredImage.node.width || 200}
            className={tw('relative mix-blend-overlay opacity-50 z-0 ')}
          />

          <h1 className={tw('m-2 absolute text-center lg:text-4xl text-4xl z-2')}>{title}</h1>
        </div>
        <>
          <div className={tw(' md:grid md:grid-cols-12 gap-3	')}>
            <main className={tw('col-span-8 m-5')}>{children}</main>
            <aside className={tw('flex flex-col justify-top m-4 border-3 items-center container md:col-span-3')}>
              <div className={tw('')}>
                <AutorWidget author={author} />
              </div>
              <div className={tw('md:block sm:block lg:hidden')}>
                <MobileBanner />
              </div>
              <div className={tw('lg:block hidden md:hidden sm:hidden')}>
                <AsideBanner />
              </div>
            </aside>
          </div>
        </>
      </BlogPostContext.Provider>
    </>
  );
};

export const useBlogPostContext = () => {
  return useContext(BlogPostContext);
}



const MobileBanner = () =>{
  return (
    <>
      <a href="https://seranking.com/website-audit.html?ga=2096471&source=banner">
        <Image
          loading="lazy"
          src="https://promo.seranking.com/promo-banners/27078db0544a1ab8122a16cda3bc1266.png"
          width="728"
          height="90"
        />
      </a>
    </>
  );
}

const AsideBanner = () => {
  return (
    <>
      <a href="https://seranking.com/website-audit.html?ga=2096471&source=banner">
        <Image
          src="https://promo.seranking.com/promo-banners/c4dcf6da7293841fb8b049c011f1d7b5.png"
          width="300"
          height="600"
          loading='lazy'
        />
      </a>
    </>
  );
};

