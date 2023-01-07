import { createContext, useContext } from 'react';
import dynamic from 'next/dynamic';
import { tw } from 'twind';


import Head from 'next/head';
import Navigation from '@/components/navigation';

import Footer from '@/components/footer';


const Page = dynamic(() => import('@/components/page'));
const BlogPostContext = createContext();

export const PostWrapper = ({ value, children }) => {
  return (
    <BlogPostContext.Provider value={value}>
      <Navigation />
        <>
        <div className={tw('grid grid-cols-12 gap3	')}>
          <aside className={tw('col-span-2')}>test </aside>
          <main className={tw('col-span-8')}>{children}</main>

          <aside className={tw('col-span-2')}>test </aside>
        </div>
        </>
        
      
    </BlogPostContext.Provider>
  );
};

export const useBlogPostContext = () => {
  return useContext(BlogPostContext);
};
