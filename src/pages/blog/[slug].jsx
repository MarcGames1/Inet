import axios from "axios";
import { useRouter } from 'next/router';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { typography, colors } from '@/../js/utils';
import Button from '@/components/button';
import React from 'react';
import { tw, css } from 'twind';
import Page from '@/components/page';
import { NextSeo } from "next-seo";



const SERVER = process.env.NEXT_PUBLIC_API;


export async function getStaticPaths() {
    try{
      const { data } = await axios.get(`${process.env.API}posts`);
      
      
      
      
      
      return {
        paths: data.map((blog) => {
          console.log(blog.slug)
          return { params: { slug: blog.slug } };
        }),
        fallback: 'blocking', // can also be true or 'blocking'
      };
    } catch{
      return {
        paths: [],
        fallback: 'blocking',
      };
    }
}

export async function getStaticProps(context) {
   try {
  const {slug} = context.params 
    const {data} = await axios.get(`${process.env.API}single-post/${slug}`);
    

  return data
    ? {
        props: { ...data }, // will be passed to the page component as props
        revalidate: 86400,
      }
    : { notFound: true };
}   catch (e) {
    console.log(e);
    return { notFound: true };
  }
}



export default function SingleBlog (blog) {


const updatedAt = new Date(blog.updatedAt);
    const router = useRouter()
      const imagePath = blog.author.image.join('/');

      
    return (
      <>
        <NextSeo
          title={`${blog.title} • IwebAgency.ro`}
          description={`${blog.excerpt}  • IwebAgency.ro`}
          canonical={`https://iwebagency.ro/${router.asPath}`}
        />
        <Page>
          <div className={tw('grid grid-cols-9 ')}>
            <div className={tw('grid col-start-1 col-end-3 bg-indigo-50 ')}></div>
            <main className={tw('grid col-start-3 col-end-8 ')}>
              <h1 className={typography.heading.default}>{blog.title}</h1>
              <div className={tw('prose lg:prose-xl')} dangerouslySetInnerHTML={{ __html: blog.content }} />
            </main>
            <aside className={tw('grid  col-start-8 col-end-10 p-5 bg-indigo-50 ')}>
              {' '}
              <div
                className={tw(
                  ' rounded-full grid w-64 h-64 justify-self-center relative rounded-full w-64 h-64 justify-self-center',
                )}
              >
                <Image
                  className={tw('rounded-full')}
                  src={`${SERVER}${imagePath}`}
                  objectFit={'cover'}
                  layout={'fill'}
                />
              </div>{' '}
              <div className={tw('sm:leading-relaxed md:leading-9')}>
                Articol revizuit de <br />
                <Link rel="author" href={`/echipa/${blog.author.slug}`}>
                  <a className={typography.link.default}>
                    <span className={tw('font-semibold')}>
                      {blog.author.nume} {blog.author.prenume}
                    </span>
                  </a>
                </Link>
                <br />
                <span className={`${tw('font-bold ')}`}> {blog.author.functie}</span>
                <br />
                <span className={tw('text-gray-500')}>Ultima actualizare: {updatedAt.toLocaleDateString('ro-RO')}</span>
              </div>
            </aside>
          </div>
        </Page>

        <pre>{JSON.stringify(blog, null, 3)}</pre>
      </>
    );
}