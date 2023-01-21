import { createContext, useContext, useState, useEffect } from 'react';
import { tw } from 'twind';
import Image from 'next/image';
import AutorWidget from '@/components/Autor';


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
          className={tw(
            'bg-gray-800 z-0 max-h-screen text-white bg-slate-900 relative min-h-[400px] flex  justify-center items-center',
          )}
        >
          <Image
            alt={featuredImage.node.altText || 'Cover'}
            src={featuredImage.node.sourceUrl}
            layout="fill"
            width={featuredImage.node.width || 2000}
            height={featuredImage.node.width || 1000}
            objectFit="cover"
            className={tw('bg-gray-800 mix-blend-soft-light z-0')}
          />

          <h1 className={tw('lg:text-4xl md:text-3xl sm:text-2xl z-1')}>{title}</h1>
        </div>
        <>
          <div className={tw(' md:grid md:grid-cols-12 gap-3	')}>
            <main className={tw('col-span-8 m-5')}>{children}</main>
            <aside className={tw('flex flex-col justify-top m-4 border-3 items-center container md:col-span-3')}>
              <div>
                <AutorWidget author={author} />
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
};
